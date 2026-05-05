import { Router } from "express";
import crypto from "crypto";
import { requireRole, verifyToken } from "../middleware/auth.js";
import { db } from "../store/store.js";
import type { PairingSection } from "../types.js";

const router = Router();

/**
 * @openapi
 * /pairings:
 *   get:
 *     summary: List pairing sections
 *     tags:
 *       - Pairings
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
 *         description: Paginated pairings list
 */
router.get("/", (_req, res) => {
  const limit = Math.min(Math.max(parseInt(_req.query.limit as string) || 20, 1), 100);
  const offset = Math.max(parseInt(_req.query.offset as string) || 0, 0);
  const all = db.pairings.getAll();
  res.json({ total: all.length, limit, offset, data: all.slice(offset, offset + limit) });
});

/**
 * @openapi
 * /pairings/{id}:
 *   get:
 *     summary: Get a pairing section by ID
 *     tags:
 *       - Pairings
 *     security: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: PairingSection object
 *       404:
 *         description: Not found
 */
router.get("/:id", (req, res) => {
  const pairing = db.pairings.get(req.params.id);
  if (!pairing) { res.status(404).json({ error: "Pairing section not found" }); return; }
  res.json(pairing);
});

/**
 * @openapi
 * /pairings:
 *   post:
 *     summary: Create a pairing section
 *     tags:
 *       - Pairings
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
  const body = req.body as Partial<PairingSection>;
  const now = Date.now();
  const allExisting = db.pairings.getAll();
  const maxOrder = allExisting.length > 0 ? Math.max(...allExisting.map((p) => p.order)) : 0;

  const pairing: PairingSection = {
    id: `pairing-${crypto.randomUUID()}`,
    title: body.title ?? "",
    description: body.description ?? "",
    recommendedWineIds: body.recommendedWineIds ?? [],
    colorToken: body.colorToken ?? "blue",
    iconKey: body.iconKey ?? "wine",
    order: body.order ?? maxOrder + 1,
    pinned: false,
    createdAt: now,
    updatedAt: now,
  };
  db.pairings.put(pairing);
  res.status(201).json(pairing);
});

/**
 * @openapi
 * /pairings/{id}:
 *   put:
 *     summary: Update a pairing section
 *     tags:
 *       - Pairings
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
  const existing = db.pairings.get(req.params.id);
  if (!existing) { res.status(404).json({ error: "Pairing section not found" }); return; }
  const updated: PairingSection = { ...existing, ...(req.body as Partial<PairingSection>), id: req.params.id, updatedAt: Date.now() };
  db.pairings.put(updated);
  res.json(updated);
});

/**
 * @openapi
 * /pairings/{id}:
 *   delete:
 *     summary: Delete a pairing section
 *     tags:
 *       - Pairings
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
  const existing = db.pairings.get(req.params.id);
  if (!existing) { res.status(404).json({ error: "Pairing section not found" }); return; }
  db.pairings.delete(req.params.id);
  res.status(204).send();
});

export default router;
