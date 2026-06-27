<!-- CMIP6 forcing record — E3SM-1-1 (E3SM-Project). Populated 2026-06-22 from Stage 4 workflow wf_29f9e93f-7df. -->

# E3SM-1-1 — E3SM Project (DOE), USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** As E3SM-1-0 (CESM1 fork)
- **Model family / lineage:** Incremental update of E3SM-1-0. EAMv1.1 atmosphere (cubed-sphere ~1°, 72 levels, top 0.1 hPa) + ELM v1.1 land + CICE5 + MPAS-O. Same forcing stack as E3SM-1-0.
- **Atmosphere / ocean components:** EAMv1.1 / MPAS-O + CICE5
- **Primary documentation paper(s):** Golaz et al. 2019, *JAMES* doi:10.1029/2018MS001603 [golaz_e3sm_2019]

**E3SM-1-0/1-1 forcing identity**: 1-1 uses EAMv1.1 (incremental physics update from EAMv1); all atmospheric forcing datasets identical to E3SM-1-0. WDC metadata confirms EAMv1.1 cubed-sphere grid; O3v1 + MAM4 + CEDS+BB4CMIP6 forcing stack unchanged.

## Forcing datasets (summary — see E3SM-Project__E3SM-1-0.md for full notes)

| Key | Verdict | Temporal | Notes |
|-----|---------|----------|-------|
| G  | ✓std | TV | As E3SM-1-0 |
| O  | ~ | TV | As E3SM-1-0 — O3v1 hybrid (trop CCMI prescribed + strat Linoz v2 interactive) |
| SD | ✓std | TV | As E3SM-1-0 — CEDS+BB4CMIP6 |
| SI | ~ | TV | MAM4 interactive |
| BC | ✓std | TV | As E3SM-1-0 |
| OC | ✓std | TV | As E3SM-1-0 |
| MD | ~ | TV | MAM4 interactive |
| SS | ~ | TV | MAM4 interactive |
| LU | ✓std | TV | As E3SM-1-0 — LUH2 v2.1h (Hurtt et al. 2017), confirmed Golaz 2019 App. B.6 |
| SO | ✓std | TV | As E3SM-1-0 — SOLARIS-HEPPA v3.2 input4MIPs, confirmed Golaz 2019 App. B.8 |
| VL | ✓std | TV | As E3SM-1-0 — IACETH SAGE3λ v3; spectral interpolation to model radiation bands is standard practice (Golaz 2019 App. B.4; corrected 2026-06-27) |
| FC | n/a | n/a | |

## Provenance
- Stage 4 workflow run ID: wf_29f9e93f-7df
- See E3SM-Project__E3SM-1-0.md for full forcing details; all atmospheric forcings identical.
