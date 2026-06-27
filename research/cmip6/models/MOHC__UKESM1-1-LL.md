<!-- CMIP6 forcing record — UKESM1-1-LL (MOHC+NERC). Stage 11 workflow: wf_205a78ae-659 (2026-06-26) -->

# UKESM1-1-LL — MOHC+NERC (UK)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** Minor bug-fix update of UKESM1-0-LL. Atmosphere (UM GA7.1) + ocean (NEMO3.6 ORCA1) + sea ice (CICE6) + land (JULES-ES) + ocean BGC (MEDUSA2) + interactive chemistry (UKCA StratTrop). All forcing datasets identical to UKESM1-0-LL. **Note**: Keeble et al. 2021 lists only UKESM1-0-LL in their 6-model interactive list — UKESM1-1-LL uses the same UKCA StratTrop scheme but is not separately enumerated.
- **Primary documentation paper(s):** Sellar et al. 2019, *JAMES* doi:10.1029/2019MS001739 [sellar_ukesm1_2019] (covers UKESM1 family)

## Forcing datasets — all identical to UKESM1-0-LL

UKESM1-1-LL is a minor bug-fix variant of UKESM1-0-LL with no changes to forcing datasets or model components. All verdicts, sources, and caveats carry over from UKESM1-0-LL.

| Key | Verdict | Temporal | Notes |
|-----|---------|----------|-------|
| G  | ✓std | TV | As UKESM1-0-LL (Meinshausen 2017) |
| O  | ＋exc | TV | As UKESM1-0-LL (UKCA StratTrop interactive; Keeble 2021) |
| SD | ✓std | TV | As UKESM1-0-LL (GLOMAP-mode CEDS, UKCA-coupled oxidants) |
| SI | ✓std | TV | As UKESM1-0-LL (GLOMAP-mode indirect) |
| BC | ✓std | TV | As UKESM1-0-LL (CEDS+BB4CMIP6 ×2) |
| OC | ✓std | TV | As UKESM1-0-LL |
| MD | ? | ? | As UKESM1-0-LL (dust treatment uncertain) |
| SS | ✓std | TV | As UKESM1-0-LL (GLOMAP-mode interactive) |
| LU | ✓std | TV | As UKESM1-0-LL (LUH2 via JULES-ES) |
| SO | ✓std | TV | As UKESM1-0-LL (Matthes 2017) |
| VL | ✓std | TV | As UKESM1-0-LL (IACETH-SAGE3lambda; Sellar 2019 verbatim) |
| N-dep | ✓std | TV | As UKESM1-0-LL (NCAR-CCMI-2-0; Sellar 2019 Table A5) |
| Fe-dep | ? | ? | As UKESM1-0-LL (unconfirmed for MEDUSA2) |
| CO2-mode | ? | ? | As UKESM1-0-LL (concentration-driven assumed) |
| FC | n/a | n/a | |

## Provenance
- Stage 11 workflow run ID: wf_205a78ae-659 (2026-06-26)
- Key sources: Sellar et al. 2019 (doi:10.1029/2019MS001739); Mulcahy et al. 2020 (doi:10.5194/gmd-13-6383-2020)
