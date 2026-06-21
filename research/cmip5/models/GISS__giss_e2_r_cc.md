# giss_e2_r_cc — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** giss_model_e_r
- **Model family / lineage:** GISS ModelE2 with Russell 1995 ocean + "-CC" coupled carbon cycle. **SECOND-PASS RESOLVED (2026-06-21):** CC = interactive carbon cycle; physics_version = **p1 (NINT)** from rundeck `E_AR5_NINT_oR_CC.R` (GISS ModelE CMIP5 page). Forcing identical to E2-H-CC (Russell vs HYCOM ocean only difference).
- **Atmosphere / ocean components:** ModelE2 atmosphere (2°×2.5°, 40 levels) + Russell 1995 ocean + interactive carbon cycle (terrestrial + ocean BGC)

## Forcing datasets used — all resolved

All forcing datasets identical to GISS-E2-H-CC (same atmospheric component, physics version p1/NINT). See that file for full documentation.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Dataset / source |
|-----|---------|------------------------|---------|-----------------|
| G  | GHGs | Meinshausen 2011 | **✗ dev** | GISS in-house Hansen/Sato 2004 compilation — Miller 2014 Table 3 |
| O  | Ozone | Cionni 2011 | **✗ dev** | Shindell 2006a offline (p1 NINT) — same as E2-R p1 |
| SD | Sulphate direct | Lamarque 2010 | **✗ dev** | Koch 2011 offline (p1 NINT) |
| SI | Sulphate indirect | Model-dep | **✗ dev** | Crude tuned AIE Hansen 2005 (p1 NINT) |
| BC | Black carbon | Lamarque 2010 | **✗ dev** | Koch 2011 offline (p1 NINT) |
| OC | Organic carbon | Lamarque 2010 | **✗ dev** | Koch 2011 offline (p1 NINT) |
| MD | Mineral dust | Model-dep | **✗ dev** | Koch 2011 offline (p1 NINT) |
| SS | Sea salt | Model-dep | **✗ dev** | Koch 2011 offline (p1 NINT) |
| LU | Land-use | Hurtt 2011 | **✗ dev** | HYDE 3.0 + Pongratz 2008 blend — Miller 2014 Sect. 3.8 |
| SO | Solar | Wang 2005 | **✓ std** | Wang et al. 2005 — Schmidt 2014; Miller 2014 Sect. 3.6 |
| VL | Volcanic | Sato 1993 updated | **✓ std** | Sato updated — Miller 2014 Sect. 3.5 |
| FC | Flux corr. | — | n/a | Not applied |

### Provenance
- Durack et al. 2016 model list: included
- Stage 2 adversarial workflow: wf_f7556b2d-78b
- Second-pass update: 2026-06-21; CC = carbon cycle confirmed; physics_version = p1 (NINT) from GISS rundecks; G/LU deviations from Miller 2014
