# CMIP6 — first pass

## Session plan (token budget: ~4–5 stages per 5-hour session)

| Session | Stages | Institutions | Resume prompt |
|---------|--------|-------------|---------------|
| 1 | 1–4 | GFDL, GISS, NCAR, E3SM | ✓ COMPLETE (2026-06-22) |
| 2 | 5–9 | CCCma, BCC/CAMS, CNRM/IPSL, MPI-M/HAMMOZ, EC-Earth(1) | ✓ COMPLETE (2026-06-23) |
| 3 | 10–14 | EC-Earth(2), MOHC/NIMS-KMA, MIROC/MRI, NCC/CMCC, CSIRO | "continue CMIP6 — Session 3 starts at Stage 10 EC-Earth(2)" |
| 4 | 15–17 | AWI/INM, CAS/FIO/NUIST, THU/SNU/misc | "continue CMIP6 — Session 4 starts at Stage 15 AWI/INM" |

**At the start of each new session**: read `memory/project_cmip6_status.md` to confirm last completed stage, then find the corresponding `— NEXT ▶` entry below, seed the model files, and launch the workflow. Cross-stage findings from prior stages are in the individual model files under `research/cmip6/models/`.

---

**Model list**: `research/cmip6/data/cmip6-cv-model-list.csv` — 64 models (WCRP-CMIP CVs, accessed 2026-06-22)
**Verified matrix**: `research/cmip6/data/verified-forcing-matrix.csv` — 64 rows, all ? (seeded 2026-06-22)
**README**: `research/cmip6/README.md` — forcing standard, model registry, stage plan
**Baseline paper**: Eyring et al. 2016 (*GMD* doi:10.5194/gmd-9-1937-2016)
**Standard datasets**: G=Meinshausen2017, O=Checa-Garcia2018, SD/BC/OC=Hoesly2018/CEDS, LU=Hurtt2020/LUH2, SO=Matthes2017, VL=Thomason2018/GloSSAC

## CMIP6 Stage plan (17 stages, 64 models)

| Stage | Institution(s) | Models | N | CMIP5 link |
|-------|---------------|--------|---|------------|
| 1  | NOAA-GFDL                | GFDL-CM4, GFDL-ESM4 | 2 | CMIP5 Stage 1 |
| 2  | NASA-GISS                | GISS-E2-1-G, -G-CC, -E2-1-H, -E2-2-G, -E2-2-H, -E3-G | 6 | CMIP5 Stage 2 |
| 3  | NCAR                     | CESM2, CESM2-FV2, CESM2-WACCM | 3 | CMIP5 Stage 3 |
| 4  | E3SM-Project             | E3SM-1-0, -1-1, -1-1-ECA, -2-0 | 4 | CESM1 fork; shares CAM5/CLM5/CICE5/MPAS-O forcing stack with NCAR |
| 5  | CCCma                    | CanESM5, CanESM5-1, CanESM5-CanOE | 3 | CMIP5 Stage 4 |
| 6  | BCC + CAMS               | BCC-CSM2-MR, CAMS-CSM1-0 | 2 | BCC from CMIP5 Stage 4 |
| 7  | CNRM-CERFACS + IPSL      | CNRM-CM6-1, -HR, CNRM-ESM2-1, IPSL-CM6A-LR | 4 | CMIP5 Stage 6 |
| 8  | MPI-M + HAMMOZ-Consortium | MPI-ESM1-2-LR, -HR, MPI-ESM-1-2-HAM | 3 | CMIP5 Stage 7; HAMMOZ new |
| 9  | EC-Earth-Consortium (1)  | EC-Earth3, EC-Earth3-AerChem, EC-Earth3-CC | 3 | CMIP5 Stage 7 (EC-EARTH) |
| 10 | EC-Earth-Consortium (2)  | EC-Earth3-ESM-1, EC-Earth3-Veg, EC-Earth3-Veg-LR | 3 | EC-Earth3 variants |
| 11 | MOHC + NIMS-KMA          | HadGEM3-GC31-LL, -MM, UKESM1-0-LL, -1-LL, KACE-1-0-G | 5 | CMIP5 Stage 8; KACE new (HadGEM3 fork) |
| 12 | MIROC + MRI              | MIROC6, MIROC-ES2L, MIROC-ES2H, MRI-ESM2-0 | 4 | CMIP5 Stage 9 |
| 13 | NCC + CMCC               | NorESM2-LM, -MM, CMCC-CM2-SR5, CMCC-ESM2 | 4 | CMIP5 Stages 10+11 |
| 14 | CSIRO + CSIRO-ARCCSS     | ACCESS-CM2, ACCESS-ESM1-5 | 2 | CMIP5 Stage 5 |
| 15 | AWI + INM                | AWI-CM-1-1-LR, -MR, AWI-ESM-1-REcoM, INM-CM4-8, INM-CM5-0 | 5 | INM lineage from CMIP5 |
| 16 | CAS + FIO-QLNM + NUIST   | CAS-ESM2-0, FGOALS-f3-L, FGOALS-g3, FIO-ESM-2-0, NESM3 | 5 | CMIP5 Stage 10 (FGOALS/FIO) |
| 17 | THU + SNU + AS-RCEC + KIOST + CCCR-IITM + UA | CIESM, SAM0-UNICON, TaiESM1, KIOST-ESM, IITM-ESM, MCM-UA-1-0 | 6 | New entrants |

## CMIP6 Stage 1 (NOAA-GFDL: GFDL-CM4, GFDL-ESM4) — COMPLETE ✓ (2026-06-22)

Model files: `research/cmip6/models/NOAA-GFDL__GFDL-CM4.md`, `research/cmip6/models/NOAA-GFDL__GFDL-ESM4.md`
Workflow run: wf_bc550b03-31e

**Key findings:**
- **CM4 (AM4.0)**: PRESCRIBES ozone ✓std (reversal from CMIP5 CM3 interactive). Aerosols interactive from CEDS+BB4CMIP6 ✓std. G/SO ✓std generic.
- **ESM4 (AM4.1)**: INTERACTIVE ozone ＋exc (GFDL-ATMCHEM4.1, full trop+strat). Aerosols ✓std. G/SO ✓std generic.
- **VL**: Unconfirmed for both (Stenchikov 2006 claim refuted; IACETH SAGE3λ unverified).
- **LU**: Unconfirmed for both.
- **ESM4 open**: N-dep source (NCAR-CCMI-2-0 vs GFDL internal?); CO2 mode; Fe deposition for COBALT.

---

## CMIP6 Stage 2 (NASA-GISS: 6 models) — COMPLETE ✓ (2026-06-22)

Model files: `research/cmip6/models/NASA-GISS__GISS-E2-*.md`, `GISS-E3-G.md`
Workflow run: wf_3520e866-fd8

**Key findings:**
- **E2-1-G / -H / -G-CC** (all = NINT, physics_version=1): O=✗dev — prescribes GISS-OMA-derived ozone, NOT standard CCMI. CEDS+BB4CMIP6 emissions used offline to generate OMA fields; NINT ingests prescribed fields. SD/BC/OC=~ (emissions standard, mode indirect via OMA).
- **CC suffix = Carbon Cycle** (C4MIP), NOT chemistry — E2-1-G-CC ozone treatment IDENTICAL to E2-1-G.
- **MATRIX ≠ standard submission** — MATRIX is physics_version=5 (optional); standard historical is NINT (v1).
- **E2-2-G/H and E3-G ozone UNRESOLVED** — higher model top (0.002 hPa, L102/L106 vs L40) + QBO suggests interactive (＋exc), but unconfirmed. Primary doc for E2.2: Rind et al. 2020 (JGR doi:10.1029/2019JD032204).
- **VL**: unresolved for all 6 models (Thomason GloSSAC claim refuted).
- Keeble et al. 2021 evaluated NO GISS model — cannot close E2.2/E3 ozone status from that source.

---

## CMIP6 Stage 3 (NCAR: CESM2, CESM2-FV2, CESM2-WACCM) — COMPLETE ✓ (2026-06-22)

Model files: `research/cmip6/models/NCAR__CESM2.md`, `NCAR__CESM2-FV2.md`, `NCAR__CESM2-WACCM.md`
Workflow run: wf_5c9d74cf-149 (14 claims verified, 14 confirmed, 0 killed)

**Key findings:**
- **CESM2 and CESM2-FV2 (CAM6)**: O=✗dev, VL=✗dev — both prescribed from same bundled WACCM6-derived file (`ozone_strataero_WACCM_L70_zm5day_18500101-20150103_CMIP6ensAvg_c180923.nc`). NOT standard CCMI. Keeble 2021 verbatim: "Most models prescribing stratospheric ozone use the CMIP6 dataset (Checa-Garcia, 2018b), except CESM2, CESM2-FV2, and NorESM2, which prescribe ozone values from simulations performed with the CESM2-WACCM model."
- **CESM2-WACCM (WACCM6)**: O=＋exc — TSMLT interactive chemistry (~228 prognostic species, 150 photolysis + 403 gas-phase reactions, MAM4 aerosols). VL=＋exc — interactive stratospheric aerosol from volcanic SO2 via MAM4 (this is the source of the CESM2/FV2 prescribed files).
- **SD/BC/OC all three**: ✓std — CEDS (Hoesly 2018) + BB4CMIP6 (van Marle 2017). Upgrade from CMIP5 ACCMIP Lamarque 2010.
- **CESM2-FV2**: Resolution-only (FV ~1.9°×2.5° vs 1°); all forcing identical to CESM2.
- **Cross-cutting flag**: NorESM2 (Stage 13) also uses CESM2-WACCM-derived ozone per Keeble 2021 — test at Stage 13.
- **G/LU/SO**: Medium confidence std only — not explicitly confirmed by workflow.

---

## CMIP6 Stage 4 (E3SM-Project: E3SM-1-0, E3SM-1-1, E3SM-1-1-ECA, E3SM-2-0) — COMPLETE ✓ (2026-06-22)

Model files: `research/cmip6/models/E3SM-Project__E3SM-1-0.md`, `E3SM-1-1.md`, `E3SM-1-1-ECA.md`, `E3SM-2-0.md`
Workflow run: wf_29f9e93f-7df (8 confirmed, 6 killed of 14 verified)

**Key findings:**
- **G/SD/BC/OC all four**: ✓std — CEDS-2017-05-18 + BB4CMIP6; files `cmip6_mam4_{so2,bc_a4,pom_a4}_*_1850-2014_c180205.nc`. Golaz 2022: "same input data processing for GHGs and aerosol emissions" v1→v2.
- **O (E3SM-1-0/1-1/1-1-ECA — O3v1 module)**: ~ — HYBRID. Tropospheric O3 prescribed from CCMI input4MIPs (Hegglin et al. 2016 = UReading-CCMI-1-0) + stratospheric O3 interactive Linoz v2. Tropospheric portion IS standard CCMI (unlike CESM2 ✗dev); strat is interactive → overall verdict ~.
- **O (E3SM-2-0 — O3v2 module)**: ~ — HYBRID, more divergent. Trop O3 = passive tracer decaying to 30 ppb below 1 km (48-hour e-folding, no prescribed CCMI); strat = Linoz v2 interactive. Brown 2024 explicitly contrasts this with CESM2-WACCM6 fully interactive chemistry.
- **ECA suffix confirmed**: ECA = ELM v1.1 Equilibrium Chemistry Approximation (C-N-P plant/soil BGC, wholly terrestrial). NOT interactive atmospheric chemistry. Atmospheric forcing of E3SM-1-1-ECA = IDENTICAL to E3SM-1-1.
- **VL unresolved**: Both VL candidate claims refuted (center-specific DOE-ACME radiation file 0-1; GloSSAC v1 for E3SMv2 0-1). Standard IACETH unconfirmed. Genuinely open.
- **LU/SO**: unresolved.
- **E3SM-1-0 vs 1-1**: forcing identical (EAMv1 vs EAMv1.1 = incremental physics, same forcing stack).

**Cross-cutting lesson**: E3SM hybrid ozone (O3v1/O3v2) is a distinct pattern not seen in previous stages. The Linoz coefficient table (`linoz1850-2015_2010JPL_CMIP6_10deg_58km_c20171109.nc`) is chemistry PARAMETERS, not a prescribed ozone dataset — important disambiguation.

---

## CMIP6 Stage 5 (CCCma: CanESM5, CanESM5-1, CanESM5-CanOE) — COMPLETE ✓ (2026-06-22)

Model files: `research/cmip6/models/CCCma__CanESM5.md`, `CCCma__CanESM5-1.md`, `CCCma__CanESM5-CanOE.md`
Workflow run: wf_743d4a9c-430 (28 agents; 14/14 claims confirmed, 0 killed)

**Key findings:**
- **First CLEAN PASS** — no deviations from Eyring 2016 on any confirmed forcing.
- **O=✓std/TV all three**: Standard CMIP6 CCMI ozone (Checa-Garcia 2018 / UReading-CCMI-1-0). Swart 2019: "O3 is specified as varying spatially – typically employing that prescribed for CMIP6 (Checa-Garcia et al., 2018)." CanAM5 is NOT an interactive chemistry model.
- **SD/BC/OC/SI/MD/SS=✓std/TV all three**: Interactive prognostic bulk aerosol scheme (sulphate, BC, OC, sea salt, mineral dust) consuming CEDS+BB4CMIP6 emissions — NOT MACv2-SP. Both direct and indirect effects. Cole 2023: prognostic size-dependent dust + wind-dependent sea salt.
- **LU=✓std/TV all three**: LUH2 v2h (UofMD-landState-2-1-h); Swart 2019 section 2.2 verbatim. CLASSIC land C-N cycle.
- **VL=✓std/TV all three**: IACETH-SAGE3lambda-3-0-0 v3 confirmed; Rieger et al. 2020 (GMD 13:4831; CCCma+PCMDI authors incl. P. Durack) verbatim: "version 3 remains the official CMIP6 input."
- **SO CanESM5-1=✓std/TV**: Matthes 2017 / SOLARIS-HEPPA-3-2 confirmed (Cole 2023). **SO CanESM5.0=?**: Cole 2023 frames Matthes 2017 as a *change* introduced in CanAM5.0.3, implying CanESM5.0 used a different/older solar product.
- **G=?**: Not directly confirmed; expected ✓std.
- **CanOE**: Ocean BGC only — replaces CMOC (NOT TOPAZ as previously assumed). Christian 2022 confirms atmospheric forcing identical. Atmospheric forcing = as CanESM5.
- **N-dep**: Not confirmed; NCAR-CCMI-2-0 expected for CLASSIC C-N cycle.

---

## CMIP6 Stage 6 (BCC + CAMS: BCC-CSM2-MR, CAMS-CSM1-0) — COMPLETE ✓ (2026-06-22)

Model files: `research/cmip6/models/BCC__BCC-CSM2-MR.md`, `research/cmip6/models/CAMS__CAMS-CSM1-0.md`
Workflow run: wf_1a7b005d-ffd (28 agents; 13/14 confirmed, 1 killed)

**Key findings:**
- **BCC-CSM2-MR O=✓std/TV**: Standard CMIP6 CCMI ozone confirmed by Keeble 2021 Table 1. Resolves CMIP5 unknown.
- **BCC-CSM2-MR SD/BC/OC=✓std/TV**: MACv2-SP (Stevens 2017) nine-plume prescribed aerosol — Eyring 2016 sanctioned prescribed path. NOT interactive CEDS+BB4CMIP6. Wu 2019 verbatim.
- **BCC-CSM2-MR SI=✗dev/TV**: Indirect effect uses CMIP5 Taylor 2012 aerosol masses + NCAR CAM-Chem Lamarque 2012 nitrate — non-input4MIPs supplemental datasets, NOT Eyring 2016 protocol.
- **BCC-CSM2-MR G/SO/VL/LU=✓std/TV**: Full standard CMIP6 forcing stack from input4MIPs (Xin 2021). LU now applied — reverses CMIP5 BCC LU=✗dev exclusion.
- **CAMS-CSM1-0**: Only G=✓std confirmed (Meinshausen 2017, He 2020 AAS). All other forcings (O/SD/BC/OC/LU/SO/VL) remain UNRESOLVED (?).

---

## CMIP6 Stage 7 (CNRM-CERFACS + IPSL: CNRM-CM6-1, -HR, CNRM-ESM2-1, IPSL-CM6A-LR) — COMPLETE ✓ (2026-06-23; wf_e2b2d348-b4e)

Model files: `research/cmip6/models/CNRM-CERFACS__CNRM-CM6-1.md`, `-HR.md`, `CNRM-ESM2-1.md`, `IPSL__IPSL-CM6A-LR.md`

**Key findings:**
- **CNRM-CM6-1 O=~/TV**: Linearized strat ozone (prognostic O3 with precomputed CNRM-ESM2-1 rates) + prescribed CCMI trop. Intermediate between ✓std and ＋exc. CMIP5 MOBIDIC downgraded, not corrected.
- **CNRM-CM6-1 SD/BC/OC=✗dev/TV**: TACTIC_v2-derived monthly AOD fields prescribed offline — neither MACv2-SP nor CEDS+BB4CMIP6 interactive. Michou 2020 verbatim: "monthly AOD fields varying each year, coming from atmosphere-only type simulations using the TACTIC_v2 scheme."
- **CNRM-CM6-1-HR**: All forcing expected identical to CNRM-CM6-1 (resolution only; NOT explicitly confirmed by Stage 7 workflow).
- **CNRM-ESM2-1 O=＋exc/TV**: REPROBUS-C_v2 fully interactive (168 reactions, ~63 species, every time step). One of only 6 CMIP6 models with interactive stratospheric chemistry (Keeble 2021). NOTE: seeded stub incorrectly named TACTIC for ozone — corrected in final model file.
- **CNRM-ESM2-1 SD/BC/OC=~/TV**: TACTIC_v2 interactive aerosols — emissions provenance unconfirmed.
- **IPSL-CM6A-LR O=✓std/TV**: CMIP5 offline INCA+REPROBUS deviation CORRECTED. Now standard CCMI with tropopause-stretching (Lurton 2020: doi:10.1029/2019MS001940 — new key paper, "Implementation of the CMIP6 forcing data in the IPSL-CM6A-LR model").
- **LARGE SCOPE GAPS**: G, LU, SO, VL unconfirmed for all 4; IPSL aerosols entirely unconfirmed.
- Sources: Michou et al. 2020 (doi:10.1029/2019MS001816); Voldoire et al. 2019 (doi:10.1029/2019MS001770); Séférian et al. 2019 (doi:10.1029/2019MS001885); Lurton et al. 2020 (doi:10.1029/2019MS001940); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)

---

## CMIP6 Stage 8 (MPI-M + HAMMOZ-Consortium: MPI-ESM1-2-LR, -HR, MPI-ESM-1-2-HAM) — COMPLETE ✓ (2026-06-23; wf_f9ea73ac-462)

Model files: `research/cmip6/models/MPI-M__MPI-ESM1-2-LR.md`, `MPI-M__MPI-ESM1-2-HR.md`, `HAMMOZ-Consortium__MPI-ESM-1-2-HAM.md`

**Key findings:**
- **MPI-ESM1-2-LR/HR O=✓std/TV**: CCMI prescribed on all levels — Keeble 2021: "For both configurations, ozone is prescribed on all levels following the CMIP6 recommendations."
- **MPI-ESM1-2-LR/HR SD/BC/OC/SI=✓std/TV**: **MACv2-SP prescribed aerosol (CMIP5 MAC-v1 deviation CORRECTED)**. Mauritsen 2019 verbatim: "The old climatology of anthropogenic aerosol has been replaced with the newly developed MACv2-SP parameterization... which has been designed for the usage in the framework of CMIP6." WDC-Climate: "aerosol: none, prescribed MACv2-SP."
- **MPI-ESM1-2-LR/HR MD/SS=FXc**: Kinne et al. 2013 fixed natural aerosol background. Not time-varying.
- **MPI-ESM1-2-LR/HR LU=✓std/TV**: LUH2v2h — LR via dynamic transitions; HR via prescribed maps. Same source.
- **MPI-ESM-1-2-HAM O=✓std**: Identical to LR/HR (HAM2 has no ozone chemistry; MOZ1.0 not used for CMIP6).
- **MPI-ESM-1-2-HAM SD/BC/OC/MD/SS=~/TV**: HAM2 interactive aerosols — CMIP6 historical emissions provenance UNCONFIRMED. Neubauer 2019 standalone runs used ACCMIP MACCity (NOT CEDS, NOT CMIP6-historical); cannot transpose.
- **All three — gaps**: G/SO/VL unconfirmed; ESM inputs (N-dep, CO2-mode, Fe) unconfirmed.
- Key DOI note: Mauritsen et al. 2019 = JAMES doi:10.1029/2018MS001400 (NOT GMD gmd-12-3241-2019 — that DOI was wrong in the workflow brief).
- Sources: Mauritsen et al. 2019 (doi:10.1029/2018MS001400); Stevens et al. 2017 (doi:10.5194/gmd-10-433-2017); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)

---

## CMIP6 Stage 9 (EC-Earth-Consortium 1: EC-Earth3, EC-Earth3-AerChem, EC-Earth3-CC) — COMPLETE ✓ (2026-06-23; wf_1fb84fb8-c26; 27 agents; 13/14 confirmed, 1 killed)

Model files written: `research/cmip6/models/EC-Earth-Consortium__EC-Earth3.md`, `EC-Earth-Consortium__EC-Earth3-AerChem.md`, `EC-Earth-Consortium__EC-Earth3-CC.md`; CSV rows 29-31 updated.

**Key findings (Stage 9):**
- EC-Earth3: SD/BC/OC/SI=✓std (MACv2-SP: offline TM5 PI 1850 climatology + MACv2-SP anthropogenic plumes; CMIP5 MACC offline deviation CORRECTED); LU=✓std (LUH2 Hurtt 2020 applied indirectly via EC-Earth3-Veg precomputed vegetation fields — CMIP5 LU exclusion CORRECTED); O=✓std (CCMI prescribed, inferred from AerChem CCMI nudge target); G=✓std (Meinshausen 2017/2020); SO=✓std (Matthes 2017); MD/SS=FXc (TM5 PI 1850 natural background); VL=~ (CMIP6 strat aerosol prescribed, IACETH source_id unconfirmed)
- EC-Earth3-AerChem: O=＋exc (TM5-MP interactive trop ozone+methane + CCMI strat nudge; van Noije 2021 doi:10.5194/gmd-14-5637-2021); SD/BC/OC/SI/MD/SS=＋exc (TM5-MP M7 interactive aerosol consuming CEDS+BB4CMIP6 confirmed). CRITICAL: EC-Earth3-AerChem does NOT appear in Keeble 2021's 6-model interactive-chemistry list (paper predates CMIP6 AerChem submission); sole primary source = van Noije 2021 (DOI is 5637, NOT 5079 as in Stage 9 prompt)
- EC-Earth3-CC: All atmospheric forcing INFERRED identical to EC-Earth3 (shared IFS; no CC-specific direct confirmation); LPJG active C cycle; N-dep=? (NCAR-CCMI-2-0 expected, not confirmed); CO2-mode=?
- CMIP6 TM5 PI aerosol baseline differs from MPI-M Kinne 2013 but both result in ✓std for EC-Earth3/MPI-ESM1.2 prescribed-path aerosols

---

**SESSION 2 (Stages 5–9) — COMPLETE ✓ (2026-06-23)**

**Resume Session 3 with**: "continue CMIP6 — Session 3 starts at Stage 10 EC-Earth(2)"

---

## CMIP6 Stage 10 (EC-Earth-Consortium 2: EC-Earth3-ESM-1, EC-Earth3-Veg, EC-Earth3-Veg-LR) — COMPLETE ✓ (2026-06-26; wf_c0deb3a6-6f8; 31 agents; 11/14 confirmed, 3 killed)

Model files written: `research/cmip6/models/EC-Earth-Consortium__EC-Earth3-ESM-1.md`, `EC-Earth-Consortium__EC-Earth3-Veg.md`, `EC-Earth-Consortium__EC-Earth3-Veg-LR.md`; CSV rows 32-34 updated.

**Key findings (Stage 10):**
- EC-Earth3-Veg: LU=✓std DIRECT LUH2 ingestion via LPJ-GUESS v4; Döscher 2022 verbatim: "The atmospheric tuning for EC-Earth3 and EC-Earth3-Veg is the same" → ALL atmospheric forcing (O/SD/BC/OC/SI/MD/SS/G/SO/VL) confirmed identical to EC-Earth3 base. N-dep source_id for LPJ-GUESS UNCONFIRMED (Hegglin 2021 REFUTED; NCAR-CCMI-2-0 not confirmed)
- EC-Earth3-Veg-LR: TL159/L62 (top 5 hPa); all forcing identical to EC-Earth3-Veg confirmed. Model top difference (5 hPa vs 0.01 hPa) limits stratospheric resolution but doesn't change prescribed datasets
- EC-Earth3-ESM-1: PISCES v2 ocean BGC CONFIRMED (WDC-Climate verbatim: "ocnBgchem: PISCES v2"). CRITICAL: EC-Earth3-ESM-1 is NOT in Döscher 2022 (Table 1 covers 5 configs only; ESM-1 absent). All atmospheric forcing verdicts remain ? (inferred from shared IFS, not confirmed from a source naming ESM-1). LU mechanism, land BGC version, N-dep, Fe deposition, CO2-mode all UNKNOWN.
- VL=~ confirmed for all Stage 10 models: IACETH-SAGE3lambda-3-0-0 formally registered (doi:10.22033/ESGF/input4MIPs.1681) but NOT named in Döscher 2022.

