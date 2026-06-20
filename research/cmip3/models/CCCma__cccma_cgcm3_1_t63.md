# cccma_cgcm3_1_t63 — CCCma (Canadian Centre for Climate Modelling and Analysis, Canada)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** CGCM3.1 → CGCM4 (partial) → CanESM2 (CMIP5) → CanESM5 (CMIP6). T63 = spectral T63 resolution; T47 is same model at lower T47 resolution.
- **Primary documentation paper(s):** Scinocca et al. 2008 (*ACP* 8, 7055–7074, doi:10.5194/acp-8-7055-2008) — AGCM3 atmospheric component; Flato & Boer 2001 (*Clim. Dyn.*) — CGCM3 coupled model *(not successfully read — needed for SO/VL/FC)*; Kim et al. 2002 *(not located)*
- **Forcing-specific reference(s):** O. Boucher, Laboratoire d'Optique Atmosphérique (LOA), France — sulphate column burden dataset; Boucher & Anderson 1995 (*JGR* 100, 26117–26134); Shettle & Fenn 1979 — fixed background aerosol; Wang et al. 1995 (SUNYA) — fixed ozone climatology
- **Note:** T63 and T47 share **identical forcing treatment**, confirmed by word-for-word matching WDC-Climate run metadata. See `CCCma__cccma_cgcm3_1_t47.md` for full provenance; this file records the identical findings for completeness.

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | "GHG concentrations are prescribed following observations and match the IPCC SRES concentrations at year 1990"; CO2, CH4, N2O, CFC-11, CFC-12 in AGCM3 radiation | WDC-Climate CGCM3.1_T63_20C3M_1; Scinocca et al. 2008 §2.8 | scinocca_technical_2008 | Identical to T47 |
| O  | Ozone (tropo + strato) | - | ✓ supports | FX-clim | SUNYA ozone climatology (Wang et al. 1995): 12 monthly-mean, zonal-mean fields, repeated annual cycle — fixed, NOT time-varying | Scinocca et al. 2008 | scinocca_technical_2008 | Identical to T47; FX-clim consistent with Table S1 "-" |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Surface-albedo change proportional to time-evolving sulphate column burden from O. Boucher, LOA France | WDC-Climate CGCM3.1_T63_20C3M_1; Boucher & Anderson 1995 (*JGR* 100, 26117–26134) | boucher_anderson_1995 | Identical to T47; surface-albedo proxy implementation |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | No indirect aerosol effect; AGCM3 uses fixed background aerosol | Scinocca et al. 2008 | scinocca_technical_2008 | Identical to T47 |
| BC | Black carbon | - | ✓ supports | FX-const | Fixed Shettle & Fenn 1979 background; continental soot: **0.2 mg m⁻²** | Scinocca et al. 2008 | scinocca_technical_2008 | Identical to T47 |
| OC | Organic carbon | - | ✓ supports | FX-const | Fixed Shettle & Fenn 1979 background; water-soluble: continental **2.55 mg m⁻²**, maritime **0.263 mg m⁻²** | Scinocca et al. 2008 | scinocca_technical_2008 | Identical to T47 |
| MD | Mineral dust | - | ✓ supports | FX-const | Fixed Shettle & Fenn 1979 background; dust-like: continental **57.71 mg m⁻²** | Scinocca et al. 2008 | scinocca_technical_2008 | Identical to T47 |
| SS | Sea salt | - | ✓ supports | FX-const | Fixed Shettle & Fenn 1979 background; oceanic: **18.82 mg m⁻²** | Scinocca et al. 2008 | scinocca_technical_2008 | Identical to T47 |
| LU | Land-use change | - | ~ unclear | ? | Not documented; Table S1 "-" unverified | — | — | Identical open question to T47 |
| SO | Solar irradiance | - | ~ unclear | ? | Not documented; SO=- unusual for 20C3M — requires Flato & Boer 2001 | — | — | Identical open question to T47 |
| VL | Volcanic aerosols | - | ~ unclear | ? | Not documented; VL=- unusual for 20C3M — requires Flato & Boer 2001 | — | — | Identical open question to T47 |
| FC | Flux corrections (F/H) | F,H | ~ unclear | ? | Not documented; requires Flato & Boer 2001 for confirmation and values | — | — | Identical open question to T47 |

### Table S1 conflicts found
- **None confirmed.** Same as T47: G=Y and SD=Y supported; O=-, BC=-, OC=-, MD=-, SS=- consistent with fixed-field treatment. SO=-, VL=-, FC=F,H unresolved.

### Open questions
- Identical to T47 — see `CCCma__cccma_cgcm3_1_t47.md` §Open questions.

## Provenance
- Table S1 row: G Y · O - · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO - · VL - · FC F,H
- Sources consulted: identical to T47 — WDC-Climate metadata for CGCM3.1_T63_20C3M_1 confirmed word-for-word identical to T47 record for all forcing entries
- Stage 4 adversarial workflow: 12/14 claims confirmed; both models analysed jointly
