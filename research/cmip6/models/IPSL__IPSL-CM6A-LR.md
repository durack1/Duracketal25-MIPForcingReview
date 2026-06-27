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
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ✓std | TV | **Confirmed**: Boucher et al. 2020 §5.2: "The historical simulations have prescribed CO2 atmospheric mixing ratio as per observations (Meinshausen et al., 2017)." | Boucher et al. 2020 §5.2 | Meinshausen 2017 GHG concentrations confirmed for historical |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✓std | TV | **Standard CMIP6 CCMI prescribed ozone** (Checa-Garcia 2018b = UReading-CCMI-1-0). Implemented with tropopause-stretching (profiles stretched in a thin region around the tropopause so the ozone-climatology tropopause matches the model dynamical tropopause). This is a **genuine correction of the CMIP5 IPSL-CM5A offline INCA+REPROBUS deviation**. | Keeble et al. 2021; Lurton et al. 2020; Boucher et al. 2020 | Lurton 2020: IPSL-CM6A-LR "is run without interactive chemistry; thus tropospheric and stratospheric aerosols as well as ozone have to be prescribed." Boucher 2020: "Stratospheric and tropospheric ozone is prescribed using the CMIP6 dataset but implemented so that profiles are stretched in a thin region (few kilometres only) around the tropopause, ensuring that the tropopause of the ozone climatology and that of the model match." Keeble 2021 Table 1 lists IPSL-CM6A-LR among prescribed-ozone models. |
| SD | Aerosol — sulphate direct | LMDZORINCA offline climatology (CMIP6 emissions) | — | ~ | TV | **Centre-specific offline INCA climatology**: tropospheric aerosols (sulfate, nitrate, OC, BC, dust, sea salt) prescribed as 3-D climatologies computed offline in a previous LMDZORINCA simulation using CMIP6 emissions (CEDS+BB4CMIP6). Not MACv2-SP. Monthly climatologies varying annually; daily interpolation applied (Lurton et al. 2020). | Hourdin et al. 2020 §3.5 | LMDZORINCA driven by CMIP6 emissions — not standard MACv2-SP; centre-specific approach repeated from CMIP5 lineage but now with CMIP6 emissions |
| SI | Aerosol — sulphate indirect | LMDZORINCA-derived aerosol concentrations → CDNC | — | ~ | TV | **First indirect effect implemented** via Boucher & Lohmann (1995) CDNC empirical law applied to accumulation-mode soluble aerosols from prescribed LMDZORINCA climatologies. Parameters adjusted during tuning. Ice cloud properties independent of aerosol. | Hourdin et al. 2020 §3.5 | Centre-specific via prescribed aerosol climatologies, not MACv2-SP indirect |
| BC | Black carbon | LMDZORINCA offline climatology (CMIP6 emissions) | — | ~ | TV | Same LMDZORINCA offline climatology approach as SD. BC prescribed from offline simulation driven by CMIP6 emissions. | Hourdin et al. 2020 §3.5 | Same as SD |
| OC | Organic carbon | LMDZORINCA offline climatology (CMIP6 emissions) | — | ~ | TV | Same LMDZORINCA offline climatology approach as SD. OC prescribed from offline simulation driven by CMIP6 emissions. | Hourdin et al. 2020 §3.5 | Same as SD |
| MD | Mineral dust | LMDZORINCA offline climatology (interactive dust emissions) | — | ~ | TV | **Dust emissions generated interactively** in LMDZORINCA; prescribed as monthly climatologies in LMDZ6A historical runs. Not Kinne 2013 natural background. | Hourdin et al. 2020 §3.5 | Interactive dust + sea salt in LMDZORINCA, then prescribed as climatology |
| SS | Sea salt | LMDZORINCA offline climatology (interactive sea salt emissions) | — | ~ | TV | **Sea salt emissions generated interactively** in LMDZORINCA (along with DMS); prescribed as monthly climatologies in LMDZ6A. Not Kinne 2013 natural background. | Hourdin et al. 2020 §3.5 | Same interactive approach as dust |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ✓std | TV | **Confirmed**: Boucher et al. 2020 §2.4: "The annual evolution of the PFT maps (including a wood harvest product) is derived from the LUHv2 database (Lurton et al., 2020)." LUHv2 = LUH2 Hurtt et al. 2020. | Boucher et al. 2020 §2.4 | LUH2 v2.1h confirmed via ORCHIDEE PFT maps |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | TV | Not confirmed. CMIP5 IPSL-CM5A used Wang2005 (✓std) — CMIP6 likely continued with Matthes2017. | — | OPEN |
| VL | Volcanic aerosols | Thomason et al. 2018 IACETH CMIP6 stratospheric AOD | `IACETH-SAGE3lambda-3-0-0` | ✓std | TV | **Confirmed**: Hourdin 2020 §3.5 explicitly states "Stratospheric aerosols were provided by CMIP6 as a two-dimensional (latitude-height) climatology of the aerosol extinction coefficient, single-scattering albedo, and asymmetry parameter (Thomason et al., 2018)." | Hourdin et al. 2020 §3.5 | Thomason 2018 = IACETH CMIP6 standard stratospheric aerosol dataset |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | |

### ESM-specific forcing inputs (ORCHIDEE v2.0 active C)

| ESM input | Applied? | Verdict | Notes |
|-----------|----------|---------|-------|
| N-deposition (NHx/NOy) | Expected yes | ? | ORCHIDEE v2.0 active C — NCAR-CCMI-2-0 expected; not confirmed |
| CO2-mode | ✓std | FXc/TV | **Confirmed concentration-driven**: Boucher et al. 2020 §5.2: "The historical simulations have prescribed CO2 atmospheric mixing ratio as per observations." ORCHIDEE and PISCES respond to prescribed CO2 concentration. |
| Fe deposition (PISCES) | ? | ? | PISCES ocean BGC may need Fe input |

### Deviations from Eyring 2016 standard protocol
- **O = ✓std**: CMIP5 deviation (offline INCA+REPROBUS) was CORRECTED. IPSL-CM6A-LR now uses standard CCMI prescribed ozone.
- **SD/BC/OC = ~**: CMIP5 deviation (LMDZ-INCA offline 11yr-smoothed) was updated in CMIP6 to use CMIP6 emissions as input to LMDZORINCA, but aerosols are still prescribed as offline INCA climatologies — not MACv2-SP. Centre-specific approach maintained.
- **MD/SS = ~**: Dust and sea salt generated interactively in LMDZORINCA then prescribed as climatologies.
- **VL = ✓std**: Thomason 2018 IACETH CMIP6 stratospheric AOD confirmed (Hourdin 2020 §3.5).

### Notes on CMIP5 lineage
- Key CMIP6 correction: Ozone changed from custom offline INCA+REPROBUS product (✗dev in CMIP5) to standard CCMI prescribed (✓std). This is the most significant forcing change.
- Aerosol treatment: LMDZ-INCA offline approach retained in CMIP6, now using CMIP6 emissions (CEDS+BB4CMIP6) as input to LMDZORINCA offline, but still prescribing the resulting climatologies rather than using standard MACv2-SP or online interactive. Verdict ~ for all aerosol components.

## Open questions
1. **SO**: Matthes 2017 standard expected but not confirmed — Boucher 2020 only mentions "solar forcings" generically (§2.7); Lurton et al. 2020 (not available) may confirm
2. **N-dep**: NCAR-CCMI-2-0 expected for ORCHIDEE active C but not confirmed in Boucher 2020 or Hourdin 2020

## Provenance
- Stage 7 workflow run ID: wf_e2b2d348-b4e (2026-06-23)
- Key sources: Lurton et al. 2020 (doi:10.1029/2019MS001940); Boucher et al. 2020 (doi:10.1029/2019MS002010); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)
- Second-pass update (2026-06-27): Read Hourdin et al. 2020 *JAMES* doi:10.1029/2019MS001892 (LMDZ6A atmospheric component paper). Key findings from §3.5 (Representation of Aerosols and Aerosol-Cloud Interactions): (1) Tropospheric aerosols (sulfate, nitrate, OC, BC, dust, sea salt) are prescribed as offline LMDZORINCA 3-D climatologies driven by CMIP6 emissions — centre-specific (~), not MACv2-SP. (2) Dust and sea salt emissions generated interactively in LMDZORINCA then prescribed (~). (3) First indirect effect via Boucher & Lohmann 1995 CDNC from prescribed aerosol climatologies (~). (4) Stratospheric aerosols use Thomason et al. 2018 IACETH CMIP6 dataset explicitly — VL confirmed ✓std. Szopa et al. 2012 *Clim Dyn* is CMIP5-only INCA+REPROBUS lineage paper; no new CMIP6 information.
- Third-pass update (2026-06-27): Read Boucher et al. 2020 *JAMES* doi:10.1029/2019MS002010 (primary IPSL-CM6A-LR system description paper). Key new confirmations: (1) G=✓std confirmed — §5.2: "The historical simulations have prescribed CO2 atmospheric mixing ratio as per observations (Meinshausen et al., 2017)." (2) LU=✓std confirmed — §2.4: "The annual evolution of the PFT maps (including a wood harvest product) is derived from the LUHv2 database (Lurton et al., 2020)." LUHv2 = Hurtt et al. 2020 LUH2. (3) CO2-mode=concentration-driven confirmed — ORCHIDEE and PISCES respond to prescribed CO2 mixing ratio from Meinshausen 2017. (4) SO and N-dep remain unconfirmed — paper defers forcing implementation to Lurton et al. 2020 (not available); solar mentioned only generically as "solar forcings" in §2.7.
