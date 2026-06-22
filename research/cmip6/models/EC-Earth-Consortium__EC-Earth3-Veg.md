<!-- CMIP6 forcing record — EC-Earth3-Veg (EC-Earth-Consortium). Stage 10 seed. -->

# EC-Earth3-Veg — EC-Earth-Consortium (Pan-European)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** EC-Earth3 base + LPJ-GUESS dynamic global vegetation model (replaces static HTESSEL vegetation). Directly ingests LUH2 — unlike EC-Earth3 which requires precomputed vegetation fields from EC-Earth3-Veg runs.
- **Primary documentation paper(s):** Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022

## Forcing — STUB (Stage 10 pending)

| Key | Verdict | Notes |
|-----|---------|-------|
| G  | ? | Expected ✓std as EC-Earth3 |
| O  | ? | Expected ✓std (CCMI prescribed) as EC-Earth3 |
| SD | ? | Expected ✓std (MACv2-SP) as EC-Earth3 |
| SI | ? | Expected ✓std (MACv2-SP) as EC-Earth3 |
| BC | ? | Expected ✓std (MACv2-SP) as EC-Earth3 |
| OC | ? | Expected ✓std (MACv2-SP) as EC-Earth3 |
| MD | ? | Expected FXc (TM5 PI) as EC-Earth3 |
| SS | ? | Expected FXc (TM5 PI) as EC-Earth3 |
| LU | ? | Expected ✓std/TV — DIRECT LUH2 ingestion (different mechanism from EC-Earth3 precomputed); LPJ-GUESS directly processes LUH2 transitions |
| SO | ? | Expected ✓std (Matthes 2017) as EC-Earth3 |
| VL | ? | Expected ~ (CMIP6 strat aerosol, IACETH unconfirmed) as EC-Earth3 |
| FC | n/a | |

## ESM-specific inputs — STUB

| Input | Notes |
|-------|-------|
| N-dep | LPJ-GUESS active vegetation — NCAR-CCMI-2-0 expected but unconfirmed |
| CO2-mode | Concentration-driven for historical expected |
