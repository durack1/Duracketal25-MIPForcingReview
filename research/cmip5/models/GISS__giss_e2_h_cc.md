# giss_e2_h_cc — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** giss_model_e_r (chemistry-interactive variant)
- **Model family / lineage:** GISS ModelE2 with HYCOM ocean + "-CC" designation. **CRITICAL FINDING:** Schmidt 2014 (the primary GISS-E2 CMIP5 configuration paper) does NOT document E2-H-CC or E2-R-CC at all — the paper covers only six variations (E2-R and E2-H each with NINT/TCAD/TCADI). The "-CC" models require a separate primary source. The "-CC" suffix likely denotes coupled carbon cycle (ESM-type; see open questions). The physics_version for "-CC" historical realizations is NOT confirmed by Schmidt 2014.
- **Atmosphere / ocean components:** ModelE2 atmosphere (2°×2.5°, 40 levels) + HYCOM ocean; possible ESM components (carbon cycle active?) — unconfirmed
- **Primary documentation paper(s):** Schmidt et al. 2014 doi:10.1002/2013MS000265 [schmidt_configuration_2014]; Miller et al. 2014 doi:10.1002/2013MS000266 [miller_cmip5_2014]

## CRITICAL NOTE: CC suffix and physics_version ambiguity

Schmidt 2014 **does not mention E2-H-CC or E2-R-CC**. The paper's abstract states "six variations" = 3 composition (NINT/TCAD/TCADI) × 2 ocean (R/H) = E2-R and E2-H only. The "-CC" models are outside the scope of Schmidt 2014 and require a separate primary source for their configuration documentation.

The workflow's adversarial verification **refuted** the claim that "-CC = interactive atmospheric chemistry (TCAD/TCADI) while non-CC = prescribed (NINT)." The actual mapping between the four named models (E2-H, E2-H-CC, E2-R, E2-R-CC) and physics versions (p1/p2/p3) was NOT confirmed from verified primary sources.

**Two possibilities for "-CC" (both unconfirmed):**
1. CC = **carbon cycle active** (coupled terrestrial biogeochemistry + ocean carbon) — if so, E2-H-CC and E2-R-CC are ESMs with active C cycle requiring N-deposition, CO2 emissions, iron deposition inputs. Physics version may be p3 (TCADI).
2. CC = **atmospheric chemistry interactive** — if so, these use TCAD/TCADI and EXCEED standard on O and aerosols.

These possibilities are not mutually exclusive. The forcing implications differ substantially. **Solar (SO = Wang 2005) and BC-on-snow are confirmed across all GISS ModelE2 variants by Schmidt 2014 — applicable here regardless of which physics version the CC models use.**

## Forcing datasets used (historical 1850–2005)

Atmospheric forcing applies physics_version logic; see E2-H file for full NINT/TCAD/TCADI breakdown.

| Key | Verdict | Temporal | Notes |
|-----|---------|----------|-------|
| G  | ~ unclear | TV | If CC = ESM carbon cycle, may use CO2 emissions (emission-driven) rather than Meinshausen 2011 concentrations |
| O  | ~ unclear | ? | If p3 (TCADI): exc (interactive OMA, NOT Cionni 2011); if p1 (NINT): dev (Shindell 2006a offline). Physics version unconfirmed for CC models. |
| SD | ~ unclear | ? | If p3: exc (interactive OMA); if p1: dev (Koch 2011 offline). Physics version unconfirmed for CC models. |
| SI | ~ unclear | ? | If p3 (TCADI): exc (prognostic CDNC first indirect); if p1 (NINT) or p2 (TCAD): dev (crude tuned AIE, Hansen 2005). Schmidt 2014 p. 146. |
| BC | ~ unclear | ? | If p3: exc; if p1: dev (Koch 2011 offline). Physics version unconfirmed. |
| OC | ~ unclear | ? | If p3: exc; if p1: dev (Koch 2011 offline). |
| MD | ~ unclear | ? | If p3: exc (interactive); if p1: dev (Koch 2011 offline). Schmidt 2014 p. 145: sea salt and dust calculated interactively in TCAD/TCADI. |
| SS | ~ unclear | ? | If p3: exc (interactive); if p1: dev (offline). Schmidt 2014 p. 145. |
| LU | ~ unclear | TV | Expected Hurtt 2011; interacts with C cycle if ESM |
| SO | ✓ standard | TV | **Wang et al. 2005 CONFIRMED** for all GISS ModelE2 CMIP5 simulations. Schmidt 2014 sec. 2.4 p. 147 verbatim: "Variations in incoming solar forcing in the 20th Century simulation follows Wang et al. [2005a]." Applies to CC models as they share the same atmospheric model base. |
| VL | ✓ standard | TV | Sato et al. updated — confirmed 1-0 across all GISS E2 variants |
| FC | n/a | n/a | Not applied |

### ESM-specific forcing inputs (IF CC = carbon cycle active)
If E2-H-CC is an ESM with coupled carbon cycle:

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | Possibly yes | Lamarque et al. 2013 ACCMIP | Drives land/ocean C cycle if active |
| CO2 mode | Possibly emission-driven | PCMDI CO2 emissions | If CC = coupled C cycle, historical CO2 may be emission-driven |
| Iron/dust deposition | Possibly | Model-specific | If ocean biogeochemistry active |
| BC on snow/ice | ✓ exc (applied) | Schmidt 2014 p. 4 | **CONFIRMED applied** — Schmidt 2014 confirms BC-on-snow for all GISS ModelE2 CMIP5 simulations: "including the impact of black carbon on snow and ice albedo." CC models use the same atmospheric base. |

### Provenance
- Durack et al. 2016 model list: included
- Key refuted claim: "the -CC suffix marks interactive atmospheric chemistry (E2 = prescribed, E2-CC = interactive)" — voted 0-1 (refuted) by workflow adversarial verification
- Stage 2 adversarial workflow: wf_f7556b2d-78b
- **Schmidt 2014 PDF read directly**: E2-H-CC and E2-R-CC are NOT mentioned anywhere in Schmidt 2014. The paper covers only six variations (E2-R and E2-H in NINT/TCAD/TCADI). CC models require a separate primary source.

## Open questions
1. What does "-CC" denote: interactive carbon cycle (ESM), interactive atmospheric chemistry, or both? Schmidt 2014 does NOT address CC models — requires Miller et al. 2014 or GISS CMIP5 web documentation.
2. What physics_version (p1/p2/p3) was submitted for E2-H-CC historical realizations?
3. If CC = ESM carbon cycle: which N-deposition, CO2 mode, and iron deposition datasets?
