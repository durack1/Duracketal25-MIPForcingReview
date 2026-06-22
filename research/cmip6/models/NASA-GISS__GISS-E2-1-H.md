<!-- CMIP6 forcing record — GISS-E2-1-H (NASA-GISS). Created 2026-06-22; Stage 2 workflow: wf_3520e866-fd8 -->

# GISS-E2-1-H — NASA Goddard Institute for Space Studies, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** GISS-E2-H (ModelE2 + HYCOM ocean)
- **Model family / lineage:** ModelE2.1 atmosphere + HyCOM-based ocean (H = HyCOM variant). physics_version=1 (NINT). Atmospheric forcing IDENTICAL to E2-1-G.
- **Atmosphere / ocean components:** ModelE2.1 L40 / GISS-NEMO-3.6 (H variant); same atmosphere as G
- **Primary documentation paper(s):** Kelley et al. 2020, *JAMES* doi:10.1029/2019MS002025 [kelley_giss_2020]

**G/H forcing identity**: G and H variants share the identical ModelE2.1 atmosphere — all atmospheric forcing (O, aerosols, GHGs, SO, VL) is ocean-configuration-independent and therefore IDENTICAL between E2-1-G and E2-1-H.

## Forcing datasets used (historical 1850–2014)

**All atmospheric forcings IDENTICAL to GISS-E2-1-G.** See NOAA-GISS__GISS-E2-1-G.md for full notes.

| Key | Forcing | Verdict | Temporal | Notes |
|-----|---------|---------|----------|-------|
| G  | Well-mixed GHGs | ? | TV | As E2-1-G |
| O  | Ozone | **✗dev** | TV | GISS-OMA-derived prescribed fields (NOT CCMI) — identical to E2-1-G; 5 NINT members |
| SD | Aerosol — sulphate direct | ~ | TV | OMA-derived prescribed — as E2-1-G |
| SI | Aerosol — sulphate indirect | ~ | TV | As E2-1-G |
| BC | Black carbon | ~ | TV | As E2-1-G |
| OC | Organic carbon | ~ | TV | As E2-1-G |
| MD | Mineral dust | ? | ? | |
| SS | Sea salt | ? | ? | |
| LU | Land-use change | ? | TV | As E2-1-G |
| SO | Solar irradiance | ? | TV | As E2-1-G |
| VL | Volcanic aerosols | ? | TV | As E2-1-G — unresolved |
| FC | Flux corrections | n/a | n/a | |

### Deviations from Eyring 2016 standard protocol
- **O: ✗dev** — identical to E2-1-G (OMA-derived, not CCMI standard)

## Open questions
1. Same as E2-1-G for all atmospheric forcings
2. Confirm G/H atmospheric forcing identity (expected, architecturally confirmed)

## Provenance
- Sources: Kelley et al. 2020 (doi:10.1029/2019MS002025); data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22)
