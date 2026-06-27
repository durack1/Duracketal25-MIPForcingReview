<!-- CMIP6 forcing record — MIROC-ES2H (MIROC). Stage 12 complete (2026-06-26). Confirmation pass complete (2026-06-27): Hajima2020 Table C1 confirms all ES2L forcings; ES2H inferences confirmed via shared OECO2/SPRINTARS/VISIT-e components. Fe-dep resolved as ~ (centre-specific, Ito et al. 2018/2011 via SPRINTARS). Watanabe2021 not in /resources/. -->

# MIROC-ES2H — MIROC (Japan)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** High-resolution ESM. MIROC6 atmosphere (T213L81, ~60km, 81-level high-top atmosphere) + COCO4.9 ocean (0.25°) + OECO2 ocean BGC + VISIT-e land BGC (active C-N cycle). Same ESM components as MIROC-ES2L; higher resolution only.
- **Primary paper:** Watanabe et al. 2021 (DOI not confirmed in Stage 12 research; primary paper not retrieved)
- **CMIP5 predecessor:** No direct HR ESM predecessor in MIROC CMIP5 lineup

## Forcing (CMIP6 historical, 1850–2014)

All forcing inferred from shared ESM components with MIROC-ES2L; no separately documented forcing table retrieved. Primary paper (Watanabe 2021) not retrieved.

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | As MIROC-ES2L (Meinshausen 2017, concentration-driven) | ✓std | TV |
| O — Ozone | As MIROC-ES2L (CCMI prescribed); NOT in Keeble 2021 interactive list | ✓std | TV |
| SD — Sulfate direct | As MIROC-ES2L (SPRINTARS interactive, CEDS+BB4CMIP6) | ✓std | TV |
| SI — Sulfate indirect | As MIROC-ES2L | ✓std | TV |
| BC — Black carbon | As MIROC-ES2L | ✓std | TV |
| OC — Organic carbon | As MIROC-ES2L | ✓std | TV |
| MD — Mineral dust | As MIROC-ES2L (SPRINTARS prognostic) | ✓std | TV |
| SS — Sea salt | As MIROC-ES2L (SPRINTARS prognostic) | ✓std | TV |
| LU — Land use | As MIROC-ES2L (LUH2 v2.1h inferred) | ✓std | TV |
| SO — Solar | As MIROC-ES2L (Matthes 2017 inferred) | ✓std | TV |
| VL — Volcanic | As MIROC-ES2L (IACETH-SAGE3lambda inferred) | ✓std | TV |
| FC — Fixed composition | n/a (ESM; concentration-driven) | n/a | — |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | As MIROC-ES2L (NCAR-CCMI-2-0, shared VISIT-e land BGC) | ✓std |
| Fe-dep | As MIROC-ES2L (OECO2 ocean BGC; pyrogenic Fe: Ito et al. 2018/Hoesly2018/vanMarle2017 via SPRINTARS; lithogenic Fe: SPRINTARS prognostic dust at 3.5% Fe content; biomass burning Fe: Ito 2011 BC-ratio; non-standard centre-specific approach) | ~ |
| CO2-mode | As MIROC-ES2L (concentration-driven) | ✓std |

## Sources
- Hajima et al. 2020 (*GMD* doi:10.5194/gmd-13-2197-2020) — MIROC-ES2L primary; ES2H inferred from shared components
- Keeble et al. 2021 (*ACP* doi:10.5194/acp-21-5015-2021) — MIROC-ES2H not in interactive list

## Stage 12 verification notes
- All forcing entries are inferred from shared VISIT-e, OECO2, and SPRINTARS components with MIROC-ES2L; Watanabe 2021 primary paper was not retrieved in Stage 12 research
- Higher model top (L81, ~0.004 hPa) vs MIROC-ES2L (L40) does not imply interactive chemistry — confirmed absent from Keeble 2021 list
- Higher horizontal resolution (T213, ~60km) vs MIROC-ES2L (T42, ~300km) should not affect forcing dataset selection
- Open question: does Watanabe 2021 reveal any forcing differences from MIROC-ES2L?

## Confirmation pass notes (2026-06-27)
- Hajima et al. 2020 (GMD doi:10.5194/gmd-13-2197-2020) Table C1 (Appendix C) explicitly lists all MIROC-ES2L CMIP6 HIST forcing datasets: GHG = Meinshausen 2017; aerosol emissions (BC/OC/SO2) = Hoesly 2018 (CEDS) + van Marle 2017 (BB4CMIP6); ozone = Checa-Garcia 2018 (CCMI); LU = Ma et al. 2019 (LUH2); VL = Thomason et al. (IACETH WCRP-CMIP6); SO = Matthes 2017; N-dep = IGAC/SPARC CCMI
- Fe-dep resolved from Hajima 2020 Sect. 2.1.3 and Appendix C: pyrogenic Fe from Ito et al. 2018 (fossil fuel/biofuel) + Ito 2011 (biomass burning BC-ratio 0.04 gFe/gBC); lithogenic Fe from SPRINTARS prognostic mineral dust at 3.5% Fe content (Duce and Tindale 1991); all deposition simulated online by SPRINTARS — centre-specific approach, not standard CMIP6 Fe-dep dataset; verdict updated from ? to ~
- MIROC-ES2H inferences from ES2L confirmed valid: both models share OECO2, SPRINTARS, VISIT-e, and MATSIRO components; Fe-dep approach identical
