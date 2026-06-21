# NorESM1-M — NCC (Norwegian Climate Centre, Norway)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — NorESM is a new Norwegian ESM line for CMIP5 (the Norwegian CMIP3 model was BCCR-BCM2.0)
- **Model family / lineage:** Based on CCSM4/CAM4 framework but substantially modified with Norwegian-specific aerosol module (CAM4-Oslo = CAM4 + Oslo interactive aerosol scheme). Ocean component = MICOM (isopycnal). NorESM1-M is the AOGCM; NorESM1-ME adds ESM components.
- **Atmosphere / ocean components:** CAM4-Oslo (T85 spectral, L26) + MICOM/NorESM-Ocean (~1°, isopycnal L53) + CLM4 land + CICE4 sea ice
- **Primary documentation paper(s):** Bentsen, M., et al. (2013). The Norwegian Earth System Model, NorESM1-M — Part 1: Description and basic evaluation of the physical climate. *Geosci. Model Dev.* 6(3), 687–720. doi:10.5194/gmd-6-687-2013 [bentsen_norwegian_2013 *(add)*]; Iversen, T., et al. (2013). The Norwegian Earth System Model, NorESM1-M — Part 2: Climate response and scenario projections. *Geosci. Model Dev.* 6(2), 389–415. doi:10.5194/gmd-6-389-2013 [iversen_norwegian_2013 *(add)*]
- **Forcing-specific reference(s):** Bentsen et al. 2013 (atmospheric forcing); Kirkevåg & Iversen 2002 (Oslo aerosol microphysics); Seland et al. 2008 (aerosol–cloud coupling)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

`Protocol` = Taylor et al. 2012 standard CMIP5 `historical` recommended dataset.
`Verdict` = **✓ standard** · **＋ exceeds standard** (interactive > prescribed) · **✗ deviates** · **~ unclear**.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | Meinshausen et al. 2011 RCP/historical concentrations | Bentsen2013 | bentsen_norwegian_2013 | Confirmed from Bentsen2013 |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | AC&C/SPARC Cionni et al. 2011; no interactive chemistry | Bentsen2013, Iversen2013 | bentsen_norwegian_2013 | No interactive chemistry in NorESM1-M |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ＋exc | TV | CAM4-Oslo interactive online aerosol scheme from Lamarque2010 emissions | Bentsen2013 | bentsen_norwegian_2013 | Online scheme from Kirkevåg & Iversen 2002 + Seland 2008 |
| SI | Sulphate indirect | Model-dependent | ＋exc | TV | CAM4-Oslo: first + second indirect effects via aerosol–cloud microphysics coupling | Bentsen2013 | bentsen_norwegian_2013 | Both 1st (Twomey) + 2nd (lifetime) indirect included |
| BC | Black carbon | Lamarque et al. 2010 | ＋exc | TV | CAM4-Oslo interactive BC from Lamarque2010 emissions | Bentsen2013 | bentsen_norwegian_2013 | |
| OC | Organic carbon | Lamarque et al. 2010 | ＋exc | TV | CAM4-Oslo interactive OC from Lamarque2010 emissions | Bentsen2013 | bentsen_norwegian_2013 | |
| MD | Mineral dust | Model-dependent | ＋exc | TV | CAM4-Oslo interactive mineral dust from surface wind emissions | Bentsen2013 | bentsen_norwegian_2013 | |
| SS | Sea salt | Model-dependent | ＋exc | TV | CAM4-Oslo interactive sea salt from surface wind emissions | Bentsen2013 | bentsen_norwegian_2013 | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std | TV | Hurtt et al. 2011 LUH1 transitions via CLM4 | Bentsen2013 | bentsen_norwegian_2013 | |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | Wang, Lean & Sheeley 2005 solar reconstruction | Iversen2013 | iversen_norwegian_2013 | Confirmed 1-0 |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Sato et al. 1993 updated stratospheric aerosol ODs | Bentsen2013 | bentsen_norwegian_2013 | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — CMIP5 generation free-running model | — | — | |

### ESM-specific forcing inputs
Not an ESM — NorESM1-M is an AOGCM only (no active carbon cycle or interactive ocean biogeochemistry). Standard 12 keys only.

### Deviations from Taylor 2012 standard protocol
- **SD/SI/BC/OC/MD/SS = ＋exc**: CAM4-Oslo interactive aerosol scheme computes all six species prognostically from Lamarque2010 emissions (and internal model meteorology for dust/salt), with both direct and indirect effects. This exceeds the Taylor 2012 standard of prescribed aerosol OD.

### Notes on CMIP3 lineage
No CMIP3 predecessor — NorESM is a new model line for CMIP5. The Norwegian CMIP3 model (BCCR-BCM2.0) was based on ARPEGE atmosphere, not CAM. NorESM1-M instead derives from CCSM4/CAM4, substantially modified with the Oslo aerosol module.

## Open questions
- Full species list in CAM4-Oslo: exact treatment of SOA (secondary organic aerosols) in historical runs — unconfirmed at cell level.
- Whether aerosol indirect effects include the cloud lifetime effect (2nd indirect) in addition to Twomey (1st indirect): medium confidence included.

## Provenance
- Durack et al. 2016 model list: included (row 39)
- Sources consulted: Bentsen et al. 2013 (GMD 6:687-720); Iversen et al. 2013 (GMD 6:389-415)
- Stage 10 workflow: wf_36a86e20-c4b (2026-06-21); 10/10 key claims confirmed 1-0; sources: Bentsen2013 + Iversen2013 primary