---

## CMIP6 Stage 11 (MOHC + NIMS-KMA: HadGEM3-GC31-LL, HadGEM3-GC31-MM, UKESM1-0-LL, UKESM1-1-LL, KACE-1-0-G) — COMPLETE ✓ (2026-06-26; wf_205a78ae-659; 28 agents; 11/14 confirmed, 3 killed)

Model files written: `research/cmip6/models/MOHC__HadGEM3-GC31-LL.md`, `MOHC__HadGEM3-GC31-MM.md`, `MOHC__UKESM1-0-LL.md`, `MOHC__UKESM1-1-LL.md`, `NIMS-KMA__KACE-1-0-G.md`; CSV rows 35-39 updated.

**Key findings (Stage 11):**
- **All 5 models — G=✓std**: Meinshausen 2017; Sellar 2019 verbatim confirmed.
- **All 5 — aerosols (SD/BC/OC/SI/SS)=✓std (GLOMAP-mode CEDS+BB4CMIP6)**: NOT MACv2-SP for historical — MACv2-SP is HighResMIP only (Roberts 2019 verbatim). GLOMAP-mode interactive prognostic scheme consuming CEDS + BB4CMIP6. BC/OC biomass burning scaled ×2 per Johnson et al. 2016.
- **All 5 — LU=✓std**: LUH2 v2.1h via JULES (medium confidence).
- **All 5 — SO=✓std**: Matthes 2017; Roberts 2019 verbatim.
- **All 5 — VL=✓std**: IACETH-SAGE3lambda-3-0-0 lineage; Sellar 2019 verbatim (Thomason 2018 + Arfeuille 2014 description uniquely identifies IACETH dataset); confirmed for both families by Mulcahy 2020.
- **HadGEM3-GC31-LL/-MM + KACE — O=✓std**: CCMI prescribed (Hegglin 2016 / UReading-CCMI-1-0); Roberts 2019 verbatim. GC3.1 ozone-redistribution scheme applied.
- **UKESM1-0-LL/-1-LL — O=＋exc**: UKCA StratTrop fully interactive chemistry; Keeble 2021 6-model list confirmed; Archibald et al. 2020 = description paper.
- **UKESM1-0-LL/-1-LL — N-dep=✓std**: NCAR-CCMI-2-0 CONFIRMED from Sellar 2019 Appendix Table A5 verbatim (first explicit N-dep source_id in CMIP6 review).
- **Open items**: UKESM1 Fe-dep (MEDUSA2); UKESM1 CO2-mode; MD=? all 5 (GA7.1 GLOMAP species list does not include dust explicitly).
- **Citation corrections**: GA7.0/7.1 = Walters et al. 2019 (doi:10.5194/gmd-12-1909-2019) NOT Williams 2018; HadGEM3-GC31 primary = Roberts et al. 2019 GMD (doi:10.5194/gmd-12-4999-2019) NOT JAMES doi.
- Sources: Roberts 2019 (gmd-12-4999-2019); Walters 2019 (gmd-12-1909-2019); Mulcahy 2020 (gmd-13-6383-2020); Sellar 2019 (doi:10.1029/2019MS001739); Keeble 2021 (acp-21-5015-2021); Archibald 2020 (gmd-13-1223-2020)

---

## CMIP6 Stage 12 (MIROC + MRI: MIROC6, MIROC-ES2L, MIROC-ES2H, MRI-ESM2-0) — COMPLETE ✓ (2026-06-26; wf_3d781646-4df; 30 agents; 12/14 confirmed, 2 killed)

Model files: `research/cmip6/models/MIROC__MIROC6.md`, `MIROC__MIROC-ES2L.md`, `MIROC__MIROC-ES2H.md`, `MRI__MRI-ESM2-0.md`

**Key findings:**
- **MIROC6**: All forcing ✓std. SPRINTARS interactive aerosols with CEDS+BB4CMIP6. O=✓std (CCMI prescribed; Tatebe 2019 verbatim "Hegglin et al. 2019"). VL=✓std (Thomason 2019 SAD = CMIP6 standard; deviation claim refuted 0-1). LU=✓std inferred (LUH1 claim refuted 0-1).
- **MIROC-ES2L**: All forcing ✓std; SPRINTARS6.0 interactive aerosols confirmed. Hajima 2020 verbatim: "CMIP6 official forcing datasets (version 6.2.1)". CO2-mode=concentration-driven (verbatim). N-dep=✓std (NCAR-CCMI-2-0; WDC-Climate verbatim). Appendix C (per-forcing source_ids) not retrieved. Fe-dep=?.
- **MIROC-ES2H**: All forcing inferred from shared ES2L components (VISIT-e, OECO2, SPRINTARS). Watanabe 2021 primary paper not retrieved.
- **MRI-ESM2-0**: O=＋exc confirmed (MRI-CCM2.1 interactive trop+strat; Keeble 2021 verbatim). All other forcing unconfirmed — Yukimoto 2019 not successfully retrieved.
- **CMIP5 → CMIP6 transition**: MIROC-ESM-CHEM had O=＋exc (CHASER interactive) → MIROC-ES2L switched to prescribed CCMI (O=✓std). MRI-CGCM3 all unresolved → MRI-ESM2-0 confirms O=＋exc (MRI-CCM2.1).

---

## CMIP6 Stage 13 (NCC + CMCC: NorESM2-LM, NorESM2-MM, CMCC-CM2-SR5, CMCC-ESM2) — COMPLETE ✓ (2026-06-26; wf Session 3)

Model files: `research/cmip6/models/NCC__NorESM2-LM.md`, `NCC__NorESM2-MM.md`, `CMCC__CMCC-CM2-SR5.md`, `CMCC__CMCC-ESM2.md`; CSV rows 44-47 updated.

**Key findings:**
- **NorESM2-LM/MM — O=✗dev**: WACCM6-derived ozone confirmed (Keeble 2021 verbatim + Seland 2020 verbatim; 5-0 vote). Same source as CESM2/FV2 (Stage 3). All other forcing ✓std.
- **NorESM2 VL=✓std (CRITICAL distinction from CESM2)**: Seland 2020 verbatim: "monthly distributions of stratospheric sulfate aerosols follow now the CMIP6 recommendations (Thomason et al., 2018)." NorESM2 uses SEPARATE input streams for ozone and strataero — NOT bundled as in CESM2. VL=✓std despite O=✗dev.
- **CMCC-CM2-SR5/ESM2**: Not covered in Stage 13 research. All verdicts ? pending targeted second pass. Lovato 2022 (ESM2) and Cherchi 2019 (CM2-SR5) not retrieved.

---

## CMIP6 Stage 14 (CSIRO + CSIRO-ARCCSS: ACCESS-CM2, ACCESS-ESM1-5) — COMPLETE ✓ (2026-06-26; wf_915f8ce0-f07)

Model files: `research/cmip6/models/CSIRO-ARCCSS__ACCESS-CM2.md`, `CSIRO__ACCESS-ESM1-5.md`; CSV rows 48-49 updated.

**Key findings:**
- **ACCESS-CM2 aerosols confirmed**: UKCA-GLOMAP-mode confirmed (Fiddes 2025 ACP verbatim + WDC-Climate + WCRP CVs). Shares full GA7.1 aerosol stack with HadGEM3-GC31-LL: CEDS+BB4CMIP6 BC/OC ×2 per Johnson 2016. GA7.1 atmosphere byte-identical to HadGEM3-GC31-LL (1-0 confirmed). G/O/LU/SO/VL inferred from byte-identical MetUM-HadGEM3-GA7.1 (not directly verified for ACCESS-CM2). MD=? as with HadGEM3.
- **ACCESS-ESM1-5 scheme split confirmed**: CLASSIC v1.0 aerosol confirmed (WDC-Climate verbatim; Fiddes 2025 ACP explicitly contrasts CLASSIC vs GLOMAP). HadGAM2 r1.1 (N96L38, top ~39km) atmosphere confirmed — older GA1.0 era, markedly lower top than GA7.1. All forcing datasets unverified; requires Ziehn 2020 targeted pass.
- **Refuted claim**: ACCESS-AM2 biomass burning = GFED4s (0-1; GFED4s is HighResMIP only, not CMIP6 historical).

---

## CMIP6 Stage 15 (AWI + INM: AWI-CM-1-1-LR, -MR, AWI-ESM-1-REcoM, INM-CM4-8, INM-CM5-0) — COMPLETE ✓ (2026-06-27; wf_75e312c8-82e)

Model files: `research/cmip6/models/AWI__AWI-CM-1-1-LR.md`, `AWI__AWI-CM-1-1-MR.md`, `AWI__AWI-ESM-1-REcoM.md`, `INM__INM-CM4-8.md`, `INM__INM-CM5-0.md`; CSV rows 50-54 updated.

**Key findings:**
- **AWI-CM-1-1-LR/MR**: All forcing INFERRED from ECHAM6.3.04p1+JSBACH3.20 = MPI-ESM1-2-LR lineage. O=✓std (CCMI), aerosols=✓std (MACv2-SP), MD/SS=FXc (Kinne 2013), LU=✓std (LUH2), SO=✓std (Matthes 2017), VL=✓std (IACETH). WDC-Climate C6CMAWAWMhi has no forcing dataset list; Semmler 2020 not extracted. AWI-specific ozone claim refuted (0-1). All verdicts medium confidence by inheritance.
- **AWI-ESM-1-REcoM**: Atmospheric forcing identical to AWI-CM-1-1-LR (inferred). ESM inputs (N-dep, Fe-dep, CO2-mode) all ?; Lacroix 2021 not extracted.
- **INM-CM5-0**: G=✓std, O=✓std, SO=✓std, VL=✓std (Volodin & Gritsun 2018 ESD verbatim: "prescribed as recommended for the historical run of CMIP6"). SD/BC/OC/SI=✗dev (INM-AER1: 10-species interactive block computing aerosol concentrations from CMIP6 emissions, NOT MACv2-SP; only first indirect effect). LU=?, MD/SS=? (interactive in AER1).
- **INM-CM4-8**: All ? (Volodin et al. 2018 JAMES not extracted). Aerosol scheme unconfirmed — do NOT assume same as INM-CM5-0. Low model top L21 ~10 hPa.

---

## CMIP6 Stage 16 (CAS + FIO-QLNM + NUIST: CAS-ESM2-0, FGOALS-f3-L, FGOALS-g3, FIO-ESM-2-0, NESM3) — COMPLETE ✓ (2026-06-27; wf_dcf6412c-ee4)

Model files: `research/cmip6/models/CAS__CAS-ESM2-0.md`, `CAS__FGOALS-f3-L.md`, `CAS__FGOALS-g3.md`, `FIO-QLNM__FIO-ESM-2-0.md`, `NUIST__NESM3.md`; CSV rows 55-59 updated.

**Key findings:**
- **FGOALS-f3-L**: G=✓std (Meinshausen 2017), O=✓std (CCMI), SO=✓std (Matthes 2017) from *Adv. Atmos. Sci.* verbatim. SD/BC/OC=✓std (summary-level "full CMIP6 forcing" only). MD/SS/LU/VL=?.
- **FGOALS-g3**: O=✓std (Keeble 2021 verbatim: no interactive chemistry, prescribed in stratosphere AND troposphere following CMIP6 recommendations; despite L26 ~36km low top, no deviation). All other forcing ?.
- **CAS-ESM2-0**: Aerosol = IAP AACM (centre-specific integrated aerosol+atmospheric-chemistry module; Wei 2019 ACP + WDCC C6CMCASCE0hi). SD/BC/OC/SI=~ (centre-specific interactive, inputs unconfirmed). G/O/SO/VL/LU all ?.
- **FIO-ESM-2-0**: Zero verified findings. Bao 2020 not retrieved. CAM5.3 lineage suggests CEDS+BB4CMIP6 but unconfirmed. All ?.
- **NESM3**: All forcing INFERRED from ECHAM6.3+JSBACH3.1 = MPI-ESM1-2-LR. **Architecture correction**: land = JSBACH v3.1 (NOT CLM4.5 as in stage-configs); confirmed by WDCC C6CMNUINEShi. O=✓std inferred; MACv2-SP/Kinne2013/LUH2/Matthes2017/IACETH all inferred (medium confidence).

---

## CMIP6 Stage 17 (THU + SNU + AS-RCEC + KIOST + CCCR-IITM + UA: CIESM, SAM0-UNICON, TaiESM1, KIOST-ESM, IITM-ESM, MCM-UA-1-0) — COMPLETE ✓ (2026-06-27; wf_7ae34d09-4e8; 32 agents; 11/14 confirmed, 3 killed)

Model files: `research/cmip6/models/THU__CIESM.md`, `SNU__SAM0-UNICON.md`, `AS-RCEC__TaiESM1.md`, `KIOST__KIOST-ESM.md`, `CCCR-IITM__IITM-ESM.md`, `UA__MCM-UA-1-0.md`; CSV rows 60-65 updated.

**Key findings:**
- **KIOST-ESM — CRITICAL ARCHITECTURE CORRECTION**: GFDL-lineage (GFDL-AM2.0 C48/32L/top 2 hPa + GFDL-MOM5.0 + GFDL-SIS + NCAR-CLM4), NOT HadGEM2-AO/NEMO3.6/TOPAZ4 as in stage-configs. Confirmed Pak et al. 2021 JAMES doi:10.1029/2020MS002212 + WDC-Climate. Aerosol CV='none'; atmosChem='Simple carbon aerosol model (emission type)' (250 km) — SD/BC/OC/SI=✗dev. G/O/LU/SO/VL all ?.
- **IITM-ESM — ARCHITECTURE CORRECTION**: IITM-GFSv1 T62L64 (192×94, 64L, top 0.2 mb), NOT SPEEDY T30L18. GFS-based atmosphere confirmed by WDC-Climate verbatim. MACv2-SP aerosol claim REFUTED (0-1). All forcing ?.
- **TaiESM1**: Aerosol = SNAP (Statistical-Numerical Aerosol Parameterization; Chen et al. 2013) — proprietary bulk-modal scheme, NOT CAM5 MAM3. Lee et al. 2020 GMD doi:10.5194/gmd-13-3887-2020 (NOT the JAMES doi in stage-configs) names NO specific CMIP6 forcing datasets. SD/BC/OC/SI/MD/SS=~. G/O/LU/SO/VL=?.
- **CIESM (THU), SAM0-UNICON (SNU), MCM-UA-1-0 (UA)**: No confirmed findings. All forcing ?.

**SESSION 4 (Stages 15–17) — COMPLETE ✓ (2026-06-27)**
**ALL 17 STAGES COMPLETE — CMIP6 FIRST PASS COMPLETE ✓**

Second-pass priorities (unresolved questions requiring targeted paper retrieval):
- MRI-ESM2-0: all forcing except O=＋exc unverified; requires Yukimoto 2019
- MIROC-ES2H: all forcing inferred from ES2L; requires Watanabe 2021
- CMCC-CM2-SR5/ESM2: all ? pending Cherchi 2019 + Lovato 2022
- ACCESS-ESM1-5: all forcing unverified; requires Ziehn 2020
- INM-CM4-8: all ? requires Volodin et al. 2018 JAMES
- CIESM, SAM0-UNICON, MCM-UA-1-0: all ? requires primary paper extractions
- TaiESM1: actual CMIP6 1850–2014 forcing undocumented (Lee 2020 describes 1850–2005 only)
- KIOST-ESM/IITM-ESM ESM inputs (N-dep, Fe-dep, CO2-mode): all ?

### Stage 9 workflow prompt (archived):

Document the climate forcing datasets used in three EC-Earth-Consortium CMIP6 models — EC-Earth3, EC-Earth3-AerChem, and EC-Earth3-CC — for their CMIP6 `historical` experiment (1850–2014).

CONTEXT: Part of a forcing review of 64 CMIP6 models against the Eyring et al. 2016 (GMD doi:10.5194/gmd-9-1937-2016) standard protocol. Stage 9 of 17, Session 2 of 4.

KEY ARCHITECTURE:
- EC-Earth3: IFS cy36r4 atmosphere (T255L91, ~0.7°) + HTESSEL land (static BGC) + NEMO3.6 (ORCA1) ocean + LIM3 sea ice. AOGCM. CMIP5 predecessor EC-EARTH used offline ECMWF/MACC aerosol climatology (✗dev) and excluded LU (✗dev). Did EC-Earth3 correct both deviations?
- EC-Earth3-AerChem: EC-Earth3 base + TM5-MP atmospheric chemistry-transport model (fully coupled, interactive ozone AND aerosol). Expected: O=＋exc, SD/BC/OC=＋exc. Primary source: van Noije et al. 2021 (GMD doi:10.5194/gmd-14-5079-2021).
- EC-Earth3-CC: EC-Earth3 base + active carbon cycle (LPJG = LPJ-GUESS). Same atmospheric forcing as EC-Earth3 (expected). Additional ESM inputs: N-dep (NCAR-CCMI-2-0?), CO2-mode.

PRIOR-STAGE CROSS-CUTTING PATTERNS (Stages 1–8):
- Standard CCMI ozone (✓std): GFDL-CM4, CanESM5/5-1/CanOE, BCC-CSM2-MR, IPSL-CM6A-LR, MPI-ESM1-2-LR/HR
- Interactive ozone (＋exc): GFDL-ESM4, CESM2-WACCM, CNRM-ESM2-1; Keeble2021 lists only 6 models — AerChem (TM5) expected to be one
- MACv2-SP prescribed aerosol (✓std): BCC-CSM2-MR, MPI-ESM1-2-LR/HR — EC-Earth3 likely uses different approach
- CEDS+BB4CMIP6 interactive (✓std): GFDL-CM4/ESM4, CanESM5, E3SM — test EC-Earth3
- Center-specific offline aerosol (✗dev): CMIP5 EC-EARTH MACC (corrected?), CNRM-CM6-1 TACTIC_v2

CMIP6 standard protocol (Eyring 2016) baseline:
- G: Meinshausen et al. 2017 (UoM-CMIP-1-2-0)
- O: Checa-Garcia et al. 2018 CCMI (UReading-CCMI-1-0)
- SD/BC/OC: CEDS (CEDS-2017-05-18) + BB4CMIP6 (VUA-CMIP-BB4CMIP6-1-2) interactive OR MACv2-SP (MPI-M-MACv2-SP-1-0) prescribed
- LU: Hurtt 2020 LUH2 v2.1h (UofMD-landState-2-1-h)
- SO: Matthes 2017 SOLARIS-HEPPA-3-2 (SOLARIS-HEPPA-3-2)
- VL: IACETH SAGE3lambda v3.0.0 (IACETH-SAGE3lambda-3-0-0)
- N-dep (ESMs): NCAR-CCMI-2-0

PRIMARY SOURCES:
- All EC-Earth3 variants: Döscher et al. 2022 (GMD doi:10.5194/gmd-15-2973-2022) — CRITICAL primary source; Table 1 documents all forcing datasets for EC-Earth3
- EC-Earth3-AerChem: van Noije et al. 2021 (GMD doi:10.5194/gmd-14-5079-2021) — primary source for TM5-MP chemistry and emissions
- Keeble et al. 2021 (ACP 21, 5015) — Table 1: EC-Earth3-AerChem should appear in interactive-chemistry group
- CMIP5 comparison: Hazeleger et al. 2012 or EC-Earth2.3 description for MACC aerosol baseline
- ES-DOC: https://explore.es-doc.org (search EC-Earth3 historical, EC-Earth3-AerChem historical)

KEY QUESTIONS:
1. O (EC-Earth3 and EC-Earth3-CC): Standard CCMI prescribed (✓std expected)? CMIP5 was ✓std Cionni.
2. SD/BC/OC (EC-Earth3 and EC-Earth3-CC): CMIP5 used ECMWF/MACC offline (✗dev). Did CMIP6 EC-Earth3 update to CEDS+BB4CMIP6 interactive or MACv2-SP? Döscher 2022 Table 1 should specify.
3. LU (EC-Earth3 and CC): HTESSEL is static BGC — does it ingest LUH2 v2.1h? CMIP5 excluded LU. Did CMIP6 correct this?
4. SO/VL (all three): Matthes 2017 / IACETH SAGE3λ? Unresolved in CMIP5.
5. EC-Earth3-AerChem: TM5-MP interactive ozone (＋exc expected). What emissions does TM5 consume? CEDS+BB4CMIP6 (✓std/＋exc) or other?
6. EC-Earth3-CC ESM inputs: N-dep (NCAR-CCMI-2-0?) for LPJG, CO2-mode.
7. EC-Earth3 vs EC-Earth3-CC: Same atmospheric forcing (CC adds C-cycle only)?
8. EC-Earth3-AerChem non-chemistry forcings: G, LU, SO, VL same as EC-Earth3?

DELIVERABLE: Per forcing per model — verdict (✓std/＋exc/✗dev/~/?) and temporal (TV/FXc/FXk with value+units). Document whether CMIP5 deviations (aerosol, LU) were corrected. Flag remaining deviations from Eyring 2016. Note sharing between EC-Earth3 and EC-Earth3-CC.

**CMIP5 context (preserved for reference):**

Document the climate forcing datasets used in three German CMIP6 models — MPI-ESM1-2-LR and MPI-ESM1-2-HR (both MPI-M) and MPI-ESM-1-2-HAM (HAMMOZ-Consortium) — for their CMIP6 `historical` experiment (1850–2014).

CONTEXT: Part of a forcing review of 64 CMIP6 models against the Eyring et al. 2016 (GMD doi:10.5194/gmd-9-1937-2016) standard protocol. Stage 8 of 17, Session 2 of 4.

KEY ARCHITECTURE:
- MPI-ESM1-2-LR: ECHAM6.3 atmosphere (T63L47) + JSBACH3.2 land (active C) + MPIOM1.6.3 ocean + HAMOCC6 ocean BGC. Full ESM. CMIP5 predecessor MPI-ESM-LR used Kinne MAC-v1 aerosols (✗dev) and Cionni 2011 ozone (✓std). Did MPI-ESM1.2 update aerosols to CEDS+BB4CMIP6 or MACv2-SP?
- MPI-ESM1-2-HR: Higher-resolution variant (T127L95 atmosphere, ~100km → 40km). Same ECHAM6.3/JSBACH/MPIOM/HAMOCC stack. All forcing expected IDENTICAL to MPI-ESM1-2-LR.
- MPI-ESM-1-2-HAM: HAMMOZ-Consortium model = MPI-ESM1.2 base + HAM2 interactive aerosol scheme (ECHAM-HAM2). Key difference: HAM2 interactive aerosols instead of the MPI-ESM1.2 prescribed aerosols. CMIP6 new entrant (no CMIP5 predecessor in scope). Primary source: Tegen et al. 2019 (GMD doi:10.5194/gmd-12-1331-2019). Does HAM2 consume CEDS+BB4CMIP6 emissions interactively?

PRIOR-STAGE CROSS-CUTTING PATTERNS (Stages 1–7):
- Standard CCMI ozone (✓std): GFDL-CM4, CanESM5/5-1/CanOE, BCC-CSM2-MR; IPSL-CM6A-LR (corrected from CMIP5)
- Interactive ozone (＋exc): GFDL-ESM4, CESM2-WACCM, CNRM-ESM2-1 (REPROBUS-C_v2)
- Hybrid/linearized ozone (~): E3SM (O3v1/O3v2), CNRM-CM6-1 (linearized strat + CCMI trop)
- Deviating ozone (✗dev): GISS-E2.1-NINT (OMA-derived), CESM2/FV2 (WACCM6-derived bundle)
- MACv2-SP prescribed aerosol: BCC-CSM2-MR confirmed (✓std prescribed path)
- TACTIC_v2 offline AOD: CNRM-CM6-1 (✗dev), CNRM-ESM2-1 interactive (~/＋exc)
- Cross-cutting: Keeble 2021 Table 1 lists only 6 models with interactive stratospheric chemistry — check if MPI-ESM1.2 uses standard prescribed CCMI.

CMIP6 standard protocol (Eyring 2016) baseline:
- G: Meinshausen et al. 2017 (UoM-CMIP-1-2-0)
- O: Checa-Garcia et al. 2018 CCMI (UReading-CCMI-1-0)
- SD/BC/OC: CEDS (CEDS-2017-05-18) + BB4CMIP6 (VUA-CMIP-BB4CMIP6-1-2) interactive OR MACv2-SP (MPI-M-MACv2-SP-1-0) prescribed
- LU: Hurtt 2020 LUH2 v2.1h (UofMD-landState-2-1-h)
- SO: Matthes 2017 SOLARIS-HEPPA-3-2 (SOLARIS-HEPPA-3-2)
- VL: IACETH SAGE3lambda v3.0.0 (IACETH-SAGE3lambda-3-0-0)
- N-dep (ESMs): NCAR-CCMI-2-0

