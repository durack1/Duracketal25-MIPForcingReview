<!-- CMIP6 forcing record — CAS-ESM2-0 (CAS). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# CAS-ESM2-0 — CAS (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** IAP AGCM 5.0 atmosphere (T85, ~1.4°, L35, top ~2.2 hPa) + CoLM land + LICOM2.0 ocean + CICE4 + IAP OBGCM ocean biogeochemistry. AOGCM/ESM hybrid. **IAP AACM** integrated aerosol–atmospheric-chemistry module (NOT a CMIP6 prescribed aerosol product).
- **Primary documentation paper(s):** Zhang et al. 2020 (*JAMES* doi:10.1029/2020MS002210); Wei et al. 2019 (*ACP* doi:10.5194/acp-19-8269-2019, IAP-AACM description)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | Meinshausen et al. 2017 — CO2, CH4, N2O, CFC11, CFC12 | Meinshausen et al. 2017 doi:10.5194/gmd-10-2057-2017 | Explicitly stated: "GHG concentrations…from Meinshausen et al. (2017)" |
| O  | Ozone | ✓std | TV | Prescribed from CMIP6 — "stratospheric aerosols and ozone concentrations from CMIP6" (not interactive for historical). MOZART chemistry used in IAP AACM but ozone prescribed for historical. | Zhang et al. 2020 | Paper states ozone concentrations prescribed from CMIP6 datasets for historical/AMIP experiments. |
| SD | Aerosol — sulphate direct | ~ | TV | **IAP AACM** (integrated aerosol+chemistry module) — centre-specific interactive scheme, NOT a CMIP6-prescribed aerosol product. Anthropogenic emissions from Hoesly et al. 2018 (CEDS) and van Marle et al. 2017 (BB4CMIP6). | Zhang et al. 2020; Wei et al. 2019; WDCC C6CMCASCE0hi | "emissions of short-lived species from Hoesly et al. (2018) and van Marle et al. (2017)." IAP AACM module is interactive (not prescribed field). |
| SI | Aerosol — sulphate indirect | ~ | TV | IAP AACM interactive indirect effects coupled to cloud microphysics (same as MAM in CAM). | Zhang et al. 2020 | As SD. |
| BC | Black carbon | ~ | TV | IAP AACM; anthropogenic BC emissions from Hoesly et al. 2018 (CEDS) + van Marle et al. 2017 (BB4CMIP6); interactive aging. | Zhang et al. 2020 | As SD. "aging black carbon (BC) particles" simulated interactively. |
| OC | Organic carbon | ~ | TV | IAP AACM; anthropogenic OC emissions from Hoesly et al. 2018 (CEDS) + van Marle et al. 2017 (BB4CMIP6). | Zhang et al. 2020 | As SD. |
| MD | Mineral dust | ＋exc | TV | Online interactive dust emissions — IAP AACM with Shao (2004) dust emission scheme coupled to CoLM land model. "natural aerosol (dust and sea salt) emissions are interactively calculated in the model." | Zhang et al. 2020 | Explicitly stated as online interactive. |
| SS | Sea salt | ＋exc | TV | Online interactive sea salt emissions — IAP AACM, scheme of Athanasopoulou et al. (2008). "natural aerosol (dust and sea salt) emissions are interactively calculated in the model." | Zhang et al. 2020 | Explicitly stated as online interactive. |
| LU | Land-use change | ? | ? | CoLM land; LUH2 v2.1h expected but not confirmed in paper. | — | Paper does not name LUH2 explicitly. |
| SO | Solar irradiance | ✓std | TV | Matthes et al. 2017 / SOLARIS-HEPPA | Matthes et al. 2017 doi:10.5194/gmd-10-3513-2017 | Explicitly stated: "solar forcing from Matthes et al. (2017)" |
| VL | Volcanic aerosols | ✓std | TV | Stratospheric aerosols from CMIP6 — "stratospheric aerosols and ozone concentrations from CMIP6" (Thomason 2018 implied). | Zhang et al. 2020 | Paper states "stratospheric aerosols…from CMIP6" — consistent with Thomason 2018 / IACETH dataset. |
| FC | Flux corrections | n/a | n/a | None | | |

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); confirmed: aerosol module = IAP AACM (WDCC C6CMCASCE0hi + Wei 2019); all other forcing unconfirmed
- Key sources: WDCC ES-DOC metadata C6CMCASCE0hi; Wei et al. 2019 (*ACP* doi:10.5194/acp-19-8269-2019, IAP-AACM description); Zhang et al. 2020 (*JAMES* doi:10.1029/2020MS002210)

## Notes
Zhang et al. 2020 (*JAMES* doi:10.1029/2020MS002210) provides explicit forcing statements (Section 2.5 and surrounding text, p. 9 of 35): GHGs from Meinshausen et al. 2017; emissions of short-lived species (anthropogenic aerosol precursors) from Hoesly et al. 2018 (CEDS) and van Marle et al. 2017 (BB4CMIP6); solar forcing from Matthes et al. 2017; "stratospheric aerosols and ozone concentrations from CMIP6" (prescribed, not interactive for historical runs). Mineral dust and sea salt are confirmed online interactive via IAP AACM (Shao 2004 dust scheme; Athanasopoulou 2008 sea salt scheme; "natural aerosol (dust and sea salt) emissions are interactively calculated"). LUH2 / land-use dataset not named explicitly.
