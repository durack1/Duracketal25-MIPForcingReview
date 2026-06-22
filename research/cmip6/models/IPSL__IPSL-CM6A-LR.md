<!-- CMIP6 forcing record — IPSL-CM6A-LR (IPSL). Stage 7 workflow: wf_e2b2d348-b4e (2026-06-23) -->

# IPSL-CM6A-LR — Institut Pierre-Simon Laplace, France

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** IPSL-CM5A-LR (O=✗dev offline INCA+REPROBUS; SD/BC/OC=✗dev LMDZ-INCA offline 11yr-smoothed; SO=✓std Wang2005; VL=✓std Sato-updated)
- **Model family / lineage:** LMDZ6A atmosphere (2.5°×1.27°, 79 levels, quasi-regular grid) + ORCHIDEE v2.0 land (active C) + NEMO3.6 (ORCA2) ocean + LIM3 sea ice. ESM with active carbon cycle. NO interactive atmospheric chemistry.
- **Atmosphere / ocean components:** LMDZ6A / NEMO3.6 (ORCA2) + LIM3
- **Primary documentation paper(s):** Boucher et al. 2020, *JAMES* doi:10.1029/2019MS002010 [boucher_ipsl_2020]; Lurton et al. 2020, *JAMES* doi:10.1029/2019MS001940 [lurton_ipsl_forcing_2020]
- **Forcing-specific reference(s):** Keeble et al. 2021, *ACP* 21:5015 [keeble_ozone_2021]

## Forcing datasets used (historical 1850–2014)

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | Expected Meinshausen 2017; not confirmed from Stage 7 | — | OPEN |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✓std | TV | **Standard CMIP6 CCMI prescribed ozone** (Checa-Garcia 2018b = UReading-CCMI-1-0). Implemented with tropopause-stretching (profiles stretched in a thin region around the tropopause so the ozone-climatology tropopause matches the model dynamical tropopause). This is a **genuine correction of the CMIP5 IPSL-CM5A offline INCA+REPROBUS deviation**. | Keeble et al. 2021; Lurton et al. 2020; Boucher et al. 2020 | Lurton 2020: IPSL-CM6A-LR "is run without interactive chemistry; thus tropospheric and stratospheric aerosols as well as ozone have to be prescribed." Boucher 2020: "Stratospheric and tropospheric ozone is prescribed using the CMIP6 dataset but implemented so that profiles are stretched in a thin region (few kilometres only) around the tropopause, ensuring that the tropopause of the ozone climatology and that of the model match." Keeble 2021 Table 1 lists IPSL-CM6A-LR among prescribed-ozone models. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | — | ? | ? | Not confirmed from Stage 7. Lurton 2020 states aerosols "have to be prescribed" but the specific dataset is unresolved. CMIP5 LMDZ-INCA offline aerosol correction not confirmed. | — | OPEN — see caveats below |
| SI | Aerosol — sulphate indirect | — | — | ? | ? | Not confirmed | — | OPEN |
| BC | Black carbon | CEDS + BB4CMIP6 / MACv2-SP | — | ? | ? | Not confirmed | — | OPEN |
| OC | Organic carbon | CEDS + BB4CMIP6 / MACv2-SP | — | ? | ? | Not confirmed | — | OPEN |
| MD | Mineral dust | — | — | ? | ? | Not confirmed | — | OPEN |
| SS | Sea salt | — | — | ? | ? | Not confirmed | — | OPEN |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Not confirmed — ORCHIDEE v2.0 active C cycle likely needs LUH2 v2.1h | — | OPEN |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | TV | Not confirmed. CMIP5 IPSL-CM5A used Wang2005 (✓std) — CMIP6 likely continued with Matthes2017. | — | OPEN |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | Not confirmed. CMIP5 used Sato-updated (✓std). | — | OPEN |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | |

### ESM-specific forcing inputs (ORCHIDEE v2.0 active C)

| ESM input | Applied? | Verdict | Notes |
|-----------|----------|---------|-------|
| N-deposition (NHx/NOy) | Expected yes | ? | ORCHIDEE v2.0 active C — NCAR-CCMI-2-0 expected; not confirmed |
| CO2-mode | ? | ? | Concentration-driven expected for historical; not confirmed |
| Fe deposition (PISCES) | ? | ? | PISCES ocean BGC may need Fe input |

### Deviations from Eyring 2016 standard protocol
- **O = ✓std**: CMIP5 deviation (offline INCA+REPROBUS) was CORRECTED. IPSL-CM6A-LR now uses standard CCMI prescribed ozone.
- **SD/BC/OC**: CMIP5 deviation (LMDZ-INCA offline 11yr-smoothed) — not yet confirmed whether CMIP6 corrected this.

### Notes on CMIP5 lineage
- Key CMIP6 correction: Ozone changed from custom offline INCA+REPROBUS product (✗dev in CMIP5) to standard CCMI prescribed (✓std). This is the most significant forcing change.
- Aerosol treatment status unknown — LMDZ-INCA offline was a systematic CMIP5 deviation for both CNRM and IPSL; IPSL aerosols remain unconfirmed for CMIP6.

## Open questions
1. **SD/BC/OC**: What aerosol dataset does LMDZ6A use? MACv2-SP? Custom offline INCA? CEDS+BB4CMIP6 interactive? Lurton 2020 says prescribed but doesn't name the dataset.
2. **G/LU/SO/VL**: All standard expected but not confirmed
3. **N-dep, CO2-mode**: ESM inputs for ORCHIDEE

## Provenance
- Stage 7 workflow run ID: wf_e2b2d348-b4e (2026-06-23)
- Key sources: Lurton et al. 2020 (doi:10.1029/2019MS001940); Boucher et al. 2020 (doi:10.1029/2019MS002010); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)