PRIMARY SOURCES:
- MPI-ESM1-2-LR and -HR: Mauritsen et al. 2019 (JAMES doi:10.5194/gmd-12-3241-2019); Müller et al. 2018 (ECHAM6.3)
- MPI-ESM-1-2-HAM: Tegen et al. 2019 (GMD doi:10.5194/gmd-12-1331-2019); Neubauer et al. 2019 (GMD doi:10.5194/gmd-12-1725-2019)
- Keeble et al. 2021 (ACP 21, 5015) — Table 1 check: MPI-ESM1-2-LR ozone classification
- MACv2-SP: Stevens et al. 2017 (ACP doi:10.5194/acp-17-12871-2017) — MPI-M aerosol standard for prescribed-path models; CMIP6 sanctioned. MPI-M DEVELOPED MACv2-SP — did they also USE it in MPI-ESM1.2?
- ES-DOC: https://explore.es-doc.org (search MPI-ESM1-2-LR historical, MPI-ESM-1-2-HAM historical)

KEY QUESTIONS:
1. SD/BC/OC (MPI-ESM1-2-LR/HR): CMIP5 MPI-ESM-LR used Kinne 2006 MAC-v1 (✗dev). Did CMIP6 MPI-ESM1.2 update to MACv2-SP (✓std prescribed path) or CEDS+BB4CMIP6 interactive (✓std), or a different aerosol treatment?
2. O (MPI-ESM1-2-LR/HR): Standard CCMI prescribed (✓std expected)? Or did CMIP6 MPI add chemistry? Keeble 2021 Table 1 should clarify.
3. LU (MPI-ESM1-2-LR/HR): JSBACH3.2 active C — Hurtt 2020 LUH2? CMIP5 used Hurtt 2011 (✓std); expect CMIP6 upgrade.
4. SO/VL (MPI-ESM1-2-LR/HR): Standard Matthes 2017 / IACETH SAGE3λ? Unresolved in CMIP5 MPI.
5. MPI-ESM-1-2-HAM aerosols: Does HAM2 interactive scheme consume CEDS+BB4CMIP6 emissions (✓std/＋exc), or something else? Is there a prescribed aerosol fallback?
6. MPI-ESM-1-2-HAM vs MPI-ESM1-2-LR: Do the base models (non-aerosol forcings G, O, LU, SO, VL) differ, or is it aerosols only?
7. N-dep (JSBACH/HAMOCC6): NCAR-CCMI-2-0? CO2-mode for ESMs?
8. MPI-ESM1-2-HR vs LR: Confirm all forcing identical (resolution only)?

DELIVERABLE: Per forcing per model — verdict (✓std/＋exc/✗dev/~/?) and temporal (TV/FXc/FXk with value+units). Document whether each CMIP5 deviation was corrected. Note MPI-ESM1-2-LR/HR sharing. Flag deviations from Eyring 2016. Note HAM vs base differences.

**CMIP5 context (critical for Stage 7 — preserved for reference):**
- CNRM-CM5 CMIP5: O=＋exc (MOBIDIC interactive Cariolle); SD/BC/OC=✗dev (LMDZ-INCA offline pre-computed OD); LU=✗dev (excluded); VL=✗dev (Ammann 2007 not Sato-updated); MD/SS=FXc (pre-industrial). Did CNRM-CM6 correct these deviations?
- IPSL-CM5 CMIP5: O=✗dev (offline INCA+REPROBUS product not Cionni); SD/BC/OC=✗dev (LMDZ-INCA offline 11-year smoothed); SO=✓std (Wang 2005); VL=✓std (Sato-updated). Did IPSL-CM6A correct the O/aerosol deviations?

### Stage 7 workflow prompt:

Document the climate forcing datasets used in the four French CMIP6 models — CNRM-CM6-1, CNRM-CM6-1-HR, CNRM-ESM2-1 (all CNRM-CERFACS), and IPSL-CM6A-LR (IPSL) — for their CMIP6 `historical` experiment (1850–2014).

CONTEXT: Part of a forcing review of 64 CMIP6 models against the Eyring et al. 2016 (GMD doi:10.5194/gmd-9-1937-2016) standard protocol. Stage 7 of 17, Session 2 of 4.

KEY ARCHITECTURE:
- CNRM-CM6-1: ARPEGE-Climat6 atmosphere (T127L91) + SURFEX v8 land + NEMO3.6 ocean + CICE5. AOGCM. CMIP5 predecessor CNRM-CM5 deviated on O (＋exc MOBIDIC), aerosols (✗dev LMDZ-INCA offline), LU (✗dev excluded), VL (✗dev Ammann2007). Did CMIP6 correct these?
- CNRM-CM6-1-HR: High-resolution variant (~50km atm, 0.25° ocean). All forcing expected IDENTICAL to CNRM-CM6-1.
- CNRM-ESM2-1: CNRM-CM6-1 + full ESM components: SURFEX v8 active C-N-P + TRIPc + PISCES ocean BGC. ESM variant. May have interactive atmospheric chemistry (TACTIC scheme?). Additional ESM inputs: N-dep, Fe deposition.
- IPSL-CM6A-LR: LMDZ6A atmosphere (2.5°×1.27°, 79 levels) + ORCHIDEE v2.0 land (active C) + NEMO3.6 (ORCA2) ocean + LIM3. Full ESM. CMIP5 IPSL-CM5A deviated on O (offline INCA+REPROBUS) and aerosols (LMDZ-INCA offline 11yr-smoothed). Did CM6A correct these?

PRIOR-STAGE CROSS-CUTTING PATTERNS (Stages 1–6):
- Standard CCMI ozone (✓std): GFDL-CM4, CanESM5/5-1/CanOE, BCC-CSM2-MR (confirmed via Keeble 2021)
- Interactive ozone (＋exc): GFDL-ESM4 (GFDL-ATMCHEM4.1); CESM2-WACCM (TSMLT ~228sp)
- Deviating ozone (✗dev): GISS-E2.1-NINT; CESM2/FV2 (WACCM6-derived bundle)
- Hybrid ozone (~): E3SM (O3v1/O3v2)
- CMIP5 CNRM used MOBIDIC (＋exc); CMIP5 IPSL used offline INCA+REPROBUS (✗dev). Test if CMIP6 corrected.

CMIP6 standard protocol (Eyring 2016) baseline:
- G: Meinshausen et al. 2017 (UoM-CMIP-1-2-0)
- O: Checa-Garcia et al. 2018 CCMI (UReading-CCMI-1-0)
- SD/BC/OC: CEDS (CEDS-2017-05-18) + BB4CMIP6 (VUA-CMIP-BB4CMIP6-1-2) interactive OR MACv2-SP (MPI-M-MACv2-SP-1-0) prescribed
- LU: Hurtt 2020 LUH2 v2.1h (UofMD-landState-2-1-h)
- SO: Matthes 2017 SOLARIS-HEPPA-3-2 (SOLARIS-HEPPA-3-2)
- VL: IACETH SAGE3lambda v3.0.0 (IACETH-SAGE3lambda-3-0-0)
- N-dep (ESMs): NCAR-CCMI-2-0

PRIMARY SOURCES:
- CNRM-CM6-1 and variants: Voldoire et al. 2019 (JAMES doi:10.1029/2019MS001770); Séférian et al. 2019 (JAMES doi:10.1029/2019MS001885) for CNRM-ESM2-1
- IPSL-CM6A-LR: Boucher et al. 2020 (JAMES doi:10.1029/2019MS002010)
- Keeble et al. 2021 (ACP 21, 5015) — Table 1 classifies ozone treatment for all CMIP6 models; CNRM/IPSL entries key
- ES-DOC: https://explore.es-doc.org (search CNRM-CM6-1 historical, IPSL-CM6A-LR historical)
- Szopa et al. 2021 (GMD doi:10.5194/gmd-14-1039-2021) — IPSL aerosol treatment in LMDZ-INCA; did CM6A update?

KEY QUESTIONS — for each model:
1. O: Did CNRM-CM6-1 switch from MOBIDIC interactive (＋exc in CMIP5) to prescribed CCMI (✓std)? Or continue interactive? Did IPSL-CM6A switch from offline INCA+REPROBUS (✗dev in CMIP5) to standard CCMI (✓std)?
2. SD/BC/OC: Did CNRM-CM6-1 update from LMDZ-INCA offline (✗dev in CMIP5) to CEDS+BB4CMIP6 or MACv2-SP? Did IPSL-CM6A update from LMDZ-INCA offline 11yr-smoothed (✗dev in CMIP5)?
3. LU: Did CNRM-CM6-1 add land-use change (absent in CMIP5)? SURFEX v8 with Hurtt 2020? ORCHIDEE v2.0 for IPSL-CM6A?
4. VL: Did CNRM-CM6-1 switch from Ammann2007 (✗dev in CMIP5) to IACETH-SAGE3lambda-3-0-0 (✓std)?
5. CNRM-ESM2-1 vs CNRM-CM6-1: Any ozone or aerosol differences (interactive chemistry TACTIC)?
6. CNRM-ESM2-1 ESM inputs: N-dep (NCAR-CCMI-2-0?), Fe deposition for PISCES, CO2-mode?
7. IPSL-CM6A-LR ESM inputs: N-dep for ORCHIDEE, CO2-mode, Fe deposition for PISCES?
8. CNRM-CM6-1-HR: Confirm all forcing identical to CNRM-CM6-1 (resolution only)?

DELIVERABLE: Per forcing per model — verdict (✓std/＋exc/✗dev/~/?) and temporal (TV/FXc/FXk with value+units). Document whether each CMIP5 deviation was corrected in CMIP6. Note CNRM-CM6-1/HR sharing. Flag any remaining deviations from Eyring 2016.

---

# CMIP3 and CMIP5 archive (COMPLETE)

Document the climate forcing datasets used in the two Chinese CMIP6 models — BCC-CSM2-MR (BCC) and CAMS-CSM1-0 (CAMS) — for their CMIP6 `historical` experiment (1850–2014).

CONTEXT: Part of a forcing review of 64 CMIP6 models against the Eyring et al. 2016 (GMD doi:10.5194/gmd-9-1937-2016) standard protocol. Stage 6 of 17, Session 2 of 4.

KEY ARCHITECTURE:
- BCC-CSM2-MR: BCC-AGCM3 atmosphere (T106L46) + BCC-AVIM2 land (active carbon cycle) + MOM4 ocean + SIS sea ice. CMIP5 predecessor bcc-csm1-1 used unknown forcing (G/O/SO/VL all unresolved in CMIP5 review; LU=✗dev confirmed — LU absent from Wu2014 forcing list). Key question: did CMIP6 BCC-CSM2-MR adopt CEDS+BB4CMIP6 aerosol emissions and CCMI ozone (standard), or use centre-specific datasets as in CMIP5?
- CAMS-CSM1-0: IFS-based atmosphere (T106L31, ECMWF dynamical core) + CLM4 land + MOM4 ocean. New entrant with no CMIP5 predecessor. Primary paper: He et al. 2019 (JAMES doi:10.1029/2018MS001602).

PRIOR-STAGE CROSS-CUTTING PATTERNS (Stages 1–5, all confirmed):
- Standard CCMI ozone (✓std): GFDL-CM4, CanESM5/5-1/CanOE (Stage 5 clean pass)
- Interactive ozone (＋exc): GFDL-ESM4 (GFDL-ATMCHEM4.1); CESM2-WACCM (TSMLT ~228sp)
- Deviating ozone (✗dev): GISS-E2.1-NINT (OMA-derived); CESM2/FV2 (WACCM6-derived bundle)
- Hybrid ozone (~): E3SM (O3v1/O3v2)
Test whether each BCC/CAMS model follows the standard CCMI path.

CMIP6 standard protocol (Eyring 2016) baseline:
- G: Meinshausen et al. 2017 (UoM-CMIP-1-2-0)
- O: Checa-Garcia et al. 2018 CCMI (UReading-CCMI-1-0)
- SD/BC/OC: CEDS (CEDS-2017-05-18) + BB4CMIP6 (VUA-CMIP-BB4CMIP6-1-2) interactive OR MACv2-SP (MPI-M-MACv2-SP-1-0) prescribed
- LU: Hurtt 2020 LUH2 v2.1h (UofMD-landState-2-1-h)
- SO: Matthes 2017 SOLARIS-HEPPA-3-2 (SOLARIS-HEPPA-3-2)
- VL: IACETH SAGE3lambda v3.0.0 (IACETH-SAGE3lambda-3-0-0)
- N-dep (ESMs): NCAR-CCMI-2-0

PRIMARY SOURCES:
- BCC-CSM2-MR: Wu et al. 2019 (JAMES 11:10 doi:10.1029/2018MS001583); Xin et al. 2019 (JAMES) or equivalent BCC CMIP6 description; Wu et al. 2014 (J. Meteor. Res. 28:34 doi:10.1007/s13351-014-3041-7) for CMIP5 comparison
- CAMS-CSM1-0: He et al. 2019 (JAMES doi:10.1029/2018MS001602); any ES-DOC simulation document
- ES-DOC: https://explore.es-doc.org (search BCC-CSM2-MR historical, CAMS-CSM1-0 historical)
- Keeble et al. 2021 (ACP 21, 5015) — check if BCC or CAMS appear in ozone classification table

KEY QUESTIONS:
1. O: Does BCC-CSM2-MR prescribe standard CCMI ozone (✓std) or a BCC centre-specific product (✗dev)? CMIP5 BCC ozone was unresolved.
2. SD/BC/OC: BCC-AGCM3 — interactive aerosols from CEDS+BB4CMIP6, or prescribed OD? MACv2-SP?
3. LU: BCC-AVIM2 active carbon cycle — Hurtt 2020 LUH2 v2.1h? CMIP5 BCC explicitly excluded LU.
4. SO/VL: Matthes 2017 and IACETH-SAGE3lambda-3-0-0 confirmed? CMIP5 BCC SO/VL unresolved.
5. N-dep: BCC-AVIM2 (active BGC) — NCAR-CCMI-2-0?
6. CAMS-CSM1-0 complete forcing stack: all 7+ forcings unknown — document from He 2019 or ES-DOC.
7. Does CAMS use standard CMIP6 forcing datasets, or inherit from ECMWF IFS forcing lineage?
8. Any supplemental non-input4MIPs forcing datasets?

DELIVERABLE: Per forcing per model — verdict (✓std/＋exc/✗dev/~/?) and temporal (TV/FXc/FXk with value+units). Flag deviations from Eyring 2016. Note ESM-specific inputs (N-dep, CO2-mode) for BCC-AVIM2 active BGC. Note where BCC-CSM2-MR and CAMS-CSM1-0 share or differ on specific forcings.

---

# CMIP3 and CMIP5 archive (COMPLETE)

---

# Resume after token reset → Stage 5 PARTIAL + Stage 4b (CCCma open questions) + Stage 6 (CNRM + IPSL)

**Lean harness script (reuse, do not regenerate):**
`/home/duro/.claude/projects/-home-duro-git-Duracketal25-MIPForcingReview-research-models/1d50b049-f316-40c3-80be-a997612ce472/workflows/scripts/deep-research-lean.js`

## Stage 3 (NCAR) — COMPLETE ✓

Stage 3 results written (2026-06-20):
- `research/cmip3/models/NCAR__ncar_ccsm3_0.md` — populated; BC/OC/SD temporal treatment open
- `research/cmip3/models/NCAR__ncar_pcm1.md` — fully populated; no Table S1 conflicts
- `research/cmip3/data/verified-forcing-matrix.csv` — NCAR rows added
- `research/README.md` — #6/#7 registry updated; 3 cross-cutting findings added
- `research/bib-to-add.md` — 5 Stage 3 refs added (collins_community_2006, meehl_solar_2003, meehl_combinations_2004, washington_parallel_2000, ammann_volcanic_2003)

**Residual open question (CCSM3):** Are BC/OC/SD aerosols time-varying or FX-clim? FX-clim claim was adversarially refuted (suggesting TV), but no positive TV confirmation found. Requires direct read of Collins 2006 §3 or Lamarque et al. aerosol methods.

**Model strategy (hybrid):** run the session on **Sonnet 4.6** (`/model`). The lean script pins the **verify + synthesize** agents to **`model: "opus"`** (insurance) while scope/search/fetch inherit the session model (Sonnet). No per-launch flags needed — it's baked into deep-research-lean.js.

Stage files already seeded: `research/cmip3/models/NCAR__ncar_ccsm3_0.md`, `NCAR__ncar_pcm1.md`.

## Stage 3 args (NCAR: ccsm3_0, pcm1) — ALREADY LAUNCHED, preserved for reference
Document and adversarially verify the climate forcing datasets used in the two NCAR CMIP3 models — CCSM3 (ncar_ccsm3_0) and PCM1 (ncar_pcm1) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1, a SECONDARY compilation — treat every Y/- as a CLAIM TO TEST against each model's PRIMARY documentation; do not treat other compilations (IPCC/PCMDI tables) as primary.

PRIMARY SOURCES: CCSM3 — Collins et al. 2006 (J. Climate, doi:10.1175/JCLI3761.1), Meehl et al. 2006 CCSM3 20th-century/sensitivity. PCM1 — Washington et al. 2000 (Clim. Dyn.), Meehl et al. 2003/2004 PCM 20th-century forcing experiments.

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — and crucially whether TIME-VARYING or a FIXED field, and WHAT that fixed value is (record fixed scalars WITH UNITS, e.g. fixed solar constant in W m-2, fixed CO2 in ppm); (c) VERDICT vs Table S1 (supports/conflicts/unclear) with a quote/citation. Table S1's Y/- is read as "time-varying forcing applied" — flag fixed-but-marked-Y as a conflict.

Table S1 claims:
ncar_ccsm3_0: G=Y, O=Y, SD=Y, SI=-, BC=Y, OC=Y, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=blank
ncar_pcm1:    G=Y, O=Y, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=blank

Pay attention to: which solar (Lean?) and volcanic (Ammann et al. 2003 is the NCAR/CCSM dataset — verify vs Sato) reconstructions; whether ozone was time-varying or fixed; the FC=blank ambiguity (CCSM3/PCM are not flux-corrected — confirm should be "-"). Note differences between CCSM3 and PCM1.

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation (author/year/DOI). List all conflicts with Table S1.

## After Stage 3: write results into the two seeded NCAR files (research/cmip3/models/), add CCSM3/PCM1 rows to research/cmip3/data/verified-forcing-matrix.csv, update README registry + status + cross-cutting, append refs to bib-to-add.md.

---

## Stage 4 (CCCma) — COMPLETE ✓

Stage 4 results written (2026-06-20):
- `CCCma__cccma_cgcm3_1_t47.md`, `CCCma__cccma_cgcm3_1_t63.md` — populated; T47/T63 forcing identical
- Key findings: G=TV ✓; SD=TV via Boucher LOA surface-albedo proxy ✓; O=FX-clim (SUNYA/Wang 1995) ✓; BC/OC/MD/SS = FX-const (Shettle & Fenn 1979 with exact values); SO/VL/FC unverified (need Flato & Boer 2001)
- 3 bib entries added: scinocca_technical_2008, boucher_anderson_1995, flato_boer_2001 (verify)

---

## Stage 5 (CSIRO: csiro_mk3_0, csiro_mk3_5) — COMPLETE ✓ (2026-06-20)

Stage 5 ran but hit API session limits during the verify + synthesis phase. 5 claims confirmed 1-0; 9 verify agents + synthesis failed. Partial results written.

**Confirmed:**
- SD=TV (monthly mean Penner et al. 1994 sulphate, direct effect only) ✓ for Mk3.0; inferred for Mk3.5
- SI=BC=OC=MD=SS=na ("direct effect of aerosols only") ✓ for Mk3.0; inferred for Mk3.5
- FC=na confirmed for Mk3.0 (PCMDI)
- PCMDI docs for both models are blank/incomplete — Gordon 2002 Tech Report is primary source

**Still open (Stage 5 re-run needed OR Stage 5b):**
- O=Y: Is ozone time-varying or FX-clim? PCMDI notes "no interactive chemistry" — if FX-clim, ✗ conflict
- SO=-, VL=-: Unusual omissions — need Gordon 2002 Tech Report §forcing to confirm/refute
- G=Y: GHG time series not confirmed
- Mk3.5 specifics: all cells inferred from Mk3.0; Mk3.5 primary source (Gordon 2010?) not found
- Penner et al. 1994: exact journal ref not confirmed

**Stage 5 synthesis completed** on third resume (wf_7d31707c-778). 8 findings after synthesis; all cells written to model files and CSV. No further action needed on Stage 5.

---

## Stage 4b (CCCma SO/VL/FC/LU) — COMPLETE ✓ (2026-06-20)

**NEW: Flato et al. 2000 (*Clim. Dyn.*) and Flato & Boer 2001 (*GRL*) uploaded to `resources/`.**
These directly resolve the CCCma open questions for SO=-, VL=-, FC=F,H, LU=-.

Can be run as a targeted follow-up after Stage 5 re-run, OR merged into the next session.

Prompt for Stage 4b:
Read the uploaded PDFs `resources/Flatoetal00ClimDyn-*.pdf` and `resources/Flato+Boer01GRL-*.pdf` and answer the following for both cccma_cgcm3_1_t47 and cccma_cgcm3_1_t63:
1. SO=-: Did CCCma CGCM3.1 truly omit solar forcing in 20C3M? Quote the relevant passage.
2. VL=-: Did CCCma CGCM3.1 truly omit volcanic forcing? Quote.
3. FC=F,H: What are the flux corrections — confirm heat (H) and freshwater (F) corrections are applied; give values with units if stated.
4. LU=-: Was land-use change forcing applied or omitted?
5. Kim et al. 2002 (doi:10.1007/s00382-002-0243-y, `resources/Kimetal02ClimDyn-*.pdf`) — confirm whether this LGM paper is the intended CCCma CGCM3.1 forcing reference, or if a different Kim et al. 2002 is needed.
Update both CCCma model files with confirmed verdicts + quotes; update verified-forcing-matrix.csv rows; append bib entries.

---

## Stage 5b / CSIRO re-run args (full verification)

**Resume failed Stage 5:** `Workflow({ scriptPath: "<lean script>", resumeFromRunId: "wf_7d31707c-778" })`

If resume doesn't work, re-run with this refined prompt (incorporating confirmed SD/SI/BC/OC/MD/SS/FC findings):

Document and adversarially verify the REMAINING unresolved forcings for CSIRO Mk3.0 (csiro_mk3_0) and Mk3.5 (csiro_mk3_5) CMIP3 20C3M simulations. SD/SI/BC/OC/MD/SS/FC are already confirmed from Stage 5 — focus ONLY on:

1. **O=Y for both models**: PCMDI notes "no interactive atmospheric chemistry" for Mk3.0 — does this mean ozone is a fixed climatology (FX-clim), not time-varying? If FX-clim, Table S1 Y is a ✗ conflict. Search for Gordon et al. 2002 (CSIRO Tech Paper No. 60) ozone treatment, and any Mk3.5 primary paper (Gordon et al. 2010 or similar).
2. **SO=- and VL=- for both models**: Confirm or refute from primary sources. Most CMIP3 models include solar and volcanic — what's the CSIRO rationale for omission?
3. **G=Y for both models**: What GHG time series was prescribed?
4. **Mk3.5 primary source**: Locate the Mk3.5 description paper — candidate is Gordon et al. 2010 (*Clim. Dyn.*) or a CSIRO Technical Report. Find the exact citation and confirm whether aerosol/ozone/solar/volcanic treatment changed from Mk3.0.
5. **Penner et al. 1994 exact citation**: Confirm the full reference for the sulphate dataset cited in Gordon 2002.

PRIMARY SOURCES: Gordon et al. 2002 (CSIRO Tech Paper No. 60, cmar.csiro.au/e-print/open/gordon_2002a.pdf); Rotstayn et al. (check for aerosol/ozone updates in Mk3.5); any Mk3.5 description paper.

Table S1 claims (open items only):
csiro_mk3_0: G=Y, O=Y, SO=-, VL=-
csiro_mk3_5: G=Y, O=Y, SD=Y(inferred), SO=-, VL=-, FC=-(inferred)

DELIVERABLE: per forcing per model — verdict, temporal treatment, dataset, citation. Flag any ✗ conflicts with Table S1.

---

## Stage 6 (CNRM-CM3 + IPSL-CM4) — COMPLETE ✓ (2026-06-20)

**Results written:** `CNRM__cnrm_cm3.md`, `IPSL__ipsl_cm4.md`, `verified-forcing-matrix.csv`, `README.md`, `bib-to-add.md`.

