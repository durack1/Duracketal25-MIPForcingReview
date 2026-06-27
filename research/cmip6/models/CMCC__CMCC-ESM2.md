<!-- CMIP6 forcing record — CMCC-ESM2 (CMCC). Stage 13 (2026-06-26) — verified second pass 2026-06-27. -->

# CMCC-ESM2 — CMCC (Italy)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** CMCC-CM2-SR5 physical core (CAM5/MAM3 atmosphere, NEMO3.6 ocean, CLM4.5-BGC land, CICE4 sea ice) + CLM4.5-BGC land biogeochemistry (C-N cycle) + BFM v5.2 ocean BGC. Full ESM.
- **Primary paper:** Lovato et al. 2022, *JAMES* doi:10.1029/2021MS002814
- **CMIP5 predecessor:** CMCC-CESM (CMIP5)

## Forcing (CMIP6 historical, 1850–2014)

Verified from Lovato et al. (2022) Table 1 and model description. Aerosol components (SD, SI, BC, OC, MD, SS) are all handled by CAM5's interactive MAM3 scheme driven by CEDS 2017-08-30 emissions; no separate prescribed aerosol datasets are listed.

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | UoM-CMIP v1.2 (Meinshausen & Vogel 2016 = Meinshausen 2017) | ✓std | TV |
| O — Ozone | UReading-CCMI v1.0 (Hegglin et al. 2016) | ✓std | TV |
| SD — Sulfate direct | CEDS 2017-08-30 emissions → CAM5/MAM3 online | ✓std | TV |
| SI — Sulfate indirect | CAM5/MAM3 first indirect effect (prognostic droplets) | ✓std | TV |
| BC — Black carbon | CEDS 2017-08-30 emissions → CAM5/MAM3 online | ✓std | TV |
| OC — Organic carbon | CEDS 2017-08-30 emissions → CAM5/MAM3 online | ✓std | TV |
| MD — Mineral dust | CAM5/MAM3 online (dust emissions interactive) | ✓std | TV |
| SS — Sea salt | CAM5/MAM3 online (sea salt emissions interactive) | ✓std | TV |
| LU — Land use | UofMD-landState high v2.1 hr (Hurtt et al. 2019 = LUH2) via CLM4.5 | ✓std | TV |
| SO — Solar | SOLARIS-HEPPA v3.2 (Matthes et al. 2017) | ✓std | TV |
| VL — Volcanic | IACETH-SAGE v3 stratospheric aerosol (ETH Zürich 2017) | ✓std | TV |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | NCAR-CCMI v2.0 (Hegglin et al. 2018) — spatially and temporally varying | ✓std |
| Fe-dep | Dust dissolution (online via CAM5/MAM3) + sedimentary inputs (constant flux); no separate prescribed Fe-dep dataset | ~ |
| CO2-mode | Concentration-driven (explicit statement: "DECK and ScenarioMIP concentration-driven simulations") | conc |

## Sources
- Lovato et al. 2022 (*JAMES* doi:10.1029/2021MS002814) — primary; Table 1 lists all forcing datasets
- Cherchi et al. 2019 (*JAMES* doi:10.1029/2018MS001369) — CMCC-CM2-SR5 physical core description (CAM5/MAM3 aerosol details)

## Notes
All 11 forcing components verified from Lovato 2022 Table 1. The atmosphere uses CAM5 with the fully interactive MAM3 modal aerosol scheme driven by CEDS 2017-08-30 emissions for anthropogenic aerosols; dust and sea salt are emitted online. The physical core is the same as CMCC-CM2-SR5 (Cherchi 2019). NCAR-CCMI v2.0 for N-dep confirmed in Table 1 footnote. CO2 is concentration-driven explicitly stated. Fe for ocean BGC (BFM v5.2) comes from online dust dissolution plus prescribed sedimentary flux — no standard CMIP6 Fe-dep dataset used.
