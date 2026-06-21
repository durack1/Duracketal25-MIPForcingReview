# gfdl_esm2g — GFDL (Geophysical Fluid Dynamics Laboratory, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** gfdl_cm2_1 (ESM branch: new TOPAZ ocean biogeochemistry + LM3 land carbon added; GOLD isopycnal ocean replaces MOM)
- **Model family / lineage:** CM2.1 → ESM2G (GOLD isopycnal ocean) / ESM2M (MOM z-level ocean) — parallel ESM branch. Both share AM2.1 atmosphere and TOPAZ/LM3 carbon components. → ESM4 (CMIP6). ESM2G is the isopycnal-ocean variant; ESM2M (z-level) is more widely used in analyses.
- **Atmosphere / ocean components:** AM2.1 (2°×2.5°, 24 levels; NO interactive chemistry) + GOLD isopycnal ocean + LM3 land + TOPAZ ocean biogeochemistry (carbon, nitrogen, phosphorus, silicon, iron cycles)
- **Primary documentation paper(s):** Dunne, J.P., et al. (2012). GFDL's ESM2 global coupled climate-carbon Earth System Models. Part I: Physical formulation and baseline simulation characteristics. *J. Climate* 25(19), 6646–6665. doi:10.1175/JCLI-D-11-00560.1 [dunne_gfdl_2012 *(add)*]; Dunne, J.P., et al. (2013). Part II: Carbon system formulation and baseline simulation characteristics. *J. Climate* 26(7), 2247–2267. doi:10.1175/JCLI-D-12-00150.1 [dunne_gfdl_2013 *(add)*]
- **Forcing-specific reference(s):** Lamarque et al. 2013 (*ACP* doi:10.5194/acp-13-7997-2013) [lamarque_global_2013 *(add)*] — ACCMIP N/S deposition for ESM biogeochemistry; PCMDI CMIP5 ESM FAQ (gfdl.noaa.gov/esms-cmip5-faqs/)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

