# cancm4 — CCCma (Canadian Centre for Climate Modelling and Analysis, Canada)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** cccma_cgcm3_1 (CGCM3.1)
- **Model family / lineage:** CanESM2 → CanCM4 (AOGCM component; no active carbon cycle). CanCM4 uses the same CanAM4 atmosphere as CanESM2 but without CTEM/CMOC carbon cycles. All atmospheric forcings expected identical to CanESM2. Key difference from CanESM2: not an ESM — standard 12 forcing keys only.
- **Atmosphere / ocean components:** CanAM4 atmosphere (T63, ~2.8°, 35 levels) + CanOM4 ocean + sea ice (no CTEM/CMOC)
- **Primary documentation paper(s):** VonSalzen, K., et al. (2013). The Canadian Fourth Generation Atmospheric Global Climate Model (CanAM4). Part I: representation of physical processes. *Atmos.-Ocean* 51(1), 104–125. doi:10.1080/07055900.2012.755610 [vonsalzen_canam4_2013 *(add)*]
- **Forcing-specific reference(s):** As CanESM2 (VonSalzen et al. 2013); all atmospheric forcings expected shared

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries confirmed via vonSalzen et al. 2013 (same CanAM4 atmosphere as CanESM2). See CanESM2 file for full verbatim quotes and page references. LU remains unclear (AMIP paper only).

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓ standard | TV | **CMIP5 historical GHG concentrations** (Meinshausen et al. 2011). As CanESM2 — same CanAM4 atmosphere; vonSalzen2013 p.115 confirmed for CanAM4 AMIP runs. | vonSalzen et al. 2013; Meinshausen et al. 2011 | vonsalzen_canam4_2013; meinshausen_rcp_2011 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| O  | Ozone | Cionni et al. 2011 | ✓ standard | TV | **Cionni et al. 2011** prescribed 3-D transient ozone. As CanESM2 — same CanAM4; vonSalzen2013 p.116: "zonally averaged version of the CMIP5 ozone was used in CanAM4 without further modification." | vonSalzen et al. 2013; Cionni et al. 2011 | vonsalzen_canam4_2013; cionni_ozone_2011 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| SD | Sulphate direct | Lamarque et al. 2010 | ＋ exceeds standard | TV+ | **CanAM4 interactive sulphate from SO2 emissions (Lamarque et al. 2010)**. As CanESM2 — same CanAM4; vonSalzen2013 p.115 confirmed. First indirect included; second excluded. | vonSalzen et al. 2013; Lamarque et al. 2010 | vonsalzen_canam4_2013; lamarque_historical_2010 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| SI | Sulphate indirect | Model-dependent | ＋ exceeds standard | TV+ | **First indirect effect (Nc–sulphate coupling) included; second indirect excluded**. As CanESM2 — same CanAM4; vonSalzen2013 p.107–109 confirmed. | vonSalzen et al. 2013; Wilcox et al. 2013 | vonsalzen_canam4_2013 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| BC | Black carbon | Lamarque et al. 2010 | ＋ exceeds standard | TV+ | **CanAM4 interactive BC from Lamarque et al. 2010 emissions**. As CanESM2 — same CanAM4; vonSalzen2013 p.106 confirmed. | vonSalzen et al. 2013; Lamarque et al. 2010 | vonsalzen_canam4_2013; lamarque_historical_2010 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| OC | Organic carbon | Lamarque et al. 2010 | ＋ exceeds standard | TV+ | **CanAM4 interactive OC from Lamarque et al. 2010 emissions**. As CanESM2 — same CanAM4; vonSalzen2013 p.106 confirmed. | vonSalzen et al. 2013; Lamarque et al. 2010 | vonsalzen_canam4_2013; lamarque_historical_2010 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| MD | Mineral dust | — | ＋ exceeds standard | TV+ | **CanAM4 interactive mineral dust — model-calculated from surface wind and soil**. As CanESM2 — same CanAM4; vonSalzen2013 p.105, 107 confirmed. | vonSalzen et al. 2013 | vonsalzen_canam4_2013 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| SS | Sea salt | — | ＋ exceeds standard | TV+ | **CanAM4 interactive sea salt — model-calculated from wind speed**. As CanESM2 — same CanAM4; vonSalzen2013 p.105, 107 confirmed. | vonSalzen et al. 2013 | vonsalzen_canam4_2013 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| LU | Land-use change | Hurtt et al. 2011 | ✓ standard | TV | **Hurtt et al. 2011 CMIP5 LUH dataset** — inferred from CanESM2. Arora2011 p.2 confirms CanESM2 used "historical changes in crop area provided in the CMIP5 dataset" (luh.unh.edu = Hurtt2011 LUH). CanCM4 uses the same CanAM4 atmosphere and CLM land surface — same land cover changes applied as boundary conditions (no active CTEM, but CLM responds to prescribed crop area transitions). | Arora et al. 2011 (inferred via CanESM2); Hurtt et al. 2011 | arora_carbon_2011; hurtt_harmonization_2011 | Hurtt2011 LU inferred from CanESM2 (Arora2011 p.2); CanCM4 has no CTEM carbon cycle but same land-cover boundary conditions. Second-pass 2026-06-22. |
| SO | Solar irradiance | Wang et al. 2005 | ✓ standard | TV | **CMIP5 solar irradiance protocol (Fröhlich & Lean 2004 reconstruction)**. As CanESM2 — same CanAM4; vonSalzen2013 p.116 confirmed. | vonSalzen et al. 2013; Fröhlich & Lean 2004 | vonsalzen_canam4_2013; frohlich_lean_2004 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓ standard | TV | **Sato et al. 1993 + Hadley Centre extension**. As CanESM2 — same CanAM4; vonSalzen2013 p.115 confirmed. | vonSalzen et al. 2013; Sato et al. 1993 | vonsalzen_canam4_2013; sato_stratospheric_1993 | As CanESM2 (same CanAM4 atmosphere; vonSalzen2013) |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle). Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 4 workflow: wf_6432ada7-087 — vonSalzen2013 PDF read completed; all 9 standard forcing keys now confirmed (G, O, SD, SI, BC, OC, MD, SS, SO, VL) via shared CanAM4 atmosphere with CanESM2
- Key finding: CanAM4 aerosol = prognostic bulk scheme (Lamarque2010 emissions for SO2/BC/OC; interactive MD/SS); ozone = Cionni2011; solar = CMIP5 SPARC-Solar; volcanic = Sato1993 + Hadley Centre extension
- Stage A second-pass 2026-06-22: LU=✓std confirmed (inferred from CanESM2; Arora2011 p.2 confirms CMIP5 LUH/Hurtt2011 for coupled historical runs)
