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
| VL | ✓std | As EC-Earth3. Döscher 2022 Table 13: "Stratospheric aerosols \| 3.0.0 \| Thomason et al. (2018)" — IACETH-SAGE3lambda-3-0-0 v3.0.0 confirmed. Eighth-pass 2026-06-28. |
| FC | n/a | |

## ESM-specific forcing inputs (LPJG active carbon cycle)

| ESM input | Applied? | Verdict | Notes |
|-----------|----------|---------|-------|
| N-deposition (NHx/NOy) | Expected yes | ✓std | **NCAR-CCMI-2-0 confirmed**. Döscher 2022 Table 13: "Nitrogen deposition \| v2.0 \| Hegglin et al. (2021) — Used only in combination with dynamic vegetation model." EC-Earth3-CC has LPJG active C-N cycling, same as EC-Earth3-Veg. Eighth-pass 2026-06-28. |
| CO2-mode | ? | ? | Concentration-driven expected for historical; not confirmed |

## Provenance
- Stage 9 workflow run ID: wf_1fb84fb8-c26 (2026-06-23)
- Key sources: Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022); van Noije et al. 2021 (doi:10.5194/gmd-14-5637-2021)
- Eighth-pass update (2026-06-28): VL confirmed ✓std and N-dep confirmed ✓std from Döscher 2022 Table 13 (same table as EC-Earth3-Veg: VL=IACETH-SAGE3lambda-3-0-0 v3.0.0; N-dep=NCAR-CCMI-2-0 v2.0 used with dynamic vegetation model).
