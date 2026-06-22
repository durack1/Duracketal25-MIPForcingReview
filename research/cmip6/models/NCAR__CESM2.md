<!-- CMIP6 forcing record — CESM2 (NCAR). Seeded 2026-06-22. -->

# CESM2 — National Center for Atmospheric Research, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CCSM4 / CESM1-BGC / CESM1-CAM5
- **Model family / lineage:** CAM6 atmosphere + CLM5 land + MOM6/POP2 ocean + CICE5. Standard ~1° configuration.
- **Atmosphere / ocean components:** CAM6 (CLM5) / POP2 + MOM6 + CICE5
- **Primary documentation paper(s):** Danabasoglu et al. 2020, *JAMES* doi:10.1029/2019MS001916 [danabasoglu_cesm2_2020]
- **Forcing-specific reference(s):** TBD from workflow

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | | | | | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ? | | | | | Key Q: CCMI standard or center-specific (like GISS-NINT)? CMIP5 CESM1 used Lamarque2012 trop+Tilmes strat. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | | | | | CAM6 aerosol scheme — interactive from CEDS? |
| SI | Aerosol — sulphate indirect | — | — | ? | | | | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | | | | | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | | | | | |
| MD | Mineral dust | — | — | ? | | | | | |
| SS | Sea salt | — | — | ? | | | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | | | | | CLM5 handles land-use; LUH2 v2.1h expected |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | | | | | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | | | | | CMIP5 CESM1 used Neely-Gao stratospheric AOD — did CESM2 switch? |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O | Ozone | Potentially center-derived (as GISS) | TBD | Beware GISS-NINT pattern — CESM2 may also use center-specific prescribed ozone |
| VL | Volcanic | Potentially Neely-Gao or GISS-model style | TBD | CMIP5 CESM1 used custom volcanic |

## Open questions
1. O: Standard CCMI (✓std) or center-specific product (✗dev)?
2. SD/BC/OC: CAM6 interactive from CEDS+BB4CMIP6 or another approach?
3. VL: IACETH-SAGE3lambda-3-0-0 or custom?

## Provenance
- Stage workflow run ID: (pending Stage 3)
