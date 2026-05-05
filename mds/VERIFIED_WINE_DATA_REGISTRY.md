# Verified Wine Data Registry (Moldova)

Purpose:
- This file is the single source of truth for seed data authenticity.
- Only entries listed here as verified can be added to IndexedDB seed.

Verification status legend:
- VERIFIED_A: confirmed by official winery or official national wine source.
- VERIFIED_B: confirmed by trusted Moldovan wine catalog/retailer.
- PENDING: not allowed in seed yet.

## 1) Verified Regions (for enums)
Source:
- https://wineofmoldova.com/wine-regions/

Verified regions:
- Codru (VERIFIED_A)
- Stefan Voda (VERIFIED_A)
- Valul lui Traian (VERIFIED_A)
- Divin (VERIFIED_A)

## 2) Verified Wineries
### 2.1 Et Cetera
- Status: VERIFIED_A
- Sources:
  - https://etcetera.md/en/
  - https://etcetera.md/en/list/wines/

### 2.2 Castel Mimi
- Status: VERIFIED_A
- Sources:
  - https://castelmimi.md/en/
  - https://castelmimi.md/en/wines/

### 2.3 Mileștii Mici
- Status: VERIFIED_A
- Sources:
  - https://milestii-mici.md/en/

### 2.4 Chateau Purcari (brand in Purcari group)
- Status: VERIFIED_A
- Sources:
  - https://purcariwineries.com/en/wineries/

### 2.5 Bostavan
- Status: VERIFIED_A
- Sources:
  - https://purcariwineries.com/en/wineries/
  - https://purcariwineries.com/en/brands/bostavan

### 2.6 Asconi
- Status: VERIFIED_A
- Source:
  - https://wineofmoldova.com/moldovan-wineries/

### 2.7 Cricova
- Status: VERIFIED_A
- Sources:
  - https://wineofmoldova.com/moldovan-wineries/
  - https://cricova.md/en/

## 3) Verified Wine Labels / Collections
Note:
- If only collection name is confirmed, use it as collection-level item in seed or keep wine-level names minimal.

### 3.1 Et Cetera labels (VERIFIED_A)
Source:
- https://etcetera.md/en/list/wines/

Labels:
- Aeroplane Merlot
- Cabernet Sauvignon
- Carmenere
- Cuvee Blanc
- Feteasca Neagra
- Merlot
- Naughty Boys
- Naughty Girls
- Pinot Noir
- Spumante Rose

### 3.2 Castel Mimi collections (VERIFIED_A)
Source:
- https://castelmimi.md/en/wines/

Collections:
- Symbol Series
- The Governor Series
- Chef Series
- 9 Muses
- Smart Packaging

### 3.3 Castel Mimi labels (VERIFIED_B)
Source:
- https://wine.md/brand/castel-mimi

Labels:
- Diva Extra Brut Rose
- Diva Extra Brut Alb

### 3.4 Bostavan labels and lines (VERIFIED_A)
Source:
- https://purcariwineries.com/en/brands/bostavan

Labels/lines:
- DOR Reserve Chardonnay
- DOR Reserve Cabernet Sauvignon
- DOR Reserve Merlot
- White Doktor
- Ed Knows
- Black Doktor
- DOR Sparkling Wine

### 3.5 Milestii Mici labels (mixed)
Sources:
- https://milestii-mici.md/en/
- https://wine.md/brand/milestii-mici

Labels:
- Negre_de_Milestii_Mici (VERIFIED_A)
- Milestii Mici Gratiesti 1986 (VERIFIED_B)
- Milestii Mici Codru 1987 (VERIFIED_B)

## 4) Seed Data Gate
Rules before adding to seed:
- wineryName must exist in section 2 with VERIFIED_A.
- wine label must be VERIFIED_A or VERIFIED_B.
- each record must keep sourceUrl and verificationLevel fields.

Recommended additional fields in seed objects:
- sourceUrl
- verificationLevel
- lastVerifiedAt

## 5) Pending Research Backlog (Do not seed yet)
- Chateau Vartely product labels from official pages.
- Asconi product labels from official pages.
- Cricova product labels from official pages.
- Purcari product labels from official catalog pages with stable extraction.

## 6) Process During Development
- Step 1: add only verified seeds from this file.
- Step 2: if adding a new winery/wine, append source first.
- Step 3: only then include it in IndexedDB seed scripts.

## 7) Bottle Images (Collected)
- Local image assets and source mapping are documented in BOTTLE_IMAGE_CATALOG.md.
- Downloaded files are stored in research/bottle-images/.
- Every seeded wine with an available photo should include imagePath + sourceUrl.

## 8) Alcomarket Gap Analysis (Moldova wines not yet added)
Source:
- https://alcomarket.md/ru/catalog/vino-1
- https://alcomarket.md/ru/catalog/vino-1/moldova-40