Key findings:
- CNRM: 3 conflicts — SI=Y (direct-only, no indirect), SO=Y (fixed 1370 W m⁻²), VL=Y (no volcanic); Boucher & Pham 2002 sulphate confirmed from PCMDI verbatim quotes
- IPSL: 2 conflicts — SO=Y (fixed 1365 W m⁻²), VL=Y (no natural forcings); SI=Y supported (1st indirect/Twomey, Boucher-Lohmann 1995 formula D, POLDER-tuned); O=Y unconfirmed
- Boucher & Pham 2002 DOI **confirmed**: GRL doi:10.1029/2001GL014048 ("History of sulfate aerosol radiative forcings"). The JD doi:10.1029/2001JD000765 is a separate paper — Timmreck (2001) JGR on 3D background stratospheric aerosol (potentially relevant to ECHAM-family models in Stage 7). Both PDFs uploaded.
- Both models: Booocher LOA dataset used for SD; same dataset lineage as CCCma (three centres confirmed)

Source: PCMDI model documentation pages (primary; direct quotes obtained); workflow wf_9e81bc88-cfa

## Stage 6 args (CNRM + IPSL: cnrm_cm3, ipsl_cm4) — COMPLETE, preserved for reference

Stage files already seeded: `research/cmip3/models/CNRM__cnrm_cm3.md`, `IPSL__ipsl_cm4.md`.

Document and adversarially verify the climate forcing datasets used in two French CMIP3 models — CNRM-CM3 (cnrm_cm3) and IPSL-CM4 (ipsl_cm4) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1, a SECONDARY compilation — treat every Y/- as a CLAIM TO TEST against each model's PRIMARY documentation.

PRIMARY SOURCES: CNRM-CM3 — Salas-Mélia et al. 2005 (*Note de Centre CNRM*); Déqué et al. 1994 (ARPEGE atmosphere); PCMDI CMIP3 doc for cnrm_cm3. IPSL-CM4 — Marti et al. 2010 (*Clim. Dyn.*); Boucher & Pham 2002 (aerosol forcing); PCMDI CMIP3 doc for ipsl_cm4.

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — and crucially whether TIME-VARYING or a FIXED field, and WHAT that fixed value is (record fixed scalars WITH UNITS); (c) VERDICT vs Table S1 with quote/citation.

Table S1 claims:
cnrm_cm3:  G=Y, O=-, SD=Y, SI=Y, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=-
ipsl_cm4:  G=Y, O=Y, SD=Y, SI=Y, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=-

Pay attention to: SI=Y for both (indirect aerosol effect — confirm mechanism and source); O=- for CNRM but O=Y for IPSL (ozone treatment differs?); SO=Y and VL=Y for both (confirm datasets — which solar and volcanic reconstructions?); whether sulphate aerosol direct and indirect use same or different datasets.

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation (author/year/DOI). List all conflicts with Table S1.

## After Stage 6: write results into the two seeded French model files, add rows to verified-forcing-matrix.csv, update README registry + status + cross-cutting, append refs to bib-to-add.md. Then move to Stage 7 (MPI + INGV + MIUB).

## Stage 4 args (CCCma: cccma_cgcm3_1_t47, cccma_cgcm3_1_t63) — COMPLETE, preserved for reference
Stage files already seeded: `research/cmip3/models/CCCma__cccma_cgcm3_1_t47.md`, `CCCma__cccma_cgcm3_1_t63.md`.

Launch: `Workflow({ scriptPath: "<lean script>", args: "<Stage 4 prompt below>" })`

Document and adversarially verify the climate forcing datasets used in the two CCCma CMIP3 models — CGCM3.1(T47) (cccma_cgcm3_1_t47) and CGCM3.1(T63) (cccma_cgcm3_1_t63) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1, a SECONDARY compilation — treat every Y/- as a CLAIM TO TEST against each model's PRIMARY documentation; do not treat other compilations (IPCC/PCMDI tables) as primary.

PRIMARY SOURCES: Flato & Boer 2001 (CGCM3 description, Clim. Dyn.); Kim et al. 2002 (CCCma CGCM3); Scinocca et al. 2008 (CCCma atmospheric model CanAM); also check Boer et al. 2000 and the PCMDI CMIP3 model documentation page for CCCma. T47 and T63 are the same model at different resolutions — forcing treatment is likely identical but confirm.

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — and crucially whether TIME-VARYING or a FIXED field, and WHAT that fixed value is (record fixed scalars WITH UNITS, e.g. fixed solar constant in W m-2, fixed CO2 in ppm); (c) VERDICT vs Table S1 (supports/conflicts/unclear) with a quote/citation. Table S1's Y/- is read as "time-varying forcing applied" — flag fixed-but-marked-Y as a conflict.

Table S1 claims:
cccma_cgcm3_1_t47: G=Y, O=-, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=-, VL=-, FC=F,H
cccma_cgcm3_1_t63: G=Y, O=-, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=-, VL=-, FC=F,H

Pay attention to: SO=- and VL=- (no solar or volcanic — unusual for a 20C3M run; confirm or flag conflict); O=- (no ozone forcing — was it truly omitted or fixed?); FC=F,H (flux corrections applied — rare for this era; confirm F=freshwater, H=heat); the sulphate (SD=Y) dataset used (Boucher? Mitchell? Lamarque?); whether GHGs were time-varying (Y claim). Note whether T47 and T63 share identical forcing treatment or differ.

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation (author/year/DOI). List all conflicts with Table S1.

## After Stage 4: write results into the two seeded CCCma files, add rows to verified-forcing-matrix.csv, update README registry + status + cross-cutting, append refs to bib-to-add.md.

---

## Stage 7 (MPI + INGV + MIUB) — COMPLETE ✓ (2026-06-20)

**Results written:** `MPI__mpi_echam5.md`, `INGV__ingv_echam4.md`, `MIUB__miub_echo_g.md`, CSV, README, bib-to-add.md.

Key findings:
- MPI: 3 confirmed conflicts (BC/OC/LU not in 20C3M forcing list) + 2 probable (SO/VL — "only anthropogenic forcings"); Boucher LOA SRES sulphate + Kiehl 1999 ozone anomaly confirmed
- INGV (= INGV-SXG, not "INGV-ECHAM4"): 3 conflicts (O=Y FX-clim, SO=Y/VL=Y spurious — no natural forcings)
- MIUB: 2 conflicts (SI=- wrong — first indirect IS applied; FC=H wrong — heat+water both applied); SO/VL=Y correct-but-bundled via Crowley 2000 single solar constant
- Boucher LOA dataset now confirmed for 4+ centres; SO/VL Table S1 error pattern confirmed across 4 stages

## Stage 7 args (MPI + INGV + MIUB: mpi_echam5, ingv_echam4, miub_echo_g) — COMPLETE, preserved for reference

Stage files already seeded: `research/cmip3/models/MPI__mpi_echam5.md`, `INGV__ingv_echam4.md`, `MIUB__miub_echo_g.md`.

Document and adversarially verify the climate forcing datasets used in three European CMIP3 models — MPI-ECHAM5 (mpi_echam5), INGV-ECHAM4 (ingv_echam4), and MIUB-ECHO-G (miub_echo_g) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1, a SECONDARY compilation — treat every Y/- as a CLAIM TO TEST against each model's PRIMARY documentation. Stage 6 finding: Table S1 SO/VL codes appear unreliable — test whether MPI/INGV/MIUB also have spurious SO=Y or VL=Y entries.

PRIMARY SOURCES: MPI-ECHAM5 — Jungclaus et al. 2006 (*J. Climate*, doi:10.1175/JCLI3827.1); Roeckner et al. 2006 ECHAM5 atmospheric model documentation. INGV-ECHAM4 — Gualdi et al. 2006 (INGV CMIP3 paper); Roeckner et al. 1996 ECHAM4 documentation. MIUB-ECHO-G — Min et al. 2005 (*Theor. Appl. Climatol.*); Legutke & Voss 1999 (ECHO-G model description). PCMDI CMIP3 pages: https://pcmdi.llnl.gov/ipcc/model_documentation/MPI-ECHAM5.htm, INGV-ECHAM4.htm, MIUB-ECHO-G.htm.

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — whether TIME-VARYING or FIXED, and WHAT the fixed value is (with units); (c) VERDICT vs Table S1 with quote/citation. Table S1's Y/- = time-varying applied.

Table S1 claims:
mpi_echam5:   G=Y, O=Y, SD=Y, SI=Y, BC=Y, OC=Y, MD=-, SS=-, LU=Y, SO=Y, VL=Y, FC=-
ingv_echam4:  G=Y, O=Y, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=-
miub_echo_g:  G=Y, O=Y, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=H

Pay attention to: MPI-ECHAM5 BC=Y, OC=Y, LU=Y — the most complex aerosol+LU set so far; confirm each dataset; MPI aerosol likely from Dentener/Stier or Tanre et al.; INGV shares ECHAM4 lineage with MIUB (test whether forcing is shared); MIUB FC=H (heat only — no freshwater, unlike CCCma); SO=Y/VL=Y for all three — given Stage 6 finding of spurious SO/VL in Table S1, test especially carefully; which solar (Lean? which version?) and volcanic (Sato? other?) reconstructions.

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation. List all conflicts with Table S1.

## After Stage 7: DONE ✓

## Stage 8 (UKMO: ukmo_hadcm3, ukmo_hadgem1) — COMPLETE ✓ (2026-06-20)

**Results written:** `UKMO__ukmo_hadcm3.md`, `UKMO__ukmo_hadgem1.md`, CSV, README, bib-to-add.md.

Key findings:
- HadCM3: G/O/SD/SI/SO all confirmed; solar = Lean 1995; indirect = delta-albedo offline method (sulphate only); VL=Y **unverified** (adversarial refute — Sato 1993 in attribution ensemble but not confirmed for 20C3M submission)
- HadGEM1: 1 conflict (MD=Y — mineral dust absent from CLASSIC); LU=- questionable (Goldewijk 2001 in Run 1); SO=Y/VL=Y confirmed (Solanki & Krivova 2003 solar; updated Sato 1993 volcanic); CLASSIC scheme = sulphate+SS+BC+biomass-smoke with 1st+2nd indirect (most complete SI so far)
- Two-run design for HadGEM1: Run 1 = anthropogenic only; Run 2 = + natural forcings
- Different solar reconstructions within UKMO: HadCM3 = Lean 1995; HadGEM1 = Solanki & Krivova 2003

## Stage 8 args (UKMO: ukmo_hadcm3, ukmo_hadgem1) — COMPLETE, preserved for reference

Stage files already seeded: `research/cmip3/models/UKMO__ukmo_hadcm3.md`, `UKMO__ukmo_hadgem1.md`.

Document and adversarially verify the climate forcing datasets used in the two UKMO CMIP3 models — HadCM3 (ukmo_hadcm3) and HadGEM1 (ukmo_hadgem1) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1. SO/VL=Y codes have been wrong for 4 of 7 stages completed — test UKMO carefully. HadGEM1 is expected to be the most complete aerosol scheme so far (BC, OC, dust, sea salt all in Table S1).

PRIMARY SOURCES: HadCM3 — Gordon et al. 2000 (J. Climate, doi:10.1175/1520-0442(2000)013<0728:TSMFTH>2.0.CO;2); Pope et al. 2000 (Clim. Dyn., doi:10.1007/s003820050010); PCMDI CMIP3 page. HadGEM1 — Johns et al. 2006 (J. Climate, doi:10.1175/JCLI3636.1); Martin et al. 2006 (J. Climate, doi:10.1175/JCLI3551.1); PCMDI CMIP3 page. Also check: Stott et al. 2000/2006 (HadCM3 20th-century attribution papers) for detailed forcing specification; Jones et al. 2003 (HadGEM aerosol).

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — whether TIME-VARYING or FIXED, with fixed values WITH UNITS; (c) VERDICT vs Table S1 with quote/citation.

Table S1 claims:
ukmo_hadcm3: G=Y, O=Y, SD=Y, SI=Y, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=-
ukmo_hadgem1: G=Y, O=Y, SD=Y, SI=Y, BC=Y, OC=Y, MD=Y, SS=Y, LU=-, SO=Y, VL=Y, FC=-

Pay attention to:
- HadGEM1 MD=Y and SS=Y — only model so far with mineral dust AND sea salt as time-varying forcings (all others had these as fixed or absent); confirm datasets and whether TV or FX-clim
- HadGEM1 BC=Y and OC=Y — same claims as MPI which proved wrong; verify from primary source
- HadCM3 SI=Y vs HadGEM1 SI=Y — what is the indirect aerosol mechanism for each? HadCM3 uses a sulphate-only Aitken-mode scheme; HadGEM1 may use a more sophisticated scheme
- SO=Y and VL=Y for both — given the systematic SO/VL error pattern, verify carefully; which solar and volcanic reconstructions (Lean? Sato?); HadCM3 Stott 2000 is likely the key 20th-century forcing paper
- HadCM3 FC=- confirmed from literature (no flux corrections); HadGEM1 FC=- expected (newer generation)
- GHG treatment for HadGEM1 — does it use a higher-fidelity GHG scheme than HadCM3?

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation. List all conflicts with Table S1.

---

## Stage 9 (MIROC + MRI: miroc3_2_hires, miroc3_2_medres, mri_cgcm2_3_2a) — COMPLETE ✓ (2026-06-20)

**Results written:** `MIROC__miroc3_2_hires.md`, `MIROC__miroc3_2_medres.md`, `MRI__mri_cgcm2_3_2a.md`, CSV, README, bib-to-add.md.

Key findings:
- MIROC3.2 hires and medres: identical forcing, richest aerosol suite in review (BC/OC/sulphate prescribed emissions + SPRINTARS interactive). MD=Y/SS=Y are diagnosed interactively, not prescribed — nuance not a hard conflict. SO/VL=Y confirmed genuine. No hard conflicts.
- MRI-CGCM2.3.2a: 4-agent forcing (GHG/sulphate-direct/volcanic/solar); SI/BC/OC/MD/SS/LU all confirmed absent (Table S1 dashes correct). O=Y candidate error (medium confidence — ozone absent from PCMDI 4-agent list). SO=TV(Lean 1995) and VL=TV confirmed. FC=F,H confirmed (heat+water global + equatorial momentum).
- PCMDI URL typo: MRI doc is at MRI-GCGM2.3.2.htm (not CGCM).

Source: PCMDI model documentation pages (primary); WDC-Climate run metadata; Yukimoto 2006 pre-submission PDF (solar Lean 1995 confirmed); workflow wf_401d7787-4bc.

## Stage 9 args (MIROC + MRI: miroc3_2_hires, miroc3_2_medres, mri_cgcm2_3_2a) — COMPLETE, preserved for reference

Stage files already seeded: `research/cmip3/models/CCSR__miroc3_2_hires.md`, `CCSR__miroc3_2_medres.md`, `MRI__mri_cgcm2_3_2a.md`.

Document and adversarially verify the climate forcing datasets used in three Japanese CMIP3 models — MIROC3.2(hires) (miroc3_2_hires), MIROC3.2(medres) (miroc3_2_medres), and MRI-CGCM2.3.2a (mri_cgcm2_3_2a) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1. Key prior findings: SO/VL=Y are unreliable in Table S1 (wrong for 4+ models); mineral dust and sea salt marked Y can be errors (HadGEM1 MD=Y wrong); BC/OC/LU marked Y can be unsupported (MPI). Test all these carefully.

PRIMARY SOURCES: MIROC3.2 — Hasumi & Emori 2004 (CCSR/NIES/FRCGC Tech Report No. 1); K-1 model developers 2004; PCMDI pages https://pcmdi.llnl.gov/ipcc/model_documentation/MIROC3.2_hires.htm and MIROC3.2_medres.htm. MRI-CGCM2.3.2a — Yukimoto et al. 2001 (MRI Tech Reports); PCMDI page https://pcmdi.llnl.gov/ipcc/model_documentation/MRI-CGCM2.3.2.htm.

Table S1 claims:
miroc3_2_hires:  G=Y, O=Y, SD=Y, SI=Y, BC=Y, OC=Y, MD=Y, SS=Y, LU=-, SO=Y, VL=Y, FC=-
miroc3_2_medres: G=Y, O=Y, SD=Y, SI=Y, BC=Y, OC=Y, MD=Y, SS=Y, LU=-, SO=Y, VL=Y, FC=-
mri_cgcm2_3_2a:  G=Y, O=Y, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=F,H

Pay attention to:
- MIROC3.2 has the fullest aerosol claim in Table S1 (BC/OC/MD/SS/SI all Y) — these were wrong for MPI and HadGEM1 (MD); verify each species independently from Hasumi & Emori 2004
- MIROC hires vs medres: are forcing treatments identical or do they differ?
- MRI FC=F,H — flux corrections (heat+water) like CCCma and MIUB; confirm from Yukimoto 2001
- SO=Y/VL=Y for all three — given systematic Table S1 errors, verify especially carefully; Japanese models may use different solar/volcanic datasets from the European ones
- MRI SI=- vs MIROC SI=Y — different indirect aerosol implementations between Japanese models?

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation. List all conflicts with Table S1.

## After Stage 9: write results, update all tracking files, add Stage 10 args (BCCR+IAP+INM).

## Stage 10 (BCCR + IAP + INM: bccr_bcm2.0, iap_fgoals1_0, inmcm3_0) — COMPLETE ✓ (2026-06-20)

**Results written:** `BCCR__bccr_bcm2.0.md`, `IAP__iap_fgoals1_0.md`, `INM__inmcm3_0.md`, CSV, README, bib-to-add.md.

Key findings:
- BCCR: SO=VL=- confirmed verbatim ("Solar forcing was set at 1368 W/m2 and no solar or volcanic variability were included"); G=TV(ENSEMBLES); SD=Y applied but dataset unknown; FC=heat+FW for stability (not forcing); no Table S1 conflicts confirmed
- IAP: G/O/SD confirmed from PCMDI verbatim ("CO2, N2O, CH4, CFC11, CFC12; climatologic mean ozone; sulfate aerosol data from ftp://sprite.llnl.gov/pub/covey/IPCC_4AR_Forcing/"); SO/VL=- by absence; no conflicts confirmed
- INM (NOT in Table S1): G=TV(CO2/CH4/N2O — CFCs excluded!); O=FXc(AMIP-II Wang 1995); SD=TV(2-D burden, 4ARForcing); SO=TV(PCM1_A1.nc same as GHGs); VL=~ unclear (volcanic file referenced in PDF but standalone claim refuted); 4ARForcing sprite.llnl.gov shared with IAP
- Cross-cutting: fixed-solar group (BCCR 1368, CNRM 1370, IPSL 1365) confirmed; 4ARForcing FTP dataset shared by IAP and INM; Wang 1995 AMIP II ozone now third confirmed centre (after CCCma, CSIRO) for FXc ozone

Source: PCMDI model documentation pages (primary — HTML + PDF); Volodin 2004 (INM); Furevik 2003 (BCCR control run, flux adjustment only); workflow wf_736d8594-819.

## Stage 10 args (BCCR + IAP + INM: bccr_bcm2.0, iap_fgoals1_0, inmcm3_0) — archived for reference

Stage files already seeded: `research/cmip3/models/BCCR__bccr_bcm2.0.md`, `IAP__iap_fgoals1_0.md`, `INM__inmcm3_0.md`.

Document and adversarially verify the climate forcing datasets used in three CMIP3 models — BCCR-BCM2.0 (bccr_bcm2.0), IAP-FGOALS1.0_g (iap_fgoals1_0), and INM-CM3.0 (inmcm3_0) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1. Stage 10 is the final CMIP3 first-pass stage. Key prior findings to test against: (1) SO/VL=- for BCCR and IAP — these are genuinely unusual (most CMIP3 models applied natural forcings); verify whether this reflects real omission or Table S1 undercount. (2) INM-CM3.0 is not in Table S1 — all 12 forcings must be found from primary sources (no Table S1 claims to test, only to document). (3) BCCR uses ARPEGE atmosphere (same as CNRM-CM3) — check whether it shares the Boucher & Pham 2002 LOA sulphate dataset.

PRIMARY SOURCES:
- BCCR-BCM2.0: Furevik, T., et al. (2003). Description and evaluation of the Bergen climate model: ARPEGE coupled with MICOM. *Clim. Dyn.* 21(1), 27–51. doi:10.1007/s00382-003-0317-5; PCMDI page https://pcmdi.llnl.gov/ipcc/model_documentation/BCCR-BCM2.0.htm
- IAP-FGOALS1.0: Yu, Y., et al. (2004). A flexible global coupled climate model. *J. Atmos. Sci.* 61; Zhou, T., et al. (2005). IAP FGOALS; PCMDI page https://pcmdi.llnl.gov/ipcc/model_documentation/FGOALS1.0_g.htm
- INM-CM3.0: Volodin, E.M. & Diansky, N.A. (2004). El Niño reproduction in coupled general circulation model of atmosphere and ocean. *Russian Meteorology and Hydrology* 12, 5–14; PCMDI page https://pcmdi.llnl.gov/ipcc/model_documentation/INM-CM3.0.htm

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — whether TIME-VARYING or FIXED, with fixed values WITH UNITS; (c) VERDICT vs Table S1 with quote/citation.

Table S1 claims:
bccr_bcm2.0:   G=Y, O=-, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=-, VL=-, FC=-
iap_fgoals1_0: G=Y, O=-, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=-, VL=-, FC=-
inmcm3_0:      G=?, O=?, SD=?, SI=?, BC=?, OC=?, MD=?, SS=?, LU=?, SO=?, VL=?, FC=? (NOT in Table S1 — document from primary sources)

Pay attention to:
- BCCR and IAP both have SO=- and VL=- — if these models genuinely omitted natural forcings, they join CCCma/CSIRO as the only others in this review to do so; confirm from primary docs
- BCCR ARPEGE atmosphere: does it use same sulphate/ozone treatment as CNRM-CM3 (which also uses ARPEGE)? CNRM used Boucher & Pham 2002 sulphate direct only, no indirect — test whether BCCR inherited this
- IAP-FGOALS1.0: Chinese model using GAMIL atmosphere — less widely documented; PCMDI page may be the primary accessible source
- INM-CM3.0: Russian model, primary sources may be in Russian — find English-language documentation; confirm what GHG, aerosol, and natural forcing datasets were applied
- For all three: confirm FC treatment (all Table S1 FC=- for BCCR/IAP; unknown for INM)

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation (author/year/DOI). List all confirmed conflicts with Table S1. For INM document all 12 forcings from scratch.

## After Stage 10: write results, update all tracking files. Then proceed to synthesis and summary.

---

# CMIP5 — first pass

## Lean workflow script (same as CMIP3):
`/home/duro/.claude/projects/-home-duro-git-Duracketal25-MIPForcingReview-research-models/1d50b049-f316-40c3-80be-a997612ce472/workflows/scripts/deep-research-lean.js`

## CMIP5 Stage 1 (GFDL: CM2p1, CM3, ESM2G, ESM2M) — COMPLETE ✓ (2026-06-20)

**Results written:** `GFDL__gfdl_cm2p1.md`, `GFDL__gfdl_cm3.md`, `GFDL__gfdl_esm2g.md`, `GFDL__gfdl_esm2m.md`, `verified-forcing-matrix.csv`, `README.md` registry rows 1–4 and Stage 1 status, `bib-to-add.md` CMIP5 Stage 1 section.

Key findings:
- CM2p1: follows standard CMIP5 protocol (G/O/SD/BC/OC/LU all standard); SO/VL/SI/MD/SS unverified at model level; open question: did GFDL update from CMIP3-era datasets to Meinshausen/Hurtt/Wang2005?
- CM3: **EXCEEDS standard on O and all 6 aerosol forcings** — AM3 interactive 85-species tropospheric+stratospheric chemistry (ozone not from Cionni2011; computed prognostically) + 20 interactive aerosol species from Lamarque2010 emissions (not prescribed OD); Donner2011 verbatim: "first coupled chemistry-climate model that allowed representation of interactive aerosols and ozone, rather than prescribing concentrations from offline models"
- ESM2G/M: standard atmospheric protocol; ESM-specific additions: Lamarque2013 ACCMIP N/S deposition (likely); CO2 concentration-driven (`historical`) AND emission-driven (`esmHistorical`) modes — **refuted claim that ESMs are exclusively emission-driven**; TOPAZ iron deposition and ocean C initialisation unconfirmed at model level
- ESM2G vs ESM2M: forcing expected identical; ocean physics differs (GOLD isopycnal vs MOM4p1 z-level only)

Source: adversarial workflow wf_ad589a7e-9e9; GFDL model pages; Donner 2011; PCMDI CMIP5 forcing page; GFDL ESM FAQ.

---

## CMIP5 Stage 2 (GISS: E2-H, E2-H-CC, E2-R, E2-R-CC) — COMPLETE ✓ (2026-06-20)

**Results written:** `GISS__giss_e2_h.md`, `GISS__giss_e2_h_cc.md`, `GISS__giss_e2_r.md`, `GISS__giss_e2_r_cc.md`, `verified-forcing-matrix.csv` rows 5–8, `README.md` registry rows 5–8 and Stage 2 status + cross-cutting findings, `bib-to-add.md` CMIP5 Stage 2 section.

