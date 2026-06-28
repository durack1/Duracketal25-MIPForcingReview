<!-- CMIP6 forcing record — EC-Earth3-Veg (EC-Earth-Consortium). Stage 10 workflow: wf_c0deb3a6-6f8 (2026-06-26) -->

# EC-Earth3-Veg — EC-Earth-Consortium (Pan-European)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** EC-Earth3 base (IFS cy36r4, T255L91) + **LPJ-GUESS v4** dynamic global vegetation model (replaces static HTESSEL vegetation). Active land C and N cycling. AOGCM with dynamic vegetation. Highest-resolution Veg variant.
- **Atmosphere / ocean components:** IFS cy36r4 (TL255L91, top 0.01 hPa) / NEMO3.6 (ORCA1) + LIM3; land = HTESSEL + LPJ-GUESS v4
- **Primary documentation paper(s):** Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022 [doscher_ecearth3_2022]

**KEY ROLE**: EC-Earth3-Veg is the **upstream provider of precomputed vegetation fields** for EC-Earth3, EC-Earth3-CC, and EC-Earth3-ESM-1. Döscher 2022 verbatim: "This is done by first making all CMIP6 experiments with the EC-Earth3-Veg configuration and saving the vegetation variables that can then be reused." EC-Earth3-Veg itself ingests LUH2 **directly** via LPJ-GUESS; all other configurations receive vegetation from precomputed EC-Earth3-Veg runs.

## Forcing datasets used (historical 1850–2014)

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen 2017/2020** — identical to EC-Earth3 base (same IFS atmosphere). | Döscher et al. 2022 | Döscher 2022: "The atmospheric tuning for EC-Earth3 and EC-Earth3-Veg is the same." |
| O  | Ozone | ✓std | TV | **Standard CCMI prescribed** — identical to EC-Earth3 base (same IFS). | Döscher et al. 2022 | As EC-Earth3. EC-Earth3-Veg does NOT have interactive chemistry. |
| SD | Aerosol — sulphate direct | ✓std | TV | **TM5-PI-1850 climatology + MACv2-SP anthropogenic plumes** — identical to EC-Earth3 base. | Döscher et al. 2022 | Döscher 2022 (verbatim): "Tropospheric aerosols are... prescribed as a pre-industrial climatology plus an anthropogenic contribution (all other configurations)... The anthropogenic contribution is specified following the simple plume approach of MACv2-SP (Stevens et al., 2017)." EC-Earth3-Veg = "all other configurations." |
| SI | Aerosol — sulphate indirect | ✓std | TV | As SD — MACv2-SP Twomey effect included. | Döscher et al. 2022 | |
| BC | Black carbon | ✓std | TV | As SD — MACv2-SP anthropogenic plumes. | Döscher et al. 2022 | |
| OC | Organic carbon | ✓std | TV | As SD — MACv2-SP anthropogenic plumes. | Döscher et al. 2022 | |
| MD | Mineral dust | FXc | FXc | TM5 PI 1850 natural background — identical to EC-Earth3 base. | Döscher et al. 2022 | |
| SS | Sea salt | FXc | FXc | TM5 PI 1850 natural background — identical to EC-Earth3 base. | Döscher et al. 2022 | |
| LU | Land-use change | ✓std | TV | **LUH2 v2.1h (Hurtt et al. 2020) DIRECTLY ingested by LPJ-GUESS v4**. Different mechanism from EC-Earth3/CC which receive precomputed vegetation fields from EC-Earth3-Veg runs. | Döscher et al. 2022 | Döscher 2022 (verbatim): "The land use forcing dataset (LUH2) from CMIP6 (Hurtt et al., 2020) cannot be used directly as input to IFS... the dynamic vegetation model, which uses the LUH2 dataset as an input, is active [in EC-Earth3-Veg]." LPJ-GUESS: "globally simulating vegetation dynamics, land use and land management following the LUH2 dataset (Hurtt et al., 2020), and both carbon (C) and nitrogen (N) cycling." |
| SO | Solar irradiance | ✓std | TV | **Matthes 2017** — identical to EC-Earth3 base (same IFS). | Döscher et al. 2022 | |
| VL | Volcanic aerosols | ✓std | TV | **IACETH-SAGE3lambda-3-0-0 v3.0.0 confirmed**. Döscher 2022 Table 13: "Stratospheric aerosols \| 3.0.0 \| Thomason et al. (2018)." All EC-Earth3 configurations share the same IFS atmosphere and stratospheric aerosol prescription. | Döscher et al. 2022 Table 13 | Eighth-pass confirmation 2026-06-28. |
| FC | Flux corrections | n/a | n/a | None | | |

## ESM-specific inputs (LPJ-GUESS active land C/N)

| ESM input | Verdict | Notes |
|-----------|---------|-------|
| N-deposition | ✓std | **NCAR-CCMI-2-0 confirmed**. Döscher 2022 Table 13: "Nitrogen deposition \| v2.0 \| Hegglin et al. (2021) — Used only in combination with dynamic vegetation model." CCMI N-dep v2.0 = NCAR-CCMI-2-0. Eighth-pass 2026-06-28. |
| CO2-mode | ? | Concentration-driven for historical expected (LPJ-GUESS receives atmospheric CO2 from Meinshausen 2017 expected but not explicitly confirmed in Döscher 2022). |

## Provenance
- Stage 10 workflow run ID: wf_c0deb3a6-6f8 (2026-06-26); 31 agents; 11/14 confirmed, 3 killed
- Key sources: Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022); WDC-Climate CMIP6 (wdc-climate.de); van Noije et al. 2021 (doi:10.5194/gmd-14-5637-2021)
- Eighth-pass update (2026-06-28): VL confirmed ✓std and N-dep confirmed ✓std from Döscher 2022 Table 13. Table 13 verbatim: "Stratospheric aerosols \| 3.0.0 \| Thomason et al. (2018)" (VL=IACETH-SAGE3lambda-3-0-0 v3.0.0); "Nitrogen deposition \| v2.0 \| Hegglin et al. (2021) — Used only in combination with dynamic vegetation model" (N-dep=NCAR-CCMI-2-0). All 12 standard forcing cells now resolved.
