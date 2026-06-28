<!-- CMIP6 forcing record — EC-Earth3-Veg-LR (EC-Earth-Consortium). Stage 10 workflow: wf_c0deb3a6-6f8 (2026-06-26) -->

# EC-Earth3-Veg-LR — EC-Earth-Consortium (Pan-European)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** Lower-resolution variant of EC-Earth3-Veg. IFS cy36r4 at TL159/L62 (~1.25°, 62 levels, **top 5 hPa**) vs TL255/L91 (top 0.01 hPa) for EC-Earth3-Veg. All component structure and forcing datasets confirmed identical to EC-Earth3-Veg.
- **Atmosphere / ocean components:** IFS cy36r4 (TL159/L62, top 5 hPa) / NEMO3.6 (ORCA1, 1°) + LIM3; land = HTESSEL + LPJ-GUESS v4
- **Primary documentation paper(s):** Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022 [doscher_ecearth3_2022]

**Resolution caveat for stratospheric forcing**: The TL159/L62 configuration has a model top at 5 hPa (vs 0.01 hPa for EC-Earth3-Veg) — a much shallower stratosphere. Prescribed VL (volcanic aerosol), SO (solar), and O (ozone) datasets are ingested at the same source_id as EC-Earth3-Veg, but the lower-model-top means less of the stratospheric signal is resolved. Verdict codes are the same as EC-Earth3-Veg (the prescribed datasets are unchanged), but this difference should be noted in synthesis.

## Forcing datasets — all identical to EC-Earth3-Veg

Döscher 2022 verbatim: "The atmospheric tuning for EC-Earth3 and EC-Earth3-Veg is the same, **as is the case for EC-Earth3-LR and EC-Earth3-Veg-LR**." WDC-Climate confirms component structure: HTESSEL + LPJ-GUESS v4 land; same NEMO3.6/ORCA1 ocean as EC-Earth3-Veg.

| Key | Verdict | Temporal | Notes |
|-----|---------|----------|-------|
| G  | ✓std | TV | As EC-Earth3-Veg (Meinshausen 2017/2020) |
| O  | ✓std | TV | As EC-Earth3-Veg (CCMI prescribed) |
| SD | ✓std | TV | As EC-Earth3-Veg (MACv2-SP prescribed) |
| SI | ✓std | TV | As EC-Earth3-Veg (MACv2-SP) |
| BC | ✓std | TV | As EC-Earth3-Veg (MACv2-SP) |
| OC | ✓std | TV | As EC-Earth3-Veg (MACv2-SP) |
| MD | FXc | FXc | As EC-Earth3-Veg (TM5 PI natural background) |
| SS | FXc | FXc | As EC-Earth3-Veg (TM5 PI natural background) |
| LU | ✓std | TV | As EC-Earth3-Veg (direct LUH2 ingestion via LPJ-GUESS v4) |
| SO | ✓std | TV | As EC-Earth3-Veg (Matthes 2017) |
| VL | ✓std | TV | As EC-Earth3-Veg. Döscher 2022 Table 13: "Stratospheric aerosols \| 3.0.0 \| Thomason et al. (2018)" — IACETH-SAGE3lambda-3-0-0 v3.0.0 confirmed. NOTE: 5 hPa model top limits stratospheric resolution. Eighth-pass 2026-06-28. |
| FC | n/a | n/a | |

## ESM-specific inputs (LPJ-GUESS)
- N-dep: ✓std (Döscher 2022 Table 13: NCAR-CCMI-2-0 v2.0, Hegglin et al. 2021 — used only with dynamic vegetation model; confirmed eighth-pass 2026-06-28)
- CO2-mode: ? (concentration-driven expected, not confirmed)

## Provenance
- Stage 10 workflow run ID: wf_c0deb3a6-6f8 (2026-06-26)
- Key sources: Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022); WDC-Climate CMIP6 (wdc-climate.de)