Not yet added to current registry:

### Mileștii Mici
- VIN SPUMANT MILESTII MICI MOLDOVA DE LUX ALB DULCE 0.75L (candidate VERIFIED_B)

### Radacini
- VIN SPUMANT RADACINI CUVEE MUSCAT DULCE ALB 0.75L (candidate VERIFIED_B)
- VIN FETEASCA NEAGRA & MERLOT & PINOT NOIR AMPRE ROZ SEC 0.75L (candidate VERIFIED_B)
- VIN RARA NEAGRA & MERLOT & SAPERAVI AMPRE ROSU SEC 0.75L (candidate VERIFIED_B)
- VIN SAPERAVI & FETEASCA NEAGRA & MERLOT AMPRE ROSU SEC 0.75L (candidate VERIFIED_B)
- VIN VIORICA & RIESLING & CHARDONNAY AMPRE ALB SEC 0.75L (candidate VERIFIED_B)
- VIN FETEASCA ALBA FIORI ALB SEC 0.75L (candidate VERIFIED_B)
- VIN VIORICA FIORI ALB SEC 0.75L (candidate VERIFIED_B)
- VIN FETEASCA NEAGRA FIORI ROSU SEC 0.75L (candidate VERIFIED_B)
- VIN FETEASCA NEAGRA & SYRAH FIORI ROSU SEC 0.75L (candidate VERIFIED_B)

### Carlevana Winery
- VIN CARLEVANA RENAISSANCE CHARDONNAY ALB SEC 0.75L (candidate VERIFIED_B)
- VIN CARLEVANA COLECTIE LUPU CABERNET SAUVIGNON 2003 ROSU SEC 0.75L (candidate VERIFIED_B)
- VIN CARLEVANA RARITET CUVEE BLANC ALB SEC 0.75L (candidate VERIFIED_B)
- VIN FORTIFICAT CARLEVANA COLECTIE PORT MERENI 2005 ROSU DULCE 0.75L (candidate VERIFIED_B)
- VIN CARLEVANA KOSHER PINOT NOIR ROSU SEC 0.75L (candidate VERIFIED_B)
- VIN CARLEVANA KOSHER MERLOT ROSU SEC 0.75L (candidate VERIFIED_B)
- VIN CARLEVANA KOSHER MALBEC MERLOT ROSU SEC 0.75L (candidate VERIFIED_B)
- VIN CARLEVANA KOSHER CABERNET SAUVIGNON ROSU SEC 0.75L (candidate VERIFIED_B)

Promotion-only note:
- Exclude non-wine products surfaced by the same category pages (vodka, whisky, liqueurs).
- Exclude non-Moldovan brands for this Moldova-focused seed pass.

Image status for section 8:
- Bottle photos collected for all listed gap items.
- Files and mappings are documented in BOTTLE_IMAGE_CATALOG.md.
- Download report: research/bottle-images/alcomarket-gap-download-report.json.

## 9) Extended Coverage Update (including Cricova and Kazayak)
Expanded wine + image research was executed and stored as an extended dataset.

Artifacts:
- EXTENDED_MOLDOVA_WINE_RESEARCH.md
- research/bottle-images/extended/
- research/bottle-images/extended/extended-download-report.json
- research/bottle-images/extended/extended-summary.json

Coverage includes:
- Cricova
- Kazayak
- Asconi Winery
- Carlevana Winery
- Castel Mimi
- Chateau Vartely
- Et Cetera
- Milestii Mici
- Radacini

Master winery scope tracking:
- WINERY_MASTER_COVERAGE.md keeps the full target winery list and current coverage status.

## 10) Wave 2 Coverage Update (wine.md brand pages)
Wave 2 collection results are stored in:
- research/bottle-images/wave2/wave2-summary.json
- research/bottle-images/wave2/wave2-download-report.json

Wave 2 produced additional label-image coverage (downloaded > 0) for:
- Alianta-Vin (8)
- Basavin Winery (13)
- Bostavan Winery (4)
- Chateau Cojusna / Château Cojușna (17)
- Chateau Purcari / Château Purcari (20)
- Chateau Vartely / Château Vartely (13)
- Fautor Winery (20)
- Suvorov Winery via Kazayak mapping (13)
- Taraclia Winery (7)
- Vinaria din Vale / Vinăria din Vale (20)

Important verification note:
- Wave 2 items are treated as VERIFIED_B candidates until each winery and label is cross-checked against official winery pages.
- Do not upgrade a winery to VERIFIED_A based only on wine.md catalog evidence.
- Keep sourceUrl and verificationLevel on every candidate record before seed inclusion.

This policy ensures no fictional wineries or wines are present in the app.
