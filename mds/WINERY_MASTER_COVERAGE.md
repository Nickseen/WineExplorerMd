# Winery Master Coverage Tracker

Purpose:
- Track all target Moldova wineries for dataset completeness.
- Show which wineries already have wine labels and bottle photos collected.

Status legend:
- COVERED_FULL: winery has collected labels and bottle images in local dataset.
- PARTIAL: winery is known but needs more labels and/or images.
- PENDING_RESEARCH: not yet researched in current wave.

Current local image sources:
- research/bottle-images/
- research/bottle-images/extended/

## Master list (user provided)

| Winery | Status | Notes |
| --- | --- | --- |
| Agrici Wine | PENDING_RESEARCH | Need labels + photos |
| Alianta-Vin | PARTIAL | Wave 2: 8 bottle images collected from wine.md brand pages |
| Aroma | PENDING_RESEARCH | Need labels + photos |
| Asconi Winery | COVERED_FULL | In extended dataset |
| Aurvin (DK-Intertrade) | PENDING_RESEARCH | Need labels + photos |
| Barza Albă | PARTIAL | Brand matched in Wave 2, but no product images downloaded |
| Basavin Winery | PARTIAL | Wave 2: 13 bottle images collected |
| Bostavan Winery | PARTIAL | Base set + Wave 2 expansion (4 more images) |
| Călărași Divin | PENDING_RESEARCH | Need labels + photos |
| Carlevana Winery | COVERED_FULL | In extended dataset |
| Castel Mimi | COVERED_FULL | In base + extended datasets |
| Château Cojușna (Migdal-P) | PARTIAL | Wave 2: 17 bottle images collected |
| Château Purcari | PARTIAL | Wave 2 added 20 images; keep expanding official-source verification |
| Château Vartely | PARTIAL | Extended set + Wave 2 expansion (13 images in Wave 2) |
| Cimișlia Wineries | PENDING_RESEARCH | Need labels + photos |
| Cricova | COVERED_FULL | In extended dataset |
| Doina Vin | PENDING_RESEARCH | Need labels + photos |
| Fautor Winery | PARTIAL | Wave 2: 20 bottle images collected |
| Garda Vin | PENDING_RESEARCH | Need labels + photos |
| Imperial Vin | PENDING_RESEARCH | Need labels + photos |
| Kazayak-Vin | COVERED_FULL | In extended dataset |
| KVINT | PARTIAL | Brand matched in Wave 2, but no product images downloaded |
| Maurt | PENDING_RESEARCH | Need labels + photos |
| Mileștii Mici | COVERED_FULL | In base + extended datasets |
| Nectar-S | PENDING_RESEARCH | Need labels + photos |
| Podgoria Vin | PENDING_RESEARCH | Need labels + photos |
| Suvorov Winery | PARTIAL | Wave 2 mapped to Kazayak brand; 13 images collected |
| Taraclia Winery | PARTIAL | Wave 2: 7 bottle images collected |
| Tomai-Vinex | PENDING_RESEARCH | Need labels + photos |
| Vinăria Brănești | PENDING_RESEARCH | Need labels + photos |
| Vinăria din Vale | PARTIAL | Wave 2: 20 bottle images collected |
| Vinuri de Comrat | PENDING_RESEARCH | Need labels + photos |

## Suggested next research wave (priority)
1. Château Purcari
2. Château Vartely
3. Agrici Wine
4. Aroma
5. Aurvin (DK-Intertrade)
6. Călărași Divin
7. Cimișlia Wineries
8. Doina Vin
9. Garda Vin
10. Vinuri de Comrat

## Wave 2 artifact snapshot
- Summary JSON: research/bottle-images/wave2/wave2-summary.json
- Detailed report JSON: research/bottle-images/wave2/wave2-download-report.json
- New positive wineries in Wave 2:
	- Alianta-Vin (8)
	- Basavin Winery (13)
	- Bostavan Winery (4)
	- Chateau Cojusna / Château Cojușna (17)
	- Chateau Purcari (20)
	- Chateau Vartely (13)
	- Fautor Winery (20)
	- Suvorov Winery via Kazayak mapping (13)
	- Taraclia Winery (7)
	- Vinaria din Vale / Vinăria din Vale (20)

## Integration note
- After each research wave, append new labels and source links to VERIFIED_WINE_DATA_REGISTRY.md and update BOTTLE_IMAGE_CATALOG.md mappings.