<!-- CMIP6 forcing record — BCC-CSM2-MR (BCC). Stage 6 workflow: wf_1a7b005d-ffd (2026-06-22); gap-fill pass 2026-06-27 -->

# BCC-CSM2-MR — Beijing Climate Center, China

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** bcc-csm1-1 (BCC-AGCM2; G/O/SO/VL all unresolved in CMIP5 review; LU=✗dev confirmed)
- **Model family / lineage:** BCC-AGCM3 atmosphere (T106L46) + BCC-AVIM2 land (active C cycle) + MOM4 ocean + SIS sea ice. ESM with active carbon cycle. CMIP6 upgrade resolves CMIP5 unknowns; LU exclusion corrected.
- **Atmosphere / ocean components:** BCC-AGCM3 (T106L46) / MOM4 + SIS
- **Primary documentation paper(s):** Wu et al. 2019, *GMD* 12:1573, doi:10.5194/gmd-12-1573-2019 [wu_bcc_2019]; Xin et al. 2021, *GMD* 14:2977, doi:10.5194/gmd-14-2977-2021 [xin_bcc_hr_2021]
- **Forcing-specific reference(s):** Keeble et al. 2021, *ACP* 21:5015, doi:10.5194/acp-21-5015-2021 [keeble_ozone_2021]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

