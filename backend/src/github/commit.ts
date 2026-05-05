/**
 * Commits a single file to the GitHub repository using the Contents API.
 * Requires a GitHub PAT with `contents: write` permission stored in
 * the GITHUB_TOKEN environment variable.
 */

const OWNER = "Nickseen";
const REPO = "WineExplorerMd";
const BRANCH = "main";

const BASE = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

interface GitHubFileResponse {
  sha: string;
  content: string;
}

async function getSha(path: string, token: string): Promise<string | null> {
  const res = await fetch(`${BASE}/${path}?ref=${BRANCH}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub GET ${path}: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as GitHubFileResponse;
  return data.sha;
}

export async function commitFile(
  filePath: string,
  content: string,
  message: string,
  _retries = 2
): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    // Silently skip if no token configured (local dev without GitOps)
    return;
  }

  const sha = await getSha(filePath, token);
  const encoded = Buffer.from(content, "utf-8").toString("base64");

  const body: Record<string, unknown> = {
    message,
    content: encoded,
    branch: BRANCH,
  };
  if (sha) body.sha = sha;

  const res = await fetch(`${BASE}/${filePath}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status === 409 && _retries > 0) {
    // SHA mismatch — another commit landed between getSha() and PUT; retry with fresh SHA
    await new Promise((r) => setTimeout(r, 300));
    return commitFile(filePath, content, message, _retries - 1);
  }

  if (!res.ok) {
    throw new Error(`GitHub PUT ${filePath}: ${res.status} ${await res.text()}`);
  }
}
