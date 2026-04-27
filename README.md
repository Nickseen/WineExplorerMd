# Vinaria Explorer Moldova

Client-side React app for discovering Moldovan wines by scenarios, with IndexedDB persistence and local producer submission review workflow.

## Implemented Scope
- React + Vite + TypeScript project structure.
- IndexedDB stores: wineries, wines, pairingSections, producerSubmissions, settings.
- Seed hydration on first run.
- Pages:
  - Home
  - Wines (search/filter/like/remove non-seed)
  - Wineries (filter/like)
  - Pairings (scenario-based recommendations)
  - My Collection (liked wines)
  - Producer Submission (validated form)
  - Review Dashboard (approve/reject/needs_changes + comment)
- Theme toggle with persistence in IndexedDB settings.

## Tech
- React
- React Router
- idb
- TypeScript
- Vite

## Run
1. Install Node.js LTS.
2. From project folder:
   - npm install
   - npm run dev

## Build
- npm run build
- npm run preview

## Notes
- This workspace currently has no Node/npm available in terminal, so dependencies are not installed yet.
- After Node install, the app should run with the commands above.
