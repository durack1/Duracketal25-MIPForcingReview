<!-- CMIP6 forcing record — MIROC-ES2L (MIROC). Stage 12 complete (2026-06-26). -->

# MIROC-ES2L — MIROC (Japan)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** Full ESM. MIROC6 base atmosphere (T42L40, ~300km — lower horizontal resolution than MIROC6 standard) + COCO4.9 ocean (1°) + OECO2 ocean BGC (oxygen, carbon, nitrogen, Fe cycling) + VISIT-e land BGC (active C-N cycle). SPRINTARS6.0 aerosol scheme.
- **Primary paper:** Hajima et al. 2020, *GMD* doi:10.5194/gmd-13-2197-2020
- **CMIP5 predecessor:** MIROC-ESM (SPRINTARS + CHASER chemistry in MIROC-ESM-CHEM) — MIROC-ES2L switches to prescribed CCMI ozone (no CHASER)

## Forcing (CMIP6 historical, 1850–2014)

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Meinshausen et al. 2017 (UoM-CMIP-1-2-0); historical is concentration-driven (prescribed CO2) per Hajima 2020 verbatim | ✓std | TV |
| O — Ozone | CCMI prescribed 3-D ozone; NOT in Keeble 2021 interactive list; CHASER (CMIP5 MIROC-ESM-CHEM) was replaced by prescribed CCMI | ✓std | TV |
| SD — Sulfate direct | SPRINTARS6.0 interactive; CEDS (Hoesly 2018) + BB4CMIP6 (van Marle 2017) emissions; same scheme as MIROC6 | ✓std | TV |
| SI — Sulfate indirect | SPRINTARS6.0 interactive (same emissions as SD) | ✓std | TV |
| BC — Black carbon | SPRINTARS6.0 interactive; CEDS + BB4CMIP6 | ✓std | TV |
| OC — Organic carbon | SPRINTARS6.0 interactive; CEDS + BB4CMIP6 | ✓std | TV |
| MD — Mineral dust | SPRINTARS6.0 prognostic online | ✓std | TV |
| SS — Sea salt | SPRINTARS6.0 prognostic online | ✓std | TV |
| LU — Land use | LUH2 v2.1h inferred from "CMIP6 official forcing v6.2.1" (Hajima 2020 verbatim); per-forcing Appendix C not retrieved | ✓std | TV |
| SO — Solar | Matthes 2017 (SOLARIS-HEPPA-3-2) inferred from "CMIP6 official forcing v6.2.1" | ✓std | TV |
| VL — Volcanic | IACETH-SAGE3lambda-3-0-0 inferred from "CMIP6 official forcing v6.2.1" | ✓std | TV |
| FC — Fixed composition | n/a (ESM; concentration-driven) | n/a | — |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | NCAR-CCMI-2-0 (Hegglin, Kinnison, Lamarque 2016; doi:10.22033/ESGF/input4MIPs.1125); CMIP6 standard N-dep for VISIT-e C-N cycle | ✓std |
| Fe-dep | Not confirmed; OECO2 ocean BGC has Fe limitation | ? |
| CO2-mode | Concentration-driven (prescribed CO2); Hajima 2020 verbatim: "CO2 concentration was prescribed in the simulations (i.e., so-called concentration-driven experiments)" | ✓std |

## Sources
- Hajima et al. 2020 (*GMD* doi:10.5194/gmd-13-2197-2020) — primary; verbatim: "All three experiments were driven by the Coupled Model Intercomparison Project Phase 6 (Eyring et al., 2016) official forcing datasets (version 6.2.1; details on the forcing datasets used in the simulations are summarized in Appendix C)"
- WDC-Climate input4MIPs (doi:10.22033/ESGF/input4MIPs.1125) — NCAR-CCMI-2-0 N-dep dataset confirmed

## Stage 12 verification notes
- Aerosols confirmed: SPRINTARS6.0 interactive (not MACv2-SP) from WDC-Climate registry + Hajima 2020
- Hajima 2020 Appendix C (per-forcing source_ids) was not retrievable (HTML did not expose table); per-forcing verdicts G/O/LU/SO/VL are inferred from the blanket "CMIP6 official forcing v6.2.1" statement
- N-dep confirmed: NCAR-CCMI-2-0 (Hegglin 2016; WDC-Climate page confirms exact title and DOI verbatim)
- CMIP5 note: MIROC-ESM-CHEM used CHASER interactive chemistry (O=＋exc). MIROC-ES2L uses prescribed CCMI ozone (O=✓std) — confirmed by Keeble 2021 absence from interactive list
- Fe-dep for OECO2 Fe cycling: not identified by any confirmed claim; marked ?
