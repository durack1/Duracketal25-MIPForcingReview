# AS-RCEC TaiESM1
## Architecture
TaiESM1 atmosphere (based on CAM5.3/CESM1.3, T85L30, top ~3hPa, modified microphysics + proprietary SNAP aerosol) + POP2 ocean + CICE4 + CLM4. Academia Sinica, Taiwan. Primary paper: Lee et al. 2020 (GMD doi:10.5194/gmd-13-3887-2020). Note: this paper describes 1850–2005 CMIP5-style run; CMIP6 submission (1850–2014) may differ.
## Forcing (CMIP6 historical, 1850–2014)
| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | — | ? | — |
| O — Ozone | — | ? | — |
| SD — Sulfate direct | SNAP (Chen et al. 2013) | ~ | — |
| SI — Sulfate indirect | SNAP (Chen et al. 2013) | ~ | — |
| BC — Black carbon | SNAP (Chen et al. 2013) | ~ | — |
| OC — Organic carbon | SNAP (Chen et al. 2013) | ~ | — |
| MD — Mineral dust | SNAP (Chen et al. 2013) | ~ | — |
| SS — Sea salt | SNAP (Chen et al. 2013) | ~ | — |
| LU — Land use | — | ? | — |
| SO — Solar | — | ? | — |
| VL — Volcanic | — | ? | — |
## Notes
Aerosol scheme is SNAP (Statistical-Numerical Aerosol Parameterization; Chen et al. 2013) — a proprietary bulk-modal scheme, NOT CAM5 MAM3. WDC-Climate CMIP6 metadata confirms aerosol and atmosChem both listed as "SNAP (same grid as atmos)". Lee et al. 2020 GMD names NO specific CMIP6 forcing datasets (no CEDS, BB4CMIP6, Meinshausen, LUH2, SOLARIS, or MACv2). Paper describes 1850–2005 run framed against CMIP5, not 1850–2014 CMIP6. G/O/LU/SO/VL all unresolved. Aerosol verdicts are ~ (centre-specific scheme; emission inputs not documented). Wang et al. 2021 JAMES (doi:10.1029/2020MS002353) confirms CMIP6 historical run (1850–2014) used "forcing provided by the CMIP6 (Eyring et al., 2016)" but names no specific datasets for G, O, LU, SO, or VL. Sources: Lee et al. 2020 GMD doi:10.5194/gmd-13-3887-2020 (primary, confirmed); Wang et al. 2021 JAMES doi:10.1029/2020MS002353 (companion evaluation, read); WDC-Climate.