Key findings:
- **Physics_version governs forcing, NOT model name or CC suffix**: p1=NINT(prescribed), p2=TCAD(interactive), p3=TCADI(interactive+AIE). Mapping of named model → physics_version was NOT confirmed.
- **NINT (p1) DEVIATES from Taylor 2012 on O and aerosols**: Ozone = Shindell 2003 offline (identical to CMIP3 GISS, NOT Cionni 2011). Aerosols = Miller 2006a/Koch 2011 offline (NOT Lamarque 2010 OD). Confirmed 1-0 from Miller 2014.
- **TCAD/TCADI (p2/p3) EXCEED standard** on O and aerosols (interactive OMA).
- **H vs R**: HYCOM (HYbrid Coordinate Ocean Model) vs Russell 1995 — atmosphere identical for same physics version.
- **VL confirmed all 4 models**: Sato updated (TV, std). Confirmed 1-0 from GISS CMIP5 page + Schmidt 2014.
- **CC suffix meaning unconfirmed** — refuted claim that CC = interactive atmospheric chemistry. CC may mean active carbon cycle (ESM). Physics_version for CC submissions unconfirmed.

Source: GISS CMIP5 page; Schmidt et al. 2014 doi:10.1002/2013MS000265; Miller et al. 2014 doi:10.1002/2013MS000266; adversarial workflow wf_f7556b2d-78b; 14 claims verified, 6 confirmed 1-0, 8 killed.

Seed model files before launching:
- `research/cmip5/models/GISS__giss_e2_h.md`
- `research/cmip5/models/GISS__giss_e2_h_cc.md`
- `research/cmip5/models/GISS__giss_e2_r.md`
- `research/cmip5/models/GISS__giss_e2_r_cc.md`

### Stage 2 prompt:

Document the climate forcing datasets used in the four GISS CMIP5 models — GISS-E2-H, GISS-E2-H-CC, GISS-E2-R, and GISS-E2-R-CC — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Part of a forcing review of 47 CMIP5 models against the Taylor et al. 2012 (*BAMS* doi:10.1175/BAMS-D-11-00094.1) standard protocol. GISS has four variants: two ocean configurations (H=HydraBASE layered ocean; R=Russell 1995 latitude-longitude ocean) × two atmospheric chemistry options (plain E2 = prescribed chemistry; CC = interactive GISS OMA atmospheric chemistry). Key distinctions to document:
- **E2 vs E2-CC**: CC variants have interactive atmospheric chemistry (OMA scheme) — ozone and aerosols may be interactive rather than prescribed. This is analogous to GFDL-CM3 (interactive) vs CM2p1 (prescribed).
- **H vs R**: These differ in ocean component only; atmospheric forcing should be identical for H vs H-CC and R vs R-CC respectively.

IMPORTANT CMIP5 CONTEXT: GISS-E2-*-CC are Earth System Models with active atmospheric chemistry. Pay close attention to:
- **Ozone treatment**: E2 variants likely use Cionni2011 prescribed ozone; E2-CC variants likely compute ozone interactively via OMA chemistry. Confirm.
- **Aerosol treatment**: GISS has historically used interactive OMA aerosol scheme (Koch 2001; sulfate, BC, OC) — confirm whether all four variants use interactive aerosols from Lamarque2010 emissions, or whether some use prescribed OD.
- **Nitrogen deposition** (reactive N — drives biogeochemistry for CC variants): Lamarque et al. 2013 ACCMIP dataset?
- **BC on snow/ice**: GISS has a long-standing BC-on-snow parameterisation — confirm whether it was applied in CMIP5 historical runs.
- **CO2 mode**: Do any GISS variants support emission-driven CO2? Or all concentration-driven?

PRIMARY SOURCES:
- All four variants: Schmidt, G.A., et al. (2014). Configuration and assessment of the GISS ModelE2 contributions to the CMIP5 archive. *J. Adv. Model. Earth Syst.* 6(1), 141–184. doi:10.1002/2013MS000265 [schmidt_configuration_2014 *(add)*]
- Chemistry (OMA): Miller, R.L., et al. (2014). CMIP5 historical simulations (1850–2012) with GISS ModelE2. doi:10.1175/JCLI-D-13-00050.1
- ES-DOC simulation documents: https://explore.es-doc.org (search GISS-E2-H historical, GISS-E2-R historical)
- PCMDI CMIP5 model documentation

FOR EACH of 12 forcings (+ESM-specific inputs), for EACH of the four models:
(a) Was it applied in `historical`?
(b) WHICH dataset/source — time-varying or fixed? Fixed values WITH UNITS.
(c) Did the model follow the Taylor 2012 standard protocol, or deviate?
(d) For CC variants: are ozone and aerosols interactive (OMA) or prescribed?

Taylor 2012 standard protocol (baseline claims to test):
- G: Meinshausen et al. 2011 GHG concentrations
- O: Cionni et al. 2011 (for models WITHOUT interactive chemistry)
- SD/BC/OC: Lamarque et al. 2010 (prescribed OD or emissions for interactive)
- LU: Hurtt et al. 2011 land-use transitions
- SO: Wang et al. 2005 solar reconstruction
- VL: Sato et al. 1993 updated

Key questions:
- Do E2-H and E2-R use identical atmospheric forcing? (Expected yes — ocean differs only.)
- Do E2-H-CC and E2-R-CC have fully interactive chemistry (OMA) covering ozone AND aerosols? If so, they should EXCEED standard on O and aerosols, analogous to GFDL-CM3.
- BC-on-snow: GISS has this capability from CMIP3 era — was it applied in CMIP5?
- Solar: Wang 2005 standard or different?
- Volcanic: Sato updated?

DELIVERABLE: per forcing per model — verdict (follows standard / deviates / exceeds standard), temporal treatment (TV/FXc/FXk with units), dataset source + citation. Document E2-CC ESM-specific inputs separately. Flag any deviations from Taylor 2012.

## After CMIP5 Stage 2: write results to model files, add 4 GISS rows to verified-forcing-matrix.csv, update README.md registry rows 5-8 and Stage 2 status, append refs to bib-to-add.md.

---

## CMIP5 Stage 3 (NCAR/CESM: CCSM4, CESM1-BGC, CESM1-CAM5, CESM1-CAM5-1-FV2, CESM1-FASTCHEM, CESM1-WACCM) — COMPLETE ✓ (2026-06-21)

### Stage 3 key findings (2026-06-21):
- **CESM1-CAM5 and CESM1-CAM5-1-FV2 EXCEED standard on all aerosols (SD/SI/BC/OC/MD/SS)**: MAM3 three-mode modal aerosol module drives all six aerosol species prognostically from Lamarque 2010 emissions; includes both direct and indirect effects — confirmed 1-0 (Liu2012 + Meehl2013). First CMIP5 family confirmed EXCEEDS on aerosols with indirect effect included.
- **CESM1-WACCM EXCEEDS standard on ozone**: WACCM MOZART whole-atmosphere interactive chemistry computes ozone prognostically from surface to mesosphere — confirmed 1-0 (medium confidence; Marsh2013 paywalled).
- **CCSM4 solar confirmed as Wang+Lean 2005 (std)**: SOLAR_TSI_Lean_1610-2007_annual_c090324.nc in NCAR SVN — 'Lean' filename = Wang, Lean & Sheeley 2005 (*ApJ* 625) — confirmed 1-0.
- **CCSM4 SI=n/a (direct aerosol effect only)**: CAM4 uses prescribed aerosol OD with direct effect only; no indirect effect — confirmed 1-0 via contrast with CESM1-CAM5 in Meehl2013.
- **CESM1-BGC inherits all CCSM4 atmospheric forcings**: ESM-specific inputs (Lindsay2014 primary): N-dep=Lamarque **2010** (NOT 2013 ACCMIP — notable deviation from GFDL ESMs); iron=Luo2003 FXc; CO2=PRES+PROG modes.
- **CESM1-FASTCHEM treatment largely unresolved**: Interactive ozone refuted (0-1); Lamarque2010-emissions aerosol claim refuted (0-1) → likely CAM4-like prescribed, but unconfirmed. Needs Lamarque2012 (resources/) direct read.
- **VL unresolved across entire NCAR/CESM family**: CCSM3 used Ammann 2003; CCSM4/CESM1 switch to Sato-updated unconfirmed family-wide.

Model files already seeded:
- `research/cmip5/models/NCAR__ccsm4.md`
- `research/cmip5/models/NCAR__cesm1_bgc.md`
- `research/cmip5/models/NCAR__cesm1_cam5.md`
- `research/cmip5/models/NCAR__cesm1_cam5_1_fv2.md`
- `research/cmip5/models/NCAR__cesm1_fastchem.md`
- `research/cmip5/models/NCAR__cesm1_waccm.md`

### Stage 3 prompt:

Document the climate forcing datasets used in the six NCAR/CESM CMIP5 models — CCSM4, CESM1-BGC, CESM1-CAM5, CESM1-CAM5-1-FV2, CESM1-FASTCHEM, and CESM1-WACCM — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Part of a forcing review of 47 CMIP5 models against the Taylor et al. 2012 (*BAMS* doi:10.1175/BAMS-D-11-00094.1) standard protocol. This is the NCAR/CESM family, which covers a wide range from a basic AOGCM (CCSM4) through an ESM with active carbon cycles (CESM1-BGC), an interactive-aerosol model (CESM1-CAM5 with MAM3), and a whole-atmosphere chemistry model (CESM1-WACCM). The key distinctions:
- **CCSM4**: AOGCM baseline; CAM4 atmosphere; no interactive aerosols; prescribed forcings throughout. Check if CMIP5 updated the volcanic forcing from Ammann 2003 (used in CCSM3/CMIP3) to Sato updated.
- **CESM1-BGC**: ESM with active carbon cycle (POP2-BEC ocean + CLM4-CN land); confirm N-deposition dataset, CO2 mode (concentration vs. emission-driven), and iron deposition.
- **CESM1-CAM5**: CAM5 atmosphere with MAM3 three-mode modal aerosol scheme — aerosols are INTERACTIVE from Lamarque 2010 emissions, expected to EXCEED standard on SD/BC/OC/SI/MD/SS. FASTCHEM is a variant of CAM-chem and may have intermediate chemistry.
- **CESM1-CAM5-1-FV2**: Lower-resolution variant of CESM1-CAM5 (2° FV dynamical core); forcing expected identical to CESM1-CAM5.
- **CESM1-FASTCHEM**: Uses CAM4+FASTCHEM (prescribed/fast chemistry); ozone treatment is the key question — does FASTCHEM use Cionni2011 prescribed ozone or a fast offline chemistry calculation?
- **CESM1-WACCM**: Full whole-atmosphere chemistry (surface to mesosphere, 66 levels); ozone is INTERACTIVE — expected to EXCEED standard on O. Solar forcing: WACCM also responds to spectrally-resolved UV solar variability (photolysis). Confirm if spectrally-resolved Wang 2005 or a spectral supplement is used.

IMPORTANT CMIP5 CONTEXT — CESM family specific:
- **CCSM3/CCSM4 VOLCANIC TRANSITION**: CCSM3 (CMIP3) used Ammann et al. 2003 volcanic dataset (NOT Sato 1993). CCSM4/CESM1 may have switched to Sato updated (Taylor 2012 standard) — this is the key solar/volcanic question for this family.
- **MAM3 aerosol emissions**: CESM1-CAM5 and CESM1-WACCM use MAM3 from Lamarque 2010 emissions — these EXCEED the prescribed-OD standard.
- **CESM1-BGC biogeochemistry inputs**: N-deposition for CLM4-CN (land) and POP2-BEC (ocean); iron deposition to ocean; CO2 emissions for potential emission-driven runs.
- **BC on snow/ice**: The NCAR team has a well-developed BC-on-snow scheme — confirm which CESM1 variants apply it.

PRIMARY SOURCES:
- CCSM4: Gent, P.R., et al. (2011). *J. Climate* 24, 4973–4991. doi:10.1175/2011JCLI4083.1
- CESM1-BGC: Lindsay, K., et al. (2014). *J. Climate* 27, 8981–9005. doi:10.1175/JCLI-D-12-00565.1
- CESM1-CAM5: Meehl, G.A., et al. (2013). *J. Climate* 26, 6287–6308. doi:10.1175/JCLI-D-12-00572.1; Liu, X., et al. (2012). *GMD* 5, 709–739. doi:10.5194/gmd-5-709-2012
- CESM1-WACCM: Marsh, D.R., et al. (2013). *J. Climate* 26, 7372–7391. doi:10.1175/JCLI-D-12-00558.1
- CESM1-FASTCHEM: Lamarque, J.-F., et al. (2012). *GMD* 5, 369–411. doi:10.5194/gmd-5-369-2012 (CAM-chem)
- ES-DOC simulation documents: https://explore.es-doc.org
- PCMDI CMIP5 forcing pages

FOR EACH of 12 forcings (+ESM/chemistry-specific inputs), for EACH model:
(a) Was it applied in `historical`?
(b) WHICH dataset/source — time-varying or fixed?
(c) Did it follow Taylor 2012 standard, deviate, or exceed?
(d) For BGC: CO2 mode (concentration vs. emission-driven)? N-deposition dataset? Iron deposition?
(e) For CAM5/WACCM: interactive aerosols from Lamarque 2010 emissions (exc) or prescribed OD (std)?
(f) For WACCM: is ozone interactive (exc) confirmed from Marsh 2013?

Key questions:
1. CCSM4 volcanic forcing: Sato updated (CMIP5 standard) or Ammann 2003 (carried over from CCSM3)?
2. CCSM4 solar: Wang 2005 confirmed?
3. CESM1-CAM5 MAM3: confirmed interactive aerosols from Lamarque 2010 (exc on SD/BC/OC)?
4. CESM1-WACCM: confirmed interactive ozone (exc on O) from Marsh 2013?
5. CESM1-BGC: what N-deposition dataset was used? What iron deposition dataset for POP2-BEC?
6. CESM1-FASTCHEM: does FASTCHEM use Cionni2011 (std) or a quasi-interactive ozone calculation?
7. BC-on-snow: which CESM1 variants apply it?

Taylor 2012 standard protocol (baseline):
- G: Meinshausen et al. 2011 | O: Cionni et al. 2011 (w/o interactive chem) | SD/BC/OC: Lamarque 2010 | LU: Hurtt 2011 | SO: Wang 2005 | VL: Sato updated

DELIVERABLE: per forcing per model — verdict (std/dev/exc), temporal (TV/FXc/FXk with units), dataset + citation. Document BGC/WACCM ESM/chemistry-specific inputs separately. Flag deviations from Taylor 2012. Adversarially verify key claims.

## After CMIP5 Stage 3: write results to model files, add 6 NCAR rows to verified-forcing-matrix.csv, update README.md registry rows 9-14 and Stage 3 status, append refs to bib-to-add.md.

---

## CMIP5 Stage 4 (CCCma + BCC: CanESM2, CanCM4, bcc-csm1-1, bcc-csm1-1-m) — COMPLETE ✓ (2026-06-21)

### Stage 4 key findings (2026-06-21):
- **CanAM4 aerosols = interactive (likely exc)**: Wilcox et al. 2013 (ERL 8:024033) classifies CanESM2 as SA (first indirect effect = YES, second = NO). Prescribed-OD claim adversarially refuted (0-1). Aerosol dataset provenance (Lamarque2010 emissions vs other) unresolved.
- **All other CCCma/BCC forcings unverified**: PCMDI and WDC-Climate provide only protocol-level recommendations, not model-specific forcing provenance. VonSalzen2013 (CanAM4) paywalled in workflow but PDF now in /resources.
- **BCC CMIP6 papers must not be used**: Wu2019 (BCC-CSM2-MR) and Wu2020 (BCC-ESM1) describe CMIP6 models using Meinshausen 2017 GHGs — confirmed 1-0 as WRONG ERA. Wu2014 (bcc-csm1-1 CMIP5) PDF in /resources for next pass.
- **CanCM4 inferred from CanESM2**: Same CanAM4 atmosphere → same aerosol finding (SD/SI = ~ unclear likely exc).
- **Next-pass priority**: Read VonSalzen2013 PDF (CanAM4 forcing details) + Wu2014 PDF (BCC-CSM1.1) to resolve all open questions.

Seed model files before launching:
- `research/cmip5/models/CCCma__canesm2.md`
- `research/cmip5/models/CCCma__cancm4.md`
- `research/cmip5/models/BCC__bcc_csm1_1.md`
- `research/cmip5/models/BCC__bcc_csm1_1_m.md`

### Stage 4 prompt:

Document the climate forcing datasets used in the four CCCma/BCC CMIP5 models — CanESM2, CanCM4, bcc-csm1-1, and bcc-csm1-1-m — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Part of a forcing review of 47 CMIP5 models against the Taylor et al. 2012 (*BAMS* doi:10.1175/BAMS-D-11-00094.1) standard protocol. CCCma (Canadian Centre for Climate Modelling and Analysis) contributed two related models: CanESM2 is a full ESM with an active carbon cycle (CTEM land + CMOC ocean); CanCM4 is the underlying AOGCM sharing the same CanAM4 atmosphere. BCC (Beijing Climate Center, China) contributed two resolutions of their climate system model: bcc-csm1-1 (lower resolution) and bcc-csm1-1-m (moderate resolution), both sharing the same BCC-AGCM atmosphere.

PRIOR STAGE CONTEXT — important patterns to watch:
- GISS (Stage 2): ozone used GISS offline Shindell2003 (NOT Cionni2011) — check if CCCma/BCC similarly used non-standard ozone datasets.
- NCAR/CESM (Stage 3): ESM N-dep used Lamarque **2010** (not 2013 ACCMIP) — check which year for CanESM2.
- Standard vs. interactive aerosols: CESM1-CAM5 exceeded standard (MAM3); check if CanAM4/BCC-AGCM are prescribed-OD (standard) or interactive.

KEY ARCHITECTURE QUESTIONS:
- **CanESM2**: ESM — CTEM (Canadian Terrestrial Ecosystem Model) + CMOC (Canadian Model of Ocean Carbon). Does it use interactive atmospheric chemistry? What ozone dataset? Aerosols: CanAM4 is the atmosphere — prescribed OD or interactive? N-deposition: Lamarque 2010 or 2013 ACCMIP? CO2 mode: concentration-driven (historical) or emission-driven (esmHistorical)?
- **CanCM4**: AOGCM using CanAM4 atmosphere (same as CanESM2 atmospheric component). Confirm same atmospheric forcings as CanESM2. Not an ESM — no ESM-specific inputs.
- **bcc-csm1-1 and bcc-csm1-1-m**: BCC-AGCM2.0 atmosphere. What ozone treatment (Cionni2011 or BCC-internal)? Aerosol treatment? Solar/volcanic datasets?

PRIMARY SOURCES:
- CanESM2 (carbon cycle): Arora, V.K., et al. (2011). Carbon emission limits required to satisfy future representative concentration pathways of greenhouse gases. *Biogeosciences* 8(5), 1603–1625. doi:10.5194/bg-8-1603-2011
- CanESM2/CanCM4 (atmosphere, CanAM4): VonSalzen, K., et al. (2013). The Canadian Fourth Generation Atmospheric Global Climate Model (CanAM4). Part I: representation of physical processes. *Atmos.-Ocean* 51(1), 104–125. doi:10.1080/07055900.2012.755610
- BCC models: Wu, T., et al. (2014). An overview of BCC climate system model development and application for climate change studies. *J. Meteor. Res.* 28(1), 34–56. doi:10.1007/s13351-014-3041-7
- ES-DOC simulation documents: https://explore.es-doc.org
- PCMDI CMIP5 forcing pages

FOR EACH of 12 forcings (+ESM-specific for CanESM2), for EACH model:
(a) Was it applied in `historical`?
(b) WHICH dataset/source — time-varying or fixed?
(c) Did it follow Taylor 2012 standard, deviate, or exceed?
(d) For CanESM2: N-dep dataset and year? CO2 mode?

Key questions:
1. CanESM2/CanCM4 ozone: Cionni2011 (std) or a different dataset (e.g., GISS-style offline)?
2. CanESM2/CanCM4 aerosols: prescribed OD from Lamarque2010 (std) or interactive aerosol scheme?
3. CanESM2 N-deposition: Lamarque 2010 or 2013 ACCMIP? (GFDL ESMs used 2013; NCAR used 2010 — what did CCCma use?)
4. CanESM2 CO2 mode: concentration-driven historical or emission-driven esmHistorical?
5. BCC ozone and aerosol treatment: Cionni2011 and Lamarque2010-OD (std), or alternative datasets?
6. Solar (both centres): Wang2005 confirmed, or centre-specific?
7. Volcanic (both centres): Sato updated confirmed, or Ammann2003 or other?

Taylor 2012 standard protocol (baseline):
- G: Meinshausen et al. 2011 | O: Cionni et al. 2011 (w/o interactive chem) | SD/BC/OC/MD/SS: Lamarque 2010 | LU: Hurtt 2011 | SO: Wang 2005 | VL: Sato updated

DELIVERABLE: per forcing per model — verdict (std/dev/exc), temporal (TV/FXc/FXk), dataset + citation. Document CanESM2 ESM inputs separately. Flag deviations from Taylor 2012. Adversarially verify key claims.

## After CMIP5 Stage 4: write results to model files, add 4 CCCma/BCC rows to verified-forcing-matrix.csv, update README.md registry rows 15-18 and Stage 4 status, append refs to bib-to-add.md.

---

## CMIP5 Stage 5 (CSIRO + ACCESS: ACCESS1-0, ACCESS1-3, CSIRO-Mk3.6.0) — COMPLETE ✓ (2026-06-21)

Stage 5 results written (2026-06-21) — workflow wf_6a1942cb-0da:
- `research/cmip5/models/CSIRO-BOM__access1_0.md` — O=✓std confirmed; aerosol/SO/VL/LU unconfirmed (claims refuted 0-1); cross-check UKMO Stage 8
- `research/cmip5/models/CSIRO-BOM__access1_3.md` — all inferred from ACCESS1-0 (identical forcing)
- `research/cmip5/models/CSIRO-QCCCE__csiro_mk3_6_0.md` — EXCEEDS std on ALL aerosols; LU=✗dev; O=✓std; SO/VL=~dev/std?(medium conf)
- `research/cmip5/data/verified-forcing-matrix.csv` — rows 19–21 added
- `research/cmip5/README.md` — rows 19–21 updated ☐→☑; staging plan row 5 updated ☐→☑; Stage 5 cross-cutting findings added
- `research/bib-to-add.md` — Stage 5 section prepended (bi_access_2013, jeffrey_australia_2013, rotstayn_aerosol_2010, eyring_ozone_2013, jones_hadgem2es_2011)

**Key findings:**
- CSIRO-Mk3.6.0 EXCEEDS std on ALL 6 aerosol keys: Rotstayn2010 interactive 11-tracer scheme (prognostic SO4/BC/OC/dust-4bins/SS) from Lamarque2010 emissions + online natural sources — confirmed 1-0 high conf. Analogous to CESM1-CAM5 MAM3 and CanAM4 SA.
- CSIRO-Mk3.6.0 O=✓std: Cionni2011 AC&C/SPARC; Syktus2011 verbatim — confirmed 1-0 high conf.
- CSIRO-Mk3.6.0 LU=✗dev: explicitly excluded — Syktus2011 + Collier2011 — confirmed 1-0 high conf.
- CSIRO-Mk3.6.0 SO=~dev (Lean2000 not Wang2005; same TSI lineage; medium conf); VL=~dev/std? (Sato1993 not Sato-updated; same GISS lineage; medium conf).
- ACCESS O=✓std: Cionni2011 confirmed 1-0 high conf (Bi/Dix 2013 + Eyring 2013; no interactive chemistry; GLOMAP ruled out).
- ACCESS aerosol/SO/VL/LU: ALL unconfirmed (claims refuted 0-1 for lack of primary text evidence this stage). Likely CLASSIC prescribed sulfate scheme from HadGEM2-A inheritance — to be confirmed in UKMO Stage 8.

---

## CMIP5 Stage 6 (CNRM + IPSL: CNRM-CM5, CNRM-CM5-2, IPSL-CM5A-LR, IPSL-CM5A-MR, IPSL-CM5B-LR) — COMPLETE ✓ (2026-06-21)

