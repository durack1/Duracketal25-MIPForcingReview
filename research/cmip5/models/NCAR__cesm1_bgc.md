# cesm1_bgc — NCAR (National Center for Atmospheric Research, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none direct — first NCAR ESM; builds on CCSM4 infrastructure
- **Model family / lineage:** CCSM4 → CESM1-BGC (adds BGC = BioGeoChemistry active carbon cycle). CAM4 atmosphere (same as CCSM4); adds CLM4-CN land carbon + POP2-BEC ocean carbon. Full ESM. All atmospheric forcings inherited unchanged from CCSM4 (confirmed by Lindsay2014 primary source, adversarial vote inconclusive due to session limit).
- **Atmosphere / ocean components:** CAM4 atmosphere + POP2-BEC ocean biogeochemistry + CLM4-CN land carbon + CICE4
- **Primary documentation paper(s):** Lindsay, K., et al. (2014). Preindustrial-control and 20th-century carbon cycle experiments with the Earth System Model CESM1(BGC). *J. Climate* 27(24), 8981–9005. doi:10.1175/JCLI-D-12-00565.1 [lindsay_preindustrial_2014 *(add)*]
- **Forcing-specific reference(s):** Lindsay et al. 2014 for ESM-specific inputs; Gent et al. 2011 [gent_community_2011] for inherited atmospheric forcings

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✗ dev** | TV | IPCC TAR GHG concentrations (inherited from CCSM4). Gent 2011 Sect. 3: "The CO2 and other greenhouse gases (methane and nitrous oxide) are specified as in the IPCC third assessment report." NOT Meinshausen 2011. CESM1-BGC uses same CAM4 atmosphere as CCSM4. PRES/PROG CO2 mode distinction is ESM-specific — see ESM section. | — | — | **Deviation inferred from Gent 2011.** Shared CCSM4 atmospheric infrastructure = IPCC TAR GHGs. Second-pass 2026-06-21. |
| O  | Ozone | Cionni et al. 2011 | ? std | TV | Cionni et al. 2011 (inherited from CCSM4; CAM4 no interactive chem) | cionni_ozone_2011 | cionni_ozone_2011 | |
| SD | Sulphate direct | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD; inherited from CCSM4) | lamarque_historical_2010 | lamarque_historical_2010 | Direct effect only |
| SI | Sulphate indirect | Model-dependent | n/a | n/a | — | — | — | CAM4 direct effect only (inherited from CCSM4) |
| BC | Black carbon | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | BC-on-snow also applied (see ESM section) |
| OC | Organic carbon | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | |
| MD | Mineral dust | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | |
| SS | Sea salt | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | |
| LU | Land-use change | Hurtt et al. 2011 | **✗ dev** | TV | Hurtt et al. (2006) (inherited from CCSM4). Gent 2011 Sect. 3: "Land cover changes in the CLM are prescribed on an annual basis according to...Hurtt et al. 2006." NOT Hurtt 2011. | — | — | **Deviation inferred from Gent 2011.** CLM4-CN land is shared CCSM4 infrastructure = Hurtt 2006. Note: CLM4-CN land carbon interacts with LU change. Second-pass 2026-06-21. |
| SO | Solar irradiance | Wang et al. 2005 | **✓ std** | TV | Wang & Lean 2005 (SOLAR_TSI_Lean_1610-2007_annual_c090324.nc; inherited from CCSM4) | wang_modeling_2005 | wang_modeling_2005 | Inherited from CCSM4; CCSM4 confirmed. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **✗ dev** | TV | Ammann et al. (2003) (inherited from CCSM4). Gent 2011 Sect. 3: "exactly as in CCSM3 (Ammann et al. 2003)." NOT Sato 1993 updated. | ammann_monthly_2003 | ammann_monthly_2003 | **Deviation inferred from Gent 2011.** Shares CCSM4 infrastructure = Ammann 2003 volcanic OD. Second-pass 2026-06-21. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs

| ESM input | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----------|---------|----------|-----------------|----------|-------|
| N-deposition (NHx/NOy) | ? (primary source; adv. inconclusive) | TV | Lamarque et al. 2010 time-varying fields | lamarque_historical_2010 | Drives CLM4-CN (land) and POP2-BEC (ocean) N cycles. Lindsay 2014 (primary source) states Lamarque2010 N-dep fields; adversarial vote 0-0 (session limit, not refuted). NOTE: this is Lamarque **2010**, not 2013 ACCMIP — a deviation from GFDL ESM2G/M which used Lamarque 2013. |
| CO2 mode | ? (primary source; adv. inconclusive) | TV | PRES = prescribed (Meinshausen2011 uniform conc.); PROG = prognostic (3D CO2 tracer from surface fluxes) | lindsay_preindustrial_2014 | Lindsay 2014 ran two modes: PRES (conc.-driven like standard historical) and PROG (emission-driven; `esmHistorical` equivalent). Standard `historical` = PRES mode. |
| Iron/dust deposition (POP2-BEC) | ? (primary source; adv. inconclusive) | FXc | Luo et al. 2003 fixed climatology | luo_gridded_2003 *(add)* | POP2-BEC iron cycle uses fixed climatological iron deposition (Luo 2003), not time-varying. |
| BC on snow/ice | likely | TV | Lamarque et al. 2010 BC deposition | lamarque_historical_2010 | Inherited from CCSM4 (Lindsay 2014 lists "aerosol deposition including BC on snow" among inherited CCSM4 forcings) |

### Provenance
- Durack et al. 2016 model list: included
- Stage 3 workflow: wf_a0c75ead-5fd (resumed); ESM inputs from first-run research claims (0-0 session-limit; not adversarially refuted)
- Key source: Lindsay 2014 (primary) for all ESM inputs; Gent 2011 for inherited atmospheric forcings
