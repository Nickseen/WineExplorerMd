import { Router } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../middleware/auth.js";
import type { Role } from "../types.js";

const router = Router();
const VALID_ROLES: Role[] = ["ADMIN", "WRITER", "VISITOR"];
const EXPIRES_IN = "24h";

/**
 * @openapi
 * /token:
 *   post:
 *     summary: Obtain a JWT token
 *     description: |
 *       Returns a signed JWT for authenticating subsequent requests.
 *       Token expires in **1 minute** (demo setting).
 *       - **VISITOR** — read-only access
 *       - **WRITER** — can create/update entities and submit wines for review
 *       - **ADMIN** — full access including moderation
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [role]
 *             properties:
 *               role:
 *                 type: string
 *                 enum: [ADMIN, WRITER, VISITOR]
 *                 example: ADMIN
 *     responses:
 *       200:
 *         description: JWT token issued successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 role:
 *                   type: string
 *                 expiresIn:
 *                   type: string
 *                   example: 1m
 *       400:
 *         description: Invalid or missing role
 *   get:
 *     summary: Obtain a JWT token (GET variant)
 *     description: Convenience GET endpoint — pass `role` as a query parameter.
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *           enum: [ADMIN, WRITER, VISITOR]
 *         required: true
 *     responses:
 *       200:
 *         description: JWT token
 *       400:
 *         description: Invalid role
 */
router.post("/", (req, res) => {
  const { role } = req.body as { role?: Role };

  if (!role || !VALID_ROLES.includes(role)) {
    res.status(400).json({ error: `role must be one of: ${VALID_ROLES.join(", ")}` });
    return;
  }

  const token = jwt.sign({ role }, JWT_SECRET, { expiresIn: EXPIRES_IN });
  res.json({ token, role, expiresIn: EXPIRES_IN });
});

router.get("/", (req, res) => {
  const role = (req.query.role as Role) ?? "VISITOR";

  if (!VALID_ROLES.includes(role)) {
    res.status(400).json({ error: `role must be one of: ${VALID_ROLES.join(", ")}` });
    return;
  }

  const token = jwt.sign({ role }, JWT_SECRET, { expiresIn: EXPIRES_IN });
  res.json({ token, role, expiresIn: EXPIRES_IN });
});

export default router;
