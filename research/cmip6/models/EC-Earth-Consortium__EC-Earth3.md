<!-- CMIP6 forcing record — EC-Earth3 (EC-Earth-Consortium). Stage 9 workflow: wf_1fb84fb8-c26 (2026-06-23) -->

# EC-Earth3 — EC-Earth-Consortium (Pan-European)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** EC-EARTH (O=✓std Cionni2011; SD/BC/OC=✗dev offline ECMWF/MACC aerosol climatology; LU=✗dev excluded; SO/VL=unresolved)
- **Model family / lineage:** IFS cy36r4 atmosphere (T255L91, ~0.7°) + HTESSEL land (static BGC, no active C) + NEMO3.6 (ORCA1) ocean + LIM3 sea ice. AOGCM.
- **Atmosphere / ocean components:** IFS cy36r4 / NEMO3.6 (ORCA1) + LIM3
- **Primary documentation paper(s):** Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022 [doscher_ecearth3_2022]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ✓std | TV | **Meinshausen et al. 2017/2020** (CO2, N2O, CFC-12, CFC-11 equivalents). Confirmed via AerChem cross-reference (same IFS atmosphere). | van Noije et al. 2021; Döscher et al. 2022 | van Noije 2021: "the CMIP6 forcings prescribed in the modified IFS model are the solar forcing (Matthes et al., 2017), well-mixed greenhouse gas concentrations (CO2, N2O, CFC-12, and CFC-11 equivalents; Meinshausen et al., 2017, 2020), and stratospheric aerosol radiative properties" — and "IFS components are identical in both configurations." |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✓std | TV | **Standard CMIP6 CCMI prescribed ozone**. Inferred from AerChem configuration where "stratospheric ozone is nudged toward the standard CMIP6 CCMI zonal-mean fields (Checa-Garcia et al. 2018)" — the target is the EC-Earth3 base prescribed fields. | Döscher et al. 2022 | NOTE: the base-config prescribed ozone source_id was not explicitly quoted in a single direct statement; inference from AerChem stratospheric nudging target. EC-Earth3 does NOT have interactive chemistry. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | `MPI-M-MACv2-SP-1-0` | ✓std | TV | **Offline TM5 pre-industrial monthly climatology (1850 baseline) + MACv2-SP anthropogenic contribution** (Stevens et al. 2017). The time-varying component follows MACv2-SP. Corrects CMIP5 EC-EARTH offline-MACC deviation. | Döscher et al. 2022 | Döscher 2022 verbatim: "Tropospheric aerosols are either simulated interactively in TM5 (in the EC-Earth3-AerChem configuration) or prescribed as a pre-industrial climatology plus an anthropogenic contribution (all other configurations)... The anthropogenic contribution is specified following the simple plume approach of MACv2-SP (Stevens et al., 2017)." PI baseline = "monthly climatology based on TM5... obtained from an offline TM5 simulation driven by ERA-Interim meteorology for the years 1981-1985 using CMIP6 anthropogenic emissions for the year 1850." MACv2-SP = Eyring 2016 sanctioned prescribed-aerosol path. |
| SI | Aerosol — sulphate indirect | MACv2-SP | `MPI-M-MACv2-SP-1-0` | ✓std | TV | **MACv2-SP Twomey effect** (first indirect / cloud albedo) — included in MACv2-SP parameterization. | Stevens et al. 2017 | As SD — MACv2-SP includes prescribed first indirect effect. |
| BC | Black carbon | CEDS + BB4CMIP6 / MACv2-SP | `MPI-M-MACv2-SP-1-0` | ✓std | TV | Included in MACv2-SP anthropogenic plumes. | Döscher et al. 2022 | |
| OC | Organic carbon | CEDS + BB4CMIP6 / MACv2-SP | `MPI-M-MACv2-SP-1-0` | ✓std | TV | As BC. | Döscher et al. 2022 | |
| MD | Mineral dust | — | — | FXc | FXc | **Offline TM5 PI (1850) monthly climatology** — natural aerosol background, fixed. MACv2-SP scope = anthropogenic only; MD/SS are in the PI background. | Döscher et al. 2022 | PI baseline from TM5 offline simulation using 1850 CMIP6 anthropogenic emissions (all 1850 = near-PI natural). Time-variation in natural aerosols not simulated. |
| SS | Sea salt | — | — | FXc | FXc | As MD — TM5 PI monthly climatology (fixed 1850 natural background). | Döscher et al. 2022 | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ✓std | TV | **LUH2 (Hurtt et al. 2020) applied indirectly**: HTESSEL cannot directly ingest LUH2 data, so time-varying vegetation cover and type precomputed offline from EC-Earth3-Veg dynamic-vegetation runs (which ingest LUH2 directly) and prescribed into EC-Earth3. Corrects CMIP5 EC-EARTH LU exclusion (✗dev). | Döscher et al. 2022 | Döscher 2022 verbatim: "The land use forcing dataset (LUH2) from CMIP6 (Hurtt et al., 2020) cannot be used directly as input to IFS... This happens automatically in the EC-Earth3-Veg configuration... but for all other configurations the required vegetation cover and type need to be precomputed." Year-to-year 1850-2014 variation. |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ✓std | TV | **Matthes et al. 2017** (SOLARIS-HEPPA standard). Confirmed via AerChem cross-reference. | van Noije et al. 2021; Döscher et al. 2022 | van Noije 2021: "solar forcing (Matthes et al., 2017)" listed among CMIP6 forcings for the IFS; identical between EC-Earth3 and AerChem. |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ✓std | TV | **IACETH-SAGE3lambda-3-0-0 v3.0.0 confirmed**. Döscher 2022 Table 13: "Stratospheric aerosols \| 3.0.0 \| Thomason et al. (2018)" — explicit version and reference naming the IACETH CMIP6 dataset. | Döscher et al. 2022 Table 13 | Doscher 2022 Table 13 verbatim: "Stratospheric aerosols \| 3.0.0 \| Thomason et al. (2018)." Thomason 2018 = IACETH-SAGE3lambda-3-0-0 v3.0.0. Eighth-pass confirmation 2026-06-28. |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | |

### Deviations from Eyring 2016 standard protocol
- **SD/BC/OC = ✓std (CMIP5 deviation CORRECTED)**: CMIP5 EC-EARTH used offline ECMWF/MACC aerosol climatology (✗dev). CMIP6 EC-Earth3 adopts MACv2-SP prescribed path (✓std).
- **LU = ✓std (CMIP5 deviation CORRECTED)**: CMIP5 EC-EARTH excluded LU (✗dev). CMIP6 EC-Earth3 includes LUH2 indirectly.
- **MD/SS = FXc**: Natural aerosol from TM5 PI (1850) climatology — fixed background. Not time-varying in EC-Earth3 base.
- **VL = ✓std**: Döscher 2022 Table 13 explicitly names "Stratospheric aerosols \| 3.0.0 \| Thomason et al. (2018)" — IACETH-SAGE3lambda-3-0-0 v3.0.0 confirmed (eighth-pass 2026-06-28).

## Provenance
- Stage 9 workflow run ID: wf_1fb84fb8-c26 (2026-06-23); 27 agents; 13/14 confirmed, 1 killed
- Key sources: Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022); van Noije et al. 2021 (doi:10.5194/gmd-14-5637-2021); Stevens et al. 2017 (doi:10.5194/gmd-10-433-2017)
- Eighth-pass update (2026-06-28): VL confirmed ✓std from Döscher 2022 Table 13 verbatim: "Stratospheric aerosols \| 3.0.0 \| Thomason et al. (2018)" — IACETH-SAGE3lambda-3-0-0 v3.0.0. All 12 forcing cells now resolved.
