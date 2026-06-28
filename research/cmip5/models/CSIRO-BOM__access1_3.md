# access1_3 — CSIRO/BOM (CSIRO & Bureau of Meteorology, Australia)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none (as ACCESS1-0)
- **Model family / lineage:** ACCESS1.3 = ACCESS1.0 with different convection (Kain-Fritsch 2 replacing Gregory-Rowntree) and different autoconversion scheme. Same HadGEM2-A atmosphere (UM7.3), MOM4p1 ocean, CABLE2 land. All forcing datasets expected identical to ACCESS1-0.
- **Atmosphere / ocean components:** As ACCESS1-0 (same HadGEM2-A atmosphere; same physics except convection/autoconversion)
- **Primary documentation paper(s):** Bi, D., et al. (2013). The ACCESS coupled model: description, control climate and evaluation. *Aust. Meteorol. Oceanogr. J.* 63(1), 41–64. doi:10.1071/ES13004 [bi_access_2013 *(add)*]
- **Forcing-specific reference(s):** As ACCESS1-0

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries inferred from ACCESS1-0 (identical HadGEM2-A atmosphere; only convection parameterization and autoconversion differ). Not independently verified.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | **Meinshausen et al. 2011a (MAGICC/RCP GHG concentrations).** Dix et al. 2013 p.84–85: "For use in CMIP5, the MAGICC model was used to derive a consistent set of GHG concentrations from the RCP emissions (Meinshausen et al. 2011a)." Dix 2013 p.84: "Unless mentioned otherwise the implementation in ACCESS1.0 and ACCESS1.3 should be considered identical." | Dix et al. 2013; Meinshausen et al. 2011 | dix_access_2013 *(add)*; meinshausen_rcp_2011 | **RESOLVED ✓std 2026-06-28 sixth-pass.** |
| O  | Ozone | Cionni et al. 2011 | ✓std (inferred) | TV | Cionni2011 (as ACCESS1-0) | bi_access_2013 *(add)* | bi_access_2013 *(add)* | Inherited from ACCESS1-0 (same HadGEM2-A; no interactive chemistry) |
| SD | Sulphate direct | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme** (Martin et al. 2011). As ACCESS1-0 (same HadGEM2-A atmosphere). | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from ACCESS1-0.** Second-pass 2026-06-21. |
| SI | Sulphate indirect | Model-dependent | ＋ exceeds | TV | **CLASSIC first indirect effect.** As ACCESS1-0. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from ACCESS1-0.** Second-pass 2026-06-21. |
| BC | Black carbon | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme.** As ACCESS1-0. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from ACCESS1-0.** Second-pass 2026-06-21. |
| OC | Organic carbon | Lamarque et al. 2010 | ~ unclear | TV | **CLASSIC aerosol scheme.** As ACCESS1-0. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from ACCESS1-0.** Second-pass 2026-06-21. |
| MD | Mineral dust | — | ＋ exceeds | TV | **CLASSIC aerosol scheme — prognostic dust.** As ACCESS1-0. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from ACCESS1-0.** Second-pass 2026-06-21. |
| SS | Sea salt | — | ＋ exceeds | TV | **CLASSIC aerosol scheme — prognostic sea salt + AIE.** As ACCESS1-0. | martin_hadgem2_2011 | martin_hadgem2_2011 | **Inferred from ACCESS1-0.** Second-pass 2026-06-21. |
| LU | Land-use change | Hurtt et al. 2011 | ✗dev | n/a | CABLE2 land surface does not implement transient land-use change. **Dix et al. 2013 p.84: "nor do we include prescribed land use change."** Bodman 2020 §2.2, Ziehn 2017 §2.2 also confirm. Note: ACCESS1.3 dust concentrations "essentially zero" due to CABLE compatibility freeze (Dix 2013 p.87). | dix_access_2013 *(add)*; bodman_access_2020 *(add)* | dix_access_2013 *(add)*; bodman_access_2020 *(add)* | **Resolved ✗dev. Dix 2013 p.84 primary source.** |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | CMIP5 TSI = 1365.65 W m⁻² (as ACCESS1-0). Bodman 2020 §2.2 explicit CSIRO comparison confirms. | bodman_access_2020 *(add)* | bodman_access_2020 *(add)* | **Resolved 2026-06-28** (as ACCESS1-0). |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | **Sato et al. (1993), extended to year 2000.** Dix et al. 2013 p.86: "The CMIP5 specified data source is the monthly mean optical depth in four latitude bands from Sato et al. (1993), extended to the year 2000." No Thomason 2008 floor — distinct from HadGEM2-ES ✗dev. (As ACCESS1-0; Dix 2013 p.84 confirms identical implementation.) | Dix et al. 2013 | dix_access_2013 *(add)* | **RESOLVED ✓std 2026-06-28 sixth-pass.** |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM. Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 5 workflow: wf_6a1942cb-0da (2026-06-21) — all entries inferred from ACCESS1-0 (identical HadGEM2-A atmosphere)
- Second-pass 2026-06-21: SD/SI/BC/OC/MD/SS resolved from Martin 2011 CLASSIC aerosol scheme inference (as ACCESS1-0)
- Third-pass 2026-06-28: HadGEM2-A inheritance hypothesis (Jones 2011) flagged as unsupported inference for G/LU/SO/VL — CSIRO/BOM is independent of UKMO; these dataset choices require ACCESS-specific confirmation
- Fourth-pass 2026-06-28: LU=✗dev, SO=✓std, VL=~std resolved (as ACCESS1-0; Bodman2020+Ziehn2017). G still ?: Dix et al. 2013 (*AMOJ* 63:83–99) is the definitive CMIP5 ACCESS forcing reference, not yet in /resources.
- Sixth-pass 2026-06-28: Read Dix et al. 2013 (AMOJ 63:83–99, doi:10.1071/ES13006, PDF in /resources). G=✓std (Meinshausen2011a; p.84-85). VL=✓std (Sato1993-ext-2000; p.86; no Thomason floor). LU=✗dev directly confirmed (p.84: "nor do we include prescribed land use change"). Note: ACCESS1.3 dust concentrations ~0 due to CABLE freeze (Dix2013 p.87). All 12 cells now fully resolved.
