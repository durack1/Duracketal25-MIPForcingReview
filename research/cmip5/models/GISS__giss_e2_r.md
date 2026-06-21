# giss_e2_r — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** giss_model_e_r — direct successor; same Russell ocean component
- **Model family / lineage:** GISS ModelE2 with Russell 1995 latitude-longitude ocean (1°×1.25°×L32). Atmospheric component identical to E2-H. Atmospheric forcing is **identical to E2-H for the same physics version**; ocean differs only.
- **Atmosphere / ocean components:** ModelE2 atmosphere (2°×2.5°, 40 levels) + Russell 1995 latitude-longitude ocean (1°×1.25°×L32)
- **Primary documentation paper(s):** Schmidt et al. 2014 doi:10.1002/2013MS000265 [schmidt_configuration_2014]; Miller et al. 2014 doi:10.1002/2013MS000266 [miller_cmip5_2014]

## CRITICAL NOTE: Physics_version framework
Identical to E2-H — see that file for full documentation. NINT (p1) deviates from Taylor 2012 on O and aerosols; TCAD/TCADI (p2/p3) exceed standard on O and aerosols. Ocean is the only difference between E2-H and E2-R. Schmidt 2014 (abstract) explicitly covers both E2-R and E2-H with NINT/TCAD/TCADI ("six variations" = 3 composition × 2 ocean). Forcings are identical between E2-H and E2-R for the same physics version.

## Forcing datasets used (historical 1850–2005)

Identical to GISS-E2-H for all forcing keys — see `GISS__giss_e2_h.md` for full details.

Identical to GISS-E2-H for all forcing keys — see `GISS__giss_e2_h.md` for full details. Summary:

| Key | Verdict (NINT p1) | Confirmed finding |
|-----|-------------------|-----------------|
| G  | ~ unclear | Expected Meinshausen 2011 (unconfirmed at model level) |
| O  | ✗ deviates (NINT) | Shindell 2006a offline, NOT Cionni 2011 (confirmed 1-0) |
| SD | ✗ deviates (NINT) | Koch 2011 offline, NOT Lamarque 2010 OD (confirmed 1-0) |
| SI | ✗ deviates (NINT/TCAD) | NINT and TCAD: crude tuned AIE (Hansen 2005) — dev; TCADI only: exc (prognostic CDNC). Schmidt 2014 p. 146. |
| BC | ✗ deviates (NINT) | Koch 2011 offline (confirmed 1-0) |
| OC | ✗ deviates (NINT) | Koch 2011 offline (confirmed 1-0) |
| MD | ✗ deviates (NINT) / ✓ exceeds (TCAD/TCADI) | NINT: offline (Koch 2011 suite); TCAD/TCADI: interactive. Schmidt 2014 p. 145. |
| SS | ✗ deviates (NINT) / ✓ exceeds (TCAD/TCADI) | NINT: offline; TCAD/TCADI: interactive. Schmidt 2014 p. 145. |
| LU | ~ unclear | Schmidt 2014 confirms land use forcing applied; dataset (Hurtt 2011) expected but not named |
| SO | ✓ standard | **Wang et al. 2005 CONFIRMED.** Schmidt 2014 sec. 2.4 p. 147 verbatim. As GISS-E2-H (same physics). |
| VL | ✓ standard | Sato et al. updated — confirmed 1-0 across all GISS E2 |
| FC | n/a | Not applied |

### ESM-specific forcing inputs
Not an ESM. Identical to E2-H.

| ESM input | Applied? | Notes |
|-----------|----------|-------|
| BC on snow/ice | ✓ exc (applied) | Confirmed by Schmidt 2014 p. 4 — same as E2-H. Applied across all physics versions. |
| N-deposition | No | No land/ocean biogeochemistry |
| CO2 mode | Concentration-driven | Meinshausen 2011 concentrations (standard `historical`) |

### Provenance
- Durack et al. 2016 model list: included
- Sources: identical to E2-H; Stage 2 adversarial workflow: wf_f7556b2d-78b
- Schmidt 2014 covers E2-R explicitly as one of the "six variations" (3 composition × 2 ocean). All forcing details as E2-H — ocean (Russell vs HYCOM) is the only difference.
- Note: E2-R has been more widely used in CMIP5 analyses than E2-H due to the Russell ocean's long validated history
