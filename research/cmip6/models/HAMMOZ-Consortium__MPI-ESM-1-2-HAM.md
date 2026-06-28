<!-- CMIP6 forcing record — MPI-ESM-1-2-HAM (HAMMOZ-Consortium). Stage 8 workflow: wf_f9ea73ac-462 (2026-06-23) -->

# MPI-ESM-1-2-HAM — HAMMOZ-Consortium (MPI-M, ETH Zurich, and others), Germany/Switzerland

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** None in WCRP-CMIP scope (ECHAM-HAM was in CMIP5 but not as named WCRP model in scope)
- **Model family / lineage:** MPI-ESM1.2 base (ECHAM6.3 atmosphere + JSBACH3.2 land + MPIOM ocean + HAMOCC6 ocean BGC) **+ HAM2 interactive aerosol scheme** (ECHAM6.3-HAM2.3). Key difference from MPI-ESM1-2-LR/HR: HAM2 computes aerosol size distribution, optical properties, and cloud activation interactively, REPLACING the MACv2-SP prescribed aerosol treatment of the base models.
- **Primary documentation paper(s):** Tegen et al. 2019, *GMD* doi:10.5194/gmd-12-1331-2019 [tegen_ham_2019]; Neubauer et al. 2019, *GMD* doi:10.5194/gmd-12-1643-2019 [neubauer_ham_2019] (Part 1); Neubauer et al. 2019, *GMD* doi:10.5194/gmd-12-3609-2019 [neubauer_ham_2019_p2] (Part 2)

