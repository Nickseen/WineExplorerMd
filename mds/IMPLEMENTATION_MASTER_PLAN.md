# Vinaria Explorer Moldova - Master Implementation Plan

## 1) Project Vision
Build a client-side web application that helps users discover Moldovan wines by usage scenarios (food, events, social situations), while also supporting local micro-producers through a submission and review workflow.

Core idea:
- Educational focus: user learns what wine fits what scenario.
- Practical focus: user can quickly pick wines by situation, budget, and taste profile.
- Community focus: local producers can submit wines for review.
- Technical focus: fully client-side architecture with persistent storage in IndexedDB.

## 2) Mandatory Requirements Mapping
### Functional requirements from assignment
- Entities that can be manipulated: implemented with Winery, Wine, PairingSection, ProducerSubmission.
- Add/remove/like/filter: available across catalog and scenario sections.
- Custom style/theme: unique Moldovan wine-inspired visual identity.
- Light/Dark mode: full theme switching with persistence.
- Public access: deployment to GitHub Pages.

### Development requirements from assignment
- Front-end framework: React + Vite.
- Runtime state: React state management (useState/useReducer).
- Browser persistence: IndexedDB as primary storage.
- Git history quality: staged, meaningful commits by feature milestones.
- Checkpoints by commits: project designed in progressive working increments.

## 3) Product Scope
### In scope (MVP+)
- Browse wineries and wines.
- Scenario-based wine sections:
  - For red meat
  - For chicken/turkey
  - With cheese
  - For gatherings
  - For celebrations
  - For beginners in Moldovan wines
- Add/remove user-created wines and producer submissions.
- Like/favorite logic.
- Filters, sorting, search.
- Producer submission flow with review statuses.
- Theme switcher and responsive design.
- Accessibility baseline.

### Out of scope (for now)
- Backend API.
- Real authentication.
- Payments.
- External moderation service.

## 4) Data Model
### Entity: Winery
Fields:
- id (string)
- name (string)
- region (enum: Codru, Stefan Voda, Valul lui Traian, Other)
- city (string)
- description (string)
- priceLevel (enum: $, $$, $$$)
- rating (number 1-5)
- liked (boolean)
- createdAt (number timestamp)
- updatedAt (number timestamp)

### Entity: Wine
Fields:
- id (string)
- wineryId (string | null)
- name (string)
- type (enum: red, white, rose, sparkling)
- grapeVariety (string)
- year (number)
- price (number)
- region (enum same as Winery)
- body (enum: light, medium, full)
- sweetness (enum: dry, semi-dry, semi-sweet, sweet)
- aromaNotes (string[])
- servingTemp (string)
- alcoholPercent (number)
- pairingTags (string[])
- liked (boolean)
- sourceType (enum: seed, user, producer-approved)
- createdAt (number timestamp)
- updatedAt (number timestamp)

### Entity: PairingSection
Fields:
- id (string)
- title (string)
- description (string)
- recommendedWineIds (string[])
- colorToken (string)
- iconKey (string)
- order (number)
- pinned (boolean)
- createdAt (number timestamp)
- updatedAt (number timestamp)

### Entity: ProducerSubmission
Fields:
- id (string)
- producerName (string)
- contactInfo (string)
- wineName (string)
- wineType (enum: red, white, rose, sparkling)
- grapeVariety (string)
- year (number)
- region (enum)
- sweetness (enum)
- body (enum)
- alcoholPercent (number)
- aromaNotes (string[])
- suggestedPairingTags (string[])
- productionMethod (string)
- status (enum: pending, approved, rejected, needs_changes)
- reviewerComment (string)
- createdAt (number timestamp)
- updatedAt (number timestamp)

## 5) IndexedDB Design
Database name:
- vinariaExplorerDB

Version:
- 1

Object stores:
- wineries (keyPath: id)
- wines (keyPath: id)
- pairingSections (keyPath: id)
- producerSubmissions (keyPath: id)
- settings (keyPath: key)

Suggested indexes:
- wines.byType (type)
- wines.byRegion (region)
- wines.byPrice (price)
- wines.byLiked (liked)
- wines.bySourceType (sourceType)
- producerSubmissions.byStatus (status)
- producerSubmissions.byRegion (region)
- wineries.byRegion (region)

Settings entries:
- theme: light | dark
- uiPreferences: object

Persistence rules:
- Core data persisted in IndexedDB.
- In-memory state hydrates from IndexedDB on app start.
- Every mutation writes to IndexedDB and syncs runtime state.

