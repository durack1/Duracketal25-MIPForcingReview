# MIP Forcing Review — CMIP5 workspace

Continuation of the CMIP3 forcing review ([`../README.md`](../README.md)), now documenting the **climate forcing datasets** used in CMIP5 `historical` simulations (1850–2005) across **47 models** from Durack et al. (2016) *Nat. Clim. Change* Table S1.

## What changes from CMIP3

In CMIP3 the baseline was Durack & Wijffels (2012) Table S1, a binary Y/− secondary compilation. In CMIP5:

1. **The baseline is Taylor et al. 2012** (*BAMS* doi:10.1175/BAMS-D-11-00094.1) — the CMIP5 experiment design document, which specifies the *recommended* standard forcing datasets for the `historical` experiment. Every model is tested against this protocol; deviations are documented with primary sources.
2. **Primary documentation is ES-DOC** (https://explore.es-doc.org), not PCMDI static pages. Each CMIP5 model has a machine-readable simulation document specifying forcings used. These complement (and sometimes conflict with) model description papers.
3. **Aerosol forcing is more complex.** CMIP5 models split into two tracks: (A) prescribed aerosol optical depths from Lamarque et al. 2010/2011 climatology; (B) interactive aerosol modules fed by Lamarque et al. 2010 emissions. Track B models (e.g., GFDL-CM3, GISS-E2-*, CESM1-CAM5) have richer aerosol physics but the same emissions input.
4. **Ozone treatment bifurcates.** Models without interactive chemistry prescribe Cionni et al. 2011 (ACP doi:10.5194/acp-11-11267-2011). Models with interactive chemistry (CESM1-WACCM, GISS-E2-*-CC, MIROC-ESM-CHEM, CMCC-CESM, CNRM-CM5-2) calculate ozone from emissions.
5. **Flux corrections are not expected.** CMIP5-generation models are generally free-running; document any exceptions.

## Standard CMIP5 `historical` forcing protocol (Taylor 2012)

| Key | Forcing | Recommended dataset | Reference |
|-----|---------|---------------------|-----------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 concentration time series (1765–2300) | *Clim. Change* 109, doi:10.1007/s10584-011-0156-z |
| O  | Ozone | Cionni et al. 2011 stratospheric + ACCMIP tropospheric (for models w/o interactive chem) | *ACP* 11, doi:10.5194/acp-11-11267-2011 |
| SD/SI/BC/OC | Aerosol forcing | Lamarque et al. 2010 emissions (track B) or prescribed OD (track A) | *ACP* 10, doi:10.5194/acp-10-7017-2010 |
| LU | Land-use change | Hurtt et al. 2011 land-use transitions | *Clim. Change* 109, doi:10.1007/s10584-011-0153-2 |
| SO | Solar irradiance | Wang et al. 2005 total solar irradiance reconstruction | *GRL* 32, doi:10.1029/2005GL024546 |
| VL | Volcanic aerosols | Sato et al. 1993 updated (Ammann et al. 2003 used by some NCAR models) | *JGR* 98 / *GRL* 30 |
| FC | Flux corrections | Not recommended; document if applied | — |

## Layout

```
cmip5/
├── README.md           ← this file
├── data/
│   ├── cmip5-duracketal16-model-list.csv   ← 47 models (source of truth)
│   └── verified-forcing-matrix.csv         ← built as stages complete
└── models/
    ├── _model-template.md
    └── <CENTER>__<model_id>.md             ← one file per model
```

## Model registry

| # | model_id | Centre, country | Key documentation | bib key | Status |
|---|----------|-----------------|-------------------|---------|--------|
| 1  | GFDL-CM2p1      | GFDL, USA       | Delworth et al. 2006 (doi:10.1175/JCLI3629.1) | delworth_gfdls_2006 | ☑ std-protocol (G/O/SD/BC/OC/LU confirmed); SO/VL/SI/MD/SS unverified at model level; CMIP3-era dataset update open |
| 2  | GFDL-CM3        | GFDL, USA       | Donner et al. 2011 (doi:10.1175/2011JCLI3955.1) | donner_new_2011 *(add)* | ☑ EXCEEDS std on O+all aerosols (AM3 interactive 85-species chem + 20 interactive aerosol species from Lamarque2010 emissions; Donner2011 verbatim) |
| 3  | GFDL-ESM2G      | GFDL, USA       | Dunne et al. 2012 (doi:10.1175/JCLI-D-11-00560.1) | dunne_gfdl_2012 *(add)* | ☑ std-protocol (G/O/SD/BC/OC/LU confirmed); ESM-specific: Lamarque2013 N/S-dep; CO2 conc+emis modes; iron/C-init unconfirmed |
| 4  | GFDL-ESM2M      | GFDL, USA       | Dunne et al. 2012 (doi:10.1175/JCLI-D-11-00560.1) | dunne_gfdl_2012 *(add)* | ☑ identical to ESM2G (ocean physics differs only) |
| 5  | GISS-E2-H       | GISS, USA       | Schmidt et al. 2014 (doi:10.1002/2013MS000265) | schmidt_configuration_2014 *(add)* | ☑ Forcing governed by physics_version not name; NINT(p1)=dev on O+aerosols(GISS offline, not Cionni/Lamarque); TCAD/TCADI(p2/p3)=exc; VL=Sato-updated (std); H=HYCOM ocean |
| 6  | GISS-E2-H-CC    | GISS, USA       | Schmidt et al. 2014 (doi:10.1002/2013MS000265) | schmidt_configuration_2014 *(add)* | ☑ CC-suffix meaning UNCONFIRMED (carbon-cycle OR interactive-chem?); physics_version unconfirmed; VL=std only confirmed |
| 7  | GISS-E2-R       | GISS, USA       | Schmidt et al. 2014 (doi:10.1002/2013MS000265) | schmidt_configuration_2014 *(add)* | ☑ Atmospheric forcing IDENTICAL to E2-H; R=Russell1995 ocean only; same physics_version logic applies |
| 8  | GISS-E2-R-CC    | GISS, USA       | Schmidt et al. 2014 (doi:10.1002/2013MS000265) | schmidt_configuration_2014 *(add)* | ☑ Identical to E2-H-CC; CC-suffix unconfirmed; VL=std only confirmed |
| 9  | CCSM4           | NCAR, USA       | Gent et al. 2011 (doi:10.1175/2011JCLI4083.1) | gent_community_2011 *(add)* | ☑ SO=✓std(Wang2005-SOLAR_TSI_Lean;confirmed-1-0); SI=n/a(CAM4-direct-only;confirmed-1-0;Meehl2013); VL=UNRESOLVED(CCSM3-Ammann2003;CCSM4-switch-unconfirmed) |
| 10 | CESM1-BGC       | NCAR, USA       | Lindsay et al. 2014 (doi:10.1175/JCLI-D-12-00565.1) | lindsay_preindustrial_2014 *(add)* | ☑ inherits-CCSM4-atmospheric; ESM: N-dep=Lamarque2010(NOT-2013;Lindsay2014-primary;adv-inconclusive); CO2=PRES+PROG(Lindsay2014); iron=Luo2003-FXc |
| 11 | CESM1-CAM5      | NCAR, USA       | Meehl et al. 2013 (doi:10.1175/JCLI-D-12-00572.1); Liu et al. 2012 (doi:10.5194/gmd-5-709-2012) | meehl_climate_2013 *(add)*; liu_toward_2012 *(add)* | ☑ EXCEEDS std SD/SI/BC/OC/MD/SS (MAM3 interactive aerosols from Lamarque2010 emissions; direct+indirect effects; confirmed 1-0) |
| 12 | CESM1-CAM5-1-FV2| NCAR, USA       | As CESM1-CAM5 (Meehl et al. 2013) | meehl_climate_2013 *(add)* | ☑ identical-to-CESM1-CAM5(inferred;lower-res-FV2-dynamics-only); SD/SI/BC/OC/MD/SS=exc(MAM3;inferred) |
| 13 | CESM1-FASTCHEM  | NCAR, USA       | Lamarque et al. 2012 (doi:10.5194/gmd-5-369-2012) | lamarque_cesm1_2012 *(add)* | ☑ treatment-largely-unresolved; interactive-O-refuted(0-1); Lamarque2010-emis-aerosol-claim-refuted(0-1); likely-CAM4-like-prescribed-but-unconfirmed |
| 14 | CESM1-WACCM     | NCAR, USA       | Marsh et al. 2013 (doi:10.1175/JCLI-D-12-00558.1) | marsh_climate_2013 *(add)* | ☑ EXCEEDS std O (WACCM interactive whole-atmosphere chemistry; confirmed 1-0 medium conf.; Marsh2013) |
| 15 | CanESM2         | CCCma, Canada   | Arora et al. 2011 (doi:10.1029/2010GL046270 GRL); VonSalzen et al. 2013 (doi:10.1080/07055900.2012.755610) | arora_carbon_2011 *(add)*; vonsalzen_canam4_2013 *(add)* | ☑ SD/SI=~unclear-likely-exc(CanAM4-interactive-aerosol-SA;Wilcox2013;prescribed-OD-refuted-0-1); all-other-forcings-unconfirmed; PDFs-in-resources |
| 16 | CanCM4          | CCCma, Canada   | VonSalzen et al. 2013 (doi:10.1080/07055900.2012.755610) | vonsalzen_canam4_2013 *(add)* | ☑ all-inferred-from-CanESM2(same-CanAM4-atmosphere); SD/SI=~unclear(SA-inherited) |
| 17 | bcc-csm1-1      | BCC, China      | Wu et al. 2014 (doi:10.1007/s13351-014-3041-7); Wu et al. 2008 (doi:10.1007/s00382-008-0487-2) | wu_overview_2014 *(add)*; wu_bcc_agcm2_2008 *(add)* | ☑ all-unverified(CMIP6-Wu2019/2020-NOT-applicable); Wu2014-PDF-in-resources-for-next-pass |
| 18 | bcc-csm1-1-m    | BCC, China      | As bcc-csm1-1 (Wu et al. 2014) | wu_overview_2014 *(add)* | ☑ all-inferred-from-bcc-csm1-1(higher-res-only); all-unverified |
| 19 | ACCESS1-0       | CSIRO/BOM, Australia | Bi et al. 2013 (doi:10.22499/2.6301.004 AMOJ); Eyring et al. 2013 (doi:10.1002/jgrd.50316) | bi_access_2013 *(add)*; eyring_ozone_2013 | ☑ O=✓std(Cionni2011;confirmed-1-0-high-conf;Bi/Dix2013+Eyring2013;no-interactive-chemistry); aerosol/SO/VL/LU=unconfirmed(claims-refuted-0-1;GLOMAP-ruled-out); cross-check-UKMO-Stage8-for-HadGEM2-A-treatment |
| 20 | ACCESS1-3       | CSIRO/BOM, Australia | Bi et al. 2013 (doi:10.22499/2.6301.004 AMOJ) | bi_access_2013 *(add)* | ☑ identical-to-ACCESS1-0(inferred;same-HadGEM2-A-atmosphere;convection/autoconversion-differ-only); O=✓std(inferred) |
| 21 | CSIRO-Mk3.6.0   | CSIRO-QCCCE, Australia | Jeffrey et al. 2013 (doi:10.22499/2.6301.001 AMOJ); Syktus et al. 2011 (MODSIM2011); Rotstayn et al. 2010/2012 (ACP 13:10883) | jeffrey_australia_2013 *(add)*; rotstayn_aerosol_2010 *(add)* | ☑ EXCEEDS std on ALL 6 aerosols (SD/SI/BC/OC/MD/SS): Rotstayn2010 interactive 11-tracer scheme from Lamarque2010-emis+online-natural (confirmed-1-0-high-conf); O=✓std(Cionni2011;Syktus2011-verbatim;confirmed-1-0); LU=✗dev(explicitly-excluded;Syktus2011+Collier2011;confirmed-1-0-high-conf); SO=~dev(Lean2000;medium-conf); VL=~dev/std?(Sato1993;medium-conf) |
| 22 | CNRM-CM5        | CNRM, France    | Voldoire et al. 2013 (doi:10.1007/s00382-011-1259-y) | voldoire_cnrm_2013 *(add)* | ☑ O=✓exc(MOBIDIC-2D-linearized-interactive;Cariolle&Teyssedre2007;Voldoire2013;confirmed-1-0-high-conf); SD/BC/OC=✗dev(LMDZ-INCA-offline-OD;Lamarque2010-emis-as-INCA-input;NOT-Lamarque2010-OD-direct); MD/SS=FXc-✗dev(pre-industrial-fixed;Tegen1997-rescaled); LU=✗dev(explicitly-excluded); VL=✗dev(Ammann2007-NCAR;NOT-Sato-updated); SO=?(unconfirmed) |
| 23 | CNRM-CM5-2      | CNRM, France    | Voldoire et al. 2013 + Michou et al. 2011 (MOCAGE) | voldoire_cnrm_2013 *(add)* | ☑ all-inferred-from-CNRM-CM5(same-base+MOCAGE-upgrade); O=?(exc-expected-MOCAGE-3D-interactive;UNCONFIRMED-not-in-primary-source) |
| 24 | IPSL-CM5A-LR    | IPSL, France    | Dufresne et al. 2013 (doi:10.1007/s00382-012-1636-1); Szopa et al. 2013 (doi:10.1007/s00382-012-1408-y) | dufresne_ipsl_2013 *(add)*; szopa_aerosol_2013 *(add)* | ☑ O=✗dev(INCA-trop+REPROBUS-strat-merged-offline;NOT-Cionni2011;Szopa2013;confirmed-1-0-high-conf); aerosols(SD/SI/BC/OC/MD/SS)=✗dev(LMDZ-INCA-offline-11yr-smoothed;NOT-Lamarque2010-OD-direct;Szopa2013;confirmed-1-0-high-conf); SO=✓std(Wang2005+Frohlich&Lean2004;corrects-CMIP3-fixed-solar); VL=✓std(Sato1993-updated;corrects-CMIP3-no-volcanic); LU=?(ORCHIDEE;unconfirmed) |
| 25 | IPSL-CM5A-MR    | IPSL, France    | Dufresne et al. 2013 | dufresne_ipsl_2013 *(add)* | ☑ identical-forcing-to-CM5A-LR(confirmed-Dufresne2013;resolution-2.5x1.25deg-vs-3.75x1.875deg-only) |
| 26 | IPSL-CM5B-LR    | IPSL, France    | Dufresne et al. 2013 | dufresne_ipsl_2013 *(add)* | ☑ identical-forcing-to-CM5A-LR(confirmed-Dufresne2013;LMDZ5B-physics-parameterisations-differ;forcing-protocol-unchanged) |
| 27 | MPI-ESM-LR      | MPI-M, Germany  | Giorgetta et al. 2013 (doi:10.1002/jame.20038); Stevens et al. 2013 ECHAM6 (doi:10.1002/jame.20015); Kinne et al. 2013 MACv1 (doi:10.1002/jame.20035) | giorgetta_climate_2013 *(add)*; stevens_atmospheric_2013 *(add)*; kinne_macv1_2013 *(add)* | ☑ O=✓std(Cionni2011;Stevens2013-verbatim;confirmed-1-0-high-conf); G/LU=✓std(Meinshausen2011+Hurtt2011;medium-conf); SD/BC/OC=✗dev(Kinne-MACv1-bundled-total-optical-climatology;NOT-Lamarque2010-OD;NOT-interactive-HAM2;confirmed-1-0-high-conf); SI=?(not-in-ESGF-string;likely-none); CMIP3-BC/OC/LU-exclusion-CORRECTED; SO/VL/ESM-inputs=unconfirmed |
| 28 | MPI-ESM-MR      | MPI-M, Germany  | Giorgetta et al. 2013 | giorgetta_climate_2013 *(add)* | ☑ identical-forcing-to-MPI-ESM-LR(inferred;same-ECHAM6-physics;higher-res-ocean-only) |
| 29 | MPI-ESM-P       | MPI-M, Germany  | Giorgetta et al. 2013 | giorgetta_climate_2013 *(add)* | ☑ all-inferred-from-MPI-ESM-LR(Paleo-config;no-paleo-forcing-simplification-found) |
| 30 | EC-EARTH        | EC-EARTH Consortium | Hazeleger et al. 2012 (doi:10.1007/s00382-011-1228-5); Wyser et al. 2020 GMD (doi:10.5194/gmd-13-3465-2020); Döscher et al. 2022 GMD (doi:10.5194/gmd-15-2973-2022) | hazeleger_ecearth_2012 *(add)*; wyser_ec_earth_2020 *(add)*; doscher_ec_earth_2022 *(add)* | ☑ aerosols=~std(CMIP5-CAM/Lamarque2011-mass-conc-IFS-mapped;direct-only;Wyser2020;confirmed-1-0-high-conf); SI=✗dev(NO-indirect-effect;confirmed-1-0-high-conf); G/O/SO/VL/LU=unconfirmed |
| 31 | HadCM3          | UKMO, UK        | Gordon et al. 2000 (doi:10.1175/1520-0442(2000)013) | gordon_hadcm3_2000 *(add)* | ☐ |
| 32 | HadGEM2-AO      | UKMO/NIMR, UK/Korea | Collins et al. 2011 / *(to confirm)* | | ☐ |
| 33 | HadGEM2-CC      | UKMO, UK        | Collins et al. 2011 (doi:10.1007/s00382-011-1208-9) | collins_development_2011 *(add)* | ☐ |
| 34 | HadGEM2-ES      | UKMO, UK        | Collins et al. 2011 | collins_development_2011 *(add)* | ☐ |
| 35 | MIROC4h         | MIROC, Japan    | Sakamoto et al. 2012 (doi:10.2151/jmsj.2012-301) | sakamoto_miroc4h_2012 *(add)* | ☐ |
| 36 | MIROC5          | MIROC, Japan    | Watanabe et al. 2010 (doi:10.1175/2010JCLI3679.1) | watanabe_improved_2010 *(add)* | ☐ |
| 37 | MIROC-ESM       | MIROC, Japan    | Watanabe et al. 2011 (doi:10.5194/gmd-4-845-2011) | watanabe_miroc_2011 *(add)* | ☐ |
| 38 | MIROC-ESM-CHEM  | MIROC, Japan    | Watanabe et al. 2011 | watanabe_miroc_2011 *(add)* | ☐ |
| 39 | NorESM1-M       | NCC, Norway     | Bentsen et al. 2013 (doi:10.5194/gmd-6-687-2013) | bentsen_norwegian_2013 *(add)* | ☐ |
| 40 | NorESM1-ME      | NCC, Norway     | Bentsen et al. 2013 | bentsen_norwegian_2013 *(add)* | ☐ |
| 41 | FGOALS-g2       | IAP, China      | Li et al. 2013 (doi:10.1007/s13351-013-0301-6) | li_flexible_2013 *(add)* | ☐ |
| 42 | FGOALS-s2       | IAP, China      | Bao et al. 2013 (doi:10.1175/JCLI-D-12-00338.1) | bao_flexible_2013 *(add)* | ☐ |
| 43 | FIO-ESM         | FIO, China      | Qiao et al. 2013 (doi:10.1007/s11430-013-4647-0) | qiao_fioresm_2013 *(add)* | ☐ |
| 44 | BNU-ESM         | BNU, China      | Ji et al. 2014 (doi:10.5194/gmd-7-2039-2014) | ji_description_2014 *(add)* | ☐ |
| 45 | CMCC-CESM       | CMCC, Italy     | Vichi et al. / *(to confirm)* | | ☐ |
| 46 | CMCC-CM         | CMCC, Italy     | Scoccimarro et al. 2011 (doi:10.1175/2011JCLI3773.1) | scoccimarro_cmcc_2011 *(add)* | ☐ |
| 47 | CMCC-CMS        | CMCC, Italy     | *(to confirm)* | | ☐ |

Legend: ☐ not started · ◐ in progress · ☑ complete

## Staging plan — grouped by centre (CMIP5 first pass)
| Stage | Centre(s) | Models | Status |
|-------|-----------|--------|--------|
| 1  | GFDL (USA)              | CM2p1, CM3, ESM2G, ESM2M | ☑ complete — CM3 exceeds std (interactive O+aerosols); ESM2G/M add N-dep+CO2-emis ESM inputs; SO/VL unverified all 4 |
| 2  | GISS (USA)              | E2-H, E2-H-CC, E2-R, E2-R-CC | ☑ complete — KEY: physics_version (p1/p2/p3) governs forcing, NOT model name; NINT(p1) DEVIATES on O+aerosols (GISS offline Shindell2003/Miller2006a, not Cionni/Lamarque); VL=Sato-updated (std) confirmed; CC-suffix meaning open |
| 3  | NCAR/CESM (USA)         | CCSM4, CESM1-BGC, CESM1-CAM5, CESM1-CAM5-1-FV2, CESM1-FASTCHEM, CESM1-WACCM | ☑ complete — CESM1-CAM5/FV2 exceed std all aerosols (MAM3 from Lamarque2010-emis; direct+indirect); WACCM exceeds std O (interactive whole-atmos-chem); CCSM4 SO=std confirmed; VL UNRESOLVED family-wide |
| 4  | CCCma + BCC (Canada/China) | CanESM2, CanCM4, bcc-csm1-1, bcc-csm1-1-m | ☑ complete — CanAM4 aerosols=interactive(SA;Wilcox2013;likely-exc;prescribed-OD-refuted); BCC all-unverified(Wu2014-PDF-in-resources); VonSalzen2013-PDF-in-resources |
| 5  | CSIRO + ACCESS (Australia) | ACCESS1-0, ACCESS1-3, CSIRO-Mk3.6.0 | ☑ complete — CSIRO-Mk3.6.0 EXCEEDS std on ALL aerosols (SD/SI/BC/OC/MD/SS; Rotstayn2010 interactive 11-tracer; Lamarque2010-emis+natural-online); LU=✗dev(explicitly-excluded); SO=~dev(Lean2000); O=✓std; ACCESS O=✓std(confirmed); ACCESS aerosol/SO/VL/LU=unconfirmed(cross-check-UKMO-Stage8) |
| 6  | CNRM + IPSL (France)    | CNRM-CM5, CNRM-CM5-2, IPSL-CM5A-LR, IPSL-CM5A-MR, IPSL-CM5B-LR | ☑ complete — French groups DEVIATE systematically on aerosols+ozone (LMDZ-INCA offline OD, NOT Lamarque2010 direct; INCA/REPROBUS offline ozone, NOT Cionni2011); CNRM-CM5 EXCEEDS on O (MOBIDIC interactive); IPSL SO/VL corrected from CMIP3 (✓std); CNRM LU+MD+SS excluded/fixed; CNRM VL=Ammann2007(dev); CNRM-CM5-2 MOCAGE-O unconfirmed |
| 7  | MPI + EC-EARTH (Germany/Europe) | MPI-ESM-LR, MPI-ESM-MR, MPI-ESM-P, EC-EARTH | ☑ complete — MPI-ESM DEVIATES on aerosols (Kinne-MACv1 bundled optical field; NOT Lamarque2010-OD, NOT interactive HAM2); O=✓std(Cionni2011); G/LU=✓std (CMIP3 BC/OC/LU exclusion corrected); EC-EARTH SI=✗dev(direct-only); aerosols=~std(CAM/Lamarque2011 IFS-mapped); multiple forcings unconfirmed both groups |
| 8  | UKMO (UK)               | HadCM3, HadGEM2-AO, HadGEM2-CC, HadGEM2-ES | ☐ |
| 9  | MIROC (Japan)           | MIROC4h, MIROC5, MIROC-ESM, MIROC-ESM-CHEM | ☐ |
| 10 | NorESM + FGOALS + FIO + BNU (Norway/China) | NorESM1-M, NorESM1-ME, FGOALS-g2, FGOALS-s2, FIO-ESM, BNU-ESM | ☐ |
| 11 | CMCC (Italy)            | CMCC-CESM, CMCC-CM, CMCC-CMS | ☐ |

## ESM-specific forcing inputs (new in CMIP5)

CMIP5 introduced the first generation of Earth System Models (ESMs) with active carbon cycles, interactive biogeochemistry, and atmospheric chemistry. These models require additional forcing datasets not present in CMIP3. Document these alongside the standard 12 forcing keys:

| ESM input | What it drives | Standard dataset | Models likely affected |
|-----------|---------------|-----------------|----------------------|
| N-deposition (reactive N) | Land/ocean biogeochemistry carbon cycle | Lamarque et al. 2010 NHx/NOy deposition | All ESMs: GFDL-ESM2G/M, GISS-E2-*-CC, CESM1-BGC, CanESM2, MIROC-ESM, MPI-ESM, IPSL-CM5A/B, HadGEM2-ES, NorESM1-ME, CMCC-CESM |
| CO2 conc. vs. emissions | Carbon cycle mode | Meinshausen 2011 (conc.) or Friedlingstein emissions | Concentration-driven vs. emission-driven runs differ; emission-driven = interactive C cycle |
| Atmospheric chemistry inputs (NOx, VOC, CO) | Tropospheric ozone / aerosol chemistry | Lamarque et al. 2010 emissions | Models with interactive chemistry: GFDL-CM3, GISS-E2-*-CC, CESM1-WACCM, MIROC-ESM-CHEM, CNRM-CM5-2, CMCC-CESM |
| Iron/dust deposition | Ocean biogeochemistry | Mahowald et al. / model-specific | ESMs with ocean iron cycle: GFDL-ESM2G/M, MIROC-ESM, MPI-ESM, NorESM1-ME |
| BC on snow/ice | Cryosphere albedo | Lamarque et al. 2010 BC emissions → deposition | GFDL-CM3, GISS-E2-*, CESM1-CAM5, HadGEM2-CC/ES |
| Ocean carbon / DIC initialisation | Ocean C cycle spin-up | GLODAP / observational | GFDL-ESM2G/M, CanESM2, MIROC-ESM, HadGEM2-ES |

**In each model file:** add a section "ESM-specific forcing inputs" below the standard 12-key table if the model has an active carbon cycle or interactive chemistry. If a model is not an ESM (e.g., CM2p1, CCSM4), note "Not an ESM — standard 12 keys only."

## Cross-cutting findings (Stage 7 — MPI + EC-EARTH)

- **MPI-ESM uses Kinne MAC-v1 total-aerosol optical climatology (✗dev)**: All three MPI-ESM configurations prescribe aerosol radiative properties from the Kinne et al. 2013 MAC-v1 climatology — annual time steps from ~1860, total + anthropogenic aerosol optical depth, single-scattering albedo, asymmetry parameter. This is NOT Lamarque2010-OD and NOT interactive HAM2. Giorgetta2013 verbatim: "The optical properties of the aerosol are prescribed from a new climatology developed by S. Kinne et al." Confirmed 1-0 high confidence. ESGF metadata shows "SD" only (bundled total-optical field — BC/OC effects physically incorporated but not speciated).
- **MPI-ESM CMIP3 BC/OC/LU exclusions corrected**: CMIP3 MPI-ECHAM5 explicitly omitted BC, OC, and LU despite Table S1 Y marks ("only anthropogenic forcings"). In CMIP5: BC/OC effects are physically incorporated within the Kinne MACv1 bundled total-optical field (method deviates from Lamarque2010 but effects present); LU is applied via JSBACH using Hurtt2011 LUH1 transitions (✓std). ESGF "GHG Oz SD Sl Vl LU" string confirms LU inclusion. Confirmed 1-0 medium confidence.
- **MPI-ESM ozone follows Cionni2011 standard (✓std)**: ECHAM6 default ozone is a 3D monthly climatology based on Cionni2011 AC&C/SPARC database, extended above 1 hPa. No interactive chemistry (HAMMOZ/MOZ not active in standard CMIP5 historical runs). Stevens2013 verbatim: "based on the merged and future ozone climatology as described by Cionni et al. [2011] for CMIP5." Confirmed 1-0 high confidence.
- **A third distinct European aerosol deviation pattern**: GFDL-CM3 (interactive AM3, exc), CNRM (offline LMDZ-INCA OD, dev), IPSL (offline LMDZ-INCA 11yr-smoothed, dev), and now MPI-ESM (Kinne MACv1 prescribed optical climatology, dev) each use fundamentally different aerosol approaches — none apply the Lamarque2010-OD specified in Taylor2012 directly. Only GISS TCAD/TCADI and CESM1-CAM5 have so far followed the "standard" interactive-from-Lamarque2010-emissions approach (exc) or straight Lamarque2010-OD (std).
- **EC-EARTH SI = ✗dev (no indirect effect)**: EC-EARTH v2.2 explicitly applies aerosol direct effect only. Wyser et al. 2020 (GMD doi:10.5194/gmd-13-3465-2020) verbatim: "ECE2 only accounts for the direct radiative effects of aerosols...but it has no representation of the indirect effects." Confirmed 1-0 high confidence. EC-EARTH aerosol source (CAM/Lamarque2011 mass-concentration fields mapped onto IFS types) is broadly aligned to CMIP5-standard distribution but implemented via IFS mapping — verdict ~std for SD/BC/OC. Also supported by Döscher et al. 2022 (GMD doi:10.5194/gmd-15-2973-2022).
- **MPI-ESM ESM inputs (N-dep, CO2 mode, HAMOCC iron) unresolved**: Giorgetta2013 was paywalled (Wiley 402) during verification. All ESM-specific forcing inputs for JSBACH (N-deposition dataset and year) and HAMOCC (iron/dust deposition) remain open questions. The CMIP5 "historical" run is expected to be concentration-driven but not confirmed.
- **MPI-ESM-P forcing identical to LR (pending confirmation)**: No evidence of paleo-mode forcing simplification for the CMIP5 historical run. All three MPI variants share the same ECHAM6 atmospheric physics and forcing protocol.

## Cross-cutting findings (Stage 6 — CNRM + IPSL)

- **Systematic LMDZ-INCA offline substitution (CNRM + IPSL)**: Both CNRM-CM5 and all three IPSL-CM5 variants derive aerosol optical depths from a pre-run LMDZ-INCA simulation that uses Lamarque et al. 2010 emissions as inputs, then prescribes the resulting OD fields offline. This is a DEVIATION from the Taylor 2012 standard (which calls for Lamarque2010 OD applied directly) but NOT an exceedance — the coupled models themselves do not run interactive aerosols. IPSL additionally smooths the fields with an 11-year running mean. Confirmed 1-0 high confidence from Voldoire2013 + Szopa2013.
- **IPSL ozone: offline merged product (✗dev)**: All IPSL-CM5 variants (CM5A-LR, CM5A-MR, CM5B-LR) prescribe ozone from a merged offline product: LMDz-OR-INCA (troposphere) + LMDz-REPROBUS (stratosphere), merged at the 150 ppbv contour (~chemical tropopause), then averaged to time-varying monthly-mean zonal fields. NOT Cionni2011 — deviation confirmed 1-0 (Szopa2013). The coupled model does NOT run interactive chemistry.
- **CNRM-CM5 ozone: MOBIDIC interactive (✓exc)**: In CNRM-CM5, ozone is a PROGNOSTIC variable in ARPEGE, driven by photochemical production and loss rates from the MOBIDIC 2-D zonal linearized chemistry model (Cariolle & Teyssèdre 2007). This EXCEEDS the Cionni2011 standard. Confirmed 1-0 high confidence (Voldoire2013 verbatim).
- **CNRM-CM5 additional deviations**: (1) Mineral dust FIXED at pre-industrial (FXc, ✗dev); (2) sea salt FIXED at pre-industrial, scaled to Tegen1997 global-mean (FXc, ✗dev); (3) LU explicitly EXCLUDED — "in the default version, land use changes are not taken into account" (✗dev); (4) Volcanic uses Ammann et al. 2007 (NCAR reconstruction) not Sato-updated (✗dev). CNRM-CM5 CMIP3 no-volcanic error corrected in principle (time-varying volcanic applied) but replaced with a non-standard dataset.
- **IPSL SO/VL corrected from CMIP3 (✓std)**: IPSL-CM5 corrects both CMIP3 IPSL-CM4 errors: solar uses Wang2005 + Frohlich & Lean 2004 (✓std); volcanic uses Sato1993-updated (✓std). Two confirmed CMIP3→CMIP5 corrections. Confirmed 1-0 high confidence (Dufresne2013).
- **IPSL CM5A-MR and CM5B-LR identical forcing to CM5A-LR**: Resolution (CM5A-MR) and atmospheric physics (CM5B-LR) differ; forcing protocol is unchanged across all three configurations — confirmed by Dufresne2013 primary source.
- **CNRM-CM5-2 MOCAGE ozone unconfirmed (open question)**: CNRM-CM5-2 adds full MOCAGE 3-D interactive chemistry replacing CNRM-CM5's MOBIDIC 2-D linearized scheme. Expected to give O=exc but not confirmed from Stage 6 workflow primary sources.
- **French models answer CMIP3 watchlist question (SO/VL)**: The standing question "Did French models (CNRM, IPSL) correct the CMIP3 SO/VL omissions in CMIP5?" is now answered for IPSL (YES for both SO and VL) and partially for CNRM (VL corrected with Ammann2007 = dev; SO unconfirmed). Both corrected CMIP3 no-natural-forcing errors.

## Cross-cutting findings (Stage 5 — CSIRO + ACCESS)

- **CSIRO-Mk3.6.0 EXCEEDS standard on ALL six aerosol keys (SD/SI/BC/OC/MD/SS)**: Rotstayn et al. 2010 interactive aerosol scheme carries 11 prognostic tracers (DMS, SO₂, sulfate, hydrophobic+hydrophilic BC, hydrophobic+hydrophilic OC, four dust size bins, sea salt) — computes optical depths online from Lamarque 2010 anthropogenic/biomass-burning emission inputs + online natural sources (DMS, dust, sea salt). Collier/Jeffrey2013: "By far the most important improvement of the Mk3.6 model from its predecessor is the inclusion of an interactive aerosol scheme." This is analogous to CESM1-CAM5 (MAM3) and CanAM4 — confirmed 1-0 high confidence.
- **CSIRO-Mk3.6.0 ozone follows Taylor 2012 standard (✓std)**: Cionni et al. 2011 AC&C/SPARC ozone database used — Syktus2011 verbatim: "Ozone concentrations are based on the AC&C/SPARC ozone database (Cionni et al., 2011)." No interactive chemistry. Confirmed 1-0 high confidence.
- **CSIRO-Mk3.6.0 LU = ✗dev (explicitly excluded)**: Syktus2011 + Collier2011 both state "Changes in land cover and use are not included." Taylor 2012 requires Hurtt et al. 2011 — genuine deviation. Confirmed 1-0 high confidence.
- **CSIRO-Mk3.6.0 solar/volcanic citation-vintage issues (medium conf)**: Solar cites Lean (2000) rather than Wang et al. 2005 — same TSI reconstruction lineage (Wang, Lean & Sheeley 2005 updates Lean 2000). Volcanic cites Sato et al. (1993) rather than "Sato updated" — same GISS stratospheric aerosol lineage. These are likely citation-vintage differences not substantive forcing changes.
- **ACCESS ozone confirmed standard (✓std)**: Bi/Dix 2013 + Eyring 2013 confirm ACCESS1-0/1-3 use prescribed atmospheric chemistry (no interactive chemistry) — Cionni2011 is the expected and confirmed ozone dataset. Confirmed 1-0 high confidence.
- **ACCESS aerosols/solar/volcanic/LU unconfirmed**: Claims asserting standard Lamarque2010/Wang2005/Sato-updated/Hurtt2011 for ACCESS were refuted (0-1) for lack of primary text evidence. GLOMAP-mode interactive aerosols ruled out (ACCESS uses prescribed chemistry). Likely CLASSIC prescribed sulfate scheme (HadGEM2-A inheritance) but not confirmed — to be resolved when UKMO Stage 8 (HadGEM2-AO/CC/ES) runs.

## Cross-cutting findings (Stage 4 — CCCma + BCC)

- **CanAM4 (CanESM2/CanCM4) has interactive aerosols (likely exceeds standard)**: Wilcox et al. 2013 (ERL 8:024033) Table 1 classifies CanESM2 as SA — first indirect aerosol effect = YES, second indirect = NO. Prescribed-OD claim adversarially refuted (0-1). Aerosol DATASET provenance (Lamarque2010 emissions vs other source) unresolved — VonSalzen2013 PDF in /resources is the key primary source to read.
- **BCC CMIP6 papers must not be used for CMIP5 forcing**: Wu2019 (BCC-CSM2-MR) and Wu2020 (BCC-ESM1) use Meinshausen 2017 GHGs and CMIP6 forcing protocol — confirmed 1-0 as WRONG ERA. Use Wu2014 (Wuetal14JMetRes, in /resources) for bcc-csm1-1/-1-m CMIP5 forcing.
- **Stage 4 blocked by paywalled primary sources**: VonSalzen2013 (CanAM4) was paywalled in the workflow (tandfonline.com, 0 claims extracted); Wu2014 ScienceDirect returned HTTP 403. Both PDFs are now in /resources and should be read in a follow-up targeted pass to resolve all 7 key questions.
- **CanESM2 detection-attribution runs confirm separate forcing components**: Jones et al. 2013 (JGR) Table 1 lists CanESM2 with 5 historical + 5 each historicalGHG, historicalNat, historicalMisc-p4 (aerosol-only) — confirming GHG, natural (solar+volcanic), and aerosol forcings were separately resolved, though not which datasets were used.
- **All ESM-specific inputs (N-dep year, CO2 mode) remain unresolved** for CanESM2 — Arora2011 GRL PDF in /resources may document these; VonSalzen2013 is the primary atmospheric forcing source.

## Cross-cutting findings (Stage 3 — NCAR/CESM)

- **NCAR/CESM family splits cleanly by atmosphere**: CAM4-based models (CCSM4, CESM1-BGC, CESM1-FASTCHEM) use prescribed aerosol OD (direct-only, no indirect effect). CAM5/MAM3-based models (CESM1-CAM5, CESM1-CAM5-1-FV2) use fully interactive aerosols (MAM3). WACCM (CAM4 dynamics + MOZART chemistry) has interactive ozone.
- **CESM1-CAM5 MAM3 EXCEEDS standard on all six aerosol keys (SD/SI/BC/OC/MD/SS)**: MAM3 drives all six aerosol species prognostically from Lamarque 2010 emissions; includes both direct and indirect effects — confirmed 1-0 (Liu2012 + Meehl2013). This is the first CMIP5 family confirmed EXCEEDS on aerosols *with indirect effect*.
- **CESM1-WACCM EXCEEDS standard on ozone**: WACCM MOZART whole-atmosphere chemistry computes ozone prognostically from surface to mesosphere; it is NOT prescribed from Cionni2011 — confirmed 1-0 medium confidence (Marsh2013 paywalled).
- **CCSM4 solar confirmed as Wang+Lean 2005 (std)**: File SOLAR_TSI_Lean_1610-2007_annual_c090324.nc in NCAR SVN = Wang, Lean & Sheeley 2005 (*ApJ* 625) — confirmed 1-0.
- **CCSM4 SI=n/a (direct aerosol effect only)**: CAM4 prescribed-OD aerosols include direct effect only; no first or second indirect effect — confirmed 1-0 via explicit contrast in Meehl2013.
- **CESM1-BGC N-dep = Lamarque 2010 (NOT 2013 ACCMIP)**: Lindsay2014 (primary source) documents N-dep from Lamarque 2010 time-varying fields for both CLM4-CN and POP2-BEC. GFDL ESMs (Stage 1) used Lamarque 2013 ACCMIP — CCCma/BCC choice will be key in Stage 4.
- **CESM1-FASTCHEM treatment largely unresolved**: Interactive ozone refuted (0-1); Lamarque2010-emissions aerosol claim refuted (0-1). Likely CAM4-like prescribed but unconfirmed — needs Lamarque2012 direct read.
- **VL unresolved family-wide**: CCSM3 used Ammann 2003 (not Sato updated). Whether CCSM4/CESM1 switched to Sato-updated (Taylor 2012 standard) remains unconfirmed across all six NCAR/CESM models.

## Cross-cutting findings (Stage 2 — GISS)

- **Physics_version, not model name, governs GISS ModelE2 forcing**: CMIP5 attribute `physics_version` determines whether ozone and aerosols are prescribed (p1=NINT) or interactive (p2=TCAD, p3=TCADI). The four named models (E2-H, E2-H-CC, E2-R, E2-R-CC) each submitted realizations across multiple physics versions, and the mapping of model name to physics version was NOT confirmed from verified evidence.
- **GISS NINT (p1) DEVIATES from Taylor 2012 on O and aerosols**: NINT prescribed ozone uses GISS offline Shindell et al. 2003 distribution — identical to CMIP3, NOT Cionni et al. 2011. NINT aerosols use Miller et al. 2006a / Koch et al. 2011 offline fields, NOT Lamarque 2010 OD. Miller 2014 verbatim: "The NINT distribution of tropospheric ozone is identical to that used in the CMIP3 simulations." This is a previously undocumented deviation in the CMIP5 literature.
- **GISS TCAD/TCADI (p2/p3) EXCEED standard** on O and aerosols (interactive OMA); TCADI adds the first aerosol indirect effect.
- **H vs R is ocean only**: GISS-E2-H uses HYCOM (HYbrid Coordinate Ocean Model) — NOT "HydraBASE"; GISS-E2-R uses Russell 1995 ocean. Atmospheric forcing is identical for same physics version.
- **VL confirmed for all 4 GISS models**: Sato et al. 1993 updated — continued from CMIP3. GISS CMIP5 page: "volcanic forcings are from a more recent version of the Sato et al. data."
- **"-CC" suffix meaning unconfirmed**: The claim "-CC = interactive atmospheric chemistry" was refuted by adversarial verification. CC may denote active carbon cycle (ESM-type) rather than atmospheric chemistry interactivity — which would mean CC variants require ESM-specific forcing inputs (N-deposition, CO2 emissions).

## Cross-cutting findings (Stage 1 — GFDL)

- **First "exceeds standard" case:** GFDL-CM3 (AM3) has fully interactive tropospheric+stratospheric chemistry (85 species) and 20 prognostic aerosol species driven by Lamarque 2010 emissions — ozone is NOT prescribed from Cionni2011 and aerosol OD is NOT prescribed from Lamarque2010. Donner 2011 verbatim: "first coupled chemistry-climate model that allowed representation of interactive aerosols and ozone, rather than prescribing concentrations from offline models." This is the first confirmed `exc` verdict in the CMIP5 review.
- **ESMs are NOT exclusively emission-driven:** GFDL ESM2G/ESM2M support BOTH concentration-driven (`historical` = standard, CO2 from Meinshausen 2011) and emission-driven (`esmHistorical` = CO2 responds to fossil-fuel emissions + interactive land/ocean fluxes). Blanket "ESMs use emissions-driven CO2" assumption was explicitly refuted by GFDL ESM FAQ and PCMDI metadata.
- **AM2.1-based trio (CM2p1, ESM2G, ESM2M) follows standard prescribed-aerosol protocol:** All three use prescribed OD from Lamarque2010 and Cionni2011 ozone (no interactive aerosol/chemistry). The key GFDL distinction in CMIP5 is CM2p1/ESM2G/ESM2M (prescribed, AM2.1) vs. CM3 (interactive, AM3).
- **SO and VL remain unconfirmed across all 4 GFDL models:** Per-model forcing tables not located; assumed standard (Wang 2005 / Sato updated) but not verified from primary documentation.

## Cross-cutting questions to watch in CMIP5
- Did French models (CNRM, IPSL) correct the CMIP3 SO/VL omissions in CMIP5?
- Did MPI-ESM actually apply BC/OC/LU in CMIP5 historical (unlike CMIP3)?
- Which models switched from prescribed aerosol OD to interactive aerosols?
- Did the CSIRO/GISS O=FXc issue persist, or did CMIP5 ozone treatment standardise?
- Are there new CMIP5-specific errors analogous to the CMIP3 SO/VL systematic failures?
