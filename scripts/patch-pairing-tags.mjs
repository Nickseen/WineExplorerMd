/**
 * Assigns meaningful Russian pairingTags to every wine in generatedSeed.ts
 * based on wine type and grape variety keywords.
 *
 * Run: node scripts/patch-pairing-tags.mjs
 */

import { readFileSync, writeFileSync } from "fs";

const filePath = "src/lib/generatedSeed.ts";
let src = readFileSync(filePath, "utf8");

// ── Tag pools ─────────────────────────────────────────────────────────────────
const BASE_TAGS = {
  red: ["красное мясо", "барбекю", "стейк"],
  white: ["рыба", "морепродукты", "белое мясо"],
  rose: ["компании", "пикник", "лёгкие закуски"],
  sparkling: ["аперитив", "компании", "праздник"],
};

// grape keyword → extra tags (case-insensitive substring match)
const GRAPE_EXTRAS = [
  { kw: ["cabernet", "каберне"],        tags: ["баранина", "выдержанные сыры", "стейк"] },
  { kw: ["merlot", "мерло"],            tags: ["птица", "паста", "нежное мясо"] },
  { kw: ["pinot", "пино"],              tags: ["птица", "лосось", "грибы"] },
  { kw: ["feteasca", "фетяска", "фетеаска"], tags: ["традиционная кухня", "лёгкие закуски"] },
  { kw: ["rara neagra", "рара нягрэ", "rara"],  tags: ["молдавская кухня", "барбекю", "красное мясо"] },
  { kw: ["saperavi", "саперави"],       tags: ["красное мясо", "шашлык", "острые блюда"] },
  { kw: ["chardonnay", "шардонне"],     tags: ["морепродукты", "сливочные соусы", "сыры"] },
  { kw: ["sauvignon", "совиньон"],      tags: ["салаты", "козий сыр", "рыба"] },
  { kw: ["muscat", "мускат"],           tags: ["десерты", "фрукты", "мягкие сыры"] },
  { kw: ["riesling", "рислинг"],        tags: ["морепродукты", "восточная кухня", "рыба"] },
  { kw: ["traminer", "траминер", "gewurz"], tags: ["восточная кухня", "пряные блюда", "мягкие сыры"] },
  { kw: ["pinot gris", "пино гри"],     tags: ["птица", "рыба", "грибы"] },
  { kw: ["aligote", "алиготе"],         tags: ["закуски", "лёгкие блюда", "рыба"] },
  { kw: ["viorica", "виорика"],         tags: ["традиционная кухня", "лёгкие закуски", "белое мясо"] },
  { kw: ["traminer", "траминер"],       tags: ["пряные блюда", "восточная кухня"] },
  { kw: ["syrah", "shiraz", "сира"],    tags: ["дичь", "шашлык", "красное мясо"] },
  { kw: ["malbec", "мальбек"],          tags: ["стейк", "барбекю", "красное мясо"] },
  { kw: ["negru", "негру"],             tags: ["красное мясо", "традиционная кухня", "барбекю"] },
  { kw: ["codru"],                      tags: ["молдавская кухня", "красное мясо"] },
];

// ── Wine block regex ──────────────────────────────────────────────────────────
// Match each wine object: from "type": "..." to next pairingTags block
const wineRe = /"type":\s*"(red|white|rose|sparkling)"[\s\S]*?"grapeVariety":\s*"([^"]*)"[\s\S]*?"pairingTags":\s*\[[^\]]*\]/g;

let patched = 0;
src = src.replace(wineRe, (match, type, grape) => {
  const tags = new Set(BASE_TAGS[type] || []);

  const grapeL = grape.toLowerCase();
  for (const { kw, tags: extra } of GRAPE_EXTRAS) {
    if (kw.some((k) => grapeL.includes(k))) {
      extra.forEach((t) => tags.add(t));
    }
  }

  // Also scan the match text for grape name clues (wine name sometimes has it)
  const nameMatch = match.match(/"name":\s*"([^"]*)"/);
  if (nameMatch) {
    const nameL = nameMatch[1].toLowerCase();
    for (const { kw, tags: extra } of GRAPE_EXTRAS) {
      if (kw.some((k) => nameL.includes(k))) {
        extra.forEach((t) => tags.add(t));
      }
    }
  }

  const tagsArray = [...tags].slice(0, 5); // max 5 tags
  const tagsJson = tagsArray.map((t) => `\n      "${t}"`).join(",") + "\n    ";
  const newTagsBlock = `"pairingTags": [${tagsJson}]`;

  patched++;
  return match.replace(/"pairingTags":\s*\[[^\]]*\]/, newTagsBlock);
});

writeFileSync(filePath, src, "utf8");
console.log(`✓ Patched pairingTags for ${patched} wines`);
