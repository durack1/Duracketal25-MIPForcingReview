<!-- CMIP6 forcing record — EC-Earth3-ESM-1 (EC-Earth-Consortium). Stage 10 seed. -->

# EC-Earth3-ESM-1 — EC-Earth-Consortium (Pan-European)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** Full ESM variant of EC-Earth3. Adds active ocean biogeochemistry (expected: PISCES-v2 in NEMO) and active land carbon cycle (LPJ-GUESS). All atmospheric forcing expected identical to EC-Earth3 base.
- **Primary documentation paper(s):** Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022

## Atmospheric forcing — STUB (Stage 10 pending)

All atmospheric forcing expected identical to EC-Earth3 (shared IFS atmosphere). To be confirmed by Stage 10 workflow.

| Key | Verdict | Notes |
|-----|---------|-------|
| G  | ? | Expected ✓std as EC-Earth3 |
| O  | ? | Expected ✓std (CCMI) as EC-Earth3 |
| SD | ? | Expected ✓std (MACv2-SP) as EC-Earth3 |
| SI | ? | Expected ✓std as EC-Earth3 |
| BC | ? | Expected ✓std as EC-Earth3 |
| OC | ? | Expected ✓std as EC-Earth3 |
| MD | ? | Expected FXc as EC-Earth3 |
| SS | ? | Expected FXc as EC-Earth3 |
| LU | ? | Expected ✓std/TV — mechanism unclear (LPJ-GUESS dynamic veg → direct LUH2? or precomputed as EC-Earth3?) |
| SO | ? | Expected ✓std (Matthes 2017) as EC-Earth3 |
| VL | ? | Expected ~ as EC-Earth3 |
| FC | n/a | |

## ESM-specific inputs — STUB

| Input | Notes |
|-------|-------|
| N-dep | Active ocean BGC (PISCES-v2?) + active land BGC (LPJ-GUESS?) — NCAR-CCMI-2-0 expected but unconfirmed |
| CO2-mode | Concentration-driven for historical expected |
| Fe deposition | Active ocean BGC iron cycling — PISCES-v2 may require dust/Fe deposition; dataset unconfirmed |