`Protocol` = Taylor et al. 2012 standard CMIP5 `historical` recommended dataset.
`Verdict` = **✓ standard** · **＋ exceeds standard** · **✗ deviates** · **~ unclear**.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓ standard | TV | **Meinshausen et al. 2011** GHG concentrations — concentration-driven `historical` run. GFDL ESM FAQ confirms ESMs support BOTH concentration-driven (CO2 restored to externally specified value) and emission-driven (CO2 free to evolve from fossil-fuel + interactive fluxes) modes. The standard `historical` experiment is concentration-driven. | GFDL ESM FAQ; PCMDI CMIP5 forcing page; Meinshausen et al. 2011 | meinshausen_rcp_2011 | Refuted claim that ESMs are exclusively emission-driven. Standard `historical` = concentration-driven. `esmHistorical` variant uses fossil-fuel CO2 emissions from PCMDI (two gridded datasets: fossil-fuel incl. cement+gas-flaring; and LUC CO2). |
| O  | Ozone | Cionni et al. 2011 | ✓ standard | TV | **Cionni et al. 2011** AC&C/SPARC ozone (1850–2009). AM2.1 has no interactive chemistry — prescribed ozone is appropriate and expected. | PCMDI CMIP5 forcing page; Cionni et al. 2011 | cionni_ozone_2011 | Contrast with CM3 (interactive ozone); ESM2G/M use prescribed |
| SD | Sulphate aerosol — direct | Lamarque et al. 2010 | ✓ standard | TV | **Lamarque et al. 2010** historical aerosol emissions or prescribed OD. AM2.1 is a prescribed-aerosol model — no interactive aerosol chemistry (contrast with CM3). | Lamarque et al. 2010; Taylor et al. 2012 | lamarque_historical_2010 | |
| SI | Sulphate aerosol — indirect | Model-dependent | ~ unclear | ? | Aerosols in AM2.1 (used by ESM2G) are prescribed concentration/OD fields — Dunne 2012 p.3 explicitly: "atmospheric chemistry and aerosol distributions in the versions described here are externally specified." Donner 2011 section 1 states aerosol indirect effects were a key new capability of AM3 that "could not be addressed with AM2," implying AM2.1 used by ESM2G does not include a meaningful aerosol indirect effect. | Dunne et al. 2012; Donner et al. 2011 | dunne_gfdl_2012; donner_gfdl_2011 | AM2.1 prescribed aerosols; no prognostic aerosol indirect effect. Dunne 2012 does not describe any indirect parameterization for ESM2G. |
| BC | Black carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 — prescribed | Lamarque et al. 2010 | lamarque_historical_2010 | |
| OC | Organic carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 — prescribed | Lamarque et al. 2010 | lamarque_historical_2010 | |
| MD | Mineral dust | Model-dependent | ✓ standard | TV | **Prescribed** aerosol concentration fields in AM2.1. Dunne 2012 p.3 explicitly lists dust among "Three-dimensional, time mean distributions of aerosols (i.e., black carbon, organic carbon, sulfates, dust, sea salt, and volcanoes) are specified as input concentration fields (V. Naik and D. Schwarzkopf 2011, personal communication)." Specific dust climatological dataset not named; prepared by Naik and Schwarzkopf (GFDL). | Dunne et al. 2012 (p. 6648) | dunne_gfdl_2012 | Confirmed prescribed (not interactive) from Dunne 2012 section 2b. Specific climatological dataset source is an internal GFDL preparation (Naik and Schwarzkopf 2011, pers. comm.). |
| SS | Sea salt | Model-dependent | ✓ standard | TV | **Prescribed** aerosol concentration fields in AM2.1. Dunne 2012 p.3 explicitly lists sea salt among the specified aerosol concentration fields — same Naik and Schwarzkopf 2011 preparation. | Dunne et al. 2012 (p. 6648) | dunne_gfdl_2012 | Confirmed prescribed (not interactive) from Dunne 2012 section 2b. |
| LU | Land-use change | Hurtt et al. 2011 | ✓ standard | TV | **Hurtt et al. 2011** land-use transitions. LM3 land model applies time-varying land cover; LU also contributes CO2 flux in emission-driven `esmHistorical` runs. | Hurtt et al. 2011 | hurtt_harmonization_2011 | LU interacts with ESM carbon cycle via LM3 |
| SO | Solar irradiance | Wang et al. 2005 | ~ unclear | ? | CMIP5 standard solar not confirmed from Dunne 2012 directly. Dunne 2012 does not name a solar dataset for the historical run. Donner 2011 (GFDL CM3) confirms GFDL used Fröhlich and Lean (2004)/TIM for CMIP5 historical solar; ESM2G likely uses same GFDL-wide dataset but no ESM2G-specific documentation found. | Wang et al. 2005 (standard) | wang_modeling_2005 | Unverified at ESM2G model level. Dunne 2012 does not cite a solar forcing dataset for the historical run. Cross-model inference from Donner 2011 (CM3) points to Fröhlich and Lean 2004/TIM. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ~ unclear | ? | Standard Sato 1993 updated not confirmed from Dunne 2012 directly. Dunne 2012 p.3 lists "volcanoes" among prescribed aerosol concentration fields for the preindustrial control, confirming volcanic forcing is prescribed. Historical time series source not named. Donner 2011 confirms GFDL CM3 used Stenchikov et al. 2006 / Sato 1993 updated; ESM2G likely same but no ESM2G-specific source found. | Sato et al. 1993 (standard) | sato_stratospheric_1993 | Dunne 2012 p.3 confirms volcanic aerosols are prescribed in AM2.1; historical dataset source unconfirmed. Cross-model inference from Donner 2011 suggests Stenchikov 2006 / Sato 1993 updated. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
ESM2G is a full Earth System Model with active TOPAZ ocean biogeochemistry (C/N/P/Si/Fe cycles) and LM3 land carbon. Additional forcing inputs:

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | Likely yes | **Lamarque et al. 2013** (ACCMIP multi-model N/S deposition, ACP doi:10.5194/acp-13-7997-2013) | Confirmed available dataset; drives LM3 land N-cycle and TOPAZ ocean N-cycle. Specific ingestion by GFDL ESM2G not confirmed from per-model documentation. |
| Sulfate deposition | Likely yes | **Lamarque et al. 2013** (ACCMIP) | Same dataset; sulfate deposition to land/ocean biogeochemistry |
| CO2 mode: concentration-driven (`historical`) | Yes | Meinshausen et al. 2011 concentrations | Standard `historical` experiment is concentration-driven |
| CO2 mode: emission-driven (`esmHistorical`) | Yes (optional variant) | PCMDI gridded fossil-fuel CO2 + LUC CO2 emissions datasets | PCMDI verbatim: "Two gridded CO2 emissions datasets … fossil fuel CO2 (incl. cement and gas flaring) and CO2 from historical land use changes" |
| Iron/dust deposition to ocean | Likely yes | Mahowald et al. or model-specific | TOPAZ has an iron cycle; dust/iron deposition required; specific dataset unconfirmed |
| Ocean carbon initialisation | Yes | GLODAP or equivalent | DIC/alkalinity initial conditions for TOPAZ; specific dataset unconfirmed |
| BC on snow/ice | ? | Lamarque et al. 2010 (prescribed) | AM2.1 prescribed aerosol fields; BC-snow cryosphere albedo pathway not mentioned in Dunne 2012. Dunne 2012 p.3 lists BC among prescribed concentration fields but does not indicate a snow-albedo pathway. Unconfirmed. |
| Atmospheric chemistry inputs | No | — | AM2.1 has no interactive chemistry; NOx/VOC inputs not relevant |

