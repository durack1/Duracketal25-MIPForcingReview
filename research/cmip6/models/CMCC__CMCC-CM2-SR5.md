<!-- CMIP6 forcing record — CMCC-CM2-SR5 (CMCC). Stage 13 (2026-06-26) — CMCC not covered in Stage 13 research. -->

# CMCC-CM2-SR5 — CMCC (Italy)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** CAM5.3 atmosphere (T85L46, ~1°, 46 levels) + NEMO3.6 ocean + CICE4 + CLM4.5 land. AOGCM. No interactive chemistry. Not in Keeble 2021 interactive list.
- **Primary paper:** Cherchi et al. 2019, *JAMES* doi:10.1029/2018MS001369
- **CMIP5 predecessor:** CMCC-CMS / CMCC-CM (CMIP5 Stage 11 — unresolved in CMIP5 review)

## Forcing (CMIP6 historical, 1850–2014)

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Meinshausen 2017 / UoM-CMIP concentrations | ✓std | TV |
| O — Ozone | UReading-CCMI (Hegglin et al. 2016) prescribed | ✓std | TV |
| SD — Sulfate direct | MAM3 interactive (CEDS + BB4CMIP6 emissions) | ＋exc | TV |
| SI — Sulfate indirect | MAM3 interactive (CEDS + BB4CMIP6 emissions) | ＋exc | TV |
| BC — Black carbon | MAM3 interactive (CEDS + BB4CMIP6 emissions) | ＋exc | TV |
| OC — Organic carbon | MAM3 interactive (CEDS + BB4CMIP6 emissions) | ＋exc | TV |
| MD — Mineral dust | MAM3 interactive (online) | ＋exc | TV |
| SS — Sea salt | MAM3 interactive (online) | ＋exc | TV |
| LU — Land use | LUH2 / UofMD-landState (Hurtt et al.) via CLM4.5 | ✓std | TV |
| SO — Solar | SOLARIS-HEPPA v3.2 (Matthes et al. 2017) | ✓std | TV |
| VL — Volcanic | IACETH-SAGE (Thomason et al. 2018) | ✓std | TV |
| FC — Fixed composition | n/a (AOGCM) | n/a | — |

## Sources
- Cherchi et al. 2019 (*JAMES* doi:10.1029/2018MS001369) — primary model description (present-day control simulation; historical forcing confirmed via Lovato 2022)
- Lovato et al. 2022 (*JAMES* doi:10.1029/2021MS002814) — CMCC-ESM2 (sibling model, confirms shared forcing)

## Notes
**Inference note (second-pass 2026-06-28)**: All CMIP6 historical forcing verdicts are **inferred from CMCC-ESM2 (Lovato 2022 Table 1)** via shared physical model (CAM5.3 atmosphere, NEMO3.6 ocean, CICE4, CLM4.5 land — both models use the identical physical configuration). Cherchi et al. 2019 describes a 200-year present-day **control simulation** (fixed year-2000 forcing), NOT the CMIP6 transient historical run — it cannot confirm CMIP6 historical forcing directly. CMCC-ESM2 adds CLM4.5-BGC land carbon cycle + BFM v5.2 ocean BGC on top of the same physical model; ESM-specific inputs from CMCC-ESM2 (N-dep=NCAR-CCMI-v2.0, Fe-dep=online dust dissolution, CO2-mode=concentration-driven) do NOT apply to CMCC-CM2-SR5 (AOGCM, no active BGC, no ESM-specific forcing inputs). Physical forcing inference confidence: **high** (shared CAM5.3 atmosphere is the forcing pathway for G, O, aerosols, SO, VL; CLM4.5 land for LU).

Second-pass research (2026-06-27) via web retrieval: PDFs not renderable (poppler not installed), so forcing confirmed via web search and WCRP/WDC-Climate metadata. CMCC-CM2-SR5 uses CAM5.3 atmosphere with MAM3 (3-mode Modal Aerosol Module) — aerosols are fully interactive/prognostic driven by CEDS anthropogenic and BB4CMIP6 fire emissions, making all aerosol components ＋exc. Ozone prescribed from UReading-CCMI (Hegglin 2016) — no interactive chemistry. GHGs from Meinshausen 2017 UoM-CMIP concentrations. Land use from LUH2 / Hurtt et al. via CLM4.5. Solar from Matthes 2017 SOLARIS-HEPPA v3.2. Volcanic from Thomason 2018 IACETH-SAGE. All these forcing datasets confirmed consistent with standard CMIP6 protocol for CMCC models across both CM2-SR5 and ESM2 configurations.

Third-pass PDF extraction (2026-06-27): Both PDFs extracted via pdftotext and read in full. Lovato et al. 2022 (CMCC-ESM2) Table 1 explicitly lists all CMIP6 historical forcing: G = UoM-CMIP v1.2 (Meinshausen & Vogel 2016) ✓std; O = UReading-CCMI v1.0 (Hegglin et al. 2016) ✓std; aerosols (SD/SI/BC/OC) = CEDS 2017-08-30 emissions via MAM3 interactive ＋exc; MD/SS = MAM3 online interactive ＋exc; LU = UofMD-landState high v2.1 hr (Hurtt et al. 2019) ✓std; SO = SOLARIS-HEPPA v3.2 (Matthes et al. 2017) ✓std; VL = IACETH-SAGE v3 (ETH Zürich 2017) ✓std. Note: LU dataset is UofMD-landState (Hurtt et al. 2019 = Hurtt 2020 LUH2 data). Cherchi et al. 2019 (CMCC-CM2) describes present-day control simulation (not historical CMIP6); confirms CAM5 with MAM3 fully interactive aerosols for CMCC-CM2-SR5. All existing verdicts confirmed by PDF evidence — no changes required.
