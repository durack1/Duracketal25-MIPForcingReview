<!-- CMIP6 forcing record — E3SM-1-1-ECA (E3SM-Project). Populated 2026-06-22 from Stage 4 workflow wf_29f9e93f-7df. -->

# E3SM-1-1-ECA — E3SM Project (DOE), USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** As E3SM-1-1 (CESM1 fork)
- **Model family / lineage:** As E3SM-1-1 but with ECA (Equilibrium Chemistry Approximation) land biogeochemistry in ELM v1.1. **ECA is a LAND BGC variant — NOT interactive atmospheric chemistry.** (Lesson from GISS CC-suffix: suffix = land biogeochem, not atmospheric chem.) All atmospheric forcing IDENTICAL to E3SM-1-1.
- **Atmosphere / ocean components:** EAMv1.1 / MPAS-O + CICE5 + ELM v1.1-ECA
- **Primary documentation paper(s):** WDC CMIP6 registry; Tang & Riley 2013 (ECA scheme); Golaz et al. 2019 [golaz_e3sm_2019]

**ECA suffix — confirmed**: WDC metadata: "ELM (v1.1, same as atmos; active biogeochemistry using the Equilibrium Chemistry Approximation to represent plant and soil carbon and nutrient mechanisms especially carbon, nitrogen and phosphorus limitation)." ECA is a soil microbe-plant nutrient competition kinetics theory (Tang & Riley 2013), wholly terrestrial. EAM is byte-identical to E3SM-1-1 per WDC. Atmospheric forcing UNCHANGED.

## Forcing datasets (summary — see E3SM-Project__E3SM-1-0.md for full notes)

| Key | Verdict | Temporal | Notes |
|-----|---------|----------|-------|
| G  | ✓std | TV | As E3SM-1-1 |
| O  | ~ | TV | As E3SM-1-1 — O3v1 hybrid |
| SD | ✓std | TV | As E3SM-1-1 |
| SI | ~ | TV | MAM4 interactive |
| BC | ✓std | TV | As E3SM-1-1 |
| OC | ✓std | TV | As E3SM-1-1 |
| MD | ~ | TV | MAM4 interactive |
| SS | ~ | TV | MAM4 interactive |
| LU | ✓std | TV | As E3SM-1-1 — LUH2 v2.1h (Hurtt et al. 2017), confirmed Golaz 2019 App. B.6 |
| SO | ✓std | TV | As E3SM-1-1 — SOLARIS-HEPPA v3.2 input4MIPs, confirmed Golaz 2019 App. B.8 |
| VL | ✓std | TV | As E3SM-1-1 — IACETH SAGE3λ v3; spectral interpolation to model radiation bands is standard practice (Golaz 2019 App. B.4; corrected 2026-06-27) |
| FC | n/a | n/a | |

### ESM-specific forcing inputs (ELM v1.1-ECA active C-N-P biogeochemistry)

| ESM input | Applied? | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | ? | NCAR-CCMI-2-0 expected given CESM1 heritage | `NCAR-CCMI-2-0` | Active C-N-P BGC requires N inputs; source unconfirmed |
| CO2: conc.- or emission-driven | ~ | Meinshausen 2017 conc. (historical) | `UoM-CMIP-1-2-0` | Standard expected |

## Provenance
- Stage 4 workflow run ID: wf_29f9e93f-7df
- ECA confirmation: WDC CMIP6 registry; Tang & Riley 2013 (ECA scheme doi:10.5194/bg-10-177-2013)
- All atmospheric forcing as E3SM-Project__E3SM-1-0.md.
