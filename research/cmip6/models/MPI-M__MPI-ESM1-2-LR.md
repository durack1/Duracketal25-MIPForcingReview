<!-- CMIP6 forcing record — MPI-ESM1-2-LR (MPI-M). Stage 8 workflow: wf_f9ea73ac-462 (2026-06-23) -->

# MPI-ESM1-2-LR — Max Planck Institute for Meteorology, Germany

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** MPI-ESM-LR (O=✓std Cionni2011; SD/BC/OC=✗dev Kinne2006 MAC-v1; LU=✓std Hurtt2011; SO/VL=unresolved)
- **Model family / lineage:** ECHAM6.3 atmosphere (T63L47) + JSBACH3.2 land (active C, N, P) + MPIOM1.6.3 ocean + HAMOCC6 ocean BGC. Full ESM.
- **Atmosphere / ocean components:** ECHAM6.3 / MPIOM1.6.3 + HAMOCC6
- **Primary documentation paper(s):** Mauritsen et al. 2019, *JAMES* doi:10.1029/2018MS001400 [mauritsen_mpi_esm_2019] (NOTE: JAMES not GMD; PMC open-access mirror: PMC7386935)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | Meinshausen 2017 expected; not confirmed by Stage 8 | — | OPEN |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✓std | TV | **Prescribed CMIP6 CCMI ozone on all levels** — no interactive chemistry in ECHAM6.3. Keeble 2021 verbatim: "For both configurations, ozone is prescribed on all levels following the CMIP6 recommendations." Placed in Keeble 2021 13-model prescribed-ozone group. Consistent with CMIP5 ✓std (Cionni2011 → CCMI). | Keeble et al. 2021; Mauritsen et al. 2019 | WDC-Climate CMIP6 archive metadata corroborates. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | `MPI-M-MACv2-SP-1-0` | ✓std | TV | **MACv2-SP prescribed aerosol parameterization** (Stevens et al. 2017). Nine spatial plumes anchored to anthropogenic source regions; temporal scaling 1850–2014 via CMIP6 per-country SO2/NH3 emission inventory. Replaces CMIP5 MAC-v1 (Kinne 2006) — DEVIATION CORRECTED. WDC-Climate CMIP6 archive: "aerosol: none, prescribed MACv2-SP." | Mauritsen et al. 2019; Stevens et al. 2017 | Mauritsen 2019 verbatim: "The old climatology of anthropogenic aerosol has been replaced with the newly developed MACv2-SP parameterization (Fiedler et al., 2017; Stevens et al., 2017), which has been designed for the usage in the framework of CMIP6." MACv2-SP = Eyring 2016 sanctioned prescribed path. NOT CEDS+BB4CMIP6 interactive. |
| SI | Aerosol — sulphate indirect | Model-dependent / MACv2-SP | `MPI-M-MACv2-SP-1-0` | ✓std | TV | **MACv2-SP prescribed Twomey effect** (first indirect) — included in the MACv2-SP parameterization. Prescribed cloud albedo effect as a function of AOD. | Stevens et al. 2017 | Stevens 2017: "MACv2-SP: a parameterization of anthropogenic aerosol optical properties and an associated Twomey effect for use in CMIP6." First indirect (cloud albedo) prescribed. No second indirect (lifetime/precipitation) through MACv2-SP. Natural aerosol background from Kinne et al. 2013 climatology. |
| BC | Black carbon | CEDS + BB4CMIP6 / MACv2-SP | `MPI-M-MACv2-SP-1-0` | ✓std | TV | Included in MACv2-SP nine-plume parameterization (BC-containing aerosol types embedded in plumes) | Mauritsen et al. 2019 | |
| OC | Organic carbon | CEDS + BB4CMIP6 / MACv2-SP | `MPI-M-MACv2-SP-1-0` | ✓std | TV | As BC — included in MACv2-SP plumes | Mauritsen et al. 2019 | |
| MD | Mineral dust | Model-dependent | — | FXc | FXc | **Kinne et al. 2013 natural aerosol background climatology** (fixed). MACv2-SP handles anthropogenic aerosol only; natural aerosols (including dust) remain as Kinne 2013 prescribed background. | Mauritsen et al. 2019 | Mauritsen 2019: "natural aerosol remains a prescribed Kinne et al. 2013 climatology." Fixed background; NOT time-varying. |
| SS | Sea salt | Model-dependent | — | FXc | FXc | As MD — Kinne et al. 2013 natural aerosol background. | Mauritsen et al. 2019 | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ✓std | TV | **LUH2v2h (dynamic transitions)**. MPI-ESM1-2-LR uses dynamic land-use transitions from LUH2v2h (JSBACH3.2 computes vegetation from a sequence of land-use transitions). | Mauritsen et al. 2019 | Mauritsen 2019: "in MPI-ESM1.2-LR land use is computed from a sequence of land use transitions." CMIP6 version = LUH2v2h (UofMD-landState-2-1-h). LR vs HR differ in implementation (dynamic transitions vs maps), NOT in source dataset. |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | TV | Matthes 2017 SOLARIS-HEPPA-3-2 expected; not confirmed by Stage 8 | — | OPEN |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | Not confirmed by Stage 8. CMIP5 MPI-ESM-LR SO/VL were unresolved. | — | OPEN |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | |

