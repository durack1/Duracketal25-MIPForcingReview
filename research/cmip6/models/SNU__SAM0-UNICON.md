# SNU SAM0-UNICON
## Architecture
CAM5-UniCon atmosphere (T85L30, top ~3hPa, replaces CAM5 boundary layer with unified convection scheme) + POP2 ocean + CICE4 + CLM4.5 land. Seoul National University. Based on CESM1.3 framework. Primary paper: Park et al. 2019 (JAMES doi:10.1029/2018MS001519).
## Forcing (CMIP6 historical, 1850–2014)
| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Meinshausen 2017 (CMIP6 transient GHG concentrations) | ✓std | TV |
| O — Ozone | Prescribed monthly 3-D ozone concentration (CMIP6 forcing; dataset not named) | ? | TV |
| SD — Sulfate direct | CEDS+BB4CMIP6 emissions via MAM3 (CMIP6 aerosol emission data, AEROCOM protocol) | ✓std | TV |
| SI — Sulfate indirect | CEDS+BB4CMIP6 emissions via MAM3 | ✓std | TV |
| BC — Black carbon | CEDS+BB4CMIP6 emissions (explicit: "black carbon" in CMIP6 emission data) | ✓std | TV |
| OC — Organic carbon | CEDS+BB4CMIP6 emissions (explicit: "primary organic matter" in CMIP6 emission data) | ✓std | TV |
| MD — Mineral dust | Online interactive via MAM3 (not externally prescribed) | ＋exc | TV |
| SS — Sea salt | Online interactive via MAM3 (not externally prescribed) | ＋exc | TV |
| LU — Land use | CMIP5 land cover change data (LUH1) + CMIP6 harvest area; CESM1 land model incompatible with LUH2 | ✗dev | TV |
| SO — Solar | Monthly spectral solar irradiance (CMIP6 forcing; Matthes 2017 implied but not named) | ? | TV |
| VL — Volcanic | Monthly zonal-mean H2SO4 mass concentration + derived SAD (CMIP6 stratospheric aerosol forcing; Thomason 2018 implied but not named) | ? | TV |
## Notes
Park et al. 2019 (J. Climate doi:10.1175/JCLI-D-18-0796.1) Section 2 provides explicit CMIP6 forcing description. GHGs: transient CMIP6 annual-mean concentrations confirmed (Meinshausen 2017 ✓std). Aerosol emissions: explicitly CMIP6 data processed via AEROCOM protocol, naming SO2, SO4, black carbon, primary organic matter, SOA, and DMS — consistent with CEDS+BB4CMIP6 (✓std for SD/SI/BC/OC). MD and SS are online interactive via CAM5/MAM3 (Liu et al. 2012). Land use: explicitly stated as CMIP5 land cover data (LUH1) retained because CESM1 CLM4.5 uses its own land cover type categorization incompatible with LUH2; only harvest area substituted from CMIP6 — clear ✗dev. Ozone prescribed monthly 3-D but dataset not named. Solar and volcanic described functionally (monthly spectral irradiance; monthly zonal-mean H2SO4 mass concentration) but specific datasets (Matthes 2017, Thomason 2018) not cited — left as ?.