### Deviations from Taylor 2012 standard protocol
- **None confirmed** for the standard 12-key atmospheric forcings. ESM2G follows the standard prescribed-forcing protocol for all atmospheric forcing.
- **SI: likely absent or minimal** — Dunne 2012 notes aerosols are "externally specified" in AM2.1, and Donner 2011 confirms indirect effects were a new capability added in AM3 not available in AM2. No aerosol indirect parameterization is documented for ESM2G.
- **MD, SS: confirmed prescribed** — consistent with ✓ standard (prescribed from Naik/Schwarzkopf GFDL internal preparation per Dunne 2012).
- **ESM-specific additions** (N-deposition, iron/dust deposition, CO2 emission datasets) are additions to the standard protocol required by the ESM components, not deviations.

### Notes on CMIP3 lineage
- New ESM capability relative to CMIP3 CM2.1: TOPAZ ocean biogeochemistry and LM3 land carbon require additional forcing datasets (N-deposition, CO2 emissions for esmHistorical) not present in any CMIP3 model. Atmospheric forcing (AM2.1) is similar to CM2.1 but dataset versions updated to CMIP5 standards.

## Open questions
1. Iron/dust deposition to ocean: which specific dataset drove TOPAZ iron cycle? (Mahowald et al.? Internal GFDL dataset?)
2. N-deposition: confirmed Lamarque et al. 2013 ACCMIP dataset is the available standard; did GFDL ESM2G ingest it for TOPAZ + LM3?
3. Ocean carbon initialisation: GLODAP or CLIVAR/WOCE?
4. Does ESM2G differ from ESM2M in any forcing detail? Dunne 2012 confirms both use identical AM2.1 with same prescribed aerosol fields; ocean forcing differs only in biogeochemistry initialization, not atmospheric forcing.
5. SO: Donner 2011 points to Fröhlich and Lean 2004/TIM for GFDL CMIP5 historical solar; no ESM2G-specific confirmation from Dunne 2012.
6. VL: Dunne 2012 confirms volcanic is prescribed; historical time series dataset (Stenchikov 2006 / Sato 1993 updated) unconfirmed from ESM2G-specific documentation.
7. BC on snow/ice: not addressed in Dunne 2012; unclear if AM2.1 prescribed BC fields couple to a snow-albedo pathway.

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: GFDL ESM CMIP5 FAQ (gfdl.noaa.gov/esms-cmip5-faqs/); Dunne et al. 2012 Part I doi:10.1175/JCLI-D-11-00560.1; PCMDI CMIP5 forcing page; Taylor et al. 2012; Lamarque et al. 2013 (ACCMIP deposition); Donner et al. 2011 (for AM2 vs AM3 indirect-effect comparison; GFDL solar forcing documentation)
- Key quote (GFDL ESM FAQ): "In Concentrations runs, the atmospheric concentration of CO2 is restored to an externally specified value. In Emissions runs, the atmospheric concentration of CO2 is free to respond to the specified fossil fuel emissions as well as interactive land and ocean fluxes."
- Key quote (PCMDI CMIP5 forcing page): "Two gridded CO2 emissions datasets for forcing historical runs of CMIP5 Earth Systems Models (ESMs) are provided … 1) fossil fuel CO2 emissions (including emissions from cement and gas flaring), and 2) CO2 emissions associated with historical land use changes."
- Stage 1 adversarial workflow: wf_ad589a7e-9e9; CO2 concentration vs. emission mode confirmed 1-0; ACCMIP N/S deposition confirmed 1-0; iron/dust/initialisation unconfirmed
