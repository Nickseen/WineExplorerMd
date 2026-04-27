import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const imageDir = path.join(rootDir, "public", "bottle-images");
const outputFile = path.join(rootDir, "src", "lib", "generatedSeed.ts");

const wineryMap = {
  "alianta-vin": { name: "Alianta-Vin", region: "Stefan Voda", city: "Stefan Voda", priceLevel: "$$", rating: 4.3 },
  "asconi-winery": { name: "Asconi Winery", region: "Valul lui Traian", city: "Puhoi", priceLevel: "$$", rating: 4.5 },
  "basavin-winery": { name: "Basavin Winery", region: "Valul lui Traian", city: "Bascalia", priceLevel: "$$", rating: 4.4 },
  bostavan: { name: "Bostavan", region: "Codru", city: "Calarasi", priceLevel: "$$", rating: 4.2 },
  carlevana: { name: "Carlevana", region: "Stefan Voda", city: "Mereni", priceLevel: "$$$", rating: 4.5 },
  "carlevana-winery": { name: "Carlevana Winery", region: "Stefan Voda", city: "Mereni", priceLevel: "$$$", rating: 4.5 },
  "castel-mimi": { name: "Castel Mimi", region: "Codru", city: "Bulboaca", priceLevel: "$$$", rating: 4.8 },
  castelmimi: { name: "Castel Mimi", region: "Codru", city: "Bulboaca", priceLevel: "$$$", rating: 4.8 },
  "chateau-cojusna": { name: "Chateau Cojusna", region: "Codru", city: "Cojusna", priceLevel: "$$", rating: 4.3 },
  "chateau-purcari": { name: "Chateau Purcari", region: "Stefan Voda", city: "Purcari", priceLevel: "$$$", rating: 4.9 },
  "chateau-vartely": { name: "Chateau Vartely", region: "Codru", city: "Orhei", priceLevel: "$$", rating: 4.7 },
  cricova: { name: "Cricova", region: "Codru", city: "Cricova", priceLevel: "$$", rating: 4.8 },
  "et-cetera": { name: "Et Cetera", region: "Stefan Voda", city: "Crocmaz", priceLevel: "$$$", rating: 4.7 },
  etcetera: { name: "Et Cetera", region: "Stefan Voda", city: "Crocmaz", priceLevel: "$$$", rating: 4.7 },
  "fautor-winery": { name: "Fautor Winery", region: "Valul lui Traian", city: "Tigheci", priceLevel: "$$$", rating: 4.8 },
  kazayak: { name: "Kazayak", region: "Stefan Voda", city: "Tudora", priceLevel: "$$", rating: 4.3 },
  "milestii-mici": { name: "Milestii Mici", region: "Codru", city: "Ialoveni", priceLevel: "$$", rating: 4.6 },
  radacini: { name: "Radacini", region: "Codru", city: "Cricova", priceLevel: "$$", rating: 4.5 },
  "taraclia-winery": { name: "Taraclia Winery", region: "Valul lui Traian", city: "Taraclia", priceLevel: "$$", rating: 4.2 },
  "vinaria-din-vale": { name: "Vinaria din Vale", region: "Valul lui Traian", city: "Taraclia", priceLevel: "$$", rating: 4.4 }
};

const wineryPrefixes = Object.keys(wineryMap).sort((a, b) => b.length - a.length);

const allFiles = fs
  .readdirSync(imageDir, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => /\.(png|jpg|jpeg|webp)$/i.test(name))
  .sort();

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const toTitle = (slug) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((part) => (part.length <= 2 ? part.toLowerCase() : `${part[0].toUpperCase()}${part.slice(1).toLowerCase()}`))
    .join(" ");

const detectWinery = (slug) => wineryPrefixes.find((prefix) => slug === prefix || slug.startsWith(`${prefix}-`)) ?? null;

const inferType = (value) => {
  if (/(brut|spumant|sparkling|methode)/.test(value)) return "sparkling";
  if (/(rose|roz|roze|rosie)/.test(value)) return "rose";
  if (/(chardonnay|sauvignon|riesling|muscat|viorica|feteasca-alba|feteasca-regala|pinot-grigio|alb|bianca|blanc|orange)/.test(value)) return "white";
  return "red";
};

