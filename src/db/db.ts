import { DBSchema, openDB } from "idb";
import { seedPairings, seedWineries, seedWines } from "../lib/seed";
import { PairingSection, ProducerSubmission, Setting, Wine, Winery } from "../lib/types";

interface VinariaDB extends DBSchema {
  wineries: {
    key: string;
    value: Winery;
    indexes: { "by-region": string };
  };
  wines: {
    key: string;
    value: Wine;
    indexes: {
      "by-type": string;
      "by-region": string;
      "by-price": number;
      "by-liked": number;
      "by-source": string;
    };
  };
  pairingSections: {
    key: string;
    value: PairingSection;
    indexes: { "by-order": number };
  };
  producerSubmissions: {
    key: string;
    value: ProducerSubmission;
    indexes: { "by-status": string; "by-region": string };
  };
  settings: {
    key: string;
    value: Setting;
  };
}

const DB_NAME = "vinariaExplorerDB";
const SEED_VERSION = 3;

export async function getDb() {
  return openDB<VinariaDB>(DB_NAME, 1, {
    upgrade(db) {
      const wineries = db.createObjectStore("wineries", { keyPath: "id" });
      wineries.createIndex("by-region", "region");

      const wines = db.createObjectStore("wines", { keyPath: "id" });
      wines.createIndex("by-type", "type");
      wines.createIndex("by-region", "region");
      wines.createIndex("by-price", "price");
      wines.createIndex("by-liked", "liked");
      wines.createIndex("by-source", "sourceType");

      const pairings = db.createObjectStore("pairingSections", { keyPath: "id" });
      pairings.createIndex("by-order", "order");

      const submissions = db.createObjectStore("producerSubmissions", { keyPath: "id" });
      submissions.createIndex("by-status", "status");
      submissions.createIndex("by-region", "region");

      db.createObjectStore("settings", { keyPath: "key" });
    }
  });
}

export async function ensureSeeded() {
  const db = await getDb();
  const seeded = await db.get("settings", "uiPreferences");
  const prefs = (seeded?.value as { seeded?: boolean; seedVersion?: number } | undefined) ?? undefined;

  if (prefs?.seeded && prefs.seedVersion === SEED_VERSION) {
    return;
  }

  if (prefs?.seeded && (prefs.seedVersion ?? 0) < 3) {
    const cleanTx = db.transaction(["wineries"], "readwrite");
    await cleanTx.objectStore("wineries").delete("w-carlevana");
    await cleanTx.objectStore("wineries").delete("w-castelmimi");
    await cleanTx.done;
  }

  const tx = db.transaction(["wineries", "wines", "pairingSections", "settings"], "readwrite");
  await Promise.all(seedWineries.map((item) => tx.objectStore("wineries").put(item)));
  await Promise.all(seedWines.map((item) => tx.objectStore("wines").put(item)));
  await Promise.all(seedPairings.map((item) => tx.objectStore("pairingSections").put(item)));
  await tx.objectStore("settings").put({ key: "theme", value: "light" });
  await tx.objectStore("settings").put({ key: "uiPreferences", value: { seeded: true, seedVersion: SEED_VERSION } });
  await tx.done;
}

export async function loadAllData() {
  const db = await getDb();
  const [wineries, wines, pairings, submissions, themeSetting] = await Promise.all([
    db.getAll("wineries"),
    db.getAll("wines"),
    db.getAll("pairingSections"),
    db.getAll("producerSubmissions"),
    db.get("settings", "theme")
  ]);

  return {
    wineries,
    wines,
    pairings: pairings.sort((a, b) => a.order - b.order),
    submissions: submissions.sort((a, b) => b.createdAt - a.createdAt),
    theme: (themeSetting?.value as "light" | "dark") ?? "light"
  };
}

export async function putTheme(theme: "light" | "dark") {
  const db = await getDb();
  await db.put("settings", { key: "theme", value: theme });
}

export async function putWine(wine: Wine) {
  const db = await getDb();
  await db.put("wines", wine);
}

export async function deleteWine(id: string) {
  const db = await getDb();
  await db.delete("wines", id);
}

export async function putWinery(winery: Winery) {
  const db = await getDb();
  await db.put("wineries", winery);
}

export async function deleteWinery(id: string) {
  const db = await getDb();
  await db.delete("wineries", id);
}

export async function putPairingSection(section: PairingSection) {
  const db = await getDb();
  await db.put("pairingSections", section);
}

export async function deletePairingSection(id: string) {
  const db = await getDb();
  await db.delete("pairingSections", id);
}

export async function putSubmission(submission: ProducerSubmission) {
  const db = await getDb();
  await db.put("producerSubmissions", submission);
}

export async function deleteSubmission(id: string) {
  const db = await getDb();
  await db.delete("producerSubmissions", id);
}
