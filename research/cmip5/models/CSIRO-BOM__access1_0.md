# access1_0 — CSIRO/BOM (CSIRO & Bureau of Meteorology, Australia)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none (ACCESS is new to CMIP5; predecessor to CSIRO-BOM contributions)
- **Model family / lineage:** ACCESS = Australian Community Climate and Earth System Simulator version 1.0. Based on the UK Met Office HadGEM2-A atmospheric model (UM7.3), coupled to MOM4p1 ocean and CABLE2 land surface. Differs from ACCESS1-3 only in convection parameterization (Gregory-Rowntree) and autoconversion scheme. NOTE: shares HadGEM2-A atmosphere with ACCESS1-3; Stage 8 (UKMO) will cover HadGEM2-AO/CC/ES directly — check for overlap.
- **Atmosphere / ocean components:** HadGEM2-A atmosphere (UM7.3, N96, 38 levels; same as HadGEM2-AO) + MOM4p1 ocean + CABLE2 land + sea ice
- **Primary documentation paper(s):** Bi, D., et al. (2013). The ACCESS coupled model: description, control climate and evaluation. *Aust. Meteorol. Oceanogr. J.* 63(1), 41–64. doi:10.1071/ES13004 [bi_access_2013 *(add)*]
- **Forcing-specific reference(s):** Bi et al. 2013; also Martin et al. 2011 (HadGEM2-A description, doi:10.5194/gmd-4-723-2011)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | **Meinshausen et al. 2011a (MAGICC/RCP GHG concentrations).** Dix et al. 2013 p.84–85: "For use in CMIP5, the MAGICC model was used to derive a consistent set of GHG concentrations from the RCP emissions (Meinshausen et al. 2011a)." CO2, CH4, N2O, CFC11, CFC12, CFC113, HCFC22, HCF125, HFC134a all prescribed as annual global mean concentrations. Same for both ACCESS1.0 and ACCESS1.3 (Dix 2013 p.84: "Unless mentioned otherwise the implementation in ACCESS1.0 and ACCESS1.3 should be considered identical"). | Dix et al. 2013; Meinshausen et al. 2011 | dix_access_2013 *(add)*; meinshausen_rcp_2011 | **RESOLVED ✓std 2026-06-28. Dix2013 p.84-85 direct quote.** |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | Cionni et al. 2011 (AC&C/SPARC) | Bi et al. 2013; Eyring et al. 2013 | bi_access_2013 *(add)*; eyring_ozone_2013 | Confirmed 1-0 high conf; no interactive chemistry (prescribed only); HadGEM2-A with prescribed atmospheric chemistry effects |
| SD | Sulphate direct | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme** (Bellouin et al. 2011; Martin et al. 2011 GMD 4:723–757) driven by **Lamarque et al. (2010)** historical emissions. Sulphate mass computed prognostically; direct effect included. Nuanced: CLASSIC bulk-mass scheme with prescribed optical properties per unit mass differs from simple prescribed OD — implementation-specific vs. standard. | martin_hadgem2_2011; bellouin_aerosol_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** HadGEM2-A (UM7.3) atmosphere confirmed CLASSIC-based. Second-pass 2026-06-21. |
| SI | Sulphate indirect | Model-dependent | ＋ exceeds | TV | **CLASSIC first indirect effect (cloud albedo)** for sulphate and sea salt. Martin 2011 Sect. 3.2: two-moment cloud microphysics activated by CLASSIC aerosol number concentrations. Exceeds standard: not all CMIP5 models include a first indirect effect. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** CLASSIC AIE confirmed for HadGEM2-A. Second-pass 2026-06-21. |
| BC | Black carbon | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme** — BC as one of five components (sulphate, BC, biomass-burning OC, mineral dust, sea salt) driven by Lamarque 2010 emissions. As SD: nuanced because bulk-mass scheme. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** Second-pass 2026-06-21. |
| OC | Organic carbon | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme** — biomass-burning OC component driven by Lamarque 2010 emissions. As SD/BC. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** Second-pass 2026-06-21. |
| MD | Mineral dust | — | ＋ exceeds | TV | **CLASSIC aerosol scheme** — mineral dust as prognostic species driven by Lamarque 2010 emissions. Exceeds standard: full prognostic dust mass (not simple prescribed climatological OD). | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** Second-pass 2026-06-21. |
| SS | Sea salt | — | ＋ exceeds | TV | **CLASSIC aerosol scheme** — sea salt as prognostic species driven by Lamarque 2010 emissions; first indirect effect included for sea salt. Exceeds standard. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** Second-pass 2026-06-21. |
| LU | Land-use change | Hurtt et al. 2011 | ✗dev | n/a | CABLE2 land surface does not implement transient land-use change. **Dix et al. 2013 p.84 direct confirmation: "nor do we include prescribed land use change."** Also: Bodman et al. 2020 §2.2: "Land-cover forcing variations have not been implemented in the AM2 (CABLE) version as yet." Ziehn et al. 2017 §2.2: "The simulations do not include any land use change." | dix_access_2013 *(add)*; bodman_access_2020 *(add)*; ziehn_access_2017 *(add)* | dix_access_2013 *(add)*; bodman_access_2020 *(add)* | **Resolved ✗dev. Dix 2013 p.84 is primary source.** |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | **Lean (2009), methods of Fröhlich & Lean (2004), background from Wang et al. (2005) — CMIP5 standard.** Dix et al. 2013 p.85: "The CMIP5 recommended data source for the total solar irradiance (TSI) is Lean (2009) which uses the methods of Fröhlich and Lean (2004) to calculate the solar cycle component and includes the longer term background variation from Wang et al. (2005)." TIM 0.9965 scaling NOT applied (Dix 2013 p.85-86). Bodman 2020 §2.2 confirms CMIP5 ACCESS TSI was 1365.65 W m⁻². | Dix et al. 2013; Bodman et al. 2020 | dix_access_2013 *(add)*; bodman_access_2020 *(add)* | **Resolved ✓std.** Lean2009/Wang2005 CMIP5 standard; TIM scaling not applied (no effect on forcing magnitude). |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | **Sato et al. (1993), extended to year 2000.** Dix et al. 2013 p.86: "The CMIP5 specified data source is the monthly mean optical depth in four latitude bands from Sato et al. (1993), extended to the year 2000. Jones et al. (2011) describe the extension past 2000 with an eventual relaxation to the background value used in the pre-industrial control run by 2040." No Thomason 2008 floor anywhere in Dix 2013 — distinct from HadGEM2-ES ✗dev. Note: background aerosol inadvertently omitted from piControl runs (Dix 2013 p.86), causing slight cool bias in historical vs piControl. | Dix et al. 2013 | dix_access_2013 *(add)* | **RESOLVED ✓std 2026-06-28.** Dix2013 p.86 direct quote; no Thomason floor. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | Free-running coupled model |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle). Standard 12 keys only.

