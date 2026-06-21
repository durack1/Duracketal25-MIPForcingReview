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
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std | TV | Meinshausen2011 expected | meinshausen_rcp_2011 | meinshausen_rcp_2011 | Not directly confirmed from primary text |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | Cionni et al. 2011 (AC&C/SPARC) | Bi et al. 2013; Eyring et al. 2013 | bi_access_2013 *(add)*; eyring_ozone_2013 | Confirmed 1-0 high conf; no interactive chemistry (prescribed only); HadGEM2-A with prescribed atmospheric chemistry effects |
| SD | Sulphate direct | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme** (Bellouin et al. 2011; Martin et al. 2011 GMD 4:723–757) driven by **Lamarque et al. (2010)** historical emissions. Sulphate mass computed prognostically; direct effect included. Nuanced: CLASSIC bulk-mass scheme with prescribed optical properties per unit mass differs from simple prescribed OD — implementation-specific vs. standard. | martin_hadgem2_2011; bellouin_aerosol_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** HadGEM2-A (UM7.3) atmosphere confirmed CLASSIC-based. Second-pass 2026-06-21. |
| SI | Sulphate indirect | Model-dependent | ＋ exceeds | TV | **CLASSIC first indirect effect (cloud albedo)** for sulphate and sea salt. Martin 2011 Sect. 3.2: two-moment cloud microphysics activated by CLASSIC aerosol number concentrations. Exceeds standard: not all CMIP5 models include a first indirect effect. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** CLASSIC AIE confirmed for HadGEM2-A. Second-pass 2026-06-21. |
| BC | Black carbon | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme** — BC as one of five components (sulphate, BC, biomass-burning OC, mineral dust, sea salt) driven by Lamarque 2010 emissions. As SD: nuanced because bulk-mass scheme. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** Second-pass 2026-06-21. |
| OC | Organic carbon | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme** — biomass-burning OC component driven by Lamarque 2010 emissions. As SD/BC. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** Second-pass 2026-06-21. |
| MD | Mineral dust | — | ＋ exceeds | TV | **CLASSIC aerosol scheme** — mineral dust as prognostic species driven by Lamarque 2010 emissions. Exceeds standard: full prognostic dust mass (not simple prescribed climatological OD). | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** Second-pass 2026-06-21. |
| SS | Sea salt | — | ＋ exceeds | TV | **CLASSIC aerosol scheme** — sea salt as prognostic species driven by Lamarque 2010 emissions; first indirect effect included for sea salt. Exceeds standard. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from Martin 2011.** Second-pass 2026-06-21. |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | Unconfirmed | — | — | Claims asserting Hurtt2011 refuted 0-1; CABLE2 land interaction unresolved |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | Unconfirmed | — | — | Claims asserting Wang2005 refuted 0-1; cross-check Stage 8 |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | Unconfirmed | — | — | Claims asserting Sato-updated refuted 0-1; cross-check Stage 8 |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | Free-running coupled model |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle). Standard 12 keys only.

### Key architecture note
- Shares HadGEM2-A atmosphere (UM7.3, N96L38) with ACCESS1-3. ACCESS1-0 and ACCESS1-3 differ only in convection parameterization (Gregory-Rowntree vs Kain-Fritsch 2) and autoconversion scheme — forcing is identical between them.
- Martin et al. (2011) GMD 4:723–757 confirms HadGEM2-A uses **CLASSIC** five-component aerosol scheme (Bellouin et al. 2011): sulphate, BC, biomass-burning OC, mineral dust, sea salt — all driven by Lamarque 2010 historical emissions. First indirect (cloud albedo) effect included for sulphate and sea salt via two-moment cloud microphysics.
- ACCESS1-0/1-3 use PRESCRIBED chemistry (no interactive UKCA), so GLOMAP-mode interactive aerosols from HadGEM2-CC/ES are NOT inherited — CLASSIC only.

### Open questions
1. ACCESS solar (SO): Wang2005 (std) or different? Not confirmed from primary text.
2. ACCESS volcanic (VL): Sato-updated (std) or different? Not confirmed from primary text.
3. ACCESS LU: Hurtt2011 (std) or excluded? Not confirmed from primary text.
4. G: Meinshausen2011 (std)? Not directly confirmed.

### Provenance
- Durack et al. 2016 model list: included
- Stage 5 workflow: wf_6a1942cb-0da (2026-06-21) — O confirmed 1-0 high conf; aerosol/SO/VL/LU claims refuted 0-1 (insufficient primary text evidence)
- Second-pass 2026-06-21: SD/SI/BC/OC/MD/SS resolved from Martin 2011 CLASSIC aerosol scheme inference
