# MIP Forcing Review — CMIP3 workspace

First phase of the MIP Forcing Review, documenting the **climate forcing datasets** used in CMIP3 `20C3M` simulations (1850–1999/2000) across **24 models** from Durack & Wijffels (2012) *J. Geophys. Res.* Table S1. Continued in [`../cmip5/README.md`](../cmip5/README.md).

## What defines the CMIP3 baseline

In CMIP3 there is no formal standard forcing protocol document equivalent to Taylor et al. 2012 (CMIP5) or Eyring et al. 2016 (CMIP6). Instead:

1. **The baseline is Table S1 of Durack & Wijffels (2012)** (*JGR* 117, doi:10.1029/2012JC007911) — a binary Y/− matrix coding which forcing agents were applied by each model. This is a **secondary compilation**, not drawn from primary model documentation; errors in Table S1 are an explicit focus of this review.
2. **Primary documentation is the PCMDI model documentation archive** — static HTML pages and downloadable PDFs hosted at `pcmdi.llnl.gov/ipcc/model_documentation/`. Section II = atmospheric physics (aerosol and ozone schemes); Section V = 20C3M run protocol (datasets used). These are the authoritative primary sources.
3. **No standard datasets were mandated across centres.** Each modelling group independently chose its GHG concentration series, ozone climatology, aerosol fields, solar reconstruction, and volcanic dataset. Dataset choice is confirmed only from PCMDI pages and model description papers.
4. **The 20C3M experiment is a transient simulation from ~1850 to 1999/2000** using best-estimate observed external forcings. Run protocols, number of ensemble members, and forcing start dates differ across centres.
5. **Flux corrections are a CMIP3-era feature.** Several older models (BCCR, CNRM, MIUB) applied heat and/or freshwater flux adjustments as anti-drift corrections. These are documented under the `FC` key.

## CMIP3 20C3M forcing keys

| Key | Forcing | Context |
|-----|---------|---------|
| G  | Well-mixed GHGs (CO₂, CH₄, N₂O, CFCs/HFCs) | Typically IPCC TAR or SAR concentration series |
| O  | Ozone (tropospheric + stratospheric) | Wide range: fully absent, fixed climatology, or time-varying |
| SD | Sulphate aerosol — direct radiative effect | Penner 1994 / Boucher & Pham 2002 / Jones 2001 most common |
| SI | Sulphate aerosol — indirect (cloud albedo) effect | Rare in CMIP3; most models SD-only |
| BC | Black carbon aerosol | Often absent or fixed |
| OC | Organic carbon aerosol | Often absent or fixed |
| MD | Mineral dust aerosol | Almost universally absent or fixed |
| SS | Sea salt aerosol | Absent, fixed, or interactive (wind-driven) |
| LU | Land-use / land-cover change | Applied by a minority; HYDE (Goldewijk 2001) most common |
| SO | Solar irradiance (TSI) | Lean 1995 / Solanki & Krivova 2003; many models used fixed constant |
| VL | Volcanic stratospheric aerosols | Sato et al. 1993 / Ammann et al. 2003; majority absent |
| FC | Flux corrections (heat / freshwater) | Applied as model stabilisation; not a transient anthropogenic forcing |

**Temporal coding:** TV (time-varying dataset) · FXc (fixed seasonal climatology) · FXk (fixed scalar constant) · na (not applied) · ? (unverified)  
**Conflict marker:** trailing `*` = verified conflict with Table S1

## Layout

```
cmip3/
├── README.md               ← this file
├── cmip3-forcing-synthesis.html   ← visual synthesis (self-contained; open in browser)
├── data/
│   ├── cmip3-tableS1-forcing-matrix.csv   ← Table S1 as-published binary matrix
│   └── verified-forcing-matrix.csv        ← primary-source verified coding (source of truth)
└── models/
    └── <CENTER>__<model_id>.md            ← one file per model (24 total)
```

## Model registry

