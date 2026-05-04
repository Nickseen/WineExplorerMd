# Vinaria Explorer Moldova

A client-side educational catalog of Moldovan wines. Explore 290+ wines from 18 real wineries, save favourites, discover food pairings, and simulate a producer submission review workflow — all running entirely in the browser with no backend.

**Live app:** https://nickseen.github.io/WineExplorerMd/

---

## App description

Moldova is one of the oldest wine-producing countries in the world, yet its wines remain largely undiscovered internationally. This app is an interactive reference guide that lets wine enthusiasts:

- Browse a curated catalogue of 290 Moldovan wines with real bottle images and MDL prices sourced from wine.md.
- Explore 18 wineries with regional information, price tiers, and top wine picks.
- Discover food pairing scenarios — the app scores each wine's fit based on its tags, type, and price tier.
- Build a personal collection by liking wines.
- Submit a winery application (simulated moderation workflow).

---

## User flows

### 1 — Browsing wines
1. Open **Вина** (Wines) from the navigation.
2. Use filters: wine type (red/white/rosé/sparkling), region, winery, price slider, or pairing tag.
3. Click **Подробнее** on any card to open the detail modal with full info and bottle image.
4. Click the ♡ button to add a wine to your collection.
5. Wines you added manually can also be deleted with the trash icon.

### 2 — Exploring wineries
1. Open **Винодельни** (Wineries).
2. Sort by rating, name, wine count, or liked count.
3. Expand any winery card to see its top 3 wines.

### 3 — Food pairings
1. Open **Сочетания** (Pairings).
2. Browse the pre-seeded scenarios (red meat, cheese, gatherings) — each shows the top 8 wines scored by pairing fit.
3. Create a custom scenario: click **+ Новый сценарий**, enter a name and description, pick wines manually.

### 4 — Personal collection
1. Open **Моя коллекция** (My Collection).
2. See all liked wines in one place; click ♡ again to remove.

### 5 — Producer submission
1. Open **Заявка производителя** (Producer Submission).
2. Fill in the winery and wine details form and submit.
3. The submission lands in the review queue.

### 6 — Moderation panel
1. Open **Панель модерации** (Review Panel).
2. Approve, reject, or request changes with an optional comment.
3. Approved wines are added to the live catalogue.

---

## Entities

| Entity | Add | Remove | Like | Filter/Search |
|---|---|---|---|---|
| Wine | ✅ | ✅ (own) | ✅ | ✅ type, region, winery, price, pairing |
| Winery | ✅ | ✅ (own) | ✅ | ✅ sort by rating/name/wines |
| Pairing section | ✅ | ✅ (own) | — | — |
| Producer submission | ✅ | ✅ | — | — |

---

## Tech stack

| | |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 (HashRouter) |
| Persistence | IndexedDB via `idb` |
| Language | TypeScript |
| Build tool | Vite 6 |
| Hosting | GitHub Pages (GitHub Actions CI) |

All app state lives in React state loaded from IndexedDB. On first run the database is seeded with 290 wines and 18 wineries. A `SEED_VERSION` integer in the DB triggers re-seeding when the data schema changes.

---

## Running locally

```bash
npm install
npm run dev        # dev server at localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

---

## Git history highlights

| Commit | Change |
|---|---|
| `65db51b` | elegant filter panel — pill type buttons, grouped selects, inline price slider |
| `8107c59` | mobile responsive — scroll nav, compact topbar, 2×2 stats, 1-col cards |
| `77851a5` | fix responsive card columns — increase minmax to 300/340 px |
| `c488dd4` | fix center layout — responsive padding clamp, left-edge alignment |
| `2615a7e` | pairings — heart icon like button, ✕ delete, clean wine row layout |
| `e2ac963` | redesign winery cards — heart icon, region pill, clean footer, expand toggle |
| `3d46d3b` | unique descriptions for all 18 wineries (SEED_VERSION 8) |
| `abedba0` | fix: prepend BASE_URL to bottle image paths for GitHub Pages |
| `9d4fa8a` | GitHub Actions workflow for automatic GitHub Pages deploy |
| `2418a83` | configure HashRouter + vite base for GitHub Pages |
| `7baff3f` | premium UI — glassmorphism nav, fluid typography, animations |
| `d548b1d` | pairing tag filter in wine catalog |
| `b33fb66` | enrich wineries page — region bars, star rating, sort controls |
| `9425cdc` | fix winery regions, SEED_VERSION 7 |
| `501797f` | Russian pairing tags, smart pairing score, top wines from full catalog |
| `215db32` | 290 wines with real MDL prices |
| `55b6f07` | wine detail modal, price on cards, dynamic price slider |
| `b1ab2e5` | modal overlay styles |
| `9b92971` | fix dedup logic in submission approval |
| `4a1a50e` | SEED_VERSION 3 + migration |
| `e739477` | remove duplicate winery seeds |
| `eb4ca1b` | collapse add-wine form |
