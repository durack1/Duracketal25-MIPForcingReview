<!-- CMIP6 forcing record — GISS-E2-1-G-CC (NASA-GISS). Created 2026-06-22; Stage 2 workflow: wf_3520e866-fd8 -->

# GISS-E2-1-G-CC — NASA Goddard Institute for Space Studies, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** GISS-E2-R (no direct CMIP5 CC equivalent)
- **Model family / lineage:** ModelE2.1 atmosphere + GISS Ocean v1 + interactive terrestrial C cycle + NASA Ocean Biogeochemistry Model (NOBM). physics_version=1 (NINT). The "-CC" denotes C4MIP Carbon Cycle — NOT interactive atmospheric chemistry.
- **Atmosphere / ocean components:** ModelE2.1 L40 / GISS Ocean v1 + active carbon cycle
- **Primary documentation paper(s):** Kelley et al. 2020, *JAMES* doi:10.1029/2019MS002025 [kelley_giss_2020]; Ito et al. 2020, *JAMES* doi:10.1029/2019MS002030 [ito_giss_nobm_2020]
- **Forcing-specific reference(s):** Bauer et al. 2020, *JAMES* doi:10.1029/2019MS001978 (OMA) [bauer_giss_oma_2020]

**CRITICAL CORRECTION**: Prior assumption that "CC = Coupled Chemistry (interactive atmospheric chemistry)" is WRONG.
- **CC = interactive terrestrial Carbon Cycle + ocean biogeochemistry (C4MIP configuration)**
- Atmospheric composition (ozone, aerosols) is handled IDENTICALLY to GISS-E2-1-G via NINT (physics_version=1)
- This model is NOT in the interactive-chemistry category

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

**Atmospheric forcings are IDENTICAL to GISS-E2-1-G** (shared ModelE2.1 NINT atmosphere). Only ESM-specific carbon-cycle inputs differ.

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | As E2-1-G; concentration-driven (not emission-driven) | — | — | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | **✗dev** | TV | **GISS-OMA-derived prescribed fields** — identical to E2-1-G (NINT). NOT the CCMI standard dataset. | Kelley et al. 2020 | [kelley_giss_2020] | CC suffix does NOT change ozone treatment; same ✗dev as E2-1-G |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | As E2-1-G (OMA-derived prescribed fields) | Kelley et al. 2020 | [kelley_giss_2020] | |
| SI | Aerosol — sulphate indirect | — | — | ~ | TV | As E2-1-G | | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | As E2-1-G | Kelley et al. 2020 | [kelley_giss_2020] | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | As E2-1-G | Kelley et al. 2020 | [kelley_giss_2020] | |
| MD | Mineral dust | — | — | ? | ? | | | | |
| SS | Sea salt | — | — | ? | ? | | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Expected standard; critical for active terrestrial C cycle in LM4.1 | — | — | OPEN: important for carbon cycle |
| SO | Solar irradiance | Matthes et al. 2017 | `SOLARIS-HEPPA-3-2` | ? | TV | Expected standard | — | — | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | As E2-1-G — VL source unresolved | — | — | |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### ESM-specific forcing inputs

| ESM input | Applied? | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | ? | NCAR-CCMI-2-0 standard expected | `NCAR-CCMI-2-0` | Needed for interactive terrestrial C cycle |
| CO2: conc.- or emission-driven | Concentration-driven | Meinshausen 2017 concentrations | `UoM-CMIP-1-2-0` | CC runs `historical` (concentration-driven), not `esm-hist` |
| Ocean biogeochem (NOBM) | Yes | NASA Ocean Biogeochemistry Model (NOBM) — internal | — | Interactive marine C cycle via NOBM (Ito et al. 2020) |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O  | Ozone | GISS-OMA-derived fields | Replaces | Identical to E2-1-G |
| SD/BC/OC | Aerosol | GISS-OMA-derived fields | Replaces | Identical to E2-1-G |

### Deviations from Eyring 2016 standard protocol
- **O: ✗dev** — same as E2-1-G (NINT, OMA-derived prescribed ozone, not CCMI)
- No additional deviations from CC suffix (carbon cycle is additive only)

## Open questions
1. As E2-1-G for VL, G, LU, SO
2. N-deposition source for active terrestrial C cycle: NCAR-CCMI-2-0 or GISS-specific?

## Provenance
- Sources: Kelley et al. 2020 (doi:10.1029/2019MS002025); Ito et al. 2020 (doi:10.1029/2019MS002030); data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22)
