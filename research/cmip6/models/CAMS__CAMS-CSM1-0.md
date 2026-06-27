<!-- CMIP6 forcing record — CAMS-CSM1-0 (CAMS). Stage 6 workflow: wf_1a7b005d-ffd (2026-06-22); updated 2026-06-27 with Rong et al. 2018 -->

# CAMS-CSM1-0 — Chinese Academy of Meteorological Sciences, China

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** None (new CMIP6 entrant)
- **Model family / lineage:** ECHAM5 (v5.4, modified) atmosphere (T106L31 spectral) + CoLM land + MOM4 ocean + CICE4 sea ice. AOGCM — no active carbon cycle. Note: Rong et al. 2018 prototype used SIS sea ice; CMIP6 submission uses CICE4.
- **Atmosphere / ocean components:** ECHAM5 T106L31 / MOM4 + CICE4
- **Primary documentation paper(s):** Rong et al. 2018, *J. Meteor. Res.* doi:10.1007/s13351-018-8058-x [rong_cams_2018]; Rong et al. 2021, *Adv. Atmos. Sci.* doi:10.1007/s00376-020-0171-y [rong_cams_hist_2021]

## Forcing datasets used (historical 1850–2014)

Rong et al. 2021 (Adv. Atmos. Sci.; Section 2.2 and Table 1) is the definitive CMIP6 historical paper. The formal submission (r1i1p1f1 and r2i1p1f1, 1850–2014) uses: Meinshausen 2017 GHGs; CCMI ozone concentrations (blogs.reading.ac.uk/ccmi URL); IACETH stratospheric aerosols (iacftp.ethz.ch URL = Thomason 2018 / SAGE3λ); Matthes 2017 solar (solarisheppa URL); and "anthropogenic aerosols using simple plumes parameterization (Steven et al., 2016)" = MACv2-SP. Land-use forcing is explicitly stated as FIXED in all three ensemble members. A third member (r1i1p1f2) excludes stratospheric aerosol forcing as a sensitivity test — confirming that r1i1p1f1/r2 DO include volcanic forcing. Natural aerosol background (MD/SS) not mentioned.

| Key | Forcing | Protocol (Eyring 2016) | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | ✓std | TV | Meinshausen et al. 2017; CO2, CH4, N2O, CFC-12, equivalent CFC-11 | He et al. 2020; Rong et al. 2018 | He 2020 (AAS) and Rong 2018 both confirm CMIP6 input4MIPs GHGs. |
| O  | Ozone | Hegglin 2016 / CCMI | ✓std | TV | CMIP6 input4MIPs ozone — Rong 2018 Sec 2.6: "forcing data from CMIP6 (Eyring et al., 2016) … including … ozone" | Rong et al. 2018 | Listed as CMIP6 input4MIPs; consistent with CCMI prescribed ozone (✓std). Specific dataset (Hegglin vs Keeble) unconfirmed. |
| SD | Aerosol — sulphate direct | MACv2-SP / CEDS | ✓std | TV | MACv2-SP (Stevens et al. 2016 "simple plumes parameterization") | Rong et al. 2021 | Explicit: "anthropogenic aerosols using simple plumes parameterization (Steven et al., 2016)". |
| SI | Aerosol — sulphate indirect | MACv2-SP Twomey | ✓std | TV | MACv2-SP includes Twomey first indirect effect (Stevens 2016 reference description) | Rong et al. 2021 | MACv2-SP includes "an associated Twomey effect for climate studies" per Stevens 2016. |
| BC | Black carbon | MACv2-SP | ✓std | TV | Bundled in MACv2-SP anthropogenic aerosol optical properties | Rong et al. 2021 | MACv2-SP prescribes combined anthropogenic AOD including BC. |
| OC | Organic carbon | MACv2-SP | ✓std | TV | Bundled in MACv2-SP anthropogenic aerosol optical properties | Rong et al. 2021 | MACv2-SP prescribes combined anthropogenic AOD including OC. |
| MD | Mineral dust | Kinne 2013 / online | ? | ? | Unknown — not mentioned in Rong 2021; ECHAM5 may carry online dust or Kinne background | — | OPEN |
| SS | Sea salt | Kinne 2013 / online | ? | ? | Unknown — not mentioned in Rong 2021; ECHAM5 may carry online sea salt | — | OPEN |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | ✗dev | FXc | Fixed land-use forcing — Rong 2021 Table 1: "Fixed land-use forcing is used in this simulation" | Rong et al. 2021 | All three historical ensemble members use fixed (not time-varying LUH2) land-use. |
| SO | Solar irradiance | Matthes et al. 2017 | ✓std | TV | CMIP6 input4MIPs total solar irradiance — Rong 2018 Sec 2.6: "including … total solar irradiance" | Rong et al. 2018 | Explicitly listed as CMIP6 input4MIPs forcing; consistent with Matthes 2017 (✓std). |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | ✓std | TV | IACETH stratospheric AOD — Rong 2021 Sec 2.2: "stratospheric aerosols (ftp://iacftp.ethz.ch/pub_read/luo/CMIP6/data_description.txt)" | Rong et al. 2021 | Formal CMIP6 submission (r1i1p1f1 and r2i1p1f1) explicitly includes stratospheric aerosol forcing. r1i1p1f2 excludes it only as a sensitivity test. Corrects earlier Rong 2018 prototype finding. |
| FC | Flux corrections | Not expected | n/a | n/a | None expected | — | |

## Open questions
1. MD/SS: ECHAM5 aerosol scheme treatment — online interactive or Kinne prescribed background? Not mentioned in Rong 2021.

## Provenance
- WCRP-CMIP CVs source_id: CAMS-CSM1-0 confirmed in CMIP6_source_id.json
- Sources: Rong et al. 2018 (doi:10.1007/s13351-018-8058-x); Rong et al. 2021 (doi:10.1007/s00376-020-0171-y)
- Stage 6 workflow run ID: wf_1a7b005d-ffd (2026-06-22); updated 2026-06-27 with Rong et al. 2021 (the definitive CMIP6 historical paper)
- Key finding: Rong 2021 confirms MACv2-SP ("simple plumes") for anthropogenic aerosols (SD/SI/BC/OC = ✓std); IACETH stratospheric AOD included in formal submission (VL = ✓std, correcting Rong 2018 prototype); land-use forcing is FIXED not time-varying LUH2 (LU = ✗dev). MD/SS not mentioned.

### Notes
Rong et al. 2021 (*Adv. Atmos. Sci.* 38, 285–295; doi:10.1007/s00376-020-0171-y) is the definitive CMIP6 historical simulation paper. Section 2.2 and Table 1 explicitly list all external forcings for r1i1p1f1 (1850–2014): GHGs = Meinshausen 2017 (✓std); ozone = CCMI (✓std); stratospheric aerosols = IACETH/Thomason 2018 URL (✓std — corrects the Rong 2018 prototype which omitted VL); solar = Matthes 2017/SOLARIS-HEPPA (✓std); anthropogenic aerosols = "simple plumes parameterization (Steven et al., 2016)" = MACv2-SP (✓std for SD/SI/BC/OC). Land-use forcing explicitly stated as FIXED in all three ensemble members (LU = ✗dev). The third variant r1i1p1f2 excludes stratospheric aerosol as a deliberate sensitivity test, confirming r1i1p1f1/r2i1p1f1 are the standard runs. Natural aerosol background (MD/SS) not mentioned anywhere in the paper.
