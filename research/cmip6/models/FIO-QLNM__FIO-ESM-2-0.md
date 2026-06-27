<!-- CMIP6 forcing record — FIO-ESM-2-0 (FIO-QLNM). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# FIO-ESM-2-0 — FIO-QLNM (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** FOAM atmosphere (based on CAM5.3, T85L32) + POP2 ocean + MASNUM surface wave model + CICE5 + CLM4.5 land BGC. **Full ESM**. First Institute of Oceanography, Qingdao. Novel addition of surface wave–ocean coupling (MASNUM). CAM5.3 lineage expected to use CEDS+BB4CMIP6 aerosols (as CMCC-CM2-SR5, Stage 13).
- **Primary documentation paper(s):** Bao et al. 2020 (*JAMES* doi:10.1029/2019MS002014)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

All verdicts unconfirmed — no per-component forcing findings were returned in Stage 16 research. Bao et al. 2020 was not successfully extracted.

| Key | Forcing | Verdict | Temporal | Dataset / source |
|-----|---------|---------|----------|-----------------|
| G  | Well-mixed GHGs | ? | ? | — |
| O  | Ozone | ? | ? | — |
| SD | Aerosol — sulphate direct | ? | ? | — |
| SI | Aerosol — sulphate indirect | ? | ? | — |
| BC | Black carbon | ? | ? | — |
| OC | Organic carbon | ? | ? | — |
| MD | Mineral dust | ? | ? | — |
| SS | Sea salt | ? | ? | — |
| LU | Land-use change | ? | ? | — |
| SO | Solar irradiance | ? | ? | — |
| VL | Volcanic aerosols | ? | ? | — |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | CLM4.5 land BGC; NCAR-CCMI-2-0 expected | ? |
| Fe-dep | Ocean BGC (not confirmed which scheme); Fe-dep dataset unknown | ? |
| CO2-mode | Concentration-driven assumed for historical | ? |

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); zero verified findings for FIO-ESM-2-0 (Bao 2020 not retrieved)
- Requires: targeted second pass using Bao et al. 2020 (doi:10.1029/2019MS002014) for full forcing stack; CAM5.3 lineage suggests CEDS+BB4CMIP6 aerosols
