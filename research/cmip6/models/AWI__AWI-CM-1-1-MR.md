<!-- CMIP6 forcing record — AWI-CM-1-1-MR (AWI). Stage 15 workflow: wf_75e312c8-82e (2026-06-27) -->

# AWI-CM-1-1-MR — AWI (Germany)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** As AWI-CM-1-1-LR — ECHAM6.3.04p1 (T63L47) + JSBACH3.20 + FESOM2.0 (higher ocean resolution ~25km avg). All atmospheric forcing IDENTICAL to AWI-CM-1-1-LR. Ocean resolution only difference vs LR.
- **Primary documentation paper(s):** Semmler et al. 2020 (*JAMES* doi:10.1029/2019MS002009)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

All forcing verdicts IDENTICAL to AWI-CM-1-1-LR. See [[AWI__AWI-CM-1-1-LR]] for full table and provenance.

| Key | Forcing | Verdict | Temporal | Dataset / source |
|-----|---------|---------|----------|-----------------|
| G  | Well-mixed GHGs | ✓std | TV | Meinshausen 2017 (inferred ECHAM6.3 lineage) |
| O  | Ozone | ✓std | TV | CCMI prescribed (inferred ECHAM6.3 lineage) |
| SD | Aerosol — sulphate direct | ✓std | TV | MACv2-SP (inferred ECHAM6.3 lineage) |
| SI | Aerosol — sulphate indirect | ✓std | TV | MACv2-SP |
| BC | Black carbon | ✓std | TV | MACv2-SP |
| OC | Organic carbon | ✓std | TV | MACv2-SP |
| MD | Mineral dust | FXc | FXc | Kinne et al. 2013 |
| SS | Sea salt | FXc | FXc | Kinne et al. 2013 |
| LU | Land-use change | ✓std | TV | LUH2 v2.1h |
| SO | Solar irradiance | ✓std | TV | Matthes 2017 |
| VL | Volcanic aerosols | ✓std | TV | IACETH-SAGE3lambda-3-0-0 |
| FC | Flux corrections | n/a | n/a | None |

## Provenance
- Stage 15; all inferred from shared ECHAM6.3.04p1+JSBACH3.20 atmosphere/land with AWI-CM-1-1-LR (confirmed by WDC-Climate C6CMAWAWMhi: atmosphere = ECHAM6.3.04p1).