| # | model_id | Centre, country | Stage | Status | Notes |
|---|----------|-----------------|-------|--------|-------|
| 1  | gfdl_cm2_0          | GFDL, USA              | 1  | ☑ | G/O/SD/SO/VL confirmed; BC/OC/LU absent (not in 20C3M list) |
| 2  | gfdl_cm2_1          | GFDL, USA              | 1  | ☑ | Identical 20C3M forcing protocol to CM2.0 |
| 3  | giss_aom            | GISS, USA              | 2  | ☑ | G=TV(GHGA1B.LP) confirmed; SS=FXc uncertain; OC/MD absent |
| 4  | giss_model_e_h      | GISS, USA              | 2  | ☑ | MD/SS=FXc (not TV); confirmed Table S1 MD/SS=Y errors |
| 5  | giss_model_e_r      | GISS, USA              | 2  | ☑ | Identical atmospheric forcing to ModelE-H; R=Russell1995 ocean only |
| 6  | ncar_ccsm3_0        | NCAR, USA              | 3  | ☑ | Fully resolved from Meehl 2006 §2a: G/O/SD/BC/SO/VL=TV; MD/SS/LU=FXk; OC=? |
| 7  | ncar_pcm1           | NCAR, USA              | 3  | ☑ | Minimal aerosol forcing; SO/VL confirmed |
| 8  | cccma_cgcm3_1_t47   | CCCma, Canada          | 4  | ☑ | Standard CMIP3 GHG protocol; SO/VL confirmed |
| 9  | cccma_cgcm3_1_t63   | CCCma, Canada          | 4  | ☑ | Identical forcing to T47; higher-res dynamics only |
| 10 | csiro_mk3_0         | CSIRO, Australia       | 5  | ☑ | SD=FXc (Penner 1994 seasonal clim; not TV); SO=na (confirmed absent) |
| 11 | csiro_mk3_5         | CSIRO, Australia       | 5  | ☑ | Identical 20C3M forcing to Mk3.0 |
| 12 | cnrm_cm3            | CNRM, France           | 6  | ☑ | SO/VL=na (confirmed absent); O=FXc (Cariolle–Déqué 1986 linearised param) |
| 13 | ipsl_cm4            | IPSL, France           | 6  | ☑ | SO/VL/O=na (all confirmed absent); **3 confirmed Table S1 errors** (SO=Y, VL=Y, O=Y all wrong) |
| 14 | mpi_echam5          | MPI-M, Germany         | 7  | ☑ | BC/OC/LU not in 20C3M forcing; **Table S1 BC/OC/LU=Y all wrong** |
| 15 | ingv_echam4         | INGV, Italy            | 7  | ☑ | O=FXc (ECHAM4 band absorber — not TV); SO/VL=na |
| 16 | miub_echo_g         | MIUB, Germany/Korea    | 7  | ☑ | O=FXc (as ECHAM4); FC=heat+water (Table S1 FC=H underspecified) |
| 17 | ukmo_hadcm3         | UKMO, UK               | 8  | ☑ | SO=TV(Lean1995); VL=TV(Sato1993); standard CMIP3 forcings |
| 18 | ukmo_hadgem1        | UKMO, UK               | 8  | ☑ | SS=TV(interactive wind-speed); LU=TV*(confirmed Table S1 LU=- error); MD=na*(confirmed Table S1 MD=Y error) |
| 19 | miroc3_2_hires      | MIROC, Japan           | 9  | ☑ | SPRINTARS aerosols (interactive); SO/VL confirmed |
| 20 | miroc3_2_medres     | MIROC, Japan           | 9  | ☑ | Identical forcing to hires; medres dynamics only |
| 21 | mri_cgcm2_3_2a      | MRI, Japan             | 9  | ☑ | O=na* (strong conflict; PCMDI "atmospheric chemistry: Not included" vs Table S1 O=Y) |
| 22 | bccr_bcm2.0         | BCCR, Norway           | 10 | ☑ | SD=TV(Boucher & Pham 2002); SO/VL=na (fixed 1368 W m⁻²; confirmed absent) |
| 23 | iap_fgoals1_0       | IAP, China             | 10 | ☑ | SO=na (fixed 1367 W m⁻²); VL=na; exhaustive PCMDI 20C3M list confirms both absent |
| 24 | inmcm3_0            | INM, Russia            | 10 | ☑ | VL=TV(pcm_volcanic_1890-2000_T42.nc); FC=FXc(water-only, GIN/Barents/Kara seas) |

Legend: ☐ not started · ◐ in progress · ☑ complete

## Staging plan