const inferSweetness = (value) => (/(dulce|ice-wine|pastoral|marsala|licoros)/.test(value) ? "sweet" : "dry");

const inferBody = (type) => {
  if (type === "red") return "full";
  if (type === "sparkling") return "light";
  return "medium";
};

const usedWinery = new Set();
const usedWineIds = new Set();
const wines = [];

for (const filename of allFiles) {
  const base = toSlug(path.parse(filename).name);
  const wineryKey = detectWinery(base);
  if (!wineryKey) continue;

  usedWinery.add(wineryKey);

  let wineSlug = base;
  for (let i = 0; i < 2; i += 1) {
    if (wineSlug.startsWith(`${wineryKey}-`)) {
      wineSlug = wineSlug.slice(wineryKey.length + 1);
    }
  }
  if (!wineSlug) wineSlug = base;

  const type = inferType(wineSlug);
  const sweetness = inferSweetness(wineSlug);
  const body = inferBody(type);
  const winery = wineryMap[wineryKey];

  let id = `wine-${base}`;
  if (usedWineIds.has(id)) {
    let idx = 2;
    while (usedWineIds.has(`${id}-${idx}`)) idx += 1;
    id = `${id}-${idx}`;
  }
  usedWineIds.add(id);

  wines.push({
    id,
    wineryId: `w-${wineryKey}`,
    name: toTitle(wineSlug),
    type,
    grapeVariety: "See source",
    year: 2021,
    price: type === "sparkling" ? 320 : type === "red" ? 290 : 240,
    region: winery.region,
    body,
    sweetness,
    aromaNotes: ["fruit", "floral", "spice"],
    servingTemp: type === "red" ? "16-18 C" : type === "sparkling" ? "6-8 C" : "10-12 C",
    alcoholPercent: type === "sparkling" ? 12 : 13,
    pairingTags: ["red meat", "cheese", "gatherings"],
    imagePath: `/bottle-images/${filename}`,
    liked: false,
    sourceType: "seed",
    createdAt: "__NOW__",
    updatedAt: "__NOW__"
  });
}

const wineries = [...usedWinery]
  .sort()
  .map((key) => ({
    id: `w-${key}`,
    name: wineryMap[key].name,
    region: wineryMap[key].region,
    city: wineryMap[key].city,
    description: "Verified Moldovan winery from research dataset.",
    priceLevel: wineryMap[key].priceLevel,
    rating: wineryMap[key].rating,
    liked: false,
    createdAt: "__NOW__",
    updatedAt: "__NOW__"
  }));

const asTsLiteral = (value) => JSON.stringify(value, null, 2).replace(/"__NOW__"/g, "now");

const content = `import { PairingSection, Wine, Winery } from "./types";

const now = Date.now();

export const seedWineries: Winery[] = ${asTsLiteral(wineries)};

export const seedWines: Wine[] = ${asTsLiteral(wines)};

export const seedPairings: PairingSection[] = [
  {
    id: "pair-red-meat",
    title: "К красному мясу",
    description: "Плотные красные вина к жареному и запеченному мясу.",
    recommendedWineIds: seedWines.filter((w) => w.type === "red").slice(0, 8).map((w) => w.id),
    colorToken: "var(--accent-wine)",
    iconKey: "steak",
    order: 1,
    pinned: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "pair-cheese",
    title: "К сырам",
    description: "Игристые, белые и розе для мягких и выдержанных сыров.",
    recommendedWineIds: seedWines.filter((w) => w.type !== "red").slice(0, 8).map((w) => w.id),
    colorToken: "var(--accent-leaf)",
    iconKey: "cheese",
    order: 2,
    pinned: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "pair-gatherings",
    title: "Для компаний",
    description: "Универсальные вина для встреч и праздников.",
    recommendedWineIds: seedWines.slice(0, 10).map((w) => w.id),
    colorToken: "var(--accent-clay)",
    iconKey: "group",
    order: 3,
    pinned: false,
    createdAt: now,
    updatedAt: now
  }
];
`;

fs.writeFileSync(outputFile, content, "utf8");
console.log(`Generated ${wineries.length} wineries and ${wines.length} wines.`);