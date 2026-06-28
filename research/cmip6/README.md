# MIP Forcing Review — CMIP6 workspace

Continuation of the CMIP5 forcing review ([`../cmip5/README.md`](../cmip5/README.md)), now documenting the **climate forcing datasets** used in CMIP6 `historical` simulations (1850–2014) across **64 models** that participated in both the CMIP (`historical`) and ScenarioMIP experiments, drawn from the WCRP-CMIP Controlled Vocabularies registry (CMIP6_source_id.json, accessed 2026-06-22).

## What changes from CMIP5

In CMIP5 the baseline was Taylor et al. 2012 (BAMS). In CMIP6:

1. **The baseline is Eyring et al. 2016** (*GMD* doi:10.5194/gmd-9-1937-2016) — the CMIP6 experiment design document, which specifies the recommended standard forcing datasets for the `historical` experiment (1850–2014, 5 years longer than CMIP5). Every model is tested against this protocol; deviations are documented with primary sources.
2. **Forcing inputs are formalised as input4MIPs** — a versioned, DOI-registered dataset collection hosted at PCMDI (input4MIPs.llnl.gov). Each forcing dataset has a citable DOI, which standardises attribution compared to CMIP5.
3. **Historical period extended to 2014**: CMIP6 `historical` runs end 2014-12-31 (CMIP5 ended 2005-12-31). ScenarioMIP scenarios branch from 2015-01-01.
4. **GHG concentrations updated**: Meinshausen et al. 2017 replaces Meinshausen2011. Includes HFCs/PFCs/NF3 not in CMIP5 dataset.
5. **Aerosol emissions updated**: Hoesly et al. 2018 (CEDS v2016_07_26) replaces Lamarque et al. 2010. Includes shipping/aviation sectors; country-level bottom-up inventory.
6. **Land-use updated**: Hurtt et al. 2020 (LUH2 v2h) replaces Hurtt et al. 2011 (LUH1). Higher spatial resolution; adds managed grassland and urban fractions.
7. **Solar irradiance updated**: Matthes et al. 2017 replaces Wang et al. 2005. Spectrally resolved (spectral solar irradiance SSI) in addition to TSI; separate 11-year solar cycle and secular trend terms.
8. **Volcanic aerosols updated**: Thomason et al. 2018 (GloSSAC v2) replaces Sato et al. 1993 updated. Satellite-merged stratospheric aerosol optical depth from 1979; pre-satellite extension via ice-core records (Marshall et al. 2018) for 1850–1978.
9. **Ozone updated**: Checa-Garcia et al. 2018 (CMIP6 AC&C/SPARC) replaces Cionni et al. 2011. Includes separate tropospheric+stratospheric fields; QBO and solar-cycle representations improved.
10. **ESM-specific forcing datasets evolved**: N-deposition from Lamarque et al. 2019 (updated ACCMIP); land use from LUH2; ocean iron deposition from Myriokefalitakis et al. 2018.
11. **ES-DOC simulation documents** remain the primary machine-readable source (https://explore.es-doc.org), supplemented by CMIP6 input4MIPs catalogue.

## Standard CMIP6 `historical` forcing protocol (Eyring 2016)

| Key | Forcing | Recommended dataset | Reference |
|-----|---------|---------------------|-----------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 concentration time series (1850–2014 + extensions) | *GMD* 10, doi:10.5194/gmd-10-2057-2017 |
| O  | Ozone | Checa-Garcia et al. 2018 CMIP6 AC&C/SPARC database (for models w/o interactive chem) | *GMD* 11, doi:10.5194/gmd-11-2233-2018 |
| SD/BC/OC | Anthropogenic aerosol emissions | Hoesly et al. 2018 CEDS (Community Emissions Data System) | `CEDS-2017-05-18` + `CEDS-2017-08-30` | *GMD* 11, doi:10.5194/gmd-11-369-2018 |
| SD/BC/OC | Biomass burning emissions | van Marle et al. 2017 BB4CMIP6 (GFED4s + FIRE-MIP) | `VUA-CMIP-BB4CMIP6-1-2` | *GMD* 10, doi:10.5194/gmd-10-3329-2017 |
| SD/BC/OC | Aerosol optical properties (prescribed, non-interactive) | Stevens et al. 2017 MACv2-Simple Plumes | `MPI-M-MACv2-SP-1-0` | *ACP* 17, doi:10.5194/acp-17-12871-2017 |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h transitions | `UofMD-landState-2-1-h` | *GMD* 13, doi:10.5194/gmd-13-5425-2020 |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 (TSI + SSI spectrally resolved) | `SOLARIS-HEPPA-3-2` | *GMD* 10, doi:10.5194/gmd-10-2247-2017 |
| VL | Volcanic stratospheric aerosols | IACETH SAGE3λ v3.0.0 (SAGE/SAM/CALIPSO/OSIRIS/2D-model merged) | `IACETH-SAGE3lambda-3-0-0` | Thomason et al. 2018 *ESSD* 10, doi:10.5194/essd-10-469-2018 |
| N-dep (ESM) | Reactive nitrogen deposition | NCAR CCMI CAM-Chem (drynhx/drynoy/wetnhx/wetnoy) | `NCAR-CCMI-2-0` | — |
| FC | Flux corrections | Not recommended; document if applied | — | — |

Canonical input4MIPs datasets confirmed from ESGF ORNL bridge API (accessed 2026-06-22):
`https://esgf-node.ornl.gov/esgf-1-5-bridge?activity_id=input4MIPs&mip_era=CMIP6&target_mip_list=CMIP&latest=true`
→ 1,036 datasets for CMIP historical target (out of 10,430 total CMIP6 input4MIPs). The source_ids above are the actual input4MIPs product identifiers — use these to cross-reference model documentation against the published datasets.

**Note on mineral dust (MD) and sea salt (SS):** No single prescribed dataset — models either compute these interactively or use centre-specific climatologies. Document per model.

**Aerosol track split (same as CMIP5):** Models either run interactive aerosol chemistry from CEDS + BB4CMIP6 emissions (track B = exc), or prescribe aerosol optical properties from MACv2-SP (track A ≈ std). Document which track each model uses.

## Layout

```
cmip6/
├── README.md           ← this file
├── data/
│   ├── cmip6-cv-model-list.csv         ← 64 models from WCRP-CMIP CVs (source of truth)
│   ├── cmip6-rothig23-model-list.csv   ← earlier Röthig 2023-based list (superseded)
│   └── verified-forcing-matrix.csv     ← built as stages complete
└── models/
    ├── _model-template.md
    └── <CENTER>__<source_id>.md        ← one file per model
```

## Model registry

| # | source_id | Institution(s) | Stage | Status | Remaining ? |
|---|-----------|----------------|-------|--------|-------------|
| 1  | GFDL-CM4        | NOAA-GFDL, USA           | 1  | ☑ | — |
| 2  | GFDL-ESM4       | NOAA-GFDL, USA           | 1  | ☑ | — |
| 3  | GISS-E2-1-G     | NASA-GISS, USA           | 2  | ☑ | — |
| 4  | GISS-E2-1-G-CC  | NASA-GISS, USA           | 2  | ☑ | — |
| 5  | GISS-E2-1-H     | NASA-GISS, USA           | 2  | ☑ | — |
| 6  | GISS-E2-2-G     | NASA-GISS, USA           | 2  | ◐ | G LU SO VL |
| 7  | GISS-E2-2-H     | NASA-GISS, USA           | 2  | ◐ | G LU SO VL (atm identical to E2-2-G; O/SD/SI/BC/OC/MD/SS inferred) |
| 8  | GISS-E3-G       | NASA-GISS, USA           | 2  | ✗ | all (permanently closed — AMIP-only papers; no CMIP6 historical documentation published) |
| 9  | CESM2           | NCAR, USA                | 3  | ☑ | — |
| 10 | CESM2-FV2       | NCAR, USA                | 3  | ☑ | — |
| 11 | CESM2-WACCM     | NCAR, USA                | 3  | ☑ | — |
| 12 | E3SM-1-0        | E3SM-Project, USA        | 4  | ☑ | — |
| 13 | E3SM-1-1        | E3SM-Project, USA        | 4  | ☑ | — |
| 14 | E3SM-1-1-ECA    | E3SM-Project, USA        | 4  | ☑ | — |
| 15 | E3SM-2-0        | E3SM-Project, USA        | 4  | ☑ | — |
| 16 | CanESM5         | CCCma, Canada            | 5  | ◐ | SO |
| 17 | CanESM5-1       | CCCma, Canada            | 5  | ☑ | — |
| 18 | CanESM5-CanOE   | CCCma, Canada            | 5  | ◐ | SO |
| 19 | BCC-CSM2-MR     | BCC, China               | 6  | ☑ | — |
| 20 | CAMS-CSM1-0     | CAMS, China              | 6  | ◐ | MD SS |
| 21 | CNRM-CM6-1      | CNRM-CERFACS, France     | 7  | ☑ | — |
| 22 | CNRM-CM6-1-HR   | CNRM-CERFACS, France     | 7  | ☑ | — |
| 23 | CNRM-ESM2-1     | CNRM-CERFACS, France     | 7  | ☑ | — |
| 24 | IPSL-CM6A-LR    | IPSL, France             | 7  | ☑ | — |
| 25 | MPI-ESM-1-2-HAM | HAMMOZ-Consortium        | 8  | ☑ | — |
| 26 | MPI-ESM1-2-HR   | MPI-M+DWD+DKRZ           | 8  | ☑ | — |
| 27 | MPI-ESM1-2-LR   | MPI-M+AWI+DKRZ+DWD       | 8  | ☑ | — |
| 28 | EC-Earth3       | EC-Earth-Consortium      | 9  | ☑ | — |
| 29 | EC-Earth3-AerChem | EC-Earth-Consortium    | 9  | ☑ | — |
| 30 | EC-Earth3-CC    | EC-Earth-Consortium      | 9  | ☑ | — |
| 31 | EC-Earth3-ESM-1 | EC-Earth-Consortium      | 10 | ✗ | all (permanently closed — no primary paper published; CMIP7 successor EC-Earth3-ESM-1-1 planned) |
| 32 | EC-Earth3-Veg   | EC-Earth-Consortium      | 10 | ☑ | — |
| 33 | EC-Earth3-Veg-LR | EC-Earth-Consortium     | 10 | ☑ | — |
| 34 | HadGEM3-GC31-LL | MOHC+NERC, UK            | 11 | ◐ | MD |
| 35 | HadGEM3-GC31-MM | MOHC, UK                 | 11 | ◐ | MD |
| 36 | KACE-1-0-G      | NIMS-KMA, Korea          | 11 | ◐ | MD |
| 37 | UKESM1-0-LL     | MOHC+NERC+NIMS-KMA+NIWA  | 11 | ◐ | MD |
| 38 | UKESM1-1-LL     | MOHC+NERC+NIMS-KMA+NIWA  | 11 | ◐ | MD |
| 39 | MIROC-ES2H      | MIROC, Japan             | 12 | ☑ | — |
| 40 | MIROC-ES2L      | MIROC, Japan             | 12 | ☑ | — |
| 41 | MIROC6          | MIROC, Japan             | 12 | ☑ | — |
| 42 | MRI-ESM2-0      | MRI, Japan               | 12 | ☑ | — |
| 43 | CMCC-CM2-SR5    | CMCC, Italy              | 13 | ☑ | — |
| 44 | CMCC-ESM2       | CMCC, Italy              | 13 | ☑ | — |
| 45 | NorESM2-LM      | NCC, Norway              | 13 | ☑ | — |
| 46 | NorESM2-MM      | NCC, Norway              | 13 | ☑ | — |
| 47 | ACCESS-CM2      | CSIRO-ARCCSS, Australia  | 14 | ☑ | — |
| 48 | ACCESS-ESM1-5   | CSIRO, Australia         | 14 | ☑ | — |
| 49 | AWI-CM-1-1-LR   | AWI, Germany             | 15 | ☑ | — |
| 50 | AWI-CM-1-1-MR   | AWI, Germany             | 15 | ☑ | — |
| 51 | AWI-ESM-1-REcoM | AWI, Germany             | 15 | ☑ | — |
| 52 | INM-CM4-8       | INM, Russia              | 15 | ✗ | all (permanently closed — primary paper paywalled: Volodin et al. 2018, Russian J. Numer. Anal. doi:10.1515/rnam-2018-0032) |
| 53 | INM-CM5-0       | INM, Russia              | 15 | ◐ | LU |
| 54 | CAS-ESM2-0      | CAS, China               | 16 | ◐ | LU |
| 55 | FGOALS-f3-L     | CAS, China               | 16 | ☑ | — |
| 56 | FGOALS-g3       | CAS, China               | 16 | ☑ | — |
| 57 | FIO-ESM-2-0     | FIO-QLNM, China          | 16 | ◐ | LU |
| 58 | NESM3           | NUIST, China             | 16 | ☑ | — |
| 59 | CIESM           | THU, China               | 17 | ◐ | O MD SS LU SO |
| 60 | IITM-ESM        | CCCR-IITM, India         | 17 | ◐ | O SO VL |
| 61 | KIOST-ESM       | KIOST, Korea             | 17 | ◐ | O MD SS LU SO VL |
| 62 | MCM-UA-1-0      | UA, USA                  | 17 | ✗ | all (permanently closed — CMIP1-vintage model; no CMIP6 configuration paper exists) |
| 63 | SAM0-UNICON     | SNU, Korea               | 17 | ◐ | O SO VL |
| 64 | TaiESM1         | AS-RCEC, Taiwan          | 17 | ◐ | G O LU SO VL |

Legend: ☐ not started · ◐ partial (some components unresolved) · ☑ complete (all 11 confirmed) · ✗ permanently closed (no primary source retrievable)

## Staging plan — grouped by centre (CMIP6 first pass)

| Stage | Institution(s) | Models | N | Notes | Status |
|-------|---------------|--------|---|-------|--------|
| 1  | NOAA-GFDL                | GFDL-CM4, GFDL-ESM4 | 2 | AM4 + MOM6/OM4; CMIP5 Stage 1 continuation | ☑ |
| 2  | NASA-GISS                | GISS-E2-1-G, -G-CC, -E2-1-H, -E2-2-G, -E2-2-H, -E3-G | 6 | ModelE2.1+E3; physics_version pattern carries from CMIP5 | ☑ |
| 3  | NCAR                     | CESM2, CESM2-FV2, CESM2-WACCM | 3 | CAM6/MAM4; WACCM = whole-atmos chem; CMIP5 Stage 3 continuation | ☑ |
| 4  | E3SM-Project             | E3SM-1-0, -1-1, -1-1-ECA, -2-0 | 4 | Forked from CESM1 ~2016; E3SM-1-0 shares CAM5/CLM5/CICE5/MPAS-O forcing stack with NCAR | ☑ |
| 5  | CCCma                    | CanESM5, CanESM5-1, CanESM5-CanOE | 3 | CanAM5 atmosphere; CanOE = ocean BGC variant; CMIP5 Stage 4 continuation | ☑ |
| 6  | BCC + CAMS               | BCC-CSM2-MR, CAMS-CSM1-0 | 2 | BCC-AGCM3; CAMS uses OpenIFS; both Chinese; BCC lineage from CMIP5 Stage 4 | ☑ |
| 7  | CNRM-CERFACS + IPSL      | CNRM-CM6-1, -HR, CNRM-ESM2-1, IPSL-CM6A-LR | 4 | French group; ARPEGE-Climat6 + LMDZ6; CMIP5 Stage 6 continuation | ☑ |
| 8  | MPI-M + HAMMOZ-Consortium | MPI-ESM1-2-LR, -HR, MPI-ESM-1-2-HAM | 3 | MPI-ESM1.2 family; ECHAM6.3; HAM = two-moment aerosol microphysics | ☑ |
| 9  | EC-Earth-Consortium (1)  | EC-Earth3, EC-Earth3-AerChem, EC-Earth3-CC | 3 | IFS cy36r4 atmosphere; AerChem = interactive TM5 aerosols; CC = carbon cycle | ☑ |
| 10 | EC-Earth-Consortium (2)  | EC-Earth3-ESM-1, EC-Earth3-Veg, EC-Earth3-Veg-LR | 3 | Same IFS cy36r4; Veg = HTESSEL-CW; ESM-1 = full carbon cycle | ☑ |
| 11 | MOHC + NIMS-KMA          | HadGEM3-GC31-LL, -MM, UKESM1-0-LL, -1-LL, KACE-1-0-G | 5 | GA7.1/GA7.2 MetUM; UKESM1 adds UKCA+CLASSIC; KACE is NIMS-KMA fork of HadGEM3-GC31-LL | ☑ |
| 12 | MIROC + MRI              | MIROC6, MIROC-ES2L, MIROC-ES2H, MRI-ESM2-0 | 4 | SPRINTARS aerosols continue; MRI-ESM2.0 = MRI-AGCM3.5; Japanese group | ☑ |
| 13 | NCC + CMCC               | NorESM2-LM, -MM, CMCC-CM2-SR5, CMCC-ESM2 | 4 | NorESM2 (CAM6/CLM5/BLOM); CMCC-CM2 (NEMO3.6/OASIS3-MCT) | ☑ |
| 14 | CSIRO + CSIRO-ARCCSS     | ACCESS-CM2, ACCESS-ESM1-5 | 2 | Both use MetUM + MOM5/CICE; GA7.1 (CM2) vs GA8.0 (ESM1-5) | ☑ |
| 15 | AWI + INM                | AWI-CM-1-1-LR, -MR, AWI-ESM-1-REcoM, INM-CM4-8, INM-CM5-0 | 5 | AWI-CM (ECHAM6.3+FESOM2); INM-CM (INM atmos+INMOM ocean) | ☑ |
| 16 | CAS + FIO-QLNM + NUIST   | CAS-ESM2-0, FGOALS-f3-L, FGOALS-g3, FIO-ESM-2-0, NESM3 | 5 | Chinese academic institutions; CAS/IAP models + FIO ocean-wave ESM | ☑ |
| 17 | THU + SNU + AS-RCEC + KIOST + CCCR-IITM + UA | CIESM, SAM0-UNICON, TaiESM1, KIOST-ESM, IITM-ESM, MCM-UA-1-0 | 6 | Diverse small-centre contributions: Chinese/Korean/Taiwanese/Indian/UA | ☑ |

## Review progress (five passes complete, 2026-06-27)

### Overall tally

| Category | Count |
|----------|-------|
| Fully resolved — all 11 forcing components confirmed | 35 |
| Partially resolved — 1–10 components still ? | 25 |
| Permanently closed — no primary source retrievable | 4 |

### Permanently closed models

| Model | Reason |
|-------|--------|
| GISS-E3-G | All 4 available papers are AMIP development runs; Russotto et al. 2021 explicitly states the C180 resolution was not submitted to CMIP6; no CMIP6 historical coupled-configuration documentation paper published |
| EC-Earth3-ESM-1 | No primary paper published by EC-Earth Consortium; EC-Earth3-ESM-1-1 planned as CMIP7 successor |
| INM-CM4-8 | Primary paper is Volodin et al. 2018 (*Russian Journal of Numerical Analysis and Mathematical Modelling* 33(6):367–374, doi:10.1515/rnam-2018-0032), which is paywalled and could not be retrieved |
| MCM-UA-1-0 | CMIP1-vintage model (T21L20, University of Arizona); no CMIP6 configuration paper exists |

### Remaining unknowns — clustered by shared root cause

| Cluster | Models (N) | Remaining ? | Root cause |
|---------|-----------|-------------|-----------|
| ~~MPI-ESM family~~ | ~~MPI-ESM1-2-LR, -HR, MPI-ESM-1-2-HAM (3)~~ | ~~G SO VL~~ | **RESOLVED 2026-06-28**: G/SO/VL=✓std via input4MIPs uniqueness (seventh pass) + VL Mauritsen 2019 confirms prescribed AOD |
| HadGEM3/UKESM/KACE | HadGEM3-GC31-LL/-MM, UKESM1-0-LL/-1-LL, KACE-1-0-G (5) | MD | GA7.1 dust scheme (GLOMAP-mode); interactive vs prescribed unclear |
| CanESM5 family | CanESM5, CanESM5-CanOE (2) | SO | G=✓std resolved via input4MIPs uniqueness (seventh pass 2026-06-28). SO=~ (Cole 2023 implies CanAM5.0.0 pre-Matthes2017 solar — awaiting CCCma reply) |
| GISS E2-2 | GISS-E2-2-G (1) | G LU SO VL | Rind et al. 2020 + Orbe et al. 2020 confirm O/aerosol treatment but do not name GHG/LU/solar/volcanic datasets |
| GISS E2-2-H | GISS-E2-2-H (1) | G LU SO VL | Identical atmosphere to E2-2-G; O/SD/SI/BC/OC/MD/SS inferred from E2-2-G but not confirmed from a primary source for H |

| Model | Remaining ? | Best available paper | What's missing |
|-------|------------|---------------------|----------------|
| ~~GFDL-CM4~~ | ~~VL~~ | ~~Held et al. 2019 + Zhao et al. 2018~~ | **RESOLVED 2026-06-28**: VL=✓std (IACETH-SAGE3lambda-3-0-0; input4MIPs uniqueness + Zhao 2018 confirms prescribed AOD) |
| ~~CanESM5-1~~ | ~~G~~ | ~~Cole et al. 2023~~ | **RESOLVED 2026-06-28**: G=✓std (input4MIPs uniqueness, eighth pass) |
| ~~IPSL-CM6A-LR~~ | ~~SO~~ | ~~Boucher et al. 2020~~ | **RESOLVED 2026-06-28**: SO=✓std (input4MIPs uniqueness, seventh pass) |
| INM-CM5-0 | LU | Volodin & Gritsun 2018 | Land-use dataset not mentioned |
| CAS-ESM2-0 | LU | Zhang et al. 2020 | LUH2 not named in paper |
| ~~FGOALS-f3-L~~ | ~~VL~~ | ~~He et al. 2019 + Guo et al. 2020~~ | **RESOLVED 2026-06-28**: VL=✓std inferred from CMIP6 compliance + input4MIPs uniqueness (IACETH-SAGE3lambda-3-0-0 is the only registered stratospheric aerosol dataset in CMIP6 historical input4MIPs). |
| FIO-ESM-2-0 | LU | Bao et al. 2020 | Land-use dataset not named |
| CAMS-CSM1-0 | MD SS | Rong et al. 2021 | Natural aerosol background not discussed |
| IITM-ESM | O SO VL | Swapna et al. 2018 | Paper resolved G/aerosol/LU; ozone, solar, volcanic not mentioned |
| SAM0-UNICON | O SO VL | Park et al. 2019 | Describes ozone/solar/volcanic functionally; datasets not named |
| CIESM | O MD SS LU SO | Lin et al. 2020 | Paper names MACv2-SP and VL; all others absent |
| TaiESM1 | G O LU SO VL | Wang et al. 2021 + Lee et al. 2020 | SNAP aerosol confirmed; forcing datasets not named in either paper |
| KIOST-ESM | O MD SS LU SO VL | Pak et al. 2021 OceSc | G confirmed from Table 2; other components not discussed |

### Open items for modelling group follow-up

Items where the published literature is exhausted and resolution requires direct contact with the modelling group. Permanently closed models excluded.

**Priority 1 — single component remaining (one question resolves the model completely):**

| Model | Institution | Remaining ? | Question to ask |
|-------|-------------|-------------|-----------------|
| ~~GFDL-CM4~~ | ~~NOAA-GFDL~~ | ~~VL~~ | **RESOLVED 2026-06-28** — VL=✓std (IACETH-SAGE3lambda-3-0-0; input4MIPs uniqueness + Zhao 2018 confirms prescribed AOD). No contact needed. |
| ~~FGOALS-f3-L~~ | ~~CAS/LASG~~ | ~~VL~~ | **RESOLVED 2026-06-28** — VL=✓std (IACETH-SAGE3lambda-3-0-0 inferred; only CMIP6 historical stratospheric aerosol dataset in input4MIPs). No contact needed. |
| ~~CanESM5-1~~ | ~~CCCma~~ | ~~G~~ | **RESOLVED 2026-06-28** — G=✓std (input4MIPs uniqueness, eighth pass). No contact needed. |
| ~~IPSL-CM6A-LR~~ | ~~IPSL~~ | ~~SO~~ | **RESOLVED 2026-06-28** — SO=✓std (input4MIPs uniqueness, seventh pass). No contact needed. |
| INM-CM5-0 | INM (E. Volodin) | LU | Which land-use dataset was used — LUH2 (Hurtt et al. 2020) or CMIP5-era LUH1? Volodin & Gritsun 2018 does not mention land-use forcing. |
| CAS-ESM2-0 | CAS (X. Zhang) | LU | Did CoLM use LUH2 v2.1h for CMIP6 historical? Zhang et al. 2020 confirms G/O/SO/VL explicitly but does not name the land-use dataset. |
| FIO-ESM-2-0 | FIO-QLNM (Q. Bao) | LU | Which land-use dataset was used? Bao et al. 2020 confirms G/O/aerosols/SO/VL but does not name the land-use forcing. |
| CAMS-CSM1-0 | CAMS (X. Rong) | MD SS | What natural aerosol background (mineral dust, sea salt) was used? Rong et al. 2021 resolves anthropogenic aerosol (MACv2-SP) but does not discuss natural aerosol background. |

**Priority 2 — multiple components remaining (broader gap, higher value to contact):**

| Model | Institution | Remaining ? | Question to ask |
|-------|-------------|-------------|-----------------|
| ~~MPI-ESM1-2-LR/-HR, MPI-ESM-1-2-HAM (3)~~ | ~~MPI-M~~ | ~~G SO VL~~ | **RESOLVED 2026-06-28** — G/SO/VL=✓std (input4MIPs uniqueness, seventh pass). No contact needed. |
| CanESM5, CanESM5-CanOE (2) | CCCma (N. Swart) | SO | G=✓std resolved via input4MIPs uniqueness (seventh pass 2026-06-28). SO=~ remains: Cole 2023 implies CanAM5.0.0 used pre-Matthes2017 solar. Was the solar dataset updated from CMIP5-era Wang2005 to Matthes2017 for CanESM5? |
| GISS-E2-2-G | NASA-GISS (D. Rind / M. Kelley) | G LU SO VL | Rind et al. 2020 + Orbe et al. 2020 cover O/aerosols but are silent on GHG/LU/solar/volcanic datasets. |
| GISS-E2-2-H | NASA-GISS | G LU SO VL | Identical atmosphere to E2-2-G; same gap — no primary paper for H confirms these. |
| IITM-ESM | CCCR-IITM (P. Swapna) | SO VL | Swapna et al. 2018 resolves G/aerosols/LU but does not mention solar or volcanic datasets. |
| SAM0-UNICON | SNU (S.-B. Park) | O SO VL | Park et al. 2019 describes ozone/solar/volcanic forcing functionally (monthly ozone, monthly spectral irradiance, monthly zonal H₂SO₄) but does not name the input datasets. |
| CIESM | THU (J. Lin) | O MD SS LU SO | Lin et al. 2020 resolves SD/SI/BC/OC (MACv2-SP) and VL (✗dev); ozone, dust/sea-salt background, land-use, and solar datasets not mentioned. |
| TaiESM1 | AS-RCEC (R.-C. Wang) | G O LU SO VL | Wang et al. 2021 + Lee et al. 2020 confirm SNAP aerosol scheme but neither paper names any standard CMIP6 forcing dataset explicitly. |
| KIOST-ESM | KIOST (S.-K. Pak) | O MD SS LU SO VL | Pak et al. 2021 confirms G and CEDS-deviant aerosol; all other components undocumented in any available paper. |
| HadGEM3-GC31-LL/-MM, UKESM1-0-LL/-1-LL, KACE-1-0-G (5) | MOHC / NIMS-KMA | MD | GA7.1 dust scheme (GLOMAP-mode); was mineral dust prescribed or interactive, and if prescribed which climatology? |

### Key forcing deviations found

Deviations from the Eyring et al. 2016 standard protocol, confirmed from primary sources:

| Model(s) | Component | Deviation | Source |
|----------|-----------|-----------|--------|
| GISS-E2-1-G/G-CC/H | O | ✗dev — GISS-OMA-derived ozone, not CCMI Checa-Garcia 2018 | Kelley et al. 2020; Miller et al. 2021 |
| GISS-E2-1-G/G-CC/H | LU | ✗dev — CMIP5 LUH1 fractions used *inadvertently* (explicitly acknowledged) | Miller et al. 2021 §3.7 |
| GISS-E2-2-G/H | O | ✗dev — NINT-mode OMA offline, not CCMI | Rind et al. 2020; Orbe et al. 2020 |
| CESM2/CESM2-FV2 | O, VL | ✗dev — WACCM6-derived O+VL bundled file, not standard CCMI + IACETH | Danabasoglu et al. 2020 |
| CNRM-CM6-1/-HR | LU | ✗dev — ECOCLIMAP-II fixed PD land cover; explicit rejection of Eyring 2016 LUH2 | Voldoire et al. 2019 §3.2 |
| CNRM-CM6-1/-HR | SD BC OC MD SS | ✗dev — TACTIC_v2 offline aerosol bundle; not MACv2-SP or CEDS+BB4CMIP6 | Michou et al. 2020 |
| GFDL-CM4 | LU | ✗dev — CMIP5 LUH1 (Hurtt et al. 2011) explicitly stated | Zhao et al. 2018 Part 2 §10 |
| CAMS-CSM1-0 | LU | ✗dev — fixed land use (time-invariant) for all three ensemble members | Rong et al. 2021 Table 1 |
| FGOALS-f3-L | LU | ✗dev — Hurtt et al. 2011 CMIP5 LUH1 mean climatological values | He et al. 2019 |
| FGOALS-f3-L | MD SS | ✗dev — constant background AOD=0.14 for both natural aerosol species | Guo et al. 2020 |
| FIO-ESM-2-0 | MD SS | ✗dev — CMIP5 natural aerosol background | Bao et al. 2020 |
| KIOST-ESM | SD SI BC OC | ✗dev — simple carbon aerosol model (250 km emission-type); not CEDS+BB4CMIP6 or MACv2-SP | Pak et al. 2021 JAMES |
| SAM0-UNICON | LU | ✗dev — CMIP5 LUH1 retained; CLM4.5 (CESM1) incompatible with LUH2; only harvest area from CMIP6 | Park et al. 2019 §2 |
| CIESM | VL | ✗dev — Thomason et al. 2012 SAGE II-HALOE cited, not the CMIP6 Thomason et al. 2018/IACETH dataset | Lin et al. 2020 |
| BCC-CSM2-MR | SI MD SS | ✗dev — CMIP5-era Taylor 2012 masses (SI/MD/SS); not Kinne 2013 natural background | Wu et al. 2019 |

### Models exceeding standard protocol (interactive/prognostic treatments)

| Model(s) | Component | Treatment |
|----------|-----------|-----------|
| CESM2-WACCM | O, VL | ＋exc — fully interactive WACCM6 stratospheric chemistry + interactive MAM4 strat aerosol |
| GFDL-ESM4 | O | ＋exc — interactive ATMCHEM4.1 atmospheric chemistry |
| CNRM-ESM2-1 | O MD SS | ＋exc — fully interactive REPROBUS-C_v2 chemistry; TACTIC_v2 online dust + sea salt |
| IPSL-CM6A-LR | MD SS | ＋exc — interactive dust/sea-salt emissions via LMDZ-INCA |
| FIO-ESM-2-0 | CO₂ | ＋exc — **emissions-driven** historical (esm-hist mode) — rare among CMIP6 historical runs |
| CAS-ESM2-0 | MD SS | ＋exc — IAP AACM online interactive dust (Shao 2004) + sea salt (Athanasopoulou 2008) |
| SAM0-UNICON | MD SS | ＋exc — CAM5/MAM3 online interactive dust + sea salt (Liu et al. 2012) |

## ESM-specific forcing inputs (CMIP6)

CMIP6 ESMs add additional forcing datasets beyond the standard 12 keys. Document these in each model file alongside the standard table:

| ESM input | What it drives | Standard dataset (CMIP6) | Models likely affected |
|-----------|---------------|--------------------------|----------------------|
| N-deposition (reactive N) | Land/ocean biogeochemistry | Lamarque et al. 2019 (updated ACCMIP NHx/NOy) | All ESMs with active C cycle |
| CO2 mode | Carbon cycle / GHG forcing | Meinshausen2017 (conc.) or emissions-driven | Concentration-driven (`historical`) vs. emission-driven (`esm-hist`) |
| LUH2 harmonized land use | Land cover transitions | Hurtt et al. 2020 LUH2 v2h | All ESMs with land-use change |
| Iron/dust deposition | Ocean iron/BGC | Myriokefalitakis et al. 2018 | ESMs with ocean iron cycle |
| BC on snow/ice | Cryosphere albedo | Hoesly2018 CEDS BC emissions + deposition | Models with BC-on-snow scheme |
| Ocean C / DIC initialisation | Ocean C cycle spin-up | GLODAP v2 / observational | ESMs with ocean C cycle |

**In each model file:** add a section "ESM-specific forcing inputs" below the standard 12-key table if the model has an active carbon cycle or interactive chemistry.

## Cross-cutting questions to watch in CMIP6

- Do GISS E2.1 models continue the physics_version forcing split (NINT/TCAD/TCADI) from CMIP5, or has this been unified?
- Does EC-Earth3-AerChem TM5 interactive aerosols represent the first full interactive treatment for this modelling centre (vs CMIP5 EC-Earth direct-only ~std)?
- Has CNRM replaced Ammann2007 volcanic (CMIP5 dev) with GloSSAC/Thomason2018 (CMIP6 std)?
- Do any CMIP6 centres still use non-standard aerosol prescriptions (Kinne MACv1 for MPI, LMDZ-INCA for French group)?
- ~~Did E3SM-1-0 inherit CCSM4-era volcanic forcing (Ammann2003) or adopt Thomason2018?~~ **Answered (2026-06-27, corrected 2026-06-27):** VL=✓std — Golaz 2019 App. B.4 describes spectral interpolation of IACETH SAGE3λ v3 to match EAMv1 radiation bands; this is standard practice applied by all models receiving the dataset, not a deviation from the standard. NOT Ammann2003.
- How many models updated from Hurtt2011 (LUH1) to Hurtt2020 (LUH2)?
