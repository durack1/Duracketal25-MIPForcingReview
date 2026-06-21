# cesm1_cam5 — NCAR (National Center for Atmospheric Research, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ncar_ccsm3_0 (CAM3 → CAM5 is a major upgrade)
- **Model family / lineage:** CCSM4/CAM4 → CESM1(CAM5). CAM5 introduces the three-mode Modal Aerosol Module (MAM3), new microphysics, and improved radiation. MAM3 computes all six major aerosol species prognostically from Lamarque 2010 emissions — this EXCEEDS the Taylor 2012 prescribed-OD standard for all aerosol keys. No full interactive gas-phase chemistry (MAM3 is aerosol-only; ozone remains prescribed).
- **Atmosphere / ocean components:** CAM5 atmosphere (0.9°×1.25°, 30 levels; MAM3 interactive aerosols; no full interactive gas-phase chemistry) + POP2 ocean + CLM4 land + CICE4
- **Primary documentation paper(s):** Meehl, G.A., et al. (2013). Climate change projections in CESM1(CAM5) compared to CCSM4. *J. Climate* 26(17), 6287–6308. doi:10.1175/JCLI-D-12-00572.1 [meehl_climate_2013 *(add)*]; Liu, X., et al. (2012). Toward a minimal representation of aerosols in climate models. *Geosci. Model Dev.* 5(3), 709–739. doi:10.5194/gmd-5-709-2012 [liu_toward_2012 *(add)*]
- **Forcing-specific reference(s):** Lamarque et al. 2010 [lamarque_historical_2010] — CMIP5 emissions driving MAM3

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✗ dev** | TV | IPCC TAR GHG concentrations (inferred from NCAR family). Gent 2011 (CCSM4/CAM4): "specified as in the IPCC third assessment report." CAM5 uses CLM4/CICE4 infrastructure shared with CCSM4 — GHG configuration is at the coupler level, not the atmospheric dynamics level; IPCC TAR likely applies. | — | — | **Deviation inferred** from Gent 2011 applied to NCAR CESM1 family. Meehl 2013 (primary) not checked for explicit GHG citation. Second-pass 2026-06-21. |
| O  | Ozone | Cionni et al. 2011 | ? std | TV | Cionni et al. 2011 (expected) | cionni_ozone_2011 | cionni_ozone_2011 | CAM5 has no full interactive gas-phase chemistry; MAM3 is aerosol-only; ozone prescribed from Cionni2011 expected |
| SD | Sulphate direct | Lamarque et al. 2010 | **✓ exc** | TV+ | Lamarque et al. 2010 emissions → MAM3 prognostic sulphate | lamarque_historical_2010 | lamarque_historical_2010 | **Confirmed 1-0** (Liu2012 + Meehl2013). MAM3 computes sulphate prognostically from SO2 emissions; exceeds prescribed-OD standard. Includes direct + indirect effects. |
| SI | Sulphate indirect | Model-dependent | **✓ exc** | TV+ | MAM3 prognostic (both direct and indirect effects) | liu_toward_2012 | liu_toward_2012 | **Confirmed 1-0**. Meehl2013: CESM1-CAM5 includes both direct and indirect aerosol effects; CCSM4 had only the direct effect. MAM3 computes cloud-droplet activation from prognostic aerosols. |
| BC | Black carbon | Lamarque et al. 2010 | **✓ exc** | TV+ | Lamarque et al. 2010 emissions → MAM3 prognostic BC | lamarque_historical_2010 | lamarque_historical_2010 | **Confirmed 1-0**. MAM3 carries BC as a prognostic species (Aitken/accumulation modes). |
| OC | Organic carbon | Lamarque et al. 2010 | **✓ exc** | TV+ | Lamarque et al. 2010 emissions → MAM3 prognostic POM + secondary organic aerosol (SOA) | lamarque_historical_2010 | lamarque_historical_2010 | **Confirmed 1-0**. MAM3 carries POM and SOA prognostically from Lamarque2010 emissions. |
| MD | Mineral dust | Lamarque et al. 2010 | **✓ exc** | TV+ | Lamarque et al. 2010 emissions → MAM3 prognostic dust | lamarque_historical_2010 | lamarque_historical_2010 | **Confirmed 1-0**. MAM3 carries mineral dust prognostically. |
| SS | Sea salt | Lamarque et al. 2010 | **✓ exc** | TV+ | Lamarque et al. 2010 emissions → MAM3 prognostic sea salt | lamarque_historical_2010 | lamarque_historical_2010 | **Confirmed 1-0**. MAM3 carries sea salt prognostically. |
| LU | Land-use change | Hurtt et al. 2011 | **✗ dev** | TV | Hurtt et al. (2006) (inferred from NCAR family). CLM4 land is shared CCSM4/CESM1 infrastructure — Gent 2011 confirms Hurtt 2006, not 2011. | — | — | **Deviation inferred** from Gent 2011 NCAR family. Second-pass 2026-06-21. |
| SO | Solar irradiance | Wang et al. 2005 | **✓ std** | TV | Wang & Lean 2005 (SOLAR_TSI_Lean file; inherited from CCSM4 family; Gent 2011 confirms) | wang_modeling_2005 | wang_modeling_2005 | Confirmed. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **✗ dev** | TV | Ammann et al. (2003) (inferred from NCAR family). Gent 2011 confirms CCSM4 = Ammann 2003 "exactly as in CCSM3." Shared CCSM4/CESM1 infrastructure = same volcanic OD. | ammann_monthly_2003 | ammann_monthly_2003 | **Deviation inferred** from Gent 2011. Second-pass 2026-06-21. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### Aerosol emissions inputs (MAM3 drivers)

| Input | Applied? | Dataset / source | Notes |
|-------|----------|-----------------|-------|
| Aerosol precursor emissions (SO2/BC/OC/dust/SS) | Yes | Lamarque et al. 2010 gridded historical emissions | Confirmed 1-0. Drive all 6 MAM3 prognostic aerosol species (1850–2005 TV). |
| BC on snow/ice | Likely yes | Lamarque et al. 2010 BC deposition | MAM3 with interactive BC; expected BC-snow pathway applies |

### Provenance
- Durack et al. 2016 model list: included
- Stage 3 workflow: wf_a0c75ead-5fd (resumed); SD/SI/BC/OC/MD/SS exc confirmed 1-0
- Key sources: Liu 2012 (MAM3 canonical description); Meehl 2013 (CESM1-CAM5 CMIP5 historical)
