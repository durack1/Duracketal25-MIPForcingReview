<!-- CMIP6 forcing record — E3SM-1-0 (E3SM-Project). Populated 2026-06-22 from Stage 4 workflow wf_29f9e93f-7df. -->

# E3SM-1-0 — E3SM Project (DOE), USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CESM1 (forked ~2016); EAMv1 is CAM5 descendant
- **Model family / lineage:** EAMv1 atmosphere (CAM5-like, cubed-sphere, ~1°, 72 levels, top 0.1 hPa) + CLM4.5 land + CICE5 + MPAS-O ocean. First E3SM release. Forked from CESM1 ~2016 as a DOE project — adopted CMIP6 forcings independently of NCAR.
- **Atmosphere / ocean components:** EAMv1 / MPAS-O + CICE5
- **Primary documentation paper(s):** Golaz et al. 2019, *JAMES* doi:10.1029/2018MS001603 [golaz_e3sm_2019]; Tang et al. 2021, *GMD* doi:10.5194/gmd-14-1219-2021 [tang_e3sm_ozone_2021]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ✓std | TV | input4MIPs GHG concentrations; Golaz 2019/2022 confirm standard input4MIPs processing (medium confidence on exact source_id) | Golaz et al. 2019; Golaz et al. 2022 | golaz_e3sm_2019; golaz_e3smv2_2022 | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ~ | TV | **HYBRID (O3v1 module)**: Tropospheric O3 prescribed from input4MIPs Ozone v1.0 (Hegglin et al. 2016 = UReading-CCMI-1-0, the standard CCMI product). Stratospheric O3 computed interactively via Linoz v2 linearized chemistry. NOT purely prescribed-CCMI, NOT fully interactive. | Tang et al. 2021 *GMD* doi:10.5194/gmd-14-1219-2021 | tang_e3sm_ozone_2021 | Tang 2021: "O3v1 prescribed tropospheric ozone based on decadal monthly zonal mean latitude-by-pressure data from the input4MIPs Ozone data set v1.0 [Hegglin et al., 2016, doi 10.22033/ESGF/input4MIPs.1115]" and "calculates stratospheric ozone interactively with Linoz v2." Tropospheric portion IS standard CCMI (unlike CESM2 WACCM6-derived ✗dev); overall verdict ~ due to interactive stratosphere. Note: Linoz JPL coefficient table (linoz1850-2015_2010JPL_CMIP6_10deg_58km_c20171109.nc) is the chemistry parameter file, NOT a prescribed ozone dataset — refuted claim that this represents a center-specific ozone deviation. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | CEDS-2017-05-18 (Hoesly 2018) + BB4CMIP6 (van Marle 2017). Files: `cmip6_mam4_so2_elev_1850-2014_c180205.nc` (EAMv1 MAM4 aerosol). | Golaz et al. 2019; E3SM docs | golaz_e3sm_2019 | Official E3SM docs confirm CEDS sector definitions (AGR, SLV, WST, SHP, TRA, RCO, ENE, IND). |
| SI | Aerosol — sulphate indirect | — | — | ~ | TV | Interactive via MAM4 (four-mode modal aerosol model) — indirect effects included | | | EAMv1 uses MAM4 from CESM1-CAM5 lineage |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | File: `cmip6_mam4_bc_a4_elev_1850-2014_c180205.nc` | Golaz et al. 2019; E3SM docs | golaz_e3sm_2019 | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | File: `cmip6_mam4_pom_a4_elev_1850-2014_c180205.nc` (POM = particulate organic matter / OC) | Golaz et al. 2019; E3SM docs | golaz_e3sm_2019 | |
| MD | Mineral dust | — | — | ~ | TV | Interactive in MAM4 | | | |
| SS | Sea salt | — | — | ~ | TV | Interactive in MAM4 | | | |
| LU | Land-use change | Hurtt et al. 2017 LUH2 v2.1h | `UofMD-landState-2-1-h` | ✓std | TV | input4MIPs LUH2 v2.1h regridded to E3SM ne30 grid by G. Hurtt and R. Sahajpal (private communication, March 2017–Jan 2018). Golaz 2019 Appendix B.6: "using v2.1h of the input4MIPs land use data (Hurtt et al., 2017)." | Golaz et al. 2019 Appendix B.6 | golaz_e3sm_2019 | Confirmed standard dataset. |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA v3.2 | `SOLARIS-HEPPA-3-2` | ✓std | TV | input4MIPs solar irradiance v3.2, specified monthly. Golaz 2019 Appendix B.8: "Solar irradiances came from v3.2 of the solar irradiance data set from input4MIPs (Matthes, Funke, Kruschke, et al., 2017; Matthes, Funke, Andersson, et al., 2017). The data were specified monthly." | Golaz et al. 2019 Appendix B.8 | golaz_e3sm_2019 | Confirmed standard dataset; note cite uses both Matthes 2017 references (GMD paper + input4MIPs dataset). |
| VL | Volcanic aerosols | IACETH SAGE3λ v3 | `IACETH-SAGE3lambda-3-0-0` | ✓std | TV | Standard IACETH SAGE3λ v3 dataset, spectrally interpolated to match EAMv1 radiation wavelength bands. Golaz 2019 Appendix B.4: "We used version 3 of the data set, which was created to exactly match the E3SMv1 radiation wavelength ranges by one of the data set creators, B. Luo (private communication, June-Sept 2017)." Spectral interpolation to model radiation bands is standard practice applied by all CMIP6 models receiving this dataset — not a deviation. | Golaz et al. 2019 Appendix B.4 | golaz_e3sm_2019 | |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O (strat) | Stratospheric ozone | Linoz v2 interactive chemistry | Replaces prescribed CCMI strat | Linoz v2 coefficient table `linoz1850-2015_2010JPL_CMIP6_10deg_58km_c20171109.nc` is chemistry parameters, NOT a prescribed ozone dataset |

## Open questions
1. O3v1: Confirm O3v1 was the module used in archived historical DECK submission (Tang 2021 evaluates the modules but does not explicitly confirm the submission version).

*Resolved 2026-06-27 from Golaz et al. 2019 Appendix B:*
- *LU: ✓std confirmed — LUH2 v2.1h (Hurtt et al. 2017) via G. Hurtt + R. Sahajpal private communication (Appendix B.6)*
- *SO: ✓std confirmed — SOLARIS-HEPPA v3.2 input4MIPs, monthly (Appendix B.8)*
- *VL: ✓std confirmed — IACETH SAGE3λ v3; spectral interpolation to EAMv1 radiation bands is standard practice, not a deviation (Appendix B.4; corrected 2026-06-27)*

## Provenance
- Stage 4 workflow run ID: wf_29f9e93f-7df (8 confirmed, 6 killed of 14 verified)
- Key primary sources: Golaz et al. 2019 (*JAMES* doi:10.1029/2018MS001603); Tang et al. 2021 (*GMD* doi:10.5194/gmd-14-1219-2021); Golaz et al. 2022 (*GMD* doi:10.5194/gmd-15-3941-2022); Brown et al. 2024 (*GMD* doi:10.5194/gmd-17-5087-2024)
