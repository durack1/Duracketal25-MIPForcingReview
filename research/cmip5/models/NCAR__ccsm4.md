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
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? std | TV | Meinshausen et al. 2011 (expected) | meinshausen_rcp_2011 | meinshausen_rcp_2011 | Standard; not explicitly confirmed in Stage 3 workflow |
| O  | Ozone | Cionni et al. 2011 | ? std | TV | Cionni et al. 2011 (expected) | cionni_ozone_2011 | cionni_ozone_2011 | CAM4 has no interactive chemistry; Cionni2011 expected |
| SD | Sulphate direct | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD, direct effect only (Meehl2013 contrast confirms no indirect); specific file aero_1.9x2.5_L26*.nc claimed but adversarially refuted |
| SI | Sulphate indirect | Model-dependent | n/a | n/a | — | — | — | CAM4 has prescribed aerosol direct effect only; no aerosol indirect effect confirmed via Meehl2013 contrast (1-0) |
| BC | Black carbon | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD |
| OC | Organic carbon | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD |
| MD | Mineral dust | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD |
| SS | Sea salt | Lamarque et al. 2010 | std | TV | Lamarque et al. 2010 (prescribed OD) | lamarque_historical_2010 | lamarque_historical_2010 | Prescribed OD |
| LU | Land-use change | Hurtt et al. 2011 | ? std | TV | Hurtt et al. 2011 (expected) | hurtt_harmonization_2011 | hurtt_harmonization_2011 | Expected standard; not explicitly confirmed |
| SO | Solar irradiance | Wang et al. 2005 | **✓ std** | TV | Wang & Lean 2005 TSI reconstruction (file: SOLAR_TSI_Lean_1610-2007_annual_c090324.nc) | wang_modeling_2005 | wang_modeling_2005 | **Confirmed 1-0** from NCAR SVN input-data repo; 'Lean' filename and 'Wang et al. 2005' refer to the same TSI paper (Wang, Lean & Sheeley 2005) |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **? unresolved** | TV | Sato-updated OR NCAR-internal format? | — | — | **UNRESOLVED.** CCSM3 used Ammann et al. 2003. Whether CCSM4 switched to Sato-updated (CMIP5 std) is unresolved: specific prototype-file claim was adversarially refuted (0-1), but no positive Sato confirmation obtained. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | CCSM4 is free-running |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle or atmospheric chemistry). Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 3 workflow: wf_a0c75ead-5fd (resumed); 9 confirmed, 5 killed
- Key sources: Gent 2011 (CCSM4 desc.); Meehl 2013 (direct/indirect contrast); Liu 2012 (MAM3/contrast)
