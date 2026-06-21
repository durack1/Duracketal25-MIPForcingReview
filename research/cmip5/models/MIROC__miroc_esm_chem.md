# MIROC-ESM-CHEM — MIROC (CCSR/NIES/JAMSTEC, Japan)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none (first ESM+chemistry version from MIROC consortium)
- **Model family / lineage:** Full Earth System Model with interactive atmospheric chemistry. Extends MIROC-ESM with CHASER (Chemical Atmospheric component of the MIROC for Study of Atmospheric Environment and Radiative Forcing) interactive tropospheric chemistry. CHASER predicts ozone and other chemical species interactively from Lamarque2010 precursor emissions. Aerosol component: SPRINTARS (same as MIROC-ESM — CHASER is the chemistry component, NOT a separate aerosol scheme). Identical ocean/land components to MIROC-ESM (SEIK BGC, MATSIRO). CCSR/NIES/JAMSTEC consortium.
- **Atmosphere / ocean components:** CCSR/NIES AGCM 5.7 (T42, L80 high-top) + COCO 3.4 ocean (~1°, L44) + MATSIRO land + SEIK ocean BGC + CHASER interactive atmospheric chemistry
- **Primary documentation paper(s):** Watanabe, S., et al. (2011). MIROC-ESM 2010: model description and basic results of CMIP5-20c3m experiments. *Geosci. Model Dev.* 4(4), 845–872. doi:10.5194/gmd-4-845-2011 [watanabe_miroc_2011 *(add)*]
- **Forcing-specific reference(s):** Watanabe et al. 2011 (primary; describes both MIROC-ESM and MIROC-ESM-CHEM); CHASER documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**Stage 9 workflow (wf_9b467e91-606, 2026-06-21): 12/14 claims confirmed 1-0. Key distinction from MIROC-ESM: O=exc — CHASER interactive tropospheric chemistry computes ozone from Lamarque2010 precursor emissions. All aerosol cells share the same SPRINTARS confirmation as MIROC-ESM (same aerosol base). VL=✓std from same source (Sato1993+updates). SO UNRESOLVED — Lean2005 deviation claim refuted (0-1) but Wang2005 standard NOT confirmed; actual solar dataset unknown.**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✓ std** | TV | Meinshausen et al. 2011 — Watanabe 2011 Sect. 3.2: "Atmospheric concentrations of well-mixed greenhouse gases are provided by Meinshausen et al. (2011)." Same paper documents both MIROC-ESM and MIROC-ESM-CHEM. | meinshausen_rcp_2011 | meinshausen_rcp_2011 | Confirmed explicitly. Second-pass update 2026-06-21. |
| O  | Ozone | Cionni et al. 2011 | exc | TV+ | CHASER interactive atmospheric chemistry. Watanabe2011: "MIROC-ESM-CHEM has an interactive atmospheric chemistry component, CHASER (Chemical Atmospheric component of the MIROC for Study of Atmospheric Environment and Radiative Forcing). CHASER predicts the concentrations of ozone (O3) and other species from prescribed Lamarque et al. (2010) emissions." Ozone predicted interactively throughout the atmosphere. | Watanabe et al. 2011 | watanabe_miroc_2011 | exc confirmed 1-0 high conf. CHASER uses Lamarque2010 precursor emissions (NOx, VOC, CO, SO2, etc.) to compute tropospheric ozone interactively. Companion to MIROC-ESM (where O is prescribed from CHASER offline output) |
| SD | Sulphate direct | Lamarque et al. 2010 | exc | TV+ | SPRINTARS online interactive aerosol module — same as MIROC-ESM. Sulphate computed from SO2 + DMS precursor emissions (Lamarque2010 anthropogenic; DMS internal). Confirmed from Watanabe2011 SPRINTARS description shared with MIROC-ESM | Watanabe et al. 2011 | watanabe_miroc_2011 | SPRINTARS continues CMIP3 MIROC3.2 interactive aerosol pattern. EXCEEDS Taylor2012 prescribed-OD standard. Confirmed 1-0 high conf (as-MIROC-ESM) |
| SI | Sulphate indirect | Model-dependent | exc | TV+ | SPRINTARS coupled to cloud/precipitation microphysics for direct, semi-direct, AND indirect aerosol effects — same as MIROC-ESM. Watanabe2011: "coupled to radiation and cloud/precipitation for direct/semi-direct/indirect effects" | Watanabe et al. 2011 | watanabe_miroc_2011 | Confirmed 1-0 high conf (as-MIROC-ESM) |
| BC | Black carbon | Lamarque et al. 2010 | exc | TV+ | SPRINTARS interactive BC from Lamarque2010 emissions — same as MIROC-ESM | Watanabe et al. 2011 | watanabe_miroc_2011 | Confirmed 1-0 high conf (as-MIROC-ESM) |
| OC | Organic carbon | Lamarque et al. 2010 | exc | TV+ | SPRINTARS interactive organic matter (OM) from Lamarque2010 emissions — same as MIROC-ESM | Watanabe et al. 2011 | watanabe_miroc_2011 | Confirmed 1-0 high conf (as-MIROC-ESM) |
| MD | Mineral dust | — | exc | TV+ | SPRINTARS interactive soil dust from internal model meteorology — same as MIROC-ESM | Watanabe et al. 2011 | watanabe_miroc_2011 | Confirmed 1-0 high conf (as-MIROC-ESM) |
| SS | Sea salt | — | exc | TV+ | SPRINTARS interactive sea salt from internal model meteorology — same as MIROC-ESM | Watanabe et al. 2011 | watanabe_miroc_2011 | Confirmed 1-0 high conf (as-MIROC-ESM) |
| LU | Land-use change | Hurtt et al. 2011 | **✓ std** | TV | Hurtt et al. (2009) = Hurtt 2011 pre-publication. Confirmed from Watanabe 2011 Sect. 3.2 (same paper covers both MIROC-ESM and MIROC-ESM-CHEM). | hurtt_harmonization_2011 | hurtt_harmonization_2011 | Confirmed. Same as MIROC-ESM. Second-pass update 2026-06-21. |
| SO | Solar irradiance | Wang et al. 2005 | **~** | TV | Lean et al. (2005) Solar Phys. 230:27–53 — Watanabe 2011 Sect. 3.2. Same citation as MIROC-ESM; same nuance. | wang_modeling_2005 | wang_modeling_2005 | Nuanced. Same as MIROC-ESM. Second-pass update 2026-06-21. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Sato et al. (1993) + subsequent updates — same as MIROC-ESM. Watanabe2011 verbatim: "Historical changes in optical thickness of volcanic stratospheric aerosols are given by Sato et al. (1993) and subsequent updates. From 1998, the optical thickness of volcanic stratospheric aerosols is exponentially reduced with one year relaxation time." | Watanabe et al. 2011 | watanabe_miroc_2011 | ✓std confirmed 1-0 high conf. Sato1993+updates = Taylor2012 standard. Post-1998 exponential decay (1-yr τ) is standard practice |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — CMIP5 generation free-running model | — | — | CMIP5 generation; no flux corrections expected |

