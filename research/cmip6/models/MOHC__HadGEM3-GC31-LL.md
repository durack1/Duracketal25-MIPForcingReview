<!-- CMIP6 forcing record — HadGEM3-GC31-LL (MOHC+NERC). Stage 11 workflow: wf_205a78ae-659 (2026-06-26) -->

# HadGEM3-GC31-LL — MOHC+NERC (UK)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** UM GA7.1 atmosphere (N96L85, ~135km, 85 levels, top ~85km) + NEMO3.6 ocean (ORCA1) + CICE6 sea ice + JULES land. AOGCM. GC31 = Global Coupled 3.1. **No interactive chemistry** — not in Keeble 2021 interactive list.
- **CMIP5 predecessor:** HadGEM2-CC/-ES (UKCA interactive chemistry in CC/ES streams)
- **Atmosphere / ocean components:** UM GA7.1 / NEMO3.6 ORCA1 + CICE6
- **Primary documentation paper(s):** Roberts et al. 2019, *GMD* doi:10.5194/gmd-12-4999-2019 [roberts_hadgem3_gc31_2019]; Walters et al. 2019, *GMD* doi:10.5194/gmd-12-1909-2019 [walters_ga7_2019]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** (UoM-CMIP-1-2-0). CO2 as spatially-constant scalar; CH4/N2O as prescribed surface concentrations. | Sellar et al. 2019 (for UKESM1 family); confirmed by Andrews et al. 2020 for GC3.1 | Confirmed via Mulcahy 2020 cross-reference — HadGEM3-GC31 and UKESM1 use identical GHG source. |
| O  | Ozone | ✓std | TV | **Hegglin et al. 2016 CCMI / UReading-CCMI prescribed ozone** — standard CMIP6 prescribed ozone (UReading-CCMI-1-0 expected). GC3.1-specific ozone-redistribution scheme applied to align with model thermal tropopause. | Roberts et al. 2019 (GMD) | Roberts 2019 (verbatim): "ozone concentration (Hegglin et al., 2016)." UReading-CCMI-1-0 source_id expected but not confirmed verbatim. GC3.1 NOT in Keeble 2021 interactive-chemistry list. |
| SD | Aerosol — sulphate direct | ✓std | TV | **GLOMAP-mode interactive** prognostic aerosol scheme consuming CEDS (Hoesly et al. 2018) anthropogenic SO2 emissions. **NOT prescribed MACv2-SP** (MACv2-SP used only for HighResMIP, not historical CMIP6). | Mulcahy et al. 2020; Walters et al. 2019 | Mulcahy 2020 (verbatim): "Both UKESM1 and GC3.1 employ the modal version of the Global Model of Aerosol Processes (GLOMAP-mode...) two-moment aerosol microphysics scheme." Roberts 2019 confirms MACv2-SP only for HighResMIP: "The HighResMIP protocol recommends the use of the MACv2-SP scheme...used here in place of the prognostic GLOMAP-mode scheme." |
| SI | Aerosol — sulphate indirect | ✓std | TV | **GLOMAP-mode interactive** indirect effects (first + second indirect). | Mulcahy et al. 2020 | GLOMAP-mode computes aerosol-cloud interactions interactively. |
| BC | Black carbon | ✓std | TV | **GLOMAP-mode** consuming CEDS+BB4CMIP6 emissions. BC/OC from biomass burning **scaled ×2** per Johnson et al. 2016 calibration. | Mulcahy et al. 2020 | Mulcahy 2020 (verbatim): "biomass burning emissions are taken from van Marle et al. (2017)" and "Biomass burning emissions of BC and OC are scaled by a factor of 2 following the detailed evaluation of biomass burning aerosol in Johnson et al. (2016)." BB4CMIP6 = VUA-CMIP-BB4CMIP6-1-2. |
| OC | Organic carbon | ✓std | TV | As BC — GLOMAP-mode, CEDS+BB4CMIP6 biomass burning ×2. | Mulcahy et al. 2020 | |
| MD | Mineral dust | ? | ? | GA7.1 GLOMAP-mode species listed as "sulfate, black carbon, organic carbon and sea salt" (Walters 2019) — dust not in primary list. MD treatment uncertain. | Walters et al. 2019 | GLOMAP-mode in GA7.1 may use prescribed dust climatology or handle dust separately. Not confirmed from Stage 11 sources. |
| SS | Sea salt | ✓std | TV | **GLOMAP-mode** interactive sea salt emission from wind-driven surface flux. | Walters et al. 2019; Mulcahy et al. 2020 | Sea salt is one of the explicit GLOMAP-mode prognostic species in GA7.1. |
| LU | Land-use change | ✓std | TV | **LUH2 v2.1h** (Hurtt et al. 2020) ingested via JULES. | Sellar et al. 2019; Andrews et al. 2020 | Confirmed at medium confidence — LUH2 standard stated but exact v2.1h version string not directly quoted from a GC31-specific primary source. |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** (SOLARIS-HEPPA). | Roberts et al. 2019 | Roberts 2019 (verbatim): "solar (Matthes et al., 2017)" among listed CMIP6 forcing datasets. |
| VL | Volcanic aerosols | ✓std | TV | **CMIP6 stratospheric aerosol climatology = IACETH-SAGE3lambda-3-0-0** (Thomason et al. 2018 satellite + Arfeuille et al. 2014 chemical transport modelling lineage). Prescribed, not interactive. | Sellar et al. 2019; Mulcahy et al. 2020 | Sellar 2019 (verbatim, confirmed for both families by Mulcahy 2020): "prescribed using the CMIP6 stratospheric aerosol climatology...based on the climatology described by Thomason et al. (2018) and use a combination of satellite observations from the period 1979-2014 and chemical transport modelling (Arfeuille et al., 2014)." Source_id IACETH-SAGE3lambda-3-0-0 not printed verbatim but description uniquely identifies this dataset. |
| FC | Flux corrections | n/a | n/a | None | | |

### Deviations from Eyring 2016 standard protocol
- **BC/OC = ✓std with calibration note**: Biomass burning BC/OC from BB4CMIP6 scaled ×2 per Johnson et al. 2016 — a published correction/calibration, not an arbitrary deviation. Anthropogenic BC/OC from CEDS (no scaling).
- **MD = ?**: Dust treatment in GA7.1 GLOMAP-mode unclear from Stage 11 sources.
- **O = ✓std (redistribution scheme)**: Standard CCMI ozone with a model-specific ozone-redistribution scheme for thermal tropopause alignment — not a deviation from the prescribed-ozone standard.

## Provenance
- Stage 11 workflow run ID: wf_205a78ae-659 (2026-06-26); 28 agents; 11/14 confirmed, 3 killed
- Key sources: Roberts et al. 2019 (doi:10.5194/gmd-12-4999-2019); Walters et al. 2019 (doi:10.5194/gmd-12-1909-2019); Mulcahy et al. 2020 (doi:10.5194/gmd-13-6383-2020); Sellar et al. 2019 (doi:10.1029/2019MS001739); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)
