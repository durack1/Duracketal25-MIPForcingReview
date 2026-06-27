<!-- CMIP6 forcing record — AWI-CM-1-1-LR (AWI). Stage 15 workflow: wf_75e312c8-82e (2026-06-27) -->

# AWI-CM-1-1-LR — AWI (Germany)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** ECHAM6.3.04p1 atmosphere (T63L47, ~190km, 47 levels, top ~0.01 hPa) + JSBACH3.20 land + FESOM2.0 ocean (unstructured ~120km avg). AOGCM. **ECHAM6.3+JSBACH stack is byte-identical to MPI-ESM1-2-LR (Stage 8)** — only the ocean model differs (FESOM2 vs MPIOM1.6.3). No interactive chemistry.
- **CMIP5 predecessor:** None (new CMIP6 entrant)
- **Atmosphere / ocean components:** ECHAM6.3.04p1 (T63L47) + JSBACH3.20 / FESOM2.0
- **Primary documentation paper(s):** Semmler et al. 2020 (*JAMES* doi:10.1029/2019MS002009)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** (UoM-CMIP-1-2-0). | Inferred from ECHAM6.3+JSBACH3.20 = MPI-ESM1-2-LR stack (Stage 8) | Not directly confirmed from AWI-specific source. WDC-Climate metadata does not enumerate forcing datasets. |
| O  | Ozone | ✓std | TV | **CCMI prescribed** (UReading-CCMI-1-0). ECHAM6.3 → prescribed on all levels. | Inferred from MPI-ESM1-2-LR (Stage 8); Keeble 2021 verbatim for MPI-ESM | Keeble 2021: "For both configurations [MPI-ESM1-2-HR and -LR], ozone is prescribed on all levels following the CMIP6 recommendations." AWI shares ECHAM6.3 atmosphere — inheritance inference (medium confidence). AWI-specific ozone claim refuted (0-1). |
| SD | Aerosol — sulphate direct | ✓std | TV | **MACv2-SP** (Stevens 2017) prescribed aerosol. | Inferred from MPI-ESM1-2-LR (Stage 8); Mauritsen 2019 verbatim | Not confirmed from AWI-specific source. AWI WDC-Climate metadata lists no forcing datasets. Inheritance from ECHAM6.3+JSBACH stack (medium confidence). |
| SI | Aerosol — sulphate indirect | ✓std | TV | **MACv2-SP** indirect effects. | Inferred from MPI-ESM1-2-LR | As SD. |
| BC | Black carbon | ✓std | TV | **MACv2-SP** (ECHAM6.3 lineage). | Inferred from MPI-ESM1-2-LR | As SD. |
| OC | Organic carbon | ✓std | TV | **MACv2-SP** (ECHAM6.3 lineage). | Inferred from MPI-ESM1-2-LR | As SD. |
| MD | Mineral dust | FXc | FXc | **Kinne et al. 2013** fixed natural aerosol background. | Inferred from MPI-ESM1-2-LR (Stage 8) | Not time-varying. As MPI-ESM1-2-LR. |
| SS | Sea salt | FXc | FXc | **Kinne et al. 2013** fixed natural background. | Inferred from MPI-ESM1-2-LR | As MPI-ESM1-2-LR. |
| LU | Land-use change | ✓std | TV | **LUH2 v2.1h** (Hurtt et al. 2020) via JSBACH3.20. | Inferred from MPI-ESM1-2-LR | Not confirmed from AWI-specific source. |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** (SOLARIS-HEPPA-3-2). | Inferred from MPI-ESM1-2-LR | Not confirmed from AWI-specific source. |
| VL | Volcanic aerosols | ✓std | TV | **IACETH-SAGE3lambda-3-0-0** (Thomason et al. 2018). | Inferred from MPI-ESM1-2-LR | Not confirmed from AWI-specific source. |
| FC | Flux corrections | n/a | n/a | None | | AOGCM. |

### Deviations from Eyring 2016 standard protocol
- **None detected.** All verdicts inferred from ECHAM6.3+JSBACH3.20 = MPI-ESM1-2-LR (Stage 8) which had no deviations.
- **CRITICAL CAVEAT**: All AWI verdicts are INFERRED from shared ECHAM6.3+JSBACH3.20 atmosphere/land stack with MPI-ESM1-2-LR. WDC-Climate AWI metadata (C6CMAWAWMhi and C6sCMAWAWMhi) lists only model components, no forcing datasets. Semmler 2020 forcing section not successfully extracted. AWI-specific ozone claim refuted (0-1). Require direct read of Semmler 2020 §2 or ESGF dataset attributes to confirm.

## Provenance
- Stage 15 workflow run ID: wf_75e312c8-82e (2026-06-27); 31 agents; AWI verdicts all inferred (not source-confirmed)
- Key sources: Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021, confirms MPI-ESM1-2-LR CCMI ozone via ECHAM6.3); WDC-Climate C6CMAWAWMhi (confirms ECHAM6.3.04p1+JSBACH3.20); Semmler et al. 2020 (JAMES doi:10.1029/2019MS002009, not fully extracted)
- Cross-reference: [[MPI-M__MPI-ESM1-2-LR]] Stage 8 (identical ECHAM6.3+JSBACH3.20 atmosphere/land)
