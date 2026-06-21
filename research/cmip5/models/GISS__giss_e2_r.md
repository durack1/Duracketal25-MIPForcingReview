# giss_e2_r — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** giss_model_e_r — direct successor; same Russell ocean component
- **Model family / lineage:** GISS ModelE2 with Russell 1995 latitude-longitude ocean (1°×1.25°×L32). Atmospheric component identical to E2-H. Atmospheric forcing is **identical to E2-H for the same physics version**; ocean differs only.
- **Atmosphere / ocean components:** ModelE2 atmosphere (2°×2.5°, 40 levels) + Russell 1995 latitude-longitude ocean (1°×1.25°×L32)
- **Primary documentation paper(s):** Schmidt et al. 2014 doi:10.1002/2013MS000265 [schmidt_configuration_2014]; Miller et al. 2014 doi:10.1002/2013MS000266 [miller_cmip5_2014]

## CRITICAL NOTE: Physics_version framework
Identical to E2-H — see that file for full documentation. NINT (p1) deviates from Taylor 2012 on O and aerosols; TCAD/TCADI (p2/p3) exceed standard on O and aerosols. Ocean is the only difference between E2-H and E2-R.

## Forcing datasets used (historical 1850–2005)

Identical to GISS-E2-H for all forcing keys — see `GISS__giss_e2_h.md` for full details.

| Key | Verdict (NINT p1) | Confirmed finding |
|-----|-------------------|-----------------|
| G  | ~ unclear | Expected Meinshausen 2011 (unconfirmed) |
| O  | ✗ deviates (NINT) | Shindell 2003 offline, NOT Cionni 2011 (confirmed 1-0) |
| SD | ✗ deviates (NINT) | Miller 2006a/Koch 2011 offline, NOT Lamarque 2010 OD (confirmed 1-0) |
| SI | ~ unclear | NINT no AIE; TCADI adds first indirect |
| BC | ✗ deviates (NINT) | Miller 2006a/Koch 2011 offline (confirmed 1-0) |
| OC | ✗ deviates (NINT) | Miller 2006a/Koch 2011 offline (confirmed 1-0) |
| MD | ~ unclear | |
| SS | ~ unclear | |
| LU | ~ unclear | Expected Hurtt 2011 |
| SO | ~ unclear | Unconfirmed; possible Lean 2000 (CMIP3 residual) |
| VL | ✓ standard | Sato et al. updated — confirmed 1-0 across all GISS E2 |
| FC | n/a | Not applied |

### ESM-specific forcing inputs
Not an ESM. Identical to E2-H.

### Provenance
- Durack et al. 2016 model list: included
- Sources: identical to E2-H; Stage 2 adversarial workflow: wf_f7556b2d-78b
- Note: E2-R has been more widely used in CMIP5 analyses than E2-H due to the Russell ocean's long validated history