### Deviations from Eyring 2016 standard protocol
- **None confirmed** on resolved forcings: O=✓std (CCMI), SD/BC/OC/SI=✓std (MACv2-SP prescribed path). MACv2-SP uses CMIP6 emission inventory as temporal scaling index.
- **CMIP5 correction**: SD/BC/OC upgraded from MAC-v1 (✗dev) to MACv2-SP (✓std prescribed path). Major improvement.
- **MD/SS = FXc**: Natural aerosol from Kinne 2013 fixed climatology — not time-varying. May be a nuanced deviation from fully interactive natural aerosols, but consistent with the prescribed-aerosol path.

### Notes
- MACv2-SP uses CMIP6 emission totals (ultimately from CEDS) only as a temporal scaling index for nine prescribed aerosol plumes — this is NOT the interactive CEDS+BB4CMIP6 path. The anthropogenic aerosol radiative effects are prescribed (direct + first indirect), not simulated from microphysics.
- ECHAM6.3 as of version 6.3.03 introduced MACv2-SP; all subsequent CMIP6 production runs use it.
- **CMIP5 context (Giorgetta et al. 2013 JAMES doi:10.1002/jame.20038; Schmidt et al. 2013 JAMES doi:10.1002/jame.20014; Stevens et al. 2013 JAMES doi:10.1002/jame.20015; Manzini et al. 2006 JCL)**: These papers cover MPI-ESM for CMIP5 only. CMIP5 solar = SPARC/SOLARIS dataset (predecessor to Matthes 2017); CMIP5 volcanic = extended Stenchikov et al. 1998 PADS dataset (NOT IACETH SAGE3λ). None of these CMIP5-era papers can confirm or deny the CMIP6 Matthes 2017 (SO) or IACETH SAGE3λ (VL) datasets. G, SO, and VL remain unconfirmed for CMIP6.
- **Stage 9 full text review (Mauritsen et al. 2019 JAMES; 2026-06-27)**: Complete paper re-read confirms volcanic stratospheric aerosols ARE prescribed in historical simulations (section 8.2, lines noting "zero volcanic stratospheric aerosols" in piControl vs. "volcanoes are activated" in historical), but the specific dataset name (IACETH SAGE3λ) is NOT stated anywhere in the paper. Meinshausen 2017 (G) and Matthes 2017 (SO) are also not cited. N-deposition confirmed: "Gridded coupled chemistry model intercomparison N-deposition fields of version 1.0 are used as provided via the CMIP6 input database" (section 5.2) — this corresponds to NCAR-CCMI-2-0 (input4MIPs). G/SO/VL remain ?.

## ESM-specific forcing inputs

| ESM input | Applied? | Verdict | Notes |
|-----------|----------|---------|-------|
| N-deposition (NHx/NOy) | Yes | ✓std | HAMOCC6 ocean BGC: "Gridded coupled chemistry model intercomparison N-deposition fields of version 1.0 are used as provided via the CMIP6 input database" (Mauritsen et al. 2019 section 5.2) = NCAR-CCMI-2-0 (input4MIPs). Also applied to JSBACH3.2 land C-N-P. |
| CO2-mode | ? | ? | Concentration-driven expected for historical; not confirmed |
| Fe deposition (HAMOCC6) | Possible | ? | HAMOCC6 ocean BGC may need Fe input; not confirmed |

## Open questions
1. **G**: Meinshausen 2017 / UoM-CMIP-1-2-0 — not confirmed
2. **SO**: Matthes 2017 / SOLARIS-HEPPA-3-2 — not confirmed
3. **VL**: IACETH-SAGE3lambda-3-0-0 — not confirmed (CMIP5 MPI-ESM unresolved)
4. **LU version**: Hurtt 2020 / UofMD-landState-2-1-h pinned? LUH2v2h family confirmed but exact CMIP6 version string not pinned.
5. **N-dep, CO2-mode, Fe**: ESM inputs unconfirmed

## Provenance
- Stage 8 workflow run ID: wf_f9ea73ac-462 (2026-06-23); 29 agents; 12/14 confirmed, 2 killed
- Key sources: Mauritsen et al. 2019 (doi:10.1029/2018MS001400); Stevens et al. 2017 (doi:10.5194/gmd-10-433-2017); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021); WDC-Climate CMIP6 archive
