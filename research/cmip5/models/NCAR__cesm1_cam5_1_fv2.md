# cesm1_cam5_1_fv2 — NCAR (National Center for Atmospheric Research, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ncar_ccsm3_0
- **Model family / lineage:** Variant of CESM1(CAM5) using the FV2 (finite-volume 2°) dynamical core. Lower resolution than CESM1-CAM5 (1° spectral element). The only difference is the horizontal resolution and dynamical core; all physics (CAM5 + MAM3 aerosols), forcing datasets, and ocean/land/sea-ice components are expected identical to CESM1-CAM5. Forcing treatment not independently verified — inherits from CESM1-CAM5.
- **Atmosphere / ocean components:** CAM5-FV2 atmosphere (1.9°×2.5° FV dynamics, 30 levels; MAM3 interactive aerosols) + POP2 ocean + CLM4 land + CICE4
- **Primary documentation paper(s):** As CESM1-CAM5: Meehl et al. 2013 [meehl_climate_2013]; Liu et al. 2012 [liu_toward_2012]
- **Forcing-specific reference(s):** As CESM1-CAM5

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries below are inferred from CESM1-CAM5 (identical configuration at lower resolution). Not independently verified.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? std | TV | Meinshausen et al. 2011 | meinshausen_rcp_2011 | meinshausen_rcp_2011 | As CESM1-CAM5 |
| O  | Ozone | Cionni et al. 2011 | ? std | TV | Cionni et al. 2011 | cionni_ozone_2011 | cionni_ozone_2011 | As CESM1-CAM5; no interactive gas-phase chemistry |
| SD | Sulphate direct | Lamarque et al. 2010 | exc (inferred) | TV+ | Lamarque 2010 emissions → MAM3 | lamarque_historical_2010 | lamarque_historical_2010 | Identical to CESM1-CAM5; confirmed for CAM5 1-0 |
| SI | Sulphate indirect | Model-dependent | exc (inferred) | TV+ | MAM3 direct + indirect | liu_toward_2012 | liu_toward_2012 | As CESM1-CAM5 |
| BC | Black carbon | Lamarque et al. 2010 | exc (inferred) | TV+ | Lamarque 2010 emissions → MAM3 | lamarque_historical_2010 | lamarque_historical_2010 | As CESM1-CAM5 |
| OC | Organic carbon | Lamarque et al. 2010 | exc (inferred) | TV+ | Lamarque 2010 emissions → MAM3 | lamarque_historical_2010 | lamarque_historical_2010 | As CESM1-CAM5 |
| MD | Mineral dust | Lamarque et al. 2010 | exc (inferred) | TV+ | Lamarque 2010 emissions → MAM3 | lamarque_historical_2010 | lamarque_historical_2010 | As CESM1-CAM5 |
| SS | Sea salt | Lamarque et al. 2010 | exc (inferred) | TV+ | Lamarque 2010 emissions → MAM3 | lamarque_historical_2010 | lamarque_historical_2010 | As CESM1-CAM5 |
| LU | Land-use change | Hurtt et al. 2011 | ? std | TV | Hurtt et al. 2011 | hurtt_harmonization_2011 | hurtt_harmonization_2011 | As CESM1-CAM5 |
| SO | Solar irradiance | Wang et al. 2005 | ✓ std (inferred) | TV | Wang & Lean 2005 | wang_modeling_2005 | wang_modeling_2005 | As CESM1-CAM5 (CCSM4 confirmed 1-0) |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? unresolved | TV | As CCSM4 family (unresolved) | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM. As CESM1-CAM5 — aerosol emissions inputs from Lamarque et al. 2010.

### Provenance
- Durack et al. 2016 model list: included
- Stage 3 workflow: wf_a0c75ead-5fd; forcing inferred from CESM1-CAM5 (not independently verified)