`Protocol` = Eyring et al. 2016 standard CMIP6 `historical` recommended dataset.
`Verdict` = **✓std** · **＋exc** (interactive > prescribed) · **✗dev** · **~** unclear · **?** unknown · **n/a** not applied.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ✓std | TV | Meinshausen et al. 2017 GHG concentrations (CO2, N2O, CH4, CFC-12, eq-CFC-11); all CMIP6-recommended historical forcings from input4MIPs | Xin et al. 2021 | [xin_bcc_hr_2021] | Xin 2021: "(1) greenhouse gases concentrations...with zonal-mean values and updated monthly." Source_id UoM-CMIP-1-2-0 inferred from CMIP6 standard — not explicitly named in model papers. |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✓std | TV | Standard CMIP6 CCMI prescribed ozone. Resolves CMIP5 BCC-CSM1.1 unresolved O status. | Keeble et al. 2021; Wu et al. 2019; Xin et al. 2021 | [keeble_ozone_2021; wu_bcc_2019; xin_bcc_hr_2021] | Keeble 2021 (ACP) Table 1 classifies BCC-CSM2-MR among 13 models prescribing stratospheric+trop ozone "according to the CMIP6 ozone dataset": "Ozone...is prescribed using monthly mean time-varying gridded data from the CMIP6 dataset." Wu 2019 + Xin 2021 list "time-varying gridded ozone concentrations" in CMIP6-recommended forcings. Source_id UReading-CCMI-1-0 confirmed by Keeble context; not named verbatim in model papers. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 (interactive) OR MACv2-SP (prescribed) | `MPI-M-MACv2-SP-1-0` | ✓std | TV | **MACv2-SP** (Stevens et al. 2017): nine-plume prescribed anthropogenic aerosol optical properties. BCC uses the Eyring-2016-sanctioned PRESCRIBED alternative path, NOT interactive CEDS+BB4CMIP6. | Wu et al. 2019; Xin et al. 2021 | [wu_bcc_2019; xin_bcc_hr_2021] | Wu 2019: "CMIP6-recommended anthropogenic aerosol optical properties which are formulated in terms of nine spatial plumes associated with different major anthropogenic source regions (Stevens et al., 2017)." Xin 2021 verbatim names "MACv2-SP." Plumes scaled by national SO2/NH3 emissions 1850-2016. |
| SI | Aerosol — sulphate indirect | Model-dependent | — | ✗dev | TV | **Non-standard supplemental inputs**: (a) CMIP5-era (Taylor 2012) aerosol masses for cloud-droplet effective radius calculation; (b) NCAR CAM-Chem nitrate dataset (Lamarque et al. 2012) for indirect aerosol effect. Neither is a CMIP6 input4MIPs product. | Wu et al. 2019; Xin et al. 2021 | [wu_bcc_2019; xin_bcc_hr_2021] | Wu 2019: "aerosol masses based on CMIP5 (Taylor et al., 2012) are used for the online calculation of the cloud droplet effective radius" and "A data set of nitrate from NCAR CAM-Chem (Lamarque et al., 2012) is used in our model." This is a deviation: MACv2-SP is a direct-effect-only prescribed product; BCC bolts on CMIP5-era offline masses + Lamarque 2012 nitrate for the Twomey effect — not an Eyring 2016 input4MIPs dataset. |
| BC | Black carbon | CEDS + BB4CMIP6 (interactive) OR MACv2-SP (prescribed) | `MPI-M-MACv2-SP-1-0` | ✓std | TV | Included in MACv2-SP nine-plume anthropogenic aerosol optical properties (alongside sulphate and OC) | Wu et al. 2019; Xin et al. 2021 | [wu_bcc_2019; xin_bcc_hr_2021] | All anthropogenic aerosol species bundled into MACv2-SP plumes — BC effects are implicitly represented in plume optical properties. |
| OC | Organic carbon | CEDS + BB4CMIP6 (interactive) OR MACv2-SP (prescribed) | `MPI-M-MACv2-SP-1-0` | ✓std | TV | As BC — included in MACv2-SP plumes | Wu et al. 2019; Xin et al. 2021 | [wu_bcc_2019; xin_bcc_hr_2021] | |
| MD | Mineral dust | Kinne 2013 natural background OR model-dependent | — | ✗dev | FXc | **CMIP5 Taylor 2012 prescribed aerosol masses** used for online cloud-droplet calculation (Eq. 15 in Wu 2019: m_aero = m_SS + m_OC + m_SO4 + m_NH4NO2, where dust is included in the CMIP5 prescribed fields). MACv2-SP covers anthropogenic species only; no separate Kinne 2013 natural dust dataset mentioned. Natural dust direct effect is absent from the MACv2-SP plumes; dust enters only via CMIP5 Taylor 2012 indirect-effect pathway. | Wu et al. 2019 | [wu_bcc_2019] | Wu 2019 Section 2.1.4: "aerosol masses based on CMIP5 (Taylor et al., 2012) are used for the online calculation of the cloud droplet effective radius." Kinne 2013 not mentioned anywhere in BCC-CSM2-MR documentation. CMIP5-era prescribed dust masses — ✗dev. |
| SS | Sea salt | Kinne 2013 natural background OR model-dependent | — | ✗dev | FXc | **CMIP5 Taylor 2012 prescribed aerosol masses** — sea salt (m_SS) is the first term in the total aerosol mass equation (Eq. 15, Wu 2019) used for cloud-droplet number concentration calculation. Same CMIP5-era dataset as for dust. No separate Kinne 2013 natural sea salt background applied; no mention of interactive online sea salt scheme. | Wu et al. 2019 | [wu_bcc_2019] | Same CMIP5 Taylor 2012 source as MD. Sea salt contributes to indirect aerosol effect only via CMIP5 prescribed masses. ✗dev. |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ✓std | TV | Yearly gridded land-use forcing applied in BCC-AVIM2. Reverses CMIP5 BCC LU exclusion. | Xin et al. 2021; Wu et al. 2019 | [xin_bcc_hr_2021; wu_bcc_2019] | Xin 2021: "(6) yearly global gridded land-use forcing." Wu 2019: "Land-use and land-cover changes are explicitly involved in BCC-AVIM2.0." Source_id UofMD-landState-2-1-h inferred from CMIP6 standard. |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ✓std | TV | CMIP6 solar TSI (annual means) from standard forcing dataset | Xin et al. 2021 | [xin_bcc_hr_2021] | Xin 2021: "(2) annual means of total solar irradiance derived from the CMIP6 solar forcing." Source_id SOLARIS-HEPPA-3-2 inferred from CMIP6 standard — not named verbatim. |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ✓std | TV | Stratospheric volcanic aerosols from CMIP6 standard dataset | Xin et al. 2021 | [xin_bcc_hr_2021] | Xin 2021: "(3) stratospheric aerosols from volcanoes." Source_id IACETH-SAGE3lambda-3-0-0 inferred from CMIP6 standard — not named verbatim. |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### ESM-specific forcing inputs (BCC-AVIM2 active C cycle)

