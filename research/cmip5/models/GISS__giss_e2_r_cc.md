# giss_e2_r_cc — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** giss_model_e_r
- **Model family / lineage:** GISS ModelE2 with Russell 1995 ocean + "-CC" designation. Atmospheric forcing expected identical to E2-H-CC for the same physics version (ocean component is the only difference).
- **Atmosphere / ocean components:** ModelE2 atmosphere (2°×2.5°, 40 levels) + Russell 1995 latitude-longitude ocean; possible ESM components — unconfirmed

## CRITICAL NOTE
Identical issues to E2-H-CC — see that file. The "-CC" meaning is unconfirmed; physics_version for submitted realizations is unconfirmed; forcing verdict depends on which physics version was used. Schmidt 2014 does NOT cover E2-R-CC or E2-H-CC — those models require a separate primary source.

## Forcing datasets used

Identical to GISS-E2-H-CC — see that file for full documentation.

| Key | Verdict | Notes |
|-----|---------|-------|
| VL | ✓ standard (Sato updated) | Confirmed 1-0 across all GISS E2 variants |
| SO | ✓ standard (Wang 2005) | **CONFIRMED.** Schmidt 2014 sec. 2.4 p. 147: "Variations in incoming solar forcing in the 20th Century simulation follows Wang et al. [2005a]." Applies to CC models via shared atmospheric base. |
| BC on snow/ice | ✓ exc (applied) | **CONFIRMED.** Schmidt 2014 p. 4: "including the impact of black carbon on snow and ice albedo." |
| O  | ~ unclear | dev (if NINT/Shindell 2006a) or exc (if TCAD/TCADI interactive). Physics version unconfirmed for CC models. |
| SD/BC/OC | ~ unclear | dev (if NINT/Koch 2011 offline) or exc (if TCAD/TCADI interactive). Physics version unconfirmed. |
| MD/SS | ~ unclear | dev (if NINT offline) or exc (if TCAD/TCADI interactive). Schmidt 2014 p. 145: sea salt and dust interactive in TCAD/TCADI. |
| SI | ~ unclear | dev (if NINT/TCAD: crude tuned AIE, Hansen 2005) or exc (if TCADI: prognostic CDNC). Schmidt 2014 p. 146. |
| All others | ~ unclear | As E2-H-CC |

### ESM-specific forcing inputs
Same as E2-H-CC — if CC = carbon cycle, same ESM inputs apply.

### Provenance
- Durack et al. 2016 model list: included
- Stage 2 adversarial workflow: wf_f7556b2d-78b
- Schmidt 2014 PDF read directly: E2-R-CC not mentioned in Schmidt 2014. CC models require a separate primary source.
- Note: E2-R-CC is the more widely used CC variant; E2-H-CC less common in multi-model ensembles