### ESM-specific forcing inputs

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | ? | Lamarque2010 or 2013 ACCMIP? | Not resolved from Stage 9 workflow. Same question as MIROC-ESM |
| CO2: conc.- or emission-driven | ? | Meinshausen2011 conc. (standard expected for `historical`) | Same question as MIROC-ESM |
| Atmospheric chem inputs (NOx/VOC/CO/SO2) | ✓ | Lamarque et al. 2010 emissions | CHASER uses Lamarque2010 precursor emissions to drive interactive chemistry. Confirmed from Watanabe2011 CHASER description |
| Iron / dust deposition | ✓ | SPRINTARS interactive mineral dust (internal model winds) | Same as MIROC-ESM — SPRINTARS dust feeds SEIK ocean BGC iron |
| BC on snow/ice | ? | ? | Not documented in Watanabe2011 |

### Deviations from Taylor 2012 standard protocol
- **O** (exc): CHASER interactive chemistry — EXCEEDS standard (Cionni2011 prescribed is std; CHASER interactive prediction from precursor emissions is exc)
- **SD/BC/OC/MD/SS** (exc): SPRINTARS online interactive aerosols — EXCEEDS standard (same as MIROC-ESM)
- **SI** (exc): SPRINTARS includes indirect aerosol-cloud effects — EXCEEDS standard
- **SO** (?): Unknown; Lean2005 deviation refuted but Wang2005 not confirmed

### Key relationship to MIROC-ESM
MIROC-ESM-CHEM is architecturally identical to MIROC-ESM except that CHASER is active. In MIROC-ESM, ozone is PRESCRIBED from a pre-computed offline CHASER run (Kawase2011 dataset); in MIROC-ESM-CHEM, CHASER runs interactively online at each timestep. All other forcings are identical (SPRINTARS aerosols, VL, LU, G). The MIROC-ESM offline ozone is therefore implicitly derived from MIROC-ESM-CHEM chemistry, making the MIROC ESM ensemble a coupled interactive+prescribed ozone pair.

### Notes on CMIP3 lineage
No direct CMIP3 predecessor — MIROC-ESM-CHEM is the first MIROC model to include interactive atmospheric chemistry. The CHASER module distinguishes it from MIROC-ESM; all other components (MATSIRO, SEIK, AGCM 5.7) are shared.

## Provenance
- Durack et al. 2016 model list: included
- Stage 9 workflow: wf_9b467e91-606 (2026-06-21); 12/14 claims confirmed 1-0; O=exc (CHASER) and SPRINTARS aerosols+VL fully confirmed; SO unresolved; key distinction from MIROC-ESM is interactive vs prescribed ozone
