import type { ProducerSubmission, SubmissionStatus, Wine } from "./types";
import type { SubmissionInput, WineInput } from "../features/useAppData";

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3001/api";

// ── Auth ─────────────────────────────────────────────────────────────────────

export async function fetchToken(role: "ADMIN" | "WRITER" | "VISITOR"): Promise<string> {
  const res = await fetch(`${API_BASE}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role }),
  });
  if (!res.ok) throw new Error("Failed to obtain token");
  const data = (await res.json()) as { token: string };
  return data.token;
}

// ── Submissions ───────────────────────────────────────────────────────────────

export async function apiCreateSubmission(
  input: SubmissionInput,
  token: string
): Promise<ProducerSubmission> {
  const res = await fetch(`${API_BASE}/submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input),
  });

  if (res.status === 401) throw new Error("unauthorized");
  if (res.status === 403) throw new Error("forbidden");
  if (!res.ok) {
    const body = (await res.json()) as { error?: string };
    throw new Error(body.error ?? "Submission failed");
  }
  return res.json() as Promise<ProducerSubmission>;
}

export async function apiGetSubmissions(
  token: string,
  opts: { limit?: number; offset?: number; status?: string } = {}
): Promise<{ total: number; data: ProducerSubmission[] }> {
  const params = new URLSearchParams();
  if (opts.limit !== undefined) params.set("limit", String(opts.limit));
  if (opts.offset !== undefined) params.set("offset", String(opts.offset));
  if (opts.status) params.set("status", opts.status);

  const res = await fetch(`${API_BASE}/submissions?${params.toString()}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (res.status === 401) throw new Error("unauthorized");
  if (res.status === 403) throw new Error("forbidden");
  if (!res.ok) throw new Error("Failed to load submissions");
  return res.json() as Promise<{ total: number; data: ProducerSubmission[] }>;
}

export async function apiUpdateSubmissionStatus(
  id: string,
  status: SubmissionStatus,
  reviewerComment: string,
  token: string
): Promise<{ submission: ProducerSubmission }> {
  const res = await fetch(`${API_BASE}/submissions/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status, reviewerComment }),
  });

  if (res.status === 401) throw new Error("unauthorized");
  if (res.status === 403) throw new Error("forbidden");
  if (!res.ok) throw new Error("Failed to update submission status");
  return res.json() as Promise<{ submission: ProducerSubmission }>;
}

export async function apiDeleteSubmission(id: string, token: string): Promise<void> {
  const res = await fetch(`${API_BASE}/submissions/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (res.status === 401) throw new Error("unauthorized");
  if (res.status === 403) throw new Error("forbidden");
  if (!res.ok) throw new Error("Failed to delete submission");
}

// ── Wines ─────────────────────────────────────────────────────────────────────

export async function apiFetchAllWines(): Promise<Wine[]> {
  const results: Wine[] = [];
  let offset = 0;
  const limit = 100;
  while (true) {
    const res = await fetch(`${API_BASE}/wines?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error("Failed to fetch wines");
    const payload = (await res.json()) as { total: number; data: Wine[] };
    results.push(...payload.data);
    if (results.length >= payload.total) break;
    offset += limit;
  }
  return results;
}

export async function apiDeleteWines(ids: string[], token: string): Promise<void> {
  const res = await fetch(`${API_BASE}/wines/bulk-delete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ids }),
  });
  if (res.status === 401) throw new Error("unauthorized");
  if (res.status === 403) throw new Error("forbidden");
  if (!res.ok) throw new Error("Failed to delete wines");
}

export async function apiAddWine(input: WineInput, token: string): Promise<Wine> {
  const res = await fetch(`${API_BASE}/wines`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input),
  });

  if (res.status === 401) throw new Error("unauthorized");
  if (res.status === 403) throw new Error("forbidden");
  if (!res.ok) throw new Error("Failed to add wine");
  return res.json() as Promise<Wine>;
}
