import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import type { PairingSection, ProducerSubmission, Wine, Winery } from "../types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "../../data");
const STORE_FILE = join(DATA_DIR, "store.json");

interface StoreShape {
  wines: Wine[];
  wineries: Winery[];
  pairings: PairingSection[];
  submissions: ProducerSubmission[];
}

function load(): StoreShape {
  if (!existsSync(STORE_FILE)) {
    return { wines: [], wineries: [], pairings: [], submissions: [] };
  }
  return JSON.parse(readFileSync(STORE_FILE, "utf-8")) as StoreShape;
}

function persist(store: StoreShape): void {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
  writeFileSync(STORE_FILE, JSON.stringify(store, null, 2), "utf-8");
}

let store = load();

export const db = {
  wines: {
    getAll: () => [...store.wines],
    get: (id: string) => store.wines.find((w) => w.id === id),
    put: (wine: Wine) => {
      store.wines = [...store.wines.filter((w) => w.id !== wine.id), wine];
      persist(store);
    },
    delete: (id: string) => {
      store.wines = store.wines.filter((w) => w.id !== id);
      persist(store);
    },
  },

  wineries: {
    getAll: () => [...store.wineries],
    get: (id: string) => store.wineries.find((w) => w.id === id),
    put: (winery: Winery) => {
      store.wineries = [...store.wineries.filter((w) => w.id !== winery.id), winery];
      persist(store);
    },
    delete: (id: string) => {
      store.wineries = store.wineries.filter((w) => w.id !== id);
      persist(store);
    },
  },

  pairings: {
    getAll: () => [...store.pairings].sort((a, b) => a.order - b.order),
    get: (id: string) => store.pairings.find((p) => p.id === id),
    put: (pairing: PairingSection) => {
      store.pairings = [...store.pairings.filter((p) => p.id !== pairing.id), pairing];
      persist(store);
    },
    delete: (id: string) => {
      store.pairings = store.pairings.filter((p) => p.id !== id);
      persist(store);
    },
  },

  submissions: {
    getAll: () => [...store.submissions].sort((a, b) => b.createdAt - a.createdAt),
    get: (id: string) => store.submissions.find((s) => s.id === id),
    put: (submission: ProducerSubmission) => {
      store.submissions = [...store.submissions.filter((s) => s.id !== submission.id), submission];
      persist(store);
    },
    delete: (id: string) => {
      store.submissions = store.submissions.filter((s) => s.id !== id);
      persist(store);
    },
  },
};
