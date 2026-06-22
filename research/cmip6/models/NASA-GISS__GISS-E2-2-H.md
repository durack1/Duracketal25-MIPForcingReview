<!-- CMIP6 forcing record — GISS-E2-2-H (NASA-GISS). Created 2026-06-22; Stage 2 workflow: wf_3520e866-fd8 -->

# GISS-E2-2-H — NASA Goddard Institute for Space Studies, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** GISS-E2-H (ModelE2 + HYCOM ocean)
- **Model family / lineage:** ModelE2.2 atmosphere (L102, 0.002 hPa) + HyCOM-based ocean (H variant). Atmospheric forcing expected IDENTICAL to E2-2-G.
- **Atmosphere / ocean components:** ModelE2.2 L102 / GISS-NEMO or HyCOM ocean
- **Primary documentation paper(s):** Rind et al. 2020, *JGR-Atmospheres* doi:10.1029/2019JD032204 [rind_giss_e22_2020]

**G/H forcing identity**: As with E2.1, G and H variants share the same ModelE2.2 atmosphere — all atmospheric forcing expected identical between E2-2-G and E2-2-H.

## Forcing datasets used (historical 1850–2014)

**All atmospheric forcings expected IDENTICAL to GISS-E2-2-G.** See NASA-GISS__GISS-E2-2-G.md for full notes and open questions.

| Key | Forcing | Verdict | Temporal | Notes |
|-----|---------|---------|----------|-------|
| G  | Well-mixed GHGs | ? | TV | As E2-2-G |
| O  | Ozone | ? | TV | As E2-2-G — UNRESOLVED (interactive vs prescribed) |
| SD | Aerosol — sulphate direct | ? | TV | As E2-2-G |
| SI | Aerosol — sulphate indirect | ? | ? | |
| BC | Black carbon | ? | TV | As E2-2-G |
| OC | Organic carbon | ? | TV | As E2-2-G |
| MD | Mineral dust | ? | ? | |
| SS | Sea salt | ? | ? | |
| LU | Land-use change | ? | TV | As E2-2-G |
| SO | Solar irradiance | ? | TV | As E2-2-G |
| VL | Volcanic aerosols | ? | TV | As E2-2-G — unresolved |
| FC | Flux corrections | n/a | n/a | |

## Open questions
1. Same as E2-2-G for all atmospheric forcings (O verdict critical)
2. Confirm G/H forcing identity for E2.2

## Provenance
- Sources: Rind et al. 2020 (doi:10.1029/2019JD032204); data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22; partial findings)
