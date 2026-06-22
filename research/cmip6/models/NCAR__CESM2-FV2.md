<!-- CMIP6 forcing record — CESM2-FV2 (NCAR). Populated 2026-06-22 from Stage 3 workflow wf_5c9d74cf-149. -->

# CESM2-FV2 — National Center for Atmospheric Research, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CESM1-CAM5-1-FV2 (resolution variant)
- **Model family / lineage:** CESM2 at lower horizontal resolution. FV2 = finite-volume ~1.9°×2.5° atmosphere/land vs nominal ~1° of CESM2. All atmospheric forcing IDENTICAL to CESM2 — difference is resolution-only.
- **Atmosphere / ocean components:** CAM6-FV2 / POP2 + CICE5
- **Primary documentation paper(s):** Danabasoglu et al. 2020, *JAMES* doi:10.1029/2019MS001916 [danabasoglu_cesm2_2020]; Keeble et al. 2021, *ACP* 21, 5015 doi:10.5194/acp-21-5015-2021

**CESM2/CESM2-FV2 forcing identity**: Keeble 2021 explicitly states FV2 is "based on CESM2 but with a reduced horizontal resolution for the atmosphere and land components." All atmospheric forcing — including the center-specific WACCM6-derived ozone/strataero — is identical to CESM2.

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ~ | TV | As CESM2 | | Medium confidence |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✗dev | TV | WACCM6-derived center-specific ozone — identical to CESM2. File: `ozone_strataero_WACCM_L70_zm5day_18500101-20150103_CMIP6ensAvg_c180923.nc` | Keeble et al. 2021 | As CESM2; confirmed identical in Keeble 2021 |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As CESM2 — CEDS + BB4CMIP6, interactive MAM3 | As CESM2 | |
| SI | Aerosol — sulphate indirect | — | — | ~ | TV | As CESM2 — MAM3 interactive | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As CESM2 | | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As CESM2 | | |
| MD | Mineral dust | — | — | ~ | TV | As CESM2 — MAM3 interactive | | |
| SS | Sea salt | — | — | ~ | TV | As CESM2 — MAM3 interactive | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ~ | TV | As CESM2 | | |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ~ | TV | As CESM2 | | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ✗dev | TV | As CESM2 — same bundled WACCM6-derived file: `ozone_strataero_WACCM_L70_zm5day_18500101-20150103_CMIP6ensAvg_c180923.nc` | Keeble et al. 2021 | Identical deviation to CESM2 |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O | Ozone | `ozone_strataero_WACCM_L70_zm5day_18500101-20150103_CMIP6ensAvg_c180923.nc` | Replaces standard CCMI | Identical to CESM2 |
| VL | Volcanic/stratospheric aerosol | Same file as O above | Replaces IACETH SAGE3λ | Identical to CESM2 |

## Open questions
- Identical to CESM2 open questions (G, LU, SO confirmation); all confirmed identical to CESM2 for atmospheric forcings per Keeble 2021.

## Provenance
- Stage 3 workflow run ID: wf_5c9d74cf-149
- Key sources: Keeble et al. 2021 (*ACP* 21, 5015); Danabasoglu et al. 2020 (*JAMES*)
- See NCAR__CESM2.md for full notes; all forcing details identical.
