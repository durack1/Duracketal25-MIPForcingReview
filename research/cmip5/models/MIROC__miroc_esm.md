# MIROC-ESM — MIROC (CCSR/NIES/JAMSTEC, Japan)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none (first full ESM version from MIROC consortium)
- **Model family / lineage:** Full Earth System Model. MIROC-ESM extends MIROC AOGCM with: MATSIRO land surface + terrestrial carbon cycle, SEIK ocean biogeochemistry (marine carbon cycle), interactive nitrogen deposition effects on vegetation. Aerosol component: SPRINTARS (online interactive, same as CMIP3 MIROC3.2 — continues CMIP3 pattern). Companion model to MIROC-ESM-CHEM (which adds CHASER interactive atmospheric chemistry). Developed jointly by CCSR/NIES/JAMSTEC.
- **Atmosphere / ocean components:** CCSR/NIES AGCM 5.7 (T42 spectral, L80 high-top) + COCO 3.4 ocean (~1°, L44) + MATSIRO land + SEIK ocean BGC
- **Primary documentation paper(s):** Watanabe, S., et al. (2011). MIROC-ESM 2010: model description and basic results of CMIP5-20c3m experiments. *Geosci. Model Dev.* 4(4), 845–872. doi:10.5194/gmd-4-845-2011 [watanabe_miroc_2011 *(add)*]
- **Forcing-specific reference(s):** Watanabe et al. 2011 (primary; open access GMD)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**Stage 9 workflow (wf_9b467e91-606, 2026-06-21): 12/14 claims confirmed 1-0. All MIROC-ESM/CHEM aerosol and VL/O verdicts confirmed from Watanabe et al. 2011 (GMD) as primary source. Solar (SO) UNRESOLVED — Lean2005 deviation claim refuted (0-1) but Wang2005 standard NOT confirmed; actual solar dataset unknown. MIROC-ESM ozone is PRESCRIBED but from a custom source (precursor-driven MIROC-ESM-CHEM offline run), NOT explicitly identified as Cionni2011.**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std | TV | Meinshausen et al. 2011 (CMIP5 standard; PCMDI confirmed as baseline for all CMIP5 models) | Watanabe et al. 2011 | watanabe_miroc_2011 | Expected CMIP5 standard; not explicitly cited in Watanabe2011 GMD text |
| O  | Ozone | Cionni et al. 2011 | ~std | TV | Prescribed ozone from custom offline run. Watanabe2011: "ozone concentration is prescribed in MIROC-ESM...includes effects of historical evolution of tropospheric ozone precursors and halogen species destroying the stratospheric ozone, but effects of the solar cycle and QBO on the ozone concentration are neglected (Kawase et al., 2011)." NOT Cionni2011 by name — likely derived from companion MIROC-ESM-CHEM offline chemistry | Watanabe et al. 2011 | watanabe_miroc_2011 | Prescribed but from custom offline source (Kawase2011), not Cionni2011. Solar cycle/QBO effects absent. ~std (close alignment but not standard dataset) |
| SD | Sulphate direct | Lamarque et al. 2010 | exc | TV+ | SPRINTARS online interactive aerosol module — sulphate computed from SO2 + DMS precursor emissions (Lamarque2010 anthropogenic; DMS internal). Watanabe2011: "an on-line aerosol component (SPRINTARS) coupled to radiation and cloud/precipitation...predicts mass mixing ratios of BC, organic matter (OM), sulfate, soil dust, sea salt, SO2, and DMS" | Watanabe et al. 2011 | watanabe_miroc_2011 | SPRINTARS continues CMIP3 MIROC3.2 interactive aerosol pattern. EXCEEDS Taylor2012 prescribed-OD standard. 1-0 confirmed high conf |
| SI | Sulphate indirect | Model-dependent | exc | TV+ | SPRINTARS coupled to cloud/precipitation microphysics for direct, semi-direct, AND indirect aerosol effects. Watanabe2011 verbatim: "coupled to radiation and cloud/precipitation for direct/semi-direct/indirect effects" | Watanabe et al. 2011 | watanabe_miroc_2011 | Indirect aerosol effects included (1st and likely 2nd). Confirmed 1-0 high conf |
| BC | Black carbon | Lamarque et al. 2010 | exc | TV+ | SPRINTARS interactive BC from Lamarque et al. (2010) RCP historical anthropogenic + biomass burning emissions. Watanabe2011: "predicts mass mixing ratios of BC, organic matter (OM), sulfate..." | Watanabe et al. 2011 | watanabe_miroc_2011 | Confirmed 1-0 high conf. Same SPRINTARS as CMIP3 MIROC3.2 |
| OC | Organic carbon | Lamarque et al. 2010 | exc | TV+ | SPRINTARS interactive organic matter (OM) from Lamarque2010 emissions. Watanabe2011 uses "OM" (organic matter) — encompasses OC + secondary formation | Watanabe et al. 2011 | watanabe_miroc_2011 | Confirmed 1-0 high conf |
| MD | Mineral dust | — | exc | TV+ | SPRINTARS interactive soil dust — internally computed from wind speed, soil properties. Watanabe2011: "internal emissions for dust, sea salt, and DMS" | Watanabe et al. 2011 | watanabe_miroc_2011 | No external prescribed dust dataset; fully interactive from model meteorology. Confirmed 1-0 high conf. Note: SPRINTARS dust also drives iron deposition for SEIK ocean BGC |
| SS | Sea salt | — | exc | TV+ | SPRINTARS interactive sea salt — internally computed from wind speed. Watanabe2011: "internal emissions for dust, sea salt, and DMS" | Watanabe et al. 2011 | watanabe_miroc_2011 | Fully interactive from model meteorology. Confirmed 1-0 high conf |
| LU | Land-use change | Hurtt et al. 2011 | ?std | TV | Hurtt et al. 2011 LUH1 expected (CMIP5 standard for MATSIRO land); not explicitly confirmed from Watanabe2011 | Watanabe et al. 2011 | watanabe_miroc_2011 | Not explicitly named in Watanabe2011 text. MATSIRO land surface with CMIP5 LU forcing expected |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | Solar dataset UNRESOLVED. Claim that MIROC-ESM uses Lean2005 (deviation) was REFUTED (0-1) — meaning Lean2005 NOT confirmed. Wang2005 (std) expected but NOT confirmed from surviving evidence. | — | — | Solar dataset unknown. Stage 9 workflow refuted the Lean2005-deviation claim; Wang2005 standard NOT independently confirmed. Needs targeted ES-DOC/PCMDI metadata check |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Sato et al. (1993) + subsequent updates. Watanabe2011 verbatim: "Historical changes in optical thickness of volcanic stratospheric aerosols are given by Sato et al. (1993) and subsequent updates. From 1998, the optical thickness of volcanic stratospheric aerosols is exponentially reduced with one year relaxation time." Post-1998 decay is model-side tail-off, not dataset substitution. | Watanabe et al. 2011 | watanabe_miroc_2011 | ✓std confirmed 1-0 high conf. Sato1993+updates = Taylor2012 standard. Post-1998 exponential decay (1-yr τ) is standard practice |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — CMIP5 generation free-running model | — | — | CMIP5 generation; no flux corrections expected |

