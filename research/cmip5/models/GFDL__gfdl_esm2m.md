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
| SI | Sulphate indirect | Model-dependent | ~ unclear | ? | Not confirmed from surviving evidence | — | — | Identical open question to ESM2G |
| BC | Black carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 | Lamarque et al. 2010 | lamarque_historical_2010 | |
| OC | Organic carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 | Lamarque et al. 2010 | lamarque_historical_2010 | |
| MD | Mineral dust | Model-dependent | ~ unclear | ? | Not confirmed | — | — | |
| SS | Sea salt | Model-dependent | ~ unclear | ? | Not confirmed | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ✓ standard | TV | **Hurtt et al. 2011** | Hurtt et al. 2011 | hurtt_harmonization_2011 | |
| SO | Solar irradiance | Wang et al. 2005 | ~ unclear | ? | Standard Wang 2005; unconfirmed at model level | Wang et al. 2005 | wang_modeling_2005 | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ~ unclear | ? | Standard Sato updated; unconfirmed at model level | Sato et al. 1993 | sato_stratospheric_1993 | |
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
| BC on snow/ice | ? | Lamarque et al. 2010 | Unconfirmed |

### Deviations from Taylor 2012 standard protocol
None confirmed. Follows standard prescribed-forcing protocol; ESM-specific additions (N-deposition, CO2 emissions) are additions, not deviations.

### Notes on CMIP3 lineage
Identical to ESM2G except ocean component (MOM4p1 z-level vs. GOLD isopycnal). The ESM biogeochemistry forcing is expected identical across both ESM variants. The key scientific difference between ESM2G and ESM2M is ocean circulation representation, not forcing.

## Open questions
Same as ESM2G:
1. Do ESM2G and ESM2M differ in ANY forcing detail? (Dunne 2012 Part I should address.)
2. Iron/dust deposition to ocean: specific dataset?
3. N-deposition: confirmed from per-model documentation?
4. SO and VL: unconfirmed at model level.

## Provenance
- Durack et al. 2016 model list: included
- Sources: same as ESM2G (Dunne 2012/2013; GFDL ESM FAQ; PCMDI forcing page)
- Stage 1 adversarial workflow: wf_ad589a7e-9e9; results identical to ESM2G for all confirmed cells
