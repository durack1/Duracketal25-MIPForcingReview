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
