# BNU-ESM — GCESS (College of Global Change and Earth System Science, Beijing Normal University, China)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — BNU-ESM is a new CMIP5 entrant
- **Model family / lineage:** Beijing Normal University Earth System Model. BCC-AGCM2.0.1 atmosphere (similar atmospheric base to BCC-CSM1.1 but independently developed for BNU); NEMO2 ocean; CoLM (Common Land Model) with terrestrial carbon cycle; CICE4 sea ice. Full ESM with land carbon cycle; ocean BGC via NEMO2.
- **Atmosphere / ocean components:** BCC-AGCM2.0.1 (T42 spectral, L26) + NEMO2 ocean (~1°, L40) + CoLM land + CICE4 sea ice
- **Primary documentation paper(s):** Ji, D., et al. (2014). Description and basic evaluation of Beijing Normal University Earth System Model (BNU-ESM) version 1. *Geosci. Model Dev.* 7(5), 2039–2064. doi:10.5194/gmd-7-2039-2014 [ji_description_2014 *(add)*]
- **Forcing-specific reference(s):** Ji et al. 2014 Sections 2-3; PCMDI CMIP5 documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | Meinshausen et al. 2011 | Ji2014 | ji_description_2014 | Confirmed 1-0 |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | AC&C/SPARC Cionni et al. 2011; no interactive chemistry | Ji2014 | ji_description_2014 | Confirmed 1-0 |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ✓std | TV | Lamarque et al. 2010 prescribed aerosol OD | Ji2014 | ji_description_2014 | Confirmed 1-0 |
| SI | Sulphate indirect | Model-dependent | ＋exc | TV | First indirect (Twomey) effect parameterized in BCC-AGCM2.0.1 | Ji2014 | ji_description_2014 | 1st indirect included; exceeds prescribed-OD standard |
| BC | Black carbon | Lamarque et al. 2010 | ✓std | TV | Lamarque2010 prescribed OD | Ji2014 | ji_description_2014 | |
| OC | Organic carbon | Lamarque et al. 2010 | ✓std | TV | Lamarque2010 prescribed OD | Ji2014 | ji_description_2014 | |
| MD | Mineral dust | Model-dependent | ＋exc | TV | Interactive mineral dust computed online from surface wind emissions in BCC-AGCM2.0.1 | Ji2014 | ji_description_2014 | |
| SS | Sea salt | Model-dependent | ＋exc | TV | Interactive sea salt computed online from surface wind emissions in BCC-AGCM2.0.1 | Ji2014 | ji_description_2014 | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std | TV | Hurtt et al. 2011 LUH1 land-use transitions via CoLM | Ji2014 | ji_description_2014 | Confirmed 1-0 |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | Wang, Lean & Sheeley 2005 | Ji2014 | ji_description_2014 | Confirmed 1-0 |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Sato et al. 1993 updated stratospheric AOD | Ji2014 | ji_description_2014 | Confirmed 1-0 |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running CMIP5 model | — | — | |

### ESM-specific forcing inputs

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | ✓ | Lamarque et al. **2010** (NOT 2013 ACCMIP) — confirmed from Ji2014 Section 3.2 | Drives CoLM terrestrial carbon cycle; consistent with CESM1-BGC, NorESM1-ME |
| CO2: conc.- or emission-driven | ✓ conc.-driven | Meinshausen2011 concentrations (`historical`); esmHistorical emission-driven variant also exists | |
| Atmospheric chem inputs (NOx/VOC/CO) | n/a | — | No interactive atmospheric chemistry |
| Iron / dust deposition | ✓ | Mahowald et al. (2005) soluble iron deposition climatology — confirmed from Ji2014 Section 3.3 | Drives NEMO2 ocean biogeochemistry iron cycle; same as NorESM1-ME/HAMOCC |
| BC on snow/ice | ? | ? | Unconfirmed |

### Deviations from Taylor 2012 standard protocol
- **SI/MD/SS = ＋exc**: First indirect aerosol effect + interactive dust/sea salt — exceeds prescribed-OD standard.
- **N-dep = Lamarque2010 (not 2013 ACCMIP)**: Consistent with CESM1-BGC and NorESM1-ME; earlier than GFDL-ESM2G/M (which used Lamarque2013 ACCMIP).

### Notes on CMIP3 lineage
No CMIP3 predecessor. BCC-AGCM2.0.1 is related to BCC-AGCM2.0 used in BCC-CSM1.1 (Stage 4) but is independently developed at BNU. Both share the same general atmospheric model lineage from BCC.

## Provenance
- Durack et al. 2016 model list: included (row 44)
- Sources consulted: Ji et al. 2014 (GMD 7:2039-2064, doi:10.5194/gmd-7-2039-2014)
- Stage 10 workflow: wf_36a86e20-c4b (2026-06-21); G/O/SD/BC/OC/LU/SO/VL = ✓std confirmed 1-0 (Ji2014); SI/MD/SS = ＋exc confirmed 1-0 (Ji2014); N-dep = Lamarque2010 confirmed 1-0; iron = Mahowald2005 confirmed 1-0