| Stage | Centre(s) | Models | Status |
|-------|-----------|--------|--------|
| 1  | GFDL (USA)                       | CM2.0, CM2.1                       | ☑ complete — GHG/ozone/aerosol/SO/VL documented; BC/OC/LU absent from 20C3M |
| 2  | GISS (USA)                       | AOM, ModelE-H, ModelE-R            | ☑ complete — ModelE-H/R MD/SS=FXc (Table S1 errors); AOM G=TV confirmed |
| 3  | NCAR (USA)                       | CCSM3, PCM1                        | ☑ complete — CCSM3 fully resolved (Meehl 2006 §2a); all 12 cells documented |
| 4  | CCCma (Canada)                   | CGCM3.1 T47, CGCM3.1 T63          | ☑ complete — T47/T63 identical forcing; standard Canadian CMIP3 protocol |
| 5  | CSIRO (Australia)                | Mk3.0, Mk3.5                       | ☑ complete — SD=FXc clarified (Penner 1994 seasonal clim); SO=na confirmed |
| 6  | CNRM + IPSL (France)             | CNRM-CM3, IPSL-CM4                 | ☑ complete — both absent natural forcings; IPSL has 3 confirmed Table S1 errors |
| 7  | MPI + INGV + MIUB (Germany/Italy/Korea) | MPI-ECHAM5, INGV-ECHAM4, MIUB ECHO-G | ☑ complete — MPI BC/OC/LU absent; ECHAM4-lineage O=FXc (not TV) |
| 8  | UKMO (UK)                        | HadCM3, HadGEM1                    | ☑ complete — HadGEM1 MD/LU conflicts confirmed; HadGEM1 SS=TV(interactive) |
| 9  | MIROC + MRI (Japan)              | MIROC3.2 hires/medres, MRI CGCM2.3.2a | ☑ complete — MIROC SPRINTARS confirmed; MRI O=na* (strong conflict vs Table S1) |
| 10 | BCCR + IAP + INM (Norway/China/Russia) | BCCR BCM2.0, IAP FGOALS1.0, INM-CM3.0 | ☑ complete — all resolved; BCCR SD=Boucher&Pham 2002; IAP SO/VL=na; INM VL/FC documented |

## Confirmed errors in Table S1 (≥22)

Table S1 is a secondary compilation and contains systematic errors. These have been confirmed from PCMDI primary sources:

### Systematic errors (affect multiple models)
- **SO/VL=Y wrong for CNRM, IPSL, INGV, MPI**: All coded Y; none of these models applied time-varying natural forcings in their 20C3M runs. Confirmed from PCMDI verbatim forcing lists.
- **O=Y wrong for INGV-SXG, MIUB ECHO-G**: Both use the ECHAM4 fixed spectral band absorber — a FX climatology, not a time-varying prescribed dataset. O=Y implies TV; the actual treatment is FXc.

### Model-specific errors
- **GISS ModelE-H/R MD=Y and SS=Y**: Both are FXc (fixed monthly climatology), not time-varying. Table S1 Y implies TV.
- **MPI-ECHAM5 BC=Y, OC=Y, LU=Y**: All three absent from the 20C3M forcing list; only GHG + sulphate + volcanic applied. Three simultaneous Table S1 errors.
- **MIUB ECHO-G SI=−**: Indirect aerosol effect IS applied; Table S1 SI=− is wrong.
- **MIUB ECHO-G FC=H**: Heat AND freshwater flux corrections applied; Table S1 FC=H is incomplete.
- **HadGEM1 MD=Y**: Mineral dust absent from HadGEM1 CLASSIC aerosol scheme (added only in HadGEM2/HiGEM era). Table S1 MD=Y is wrong.
- **HadGEM1 LU=−**: Goldewijk (2001) HYDE land-use confirmed in Run 1 (PCMDI PDF §V verbatim). Table S1 LU=− is a confirmed error.
- **MRI CGCM2.3.2a O=Y**: PCMDI PDF §II.A "atmospheric chemistry: Not included"; absent from four-agent forcing list. Strong candidate error (definitive confirmation needs Yukimoto 2001 §radiation).
- **IPSL-CM4 O=Y**: PCMDI PDF §V.C "All other variables are kept constant. There are no natural forcings." Fixed ozone — Table S1 O=Y is wrong (third IPSL error alongside SO=Y and VL=Y).

## Cross-cutting findings (Stage 10 — BCCR + IAP + INM)

- **BCCR BCM2.0 SD=TV (Boucher & Pham 2002)**: PCMDI PDF §II.C verbatim names the dataset explicitly: "Sulfate aerosols are specified in all experiments according to Boucher and Pham (2002) data." This overturned an earlier adversarial refutation based on the (uninformative) PCMDI HTML page. The PCMDI PDF §II.C is the authoritative source. Time-varying 1850–2000 sulfate burden.
- **BCCR SO/VL=na confirmed**: PCMDI §V.C verbatim: "Solar forcing was set at 1368 W/m2 and no solar or volcanic variability were included." Both SO=− and VL=− confirmed in a single quote.
- **BCCR urban aerosols (BC/OC proxy)**: PCMDI PDF §II.C notes "Urban aerosols vary according to estimates between 1850 and 2000" alongside the sulfate dataset. This implies a time-varying BC/OC-like component embedded in the sulphate forcing — not captured in Table S1 BC/OC=−.
- **IAP FGOALS SO/VL=na**: PCMDI PDF §V.A gives fixed solar constant 1367 W m⁻²; §V.C exhaustive 20C3M forcing list (GHG + ozone + sulphate only) confirms both solar variability and volcanic aerosols absent. High confidence.
- **INM-CM3.0 VL=TV**: PCMDI PDF §V.1 names `pcm_volcanic_1890-2000_T42.nc` with linear interpolation in time. Explicit file and method named — high confidence.
- **INM-CM3.0 FC=FXc**: PCMDI PDF §IV.E.4 documents annual-mean freshwater flux correction applied in the GIN/Barents/Kara seas only; heat and momentum not corrected. Table S1 has no FC column for INM.

