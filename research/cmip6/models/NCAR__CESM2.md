<!-- CMIP6 forcing record — CESM2 (NCAR). Populated 2026-06-22 from Stage 3 workflow wf_5c9d74cf-149. -->

# CESM2 — National Center for Atmospheric Research, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CCSM4 / CESM1-BGC / CESM1-CAM5
- **Model family / lineage:** CAM6 atmosphere + CLM5 land + MOM6/POP2 ocean + CICE5. Standard ~1° (nominal) configuration.
- **Atmosphere / ocean components:** CAM6 (CLM5) / POP2 + MOM6 + CICE5
- **Primary documentation paper(s):** Danabasoglu et al. 2020, *JAMES* doi:10.1029/2019MS001916 [danabasoglu_cesm2_2020]
- **Forcing-specific reference(s):** Keeble et al. 2021, *ACP* 21, 5015 doi:10.5194/acp-21-5015-2021; Emmons et al. 2020, *JAMES* doi:10.1029/2019MS001882

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ~ | TV | Meinshausen 2017 GHG concentrations (medium confidence — not explicitly confirmed by workflow) | Meinshausen et al. 2017 | meinshausen_shared_2017 | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✗dev | TV | WACCM6-derived center-specific product — NOT standard CCMI. Zonal 5-day means from prior CESM2-WACCM6 runs; also supplies tropospheric oxidants (O3/OH/NO3/HO2, 3-D monthly means). File: `ozone_strataero_WACCM_L70_zm5day_18500101-20150103_CMIP6ensAvg_c180923.nc` (WACCM, 70 levels, CMIP6 ensemble average) | Keeble et al. 2021 ACP 21,5015; Danabasoglu et al. 2020 | keeble_2021_acp; danabasoglu_cesm2_2020 | Same center-specific deviation pattern as GISS-E2.1-NINT. Keeble 2021 verbatim: "Most models prescribing stratospheric ozone use the CMIP6 dataset (Checa-Garcia, 2018b), except CESM2, CESM2-FV2, and NorESM2, which prescribe ozone values from simulations performed with the CESM2-WACCM model." |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | CEDS (Hoesly et al. 2018) anthropogenic + BB4CMIP6 (van Marle et al. 2017) biomass-burning emissions, interactive through MAM3 aerosol scheme. Upgrade from CMIP5 ACCMIP Lamarque 2010. | Emmons et al. 2020; Danabasoglu et al. 2020 | emmons_2020_james; danabasoglu_cesm2_2020 | |
| SI | Aerosol — sulphate indirect | — | — | ~ | TV | Interactive indirect effect via MAM3 (three-mode modal aerosol model) | Danabasoglu et al. 2020 | danabasoglu_cesm2_2020 | CAM6 includes aerosol indirect effects via MAM3 |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD above — same CEDS + BB4CMIP6 emission inventories | Emmons et al. 2020 | emmons_2020_james | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD above | Emmons et al. 2020 | emmons_2020_james | |
| MD | Mineral dust | — | — | ~ | TV | Interactive in MAM3 (computed from surface wind stress) | Danabasoglu et al. 2020 | danabasoglu_cesm2_2020 | |
| SS | Sea salt | — | — | ~ | TV | Interactive in MAM3 | Danabasoglu et al. 2020 | danabasoglu_cesm2_2020 | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ~ | TV | Hurtt 2020 LUH2 v2.1h via CLM5 (medium confidence — not explicitly confirmed) | | | |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ~ | TV | SOLARIS-HEPPA-3-2 (medium confidence — not explicitly confirmed) | | | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ✗dev | TV | Same WACCM6-derived file as ozone (bundled): `ozone_strataero_WACCM_L70_zm5day_18500101-20150103_CMIP6ensAvg_c180923.nc`. Stratospheric aerosol from prior CESM2-WACCM6 runs — NOT IACETH SAGE3λ. Zonal 5-day means. | Keeble et al. 2021; Danabasoglu et al. 2020; Gettelman et al. 2019 | keeble_2021_acp; danabasoglu_cesm2_2020; gettelman_waccm6_2019 | Single file bundles both O and VL deviation. Danabasoglu 2020: CESM2 uses CMIP6-provided forcings "except for stratospheric ozone for radiative effects and stratospheric aerosols for radiative effects", which come from WACCM6 runs. |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### ESM-specific forcing inputs (CLM5 active biogeochemistry)

| ESM input | Applied? | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | ? | NCAR-CCMI-2-0 standard expected | `NCAR-CCMI-2-0` | CLM5 has active N cycle; N-dep dataset not confirmed |
| CO2: conc.- or emission-driven | ~ | Meinshausen 2017 conc. (historical) | `UoM-CMIP-1-2-0` | CESM2 `historical` = concentration-driven (standard) |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O | Ozone | `ozone_strataero_WACCM_L70_zm5day_18500101-20150103_CMIP6ensAvg_c180923.nc` | Replaces standard CCMI | WACCM6-derived center-specific prescribed ozone; NOT input4MIPs UReading-CCMI-1-0 |
| VL | Volcanic/stratospheric aerosol | Same file as O above | Replaces IACETH SAGE3λ | Bundled ozone+strataero file from WACCM6 runs; NOT IACETH-SAGE3lambda-3-0-0 |

## Deviations from Eyring et al. 2016 protocol

| Forcing | Deviation type | Details |
|---------|---------------|---------|
| O | Center-specific prescribed product (✗dev) | Prescribes ozone from prior CESM2-WACCM6 runs instead of standard CCMI (Checa-Garcia 2018). Keeble 2021: "Most models prescribing stratospheric ozone use the CMIP6 dataset (Checa-Garcia, 2018b), except CESM2, CESM2-FV2, and NorESM2." |
| VL | Center-specific prescribed product (✗dev) | Stratospheric aerosol field from same WACCM6-derived file that provides ozone; replaces IACETH-SAGE3lambda-3-0-0. |

## Open questions

1. G: UoM-CMIP-1-2-0 — medium confidence only; not confirmed in workflow
2. LU: Hurtt 2020 LUH2 v2.1h — not confirmed; CLM5 land-use confirm
3. SO: SOLARIS-HEPPA-3-2 — not confirmed; CAM6 solar handling
4. N-dep: NCAR-CCMI-2-0 for CLM5 N cycle — not confirmed
5. NorESM2: Keeble 2021 also flags NorESM2 as using CESM2-WACCM-derived ozone — cross-reference in Stage 13

## Provenance
- Stage 3 workflow run ID: wf_5c9d74cf-149
- Key primary sources: Danabasoglu et al. 2020 (*JAMES* doi:10.1029/2019MS001916); Keeble et al. 2021 (*ACP* 21, 5015, doi:10.5194/acp-21-5015-2021); Emmons et al. 2020 (*JAMES* doi:10.1029/2019MS001882); Gettelman et al. 2019 (*JGR* doi:10.1029/2019JD030943)
