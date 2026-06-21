# gfdl_esm2m — GFDL (Geophysical Fluid Dynamics Laboratory, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** gfdl_cm2_1 (ESM branch; MOM z-level ocean counterpart to ESM2G's GOLD isopycnal ocean)
- **Model family / lineage:** CM2.1 → ESM2M (MOM4p1 z-level ocean) / ESM2G (GOLD isopycnal ocean). ESM2M is the more widely used of the two in CMIP5 analyses. Both share AM2.1/LM3/TOPAZ. → ESM4 (CMIP6).
- **Atmosphere / ocean components:** AM2.1 (2°×2.5°, 24 levels; NO interactive chemistry) + MOM4p1 z-level ocean (1°) + LM3 land + TOPAZ ocean biogeochemistry
- **Primary documentation paper(s):** Dunne, J.P., et al. (2012). GFDL's ESM2 global coupled climate-carbon Earth System Models. Part I. *J. Climate* 25(19), 6646–6665. doi:10.1175/JCLI-D-11-00560.1 [dunne_gfdl_2012 *(add)*]; Dunne, J.P., et al. (2013). Part II: Carbon system. *J. Climate* 26(7), 2247–2267. doi:10.1175/JCLI-D-12-00150.1 [dunne_gfdl_2013 *(add)*]
- **Forcing-specific reference(s):** As for ESM2G — atmospheric forcing treatment expected identical; ocean physics differs (z-level vs. isopycnal). See ESM2G file for ESM-specific input documentation.

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓ standard | TV | **Meinshausen et al. 2011** GHG concentrations — concentration-driven `historical`. Both concentration-driven (`historical`) and emission-driven (`esmHistorical`) modes available; standard `historical` is concentration-driven. | GFDL ESM FAQ; Meinshausen et al. 2011 | meinshausen_rcp_2011 | Identical to ESM2G |
| O  | Ozone | Cionni et al. 2011 | ✓ standard | TV | **Cionni et al. 2011** AC&C/SPARC ozone — prescribed. AM2.1 no interactive chemistry. | Cionni et al. 2011 | cionni_ozone_2011 | Identical to ESM2G |
| SD | Sulphate direct | Lamarque et al. 2010 | ✓ standard | TV | **Lamarque et al. 2010** prescribed OD | Lamarque et al. 2010 | lamarque_historical_2010 | Identical to ESM2G |
| SI | Sulphate indirect | Model-dependent | ~ unclear | ? | AM2.1 uses prescribed aerosol concentration fields — Dunne 2012 p.3 states "atmospheric chemistry and aerosol distributions in the versions described here are externally specified." Donner 2011 section 1 notes indirect effects were a new capability of AM3 not achievable in AM2; implies AM2.1 used by ESM2M lacks a meaningful aerosol indirect effect. | Dunne et al. 2012; Donner et al. 2011 | dunne_gfdl_2012; donner_gfdl_2011 | Identical situation to ESM2G. AM2.1 prescribed aerosols; no documented indirect-effect parameterization in Dunne 2012. |
| BC | Black carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 | Lamarque et al. 2010 | lamarque_historical_2010 | |
| OC | Organic carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 | Lamarque et al. 2010 | lamarque_historical_2010 | |
| MD | Mineral dust | Model-dependent | ✓ standard | TV | **Prescribed** aerosol concentration fields in AM2.1. Dunne 2012 p.3 explicitly lists dust among "Three-dimensional, time mean distributions of aerosols (i.e., black carbon, organic carbon, sulfates, dust, sea salt, and volcanoes) are specified as input concentration fields (V. Naik and D. Schwarzkopf 2011, personal communication)." Specific climatological dataset not named; prepared by Naik and Schwarzkopf (GFDL). | Dunne et al. 2012 (p. 6648) | dunne_gfdl_2012 | Confirmed prescribed from Dunne 2012 section 2b. Identical to ESM2G. |
| SS | Sea salt | Model-dependent | ✓ standard | TV | **Prescribed** aerosol concentration fields in AM2.1. Dunne 2012 p.3 explicitly lists sea salt among specified aerosol concentration fields — same Naik and Schwarzkopf 2011 preparation. | Dunne et al. 2012 (p. 6648) | dunne_gfdl_2012 | Confirmed prescribed from Dunne 2012 section 2b. Identical to ESM2G. |
| LU | Land-use change | Hurtt et al. 2011 | ✓ standard | TV | **Hurtt et al. 2011** | Hurtt et al. 2011 | hurtt_harmonization_2011 | |
| SO | Solar irradiance | Wang et al. 2005 | ~ unclear | ? | CMIP5 standard solar not confirmed from Dunne 2012 directly. Dunne 2012 does not name a solar dataset for the historical run. Cross-model inference from Donner 2011 (GFDL CM3) points to Fröhlich and Lean (2004)/TIM as the GFDL CMIP5 solar dataset; ESM2M likely same but no ESM2M-specific documentation found. | Wang et al. 2005 (standard) | wang_modeling_2005 | Unverified at ESM2M model level. Identical situation to ESM2G. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ~ unclear | ? | Standard Sato 1993 updated not confirmed from Dunne 2012 directly. Dunne 2012 p.3 confirms "volcanoes" are among prescribed aerosol concentration fields; historical time series source not named. Cross-model inference from Donner 2011 (CM3) suggests Stenchikov 2006 / Sato 1993 updated. | Sato et al. 1993 (standard) | sato_stratospheric_1993 | Dunne 2012 p.3 confirms volcanic aerosols are prescribed in AM2.1; historical dataset source unconfirmed. Identical situation to ESM2G. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Identical ESM components to ESM2G (TOPAZ + LM3). Forcing expected identical to ESM2G; confirm from Dunne 2012/2013.

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | Likely yes | Lamarque et al. 2013 (ACCMIP) | Same as ESM2G |
| CO2 mode: concentration-driven (`historical`) | Yes | Meinshausen et al. 2011 | Standard `historical` mode |
| CO2 mode: emission-driven (`esmHistorical`) | Yes (variant) | PCMDI gridded fossil-fuel + LUC CO2 emissions | Same as ESM2G |
| Iron/dust deposition to ocean | Likely yes | Unconfirmed dataset | TOPAZ iron cycle |
| Ocean carbon initialisation | Yes | Unconfirmed (GLODAP?) | |
| BC on snow/ice | ? | Lamarque et al. 2010 (prescribed) | AM2.1 prescribed BC fields; BC-snow cryosphere albedo pathway not mentioned in Dunne 2012. Unconfirmed. |

