# giss_e2_r_cc — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** giss_model_e_r
- **Model family / lineage:** GISS ModelE2 with Russell 1995 ocean + "-CC" designation. Atmospheric forcing expected identical to E2-H-CC for the same physics version (ocean component is the only difference).
- **Atmosphere / ocean components:** ModelE2 atmosphere (2°×2.5°, 40 levels) + Russell 1995 latitude-longitude ocean; possible ESM components — unconfirmed

## CRITICAL NOTE
Identical issues to E2-H-CC — see that file. The "-CC" meaning is unconfirmed; physics_version for submitted realizations is unconfirmed; forcing verdict depends on which physics version was used.

## Forcing datasets used

Identical to GISS-E2-H-CC — see that file for full documentation.

| Key | Verdict | Notes |
|-----|---------|-------|
| VL | ✓ standard (Sato updated) | Confirmed 1-0 across all GISS E2 variants |
| O  | ~ unclear | dev (if NINT) or exc (if TCAD/TCADI) |
| SD/BC/OC | ~ unclear | dev (if NINT) or exc (if TCAD/TCADI) |
| All others | ~ unclear | |

### ESM-specific forcing inputs
Same as E2-H-CC — if CC = carbon cycle, same ESM inputs apply.

### Provenance
- Durack et al. 2016 model list: included
- Stage 2 adversarial workflow: wf_f7556b2d-78b
- Note: E2-R-CC is the more widely used CC variant; E2-H-CC less common in multi-model ensembles
