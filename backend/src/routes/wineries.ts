import { Router } from "express";
import crypto from "crypto";
import { requireRole, verifyToken } from "../middleware/auth.js";
import { db } from "../store/store.js";
import { commitFile } from "../github/commit.js";
import type { Winery } from "../types.js";

const router = Router();

function parsePagination(query: Record<string, unknown>) {
  const limit = Math.min(Math.max(parseInt(query.limit as string) || 20, 1), 100);
  const offset = Math.max(parseInt(query.offset as string) || 0, 0);
  return { limit, offset };
}

/**
 * @openapi
 * /wineries:
 *   get:
 *     summary: List wineries
 *     tags:
 *       - Wineries
 *     security: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: Paginated winery list
 */
router.get("/", (_req, res) => {
  const { limit, offset } = parsePagination(_req.query as Record<string, unknown>);
  const all = db.wineries.getAll();
  res.json({ total: all.length, limit, offset, data: all.slice(offset, offset + limit) });
});

/**
 * @openapi
 * /wineries/{id}:
 *   get:
 *     summary: Get a winery by ID
 *     tags:
 *       - Wineries
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Winery object
 *       404:
 *         description: Not found
 */
router.get("/:id", (req, res) => {
  const winery = db.wineries.get(req.params.id);
  if (!winery) { res.status(404).json({ error: "Winery not found" }); return; }
  res.json(winery);
});

/**
 * @openapi
 * /wineries:
 *   post:
 *     summary: Create a winery
 *     tags:
 *       - Wineries
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Created
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Requires WRITER or ADMIN
 */
router.post("/", verifyToken, requireRole("WRITER", "ADMIN"), (req, res) => {
  const body = req.body as Partial<Winery>;
  const now = Date.now();
  const winery: Winery = {
    id: `winery-${crypto.randomUUID()}`,
    name: body.name ?? "",
    region: body.region ?? "Other",
    city: body.city ?? "",
    description: body.description ?? "",
    priceLevel: body.priceLevel ?? "$",
    rating: body.rating ?? 0,
    liked: false,
    createdAt: now,
    updatedAt: now,
  };
  db.wineries.put(winery);
  // Persist to repo so Railway reloads wineries after redeploy
  commitFile(
    "backend/data/store.json",
    JSON.stringify({ wines: db.wines.getAll(), wineries: db.wineries.getAll(), pairings: db.pairings.getAll(), submissions: db.submissions.getAll() }, null, 2),
    `feat(winery): add "${winery.name}" by ADMIN`
  ).catch((err) => console.error("[github] commitFile winery failed:", err));
  res.status(201).json(winery);
});

/**
 * @openapi
 * /wineries/{id}:
 *   put:
 *     summary: Update a winery
 *     tags:
 *       - Wineries
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not found
 */
router.put("/:id", verifyToken, requireRole("WRITER", "ADMIN"), (req, res) => {
  const existing = db.wineries.get(req.params.id);
  if (!existing) { res.status(404).json({ error: "Winery not found" }); return; }
  const updated: Winery = { ...existing, ...(req.body as Partial<Winery>), id: req.params.id, updatedAt: Date.now() };
  db.wineries.put(updated);
  res.json(updated);
});

/**
 * @openapi
 * /wineries/{id}:
 *   delete:
 *     summary: Delete a winery
 *     tags:
 *       - Wineries
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deleted
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Requires ADMIN
 *       404:
 *         description: Not found
 */
router.delete("/:id", verifyToken, requireRole("ADMIN"), (req, res) => {
  const existing = db.wineries.get(req.params.id);
  if (!existing) { res.status(404).json({ error: "Winery not found" }); return; }
  db.wineries.delete(req.params.id);
  // Persist to repo
  commitFile(
    "backend/data/store.json",
    JSON.stringify({ wines: db.wines.getAll(), wineries: db.wineries.getAll(), pairings: db.pairings.getAll(), submissions: db.submissions.getAll() }, null, 2),
    `chore(winery): delete "${existing.name}" by ADMIN`
  ).catch((err) => console.error("[github] commitFile winery delete failed:", err));
  res.status(204).send();
});

export default router;
