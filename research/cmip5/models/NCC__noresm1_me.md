# NorESM1-ME — NCC (Norwegian Climate Centre, Norway)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — NorESM is a new Norwegian ESM line for CMIP5
- **Model family / lineage:** ESM extension of NorESM1-M — adds HAMOCC ocean biogeochemistry and CLM4-CN terrestrial carbon cycle. Identical atmosphere (CAM4-Oslo), ocean dynamics (MICOM), and sea ice (CICE4) as NorESM1-M. All atmospheric forcings are identical to NorESM1-M.
- **Atmosphere / ocean components:** CAM4-Oslo (T85L26) + MICOM-HAMOCC (NorESM-Ocean-BGC, isopycnal L53) + CLM4-CN land + CICE4 sea ice
- **Primary documentation paper(s):** Bentsen, M., et al. (2013). NorESM1-M Part 1. *Geosci. Model Dev.* 6, 687–720. doi:10.5194/gmd-6-687-2013 [bentsen_norwegian_2013 *(add)*]; Tjiputra, J.F., et al. (2013). Evaluation of the carbon cycle components in the Norwegian Earth System Model (NorESM). *Geosci. Model Dev.* 6(2), 301–325. doi:10.5194/gmd-6-301-2013 [tjiputra_evaluation_2013 *(add)*]
- **Forcing-specific reference(s):** As NorESM1-M for atmospheric forcings; Tjiputra2013 for ESM-specific inputs

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | Meinshausen et al. 2011 — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | AC&C/SPARC Cionni2011 — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | No interactive chemistry |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ＋exc | TV | CAM4-Oslo interactive — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| SI | Sulphate indirect | Model-dependent | ＋exc | TV | CAM4-Oslo 1st+2nd indirect — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| BC | Black carbon | Lamarque et al. 2010 | ＋exc | TV | CAM4-Oslo interactive — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| OC | Organic carbon | Lamarque et al. 2010 | ＋exc | TV | CAM4-Oslo interactive — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| MD | Mineral dust | Model-dependent | ＋exc | TV | CAM4-Oslo interactive dust — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| SS | Sea salt | Model-dependent | ＋exc | TV | CAM4-Oslo interactive sea salt — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std | TV | Hurtt2011 LUH1 via CLM4-CN — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | Wang2005 — as NorESM1-M | Iversen2013 | iversen_norwegian_2013 | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Sato-updated — as NorESM1-M | Bentsen2013 | bentsen_norwegian_2013 | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running | — | — | |

### ESM-specific forcing inputs

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | ✓ | Lamarque et al. **2010** (NOT 2013 ACCMIP) — confirmed from Tjiputra2013 | Drives CLM4-CN and HAMOCC; note Lamarque2010, consistent with CESM1-BGC and BNU-ESM |
| CO2: conc.- or emission-driven | ✓ conc.-driven | Meinshausen2011 concentrations (historical); esmHistorical variant also exists | |
| Atmospheric chem inputs (NOx/VOC/CO) | n/a | — | No interactive chemistry |
| Iron / dust deposition | ✓ | Mahowald et al. (2005) soluble iron deposition climatology — confirmed from Tjiputra2013 | Drives HAMOCC ocean BGC iron cycle; same source as BNU-ESM |
| BC on snow/ice | ? | ? | CAM4-Oslo handles BC but snow albedo effect unconfirmed for historical |

### Deviations from Taylor 2012 standard protocol
- **SD/SI/BC/OC/MD/SS = ＋exc**: CAM4-Oslo interactive aerosol scheme (as NorESM1-M)
- **N-dep = Lamarque2010 (not 2013 ACCMIP)**: NorESM1-ME uses Lamarque2010 nitrogen deposition — earlier dataset than GFDL-ESM2G/M which used Lamarque2013 ACCMIP

## Open questions
- BC on snow/ice: CAM4-Oslo handles BC but snow albedo effect in historical runs unconfirmed.

## Provenance
- Durack et al. 2016 model list: included (row 40)
- Sources consulted: Bentsen et al. 2013; Tjiputra et al. 2013 (GMD 6:301-325, doi:10.5194/gmd-6-301-2013)
- Stage 10 workflow: wf_36a86e20-c4b (2026-06-21); N-dep=Lamarque2010 confirmed 1-0 (Tjiputra2013); iron=Mahowald2005 confirmed 1-0 (Tjiputra2013)
