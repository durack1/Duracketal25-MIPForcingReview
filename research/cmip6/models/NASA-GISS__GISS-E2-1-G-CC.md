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
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | **✓std** | TV | Meinshausen et al. (2017) "Option 2"; CO2, CH4, N2O, CFC-11(eq.), CFC-12; annual averages, uniform in troposphere | Miller et al. 2021 §3.1 | [miller_giss_hist_2021] | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | **✗dev** | TV | **GISS-OMA-derived prescribed fields** — identical to E2-1-G (NINT). NOT the CCMI standard dataset. | Kelley et al. 2020 | [kelley_giss_2020] | CC suffix does NOT change ozone treatment; same ✗dev as E2-1-G |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | As E2-1-G (OMA-derived prescribed fields) | Kelley et al. 2020 | [kelley_giss_2020] | |
| SI | Aerosol — sulphate indirect | — | — | ~ | TV | As E2-1-G | | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | As E2-1-G | Kelley et al. 2020 | [kelley_giss_2020] | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | As E2-1-G | Kelley et al. 2020 | [kelley_giss_2020] | |
| MD | Mineral dust | — | — | ~ | TV | OMA-derived online fields (dust varies with wind speed via climate variables) — identical to E2-1-G (NINT) | Miller et al. 2021 §2.1 | [miller_giss_hist_2021] | |
| SS | Sea salt | — | — | ~ | TV | OMA-derived online fields (sea salt varies with climate variables) — identical to E2-1-G (NINT) | Miller et al. 2021 §2.1 | [miller_giss_hist_2021] | |
| LU | Land-use change | CMIP5 areal fractions (NOT LUH2) | — | **✗dev** | TV | CMIP5 cropland/pasture fractions inadvertently reused; deviates from CMIP6 LUH2 protocol. Ito et al. 2020 describes departures. | Miller et al. 2021 §3.7 | [miller_giss_hist_2021] | Explicitly not LUH2; after 2005 held constant |
| SO | Solar irradiance | Matthes et al. 2017 / SOLARIS-HEPPA | `SOLARIS-HEPPA-3-2` | **✓std** | TV | "spectrally resolved flux at 1 AU compiled by Matthes et al. (2017)"; same photon flux for photolysis rates | Miller et al. 2021 §3.4 | [miller_giss_hist_2021] | |
| VL | Volcanic aerosols | IACETH SAGE3λ / Thomason 2018 | `IACETH-SAGE3lambda-3-0-0` | **✓std** | TV | "recommended CMIP6 data set for stratospheric aerosols"; Thomason et al. 2018 satellite era; Arfeuille et al. 2014 pre-satellite | Miller et al. 2021 §3.5 | [miller_giss_hist_2021] | GISS uses own Mie parameters with CMIP6 extinction at 0.55 μm |
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
- **LU: ✗dev** — CMIP5 areal fractions inadvertently reused instead of LUH2 (Miller et al. 2021 §3.7; Ito et al. 2020)

## Open questions
1. N-deposition source for active terrestrial C cycle: NCAR-CCMI-2-0 or GISS-specific?

## Provenance
- Sources: Kelley et al. 2020 (doi:10.1029/2019MS002025); Ito et al. 2020 (doi:10.1029/2019MS002030); data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22)

## Notes
Miller et al. 2021 JAMES doi:10.1029/2019MS002034 read in full (2026-06-27). Confirmed for all three GISS-E2.1 NINT configurations (G, G-CC, H):
- **G = ✓std**: Meinshausen et al. (2017) "Option 2", annual-average concentrations (§3.1)
- **SO = ✓std**: Matthes et al. (2017) spectrally resolved flux, also used for photolysis rates (§3.4)
- **VL = ✓std**: Recommended CMIP6 volcanic dataset (IACETH/Thomason et al. 2018 satellite era; Arfeuille et al. 2014 pre-satellite); GISS applies own Mie parameters to CMIP6 extinction at 0.55 μm (§3.5)
- **LU = ✗dev**: CMIP5 cropland/pasture areal fractions inadvertently reused; explicitly NOT LUH2. Held constant after 2005. Ito et al. (2020) describes departures (§3.7)
- **MD = ~**: OMA-derived online fields (dust varies with wind speed via climate variables), not standard Kinne 2013 (§2.1)
- **SS = ~**: OMA-derived online fields (sea salt varies with climate variables) (§2.1)
