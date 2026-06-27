<!-- CMIP6 forcing record — CNRM-CM6-1 (CNRM-CERFACS). Stage 7 workflow: wf_e2b2d348-b4e (2026-06-23) -->

# CNRM-CM6-1 — Centre National de Recherches Météorologiques / CERFACS, France

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CNRM-CM5 (O=＋exc MOBIDIC; SD/BC/OC=✗dev LMDZ-INCA offline; LU=✗dev excluded; VL=✗dev Ammann2007; MD/SS=FXc)
- **Model family / lineage:** ARPEGE-Climat6 atmosphere (T127L91) + SURFEX v8 land + NEMO3.6 ocean + CICE5. AOGCM (no active carbon cycle or interactive chemistry).
- **Atmosphere / ocean components:** ARPEGE-Climat6 / NEMO3.6 + CICE5
- **Primary documentation paper(s):** Voldoire et al. 2019, *JAMES* doi:10.1029/2019MS001770 [voldoire_cnrm_2019]; Michou et al. 2020, *JAMES* doi:10.1029/2019MS001816 [michou_cnrm_2020]
- **Forcing-specific reference(s):** Keeble et al. 2021, *ACP* 21:5015 [keeble_ozone_2021]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ✓std | TV | Meinshausen et al. 2017 yearly global averages (CO2, N2O, CH4, CFC12, CFC11eq option 2) | Voldoire et al. 2019 | Voldoire 2019 §3.2: "GHG concentrations are the yearly global averages of Meinshausen et al. (2017)…option 2." |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | — | ~ | TV | **Linearized stratospheric ozone scheme** — ozone is a prognostic variable with photochemical production/loss rates precomputed monthly from CNRM-ESM2-1 interactive chemistry. Tropospheric ozone is prescribed from CMIP6 CCMI dataset. | Keeble et al. 2021; Voldoire et al. 2019; Michou et al. 2020 | Keeble 2021: "CNRM-CM6-1 uses a linearized scheme to model stratospheric ozone, in which ozone mixing ratios are treated as a prognostic variable with photochemical production and loss rates computed from its associated Earth system model (CNRM-ESM2-1). Tropospheric ozone mixing ratios are not calculated interactively and are instead prescribed from the CMIP6 dataset." Voldoire 2019: "prescribed aerosols and a linear stratospheric ozone scheme." Keeble classifies this as a "simplified online scheme" — intermediate between fully interactive and fully prescribed. NOT a continuation of CMIP5 CNRM-CM5 MOBIDIC scheme (MOBIDIC = separate 2-D interactive module; CNRM-CM6 uses a simpler linearized approach). |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | — | ✗dev | TV | Prescribed monthly AOD fields (5 aerosol types) generated offline by the **TACTIC_v2 scheme** run in CNRM-ESM2-1, using the same emissions as CNRM-ESM2-1. NOT MACv2-SP, NOT interactive CEDS+BB4CMIP6. Center-specific offline-derived AOD. | Michou et al. 2020 | Michou 2020: "aerosols are prescribed through monthly aerosol optical depth (AOD) fields varying each year, coming from atmosphere-only type simulations using the TACTIC_v2 scheme and the same emissions as CNRM-ESM2-1." Exact emissions provenance (whether CEDS+BB4CMIP6 or other) not confirmed. Neither the MACv2-SP path nor the CEDS+BB4CMIP6 interactive path — ✗dev. |
| SI | Aerosol — sulphate indirect | Model-dependent | — | ✗dev | TV | Indirect effects included in the prescribed monthly TACTIC_v2-derived AOD fields, but non-standard provenance | Michou et al. 2020 | As SD — TACTIC_v2 offline fields |
| BC | Black carbon | CEDS + BB4CMIP6 / MACv2-SP | — | ✗dev | TV | As SD — included in TACTIC_v2 offline monthly AOD (5 aerosol types bundled) | Michou et al. 2020 | |
| OC | Organic carbon | CEDS + BB4CMIP6 / MACv2-SP | — | ✗dev | TV | As SD | Michou et al. 2020 | |
| MD | Mineral dust | Model-dependent | — | ✗dev | TV | Dust AOD included in TACTIC_v2 offline monthly fields (same bundle as SD/BC/OC); driven by CNRM-ESM2-1 interactive scheme — not Kinne 2013 fixed climatology | Voldoire et al. 2019; Michou et al. 2020 | Voldoire 2019 §3.2: five tropospheric aerosol categories (sulfate, BC, organic matter, sea salt, and dust) precomputed from TACTIC interactive scheme run. Michou 2020 confirms dust and sea-salt are part of TACTIC_v2 AOD. |
| SS | Sea salt | Model-dependent | — | ✗dev | TV | Sea-salt AOD included in TACTIC_v2 offline monthly fields — not Kinne 2013 fixed climatology | Voldoire et al. 2019; Michou et al. 2020 | As MD — both natural aerosol types computed interactively in TACTIC_v2 AMIP run and prescribed as monthly varying AOD in CM6-1. |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ✗dev | FXk | Fixed present-day land cover (ECOCLIMAP-II); no LUH2 applied | Voldoire et al. 2019 | Voldoire 2019 §3.2: "uses a time‐invariant distribution of land‐cover, which is based on ECOCLIMAP‐II (Faroux et al., 2013), and thus does not follow the recommendation of Eyring et al. (2016) to account for land use and land cover change forcings." |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ✓std | TV | Matthes et al. 2017 yearly global averages of total solar irradiance | Voldoire et al. 2019 | Voldoire 2019 §3.2: "Yearly global averages of the total solar irradiance forcing were similarly used (Matthes et al., 2017)." |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ✓std | TV | Thomason et al. 2018 official CMIP6 stratospheric aerosol dataset adapted for 550 nm | Voldoire et al. 2019 | Voldoire 2019 §3.2: "uses the official CMIP6 data set adapted for the 550‐nm wavelength (Thomason et al., 2018)." Michou 2020 §2: "stratospheric aerosol extinction, surface area density, and volume density are based on the work of Thomason et al. (2018)." |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | |

