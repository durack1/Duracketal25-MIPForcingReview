# cccma_cgcm3_1_t47 — CCCma (Canadian Centre for Climate Modelling and Analysis, Canada)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** CGCM3.1 → CGCM4 (partial) → CanESM2 (CMIP5) → CanESM5 (CMIP6). T47 = spectral T47 resolution; T63 is same model at higher T63 resolution.
- **Primary documentation paper(s):** Scinocca et al. 2008 (*ACP* 8, 7055–7074, doi:10.5194/acp-8-7055-2008) — AGCM3 atmospheric component; Flato & Boer 2001 (*Clim. Dyn.*) — CGCM3 coupled model *(not successfully read — needed for SO/VL/FC)*; Kim et al. 2002 *(not located)*
- **Forcing-specific reference(s):** O. Boucher, Laboratoire d'Optique Atmosphérique (LOA), France — sulphate column burden dataset (WDC-Climate metadata); Boucher & Anderson 1995 (*JGR* 100, 26117–26134) — sulphate methodology; Shettle & Fenn 1979 — fixed background aerosol distributions; Wang et al. 1995 (SUNYA) — fixed ozone climatology
- **Note:** T47 and T63 share **identical forcing treatment**, confirmed by word-for-word matching WDC-Climate run metadata.

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | "GHG concentrations are prescribed following observations and match the IPCC SRES concentrations at year 1990" (WDC-Climate metadata); CO2, CH4, N2O, CFC-11, CFC-12 in AGCM3 radiation | WDC-Climate CGCM3.1_T47_20C3M_1; Scinocca et al. 2008 §2.8 | scinocca_technical_2008 | Exact upstream GHG dataset (e.g. Keeling/Neftel) not named in metadata |
| O  | Ozone (tropo + strato) | - | ✓ supports | FX-clim | SUNYA ozone climatology (Wang et al. 1995): "12 monthly mean, zonal mean, fields interpolated to model timestep" — fixed repeated-annual-cycle, NOT time-varying | Scinocca et al. 2008 | scinocca_technical_2008 | Ozone is present in AGCM3 radiation but non-evolving; Table S1 "-" is consistent with FX-clim (not a transient forcing). Caveat: Scinocca 2008 documents present-day mode; 20C3M-specific statement not found |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | "Direct aerosol forcing is incorporated via a change in surface albedo which is proportional to the prescribed, time-evolving column burden of sulphate aerosols obtained from O. Boucher, Laboratoire d'Optique Atmosphérique, France" (WDC-Climate metadata) | WDC-Climate metadata; Boucher & Anderson 1995 (*JGR* 100, 26117–26134) | boucher_anderson_1995 | Implemented as surface-albedo proxy — not via atmospheric optical depth. Boucher LOA dataset (same provider as GISS-AOM; distinct mechanism) |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | No time-varying aerosol indirect effect applied; AGCM3 uses fixed background aerosol for radiative transfer (Shettle & Fenn 1979) | Scinocca et al. 2008 | scinocca_technical_2008 | Fixed background inconsistent with indirect-effect forcing; Table S1 "-" consistent |
| BC | Black carbon | - | ✓ supports | FX-const | AGCM3 uses FIXED background aerosol (Shettle & Fenn 1979); continental soot column: **0.2 mg m⁻²** — static, not time-varying | Scinocca et al. 2008 | scinocca_technical_2008 | Fixed scalar (soot component of Shettle & Fenn background); Table S1 "-" correct |
| OC | Organic carbon | - | ✓ supports | FX-const | AGCM3 fixed background (Shettle & Fenn 1979); water-soluble component encompasses OC; continental: **2.55 mg m⁻²**, maritime: **0.263 mg m⁻²** — static | Scinocca et al. 2008 | scinocca_technical_2008 | No time-varying OC forcing; Table S1 "-" correct |
| MD | Mineral dust | - | ✓ supports | FX-const | AGCM3 fixed background (Shettle & Fenn 1979); dust-like component: continental **57.71 mg m⁻²** — static | Scinocca et al. 2008 | scinocca_technical_2008 | No time-varying dust forcing; Table S1 "-" correct |
| SS | Sea salt | - | ✓ supports | FX-const | AGCM3 fixed background (Shettle & Fenn 1979); oceanic component: **18.82 mg m⁻²** — static | Scinocca et al. 2008 | scinocca_technical_2008 | No time-varying sea-salt forcing; Table S1 "-" correct |
| LU | Land-use change | - | ~ unclear | ? | Not documented in any located source; Table S1 "-" unverified | — | — | Needs Flato & Boer 2001 or Kim et al. 2002 |
| SO | Solar irradiance | - | ~ unclear | ? | Not documented in WDC-Climate metadata or Scinocca et al. 2008; SO=- is unusual for a 20C3M run and requires Flato & Boer 2001 to confirm or refute | — | — | Silence in metadata ≠ confirmation of absence |
| VL | Volcanic aerosols | - | ~ unclear | ? | Not documented in any located source; VL=- is unusual for a 20C3M run and requires Flato & Boer 2001 or Kim et al. 2002 | — | — | If confirmed absent, this is a rare and notable omission (contrast GFDL, GISS, NCAR — all VL=Y) |
| FC | Flux corrections (F/H) | F,H | ~ unclear | ? | Not documented in any located source; FC=F,H (both freshwater and heat corrections) requires Flato & Boer 2001 for confirmation and values/units | — | — | If confirmed, CCCma CGCM3.1 is one of the few CMIP3 models using flux corrections |

### Table S1 conflicts found
- **None confirmed.** G=Y and SD=Y are directly supported. O=-, BC=-, OC=-, MD=-, SS=- are all consistent with AGCM3's fixed-field treatment (FX-clim ozone; FX-const Shettle & Fenn aerosol background).
- **Unresolved**: SO=-, VL=-, FC=F,H — neither confirmed nor refuted; primary source (Flato & Boer 2001) not successfully accessed.

### Open questions (Stage 4 residual)
1. **SO=- and VL=-**: Did CCCma CGCM3.1 truly omit solar and volcanic forcing in the 20C3M run? This would be highly unusual (all other CMIP3 models reviewed include these). Requires Flato & Boer 2001.
2. **FC=F,H**: What are the flux correction values/fields and their units?
3. **GHG dataset**: Exact upstream source time series (metadata says "following observations, SRES-consistent at 1990" but doesn't name the dataset).
4. **Ozone in 20C3M**: Was the 20C3M run definitely using the fixed SUNYA climatology, or was a transient ozone field applied? Scinocca 2008 documents only present-day mode.

## Provenance
- Table S1 row: G Y · O - · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO - · VL - · FC F,H
- Primary sources consulted: WDC-Climate run metadata (CGCM3.1_T47_20C3M_1, CGCM3.1_T63_20C3M_1 — word-for-word identical for T47 and T63); Scinocca et al. 2008 (doi:10.5194/acp-8-7055-2008 — AGCM3 atmospheric component); PCMDI CMIP3 index (redirects to legacy CCCma URL); Boer et al. 2000 (refuted — describes different older transient simulation, not CGCM3.1)
- Stage 4 adversarial workflow: 12/14 claims confirmed (1-0); 2 killed (0-1 — Boer 2000 claims, wrong model version); Flato & Boer 2001 / Kim et al. 2002 not successfully accessed
