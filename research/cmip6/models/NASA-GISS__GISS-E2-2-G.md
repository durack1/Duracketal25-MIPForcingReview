<!-- CMIP6 forcing record — GISS-E2-2-G (NASA-GISS). Created 2026-06-22; Stage 2 workflow: wf_3520e866-fd8 -->

# GISS-E2-2-G — NASA Goddard Institute for Space Studies, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** No direct predecessor (ModelE2.2 is a new middle-atmosphere configuration)
- **Model family / lineage:** ModelE2.2 atmosphere (L102, model top 0.002 hPa — substantially higher than E2.1's L40/0.1 hPa) + GISS Ocean v1. QBO-resolving vertical resolution.
- **Atmosphere / ocean components:** ModelE2.2 L102 top 0.002 hPa / GISS Ocean v1 (Russell)
- **Primary documentation paper(s):** Rind et al. 2020, *JGR-Atmospheres* doi:10.1029/2019JD032204 [rind_giss_e22_2020]
- **Forcing-specific reference(s):** TBD — E2.2 forcing details not resolved in Stage 2 search

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

**E2.2 ozone treatment NOT CONFIRMED.** The substantially higher model top (0.002 hPa vs 0.1 hPa) and QBO-resolving vertical resolution suggest interactive ozone treatment, but this has not been confirmed from primary sources.

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | Expected standard | — | — | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ? | TV | **UNRESOLVED** — higher model top + QBO-resolving resolution suggests interactive ozone; GISS documentation links QBO to interactive ozone treatment. May differ from E2.1 NINT pattern. | Rind et al. 2020 (to be confirmed) | [rind_giss_e22_2020] | KEY OPEN QUESTION: interactive (＋exc) or prescribed (standard CCMI or OMA-derived)? |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | TV | CMIP6-spec CEDS+BB4CMIP6 expected; application mode (interactive vs prescribed OMA) TBD | — | — | |
| SI | Aerosol — sulphate indirect | — | — | ? | ? | | | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | TV | | | | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | TV | | | | |
| MD | Mineral dust | — | — | ? | ? | | | | |
| SS | Sea salt | — | — | ? | ? | | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Expected standard | — | — | |
| SO | Solar irradiance | Matthes et al. 2017 | `SOLARIS-HEPPA-3-2` | ? | TV | Expected standard | — | — | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | Unresolved (as for E2.1) | — | — | |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O | Ozone | Possibly GISS-OMA-derived (if NINT) OR interactive (if E2.2 uses interactive ozone) | TBD | Critical question: does E2.2 inherit the E2.1 NINT pattern (OMA-derived ✗dev) or use interactive ozone (＋exc)? |

### Architectural note: E2.1 vs E2.2 key difference
- E2.1: L40, model top ~0.1 hPa — inadequate for self-generated QBO; prescribes ozone (NINT)
- **E2.2: L102, model top 0.002 hPa** — sufficient vertical resolution for QBO; GISS documentation links this to interactive ozone computation. If confirmed interactive, verdict would be **＋exc** (exceeds standard).

### Deviations from Eyring 2016 standard protocol
- TBD — O verdict critical and unresolved

## Open questions
1. **O (CRITICAL)**: Does E2.2 compute ozone interactively (＋exc) or prescribe it (NINT/OMA-derived ✗dev)?
2. All other forcings: G, LU, SO, VL, SD/BC/OC mode
3. Primary paper: Rind et al. 2020 (JGR-Atm doi:10.1029/2019JD032204) — needs direct fetch

## Provenance
- Sources: Rind et al. 2020 (doi:10.1029/2019JD032204); data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22; partial findings)