Stage 6 results written (2026-06-21) — workflow wf_affaeb54-772 (14/14 claims confirmed 1-0):
- `research/cmip5/models/CNRM__cnrm_cm5.md` — populated; MOBIDIC ozone exc; LMDZ-INCA offline OD aerosols dev; Ammann2007 volcanic dev; LU excluded dev; MD/SS FXc dev; SO unconfirmed
- `research/cmip5/models/CNRM__cnrm_cm5_2.md` — inferred from CNRM-CM5; MOCAGE O exc expected but UNCONFIRMED
- `research/cmip5/models/IPSL__ipsl_cm5a_lr.md` — populated; INCA+REPROBUS ozone dev; LMDZ-INCA offline 11yr-smoothed aerosols dev; Wang2005+Frohlich&Lean2004 solar std; Sato1993-updated volcanic std; LU unconfirmed
- `research/cmip5/models/IPSL__ipsl_cm5a_mr.md` — identical forcing to CM5A-LR (resolution only)
- `research/cmip5/models/IPSL__ipsl_cm5b_lr.md` — identical forcing to CM5A-LR (LMDZ5B physics not forcing)
- `research/cmip5/data/verified-forcing-matrix.csv` — rows 22–26 added (cnrm_cm5, cnrm_cm5_2, ipsl_cm5a_lr, ipsl_cm5a_mr, ipsl_cm5b_lr)
- `research/cmip5/README.md` — rows 22–26 updated ☐→☑; staging plan row 6 updated ☐→☑; Stage 6 cross-cutting findings section added
- `research/bib-to-add.md` — Stage 6 section prepended (voldoire_cnrm_2013, dufresne_ipsl_2013, szopa_aerosol_2013, ammann_volcanic_2007, cariolle_new_2007, frohlich_lean_2004)

### Key findings (Stage 6):
- Both French groups substitute LMDZ-INCA offline pre-computed aerosol ODs for the Taylor 2012 standard Lamarque2010-OD — systematic DEVIATION across CNRM + IPSL. Confirmed 1-0 high conf (Voldoire2013 + Szopa2013).
- CNRM-CM5 ozone EXCEEDS standard: MOBIDIC 2-D linearized interactive scheme (Cariolle & Teyssèdre 2007) — ozone prognostic in ARPEGE.
- IPSL-CM5 ozone DEVIATES: offline merged INCA-trop + REPROBUS-strat product, prescribed as monthly-mean zonal fields — NOT Cionni2011.
- CNRM-CM5 additional deviations: mineral dust + sea salt FIXED at pre-industrial (FXc); LU explicitly excluded; volcanic = Ammann2007 (not Sato-updated).
- IPSL-CM5 corrects CMIP3 errors: SO=✓std (Wang2005+Frohlich&Lean2004); VL=✓std (Sato1993-updated). Both CMIP3 no-natural-forcing errors corrected.
- CNRM-CM5-2 MOCAGE ozone remains unconfirmed from primary source — open question for follow-up.

---

## CMIP5 Stage 7 (MPI + EC-EARTH: MPI-ESM-LR, MPI-ESM-MR, MPI-ESM-P, EC-EARTH) — COMPLETE ✓ (2026-06-21)

**Results written:** `MPI__mpi_esm_lr.md`, `MPI__mpi_esm_mr.md`, `MPI__mpi_esm_p.md`, `ICHEC__ec_earth.md`, `verified-forcing-matrix.csv` rows 27–30, `README.md` registry rows 27–30 and staging plan row 7 ☑, Stage 7 cross-cutting findings section, `bib-to-add.md` Stage 7 section.

**Key findings (Stage 7):**
- **MPI-ESM aerosols = ✗dev (Kinne MAC-v1)**: All three MPI configurations prescribe total-anthropogenic aerosol optical properties from Kinne et al. 2013 MAC-v1 climatology — NOT Lamarque2010-OD, NOT interactive HAM2. BC/OC effects physically incorporated in bundled optical field (corrects CMIP3 ECHAM5 exclusion) but method deviates from Taylor2012 standard.
- **MPI-ESM ozone = ✓std (Cionni2011)**: ECHAM6 default ozone is a 3D monthly climatology from Cionni2011 AC&C/SPARC database, extended above 1 hPa. No interactive chemistry in standard historical. Stevens2013 verbatim confirmed 1-0 high conf.
- **MPI-ESM LU = ✓std (Hurtt2011 LUH1 via JSBACH)**: Corrects CMIP3 ECHAM5 LU exclusion. Confirmed 1-0 medium conf.
- **EC-EARTH SI = ✗dev (no indirect effect)**: "ECE2 only accounts for the direct radiative effects of aerosols...but it has no representation of the indirect effects." — Wyser et al. 2020 (GMD doi:10.5194/gmd-13-3465-2020) verbatim, confirmed 1-0 high conf; Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022) supporting. Aerosol source ~std (CAM/Lamarque2011 mass-concentrations mapped onto IFS types, direct-only).
- **ESM inputs (MPI-ESM N-dep, HAMOCC iron, BC-on-snow) and MPI-ESM SO/VL all unconfirmed** (Giorgetta2013 + Stevens2013 paywalled Wiley 402).
- **3 adversarially killed claims were overcautious**: refutations are good news — they confirm that primary sources DO document forcing details and that EC-EARTH followed CMIP5 protocols.

Source: workflow wf_c371f969-29f (2026-06-21); 11/14 confirmed.

---

## CMIP5 Stage 8 (UKMO: HadCM3, HadGEM2-AO, HadGEM2-CC, HadGEM2-ES) — COMPLETE ✓ (2026-06-21)

**Results written:** `MOHC__hadcm3.md`, `MOHC__hadgem2_ao.md`, `MOHC__hadgem2_cc.md`, `MOHC__hadgem2_es.md`, `verified-forcing-matrix.csv` rows 31–34, `README.md` registry rows 31–34 and staging plan row 8 ☑, Stage 8 cross-cutting findings section, `bib-to-add.md` Stage 8 CMIP5 section.

**Key findings (Stage 8):**
- **HadGEM2-ES fully documented (14/14 confirmed 1-0)**: G=✓std(Meinshausen2011); O=exc(UKCA-interactive-trop+Cionni2011-NCAS-strat); SD/BC/OC=~std(CLASSIC-Lamarque2010-emis;interactive-not-prescribed-OD); SI/MD/SS=exc(1st+2nd-indirect+fully-interactive); LU=✓std(Hurtt2011-TRIFFID); SO=✓std(Lean2009/Wang2005); VL=✗dev(Sato1993-original-extended-Thomason2008-NOT-Sato-updated). Sources: Jones2011 + Collins2011 + Martin2011.
- **HadCM3 NOT confirmed**: Workflow did not return any surviving claims for HadCM3 — all 12 forcings remain "?". CMIP5 dataset update status unknown.
- **HadGEM2-AO/CC inferred from family**: All verdicts extrapolated from HadGEM2-ES + Collins2011/Martin2011. AO: O=?std (no UKCA). CC: O=?exc (UKCA). Not directly verified.
- **ACCESS cross-check resolved inferentially**: Collins2011+Martin2011 confirm HadGEM2-A uses CLASSIC from Lamarque2010 — same atmosphere as ACCESS1-0/1-3; confirms ACCESS aerosol inference from Stage 5.

Source: workflow wf_71ff96d7-487 (2026-06-21); 14/14 claims confirmed 1-0 (all HadGEM2-ES).

---

## CMIP5 Stage 9 (MIROC: MIROC4h, MIROC5, MIROC-ESM, MIROC-ESM-CHEM) — COMPLETE ✓ (2026-06-21)

**Results written:** `MIROC__miroc4h.md`, `MIROC__miroc5.md`, `MIROC__miroc_esm.md`, `MIROC__miroc_esm_chem.md`, `verified-forcing-matrix.csv` rows 35–38, `README.md` registry rows 35–38 and staging plan row 9 ☑, Stage 9 cross-cutting findings section, `bib-to-add.md` CMIP5 Stage 9 section.

**Key findings (Stage 9):**
- **MIROC-ESM-CHEM O=exc (CHASER interactive)**: CHASER predicts ozone from Lamarque2010 precursor emissions — confirmed 1-0 high conf (Watanabe2011 GMD). MIROC-ESM-CHEM is the interactive-chemistry companion; MIROC-ESM uses prescribed ozone from a custom offline CHASER run (Kawase2011), NOT Cionni2011.
- **MIROC-ESM/CHEM aerosols all exc (SPRINTARS interactive)**: BC, OC/OM, sulphate, soil dust, sea salt all driven interactively by SPRINTARS from Lamarque2010 precursor emissions + internal model meteorology for dust/salt. Coupled to cloud/precipitation for direct+semi-direct+indirect aerosol effects. Continues CMIP3 MIROC3.2 SPRINTARS pattern. All 6 aerosol keys = exc; confirmed 1-0 high conf.
- **MIROC-ESM/CHEM VL=✓std (Sato1993+updates)**: Post-1998 exponential decay (1-yr relaxation time). Confirmed 1-0 high conf (Watanabe2011 verbatim).
- **MIROC4h and MIROC5 — SCOPE LIMITATION**: Sakamoto2012 (MIROC4h primary) documents a 1950 present-day control run ONLY — not CMIP5 historical forcings. Watanabe M. 2010 (MIROC5 primary) covers mean-state/variability; no per-forcing documentation. All 12 cells remain "?" for both models. SPRINTARS likely (from ESM/CHEM confirmation) but NOT confirmed for the AOGCM-only variants.
- **Solar (all four models) UNRESOLVED**: Lean2005 deviation claim refuted (0-1). Wang2005 standard NOT positively confirmed. Solar dataset unknown for all four MIROC CMIP5 models.

Source: workflow wf_9b467e91-606 (2026-06-21); 30 agents; 758,709 subagent tokens; 12/14 claims confirmed 1-0; 2 refuted (Lean2005 solar deviation; MIROC4h developer consortium claim); Watanabe et al. 2011 (GMD doi:10.5194/gmd-4-845-2011) primary source for MIROC-ESM/CHEM.

---

## CMIP5 Stage 10 (NorESM + FGOALS + FIO + BNU) — COMPLETE ✓ (2026-06-21)

Model files written: `NCC__noresm1_m.md`, `NCC__noresm1_me.md`, `LASG-CESS__fgoals_g2.md`, `LASG-IAP__fgoals_s2.md`, `FIO__fio_esm.md`, `GCESS__bnu_esm.md`; `verified-forcing-matrix.csv` rows 39–44; `README.md` registry rows 39–44 and staging plan row 10 ☑; Stage 10 cross-cutting findings section; `bib-to-add.md` CMIP5 Stage 10 section (8 entries).

**Key findings (Stage 10):**
- **NorESM1-M/ME aerosols all exc (CAM4-Oslo interactive)**: SD/SI/BC/OC/MD/SS all ＋exc — full online prognostic scheme from Lamarque2010 emissions + wind; 1st+2nd indirect. G/O/LU/SO/VL=✓std.
- **NorESM1-ME ESM inputs**: N-dep=Lamarque2010 (NOT 2013 ACCMIP; Tjiputra2013); iron=Mahowald2005 (HAMOCC; Tjiputra2013).
- **FGOALS-g2/s2 SD/BC/OC=✗dev (BAM bulk scheme)**: Prescribed mass concentrations (not OD) from offline Lamarque2010 transport; SI/MD/SS=exc; CMIP3 SO/VL/LU omissions all corrected (Li2013/Bao2013).
- **FIO-ESM VL=Sato-updated**: NOT Ammann2003 despite CAM3.1 heritage — deliberate CMIP5 adoption confirmed (Qiao2013). SI=n/a (CAM3.1); MD/SS=FXc.
- **BNU-ESM**: SD/BC/OC=✓std; SI/MD/SS=exc; N-dep=Lamarque2010; iron=Mahowald2005 (NEMO2-BGC; Ji2014).

Source: workflow wf_36a86e20-c4b (2026-06-21); models confirmed from Bentsen2013, Tjiputra2013, Li2013, Bao2013, Qiao2013, Ji2014.

---

## CMIP5 Stage 11 (CMCC: CMCC-CESM, CMCC-CM, CMCC-CMS) — COMPLETE ✓ (2026-06-21)

**Results written:** `CMCC__cmcc_cesm.md` (components corrected, MOZART-3 refuted), `CMCC__cmcc_cm.md` (O=✓std Cionni2011 C1modB confirmed), `CMCC__cmcc_cms.md` (O=? hitop variant inferred); `README.md` registry rows 45–47 and staging plan row 11 ☑; Stage 11 cross-cutting findings section; `bib-to-add.md` Stage 11 section (5 entries). NOTE: verified-forcing-matrix.csv not updated (file does not exist yet in repo). CMIP5 first pass complete — all 47 models processed across 11 stages. Next: CMIP5 second pass (open questions / targeted PDF reads) or CMIP6 first pass.

**Key findings:**
- CMCC-CM O=✓std (Cionni2011 C1modB; Eyring2013 Table 1; only confirmed forcing across all 36 slots)
- CMCC-CMS O=? (hitop variant strongly inferred; C1modB refuted for L95 model; CMS absent from Eyring2013 Table 1)
- CMCC-CESM components corrected: OPA8.2+SILVA (not NEMO3.2/CLM3.5); MOZART-3 absent (refuted)
- 35/36 forcing slots remain unconfirmed across all three models (most documentation-sparse centre of 11 stages)
- None of three models submitted historicalMisc attribution experiments
- Source: wf_89572b47-8df (2026-06-21); 28 agents; 1,697,919 tokens

## CMIP5 FIRST PASS COMPLETE (2026-06-21)

All 47 models across 11 stages processed.

**Second-pass updates applied (2026-06-21):**
- Stage 3 NCAR: G/LU/VL → ✗dev (IPCC TAR, Hurtt2006, Ammann2003; Gent2011); CESM1-CAM5/1-FV2/BGC/WACCM/FASTCHEM same family deviations confirmed
- Stage 4 BCC: Aerosols → ✗dev (Collins2006 prescribed OD, SI=n/a); G/O/LU/SO/VL still ?
- Stage 5 ACCESS: Aerosols → CLASSIC resolved (Martin2011); G/LU/SO/VL still ?
- Stage 6 GISS-CC: All atmos cells → ✗dev/✓std (p1 NINT confirmed from rundecks; Miller2014/Schmidt2014)
- Stage 9 MIROC4h/5: All 11 cells confirmed (Sakamoto2012/WatanabeM2010 Sect external-forcing)
- Stage 9 MIROC-ESM/CHEM: G/LU → ✓std (Meinshausen2011/Hurtt2009/2011; Watanabe2011); SO → ~ (Lean2005 nuanced)
- HadCM3: FC → n/a confirmed (Gordon2000 title: "without flux adjustments")

**Remaining ? cells (27 standalone, 104 total-with-partial-uncertainty) as of 2026-06-21:**
- BCC-CSM1.1/1.1m: G/O/LU/SO/VL (Wu2014 PDF in /resources)
- HadCM3: 11 cells (Johns2003 + Gordon2000 both in /resources)
- GISS-E2-H/R: MD/SS (physics-version-dependent; GISS-E2-H also G/LU uncertain in prior entries)
- CESM1-FASTCHEM/WACCM: MD/SS + aerosol details (likely CAM4-prescribed but unconfirmed)
- Many models: G/LU/SO/VL = "?std(unconfirmed)" (expected std but not primary-source confirmed)

---

## CMIP5 Second Pass Stage A (BCC + CanESM2/CanCM4 open questions) — COMPLETE ✓ (2026-06-22)

**Results (2026-06-22):** wf_7d4aa291-ba4 — Arora2011 agent succeeded; Wu2014 and vonSalzen2013 PDF reads failed in workflow (poppler-utils not installed; Read tool requires pdftoppm).

**Resolved this pass:**
- **CanESM2 LU = ✓std**: Arora2011 p.2: "historical changes in crop area provided in the CMIP5 dataset" (=luh.unh.edu=Hurtt2011). Written to CCCma__canesm2.md + CSV.
- **CanESM2 CO2-mode = concentration-driven ✓**: Arora2011 p.1: "prescribed CO2 and other GHGs forcing." Written to CCCma__canesm2.md + CSV.
- **CanCM4 LU = ✓std (inferred)**: Same CanAM4/CLM as CanESM2; Hurtt2011 CMIP5 LUH. Written to CCCma__cancm4.md + CSV.
- **SO/VL/G/O/SD/BC/OC/MD/SS/SI already confirmed** from Stage 4 vonSalzen2013 read (in model files; no change needed).
- **BCC LU = ✗dev**: Absent from Wu2014 p.43 forcing list ("GHGs, aerosols, volcanic eruptions, total column ozone, and solar activity" — LU not mentioned). Written to CSV.

## CMIP5 Second Pass Stage A2 (pdfminer reads: Wu2014 / Wu2010 / vonSalzen2013 / Christian2014 / Cionni2011) — COMPLETE ✓ (2026-06-22)

**PDFs read with pdfminer (miniforge3/bin/python3):**
1. `Wuetal14JMetRes-BCC-CSM1Overview.pdf` (Wu2014) — confirmed DOES NOT NAME specific G/O/SO/VL datasets; only lists forcing categories; BCC LU=✗dev confirmed.
2. `Wuetal10ClimDyn-BCC-AGCM2DescriptionPerformanceOfPresentDayClimate.pdf` (Wu2010) — BCC-AGCM2.0.1 AMIP runs (1949–2000 observed SST/SIC); GHGs held constant at 1990 levels; aerosol = Collins2006 climatology (FXc); no CMIP5 historical forcing datasets named. NOT a CMIP5 historical description.
3. `vonSalzenetal13Atmos-Ocean-CanAM4RepresentationOfPhysicalProcesses.pdf` (vonSalzen2013) — all CanESM2/CanCM4 G/O/SD/SI/BC/OC/MD/SS/SO/VL confirmed from Stage 4; no new information needed.
4. `Christian14PLOSOne-CanESM2TimingAndDepartureOfOceanBiogeochemicalCyclesFromPreindustrialState.pdf` (Christian2014) — BGC emergence paper; uses CanESM2 historical runs but does not describe N-dep input forcing. No N-dep dataset named.
5. `Cionnietal11AtmosChemPhys-HistoricalOzoneDatabaseForCMIP5.pdf` (Cionni2011) — lists CCMs used to create the database (Table 2); does NOT list BCC-CSM models as confirmed adopters. No BCC confirmation.
6. `Eyringetal13JGR-Long-termOzoneChangesAndClimateImpactsInCMIP5.pdf` (Eyring2013) — no BCC or EC-Earth entries in Table 1.

**Definitive open cells (exhausted all available /resources/ PDFs):**
- BCC-CSM1.1 + BCC-CSM1.1-m: G=? O=? SO=? VL=? (4 cells; LU=✗dev resolved). No English-language primary source names these datasets. Deferred to CMIP6 cross-reference pass.
- CanESM2: N-dep=? DIC-init=? Not in Arora2011, vonSalzen2013, Christian2014, or Christian2010. Needs Arora & Boer (2010) terrestrial BGC paper or other primary source. Deferred to CMIP6 cross-reference pass.

**Resources available:** `resources/Wuetal14JMetRes-BCC-CSM1Overview.pdf`, `resources/vonSalzenetal13Atmos-Ocean-CanAM4RepresentationOfPhysicalProcesses.pdf`, `resources/Aroraetal11GRL-CarbonEmissionLimitsRequiredToSatisfyRCPsCanESM2.pdf`

**Resources available:** `resources/Wuetal14JMetRes-BCC-CSM1Overview.pdf`, `resources/vonSalzenetal13Atmos-Ocean-CanAM4RepresentationOfPhysicalProcesses.pdf`, `resources/Aroraetal11GRL-CarbonEmissionLimitsRequiredToSatisfyRCPsCanESM2.pdf`

### Stage A prompt:

Targeted second-pass read to resolve open forcing questions for two CMIP5 model groups. Primary sources are PDFs already in the `/resources/` directory — use direct PDF reads, NOT web search.

**GROUP 1: BCC-CSM1.1 and BCC-CSM1.1-m** (Wu, T., et al. 2014. *J. Meteor. Res.* 28(1), 34–56. doi:10.1007/s13351-014-3041-7; PDF at `resources/Wuetal14JMetRes-BCC-CSM1Overview.pdf`)

Open cells for BOTH BCC models (identical forcing per Wu2014 p.43):
1. **G = ?**: Did BCC-CSM1.1 use Meinshausen et al. 2011 GHG concentrations (Taylor2012 standard) or different GHG dataset?
2. **O = ?**: Did BCC-CSM1.1 use Cionni et al. 2011 ozone (Taylor2012 standard) or a different ozone dataset/climatology?
3. **LU = ?**: Did BCC-CSM1.1 use Hurtt et al. 2011 land-use dataset (Taylor2012 standard)? Land-use may be absent (BCC-AGCM2.1 is not a full ESM).
4. **SO = ?**: Which solar irradiance dataset — Wang et al. 2005 (standard) or different?
5. **VL = ?**: Which volcanic dataset — Sato et al. 1993 updated (standard) or Ammann et al. 2003 or other?

Read Wu2014 Sections 2–4 for model structure; look for dedicated forcing/external-forcing subsection. Also check Wu2014 p.36 distinction between BCC-AGCM2.1 (CMIP5 submission) and BCC-AGCM2.0.1-CAM research model.

**GROUP 2: CanESM2 and CanCM4** (vonSalzen, K., et al. 2013. *Atmos.-Ocean* 51(1), 104–125. doi:10.1080/07055900.2012.755610; PDF at `resources/vonSalzenetal13Atmos-Ocean-CanAM4RepresentationOfPhysicalProcesses.pdf`)

Open cells:
1. **LU = ~unclear**: Is land-use change forcing (Hurtt2011) applied in the coupled CanESM2 historical run? vonSalzen2013 covers AMIP (uncoupled); confirm if LU applies in coupled mode.
2. **SO = ?**: Which solar irradiance dataset — confirm Wang2005 (std) or different? vonSalzen2013 Sect. on external forcing should have this.
3. **VL = ?**: Which volcanic dataset — Sato1993-updated (std) or other? Same section.
4. **CanESM2 N-dep**: Lamarque2010 or Lamarque2013 ACCMIP for nitrogen deposition to CTEM land + CMOC ocean?
5. **CanESM2 CO2 mode**: Concentration-driven (historical) confirmed?

Also read `resources/Aroraetal11GRL-CarbonEmissionLimitsRequiredToSatisfyRCPsCanESM2.pdf` for CanESM2 ESM-specific forcing (N-dep, CO2 mode).

ADVERSARIALLY VERIFY: For each finding, try to refute it — ask if an alternative interpretation is possible. Reject any claim not supported by a direct quote or specific page number from the PDF.

DELIVERABLE: Per open cell per model: verdict (std/dev/exc/?), temporal code, dataset/source, direct quote + page number from PDF. Flag if cell remains unresolved after PDF read.

---

## CMIP5 Second Pass Stage B (HadCM3 targeted read) — COMPLETE ✓ (2026-06-22)

**Resolved (Johns2003 + Stott2000 — direct pdfminer reads, main session):**
- **O = ✗dev**: Li & Shine (1995) + STOCHEM (Collins1997/1999) + SAGE/Wang1996 ozone method; NOT Cionni2011. Johns2003 S5.2 L1196–1228.
- **SD = ＋exc**: Fully interactive sulphur cycle scheme from SO2 emissions (Stott2000 L157; Johns2003 S5.3); exceeds prescribed Lamarque2010 standard.
- **SI = ~ (nuanced)**: Included via offline calibrated cloud albedo perturbations from HadAM3 experiments (Johns2003 Appendix A); ~70% of HadAM3 magnitude in coupled runs.
- **BC = ✗dev**: Not applied — Johns2003 S5.4 L1907: "Our simulations do not take changes in black carbon and organic carbon into account."
- **OC = ✗dev**: Same as BC.
- **MD = ✗dev**: Explicitly omitted — Johns2003 L4252: "We have omitted the effects of changes in soot, biogenic aerosols and mineral dust."
- **SS = ✗dev**: Not applied as historical forcing; not mentioned in either paper.
- **LU = ✗dev**: Explicitly excluded — Johns2003 L4261: "We have also neglected land surface changes."
- **SO = ✗dev**: Lean, Beer & Bradley (1995) (LBB95) — Stott2000 ref 22; Jones2011 Fig.13 confirms LBB95 for CMIP5 HadCM3 (Maunder-to-modern = 2.95 W/m²); NOT Wang2005.
- **VL = ✓std**: Sato et al. (1993) — Stott2000 ref 21 ("Sato, Hansen, McCormick, Pollack, JGR 98, 22987").
- **G = ~ (uncertain)**: Johns2003 used IPCC 1995 (Schimel et al. 1996) for historical GHGs; CMIP5 submission may have updated to Meinshausen2011 — no CMIP5-specific HadCM3 paper found to confirm.

**Written to:** `MOHC__hadcm3.md` (all 11 cells updated) + `verified-forcing-matrix.csv` row 31 patched.

**Still open:** G=~ (CMIP5 update to Meinshausen2011 not confirmed or refuted). Requires CMIP5-specific HadCM3 documentation (none found in /resources/).

**Target:** HadCM3 — 11 open cells (G/O/SD/SI/BC/OC/MD/SS/LU/SO/VL)

**Resources:** `resources/Johnsetal03ClimDyn-HadCM3AnthropogenicClimateChange1860To2100.pdf`, `resources/Gordonetal00ClimDyn-HadCM3SSTSeaIceExtentsAndOceanHeatTransportsWithoutFluxAdjustment.pdf`, `resources/Stottetal00SC-20CenturyTemperatureExternalControlByNaturalAndAnthropogenicForcings.pdf`