## Cross-cutting findings (Stage 9 — MIROC + MRI)

- **MIROC3.2 hires/medres: SPRINTARS interactive aerosols**: Both models use SPRINTARS (Spectral Radiation-Transport Model for Aerosol Species) — a fully interactive online aerosol module computing sulphate, BC, OC, mineral dust, and sea salt from precursor emissions. All six aerosol keys = exc/TV. This CMIP3-era interactive aerosol scheme continued into CMIP5 MIROC-ESM.
- **MRI CGCM2.3.2a O=Y strong candidate error**: PCMDI PDF §II.A states "atmospheric chemistry: Not included." The four-agent 20C3M forcing list (GHG, sulphate, volcanic, solar) excludes ozone entirely. Table S1 O=Y is a strong candidate error; definitive resolution requires Yukimoto 2001 §radiation section.

## Cross-cutting findings (Stage 8 — UKMO: HadCM3, HadGEM1)

- **HadGEM1 CLASSIC aerosol scheme**: HadGEM1 introduced the CLASSIC multi-species aerosol scheme covering sulphate, sea salt, fossil-fuel BC, biomass-burning, and mineral dust. **Mineral dust was absent** — added only in HadGEM2/HiGEM era. Table S1 MD=Y is a confirmed error.
- **HadGEM1 sea salt is fully interactive (TV)**: Sea salt number concentration diagnosed in two size modes from wind speed and height above surface (Jones et al. 2001; Roberts & Jones 2004). Confirmed from Martin et al. 2006 §2b, Table 3. Table S1 SS=Y is correct.
- **HadGEM1 LU=− is a confirmed error**: PCMDI PDF §V Run 1 verbatim: "Land use changes following Goldewijk (2001)." HYDE land-use dataset explicitly applied in the anthropogenic forcing run. Table S1 LU=− is wrong.
- **HadGEM1 Run 1 vs Run 2 design**: Run 1 = anthropogenic forcings only (GHG + aerosols + ozone + LU); Run 2 = Run 1 + natural forcings (solar via Solanki & Krivova 2003 + volcanic via Sato et al. 1993 updated).
- **HadCM3 solar uses Lean 1995 (Maunder-to-modern +2.95 W m⁻²)**: Different reconstruction from HadGEM1 (Solanki & Krivova 2003, +2.73 W m⁻²) and HadGEM2 (Wang 2005, +1.11 W m⁻²). Jones et al. 2011 Fig. 13 documents this inter-generation solar forcing evolution.

## Cross-cutting findings (Stage 7 — MPI + INGV + MIUB)

- **MPI-ECHAM5: BC, OC, and LU absent from 20C3M forcing**: Only GHG + sulphate + volcanic applied. Three simultaneous Table S1 errors (BC=Y, OC=Y, LU=Y all wrong). This is analogous to the CMIP3 SO/VL error pattern — secondary compilation errors on multiple forcing agents simultaneously.
- **ECHAM4 lineage: O=FXc (not TV)**: Both INGV-SXG and MIUB ECHO-G are built on ECHAM4, which uses a fixed spectral band absorber for ozone — a monthly climatology, not a time-varying dataset. Table S1 O=Y for these models implies TV; the actual treatment is FXc. This pattern extends across all ECHAM4-derived models.
- **MIUB ECHO-G FC applies both heat and freshwater corrections**: Table S1 FC=H (heat only) is incomplete — freshwater corrections also applied. MIUB ECHO-G also applies indirect aerosol effect (SI) despite Table S1 SI=−.
- **MPI sulphate scheme**: Interactive sulfur chemistry driven by SO₂ emissions; time-varying sulphate burden (TV). No BC, OC, mineral dust, or sea salt separate forcings.

## Cross-cutting findings (Stage 6 — CNRM + IPSL)