### Deviations from Taylor 2012 standard protocol
None confirmed for the standard 12-key atmospheric forcings. ESM2M follows the standard prescribed-forcing protocol for all atmospheric forcing.
- **SI: likely absent or minimal** — same as ESM2G; AM2.1 prescribed aerosols, no documented indirect parameterization.
- **MD, SS: confirmed prescribed** — consistent with ✓ standard per Dunne 2012 (Naik/Schwarzkopf GFDL internal preparation).
- ESM-specific additions (N-deposition, CO2 emissions) are additions, not deviations.

### Notes on CMIP3 lineage
Identical to ESM2G except ocean component (MOM4p1 z-level vs. GOLD isopycnal). The ESM biogeochemistry forcing is expected identical across both ESM variants. The key scientific difference between ESM2G and ESM2M is ocean circulation representation, not forcing.

## Open questions
1. ESM2G and ESM2M differ only in ocean formulation — Dunne 2012 confirms both use identical AM2.1 with same prescribed aerosol fields. No atmospheric forcing differences.
2. Iron/dust deposition to ocean: specific dataset for TOPAZ iron cycle? (Mahowald? Internal GFDL preparation?)
3. N-deposition: confirmed Lamarque et al. 2013 ACCMIP is the available standard; did GFDL ESM2M ingest it for TOPAZ + LM3?
4. SO: Fröhlich and Lean 2004/TIM likely (from Donner 2011 CM3 evidence); unconfirmed from Dunne 2012 or ESM2M-specific source.
5. VL: Stenchikov 2006/Sato 1993 updated likely (prescribed confirmed by Dunne 2012); historical dataset source unconfirmed.
6. BC on snow/ice: not addressed in Dunne 2012.

## Provenance
- Durack et al. 2016 model list: included
- Sources: same as ESM2G (Dunne 2012/2013; GFDL ESM FAQ; PCMDI forcing page; Donner et al. 2011 for AM2 vs AM3 indirect-effect comparison and GFDL solar forcing documentation)
- Stage 1 adversarial workflow: wf_ad589a7e-9e9; results identical to ESM2G for all confirmed cells