### Stage B prompt:

Targeted second-pass read to resolve all 11 open forcing cells for **HadCM3 CMIP5 `historical`** (1850–2005). FC=n/a is already confirmed (Gordon2000). Primary sources are PDFs in `/resources/` — use direct PDF reads.

PRIMARY SOURCES:
1. **Johns, T.C., et al. (2003)**. Anthropogenic climate change for 1860 to 2100 simulated with the HadCM3 model under updated emissions scenarios. *Clim. Dyn.* 20(5–6), 583–612. PDF at `resources/Johnsetal03ClimDyn-HadCM3AnthropogenicClimateChange1860To2100.pdf` — this is the CMIP3/20C3M paper but the same model is resubmitted to CMIP5.
2. **Stott, P.A., et al. (2000)**. External control of 20th century temperature by natural and anthropogenic forcings. *Science* 290, 2133–2137. PDF at `resources/Stottetal00SC-20CenturyTemperatureExternalControlByNaturalAndAnthropogenicForcings.pdf` — the main HadCM3 detection-attribution paper with explicit forcing list.
3. **Gordon, C., et al. (2000)** PDF at `resources/Gordonetal00ClimDyn-HadCM3SSTSeaIceExtentsAndOceanHeatTransportsWithoutFluxAdjustment.pdf` — model description.

Key questions:
1. **G**: Meinshausen2011 (std) or CMIP3-era GHG dataset? HadCM3 CMIP5 may still use pre-CMIP5 GHG time series.
2. **O**: Cionni2011 (std) or older ozone dataset (Haigh 1994 climatology used in CMIP3)?
3. **SD/SI**: Johns2003 should specify sulphate direct+indirect scheme; CLASSIC scheme expected but confirm.
4. **BC/OC**: Were BC/OC added for CMIP5 (absent in CMIP3 HadCM3)? Or still absent?
5. **MD/SS**: Expected absent — confirm.
6. **LU**: Hurtt2011 (std) added for CMIP5? Or excluded (as in CMIP3)?
7. **SO**: Wang2005 (std) updated from Lean1995 (2.95 W/m² Maunder-to-modern used in CMIP3)?
8. **VL**: Sato1993-updated (std) confirmed for CMIP5?

IMPORTANT: HadCM3 is the same model as CMIP3 ukmo_hadcm3. The critical question is whether CMIP5 forcing datasets (Meinshausen2011, Cionni2011, Hurtt2011, Wang2005) were adopted or whether CMIP3-era datasets were carried over. The CMIP5 protocol requested updating to standard datasets — verify compliance.

ADVERSARIALLY VERIFY all findings. For each confirmed cell: provide direct quote + page from PDF.

DELIVERABLE: Per cell: verdict (std/dev/n-a/?), temporal, dataset, quote/page. Flag cells that remain unresolved after PDF read.

---

## CMIP5 Second Pass Stage C (MPI-ESM + EC-EARTH open questions) — COMPLETE ✓ (2026-06-22)

**Results (2026-06-22 — direct pdfminer reads, main session):**

**MPI-ESM-LR/MR/P VL = ✗dev (confirmed):**
- Giorgetta2013 S4.7 L793–800: "Stratospheric aerosols are represented by their optical properties, which are provided for the historical period (G. Stenchikov, personal communication, 2010), extending the Pinatubo aerosol data set (PADS) of Stenchikov et al. [1998]."
- Stenchikov1998/PADS-extended by G. Stenchikov (pers. comm. 2010) — NOT Sato1993-updated (Taylor2012 standard). ✗dev confirmed.
- MR and P: same dataset inferred (same ECHAM6 + Giorgetta2013 protocol). Written to MPI__mpi_esm_lr/mr/p.md + CSV rows 27–29.

**EC-EARTH MD and SS = ~std (upgraded from ?):**
- Hazeleger2011 S2.1: "EC-Earth optionally allows for time varying aerosol forcings based on historical and projected concentrations (Lamarque et al.). These will be applied in the CMIP5 simulations." — confirms ALL Lamarque2011 mass-conc aerosol species (including dust and sea salt) for CMIP5 runs.
- MD and SS upgraded from "?" to ~std (TV, Lamarque2011 via IFS aerosol-type mapping). Written to ICHEC__ec_earth.md + CSV row 30.

**EC-EARTH G/O/LU/SO/VL = still unconfirmed:**
- Hazeleger2011 states "different greenhouse gas concentrations… and land use fields will be used" for CMIP5 without naming source datasets. No CMIP5-specific EC-EARTH documentation paper naming these datasets found in /resources/.
- 5 cells remain "?" — no further sources available from current /resources/ PDFs.

**MPI-ESM ESM-inputs (N-dep, iron, BC-on-snow):** Still unresolved — not in accessible Giorgetta2013 or Reick2013 text. Reick2013 covers JSBACH DYNVEG land-cover methodology only, no ESM forcing dataset names.

**Written to:** `MPI__mpi_esm_lr/mr/p.md` (VL updated) + `ICHEC__ec_earth.md` (MD/SS upgraded) + `verified-forcing-matrix.csv` rows 27–29 (VL) and row 30 (MD/SS + notes).

**Resources:** `resources/Giorgettaetal13JAMES-ClimateCarbonCycleChanges1850To2100InMPI-ESMForCMIP5.pdf`, `resources/Stevensetal13JAMES-MPI-M-ECHAM6AtmosphericComponent.pdf`, `resources/Hazelegeretal11ClimDyn-EC-Earthv2p2DescriptionAndValidation.pdf`, `resources/Reicketal13JAMES-MPI-ESMNaturalAndAnthropogenicLandCoverChange.pdf`

### Stage C prompt (for use after Stage B complete):

Targeted second-pass read for MPI-ESM and EC-EARTH open questions. Primary sources are PDFs in `/resources/`.

**MPI-ESM-LR/MR/P open cells:**
1. **SO=?**: `resources/Giorgettaetal13JAMES-ClimateCarbonCycleChanges1850To2100InMPI-ESMForCMIP5.pdf` Sect. on external forcing — which solar dataset (Wang2005 std, or SPARC/SOLARIS, or other)?
2. **VL=?**: Same paper — volcanic forcing dataset (Sato1993-updated std, or Stenchikov1998-basis)?
3. **ESM N-dep**: Lamarque2010 or 2013 ACCMIP for N/S deposition to JSBACH/HAMOCC?
4. **ESM iron**: HAMOCC iron deposition dataset?
5. **ESM CO2 mode**: Concentration-driven or emission-driven historical?

Also check `resources/Stevensetal13JAMES-MPI-M-ECHAM6AtmosphericComponent.pdf` for ECHAM6 atmospheric forcing details.

**EC-EARTH open cells** (Hazeleger, W., et al. 2012; PDF at `resources/Hazelegeretal11ClimDyn-EC-Earthv2p2DescriptionAndValidation.pdf`):
1. **G=?**: Meinshausen2011 (std)?
2. **O=?**: Cionni2011 (std)?
3. **SO=?**: Wang2005 (std)?
4. **VL=?**: Sato1993-updated (std)?
5. **LU=?**: Hurtt2011 (std)?
6. **MD/SS=?**: Confirmed in IFS aerosol mapping or absent?

Also check `resources/Doscheretal22GMD-EC-Earth3ForCMIP6.pdf` for references to CMIP5 forcing.

ADVERSARIALLY VERIFY each finding. Provide direct quote + page from PDF.

---

## CMIP5 Second Pass Stage D (CMCC targeted read) — COMPLETE ✓ (2026-06-22)

**Results (2026-06-22 — pdfminer read + web fetch, main session):**

**CMCC-CESM: 9 cells resolved (from 11 open)**
Primary sources: Vichi2011 (PDF extracted) + Fogli2009 (CMCC RP0061 downloaded from cmcc.it)
- **G = ✗dev**: ENSEMBLES GHG concentrations (Johns et al. 2011, cnrm.meteo.fr), NOT Meinshausen2011. Vichi2011 verbatim: "The well-mixed GHGs and the sulphate aerosols used in the preindustrial and historical runs are the annually prescribed observation-based concentrations available from the ENSEMBLES multi-model experiment."
- **O = ✗dev**: Fixed monthly ozone climatology (T31_o3clim2.nc), NOT Cionni2011. Fogli2009 input file list verbatim.
- **SD = ✗dev**: ENSEMBLES annual sulphate concentrations (T31_so4_YYYY.nc), NOT Lamarque2010-OD. Vichi2011 + Fogli2009.
- **SI/BC/OC = ✗dev (n/a)**: ECHAM5 T31 without HAM — sulphate-only scheme; no indirect effect, no BC, no OC files in Fogli2009 input list.
- **MD/SS = ✗dev (FXc)**: No time-varying dust/sea-salt files; T31_so4_nat_clim.nc = fixed natural sulphate background only.
- **LU = ✗dev (n/a)**: No time-varying land-use file; all vegetation files = fixed climatologies in Fogli2009.
- **SO/VL = ~ (likely ✗dev)**: Vichi2011: "The INGV-CMCC-CE simulations were performed without any variation in natural forcings (solar and volcanic)." Applies to all described simulations; no solar/volcanic files in Fogli2009. CAVEAT: Vichi2011 describes ENSEMBLES (1860–1999) experiments; CMIP5 historical may differ.
- **CO2 mode = concentration-driven**: Vichi2011 "prescribed atmospheric 'target' concentrations."

**CMCC-CM: no new findings**
- O=✓std (Cionni2011 C1modB) already confirmed Stage 11. Scoccimarro2011 paywalled (AMS 403). No other accessible source found. All other 10 cells remain "?".

**CMCC-CMS: no new findings**
- All 11 cells remain "?". No accessible primary source found.

**Written to:** `CMCC__cmcc_cesm.md` (11 cells updated) + `verified-forcing-matrix.csv` rows 45–47 (all three CMCC rows added, previously missing).

**Resources:** `resources/Vichietal11ClimDyn-CMCC-CESM-GlobalAndRegionalCarbonUptakeAndClimateChangeSensitivityToASubstantialMitigationScenario.pdf`; Fogli2009 CMCC RP0061 downloaded from cmcc.it/wp-content/uploads/2012/05/rp0061-ans-04-2009.pdf

### Stage D prompt (for use after Stage C complete):

Targeted second-pass read + web search for CMCC model forcing documentation.

Read `resources/Vichietal11ClimDyn-CMCC-CESM-GlobalAndRegionalCarbonUptakeAndClimateChangeSensitivityToASubstantialMitigationScenario.pdf` for CMCC-CESM ESM forcing details (G, O, aerosols, LU, SO, VL, ESM-inputs).

Also web-fetch: Scoccimarro, E., et al. (2011). Effects of Tropical Cyclones on Ocean Heat Transport in a High Resolution Coupled General Circulation Model. *J. Climate* 24, 4368–4384. doi:10.1175/2011JCLI4104.1 — primary CMCC-CM documentation. And Fogli, P.G., et al. (2009). INGV-CMCC Carbon (ICC): a carbon cycle Earth system model. CMCC Tech. Rep. RP0061 (search cmcc.it).

For each model (CMCC-CESM, CMCC-CM, CMCC-CMS): all 12 forcing keys — which dataset, verdict vs Taylor2012.

---

## CMIP5 Second Pass Stage E (PDF reads: Scoccimarro2011 / Manzini2006 / Hazeleger2010) — COMPLETE ✓ (2026-06-22)

**Results (2026-06-22 — pdfminer reads, main session):**

**Scoccimarro2011 (CMCC-CM primary paper) — NO CMIP5 FORCING INFO:**
- Paper describes CMCC_MED (Mediterranean model with embedded NEMO regional Med Sea), NOT standalone CMCC-CM
- Architecture confirmed: ECHAM5 T159L31 (top ~10 hPa) + OPA8.2 ORCA2 + OASIS3 + LIM sea ice
- Protocol: IPCC 20C3M (1950–1999) + A1B (2000–2069) — NOT CMIP5 historical
- No aerosol, ozone, land-use, solar, or volcanic dataset names given
- Written to CMCC__cmcc_cm.md provenance. All ? cells remain ?.

**Manzini2006 (MAECHAM5 for CMCC-CMS) — BASE ARCHITECTURE ONLY:**
- Configuration: T42L39 (lower-res than CMCC-CMS T63L95)
- Key finding: ozone = monthly zonal-mean climatological distribution from **Fortuin & Kelder (1998)** — fixed climatology, pre-Cionni2011
- AMIP-style (prescribed SST/SIC); no CMIP5 forcing datasets
- CMCC-CMS CMIP5 ozone now has two possible interpretations: (a) updated to hitop Cionni2011; (b) retained Fortuin-Kelder 1998. Absence from Eyring2013 Table 1 is consistent with (b).
- Written to CMCC__cmcc_cms.md O cell and provenance. O cell remains ?.

**Hazeleger2010 (EC-EARTH BAMS) — INDIRECT CORROBORATION ONLY:**
- Pre-CMIP5 paper (2010); describes plans for CMIP5 participation; no specific forcing dataset names
- Lists boundary condition categories (GHG, aerosols, LU, solar) without naming datasets
- Corroborates SI=✗dev: "direct and indirect aerosol effects" still being implemented → direct-only in CMIP5
- Confirms TM5 not yet coupled in EC-Earth V2 → prescribed Lamarque2011 aerosols (consistent with Wyser2020)
- Written to ICHEC__ec_earth.md (Forcing-specific reference added; provenance entry added). G/O/LU/SO/VL still ?.

**Resources:** `resources/Scoccimarroetal11JCL-CMCC-MEDTropicalCycloneEffectsOnOceanHeatTransport.pdf`, `resources/Manzinietal06JCL-MAECHAM5-InfluenceOfSSTOnNorthernWinterStratosphere.pdf`, `resources/Hazelegeretal10BAMS-EC-Earth-ASeamlessEarth-systemPredictionApproachInAction.pdf`

---

## NEXT STAGE — CMIP5 NEXT (archived heading)

Seed model files before launching:
- `research/cmip5/models/CMCC__cmcc_cesm.md`
- `research/cmip5/models/CMCC__cmcc_cm.md`
- `research/cmip5/models/CMCC__cmcc_cms.md`

### Stage 11 prompt:

Document the climate forcing datasets used in the three CMCC CMIP5 models — CMCC-CESM, CMCC-CM, and CMCC-CMS — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Part of a forcing review of 47 CMIP5 models against the Taylor et al. 2012 (BAMS doi:10.1175/BAMS-D-11-00094.1) standard protocol. CMCC (Centro Euro-Mediterraneo sui Cambiamenti Climatici) is the Italian modelling centre, based in Bologna. Three variants exist spanning from a full ESM with interactive chemistry (CMCC-CESM) to an AOGCM (CMCC-CM) to an AOGCM with a stratosphere-resolving atmospheric model (CMCC-CMS).

PRIOR STAGE CONTEXT — key patterns to watch:
- Stage 6 CNRM-CM5: interactive ozone via MOBIDIC (O=exc). CMCC-CESM has interactive chemistry — test if O=exc.
- Stage 6 IPSL: deviated on aerosols+ozone (LMDZ-INCA offline OD). Test whether CMCC uses similar offline Italian/French chemistry products or standard Lamarque2010-OD.
- Stage 7 MPI-ESM: deviated on aerosols (Kinne MACv1). Check if CMCC uses MACv1 or similar prescribed climatology.
- Stage 10 NorESM1-ME: N-dep=Lamarque2010. CMCC-CESM has ocean BGC — verify if consistent.
- CMCC-CMS uses ECMWF IFS spectral atmosphere (SY120L95 — extending to 0.01 hPa). High vertical resolution may affect ozone forcing approach.

KEY ARCHITECTURE:
- **CMCC-CESM**: Full ESM. ECHAM5 atmosphere (T31L39) + NEMO3.2 ocean (2°) + CLM3.5 land + LIM2 sea ice + PELAGOS ocean BGC + MOZART-3 interactive chemistry. ESM inputs: N-dep, CO2 mode, iron. Interactive chemistry expected: O=exc.
- **CMCC-CM**: AOGCM. ECHAM5 atmosphere (T159L31) + OPA8.2 ocean (2°) + SILVA land + LIM2 sea ice. No interactive chemistry. Expected: O=Cionni2011 (std). Aerosols: ECHAM5 vintage may use Tanré et al. or HAM/M7 — test if Lamarque2010 standard was adopted for CMIP5.
- **CMCC-CMS**: AOGCM. ECHAM5-MPIOM-like atmosphere (T63L95 — stratosphere-resolving) + OPA8.2 ocean (2°) + SILVA land + LIM2 sea ice. High vertical resolution for stratospheric dynamics. Ozone: does high vertical resolution atmospheric model require prescribed stratospheric ozone separately from tropospheric? VL: is Sato-updated applied consistently given high vertical levels?

PRIMARY SOURCES (to fetch):
- Scoccimarro, E., et al. (2011). Effects of Tropical Cyclones on Ocean Heat Transport in a High-Resolution Coupled General Circulation Model. *J. Climate* 24(16), 4368–4384. doi:10.1175/2011JCLI4104.1 — CMCC-CM primary documentation
- Fogli, P.G., et al. (2009). INGV-CMCC Carbon (ICC): a carbon cycle Earth system model. CMCC Tech. Rep. RP0061. — CMCC-CESM primary documentation
- Vichi, M., et al. (2011). Global and regional ocean carbon uptake and climate change: sensitivity to a substantial mitigation scenario. *Clim. Dyn.* 37(9–10), 1929–1947. doi:10.1007/s00382-011-1079-0 — PELAGOS BGC module
- Manzini, E., et al. (2006). The influence of sea surface temperatures on the Northern winter stratosphere: Ensemble simulations with the MAECHAM5 model. *J. Clim.* 19, 3863–3881. doi:10.1175/JCLI3826.1 — CMCC-CMS stratosphere-resolving atmosphere
- ES-DOC CIM documents: https://explore.es-doc.org (search CMCC + historical)
- PCMDI CMIP5 model documentation: search "CMCC" at https://pcmdi.llnl.gov/mips/cmip5/availability.html

FOR EACH of 12 forcings (+ESM inputs for CMCC-CESM), for EACH model:
(a) Was it applied in `historical`?
(b) WHICH dataset/source — time-varying or fixed?
(c) Did it follow Taylor 2012 standard, deviate, or exceed?
(d) For CMCC-CESM: N-dep dataset (Lamarque2010 or 2013 ACCMIP)? CO2 mode? Iron for PELAGOS BGC?
(e) Does the ECHAM5 atmospheric base impose any systematic deviation across all three CMCC models?

KEY QUESTIONS (priority order):
1. CMCC-CESM chemistry: Is MOZART-3 interactive chemistry active in CMIP5 historical? → O=exc expected.
2. CMCC-CM/CMS ozone: Cionni2011 (std) or alternative?
3. All three: Aerosols — does ECHAM5 use Lamarque2010-OD (std), Kinne MACv1 (as MPI), or interactive HAM?
4. CMCC-CESM ESM inputs: N-dep dataset (year)? CO2 mode? Iron deposition for PELAGOS?
5. CMCC-CMS stratospheric ozone: does the L95 top require special treatment?
6. All three: Solar=Wang2005? Volcanic=Sato-updated?
7. LU: Hurtt2011 in all three?

STANDARD PROTOCOL BASELINE (Taylor 2012):
G=Meinshausen2011 | O=Cionni2011(w/o interactive chem) | SD/BC/OC/MD/SS=Lamarque2010 | LU=Hurtt2011 | SO=Wang2005 | VL=Sato-updated

DELIVERABLE: per forcing per model — verdict (std/dev/exc/?), temporal (TV/FXc/FXk), dataset + citation. Document CMCC-CESM ESM-specific inputs separately. Flag deviations. Adversarially verify key claims.

After: write results to model files (`CMCC__cmcc_cesm.md`, `CMCC__cmcc_cm.md`, `CMCC__cmcc_cms.md`), add 3 rows to `verified-forcing-matrix.csv` (rows 45–47), update `README.md` registry rows 45–47 and Stage 11 status, append refs to `bib-to-add.md`.

---

## CMIP5 Stage 9 (prompt archived — COMPLETE):

Seed model files before launching:
- `research/cmip5/models/MIROC__miroc4h.md`
- `research/cmip5/models/MIROC__miroc5.md`
- `research/cmip5/models/MIROC__miroc_esm.md`
- `research/cmip5/models/MIROC__miroc_esm_chem.md`

### Stage 9 prompt:

Document the climate forcing datasets used in the four MIROC CMIP5 models — MIROC4h, MIROC5, MIROC-ESM, and MIROC-ESM-CHEM — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Part of a forcing review of 47 CMIP5 models against the Taylor et al. 2012 (BAMS doi:10.1175/BAMS-D-11-00094.1) standard protocol. MIROC (Model for Interdisciplinary Research On Climate) is the primary Japanese modelling group, jointly developed by CCSR/NIES/JAMSTEC. Four variants span from high-resolution AOGCM (MIROC4h), to updated AOGCM (MIROC5), to full ESM (MIROC-ESM), to ESM with coupled chemistry (MIROC-ESM-CHEM).

PRIOR STAGE CONTEXT — key patterns to watch:
- CMIP3 MIROC3.2 (hires/medres) used SPRINTARS interactive aerosols (confirmed Stage 9 CMIP3). Test whether MIROC4h/MIROC5 continue SPRINTARS in CMIP5.
- CMIP3 MIROC3.2 had richest aerosol suite in CMIP3 review (BC/OC/dust/SS/SI all Y, all confirmed genuine). Test whether CMIP5 MIROC maintains this.
- Stage 8 UKMO: HadGEM2-ES deviated on VL (Sato1993 original, not Sato-updated). Test MIROC VL carefully.
- Stage 7 MPI-ESM deviated on aerosols (Kinne MACv1). Stage 6 CNRM+IPSL deviated on both O+aerosols (offline INCA). Check if MIROC uses SPRINTARS (exc) or prescribed Lamarque2010-OD (std).

KEY ARCHITECTURE QUESTIONS:
- **MIROC4h**: High-resolution AOGCM (T213 ocean, ~0.5°). Based on older MIROC3.2 architecture? Uses SPRINTARS interactive aerosols? Prescribed ozone from Cionni2011 (std) or older CMIP3-era ozone?
- **MIROC5**: Updated AOGCM (T85L40 atmosphere + MOM4-class ocean). New aerosol scheme — does it continue SPRINTARS or switch to prescribed OD? Ozone treatment? Solar/volcanic datasets updated from CMIP3?
- **MIROC-ESM**: Full ESM with MATSIRO (land), SEIK (ocean biogeochemistry). N-deposition dataset (Lamarque2010 or 2013 ACCMIP)? CO2 mode (concentration or emission-driven)? Iron deposition for ocean BGC?
- **MIROC-ESM-CHEM**: Adds CHASER interactive atmospheric chemistry (tropospheric chemistry + aerosols). Ozone expected INTERACTIVE (O=exc). Aerosols: SPRINTARS + CHASER combined? What aerosol precursor emissions dataset?

PRIMARY SOURCES:
- MIROC4h: Sakamoto, T.T., et al. (2012). MIROC4h — a new high-resolution atmosphere–ocean coupled general circulation model. *J. Meteor. Soc. Japan* 90(3), 325–359. doi:10.2151/jmsj.2012-301 [sakamoto_miroc4h_2012 *(add)*]
- MIROC5: Watanabe, M., et al. (2010). Improved climate simulation by MIROC5: mean states, variability, and climate sensitivity. *J. Climate* 23(23), 6312–6335. doi:10.1175/2010JCLI3679.1 [watanabe_improved_2010 *(add)*]
- MIROC-ESM: Watanabe, S., et al. (2011). MIROC-ESM 2010: model description and basic results of CMIP5-20c3m experiments. *Geosci. Model Dev.* 4(4), 845–872. doi:10.5194/gmd-4-845-2011 [watanabe_miroc_2011 *(add)*]
- MIROC-ESM-CHEM: Watanabe et al. 2011 (same paper above; CHEM adds CHASER chemistry)
- ES-DOC simulation documents: https://explore.es-doc.org (search MIROC4h/MIROC5/MIROC-ESM/MIROC-ESM-CHEM historical)
- PCMDI CMIP5 documentation

FOR EACH of 12 forcings (+ESM inputs for MIROC-ESM/MIROC-ESM-CHEM), for EACH model:
(a) Was it applied in `historical`?
(b) WHICH dataset/source — time-varying or fixed? Fixed values WITH UNITS.
(c) Did it follow Taylor 2012 standard, deviate, or exceed?
(d) For MIROC-ESM: N-dep dataset and year? CO2 mode? Iron deposition for ocean BGC?
(e) For MIROC-ESM-CHEM: is ozone from CHASER interactive (O=exc)?

