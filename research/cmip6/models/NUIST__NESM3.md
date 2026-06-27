<!-- CMIP6 forcing record — NESM3 (NUIST). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# NESM3 — NUIST (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** ECHAM6.3 atmosphere (T63L47, ~190km, top 1 Pa / ~0.01 hPa) + **JSBACH v3.1 land** (NOT CLM4.5 — WDCC confirmed) + NEMO v3.4 ocean + CICE4.1. AOGCM. Nanjing University of Information Science & Technology. **ECHAM6.3 = identical atmospheric model as MPI-ESM1-2-LR (Stage 8) and AWI-CM (Stage 15).** No interactive chemistry.
- **CMIP5 predecessor:** NESM (earlier versions)
- **Primary documentation paper(s):** Cao et al. 2018 (*GMD* doi:10.5194/gmd-11-2975-2018)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** (inferred from ECHAM6.3 lineage — MPI-ESM1-2-LR). | Inferred from ECHAM6.3 = MPI-ESM1-2-LR lineage | Not confirmed from NESM3-specific source. WDCC metadata cites no forcing datasets. |
| O  | Ozone | ✓std | TV | **CCMI prescribed** (Checa-Garcia 2018 / UReading-CCMI-1-0). ECHAM6.3 → prescribed on all levels. | Keeble 2021 via ECHAM6.3=MPI-ESM1-2-LR | Keeble 2021 verbatim for ECHAM6.3 in MPI-ESM1-2-LR: "ozone is prescribed on all levels following the CMIP6 recommendations." NESM3 shares ECHAM6.3 — inheritance inference (medium confidence). Not in Keeble 2021 interactive list. |
| SD | Aerosol — sulphate direct | ✓std | TV | **MACv2-SP** prescribed aerosol (inferred from ECHAM6.3 lineage). | Inferred from MPI-ESM1-2-LR Stage 8 | Not confirmed from NESM3-specific source. MACv2-SP is the ECHAM6.3 standard (Stevens 2017; confirmed for MPI-ESM1-2-LR by Mauritsen 2019). |
| SI | Aerosol — sulphate indirect | ✓std | TV | MACv2-SP (inferred). | | As SD. |
| BC | Black carbon | ✓std | TV | MACv2-SP (inferred). | | As SD. |
| OC | Organic carbon | ✓std | TV | MACv2-SP (inferred). | | As SD. |
| MD | Mineral dust | FXc | FXc | Kinne et al. 2013 fixed natural background (inferred from ECHAM6.3 lineage). | Inferred from MPI-ESM1-2-LR | As MPI-ESM1-2-LR. |
| SS | Sea salt | FXc | FXc | Kinne et al. 2013 (inferred). | | As MD. |
| LU | Land-use change | ✓std | TV | **LUH2 v2.1h** via JSBACH v3.1 (inferred from ECHAM6.3 lineage). | Inferred from MPI-ESM1-2-LR | Land model = JSBACH v3.1 (confirmed by WDCC C6CMNUINEShi — NOT CLM4.5 as previously assumed). |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** (inferred from ECHAM6.3 lineage). | Inferred from MPI-ESM1-2-LR | Not confirmed from NESM3-specific source. |
| VL | Volcanic aerosols | ✓std | TV | **IACETH-SAGE3lambda-3-0-0** (inferred from ECHAM6.3 lineage). | Inferred from MPI-ESM1-2-LR | Not confirmed from NESM3-specific source. |
| FC | Flux corrections | n/a | n/a | None | | |

### Architecture correction
- **NESM3 land = JSBACH v3.1** (the native ECHAM6.3/MPI partner), NOT CLM4.5. Confirmed by WDCC C6CMNUINEShi: "land: JSBACH v3.1." This reinforces the ECHAM6.3+JSBACH lineage with MPI-ESM1-2-LR and AWI-CM, and means LU forcing enters via JSBACH (as MPI-ESM1-2-LR), not CLM pathways.

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); confirmed: ECHAM6.3 atmosphere + JSBACH v3.1 land (WDCC C6CMNUINEShi); all forcing verdicts inferred from ECHAM6.3+JSBACH = MPI-ESM1-2-LR lineage (medium confidence)
- Key sources: WDCC C6CMNUINEShi (atmos/land confirmed); Keeble 2021 (ECHAM6.3 ozone via MPI-ESM1-2-LR); Cao et al. 2018 (*GMD* doi:10.5194/gmd-11-2975-2018, not extracted in Stage 16)
- Cross-reference: [[MPI-M__MPI-ESM1-2-LR]] (identical ECHAM6.3+JSBACH atmosphere/land)
