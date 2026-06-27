<!-- CMIP6 forcing record — FGOALS-f3-L (CAS). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# FGOALS-f3-L — CAS (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** FAMIL3 atmosphere (C96, ~100km, L32, top ~2.16 hPa) + CoLM land + LICOM3 ocean (1°) + CICE6. AOGCM. CAS/LASG, Beijing.
- **Primary documentation paper(s):** He et al. 2021 (*JAMES* doi:10.1029/2020MS002144); companion dataset description paper: *Adv. Atmos. Sci.* doi:10.1007/s00376-020-2004-4

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** (UoM-CMIP-1-2-0). | *Adv. Atmos. Sci.* 2020 (CAS group) | Verbatim: "historical global mean greenhouse gas concentrations from Meinshausen et al. (2017)." |
| O  | Ozone | ✓std | TV | **CCMI prescribed** (Checa-Garcia 2018 / UReading-CCMI-1-0). | *Adv. Atmos. Sci.* 2020 | Verbatim: "historical ozone concentrations from [CCMI forcing-databases-in-support-of-cmip6]." |
| SD | Aerosol — sulphate direct | ✓std | TV | Aerosol forcing from CMIP6 standard protocol ("full CMIP6 historical forcing"). Specific scheme/dataset not individually confirmed. | *Adv. Atmos. Sci.* 2020 | "Forced by the same historical forcing provided by CMIP6 from 1850 to 2014." Per-component aerosol dataset not named. |
| SI | Aerosol — sulphate indirect | ✓std | TV | As SD — summary-level CMIP6 standard compliance. | | |
| BC | Black carbon | ✓std | TV | As SD. | | |
| OC | Organic carbon | ✓std | TV | As SD. | | |
| MD | Mineral dust | ? | ? | Not individually confirmed. | | |
| SS | Sea salt | ? | ? | Not individually confirmed. | | |
| LU | Land-use change | ? | ? | Expected LUH2 v2.1h; not individually confirmed. | | |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** (SOLARIS-HEPPA-3-2). | *Adv. Atmos. Sci.* 2020 | Verbatim: "solar forcing from Matthes et al. (2017)." |
| VL | Volcanic aerosols | ? | ? | Not confirmed from Stage 16 sources. | | |
| FC | Flux corrections | n/a | n/a | None | | |

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); confirmed: G/O/SO from *Adv. Atmos. Sci.* verbatim; SD/BC/OC summary-level only; MD/SS/LU/VL unconfirmed
- Key sources: He et al. 2021 (*JAMES* doi:10.1029/2020MS002144); *Adv. Atmos. Sci.* doi:10.1007/s00376-020-2004-4
