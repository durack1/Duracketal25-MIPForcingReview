<!-- CMIP6 forcing record — E3SM-2-0 (E3SM-Project). Populated 2026-06-22 from Stage 4 workflow wf_29f9e93f-7df. -->

# E3SM-2-0 — E3SM Project (DOE), USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** As E3SM-1-x (CESM1 fork), major update
- **Model family / lineage:** Major update from E3SM-1-x. EAMv2 atmosphere (substantially revised physics) + ELMv2 land + MPAS-O v2 ocean. Ozone module updated from O3v1 → O3v2.
- **Atmosphere / ocean components:** EAMv2 / MPAS-O v2 + CICE5
- **Primary documentation paper(s):** Golaz et al. 2022, *JAMES* doi:10.1029/2022MS003156 [golaz_e3smv2_2022]; Brown et al. 2024, *GMD* doi:10.5194/gmd-17-5087-2024 [brown_e3smv2_2024]; Tang et al. 2021, *GMD* doi:10.5194/gmd-14-1219-2021 [tang_e3sm_ozone_2021]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ✓std | TV | Same input4MIPs processing as E3SM-1-x. Golaz 2022: "same input data processing for GHGs and aerosol emissions" as v1. | Golaz et al. 2022 | golaz_e3smv2_2022 | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ~ | TV | **HYBRID (O3v2 module)**: Troposphere = passive tracer decaying to 30 ppb below 1 km (48-hour e-folding) — does NOT prescribe CCMI tropospheric ozone (unlike E3SM v1 O3v1). Stratosphere = interactive Linoz v2 linearized chemistry. Overall: diverges from both prescribed-CCMI and from E3SM-1-x approach. Verdict: ~ (✗dev toward passive trop, not clean prescribed). | Tang et al. 2021; Brown et al. 2024 | tang_e3sm_ozone_2021; brown_e3smv2_2024 | Tang 2021: "O3v2 uses a tropospheric tracer that is passive except in the lowest four layers (below 1 km altitude) where it is removed with a 48 h e-folding decay to 30 ppb." Brown 2024: explicitly contrasts this with CESM2-WACCM6 fully interactive chemistry. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | CEDS-2017-05-18 + BB4CMIP6. Golaz 2022: "same input data processing for GHGs and aerosol emissions" as v1 (medium confidence on file-level identity; v2 vs v1 byte-identical file claim refuted). | Golaz et al. 2022 | golaz_e3smv2_2022 | |
| SI | Aerosol — sulphate indirect | — | — | ~ | TV | Interactive via MAM4 (EAMv2) | | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD | Golaz et al. 2022 | golaz_e3smv2_2022 | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD | Golaz et al. 2022 | golaz_e3smv2_2022 | |
| MD | Mineral dust | — | — | ~ | TV | Interactive in MAM4 | | | |
| SS | Sea salt | — | — | ~ | TV | Interactive in MAM4 | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ✓std | TV | Same boundary files as E3SMv1. Golaz 2022 §4: "All simulations were configured to adhere to the CMIP6 specifications as closely as possible and rely on the same boundary files as E3SMv1 (Golaz et al., 2019)." LUH2 v2.1h confirmed for E3SMv1 (Golaz 2019 App. B.6). | Golaz et al. 2022 §4 | golaz_e3smv2_2022 | |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA v3.2 | `SOLARIS-HEPPA-3-2` | ✓std | TV | Same boundary files as E3SMv1. SOLARIS-HEPPA v3.2 confirmed for E3SMv1 (Golaz 2019 App. B.8). | Golaz et al. 2022 §4 | golaz_e3smv2_2022 | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3 | `IACETH-SAGE3lambda-3-0-0` | ✓std | TV | Same boundary files as E3SMv1. IACETH SAGE3λ v3 confirmed for E3SMv1 (Golaz 2019 App. B.4); spectral interpolation to model radiation bands is standard practice. | Golaz et al. 2022 §4 | golaz_e3smv2_2022 | |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### ESM-specific forcing inputs (ELMv2 active biogeochemistry)

| ESM input | Applied? | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | ? | NCAR-CCMI-2-0 expected given CESM1 heritage | `NCAR-CCMI-2-0` | ELMv2 active BGC; N-dep source unconfirmed |
| CO2: conc.- or emission-driven | ~ | Meinshausen 2017 conc. (historical) | `UoM-CMIP-1-2-0` | Standard expected |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O (trop) | Tropospheric ozone | Passive tracer (O3v2) — no prescribed dataset | Replaces CCMI trop-O3 prescription | O3v2 abandons prescribed CCMI trop O3; instead uses passive tracer with surface decay. Different from E3SM-1-x O3v1. |
| O (strat) | Stratospheric ozone | Linoz v2 interactive | Replaces prescribed CCMI strat-O3 | Same as E3SM-1-x |

## Key difference from E3SM-1-x

| Aspect | E3SM-1-0/1-1/1-1-ECA (O3v1) | E3SM-2-0 (O3v2) |
|--------|-------------------------------|-----------------|
| Tropospheric O3 | Prescribed from CCMI input4MIPs (Hegglin 2016) | Passive tracer → 30 ppb below 1 km |
| Stratospheric O3 | Interactive Linoz v2 | Interactive Linoz v2 (same) |
| Overall verdict | ~ (trop std + strat interactive) | ~ (trop passive + strat interactive; further from std) |

## Open questions
1. N-dep for ELMv2 BGC — source unconfirmed

*Resolved 2026-06-27 from Golaz et al. 2022 §4:*
- *LU: ✓std confirmed — same boundary files as E3SMv1 (= LUH2 v2.1h Hurtt 2017)*
- *SO: ✓std confirmed — same boundary files as E3SMv1 (= SOLARIS-HEPPA v3.2)*
- *VL: ✓std confirmed — same boundary files as E3SMv1 (= IACETH SAGE3λ v3); spectral interpolation is standard practice*

## Provenance
- Stage 4 workflow run ID: wf_29f9e93f-7df (8 confirmed, 6 killed of 14 verified)
- Key primary sources: Golaz et al. 2022 (*JAMES* doi:10.1029/2022MS003156); Brown et al. 2024 (*GMD* doi:10.5194/gmd-17-5087-2024); Tang et al. 2021 (*GMD* doi:10.5194/gmd-14-1219-2021)
