import { Router } from "express";
import crypto from "crypto";
import { requireRole, verifyToken } from "../middleware/auth.js";
import { db } from "../store/store.js";
import type { Wine } from "../types.js";

const router = Router();

function parsePagination(query: Record<string, unknown>) {
  const limit = Math.min(Math.max(parseInt(query.limit as string) || 20, 1), 100);
  const offset = Math.max(parseInt(query.offset as string) || 0, 0);
  return { limit, offset };
}

/**
 * @openapi
 * /wines:
 *   get:
 *     summary: List wines
 *     description: Returns paginated list of all wines. No authentication required.
 *     tags:
 *       - Wines
 *     security: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *           maximum: 100
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: Paginated wine list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 offset:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Wine'
 */
router.get("/", (_req, res) => {
  const { limit, offset } = parsePagination(_req.query as Record<string, unknown>);
  const all = db.wines.getAll();
  res.json({ total: all.length, limit, offset, data: all.slice(offset, offset + limit) });
});

/**
 * @openapi
 * /wines/{id}:
 *   get:
 *     summary: Get a wine by ID
 *     tags:
 *       - Wines
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Wine object
 *       404:
 *         description: Not found
 */
router.get("/:id", (req, res) => {
  const wine = db.wines.get(req.params.id);
  if (!wine) { res.status(404).json({ error: "Wine not found" }); return; }
  res.json(wine);
});

/**
 * @openapi
 * /wines:
 *   post:
 *     summary: Create a wine
 *     tags:
 *       - Wines
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WineInput'
 *     responses:
 *       201:
 *         description: Wine created
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden (requires WRITER or ADMIN)
 */
router.post("/", verifyToken, requireRole("WRITER", "ADMIN"), (req, res) => {
  const body = req.body as Partial<Wine>;
  const now = Date.now();
  const wine: Wine = {
    id: `wine-${crypto.randomUUID()}`,
    wineryId: body.wineryId ?? null,
    name: body.name ?? "",
    type: body.type ?? "red",
    grapeVariety: body.grapeVariety ?? "",
    year: body.year ?? new Date().getFullYear(),
    price: body.price ?? 0,
    region: body.region ?? "Other",
    body: body.body ?? "medium",
    sweetness: body.sweetness ?? "dry",
    aromaNotes: body.aromaNotes ?? [],
    servingTemp: body.servingTemp ?? "",
    alcoholPercent: body.alcoholPercent ?? 12,
    pairingTags: body.pairingTags ?? [],
    imagePath: body.imagePath,
    liked: false,
    sourceType: "user",
    createdAt: now,
    updatedAt: now,
  };
  db.wines.put(wine);
  res.status(201).json(wine);
});

/**
 * @openapi
 * /wines/{id}:
 *   put:
 *     summary: Update a wine
 *     tags:
 *       - Wines
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WineInput'
 *     responses:
 *       200:
 *         description: Updated wine
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not found
 */
router.put("/:id", verifyToken, requireRole("WRITER", "ADMIN"), (req, res) => {
  const existing = db.wines.get(req.params.id);
  if (!existing) { res.status(404).json({ error: "Wine not found" }); return; }
  const updated: Wine = { ...existing, ...(req.body as Partial<Wine>), id: req.params.id, updatedAt: Date.now() };
  db.wines.put(updated);
  res.json(updated);
});

/**
 * @openapi
 * /wines/{id}:
 *   delete:
 *     summary: Delete a wine
 *     tags:
 *       - Wines
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
 *         description: Forbidden (requires ADMIN)
 *       404:
 *         description: Not found
 */
router.delete("/:id", verifyToken, requireRole("ADMIN"), (req, res) => {
  const existing = db.wines.get(req.params.id);
  if (!existing) { res.status(404).json({ error: "Wine not found" }); return; }
  db.wines.delete(req.params.id);
  res.status(204).send();
});

export default router;