### Deviations from Eyring 2016 standard protocol
- **O = ~**: Linearized semi-interactive stratospheric ozone (prognostic O3 with precomputed chemistry rates from CNRM-ESM2-1) + prescribed CCMI tropospheric ozone. Neither fully prescribed (✓std) nor fully interactive (＋exc). New scheme in CNRM-CM6, distinct from CMIP5 MOBIDIC.
- **SD/SI/BC/OC/MD/SS = ✗dev**: All six aerosol types prescribed as monthly TACTIC_v2-derived AOD fields (five tropospheric categories: sulfate, BC, organic matter, sea salt, dust). Neither MACv2-SP nor CEDS+BB4CMIP6 interactive. Center-specific offline aerosol approach driven by CMIP6 anthropogenic/BB emissions in a CNRM-ESM2-1 AMIP-type run.
- **LU = ✗dev**: Fixed present-day land cover (ECOCLIMAP-II); LUH2 not applied — explicitly stated deviation from Eyring 2016 recommendation.

### Notes on CMIP5 lineage
- CMIP5 CNRM-CM5: MOBIDIC 2-D interactive ozone (＋exc), LMDZ-INCA offline aerosols (✗dev), LU excluded (✗dev), VL=Ammann2007 (✗dev). CMIP6 CNRM-CM6-1 changes the ozone scheme to linearized (partially interactive, ~) and continues with offline-generated aerosol AOD (still ✗dev but from TACTIC_v2 not LMDZ-INCA).
- The linearized ozone scheme is an improvement over LMDZ-INCA offline (which used pre-computed fields not derived from an interactive model), but still deviates from the purely-prescribed CCMI standard.

## Open questions
1. **TACTIC_v2 anthropogenic emissions**: Voldoire 2019 states "CMIP6 surface emissions of anthropogenic and biomass burning emissions of short-lived climate forcers" — this is consistent with CEDS+BB4CMIP6 but the specific dataset names are not explicitly stated.

## Provenance
- Stage 7 workflow run ID: wf_e2b2d348-b4e (2026-06-23); 31 agents; 11/14 confirmed, 3 killed
- Key sources: Michou et al. 2020 (doi:10.1029/2019MS001816); Voldoire et al. 2019 (doi:10.1029/2019MS001770); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)
- **CMIP5 paper read (2026-06-27)**: Voldoire et al. 2012, *Clim Dyn* 40:2091 (CNRM-CM5.1). Confirms CMIP5 behaviour: SS/MD=FXc (fixed pre-industrial optical depths), VL=Ammann2007, LU=not taken into account, SO="as specified by CMIP5". These are CMIP5 characteristics only — inference to CNRM-CM6-1 is tenuous; G/MD/SS/LU/SO/VL remain unconfirmed for CMIP6 without the primary CMIP6 references (Voldoire 2019; Michou 2020), which are not in /resources/.
- **Second-pass PDFs read (2026-06-27)**: Voldoire et al. 2019 *JAMES* doi:10.1029/2019MS001683 and Michou et al. 2020 *JAMES* doi:10.1029/2019MS001816. Confirmed: G=✓std (Meinshausen 2017 option 2); SO=✓std (Matthes 2017 yearly TSI); VL=✓std (Thomason 2018 CMIP6 strat. AOD at 550 nm); LU=✗dev (ECOCLIMAP-II fixed PD land cover, explicitly deviates from Eyring 2016); MD=✗dev and SS=✗dev (dust and sea-salt AODs included in TACTIC_v2 monthly bundle, not Kinne 2013 climatology). All 14 forcing components now resolved.
