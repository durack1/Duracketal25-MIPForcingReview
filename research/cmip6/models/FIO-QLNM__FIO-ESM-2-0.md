<!-- CMIP6 forcing record — FIO-ESM-2-0 (FIO-QLNM). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# FIO-ESM-2-0 — FIO-QLNM (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** CAM5 (f09, 1.25°×0.9°, 30L, FV dynamical core) + POP2 ocean (61L) + MASNUM surface wave model + CICE4 + CLM4.0 (CN carbon-nitrogen) land BGC; BEC ocean ecosystem (Moore et al. 2013). **Full ESM**. First Institute of Oceanography, Qingdao. Novel wave-coupling (Stokes drift, sea spray, SST diurnal cycle). Uses MACv2-SP aerosols (not CEDS+BB4CMIP6).
- **Primary documentation paper(s):** Bao et al. 2020 (*JGR-Oceans* doi:10.1029/2019JC016036)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source |
|-----|---------|---------|----------|-----------------|
| G  | Well-mixed GHGs | ✓std | TV | Meinshausen 2017 GHG concentrations (CO2, CH4, N2O, CFC12, CFC11-eq; 43 species) |
| O  | Ozone | ✓std | TV | IGAC/SPARC CCMI ozone database in support of CMIP6 (Hegglin 2016) |
| SD | Aerosol — sulphate direct | ✓std | TV | MACv2-SP (Stevens et al. 2017) anthropogenic AOD added to 1850 CMIP5 natural background |
| SI | Aerosol — sulphate indirect | ✓std | TV | MACv2-SP Twomey effect (cloud droplet ratio) × MG1.5 microphysics |
| BC | Black carbon | ✓std | TV | MACv2-SP anthropogenic optical properties (BC included in plume) |
| OC | Organic carbon | ✓std | TV | MACv2-SP anthropogenic optical properties (OC included in plume) |
| MD | Mineral dust | ✗dev | FXk | 1850 annual-cycling CMIP5 natural aerosol climatology (non-standard background) |
| SS | Sea salt | ✗dev | FXk | 1850 annual-cycling CMIP5 natural aerosol climatology (non-standard background) |
| LU | Land-use change | ~ | TV *(likely)* | **Dataset not named in Bao 2020.** UofMD-landState-2-1-h (LUH2 v2.1h) is the only standard CMIP6 historical land-state dataset in input4MIPs. FIO-ESM-2-0 uses CLM4.0 — the CMIP5-era land model (CESM1 used CLM4.0 with LUH1 for CMIP5). CLM5 (CMIP6 CESM2) was updated to LUH2; CLM4.0 was not. Architecture inference: likely LUH1 (✗dev), similar to GFDL-CM4 (confirmed ✗dev, LM4.0 + LUH1). Not confirmed from paper. | Bao et al. 2020; ESGF input4MIPs catalog 2026-06-28 | **Architecture inference only**: CLM4.0 is CMIP5-era, not updated for LUH2. Likely ✗dev but requires direct confirmation. |
| SO | Solar irradiance | ✓std | TV | Matthes 2017 / SOLARIS-HEPPA TSI (historical time-varying) |
| VL | Volcanic aerosols | ✓std | TV | CMIP6 stratospheric aerosol data (Thomason 2018 / IACETH); ext coeff + SSA + g all bands |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | CLM4.0 CN module — NCAR CCMI-2-0 expected but not named in paper | ? |
| Fe-dep | BEC ecological model (Moore et al. 2013) — Fe-dep dataset not named | ? |
| CO2-mode | ＋exc (emissions-driven) — paper states "atmospheric CO2 concentration determined by air–sea and air–land CO2 fluxes and anthropogenic CO2 emissions" | ＋exc |

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); zero verified findings for FIO-ESM-2-0 (Bao 2020 not retrieved in that pass)
- Second-pass extraction (2026-06-27): Bao et al. 2020 (JGR doi:10.1029/2019JC016036) extracted in full via pdftotext; forcing stack confirmed

## Notes
- PDF extraction pass (2026-06-27): Qiao et al. 2013 (JGR doi:10.1002/jgrc.20327) extracted in full. This paper documents FIO-ESM v1 for CMIP5, not CMIP6. No CMIP6-specific forcing named.
- Second-pass extraction (2026-06-27): Bao et al. 2020 JGR (doi:10.1029/2019JC016036) Section 3 (Model Configuration) explicitly names: (1) CMIP6 GHG concentrations (CO2, CH4, N2O, CFC12, CFC11-eq; Meinshausen 2017) → G=✓std; (2) IGAC/SPARC CCMI ozone database for CMIP6 (Hegglin 2016) → O=✓std; (3) MACv2-SP (Stevens et al. 2017) for anthropogenic aerosol optical properties and Twomey effect added to 1850 CMIP5 natural background → SD/SI/BC/OC=✓std; (4) natural background is "prescribed annual cycling concentration in 1850 from CMIP5" → MD/SS=✗dev FXk; (5) CMIP6 stratospheric aerosol data for volcanic + background strat contributions → VL=✓std; (6) TSI used with time-varying historical data → SO=✓std; (7) CO2 prognostic, determined by air-sea/air-land fluxes + anthropogenic emissions → CO2-mode=＋exc. LU, N-dep, Fe-dep not named.
