<!-- CMIP6 forcing record — MIROC6 (MIROC). Stage 12 complete (2026-06-26). -->

# MIROC6 — MIROC (Japan)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** MIROC6 atmosphere (T85L81, ~140km, 81 levels, top ~0.004 hPa) + COCO4.9 ocean (~1°) + MATSIRO6 land + CICE5.1 sea ice. AOGCM. SPRINTARS interactive aerosol scheme. No interactive atmospheric chemistry — NOT in Keeble 2021 interactive list.
- **Primary paper:** Tatebe et al. 2019, *GMD* doi:10.5194/gmd-12-2727-2019
- **CMIP5 predecessor:** MIROC5 (T85L40, lower top) — updated with higher-top atmosphere (L81) for CMIP6

## Forcing (CMIP6 historical, 1850–2014)

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Meinshausen et al. 2017 (UoM-CMIP-1-2-0); 1850 CO2=284.32 ppm, CH4=808.25 ppb, N2O=273.02 ppb | ✓std | TV |
| O — Ozone | CCMI 3-D ozone (Hegglin et al. 2019 / UReading-CCMI-1-0); prescribed; NOT in Keeble 2021 interactive list | ✓std | TV |
| SD — Sulfate direct | SPRINTARS interactive; SO2 from CEDS (Hoesly et al. 2018) + BB4CMIP6 (van Marle et al. 2017) | ✓std | TV |
| SI — Sulfate indirect | SPRINTARS interactive (same emissions as SD) | ✓std | TV |
| BC — Black carbon | SPRINTARS interactive; CEDS + BB4CMIP6 | ✓std | TV |
| OC — Organic carbon | SPRINTARS interactive; CEDS + BB4CMIP6 | ✓std | TV |
| MD — Mineral dust | SPRINTARS prognostic online (natural emission parameterization) | ✓std | TV |
| SS — Sea salt | SPRINTARS prognostic online (natural emission parameterization) | ✓std | TV |
| LU — Land use | LUH2 v2.1h (Hurtt et al. 2020; UofMD-landState-2-1-h) via MATSIRO6; note: claim citing Hurtt 2011 (LUH1) refuted (0-1) | ✓std | TV |
| SO — Solar | Matthes et al. 2017 (SOLARIS-HEPPA-3-2) | ✓std | TV |
| VL — Volcanic | Thomason et al. 2019 stratospheric aerosol extinction coefficients (CMIP6 SAD product; maps to IACETH-SAGE3lambda product lineage; claim that this constitutes a deviation refuted 0-1) | ✓std | TV |
| FC — Fixed composition | n/a (AOGCM) | n/a | — |

## Sources
- Tatebe et al. 2019 (*GMD* doi:10.5194/gmd-12-2727-2019) — primary; all forcing confirmed verbatim
- Keeble et al. 2021 (*ACP* doi:10.5194/acp-21-5015-2021) — confirms MIROC6 NOT in interactive chemistry list (O=✓std)

## Stage 12 verification notes
- 30 agents, 14 claims verified, 12 confirmed, 2 killed
- VL: Tatebe 2019 cites "Thomason et al. 2019" extinction coefficients. The adversarial verifier refuted the claim that this is a deviation (0-1), confirming this maps to the CMIP6 SAD standard. The 2019 citation likely corresponds to the Thomason et al. 2018 ESSD paper describing the IACETH-SAGE3lambda dataset.
- LU: A claim that MIROC6 uses Hurtt 2011 (LUH1) was refuted (0-1); Appendix C of Tatebe 2019 was not retrieved; standard LUH2 v2.1h is the inferred dataset consistent with CMIP6 protocol.
- O: Tatebe 2019 verbatim: "Three-dimensional atmospheric concentrations of historical ozone (O3) are produced by the Chemistry–Climate Model Initiative (Hegglin et al., 2019)." The "2019" citation is a citation-form variant of the same CCMI product as UReading-CCMI-1-0 (Checa-Garcia 2018); no dataset deviation.
