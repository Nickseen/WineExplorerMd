/**
 * Patches wine prices in generatedSeed.ts to realistic MDL values based on wine.md (May 2026).
 * Run: node scripts/patch-prices.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const seedPath = resolve(__dirname, "../src/lib/generatedSeed.ts");

// ──────────────────────────────────────────────────────────────
// Verified prices from wine.md/ru/brand/* (May 2026)
// base  = typical entry-level wine for that producer (0.75L)
// premium = reserve / limited / collection tier
// ──────────────────────────────────────────────────────────────
const wineryBasePrices = {
  // Alianta-Vin: Viorica/Feteasca Regala 91 MDL
  "w-alianta-vin":      { base: 91,  premium: 149 },
  // Asconi: Casa Felina from 125 MDL; Sol Negru / Rezerva ~249
  "w-asconi-winery":    { base: 125, premium: 249 },
  // Basavin: Orange 156 MDL, Argilos 180 MDL
  "w-basavin-winery":   { base: 156, premium: 219 },
  // Bostavan: DOR Brut 83 MDL, Black Doktor 126 MDL
  "w-bostavan":         { base: 89,  premium: 149 },
  // Carlevana (old id): Alb de Mereni 147 MDL, Kosher 235 MDL
  "w-carlevana":        { base: 147, premium: 259 },
  // Carlevana Winery: same entry, Raritet / Port higher
  "w-carlevana-winery": { base: 147, premium: 399 },
  // Castel Mimi: Diva Extra Brut Rose 420 MDL, Alb 480 MDL; standard wines ~289
  "w-castel-mimi":      { base: 289, premium: 489 },
  "w-castelmimi":       { base: 289, premium: 489 },
  // Chateau Cojusna: Piatra Alba 122 MDL
  "w-chateau-cojusna":  { base: 122, premium: 199 },
  // Chateau Purcari: standard 0.75L ~269-320 MDL; Negru/Alb de Purcari ~380; Magnum 901
  "w-chateau-purcari":  { base: 269, premium: 599 },
  // Chateau Vartely: standard ~189 MDL; Tribut Saperavi 891 MDL
  "w-chateau-vartely":  { base: 189, premium: 899 },
  // Cricova: White Blend / Limited Edition 169 MDL; Prestige Codru ~299
  "w-cricova":          { base: 169, premium: 299 },
  // Et Cetera: Aeroplane Cuvee Rouge 220 MDL; Marselan 350 MDL
  "w-et-cetera":        { base: 220, premium: 369 },
  "w-etcetera":         { base: 220, premium: 369 },
  // Fautor: no direct page on wine.md; estimate based on similar boutique wineries
  "w-fautor-winery":    { base: 199, premium: 349 },
  // Kazayak: boutique winery, similar tier to Et Cetera
  "w-kazayak":          { base: 179, premium: 289 },
  // Milestii Mici: standard ~159 MDL; Gratiesti 1986 841 MDL, Codru 1987 ~720 MDL
  "w-milestii-mici":    { base: 159, premium: 841 },
  // Radacini: Fiori base ~99 MDL; Ampre ~149-199 MDL
  "w-radacini":         { base: 99,  premium: 199 },
  // Taraclia: mid-tier cooperative winery
  "w-taraclia-winery":  { base: 109, premium: 175 },
  // Vinaria din Vale: Spumant 137 MDL; premium singles ~249
  "w-vinaria-din-vale": { base: 137, premium: 249 },
};

// Keywords that push a wine to the premium tier
const premiumKeywords = [
  "reserve", "rezerva", "prestige", "elogiu", "raritet",
  "collectie", "colectie", "collection", "vintage", "limited",
  "barrel", "barique", "barrique", "grand", "platinum",
  "mimi", "governor", "negru de purcari", "alb de purcari",
  "kosher", "naughty", "ice wine", "aeroplane", "sol negru",
  "noble", "portvin", "port ", "1952", "1986", "1987",
  "cuvee", "diva",
];

function isPremium(name) {
  const n = name.toLowerCase();
  return premiumKeywords.some((kw) => n.includes(kw));
}

// Small deterministic jitter so cards show varied prices (not all identical)
function jitter(seed, spread) {
  // pseudo-random but stable per seed string
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const steps = spread / 10;                 // multiples of 10 MDL
  const offset = (h % (steps * 2 + 1) - steps) * 10;
  return offset;
}

let src = readFileSync(seedPath, "utf8");

// Match each wine block: from an opening { with "id": "wine- to the next closing }
// We look for wineryId + name + price together within a wine record
const wineBlockRe = /"id":\s*"wine-[^"]*"[\s\S]*?(?="id":\s*"wine-|export const seedPairings)/g;

let changed = 0;

src = src.replace(
  /"wineryId":\s*"([^"]+)"([\s\S]*?)"name":\s*"([^"]+)"([\s\S]*?)"price":\s*\d+/g,
  (match, wineryId, between1, name, between2) => {
    const config = wineryBasePrices[wineryId];
    if (!config) return match; // unknown winery — leave as-is

    const tier = isPremium(name) ? config.premium : config.base;
    const offset = jitter(wineryId + name, 3); // ±3 steps of 10 MDL
    const newPrice = Math.round((tier + offset) / 10) * 10;

    changed++;
    return `"wineryId": "${wineryId}"${between1}"name": "${name}"${between2}"price": ${newPrice}`;
  }
);

writeFileSync(seedPath, src, "utf8");
console.log(`✓ Patched ${changed} wine prices in generatedSeed.ts`);
