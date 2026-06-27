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
| G  | Well-mixed GHGs | **✓std** | TV | Meinshausen et al. 2017 — Miller2020§3.1 |
| O  | Ozone | **✗dev** | TV | GISS-OMA-derived prescribed fields (NOT CCMI) — identical to E2-1-G; 5 NINT members |
| SD | Aerosol — sulphate direct | ~ | TV | OMA-derived prescribed — as E2-1-G |
| SI | Aerosol — sulphate indirect | ~ | TV | As E2-1-G |
| BC | Black carbon | ~ | TV | As E2-1-G |
| OC | Organic carbon | ~ | TV | As E2-1-G |
| MD | Mineral dust | ~ | TV | OMA offline — dust varies via climate variables (wind speed etc.); Miller2020§2.1 |
| SS | Sea salt | ~ | TV | OMA offline — sea salt varies via climate variables (wind speed etc.); Miller2020§2.1 |
| LU | Land-use change | **✗dev** | TV | CMIP5 land-use fractions used inadvertently (NOT LUH2) — Miller2020§3.7; Ito et al. 2020 |
| SO | Solar irradiance | **✓std** | TV | Matthes et al. 2017 / SOLARIS-HEPPA — Miller2020§3.4 |
| VL | Volcanic aerosols | **✓std** | TV | Thomason et al. 2018 IACETH CMIP6 strat. AOD — Miller2020§3.5 |
| FC | Flux corrections | n/a | n/a | |

### Deviations from Eyring 2016 standard protocol
- **O: ✗dev** — identical to E2-1-G (OMA-derived, not CCMI standard)
- **LU: ✗dev** — CMIP5 land-use fractions used inadvertently; NOT LUH2 (Hurtt 2020). Miller2020§3.7: "We inadvertently implemented land use in GISS-E2.1 using the same areal fractions of cropland and pasture as prescribed for the GISS CMIP5 model."

## Open questions
- None remaining; all forcing components resolved.

## Provenance
- Sources: Kelley et al. 2020 (doi:10.1029/2019MS002025); Miller et al. 2020 JAMES doi:10.1029/2019MS002034; data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22)
- Notes updated 2026-06-27: Miller et al. 2020 (doi:10.1029/2019MS002034) read in full. Confirmed: G=Meinshausen2017 (§3.1); SO=Matthes2017/SOLARIS-HEPPA (§3.4); VL=Thomason2018 IACETH CMIP6 strat. AOD (§3.5); LU=✗dev CMIP5 fractions inadvertently (§3.7, Ito et al. 2020); MD/SS=~ OMA-derived time-varying from climate variables (§2.1). All atmospheric forcings confirmed identical between E2-1-G and E2-1-H.
