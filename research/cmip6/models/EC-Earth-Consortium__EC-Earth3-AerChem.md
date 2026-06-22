<!-- CMIP6 forcing record — EC-Earth3-AerChem (EC-Earth-Consortium). Stage 9 workflow: wf_1fb84fb8-c26 (2026-06-23) -->

# EC-Earth3-AerChem — EC-Earth-Consortium (Pan-European)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** EC-Earth3 base + **TM5-MP release 3.0 atmospheric chemistry-transport model** (fully coupled). Interactive tropospheric aerosol (M7 modal) AND tropospheric ozone/methane. Stratosphere uses prescribed CMIP6 datasets.
- **Atmosphere / ocean components:** IFS cy36r4 (modified, coupled to TM5-MP) / NEMO3.6 (ORCA1) + LIM3
- **Primary documentation paper(s):** van Noije et al. 2021, *GMD* doi:10.5194/gmd-14-5637-2021 [van_noije_ecearth_aerchem_2021] (NOTE: DOI is 5637, not 5079); Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022 [doscher_ecearth3_2022]

**IMPORTANT: Keeble 2021 classification correction**: The project prior assumed EC-Earth3-AerChem would appear in Keeble et al. 2021's 6-model interactive-chemistry group. This is WRONG — none of the three EC-Earth3 variants appears in Keeble 2021 at all (the paper predates AerChem's CMIP6 submission). AerChem's interactive ozone is documented solely by van Noije et al. 2021. Keeble 2021's 6 interactive models are: CESM2-WACCM, CESM2-WACCM-FV2, CNRM-ESM2-1, GFDL-ESM4, MRI-ESM2-0, UKESM1-0-LL.

**van Noije 2021 verbatim distinguisher**: "AerChem simulates tropospheric aerosols and the reactive greenhouse gases methane and ozone. In all other configurations these are prescribed."

## Forcing datasets used (historical 1850–2014)

| Key | Forcing | Protocol (Eyring 2016) | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | ✓std | TV | **Meinshausen 2017/2020** — same as EC-Earth3 base (IFS components identical). | van Noije et al. 2021 | van Noije 2021: "CMIP6 forcings prescribed in the modified IFS model are the solar forcing (Matthes et al., 2017), well-mixed greenhouse gas concentrations (CO2, N2O, CFC-12, and CFC-11 equivalents; Meinshausen et al., 2017, 2020)..." |
| O  | Ozone | Checa-Garcia et al. 2018 CCMI | ＋exc | TV | **TM5-MP interactive tropospheric ozone** (and methane) + **stratospheric ozone nudged to CMIP6 CCMI zonal-mean fields** (Checa-Garcia 2018). O3/CH4 from TM5-MP fed into IFS SW and LW radiation schemes. | van Noije et al. 2021 | van Noije 2021: "The mixing ratios of ozone in the stratosphere are nudged towards zonal mean fields calculated from the three-dimensional input data sets provided by CMIP6 (Checa-Garcia et al., 2018)" and "The ozone and methane mixing ratios from TM5 are input to the SW and LW radiation schemes of IFS." Interactive troposphere + CCMI-nudged stratosphere = ＋exc (exceeds purely prescribed CCMI standard). |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | ＋exc | TV | **TM5-MP M7 modal interactive aerosol** consuming CEDS (Hoesly 2018) + BB4CMIP6 (van Marle 2017) emissions. Sulphate (and all aerosol species) computed interactively. Stratospheric aerosol optical properties remain prescribed. | van Noije et al. 2021; Döscher et al. 2022 | van Noije 2021: "historical anthropogenic emissions are taken from the Community Emissions Data System (CEDS; Hoesly et al., 2018)" and "historical fire emissions are taken from the BB4CMIP6 data set (van Marle et al., 2017)." Döscher 2022: "Tropospheric aerosols are either simulated interactively in TM5 (in the EC-Earth3-AerChem configuration) or prescribed." |
| SI | Aerosol — sulphate indirect | — | ＋exc | TV | **TM5-MP M7 interactive indirect effects** (cloud activation, both 1st and 2nd indirect). More complete than MACv2-SP Twomey-only approach of EC-Earth3 base. | van Noije et al. 2021 | TM5-MP M7 = 7-mode modal aerosol microphysics (sulfate, BC, OA, sea salt, dust); indirect effects fully interactive. |
| BC | Black carbon | CEDS + BB4CMIP6 | ＋exc | TV | TM5-MP M7 interactive BC from CEDS+BB4CMIP6 | van Noije et al. 2021 | |
| OC | Organic carbon | CEDS + BB4CMIP6 | ＋exc | TV | TM5-MP M7 interactive OA from CEDS+BB4CMIP6 | van Noije et al. 2021 | |
| MD | Mineral dust | — | ＋exc | TV | TM5-MP M7 interactive mineral dust (prognostic size distribution) | van Noije et al. 2021 | Unlike EC-Earth3 base which uses FXc TM5-PI dust. AerChem has prognostic dust. |
| SS | Sea salt | — | ＋exc | TV | TM5-MP M7 interactive sea salt | van Noije et al. 2021 | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | ✓std | TV | **LUH2 indirect** — same as EC-Earth3 base (precomputed from EC-Earth3-Veg runs). | van Noije et al. 2021 | van Noije 2021: "Vegetation fields consistent with the CMIP6 land use forcing data sets (Hurtt et al., 2020), which have been produced using a model configuration with dynamic vegetation (EC-Earth3-Veg), replace the climatological input fields applied in the standard IFS model." |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | ✓std | TV | **Matthes 2017** — same as EC-Earth3 base. | van Noije et al. 2021 | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | ~ | TV | "Stratospheric aerosol radiative properties prescribed from the CMIP6 dataset" — source_id not explicitly named. IACETH expected. | van Noije et al. 2021 | As EC-Earth3 base. Interactive TM5-MP handles tropospheric aerosol only; strat aerosol = prescribed. |
| FC | Flux corrections | Not expected | n/a | n/a | None | — | |

### Deviations from Eyring 2016 standard protocol
- **O = ＋exc**: TM5-MP fully interactive tropospheric ozone+methane + CCMI-nudged stratosphere. Exceeds purely prescribed CCMI standard. NOT in Keeble 2021's 6-model interactive-chemistry list (paper predates submission).
- **SD/BC/OC/SI/MD/SS = ＋exc**: TM5-MP interactive aerosol consuming CEDS+BB4CMIP6. Exceeds standard (interactive path, confirmed emissions inputs).

## Provenance
- Stage 9 workflow run ID: wf_1fb84fb8-c26 (2026-06-23)
- Key sources: van Noije et al. 2021 (doi:10.5194/gmd-14-5637-2021); Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022)
