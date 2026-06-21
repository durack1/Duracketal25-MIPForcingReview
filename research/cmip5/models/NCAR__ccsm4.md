# ccsm4 — NCAR (National Center for Atmospheric Research, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ncar_ccsm3_0 — CCSM4 follows CCSM3; same NCAR coupled system lineage
- **Model family / lineage:** CCSM3 (CMIP3) → CCSM4 (CMIP5) → CESM1/2 (CMIP6). CCSM4 is an AOGCM (no active carbon cycle). CAM4 atmosphere replaces CAM3; improved sea-ice and land components. CAM4 uses prescribed aerosols with direct effect only (no indirect effect — confirmed by contrast with CESM1-CAM5 in Meehl 2013).
- **Atmosphere / ocean components:** CAM4 atmosphere (0.9°×1.25°, 26 levels; no interactive chemistry or aerosols) + POP2 ocean + CLM4 land + CICE4 sea ice
- **Primary documentation paper(s):** Gent, P.R., et al. (2011). The Community Climate System Model Version 4. *J. Climate* 24(19), 4973–4991. doi:10.1175/2011JCLI4083.1 [gent_community_2011 *(add)*]
- **Forcing-specific reference(s):** Liu, X., et al. (2012) [liu_toward_2012] — provides contrast confirming CCSM4 prescribed aerosols; Meehl, G.A., et al. (2013) [meehl_climate_2013]

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✗ dev** | TV | IPCC Third Assessment Report (TAR) GHG concentrations — Gent 2011 Sect. 3 (p. 4978): "The CO2 and other greenhouse gases (methane and nitrous oxide) are specified as in the IPCC third assessment report." NOT Meinshausen et al. 2011. | — | — | **Deviation confirmed.** IPCC TAR = Schimel et al. (1996) / Joos et al. concentrations, NOT CMIP5-standard Meinshausen 2011. Applies to all 6 NCAR CMIP5 models. Gent 2011 Sect. 3. |
| O  | Ozone | Cionni et al. 2011 | ? std | TV | Cionni et al. 2011 (expected) | cionni_ozone_2011 | cionni_ozone_2011 | CAM4 has no interactive chemistry; Cionni2011 expected |
| SD | Sulphate direct | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD, direct effect only (Meehl2013 contrast confirms no indirect); specific file aero_1.9x2.5_L26*.nc claimed but adversarially refuted |
| SI | Sulphate indirect | Model-dependent | n/a | n/a | — | — | — | CAM4 has prescribed aerosol direct effect only; no aerosol indirect effect confirmed via Meehl2013 contrast (1-0) |
| BC | Black carbon | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD |
| OC | Organic carbon | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD |
| MD | Mineral dust | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD |
| SS | Sea salt | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD |
| LU | Land-use change | Hurtt et al. 2011 | **✗ dev** | TV | Hurtt et al. (2006) — Gent 2011 Sect. 3 (p. 4978): "Land cover changes in the CLM are prescribed on an annual basis according to a global historical transient land-use and land cover dataset (Hurtt et al. 2006)." NOT Hurtt et al. 2011 (CMIP5 standard). | — | — | **Deviation confirmed.** Hurtt 2006 (Global Change Biol. 12:1208-1229) = precursor paper; Hurtt 2011 = CMIP5 standard. Applies to all 6 NCAR CMIP5 models. Gent 2011 Sect. 3. |
| SO | Solar irradiance | Wang et al. 2005 | **✓ std** | TV | Wang & Lean 2005 TSI reconstruction (file: SOLAR_TSI_Lean_1610-2007_annual_c090324.nc); Gent 2011 Sect. 3: "solar output anomaly time series is described in Lean et al. (2005)" | wang_modeling_2005 | wang_modeling_2005 | **Confirmed.** NCAR SVN file named for Lean but = Wang, Lean & Sheeley (2005) reconstruction. Gent 2011 also confirms SO applied; Lean 2005 = same underlying TSI dataset. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **✗ dev** | TV | Ammann et al. (2003) — Gent 2011 Sect. 3 (p. 4978): "The CCSM4 volcanic activity is included by a time series of varying aerosol optical depths, **exactly as in CCSM3 (Ammann et al. 2003)**." Gent 2011 Sect. 7a (p. 4987): "Volcanoes are implemented in exactly the same way in both models." | ammann_monthly_2003 | ammann_monthly_2003 | **Deviation confirmed.** Ammann et al. (2003) GRL 30(1657) = latitudinally varying monthly AOD; NOT Sato 1993 updated (Taylor 2012 standard). Applies to all 6 NCAR CMIP5 models. Note: Last Millennium run uses Gao et al. 2008 (different experiment). |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | CCSM4 is free-running |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle or atmospheric chemistry). Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 3 workflow: wf_a0c75ead-5fd (resumed); 9 confirmed, 5 killed
- Key sources: Gent 2011 (CCSM4 desc.); Meehl 2013 (direct/indirect contrast); Liu 2012 (MAM3/contrast)