**TACTIC vs HAM disambiguation**: HAM2 = the interactive aerosol scheme in MPI-ESM-1-2-HAM (not to be confused with CNRM's TACTIC_v2). Both are interactive aerosol schemes but are completely separate systems in different models.

**HAM2 interactive ozone caveat**: HAM2 provides interactive aerosol chemistry only. Full ozone chemistry would require the separate ECHAM6.3-HAM2.3-MOZ1.0 (chemistry-climate model); the CMIP6 historical configuration uses HAM2 WITHOUT MOZ1.0, so ozone is prescribed as in the base models.

## Forcing datasets used (historical 1850–2014)

| Key | Forcing | Protocol (Eyring 2016) | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | ✓std | TV | **Meinshausen et al. 2017** (UoM-CMIP-1-2-0). input4MIPs uniqueness: only one CMIP6 historical GHG dataset; same ECHAM6.3 base as LR/HR. | ESGF input4MIPs catalog 2026-06-28 | Resolved via input4MIPs uniqueness (2026-06-28) |
| O  | Ozone | Checa-Garcia et al. 2018 CCMI | ✓std | TV | **Standard CMIP6 CCMI prescribed ozone** — identical to MPI-ESM1-2-LR/HR. HAM2 does NOT include ozone chemistry (only aerosol). | Keeble et al. 2021; Neubauer et al. 2019 (CMIP6 WDC metadata) | Keeble 2021 (Sect. 2.1): "The abundance of ozone in the atmosphere is prescribed following the CMIP6 dataset." WDC-Climate CMIP6 metadata for HAMMOZ-Consortium confirms atmosChem = 'sulfur chemistry only' (NOT MOZ ozone chemistry). Interactive ozone would require HAM2.3-MOZ1.0 — not the CMIP6 configuration. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | ~ | TV | **HAM2 interactive aerosol scheme** — computes sulphate, BC, OC, dust, sea salt interactively. Replaces MPI-ESM1.2-LR/HR MACv2-SP prescribed treatment. Emission input for CMIP6 historical (CEDS+BB4CMIP6 interactive vs other) is UNCONFIRMED. | Tegen et al. 2019; Neubauer et al. 2019 | Neubauer 2019 Part 2 standalone runs use ACCMIP MACCity/RCP8.5 emissions — but these are non-CMIP6 idealized runs (AMIP SST, 2000-2015) and cannot be transposed onto the CMIP6 historical run. The actual CMIP6-historical emissions inventory is unresolved. If HAM2 consumes CEDS+BB4CMIP6 interactively → ✓std/＋exc; if non-standard → ✗dev. |
| SI | Aerosol — sulphate indirect | — | ~ | TV | As SD — HAM2 interactive indirect effects (cloud activation, both 1st and 2nd indirect). Emission provenance unconfirmed. | Tegen et al. 2019 | HAM2 includes more complete indirect effect treatment than MACv2-SP Twomey-only. |
| BC | Black carbon | CEDS + BB4CMIP6 | ~ | TV | As SD — HAM2 interactive BC | Tegen et al. 2019 | |
| OC | Organic carbon | CEDS + BB4CMIP6 | ~ | TV | As SD — HAM2 interactive OC | Tegen et al. 2019 | |
| MD | Mineral dust | — | ~ | TV | HAM2 prognostic dust (interactive) — emission provenance unconfirmed | Tegen et al. 2019 | HAM2 has prognostic dust, unlike MPI-ESM1-2-LR/HR where dust is FXc (Kinne 2013) |
| SS | Sea salt | — | ~ | TV | HAM2 prognostic sea salt (interactive) | Tegen et al. 2019 | As MD |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | ✓std | TV | **LUH2v2h (dynamic transitions)** — same JSBACH3.2 land component as MPI-ESM1-2-LR. Mauritsen 2019 (section 6.3): "in MPI-ESM1.2-LR land use is computed from a sequence of land use transitions" from "LUH2v2h (Hurtt et al., 2016)". HAM shares identical land component. | Mauritsen et al. 2019 | |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | ✓std | TV | **Matthes et al. 2017 / SOLARIS-HEPPA-3-2**. input4MIPs uniqueness; same ECHAM6.3 base as LR/HR. | ESGF input4MIPs catalog 2026-06-28 | Resolved via input4MIPs uniqueness (2026-06-28) |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | ✓std | TV | **IACETH-SAGE3lambda-3-0-0**. input4MIPs uniqueness + Mauritsen 2019 §8.2 confirms VL prescribed in historical; HAM shares same ECHAM6.3 base. | Mauritsen et al. 2019; ESGF input4MIPs catalog 2026-06-28 | Resolved via uniqueness + Mauritsen 2019 (2026-06-28) |
| FC | Flux corrections | Not expected | n/a | n/a | None | — | |

### Deviations from Eyring 2016 standard protocol
- **O = ✓std**: Same as MPI-ESM1-2-LR/HR — standard CCMI prescribed ozone; HAM2 has no ozone chemistry.
- **SD/BC/OC/SI/MD/SS = ~**: HAM2 interactive aerosol scheme is an interactive path; if CEDS+BB4CMIP6 emissions are confirmed → ＋exc; if different emissions → ✗dev. Currently unresolvable from literature.
- **No confirmed deviations on non-aerosol forcings**.

## ESM-specific forcing inputs

| ESM input | Applied? | Verdict | Notes |
|-----------|----------|---------|-------|
| N-deposition (NHx/NOy) | Yes | ✓std | HAMOCC6 ocean BGC: same as MPI-ESM1-2-LR. Mauritsen 2019 (section 5.2): "Gridded coupled chemistry model intercomparison N-deposition fields of version 1.0 are used as provided via the CMIP6 input database" = NCAR-CCMI-2-0 (input4MIPs). HAM shares identical HAMOCC6 component. |
| CO2-mode | ? | ? | Concentration-driven expected |
| Fe deposition (HAMOCC6) | Possible | ? | As MPI-ESM1-2-LR |

## Open questions
1. **SD/BC/OC — CMIP6 historical emissions**: Does HAM2 consume CEDS+BB4CMIP6 in the CMIP6 historical run? Resolve via Tegen et al. 2019 Part 1 (doi:10.5194/gmd-12-1331-2019) or ES-DOC for MPI-ESM-1-2-HAM historical. Both Tegen 2019 papers use ACCMIP emissions (not CEDS/BB4CMIP6) for their evaluation runs, but these are pre-CMIP6 evaluation runs — CMIP6 historical emissions provenance remains unconfirmed.
~~2. **G/SO/VL**: resolved 2026-06-28 → ✓std (input4MIPs uniqueness + Mauritsen 2019 §8.2 for VL)~~
2. **CO2-mode, Fe**: ESM inputs unconfirmed.

## Provenance
- Stage 8 workflow run ID: wf_f9ea73ac-462 (2026-06-23)
- Stage 9 full text review (2026-06-27): Mauritsen et al. 2019 JAMES (doi:10.1029/2018MS001400), Tegen et al. 2019 GMD Part 1 (doi:10.5194/gmd-12-1643-2019), Neubauer et al. 2019 GMD Part 2 (doi:10.5194/gmd-12-3609-2019) fully extracted and searched.
  - **LU confirmed ✓std**: Mauritsen 2019 section 6.3 — LUH2v2h (Hurtt et al. 2016) used via JSBACH3.2 land component shared with HAM.
  - **N-dep confirmed ✓std**: Mauritsen 2019 section 5.2 — "Gridded coupled chemistry model intercomparison N-deposition fields of version 1.0 are used as provided via the CMIP6 input database" = NCAR-CCMI-2-0 input4MIPs; HAMOCC6 shared with HAM.
  - **G, SO, VL**: Not named in any of the three papers. Mauritsen 2019 confirms volcanic stratospheric aerosols ARE prescribed in historical simulations (section 8.2) but does not name the dataset. G (Meinshausen 2017) and SO (Matthes 2017) not cited. Resolved 2026-06-28 via input4MIPs uniqueness (see MPI-ESM1-2-LR provenance).
  - **SD/BC/OC emissions**: Tegen 2019 and Neubauer 2019 use ACCMIP MACCity/RCP8.5 emissions for their evaluation runs — these are pre-CMIP6 evaluation configurations, not the CMIP6 historical run. CEDS+BB4CMIP6 provenance for CMIP6 historical remains unconfirmed.
- Key sources: Tegen et al. 2019 (doi:10.5194/gmd-12-1331-2019); Neubauer et al. 2019 Part 1 (doi:10.5194/gmd-12-1643-2019), Part 2 (doi:10.5194/gmd-12-3609-2019); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021); Mauritsen et al. 2019 (doi:10.1029/2018MS001400)
