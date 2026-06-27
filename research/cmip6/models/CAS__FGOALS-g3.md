<!-- CMIP6 forcing record — FGOALS-g3 (CAS). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# FGOALS-g3 — CAS (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** GAMIL3 atmosphere (2°, L26, top ~36 km — LOWER TOP than FGOALS-f3-L) + CLM4 land + LICOM3 ocean + CICE6. AOGCM. CAS/LASG. Lower vertical resolution and model top compared to FGOALS-f3-L.
- **Primary documentation paper(s):** Li et al. 2020 (*JAMES* doi:10.1029/2019MS002010)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ? | ? | Not individually confirmed. | — | |
| O  | Ozone | ✓std | TV | **CMIP6 CCMI prescribed ozone** (standard, no interactive chemistry). Lower model top (L26, ~36km) did NOT trigger deviation. | Keeble et al. 2021 | Keeble 2021 (verbatim): "FGOALS-g3 does not include an interactive chemistry module, and ozone is prescribed in the stratosphere and troposphere following the recommendations by CMIP6." FGOALS-g3 is in Keeble 2021 Table 1. |
| SD | Aerosol — sulphate direct | ? | ? | Not confirmed. | — | |
| SI | Aerosol — sulphate indirect | ? | ? | Not confirmed. | — | |
| BC | Black carbon | ? | ? | Not confirmed. | — | |
| OC | Organic carbon | ? | ? | Not confirmed. | — | |
| MD | Mineral dust | ? | ? | Not confirmed. | — | |
| SS | Sea salt | ? | ? | Not confirmed. | — | |
| LU | Land-use change | ? | ? | CLM4 land; LUH2 v2.1h expected but not confirmed. | — | |
| SO | Solar irradiance | ? | ? | Not confirmed. | — | |
| VL | Volcanic aerosols | ? | ? | Not confirmed. | — | |
| FC | Flux corrections | n/a | n/a | None | | |

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); confirmed: O=✓std (Keeble 2021 verbatim); all other forcing unconfirmed
- Key sources: Keeble et al. 2021 (*ACP* doi:10.5194/acp-21-5015-2021); Li et al. 2020 (*JAMES* doi:10.1029/2019MS002010, not extracted in Stage 16)