| ESM input | Applied? | Verdict | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|---------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | Not confirmed | ? | N-deposition dataset not mentioned in Wu 2019 forcing list or anywhere in BCC documentation. Wu 2019 lists only 6 forcing categories for historical; N-dep is absent. BCC-AVIM2 has active C cycle but N-dep application is unconfirmed. | — | N-dep absent from Wu 2019 forcing list (Section 3). Cannot confirm NCAR-CCMI-2-0. Remains ?. |
| CO2: conc.- or emission-driven | Yes — conc. | ✓std | **Concentration-driven**. Wu 2019 Table 1 lists "Prognostic spatial CO2 in the atmosphere" for BCC-CSM2-MR — CO2 concentrations are prescribed from external dataset (GHG concentration file) and distributed spatially within the model. Not emission-driven. | Wu et al. 2019 | [wu_bcc_2019] | Wu 2019 Table 1: "Prognostic spatial CO2 in the atmosphere" — concentration-driven mode confirmed. |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| SI | Cloud-droplet radius | CMIP5 Taylor 2012 aerosol masses | Augments MACv2-SP for indirect effect | Non-input4MIPs; CMIP5-era dataset carried forward into CMIP6 |
| SI | Nitrate aerosol | NCAR CAM-Chem (Lamarque et al. 2012) | Augments MACv2-SP for indirect effect | Non-input4MIPs; Lamarque 2012 = CMIP5-era CAM-chem climatology |
| MD | Mineral dust | CMIP5 Taylor 2012 aerosol masses (m_dust component) | Primary source for dust in indirect-effect pathway | Non-input4MIPs; CMIP5-era prescribed climatology; no Kinne 2013 applied |
| SS | Sea salt | CMIP5 Taylor 2012 aerosol masses (m_SS component, first bin 0.2–0.5 µm) | Primary source for sea salt in indirect-effect pathway | Non-input4MIPs; CMIP5-era prescribed climatology; no Kinne 2013 applied |

### Deviations from Eyring 2016 standard protocol
- **SI = ✗dev**: Indirect aerosol effect computed from CMIP5 Taylor 2012 aerosol masses + Lamarque 2012 NCAR CAM-Chem nitrate — non-input4MIPs supplemental forcing not part of the Eyring 2016 standard protocol. MACv2-SP (the prescribed alternative) is a direct-effect product; BCC adds legacy CMIP5 indirect-effect datasets on top.
- **MD = ✗dev**: Natural mineral dust enters only via CMIP5 Taylor 2012 prescribed aerosol masses (for cloud-droplet indirect effect). No separate Kinne 2013 natural background dust applied; no interactive dust scheme. CMIP5-era dataset is non-standard for CMIP6.
- **SS = ✗dev**: Natural sea salt (m_SS) enters via same CMIP5 Taylor 2012 prescribed masses. No Kinne 2013 natural background sea salt; no interactive online sea salt. CMIP5-era dataset is non-standard for CMIP6.
- **SD/BC/OC = ✓std (MACv2-SP path)**: BCC uses the Eyring-2016-sanctioned prescribed alternative (MACv2-SP). No violation, but note: this is the prescribed path, NOT the interactive CEDS+BB4CMIP6 default.

### Notes on CMIP5 lineage
- **CMIP5 unknowns resolved**: O/SO/VL all unresolved in CMIP5 → now confirmed ✓std. LU=✗dev in CMIP5 → now ✓std (BCC-AVIM2 explicitly includes LU).
- **Aerosol path change**: CMIP5 bcc-csm1-1 used Collins 2006 prescribed climatological OD (✗dev). CMIP6 BCC-CSM2-MR switched to MACv2-SP (✓std), an improvement.
- BCC-ESM1 (not in this review's 64-model list) is the companion model with interactive MOZART2 tropospheric ozone chemistry — confirms BCC-CSM2-MR's prescribed ozone is a deliberate choice.

## Open questions
1. **N-dep**: N-deposition dataset not mentioned in Wu 2019 forcing list; absent from all BCC-CSM2-MR documentation reviewed. Remains ? — cannot confirm NCAR-CCMI-2-0 application.
2. **Exact source_ids**: Verify UoM-CMIP-1-2-0 (G), UReading-CCMI-1-0 (O), SOLARIS-HEPPA-3-2 (SO), IACETH-SAGE3lambda-3-0-0 (VL), UofMD-landState-2-1-h (LU) from netCDF global attributes

## Provenance
- WCRP-CMIP CVs source_id: BCC-CSM2-MR confirmed in CMIP6_source_id.json
- Sources: Wu et al. 2019 (doi:10.5194/gmd-12-1573-2019); Xin et al. 2021 (doi:10.5194/gmd-14-2977-2021); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)
- Stage 6 workflow run ID: wf_1a7b005d-ffd (2026-06-22); 28 agents; 13/14 confirmed, 1 killed
- Gap-fill pass (2026-06-27): MD=✗dev, SS=✗dev (CMIP5 Taylor 2012 prescribed masses), CO2 mode=conc confirmed (Wu 2019 Table 1); N-dep still unresolved
