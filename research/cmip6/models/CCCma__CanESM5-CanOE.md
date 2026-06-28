<!-- CMIP6 forcing record — CanESM5-CanOE (CCCma). Stage 5 workflow: wf_743d4a9c-430 (2026-06-22) -->

# CanESM5-CanOE — Canadian Centre for Climate Modelling and Analysis, Canada

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** As CanESM5 (CanESM2 lineage)
- **Model family / lineage:** CanESM5 with the Canadian Ocean Ecosystem (CanOE) marine BGC module replacing CMOC (Canadian Model of Ocean Carbon). CanOE introduces NO interactive atmospheric chemistry — it is an OCEAN BGC variant only. All atmospheric forcing IDENTICAL to CanESM5.
- **Atmosphere / ocean components:** CanAM5.0.0 / CanOM4 + CanOE + CICE6
- **Primary documentation paper(s):** Swart et al. 2019, *GMD* 12:4823, doi:10.5194/gmd-12-4823-2019 [swart_canesm5_2019]; Christian et al. 2022, *GMD* 15:4393, doi:10.5194/gmd-15-4393-2022 [christian_canoe_2022]

**CanOE suffix disambiguation**: CanOE = Canadian Ocean Ecosystem model. Replaces CMOC (Canadian Model of Ocean Carbon — NOT TOPAZ) for ocean BGC. CanOE adds prognostic iron cycle, multiple food-chain groups, flexible elemental ratios — all ocean-domain tracers. NO atmospheric chemistry coupling; NO change to any atmospheric forcing pathway.

## Forcing datasets (historical 1850–2014) — all atmospheric forcing IDENTICAL to CanESM5

All atmospheric forcing identical to CanESM5. See `CCCma__CanESM5.md` for full evidence, citations, and open questions.

| Key | Verdict | Temporal | Notes |
|-----|---------|----------|-------|
| G  | ✓std | TV | As CanESM5. input4MIPs uniqueness (UoM-CMIP-1-2-0 only option; resolved 2026-06-28). |
| O  | ✓std | TV | As CanESM5. Checa-Garcia 2018 / UReading-CCMI-1-0. |
| SD | ✓std | TV | As CanESM5. Interactive prognostic, CEDS+BB4CMIP6. |
| SI | ✓std | TV | As CanESM5. |
| BC | ✓std | TV | As CanESM5. |
| OC | ✓std | TV | As CanESM5. |
| MD | ✓std | TV | As CanESM5. |
| SS | ✓std | TV | As CanESM5. |
| LU | ✓std | TV | As CanESM5. LUH2 v2h. |
| SO | ~ | TV | As CanESM5.0. Cole 2023 §6.1 confirms Matthes 2017 in CanAM5.0.3; comparison is vs CanAM4 (not CanAM5.0.0) — ambiguous whether CanAM5.0.0 used Matthes 2017 or older dataset. Same ~ verdict as CanESM5. Resolve via CanForce (CCCma internal GitLab) or direct contact. |
| VL | ✓std | TV | As CanESM5. IACETH-SAGE3lambda-3-0-0 v3. |
| FC | n/a | n/a | |

**Key confirmation**: Swart 2019: "The version labelled CanESM5-CanOE... is identical to CanESM5, except that CMOC was replaced with CanOE." Christian 2022: "All physical climate model components are the same in CanESM5 and CanESM5-CanOE."

### ESM-specific forcing inputs (CLASSIC + CanOE active carbon cycle)

| ESM input | Applied? | Verdict | Dataset / source | Notes |
|-----------|----------|---------|-----------------|-------|
| N-deposition (NHx/NOy) | Expected yes | ? | NCAR-CCMI-2-0 expected for CLASSIC C-N cycle; not confirmed | |
| CO2: conc.- or emission-driven | conc.-driven | ✓ | Concentration-driven; Christian 2022: "prescribed atmospheric CO2 concentration" for CMIP6 DECK historical | |
| Fe deposition (CanOE ocean BGC) | Possible | ? | Iron deposition for CanOE marine BGC — source unconfirmed | CanOE adds prognostic Fe cycle in ocean |

## Provenance
- Stage 5 workflow run ID: wf_743d4a9c-430 (2026-06-22)
- Sources: Swart et al. 2019 (GMD 12:4823, doi:10.5194/gmd-12-4823-2019; DOI corrected 2026-06-28 — was incorrectly listed as JAMES doi:10.1029/2019MS001751); Christian et al. 2022; Cole et al. 2023; Rieger et al. 2020
- Eighth-pass update (2026-06-28): Swart 2019 and Cole 2023 PDFs read. Swart 2019 DOI corrected (GMD, not JAMES). Cole 2023 §6.1 full quote confirmed; comparison is CanAM5.0.3 vs CanAM4, not vs CanAM5.0.0 — SO ~ verdict unchanged. CanForce = CCCma internal GitLab repository for forcing scripts (not at public gitlab.com/cccma mirror).