- **Both French CMIP3 models omit natural forcings (SO/VL)**: CNRM-CM3 and IPSL-CM4 both applied no time-varying solar irradiance or volcanic aerosol forcing. Both used fixed solar constants (CNRM: 1370 W m⁻², IPSL: 1365 W m⁻²). Table S1 SO=Y and VL=Y for both models are confirmed errors.
- **IPSL-CM4: three confirmed Table S1 errors (SO=Y, VL=Y, O=Y)**: PCMDI PDF §V.C closes with "All other variables are kept constant. There are no natural forcings." This single quote confirms all three are wrong. Ozone is held at a fixed climatological value — O=FXc, not TV.
- **CNRM-CM3 O=FXc (Cariolle–Déqué 1986)**: Linearised ozone parameterisation using a fixed reference climatology — not a prescribed time-varying dataset. Table S1 O=- is consistent (no transient ozone applied). Salas-Mélia et al. 2005 §2.1 confirms.

## Cross-cutting findings (Stage 5 — CSIRO)

- **CSIRO Mk3.0/3.5 SD=FXc (not TV)**: "Monthly mean sulfate (Penner 1994)" = a fixed seasonal climatology derived from a single-year emissions inventory. Not time-varying. Table S1 SD=Y implies TV; confirmed FXc. Both Mk3.0 and Mk3.5 used identical forcings.
- **CSIRO Mk3.0/3.5 SO=na**: No solar variability documented in any primary source (Gordon 2002 silent; PCMDI doc blank; Phipps 2011 Mk3L = fixed 1365 W m⁻²). Table S1 SO=− is confirmed correct by absence at medium-high confidence.

## Cross-cutting findings (Stage 3 — NCAR)

- **NCAR CCSM3 fully resolved from Meehl et al. 2006 §2a** (doi:10.1175/JCLI3746.1): G=TV (ISAM CO₂ + Dai 2001 halocarbons); O=TV (MOZART tropospheric + NOAA Kiehl 1999 stratospheric); SD=TV (prognostic sulfur cycle; Smith 2001/2004 SO₂ emissions); BC=TV (population-scaled time-evolving); MD/SS=FXk (year-2000 values throughout); LU=FXk (present-day land cover); SO=TV (Lean 1995); VL=TV (Ammann 2003). OC treatment not explicit in Meehl 2006 — still open.
- **NCAR PCM1**: Simpler aerosol scheme than CCSM3; fewer forcing agents applied; SO/VL documented.

## Cross-cutting findings (Stage 2 — GISS)

- **GISS ModelE-H/R MD/SS = FXc (Table S1 errors)**: Both MD and SS were applied as fixed monthly climatologies, not time-varying datasets. Table S1 MD=Y and SS=Y are wrong — the models did not use time-varying mineral dust or sea salt in 20C3M.
- **GISS AOM uses identical atmospheric forcing to ModelE-H/R**: G=TV(GHGA1B.LP confirmed from PCMDI PDF §V 20C3M). SS treatment uncertain.
- **H vs R is ocean model only**: GISS ModelE-H uses HYCOM ocean; ModelE-R uses Russell 1995 ocean. Atmospheric forcing identical.

## Status — first + second pass complete (2026-06-28)

**First pass (Stages 1–10):** ALL COMPLETE ✓  
**Second pass (targeted PCMDI PDF reads + Meehl 2006):** ALL COMPLETE ✓  
**File sync (HTML + CSV + model .md files):** COMPLETE (2026-06-28) ✓  

All three file types are consistent. Treat `cmip3-forcing-synthesis.html` as the visual source of truth; `data/verified-forcing-matrix.csv` as the machine-readable record; model `.md` files as the per-model primary evidence trail.

### Residual open items (5)

| Model | Cell | Status / what's needed |
|-------|------|------------------------|
| CSIRO Mk3.0/3.5 | O=Y | TV capability exists in ARPEGE-based atmosphere; 20C3M-specific treatment undocumented in PCMDI PDF. Likely TV but unconfirmed. |
| UKMO HadCM3 | VL=Y | Likely correct (Sato 1993 applied in CMIP3 UKMO runs) but not explicitly confirmed for the 20C3M archived submission. |
| MRI CGCM2.3.2a | O=Y* | Strong conflict confirmed (PCMDI PDF); definitive resolution needs Yukimoto 2001 §radiation section. |
| GISS AOM | SS=Y | Sea salt not named as distinct forcing agent in PCMDI PDF; unclear whether applied as separate diagnostic or subsumed into sulphate aerosol scheme. |
| NCAR CCSM3 | OC=? | Likely TV alongside BC (Collins 2006b J. Climate 19:2144 would confirm); Meehl 2006 makes BC TV but does not explicitly mention OC. |