## 6) Information Architecture
Main pages:
- Home (overview + featured scenarios)
- Wines (catalog + filters)
- Wineries (catalog)
- Pairing Scenarios (educational sections)
- My Collection (liked, saved picks)
- Local Producer Submission (form + status tracking)
- Review Dashboard (moderation panel)

Key navigation:
- Top navigation for desktop.
- Mobile bottom nav or compact drawer.
- Persistent theme toggle and quick search access.

## 7) Core User Flows
### Flow A: Learn and choose wine by scenario
1. User opens Pairing Scenarios.
2. Selects a scenario (example: With cheese).
3. Reads short explanation why pairings work.
4. Sees recommended wines.
5. Applies budget/type filters.
6. Likes and saves selected wines.

### Flow B: Discover wine via catalog
1. User opens Wines page.
2. Uses filters (type, region, price, sweetness, body).
3. Sorts by rating or price.
4. Opens wine details card.
5. Adds to collection or likes.

### Flow C: Local producer submission
1. Producer opens Submission form.
2. Fills structured fields based on app taxonomy.
3. Submits entry.
4. Entry appears with pending status.
5. Reviewer changes status and adds comment.
6. On approved, system creates catalog wine (sourceType = producer-approved).

### Flow D: Theme and persistence
1. User switches theme to dark/light.
2. Theme saved in settings store.
3. On reload, theme restored automatically.

## 8) Validation Rules and Business Logic
Submission validation:
- Required: producerName, wineName, wineType, grapeVariety, year, region.
- year range: 1950 to current year.
- alcoholPercent range: 5 to 20.
- contactInfo min length validation.

Review logic:
- pending -> approved/rejected/needs_changes allowed.
- approved creates Wine record unless duplicate detected.
- duplicate check heuristic: wineName + year + producerName.

Catalog logic:
- User can remove only user-created or producer-submitted records created in app context.
- Seed content can be liked but not permanently deleted (optional soft-hide strategy).

## 9) UX/UI Direction
Design goal:
- Distinct visual language inspired by Moldovan wine culture.

Visual system:
- Custom typography pairing (serif for headings, clean sans for body).
- Color tokens with grape/earth/warm accents.
- Different light/dark palettes using CSS variables.
- Card layouts with visual hierarchy, not generic templates.

Interaction:
- Staggered entrance animations for lists.
- Smooth filter transition states.
- Clear empty/loading/error states.

Accessibility baseline:
- Keyboard-accessible controls.
- Visible focus states.
- Semantic form labels.
- Sufficient contrast in both themes.

## 10) Technical Architecture
Stack:
- React
- Vite
- React Router
- idb (IndexedDB helper)
- Optional: Zod for schema validation

Suggested structure:
- src/app (routing, providers)
- src/pages
- src/features/wines
- src/features/wineries
- src/features/pairings
- src/features/submissions
- src/components
- src/db (indexedDB setup, repositories)
- src/lib (utils, constants)
- src/styles

State strategy:
- Local component state for UI.
- Feature-level hooks for data operations.
- Repository layer isolates IndexedDB operations.

## 11) Implementation Phases
### Phase 0: Bootstrap
- Create app with Vite + React + TypeScript (recommended).
- Setup linting/formatting.
- Setup folder structure.
- Add router and base layout.

Definition of done:
- App runs locally.
- Basic navigation works.
- Empty pages rendered.

### Phase 1: Data foundation
- Implement IndexedDB setup and repositories.
- Seed initial wineries, wines, pairing sections.
- Add app boot hydration.

Definition of done:
- Data persists across reload.
- Seed executes once safely.

### Phase 2: Catalog experience
- Build Wines and Wineries pages.
- Implement filters/search/sort.
- Implement like/save actions.

Definition of done:
- Manipulation actions update UI and IndexedDB.
- Filter combinations produce expected results.

### Phase 3: Pairing education layer
- Build Pairing Scenarios page.
- Link scenarios to recommended wines.
- Add scenario explanations and learning cards.

Definition of done:
- Scenario selection visibly narrows wine choices.
- Educational text is concise and useful.

### Phase 4: Local producer workflow
- Build submission form with validations.
- Build submission list with statuses.
- Build review dashboard for moderation actions.
- Auto-create wine on approved status.

Definition of done:
- Full pending -> approved flow works.
- Approved submission appears in wine catalog.

### Phase 5: Theme and polish
- Implement light/dark theme system.
- Persist theme in settings store.
- Improve responsiveness and accessibility.

Definition of done:
- Theme persists after reload.
- Mobile and desktop layouts both usable.

### Phase 6: QA, docs, deployment
- Add smoke tests/checklists.
- Finalize README with flows and architecture.
- Deploy to GitHub Pages.

