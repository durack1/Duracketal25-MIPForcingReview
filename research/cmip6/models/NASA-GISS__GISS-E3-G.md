<!-- CMIP6 forcing record — GISS-E3-G (NASA-GISS). Created 2026-06-22; Stage 2 workflow: wf_3520e866-fd8 -->

# GISS-E3-G — NASA Goddard Institute for Space Studies, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** None direct (ModelE3 is a substantially new generation)
- **Model family / lineage:** ModelE3 atmosphere (L106, model top 0.002 hPa, cubed-sphere dynamical core) + GISS Ocean v1. Completely rebuilt atmospheric core vs E2.x series.
- **Atmosphere / ocean components:** ModelE3 L106 cubed-sphere core / GISS Ocean v1 (Russell)
- **Primary documentation paper(s):** TBD — ModelE3 primary paper not identified in Stage 2 search. GISS portal lists L106, 0.002 hPa, cubed-sphere core.
- **Forcing-specific reference(s):** TBD from workflow

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

**E3-G forcing treatment NOT CONFIRMED.** Like E2.2, the high model top (0.002 hPa) and QBO-resolving resolution suggest interactive ozone, but no primary source confirmation was obtained. ModelE3 is architecturally distinct from E2.x — no assumption of carrying forward E2.1 NINT.

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | Expected standard | — | — | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ? | TV | **UNRESOLVED** — ModelE3 L106/0.002 hPa architecture with QBO suggests interactive ozone (＋exc); cubed-sphere dynamical core is a complete rebuild. No primary confirmation available. | — | — | |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | TV | CMIP6-spec emissions expected; application mode TBD | — | — | |
| SI | Aerosol — sulphate indirect | — | — | ? | ? | | | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | TV | | | | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | TV | | | | |
| MD | Mineral dust | — | — | ? | ? | | | | |
| SS | Sea salt | — | — | ? | ? | | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Expected standard | — | — | |
| SO | Solar irradiance | Matthes et al. 2017 | `SOLARIS-HEPPA-3-2` | ? | TV | Expected standard | — | — | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | Unresolved | — | — | |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O | Ozone | Interactive (if E3 uses online chemistry) OR GISS center-specific | TBD | ModelE3 cubed-sphere rebuild may handle composition differently from E2.1 NINT |

## Open questions
1. **PRIMARY PAPER**: What is the primary documentation paper for ModelE3 / GISS-E3-G?
2. **O (CRITICAL)**: Interactive (＋exc) or prescribed (NINT OMA-derived ✗dev or CCMI ✓std)?
3. **Aerosol scheme**: Does ModelE3 inherit NINT/OMA-derived approach or use new interactive scheme?
4. All other forcings: G, LU, SO, VL

## Provenance
- Sources: data.giss.nasa.gov/modelE/cmip6/ (architecture); primary paper TBD
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22; partial findings — E3-G largely unresolved)

## Notes
- Schmidt et al. 2014 (JAMES doi:10.1002/2013MS000265) and Miller et al. 2014 (JAMES doi:10.1002/2013MS000266) reviewed. Both papers document CMIP5 ModelE2 only (NINT/TCAD/TCADI configurations). Forcings used: GHG from GISS internal observations (Hansen et al. 2007 updates), solar from Wang et al. 2005/Lean 2009, volcanic from Sato et al. 1993, land use from HYDE3.0/Pongratz et al. 2008. These are all pre-CMIP6 datasets and provide no direct confirmation of CMIP6 forcing treatments for GISS-E3-G. No ModelE3 (GISS-E3-G) content in either paper. All forcing verdicts remain unresolved pending identification of a primary ModelE3/GISS-E3-G documentation paper.
- Russotto et al. 2021 (JAMES doi:10.1029/2021MS002601) reviewed in full including all supplementary content. Paper documents tropical cyclone properties in two development versions (V1 April 2018, V2 March 2019) of GISS-E3 at C180 (0.5°) resolution, run in atmosphere-only mode with prescribed HadISST2 SSTs (1980–2000). No CMIP6 forcing table, experimental design section, or mention of GHG/ozone/aerosol/land-use/solar/volcanic forcing datasets. The paper explicitly states there is no C180 version of ModelE3 in the CMIP6 ensemble. Provides zero forcing information for GISS-E3-G CMIP6 historical simulations. All verdicts remain unresolved.
- Cesana et al. 2021 (GRL doi:10.1029/2021GL094876) reviewed. Paper investigates cloud phase partitioning and cloud feedbacks using GISS-ModelE3 (AMIP/prescribed-SST configuration). Based on a developmental version further described in Cesana et al. 2019. No CMIP6 historical forcing table or any mention of GHG/ozone/aerosol/land-use/solar/volcanic forcing datasets. Provides zero forcing information for GISS-E3-G CMIP6 historical simulations.
- Cesana et al. 2019 (ACP doi:10.5194/acp-19-2813-2019) reviewed in full. Paper uses a developmental version of GISS-E3 for AMIP simulations (2007–2015). Describes model physics differences vs E2 in detail (turbulence, cloud macrophysics/microphysics, convection), but contains no CMIP6 forcing table and no mention of any CMIP6 forcing dataset (GHG, ozone, aerosols, land-use, solar, volcanic). Provides zero forcing information for GISS-E3-G CMIP6 historical simulations.
- Li et al. 2023 (ERL doi:10.1088/2515-7620/aca9ab) reviewed in full. Paper compares GISS-E2.1 and GISS-E3 "following the CMIP6 protocol" historical runs, referencing Cesana et al. 2019/2021 for model description. Explicitly notes GISS-E3 was submitted to CMIP6 with additional changes still pending at time of writing. No forcing table and no mention of which specific CMIP6 forcing datasets were used for any component (G, O, SD, SI, BC, OC, MD, SS, LU, SO, VL). Provides zero forcing information.
- All four papers combined provide zero confirmation of any CMIP6 forcing dataset for GISS-E3-G. A dedicated ModelE3/GISS-E3-G CMIP6 documentation paper (analogous to Kelley et al. 2020 for GISS-E2.1) has not yet been identified. All 11 forcing verdicts remain unresolved.
