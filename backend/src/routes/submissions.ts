import { Router } from "express";
import crypto from "crypto";
import { requireRole, verifyToken } from "../middleware/auth.js";
import { db } from "../store/store.js";
import { commitFile } from "../github/commit.js";
import type { ProducerSubmission, SubmissionStatus, Wine } from "../types.js";

const router = Router();

const VALID_STATUSES: SubmissionStatus[] = ["pending", "approved", "rejected", "needs_changes"];

/**
 * @openapi
 * /submissions:
 *   post:
 *     summary: Submit a wine for review
 *     description: |
 *       Anyone with a WRITER or ADMIN token can submit a wine for moderation.
 *       The submission is stored with status `pending` until an ADMIN reviews it.
 *     tags:
 *       - Submissions
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubmissionInput'
 *     responses:
 *       201:
 *         description: Submission created
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Requires WRITER or ADMIN
 */
router.post("/", verifyToken, requireRole("WRITER", "ADMIN"), (req, res) => {
  const body = req.body as Partial<ProducerSubmission>;
  const now = Date.now();
  const submission: ProducerSubmission = {
    id: `submission-${crypto.randomUUID()}`,
    producerName: body.producerName ?? "",
    contactInfo: body.contactInfo ?? "",
    wineName: body.wineName ?? "",
    wineType: body.wineType ?? "red",
    grapeVariety: body.grapeVariety ?? "",
    year: body.year ?? new Date().getFullYear(),
    price: body.price ?? 0,
    region: body.region ?? "Other",
    sweetness: body.sweetness ?? "dry",
    body: body.body ?? "medium",
    alcoholPercent: body.alcoholPercent ?? 12,
    aromaNotes: body.aromaNotes ?? [],
    suggestedPairingTags: body.suggestedPairingTags ?? [],
    productionMethod: body.productionMethod ?? "",
    status: "pending",
    reviewerComment: "",
    createdAt: now,
    updatedAt: now,
  };
  db.submissions.put(submission);

  // GitOps: commit both store files so Railway redeploy (triggered by this commit) keeps the submission
  const allSubmissions = db.submissions.getAll();
  commitFile(
    "data/store.json",
    JSON.stringify({ submissions: allSubmissions, approvedWines: db.wines.getAll().filter(w => w.sourceType === "producer-approved" || w.sourceType === "user") }, null, 2),
    `feat(submission): new submission "${submission.wineName}" by ${submission.producerName}`
  ).catch((err) => console.error("[github] commitFile failed:", err));
  // backend/data/store.json must be committed too, otherwise Railway redeploy
  // triggered by the above commit will reset the in-memory store without this submission
  commitFile(
    "backend/data/store.json",
    JSON.stringify({ wines: db.wines.getAll(), wineries: db.wineries.getAll(), pairings: db.pairings.getAll(), submissions: allSubmissions }, null, 2),
    `chore(store): sync backend store after new submission "${submission.wineName}"`
  ).catch((err) => console.error("[github] commitFile backend failed:", err));

  res.status(201).json(submission);
});

/**
 * @openapi
 * /submissions:
 *   get:
 *     summary: List all submissions (ADMIN only)
 *     tags:
 *       - Submissions
 *     security:
 *       - bearerAuth: []
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
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, approved, rejected, needs_changes]
 *     responses:
 *       200:
 *         description: Paginated submission list
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Requires ADMIN
 */
router.get("/", verifyToken, requireRole("ADMIN"), (req, res) => {
  const limit = Math.min(Math.max(parseInt(req.query.limit as string) || 20, 1), 100);
  const offset = Math.max(parseInt(req.query.offset as string) || 0, 0);
  const statusFilter = req.query.status as SubmissionStatus | undefined;

  let all = db.submissions.getAll();
  if (statusFilter && VALID_STATUSES.includes(statusFilter)) {
    all = all.filter((s) => s.status === statusFilter);
  }

  res.json({ total: all.length, limit, offset, data: all.slice(offset, offset + limit) });
});

/**
 * @openapi
 * /submissions/{id}:
 *   get:
 *     summary: Get a submission by ID (ADMIN only)
 *     tags:
 *       - Submissions
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
 *         description: Submission object
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Requires ADMIN
 *       404:
 *         description: Not found
 */
