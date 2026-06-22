<!-- CMIP6 forcing record — EC-Earth3-CC (EC-Earth-Consortium). Stage 9 workflow: wf_1fb84fb8-c26 (2026-06-23) -->

# EC-Earth3-CC — EC-Earth-Consortium (Pan-European)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** EC-Earth3 base + **LPJG active carbon cycle** (LPJ-GUESS dynamic vegetation). ESM variant for C4MIP. All atmospheric forcing expected IDENTICAL to EC-Earth3 base (confirmed by inheritance; not confirmed from CC-specific primary source).
- **Primary documentation paper(s):** Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022 [doscher_ecearth3_2022]

**NOTE**: Stage 9 confirmed all EC-Earth3 forcing (G, O, aerosol, LU, SO) from Döscher 2022 and van Noije 2021 by direct quote. EC-Earth3-CC atmospheric forcing is inferred identical to EC-Earth3 (shared IFS atmosphere); no CC-specific primary source was cited in Stage 9 findings. CC-specific ESM inputs remain open.

## Forcing datasets — all atmospheric forcing as EC-Earth3 (see EC-Earth3.md)

| Key | Verdict | Notes |
|-----|---------|-------|
| G  | ✓std/TV | As EC-Earth3 (Meinshausen 2017/2020; inferred from shared IFS) |
| O  | ✓std/TV | As EC-Earth3 (CCMI prescribed; inferred from shared IFS) |
| SD | ✓std/TV | As EC-Earth3 (MACv2-SP prescribed path, TM5-PI + MACv2-SP anthropogenic contribution) |
| SI | ✓std/TV | As EC-Earth3 (MACv2-SP Twomey effect) |
| BC | ✓std/TV | As EC-Earth3 |
| OC | ✓std/TV | As EC-Earth3 |
| MD | FXc | As EC-Earth3 (TM5 PI natural background) |
| SS | FXc | As EC-Earth3 (TM5 PI natural background) |
| LU | ✓std/TV | As EC-Earth3 (LUH2 indirect via EC-Earth3-Veg precomputed vegetation fields) |
| SO | ✓std/TV | As EC-Earth3 (Matthes 2017) |
| VL | ~ | As EC-Earth3 (CMIP6 stratospheric aerosol prescribed; source_id unconfirmed) |
| FC | n/a | |

## ESM-specific forcing inputs (LPJG active carbon cycle)

| ESM input | Applied? | Verdict | Notes |
|-----------|----------|---------|-------|
| N-deposition (NHx/NOy) | Expected yes | ? | LPJG active C — NCAR-CCMI-2-0 (CCMI nitrogen surface fluxes, doi:10.22033/ESGF/input4MIPs.1125) expected but NOT confirmed that EC-Earth3-CC consumed it |
| CO2-mode | ? | ? | Concentration-driven expected for historical; not confirmed |

## Provenance
- Stage 9 workflow run ID: wf_1fb84fb8-c26 (2026-06-23)
- Key sources: Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022); van Noije et al. 2021 (doi:10.5194/gmd-14-5637-2021)
