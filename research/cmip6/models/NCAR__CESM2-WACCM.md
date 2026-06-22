<!-- CMIP6 forcing record — CESM2-WACCM (NCAR). Seeded 2026-06-22. -->

# CESM2-WACCM — National Center for Atmospheric Research, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CESM1-WACCM (interactive chemistry, O=＋exc in CMIP5)
- **Model family / lineage:** WACCM6 atmosphere (Whole Atmosphere Community Climate Model) with interactive chemistry + CLM5 land + POP2/MOM6 ocean. Model top ~140 km.
- **Atmosphere / ocean components:** WACCM6 / POP2 + MOM6 + CICE5; full atmosphere including middle/upper atmosphere
- **Primary documentation paper(s):** Gettelman et al. 2019/2020, *JAMES* (WACCM6 description) [gettelman_waccm6_2019]; Danabasoglu et al. 2020 [danabasoglu_cesm2_2020]
- **Forcing-specific reference(s):** Tilmes et al. 2019 or similar (forcing strategy)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | | | | | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ? | | | | | **EXPECTED ＋exc**: WACCM6 has interactive full-atmosphere chemistry; CMIP5 CESM1-WACCM was interactive. Confirm. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | | | | | WACCM6 aerosol: interactive from CEDS+BB4CMIP6? |
| SI | Aerosol — sulphate indirect | — | — | ? | | | | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | | | | | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ? | | | | | |
| MD | Mineral dust | — | — | ? | | | | | |
| SS | Sea salt | — | — | ? | | | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | | | | | |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | | | | | WACCM6 resolves solar spectral variability — confirm SOLARIS-HEPPA-3-2 |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | | | | | |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### ESM-specific forcing inputs (WACCM6 / CLM5 active carbon cycle)

| ESM input | Applied? | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | ? | NCAR-CCMI-2-0 standard (NCAR generated this!) | `NCAR-CCMI-2-0` | NCAR is the source center for NCAR-CCMI-2-0 — confirm CESM2-WACCM uses its own product |
| CO2: conc.- or emission-driven | ? | Meinshausen 2017 conc. (`historical`) | `UoM-CMIP-1-2-0` | |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O | Ozone | WACCM6 interactive chemistry (expected) | Replaces | If confirmed interactive, prescribed CCMI is not used |

## Open questions
1. O: Confirm WACCM6 interactive chemistry (＋exc) — expected but needs primary source confirmation
2. SO: WACCM6 spectral solar — SOLARIS-HEPPA-3-2 used? (spectral resolution matters for WACCM)
3. VL: IACETH-SAGE3lambda-3-0-0 or custom?
4. N-dep: NCAR-CCMI-2-0 (NCAR is the source — do they use their own product?)
5. Does CESM2-WACCM differ from CESM2 for any non-chemistry forcings (LU, G, SO, VL)?

## Provenance
- Stage workflow run ID: (pending Stage 3)