### ESM-specific forcing inputs

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | ? | Lamarque2010 or 2013 ACCMIP? | Not resolved from Stage 9 workflow. Standard CMIP5 ESM practice: Lamarque2010 expected |
| CO2: conc.- or emission-driven | ? | Meinshausen2011 conc. (standard expected for `historical`) | Concentration-driven is CMIP5 standard for `historical` runs; emission-driven for `esmHistorical`. Not confirmed from Watanabe2011 |
| Atmospheric chem inputs (NOx/VOC/CO/SO2) | ✓ | Lamarque et al. 2010 emissions | SPRINTARS ingests Lamarque2010 anthropogenic emissions (SO2/BC/OC/NOx/CO/VOC). Confirmed from Watanabe2011 aerosol scheme description |
| Iron / dust deposition | ✓ | SPRINTARS interactive mineral dust (internal model winds) | SPRINTARS computes soil dust interactively; iron from dust feeds SEIK ocean BGC via mineral dust flux. Confirmed from SPRINTARS description in Watanabe2011 |
| BC on snow/ice | ? | ? | Not documented in Watanabe2011 |

### Deviations from Taylor 2012 standard protocol
- **O** (~std): Prescribed ozone from custom offline source (Kawase et al. 2011, driven by MIROC-ESM-CHEM chemistry), not Cionni2011 by name. No solar cycle/QBO effects.
- **SD/BC/OC/MD/SS** (exc): SPRINTARS online interactive aerosols — EXCEED standard (prescribed OD from Lamarque2010 is std; interactive from Lamarque2010 emissions is exc)
- **SI** (exc): SPRINTARS includes indirect aerosol-cloud effects — EXCEEDS standard
- **SO** (?): Unknown; Lean2005 deviation refuted but Wang2005 not confirmed

### Notes on CMIP3 lineage
CMIP3 MIROC3.2 (hires/medres) used SPRINTARS interactive aerosols — same as MIROC-ESM. The SPRINTARS aerosol continuity from CMIP3 to CMIP5 is confirmed. MIROC-ESM adds ESM components (MATSIRO land + SEIK ocean BGC) that are new to CMIP5.

## Provenance
- Durack et al. 2016 model list: included
- Stage 9 workflow: wf_9b467e91-606 (2026-06-21); 12/14 claims confirmed 1-0; MIROC-ESM/CHEM aerosols+VL fully confirmed; SO unresolved; MIROC4h/MIROC5 NOT covered by confirmed claims