Definition of done:
- Public link available.
- README reflects real implementation.
- Project demo-ready from fresh clone.

## 12) AI-Execution Taskboard (Prompt-Oriented)
Use these tasks sequentially when delegating to an AI model for implementation.

Task 1: Scaffold and architecture
Expected output:
- Vite React project initialized.
- Router + layout + page shells.
- Clean folder structure and baseline styles.

Task 2: IndexedDB core
Expected output:
- db initialization file.
- object stores and indexes created.
- repository functions (CRUD + queries).

Task 3: Seed and hydration
Expected output:
- initial Moldovan wineries/wines/scenarios seed.
- one-time seed guard.
- hydration pipeline on startup.

Task 4: Wines feature
Expected output:
- wine cards, filters, sorting, search.
- like/save actions with persistence.

Task 5: Wineries feature
Expected output:
- winery catalog and details blocks.
- region and rating filters.

Task 6: Pairing scenarios feature
Expected output:
- sections for food/social contexts.
- mapping scenario -> recommended wines.
- explanation blocks for educational purpose.

Task 7: Producer submission feature
Expected output:
- validated form.
- pending list and statuses.
- editing/removal for own submissions.

Task 8: Review dashboard
Expected output:
- reviewer panel.
- approve/reject/needs_changes actions.
- comment capture and status timeline.
- approve action creates new Wine record.

Task 9: Theme system
Expected output:
- light/dark tokenized CSS variables.
- toggle and persistence.
- contrast-safe components.

Task 10: Documentation and deployment
Expected output:
- full README with requirements mapping and flows.
- GitHub Pages deployment config.
- final validation checklist.

## 13) Commit Plan (for grading)
1. chore: bootstrap react vite project and base routing
2. feat: add indexeddb schema and repository layer
3. feat: seed moldovan wineries wines and pairing sections
4. feat: implement wines catalog with filter sort search
5. feat: implement wineries catalog and like actions
6. feat: add pairing scenarios educational sections
7. feat: add producer submission form and status tracking
8. feat: add review dashboard and approval workflow
9. feat: implement theme switch with persisted settings
10. style: responsive and accessibility improvements
11. docs: complete readme with architecture and user flows
12. chore: deploy to github pages

## 14) README Content Checklist
README must include:
- Project idea and audience.
- Entities and manipulation actions.
- User flows.
- IndexedDB persistence strategy.
- Theme and accessibility notes.
- Public deployment link.
- Setup instructions.
- Commit strategy and milestone proof.

## 15) Demo Script for Teacher
1. Open app, show scenario-based navigation.
2. Filter wines by region and budget.
3. Like and save one wine.
4. Switch theme and reload page (show persistence).
5. Submit a local producer wine.
6. Open review dashboard and approve submission.
7. Return to catalog and show approved wine visible.
8. Show git history and milestone commits.

## 16) Risk Register and Mitigation
Risk: IndexedDB complexity and async race conditions.
Mitigation:
- Use repository abstraction.
- Keep operations atomic and awaited.

Risk: App appears too simple.
Mitigation:
- Strong scenario education layer.
- Review workflow and approval logic.
- Distinct custom UI identity.

Risk: Inconsistent data after mutations.
Mitigation:
- Single source of truth via repositories.
- Re-fetch or synchronized updates after writes.

## 17) Final Quality Gate (Definition of Ready for Submission)
All conditions must be true:
- Client-side only architecture respected.
- IndexedDB persistence implemented and verified.
- Entities support add/remove/like/filter.
- Scenario sections are educational and practical.
- Producer submission and review workflow operational.
- Light/dark theme implemented and persisted.
- Public link accessible.
- README complete and accurate.
- Git history demonstrates progressive delivery.

## 18) Data Authenticity Policy (No Fictional Wineries or Wines)
Hard rules:
- Do not add fictional wineries.
- Do not add fictional wine labels.
- Each seed item must have a source URL recorded in project docs.

Source priority:
- Priority A: official winery websites and official national resources.
- Priority B: trusted Moldovan wine catalogs/retailers used only to confirm product labels.

Verification levels:
- Verified Winery: winery name confirmed from official source.
- Verified Wine Label: exact label name confirmed from official source or trusted catalog.
- Pending Verification: do not include in seed data until promoted to verified.

Implementation rule:
- Seed datasets are generated only from the verified registry file.
- Any user-submitted winery/wine is tagged as community data until reviewed.

Teacher demo note:
- Show the verification registry and source links as proof that dataset is real.

---

This plan is intended to be used as a direct execution blueprint for high-quality AI-assisted implementation.
