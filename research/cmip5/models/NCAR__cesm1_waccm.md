# cesm1_waccm — NCAR (National Center for Atmospheric Research, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none direct — WACCM is NCAR's whole-atmosphere chemistry-climate model; new to CMIP5
- **Model family / lineage:** CESM1(WACCM) = Whole Atmosphere Community Climate Model. Extends from surface to lower thermosphere (~140 km, 66 levels); full MOZART-based interactive chemistry covers both troposphere and stratosphere. Ozone is computed prognostically (EXCEEDS Cionni2011 prescribed standard). NOT based on CAM5 — uses CAM4 dynamics with WACCM chemistry extension. Aerosol treatment is therefore likely prescribed OD (CAM4-like, not MAM3), but unconfirmed.
- **Atmosphere / ocean components:** WACCM atmosphere (1.9°×2.5°, 66 levels up to ~140 km; full interactive chemistry) + POP2 ocean + CLM4 land + CICE4
- **Primary documentation paper(s):** Marsh, D.R., et al. (2013). Climate change from 1850 to 2005 simulated in CESM1(WACCM). *J. Climate* 26(19), 7372–7391. doi:10.1175/JCLI-D-12-00558.1 [marsh_climate_2013 *(add)*]
- **Forcing-specific reference(s):** Lamarque et al. 2010 [lamarque_historical_2010] — drives WACCM interactive chemistry; Wang et al. 2005 [wang_modeling_2005]

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✗ dev** | TV | IPCC TAR GHG concentrations (inferred from NCAR family). Gent 2011 (CCSM4): "specified as in the IPCC third assessment report." WACCM uses same CLM4/CICE4/coupler infrastructure as CCSM4 = shared GHG configuration. | — | — | **Deviation inferred** from Gent 2011 NCAR family. Second-pass 2026-06-21. |
| O  | Ozone | Cionni et al. 2011 (models w/o interactive chem) | **✓ exc** | TV+ | WACCM MOZART interactive whole-atmosphere chemistry (Marsh et al. 2013) | marsh_climate_2013 | marsh_climate_2013 | **Confirmed 1-0 (medium confidence)**. WACCM's defining feature is interactive stratospheric + tropospheric ozone chemistry. Ozone computed prognostically — not prescribed from Cionni2011. Confidence medium because Marsh 2013 was paywalled (403); scientifically unambiguous. |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | TV | Likely prescribed OD (CAM4-based; not MAM3) | lamarque_historical_2010 | lamarque_historical_2010 | WACCM uses CAM4 dynamics, not CAM5. Aerosol treatment unconfirmed — likely prescribed OD as per CAM4, not MAM3 interactive. |
| SI | Sulphate indirect | Model-dependent | ? | ? | Likely n/a (if CAM4-like prescribed aerosols, direct only) | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | Likely prescribed OD (as CAM4 base) | lamarque_historical_2010 | lamarque_historical_2010 | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | Likely prescribed OD | lamarque_historical_2010 | lamarque_historical_2010 | |
| MD | Mineral dust | — | ? | ? | Unknown | — | — | |
| SS | Sea salt | — | ? | ? | Unknown | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | **✗ dev** | TV | Hurtt et al. (2006) (inferred from NCAR family). CLM4 is shared CCSM4 infrastructure = Hurtt 2006. | — | — | **Deviation inferred.** Second-pass 2026-06-21. |
| SO | Solar irradiance | Wang et al. 2005 | **✓ std** | TV | Wang & Lean 2005 (SOLAR_TSI_Lean; inherited from CCSM4 family; Gent 2011 confirms). WACCM also uses spectrally-resolved UV for photolysis. | wang_modeling_2005 | wang_modeling_2005 | Confirmed. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **✗ dev** | TV | Ammann et al. (2003) (inferred from NCAR family). CCSM4/CESM1 infrastructure = Ammann 2003 volcanic OD. WACCM stratospheric chemistry also requires external volcanic injection; same Ammann 2003 dataset likely. | ammann_monthly_2003 | ammann_monthly_2003 | **Deviation inferred.** Second-pass 2026-06-21. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### Chemistry-specific forcing inputs

| Input | Applied? | Dataset / source | Notes |
|-------|----------|-----------------|-------|
| Atmospheric chem emissions (NOx/VOC/CO/SO2/halogen species) | Yes | Lamarque et al. 2010 | Drive WACCM MOZART interactive chemistry (ozone precursors, stratospheric halogen loading) |
| Solar UV (spectrally-resolved) | Yes | Wang et al. 2005 or spectral variant | WACCM stratospheric photolysis responds to UV spectrum; may use spectrally-resolved version of Wang2005 TSI |
| BC on snow/ice | Likely | Lamarque et al. 2010 | |

### Open questions
1. **Aerosol treatment**: Does CESM1-WACCM use MAM3 (like CESM1-CAM5) or CAM4-like prescribed OD? WACCM is built on CAM4 dynamics, strongly suggesting prescribed aerosols, but unconfirmed.
2. **Solar UV**: Is standard Wang2005 TSI used, or a spectrally-resolved UV dataset for stratospheric photolysis in WACCM?
3. **Volcanic aerosol**: Does WACCM's interactive stratospheric chemistry replace the need for Sato-style prescribed volcanic OD, or is it still injected externally?

### Provenance
- Durack et al. 2016 model list: included
- Stage 3 workflow: wf_a0c75ead-5fd (resumed); O=exc confirmed 1-0 (medium confidence; Marsh 2013 paywalled)
- Key source: Marsh 2013 (CESM1-WACCM CMIP5 historical)