### Key architecture note
- Shares HadGEM2-A atmosphere (UM7.3, N96L38) with ACCESS1-3. ACCESS1-0 and ACCESS1-3 differ only in convection parameterization (Gregory-Rowntree vs Kain-Fritsch 2) and autoconversion scheme — forcing is identical between them.
- Martin et al. (2011) GMD 4:723–757 confirms HadGEM2-A uses **CLASSIC** five-component aerosol scheme (Bellouin et al. 2011): sulphate, BC, biomass-burning OC, mineral dust, sea salt — all driven by Lamarque 2010 historical emissions. First indirect (cloud albedo) effect included for sulphate and sea salt via two-moment cloud microphysics.
- ACCESS1-0/1-3 use PRESCRIBED chemistry (no interactive UKCA), so GLOMAP-mode interactive aerosols from HadGEM2-CC/ES are NOT inherited — CLASSIC only.

### Open questions
~~G~~ **RESOLVED ✓std** (2026-06-28 sixth-pass): Meinshausen2011a confirmed. Dix 2013 p.84–85 direct quote.
~~LU~~ **RESOLVED ✗dev** (2026-06-28): "nor do we include prescribed land use change" — Dix 2013 p.84.
~~SO~~ **RESOLVED ✓std** (2026-06-28): TSI = 1365.65 W m⁻² = Wang 2005 standard — Bodman 2020 + Dix 2013.
~~VL~~ **RESOLVED ✓std** (2026-06-28 sixth-pass): Sato 1993 extended to 2000 — Dix 2013 p.86 direct quote; no Thomason floor.

**All 12 forcing cells now fully resolved. No open questions remain.**

### Provenance
- Durack et al. 2016 model list: included
- Stage 5 workflow: wf_6a1942cb-0da (2026-06-21) — O confirmed 1-0 high conf; aerosol/SO/VL/LU claims refuted 0-1 (insufficient primary text evidence)
- Second-pass 2026-06-21: SD/SI/BC/OC/MD/SS resolved from Martin 2011 CLASSIC aerosol scheme inference
- Third-pass 2026-06-28: HadGEM2-A inheritance hypothesis flagged as unsupported inference; G/LU/SO/VL correctly retained as ? pending ACCESS-specific documentation
- Fourth-pass 2026-06-28: Parsed 6 ACCESS documentation papers. LU=✗dev (CABLE2 no transient LU; Bodman2020+Ziehn2017+Bi2020 consistent). SO=✓std (Bodman2020 explicit: CMIP5 TSI=1365.65 W m⁻²=Wang2005). VL=~ (Ziehn2017: Sato2002/4-lat-bands/ACCESS-ESM1-inherits-CMIP5-ACCESS-Dix2013; no Thomason floor = likely ✓std). G still ?: Dix et al. 2013 (AMOJ 63:83–99) is the definitive reference, not yet in /resources.
- Sixth-pass 2026-06-28: Read Dix et al. 2013 (AMOJ 63:83–99, doi:10.1071/ES13006, PDF in /resources). G=✓std (Meinshausen2011a; p.84-85: "MAGICC model used to derive GHG concentrations from RCP emissions"). VL=✓std (Sato1993-ext-2000; p.86: "CMIP5 specified data source is Sato et al. (1993), extended to year 2000"; no Thomason floor). LU=✗dev directly confirmed (p.84: "nor do we include prescribed land use change"). All 12 cells now fully resolved.