KEY QUESTIONS:
1. MIROC4h aerosols: SPRINTARS interactive (exc) or prescribed Lamarque2010-OD (std)?
2. MIROC5 aerosols: SPRINTARS (continuing from MIROC3.2) or new scheme?
3. MIROC-ESM-CHEM ozone: CHASER interactive confirmed (O=exc)?
4. Solar (all): Wang2005 confirmed (std)? Or CMIP3-era solar carried over?
5. Volcanic (all): Sato-updated confirmed (std)? MIROC3.2 had genuine SO/VL — test CMIP5 update.
6. MIROC-ESM N-deposition: Lamarque 2010 or 2013 ACCMIP?
7. MIROC4h vs MIROC5: Is forcing protocol identical or do they differ substantially?

STANDARD PROTOCOL BASELINE (Taylor 2012):
G=Meinshausen2011 | O=Cionni2011(w/o interactive chem) | SD/BC/OC/MD/SS=Lamarque2010 | LU=Hurtt2011 | SO=Wang2005 | VL=Sato-updated

DELIVERABLE: per forcing per model — verdict (std/dev/exc/?), temporal (TV/FXc/FXk), dataset + citation. Document MIROC-ESM/CHEM ESM-specific inputs separately. Flag deviations from Taylor 2012. Adversarially verify key claims.

## After CMIP5 Stage 9: write results to model files, add 4 MIROC rows to verified-forcing-matrix.csv (rows 35–38), update README.md registry rows 35–38 and Stage 9 status, append refs to bib-to-add.md.

---

## CMIP5 Stage 8 archived prompt (preserved for reference)

Seed model files before launching:
- `research/cmip5/models/MOHC__hadcm3.md`
- `research/cmip5/models/MOHC__hadgem2_ao.md`
- `research/cmip5/models/MOHC__hadgem2_cc.md`
- `research/cmip5/models/MOHC__hadgem2_es.md`

### Stage 8 prompt:

Document the climate forcing datasets used in the four UK Met Office Hadley Centre CMIP5 models — HadCM3, HadGEM2-AO, HadGEM2-CC, and HadGEM2-ES — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Part of a forcing review of 47 CMIP5 models against the Taylor et al. 2012 (*BAMS* doi:10.1175/BAMS-D-11-00094.1) standard protocol. UKMO (UK Met Office / Hadley Centre) contributed one older model (HadCM3, same generation as CMIP3) and three HadGEM2 variants that span from a basic AOGCM (HadGEM2-AO) to a model with interactive chemistry (HadGEM2-CC) to a full ESM (HadGEM2-ES). Cross-check: ACCESS1-0 and ACCESS1-3 (Stage 5) inherit the HadGEM2-A atmosphere — Stage 8 results should resolve the ACCESS aerosol/SO/VL/LU questions that were left unconfirmed in Stage 5.

PRIOR STAGE CONTEXT — important patterns to watch:
- CMIP3 HadCM3 used CLASSIC sulphate scheme (direct + Tett2002 delta-albedo indirect, sulphate-only); solar = Lean 1995 — test whether CMIP5 HadCM3 updated datasets to Meinshausen2011/Cionni2011/Wang2005.
- CMIP3 HadGEM1 used CLASSIC aerosols (BC/OC/sulphate/SS; direct + 1st+2nd indirect) and Solanki & Krivova 2003 solar — test whether HadGEM2 evolved this scheme.
- GISS (Stage 2) NINT deviated on ozone (GISS offline, not Cionni2011); MPI-ESM (Stage 7) deviated on aerosols (Kinne MAC-v1, not Lamarque2010-OD); test whether UKMO CLASSIC aerosols also deviate.
- CESM1-CAM5 (Stage 3) and CSIRO-Mk3.6.0 (Stage 5) exceeded on all aerosols (interactive from Lamarque2010-emis) — test whether HadGEM2-CC/ES similarly exceed.

KEY ARCHITECTURE QUESTIONS:
- **HadCM3**: Same model as CMIP3, likely with updated boundary conditions. Does it use Meinshausen2011 GHGs (std) or CMIP3-era datasets? CLASSIC aerosols (direct + delta-albedo indirect)? Cionni2011 ozone (std) or CMIP3-era Haigh ozone? Key concern: this is an older model likely not updated for CMIP5 standard datasets.
- **HadGEM2-AO**: AOGCM base without ESM components. Uses HadGEM2-A atmosphere (same atmosphere as ACCESS1-0/1-3). CLASSIC aerosol scheme. Prescribed ozone from Cionni2011 (std) or interactive UKCA? LU from Hurtt2011?
- **HadGEM2-CC**: Coupled Chemistry variant — adds UKCA interactive stratospheric+tropospheric chemistry. Ozone expected INTERACTIVE (O=exc). Aerosols: CLASSIC prescribed or interactive from UKCA?
- **HadGEM2-ES**: Full ESM — TRIFFID interactive vegetation + MEDUSA ocean biogeochemistry + UKCA chemistry. ESM-specific inputs: N-deposition dataset, CO2 mode (concentration vs. emission-driven), ocean biogeochemistry nutrients. LU via TRIFFID: Hurtt2011 or HYDE? UKCA interactive ozone (O=exc). BC on snow/ice?

IMPORTANT CROSS-CHECK — ACCESS aerosols: ACCESS1-0/1-3 use HadGEM2-A atmosphere (same as HadGEM2-AO) but results were unconfirmed in Stage 5. Use Stage 8 findings to retrospectively confirm or update the ACCESS aerosol treatment.

PRIMARY SOURCES:
- All HadGEM2 variants: Collins, W.J., et al. (2011). Development and evaluation of an Earth-System model – HadGEM2. *Geosci. Model Dev.* 4(4), 1051–1075. doi:10.5194/gmd-4-1051-2011 [collins_hadgem2_2011 *(add)*]
- HadGEM2-ES (CMIP5 implementation): Jones, C.D., et al. (2011). The HadGEM2-ES implementation of CMIP5 centennial simulations. *Geosci. Model Dev.* 4(3), 543–570. doi:10.5194/gmd-4-543-2011 [jones_hadgem2es_2011 — already in bib-to-add Stage 5 section]
- HadGEM2 aerosols/CLASSIC: Martin, G.M., et al. (2011). The HadGEM2 family of Met Office Unified Model climate configurations. *Geosci. Model Dev.* 4, 723–757. doi:10.5194/gmd-4-723-2011 [martin_hadgem2_2011 *(add)*]
- HadCM3 CMIP5: Gordon, C., et al. (2000). The simulation of SST, sea ice extents and ocean heat transports in a version of the Hadley Centre coupled model without flux adjustments. *Clim. Dyn.* 16, 147–168. doi:10.1007/s003820050010 + Johns, T.C., et al. (2003). HadCM3 forcing table. *Clim. Dyn.* 20, 583–612. doi:10.1007/s00382-002-0296-y [johns_hadcm3_2003 — already in bib-to-add Stage 8 CMIP3 section]
- ES-DOC simulation documents: https://explore.es-doc.org
- PCMDI CMIP5 documentation

FOR EACH of 12 forcings (+ESM inputs for HadGEM2-ES), for EACH model:
(a) Was it applied in `historical`?
(b) WHICH dataset/source — time-varying or fixed?
(c) Did it follow Taylor 2012 standard, deviate, or exceed?
(d) For HadGEM2-ES: N-dep dataset (Lamarque2010 or 2013 ACCMIP)? CO2 mode? Ocean biogeochemistry inputs?
(e) For HadGEM2-CC/ES: is UKCA ozone interactive (O=exc)?

Key questions:
1. HadCM3: Were GHG/ozone datasets updated to Meinshausen2011/Cionni2011 for CMIP5, or are CMIP3-era datasets carried over?
2. HadGEM2-AO aerosols: CLASSIC prescribed OD from Lamarque2010 (std) or interactive? Which aerosol species?
3. HadGEM2-CC/ES ozone: UKCA interactive confirmed (O=exc)? Which interactive chemistry scheme?
4. HadGEM2-ES LU: Hurtt2011 via TRIFFID (std) or excluded?
5. HadGEM2-ES N-deposition: Lamarque 2010 or 2013 ACCMIP?
6. Solar/volcanic (all HadGEM2): Wang2005/Sato-updated (std) or Solanki-Krivova 2003/other?
7. ACCESS cross-check: Does HadGEM2-AO aerosol treatment match or clarify the unresolved ACCESS1-0/1-3 aerosol findings from Stage 5?

Taylor 2012 standard protocol (baseline):
- G: Meinshausen et al. 2011 | O: Cionni et al. 2011 (w/o interactive chem) | SD/BC/OC/MD/SS: Lamarque 2010 | LU: Hurtt 2011 | SO: Wang 2005 | VL: Sato updated

DELIVERABLE: per forcing per model — verdict (std/dev/exc/?), temporal (TV/FXc/FXk), dataset + citation. Document HadGEM2-ES ESM-specific inputs separately (N-dep, CO2 mode, ocean biogeochemistry, BC-on-snow). Flag deviations from Taylor 2012. Adversarially verify key claims.

## After CMIP5 Stage 8: write results to model files, add 4 MOHC rows to verified-forcing-matrix.csv (rows 31–34), update README.md registry rows 31–34 and Stage 8 status, append refs to bib-to-add.md.

---

## [Stage 7 archived prompt below]

### Stage 7 prompt (archived):

Document the climate forcing datasets used in the four European CMIP5 models — MPI-ESM-LR, MPI-ESM-MR, MPI-ESM-P (MPI-M, Germany) and EC-EARTH (ICHEC/EC-EARTH Consortium, Europe) — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Part of a forcing review of 47 CMIP5 models against the Taylor et al. 2012 (*BAMS* doi:10.1175/BAMS-D-11-00094.1) standard protocol. This is the European continental group (German + pan-European consortium). In CMIP3, MPI-ECHAM5 had 3 confirmed conflicts (BC/OC/LU not applied despite Table S1 Y) — test whether corrected in CMIP5 MPI-ESM. EC-EARTH is a new entrant not in CMIP3.

PRIOR STAGE CONTEXT — important patterns to watch:
- CNRM/IPSL (Stage 6) deviated on aerosols + ozone by using centre-specific offline chemistry-derived fields rather than Lamarque2010-OD/Cionni2011 directly. Test whether MPI/EC-EARTH similarly use ECHAM-family aerosol schemes.
- CSIRO-Mk3.6.0 (Stage 5) and CESM1-CAM5 (Stage 3) EXCEEDED on aerosols (interactive schemes) — MPI-ESM uses ECHAM6 with HAM2 aerosol scheme, which is also interactive. Likely exceeds.
- GFDL-ESM (Stage 1): N-dep = Lamarque2013 ACCMIP; CESM1-BGC: N-dep = Lamarque2010. What does MPI-ESM use?
- CMIP3 MPI-ECHAM5 explicitly stated "only anthropogenic forcings" (no BC/OC/LU). Test whether MPI-ESM-LR/MR/P corrected this.

KEY ARCHITECTURE QUESTIONS:
- **MPI-ESM-LR, MPI-ESM-MR**: Full ESM with ECHAM6 atmosphere + MPIOM ocean + JSBACH land (active C cycle) + HAMOCC ocean biogeochemistry. ECHAM6 includes the HAM2 aerosol scheme (Hamburg Aerosol Module) — likely interactive, potentially exc on aerosols. Confirm ozone treatment (Cionni2011 prescribed or HAMMOZ/LABMOS interactive?). ESM-specific: N-dep dataset; CO2 mode; iron deposition for HAMOCC.
- **MPI-ESM-P**: "Paleo" configuration of MPI-ESM-LR — optimized for long-timescale simulations. Same atmosphere/ocean as LR; forcing protocol may be identical or slightly reduced (check if any forcing was simplified for paleo).
- **EC-EARTH**: IFS cy31r1 atmosphere (ECMWF operational model) + NEMO2 ocean + LIM2 sea ice. Key question: IFS-based models use a different atmospheric chemistry framework from ECHAM-family. Ozone prescribed from Cionni2011 (std) or different? Aerosols: OASIS scheme, prescribed OD, or interactive? Primary source: Hazeleger et al. 2012 (*BAMS* doi:10.1175/BAMS-D-11-00094.1) or Hazeleger et al. 2010 (*BAMS*).

PRIMARY SOURCES:
- MPI-ESM: Giorgetta, M.A., et al. (2013). Climate and carbon cycle changes from 1850 to 2100 in MPI-ESM simulations for the Coupled Model Intercomparison Project phase 5. *J. Adv. Model. Earth Syst.* 5(3), 572–597. doi:10.1002/jame.20038 [giorgetta_climate_2013 *(add)*]
- MPI-ESM ECHAM6 + HAM2: Stevens, B., et al. (2013). Atmospheric component of the MPI-M Earth System Model: ECHAM6. *J. Adv. Model. Earth Syst.* 5(2), 146–172. doi:10.1002/jame.20015
- EC-EARTH: Hazeleger, W., et al. (2012). EC-Earth V2.2: description and validation of a new seamless earth system prediction model. *Clim. Dyn.* 39(11), 2611–2629. doi:10.1007/s00382-011-1228-5
- ES-DOC simulation documents: https://explore.es-doc.org
- PCMDI CMIP5 documentation

FOR EACH of 12 forcings (+ESM-specific inputs for MPI-ESM), for EACH model:
(a) Was it applied in `historical`?
(b) WHICH dataset/source — time-varying or fixed?
(c) Did it follow Taylor 2012 standard, deviate, or exceed?
(d) For MPI-ESM: N-dep dataset and year? CO2 mode (concentration vs. emission-driven)? Iron deposition for HAMOCC? BC-on-snow?

Key questions:
1. MPI-ESM aerosols: HAM2 interactive (exc) or prescribed OD? ECHAM6 can run with or without HAM2.
2. MPI-ESM ozone: Cionni2011 (std) or LABMOS/HAMMOZ interactive (exc)? ECHAM6 supports both.
3. MPI-ESM LU, BC, OC: Were these corrected from CMIP3 ECHAM5 exclusion (where BC/OC/LU = not applied despite Table S1 Y)?
4. MPI-ESM N-deposition: Lamarque 2010 or 2013 ACCMIP?
5. MPI-ESM iron deposition to HAMOCC: which dataset?
6. MPI-ESM-P: same forcing as LR or simplified for paleo mode?
7. EC-EARTH aerosols and ozone: IFS-derived or prescribed standard datasets?
8. EC-EARTH solar and volcanic: Wang2005/Sato-updated (std) or different?

Taylor 2012 standard protocol (baseline):
- G: Meinshausen et al. 2011 | O: Cionni et al. 2011 (w/o interactive chem) | SD/BC/OC/MD/SS: Lamarque 2010 | LU: Hurtt 2011 | SO: Wang 2005 | VL: Sato updated

DELIVERABLE: per forcing per model — verdict (std/dev/exc/?), temporal (TV/FXc/FXk), dataset + citation. Document MPI-ESM ESM-specific inputs separately (N-dep, CO2 mode, iron, BC-on-snow). Flag deviations from Taylor 2012. Adversarially verify key claims.

## After CMIP5 Stage 7: write results to model files, add 4 MPI+EC-EARTH rows to verified-forcing-matrix.csv, update README.md registry rows 27-30 and Stage 7 status, append refs to bib-to-add.md.

---

## [Stage 6 preserved prompt archive below]

### Stage 6 prompt (archived):

Document the climate forcing datasets used in the five French CMIP5 models — CNRM-CM5, CNRM-CM5-2, IPSL-CM5A-LR, IPSL-CM5A-MR, and IPSL-CM5B-LR — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Part of a forcing review of 47 CMIP5 models against the Taylor et al. 2012 (*BAMS* doi:10.1175/BAMS-D-11-00094.1) standard protocol. CNRM (Centre National de Recherches Météorologiques) and IPSL (Institut Pierre-Simon Laplace) are the two French modelling groups. In CMIP3, both CNRM-CM3 and IPSL-CM4 had known forcing issues (confirmed Stage 6 CMIP3: CNRM had SI=✗ direct-only no-indirect, SO=✗ fixed-1370, VL=✗ no-volcanic; IPSL had SO=✗ fixed-1365, VL=✗ no-natural-forcings). Test whether these were corrected in CMIP5.

PRIOR STAGE CONTEXT — important patterns to watch:
- CSIRO-Mk3.6.0 (Stage 5) EXCEEDS on aerosols (interactive Rotstayn2010), explicitly EXCLUDES LU — check if French models also have unusual deviations.
- GISS (Stage 2) deviated on ozone (Shindell2003 not Cionni2011) — test French models carefully.
- CNRM-CM5-2 may have interactive chemistry (check if ozone is exc) — the "-2" suffix sometimes denotes an updated version with chemistry.
- IPSL-CM5B-LR uses a different physical parameterisation package from CM5A models (notably different boundary layer and convection schemes) — forcing may also differ.

KEY ARCHITECTURE QUESTIONS:
- **CNRM-CM5**: ARPEGE-Climate 5.2 atmosphere + NEMO3.2 ocean. Aerosols: prescribed OD (std) or interactive? Ozone: Cionni2011 (std) or MOCAGE interactive chemistry? VL/SO: corrected from CMIP3 fixed-solar/no-volcanic?
- **CNRM-CM5-2**: Updated version of CNRM-CM5 with interactive chemistry (MOCAGE). Expected to EXCEED on O and possibly aerosols. Confirm.
- **IPSL-CM5A-LR / MR**: LMDZ5A atmosphere + NEMO ocean + ORCHIDEE land. Aerosols: prescribed OD (std) or interactive (INCA chemistry)? LR and MR are resolution variants — forcing expected identical.
- **IPSL-CM5B-LR**: Different LMDZ5B atmosphere physics from CM5A. What changed in forcing?

PRIMARY SOURCES:
- CNRM-CM5: Voldoire, A., et al. (2013). The CNRM-CM5.1 global climate model: description and basic evaluation. *Clim. Dyn.* 40(9–10), 2091–2121. doi:10.1007/s00382-011-1259-y [voldoire_cnrm_2013 *(add)*]
- IPSL-CM5A: Dufresne, J.-L., et al. (2013). Climate change projections using the IPSL-CM5 Earth System Model: from CMIP3 to CMIP5. *Clim. Dyn.* 40(9–10), 2123–2165. doi:10.1007/s00382-012-1636-1 [dufresne_ipsl_2013 *(add)*]
- ES-DOC simulation documents: https://explore.es-doc.org
- PCMDI CMIP5 documentation

FOR EACH of 12 forcings, for EACH model:
(a) Was it applied in `historical`? (b) WHICH dataset/source — time-varying or fixed? (c) Did it follow Taylor 2012 standard, deviate, or exceed?

Key questions:
1. CNRM-CM5 aerosols: Prescribed OD from Lamarque2010 (std) or interactive INCA aerosols?
2. CNRM-CM5 ozone: Cionni2011 (std) or interactive MOCAGE chemistry (exc)?
3. CNRM-CM5-2: Is the chemistry upgrade (MOCAGE interactive) confirmed, and does it EXCEED on O and aerosols?
4. IPSL-CM5A-LR/MR: Aerosols — prescribed OD (std) or interactive INCA (exc)?
5. IPSL-CM5B-LR: Does the different physics scheme change the forcing protocol?
6. Solar and volcanic (all): Corrected from CMIP3 errors (fixed-solar, no-volcanic)? Wang2005 / Sato-updated?
7. LU (all): Hurtt2011 standard applied, or excluded (as CSIRO-Mk3.6.0)?

Taylor 2012 standard protocol (baseline):
- G: Meinshausen et al. 2011 | O: Cionni et al. 2011 (w/o interactive chem) | SD/BC/OC/MD/SS: Lamarque 2010 | LU: Hurtt 2011 | SO: Wang 2005 | VL: Sato updated

DELIVERABLE: per forcing per model — verdict (std/dev/exc/?), temporal (TV/FXc/FXk), dataset + citation. Flag deviations from Taylor 2012. Adversarially verify key claims.

## After CMIP5 Stage 6: write results to model files, add 5 CNRM/IPSL rows to verified-forcing-matrix.csv, update README.md registry rows 22-26 and Stage 6 status, append refs to bib-to-add.md.

---

## Archive: CMIP5 Stage 1 prompt (GFDL) — preserved for reference

Seed model files before launching:

Seed model files before launching:
- `research/cmip5/models/GFDL__gfdl_cm2p1.md`
- `research/cmip5/models/GFDL__gfdl_cm3.md`
- `research/cmip5/models/GFDL__gfdl_esm2g.md`
- `research/cmip5/models/GFDL__gfdl_esm2m.md`

Also create `research/cmip5/data/verified-forcing-matrix.csv` (header only) before Stage 1.

### Stage 1 prompt:

Document the climate forcing datasets used in the four GFDL CMIP5 models — GFDL-CM2p1, GFDL-CM3, GFDL-ESM2G, and GFDL-ESM2M — for their CMIP5 `historical` experiment (1850–2005).

CONTEXT: Continuation of a forcing review that completed CMIP3 for all 24 models. CMIP5 uses a more standardized protocol; the baseline is **Taylor et al. 2012** (*BAMS* doi:10.1175/BAMS-D-11-00094.1), which specifies recommended datasets for each forcing. Document whether each model followed the standard or deviated, with primary-source evidence.

IMPORTANT CMIP5 CONTEXT: This was the first generation of Earth System Models (ESMs), introducing active carbon cycles, interactive biogeochemistry, and atmospheric chemistry. Some models include additional forcing inputs to drive these new components that were absent in CMIP3. Pay close attention to:
- **Nitrogen deposition** (reactive N from Lamarque et al. 2010 emissions — drives ESM land/ocean biogeochemistry)
- **CO2 concentration vs. emissions** (ESMs may use prescribed CO2 concentrations OR prescribed emissions with interactive carbon cycle — document which)
- **Atmospheric chemistry inputs** (NOx, VOC, CO emissions from Lamarque 2010 — relevant to models with interactive chemistry)
- **Ocean biogeochemistry forcing** (nutrient inputs, iron deposition — some ESMs include these)
- **Black carbon on snow/ice** (additional aerosol-cryosphere forcing pathway, not just direct/indirect)

PRIMARY SOURCES:
- GFDL-CM2p1: Delworth et al. 2006 (doi:10.1175/JCLI3629.1); note CM2p1 is essentially the CMIP3 CM2.1 rerun under CMIP5 protocol — check what changed in forcing
- GFDL-CM3: Donner et al. 2011 (*J. Climate* doi:10.1175/2011JCLI3955.1); Levy et al. 2013 (aerosol forcing in CM3)
- GFDL-ESM2G and ESM2M: Dunne et al. 2012 (*J. Climate* doi:10.1175/JCLI-D-11-00560.1); ESMs have active ocean/land biogeochemistry — document any additional forcing datasets for the ESM components
- ES-DOC simulation documents: https://explore.es-doc.org (search by model name + historical experiment)
- PCMDI/CMIP5 model documentation pages may still exist for some GFDL models

FOR EACH of 12 forcings (+ESM-specific inputs), for EACH model:
(a) Was it applied in `historical`?
(b) WHICH dataset/source — time-varying or fixed? Fixed values WITH UNITS.
(c) Did the model follow the Taylor 2012 standard protocol, or use a different dataset?
(d) For ESMs (ESM2G, ESM2M): what additional forcing datasets drove the ESM components (carbon cycle, biogeochemistry)?

Taylor 2012 standard protocol (baseline claims to test):
- G: Meinshausen et al. 2011 GHG concentrations
- O: Cionni et al. 2011 (for models without interactive chemistry)
- SD/BC/OC: Lamarque et al. 2010 emissions (or prescribed OD from same)
- LU: Hurtt et al. 2011 land-use transitions
- SO: Wang et al. 2005 solar reconstruction
- VL: Sato et al. 1993 updated

Key questions:
- GFDL-CM2p1: Is forcing identical to CMIP3 CM2.1, or updated to use Meinshausen/Cionni/Hurtt/Wang 2005? Document what changed.
- GFDL-CM3: First GFDL model with interactive aerosols and atmospheric chemistry — confirm which aerosol species are interactive vs. prescribed; confirm ozone treatment (interactive or Cionni 2011?)
- GFDL-ESM2G vs ESM2M: Both use TOPAZ ocean biogeochemistry — what additional nutrient/iron/deposition datasets were applied? Do they use CO2 concentrations (concentration-driven) or emissions (emission-driven)?
- All models: Solar = Wang 2005 standard? Volcanic = Sato updated?

DELIVERABLE: per forcing per model — verdict (follows standard / deviates / exceeds standard), temporal treatment (TV/FXc/FXk with units), dataset source + citation. Note ESM-specific additional inputs separately. Flag any deviations from Taylor 2012.

## After Stage 1 (CMIP5): write results to model files, add rows to verified-forcing-matrix.csv, update README.md registry rows 1-4 and Stage 1 status, append refs to bib-to-add.md.

## Remaining queue (CMIP3 first pass)
10 BCCR+IAP+INM — NEXT
Then synthesis + summary of all 24 models.
Then later passes: CMIP5 lineage, CMIP6/input4MIPs.
