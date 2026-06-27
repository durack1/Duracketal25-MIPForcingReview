<!-- CMIP6 forcing record — UKESM1-0-LL (MOHC+NERC+NCAS+NOC). Stage 11 workflow: wf_205a78ae-659 (2026-06-26) -->

# UKESM1-0-LL — MOHC+NERC+NCAS+NOC (UK)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** UK Earth System Model v1.0. UM GA7.1 + NEMO3.6 (ORCA1) + CICE6 + JULES-ES land (active C cycle) + MEDUSA2 ocean BGC. Full ESM: **UKCA StratTrop interactive chemistry** + GLOMAP-mode aerosol fully coupled to interactive UKCA oxidants. N96L85 (135km, 85 levels, top ~85km).
- **CMIP5 predecessor:** HadGEM2-ES
- **Atmosphere / ocean components:** UM GA7.1 with UKCA StratTrop / NEMO3.6 + MEDUSA2
- **Primary documentation paper(s):** Sellar et al. 2019, *JAMES* doi:10.1029/2019MS001739 [sellar_ukesm1_2019]; Archibald et al. 2020, *GMD* doi:10.5194/gmd-13-1223-2020 [archibald_ukca_2020]; Mulcahy et al. 2020, *GMD* doi:10.5194/gmd-13-6383-2020 [mulcahy_glomap_2020]; Keeble et al. 2021, *ACP* doi:10.5194/acp-21-5015-2021 [keeble_interactive_2021]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** (UoM-CMIP-1-2-0). CO2 concentration-driven for historical. | Sellar et al. 2019 | Sellar 2019 (verbatim): "All prescribed concentrations are taken from the CMIP6 dataset of Meinshausen et al. (2017)." |
| O  | Ozone | ＋exc | TV | **UKCA StratTrop interactive chemistry** — fully coupled stratosphere-troposphere chemistry (both stratospheric and tropospheric ozone produced interactively). **Exceeds** standard CCMI prescribed ozone. | Keeble et al. 2021; Mulcahy et al. 2020; Archibald et al. 2020 | Keeble et al. 2021 explicitly lists UKESM1-0-LL in 6-model interactive-chemistry set. Mulcahy 2020 (verbatim): "In UKESM1, oxidants are interactively simulated" vs "prescribed oxidant climatologies" in HadGEM3-GC3.1. Archibald et al. 2020 = UKCA StratTrop description paper. |
| SD | Aerosol — sulphate direct | ✓std | TV | **GLOMAP-mode interactive** consuming CEDS (Hoesly et al. 2018) SO2 emissions. GLOMAP coupled to interactive UKCA oxidants in UKESM1 (vs prescribed oxidant climatologies in GC3.1). | Mulcahy et al. 2020 | Mulcahy 2020 (verbatim): "In UKESM1, oxidants are interactively simulated whereas in GC3.1, the GLOMAP-mode module uses prescribed oxidant climatologies." Emissions source (CEDS) identical to HadGEM3-GC31; enhanced coupling gives additional realism. |
| SI | Aerosol — sulphate indirect | ✓std | TV | **GLOMAP-mode interactive** indirect effects, coupled to UKCA oxidants. | Mulcahy et al. 2020 | |
| BC | Black carbon | ✓std | TV | **GLOMAP-mode** consuming CEDS+BB4CMIP6 (van Marle et al. 2017) emissions. BC from biomass burning **scaled ×2** per Johnson et al. 2016. | Mulcahy et al. 2020 | Same BB4CMIP6 source (VUA-CMIP-BB4CMIP6-1-2) as HadGEM3-GC31; same ×2 scaling. |
| OC | Organic carbon | ✓std | TV | As BC — GLOMAP-mode, CEDS+BB4CMIP6 biomass burning ×2. UKCA interactive DMS also active. | Mulcahy et al. 2020 | UKESM1 adds interactive marine DMS emissions (Mulcahy 2020) vs prescribed DMS in GC3.1. |
| MD | Mineral dust | ? | ? | GLOMAP-mode in UKESM1 configuration likely includes interactive dust; treatment not confirmed from Stage 11 sources. | | Not confirmed. |
| SS | Sea salt | ✓std | TV | **GLOMAP-mode** interactive sea salt emission (wind-driven). | Mulcahy et al. 2020 | |
| LU | Land-use change | ✓std | TV | **LUH2 v2.1h** (Hurtt et al. 2020) ingested by JULES-ES. | Sellar et al. 2019 | Confirmed at medium confidence — LUH2 stated in primary paper but exact v2.1h version string not directly quoted. |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** (SOLARIS-HEPPA). | Sellar et al. 2019 | Sellar 2019 Appendix lists SOLARIS-HEPPA/Matthes 2017 among standard CMIP6 forcings. |
| VL | Volcanic aerosols | ✓std | TV | **IACETH-SAGE3lambda-3-0-0** (Thomason et al. 2018 + Arfeuille et al. 2014 lineage). Prescribed, not interactive. | Sellar et al. 2019 | Sellar 2019 (verbatim): "prescribed using the CMIP6 stratospheric aerosol climatology...based on the climatology described by Thomason et al. (2018) and use a combination of satellite observations from the period 1979-2014 and chemical transport modelling (Arfeuille et al., 2014)." Description uniquely identifies IACETH-SAGE3lambda-3-0-0. |
| N-dep | Nitrogen deposition | ✓std | TV | **NCAR-CCMI-2-0** (Hegglin et al. 2016). Required by JULES-ES active land BGC. | Sellar et al. 2019 (Appendix Table A5) | Sellar 2019 Appendix Table A5 (verbatim): "PI, historical NCAR-CCMI-2-0 Hegglin et al. (2016)." First explicit N-dep source_id confirmation in CMIP6 review. |
| Fe-dep | Iron deposition | ? | ? | MEDUSA2 ocean BGC includes iron cycling; Fe-deposition dataset unconfirmed. | | Required by MEDUSA2 Fe limitation. Dataset not found in Stage 11 sources. |
| CO2-mode | CO2 interactive BGC | ? | ? | Concentration-driven assumed for historical (standard protocol). | | Expected ✓std; not confirmed from Stage 11 primary sources. |
| FC | Flux corrections | n/a | n/a | None | | |

### Deviations from Eyring 2016 standard protocol
- **O = ＋exc (exceeds standard)**: UKCA StratTrop fully interactive chemistry replaces prescribed CCMI ozone. In Keeble et al. 2021 6-model interactive list.
- **SD-related coupling**: GLOMAP-mode coupled to interactive UKCA oxidants — more physically consistent than standard prescribed oxidants. Not marked ✗dev; aerosol emissions inputs are identical standard datasets.
- **BC/OC = ✓std with calibration note**: BB4CMIP6 BC/OC scaled ×2 per Johnson et al. 2016 (shared with HadGEM3-GC31).
- **Open items**: Fe-dep source for MEDUSA2; CO2-mode (concentration-driven assumed); MD dataset identity.

## Provenance
- Stage 11 workflow run ID: wf_205a78ae-659 (2026-06-26); 28 agents; 11/14 confirmed, 3 killed
- Key sources: Sellar et al. 2019 (doi:10.1029/2019MS001739); Mulcahy et al. 2020 (doi:10.5194/gmd-13-6383-2020); Archibald et al. 2020 (doi:10.5194/gmd-13-1223-2020); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021); Roberts et al. 2019 (doi:10.5194/gmd-12-4999-2019)