router.get("/:id", verifyToken, requireRole("WRITER", "ADMIN"), (req, res) => {
  const submission = db.submissions.get(req.params.id);
  if (!submission) { res.status(404).json({ error: "Submission not found" }); return; }
  res.json(submission);
});

/**
 * @openapi
 * /submissions/{id}/status:
 *   patch:
 *     summary: Update submission status (ADMIN only)
 *     description: |
 *       When status is set to `approved`, a new wine entry is automatically created
 *       in the wine catalog with `sourceType: producer-approved`.
 *     tags:
 *       - Submissions
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
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, approved, rejected, needs_changes]
 *               reviewerComment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated submission (and created wine if approved)
 *       400:
 *         description: Invalid status
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Requires ADMIN
 *       404:
 *         description: Submission not found
 */
router.patch("/:id/status", verifyToken, requireRole("ADMIN"), (req, res) => {
  const submission = db.submissions.get(req.params.id);
  if (!submission) { res.status(404).json({ error: "Submission not found" }); return; }

  const { status, reviewerComment = "" } = req.body as { status?: SubmissionStatus; reviewerComment?: string };

  if (!status || !VALID_STATUSES.includes(status)) {
    res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(", ")}` });
    return;
  }

  const updatedSubmission: ProducerSubmission = {
    ...submission,
    status,
    reviewerComment,
    updatedAt: Date.now(),
  };
  db.submissions.put(updatedSubmission);

  let createdWine: Wine | null = null;

  if (status === "approved") {
    const existing = db.wines.getAll().find(
      (w) =>
        w.name.trim().toLowerCase() === submission.wineName.trim().toLowerCase() &&
        w.year === submission.year
    );

    if (!existing) {
      const now = Date.now();
      createdWine = {
        id: `wine-${crypto.randomUUID()}`,
        wineryId: null,
        name: submission.wineName,
        type: submission.wineType,
        grapeVariety: `${submission.grapeVariety} (${submission.producerName})`,
        year: submission.year,
        price: submission.price ?? 0,
        region: submission.region,
        body: submission.body,
        sweetness: submission.sweetness,
        aromaNotes: submission.aromaNotes,
        servingTemp: "10-16 C",
        alcoholPercent: submission.alcoholPercent,
        pairingTags: submission.suggestedPairingTags,
        liked: false,
        sourceType: "producer-approved",
        createdAt: now,
        updatedAt: now,
      };
      db.wines.put(createdWine);
    }
  }

  // GitOps: commit updated data so the rebuild picks it up
  const allSubmissions = db.submissions.getAll();
  const approvedWines = db.wines.getAll().filter(w => w.sourceType === "producer-approved" || w.sourceType === "user");
  const commitMsg = status === "approved"
    ? `feat(wine): approve "${submission.wineName}" by ${submission.producerName}`
    : `chore(submission): mark "${submission.wineName}" as ${status}`;
  commitFile(
    "data/store.json",
    JSON.stringify({ submissions: allSubmissions, approvedWines }, null, 2),
    commitMsg
  ).catch((err) => console.error("[github] commitFile failed:", err));
  // Also sync backend/data/store.json so Railway keeps wines after redeploy
  commitFile(
    "backend/data/store.json",
    JSON.stringify({ wines: db.wines.getAll(), wineries: db.wineries.getAll(), pairings: db.pairings.getAll(), submissions: allSubmissions }, null, 2),
    `chore(store): sync backend store after ${status} "${submission.wineName}"`
  ).catch((err) => console.error("[github] commitFile backend failed:", err));

  res.json({ submission: updatedSubmission, createdWine });
});

/**
 * @openapi
 * /submissions/{id}:
 *   delete:
 *     summary: Delete a submission (ADMIN only)
 *     tags:
 *       - Submissions
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
  const existing = db.submissions.get(req.params.id);
  if (!existing) { res.status(404).json({ error: "Submission not found" }); return; }
  db.submissions.delete(req.params.id);
  res.status(204).send();
});

export default router;
