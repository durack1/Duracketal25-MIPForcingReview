<!-- CMIP6 forcing record — FGOALS-g3 (CAS). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# FGOALS-g3 — CAS (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** GAMIL3 atmosphere (2°, L26, top ~36 km — LOWER TOP than FGOALS-f3-L) + CLM4 land + LICOM3 ocean + CICE6. AOGCM. CAS/LASG. Lower vertical resolution and model top compared to FGOALS-f3-L.
- **Primary documentation paper(s):** Li et al. 2020 (*JAMES* doi:10.1029/2019MS002012); Li et al. 2020 (*JGR-Atmos* doi:10.1029/2020JD032574) — GAMIL3 atmospheric component

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** GHG concentrations with latitudinal changes and seasonality. | Meinshausen et al. 2017 | Li 2020 JAMES (verbatim): "greenhouse gases (GHGs) concentrations with latitudinal changes and seasonality (Meinshausen et al., 2017)". |
| O  | Ozone | ✓std | TV | **CMIP6 CCMI prescribed ozone** (standard, no interactive chemistry). Lower model top (L26, ~36km) did NOT trigger deviation. | Keeble et al. 2021 | Keeble 2021 (verbatim): "FGOALS-g3 does not include an interactive chemistry module, and ozone is prescribed in the stratosphere and troposphere following the recommendations by CMIP6." FGOALS-g3 is in Keeble 2021 Table 1. |
| SD | Aerosol — sulphate direct | ✓std | TV | **MACv2-SP** (Stevens et al. 2017) — prescribed anthropogenic aerosol optical properties. | Stevens et al. 2017 | Li 2020 JAMES: "anthropogenic aerosol optical properties and an associated Twomey effect (Stevens et al., 2017)". Li 2020 JGR GAMIL3 Table 1: "MACv2-SP (Shi et al., 2019; Stevens et al., 2017)". |
| SI | Aerosol — sulphate indirect | ✓std | TV | **MACv2-SP** Twomey effect (Stevens et al. 2017). Background Nc multiplied by factor r calculated from MACv2-SP. | Stevens et al. 2017 | Li 2020 JAMES: "associated Twomey effect (Stevens et al., 2017)". Li 2020 JGR GAMIL3: MACv2-SP rNc used for cloud optical properties. |
| BC | Black carbon | ✓std | TV | **MACv2-SP** prescribed — BC included in MACv2-SP anthropogenic aerosol optical properties. | Stevens et al. 2017 | BC/OC are subsumed within MACv2-SP anthropogenic aerosol prescription. No separate BC/OC field. |
| OC | Organic carbon | ✓std | TV | **MACv2-SP** prescribed — OC included in MACv2-SP anthropogenic aerosol optical properties. | Stevens et al. 2017 | BC/OC subsumed within MACv2-SP. No separate OC field. |
| MD | Mineral dust | ✗dev | FXc | **Constant background AOD = 0.14** assumed for all natural aerosols (not Kinne 2013). Pre-industrial year-1850 prescribed Nc used for cloud interactions. | Li et al. 2020 JGR | Li 2020 JGR GAMIL3: "a constant background aerosol optical depth of 0.14 (default value) is assumed for natural aerosols". MD and SS not distinguished; lumped into constant natural background. |
| SS | Sea salt | ✗dev | FXc | **Constant background AOD = 0.14** assumed for all natural aerosols (not Kinne 2013). | Li et al. 2020 JGR | Same as MD; SS not separately treated — lumped constant natural aerosol background. |
| LU | Land-use change | ✓std | TV | **LUH2** (Hurtt et al. 2017). | Hurtt et al. 2017 | Li 2020 JAMES (verbatim): "land use changes (Hurtt et al., 2017)". |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** monthly mean TSI (SOLARIS-HEPPA). | Matthes et al. 2017 | Li 2020 JAMES (verbatim): "monthly mean total solar irradiance (TSI) (Matthes et al., 2017)". |
| VL | Volcanic aerosols | ✓std | TV | **CMIP6 historical stratospheric aerosols** (standard dataset, consistent with Thomason 2018/IACETH). | Thomason et al. 2017 | Li 2020 JAMES: "historical stratospheric aerosols" listed as part of "forcings recommended by CMIP6". Li 2020 JGR: stratospheric aerosols only in CMIP6 forcings (not CMIP5). |
| FC | Flux corrections | n/a | n/a | None | | |

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); confirmed: O=✓std (Keeble 2021 verbatim); all other forcing unconfirmed
- Key sources: Keeble et al. 2021 (*ACP* doi:10.5194/acp-21-5015-2021); Li et al. 2020 (*JAMES* doi:10.1029/2019MS002010, not extracted in Stage 16)

## Notes
- Li et al. 2020 (*JAMES* doi:10.1029/2019MS002012) explicitly lists all CMIP6 forcing datasets: TSI (Matthes 2017), GHGs (Meinshausen 2017), ozone, anthropogenic aerosol optical properties + Twomey effect (Stevens/MACv2-SP 2017), land use (Hurtt 2017), historical stratospheric aerosols.
- Li et al. 2020 (*JGR-Atmos* doi:10.1029/2020JD032574) GAMIL3 paper confirms MACv2-SP implementation (Table 1) and describes natural aerosol treatment: constant background AOD = 0.14 (not Kinne 2013 standard) for MD and SS, hence ✗dev.
- Extra forcing unique to FGOALS-g3: anthropogenic groundwater exploitation from 1965–2014 (Zeng et al. 2017) applied to the land component — this exceeds standard CMIP6 protocol.
- BC and OC are subsumed within MACv2-SP; no separate CEDS/BB4CMIP6 emission-based BC/OC treatment.
