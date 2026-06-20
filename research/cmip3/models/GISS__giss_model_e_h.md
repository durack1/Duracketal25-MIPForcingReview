# giss_model_e_h — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP3 (20C3M, transient 1880–2003)
- **Model family / lineage:** GISS ModelE → ModelE2 (CMIP5: E2-H/E2-R) → ModelE2.1 (CMIP6). "-H" = HYCOM ocean (Ocean D, Bleck 2002).
- **Atmosphere / ocean components:** ModelE atmosphere; HYCOM ocean. **Atmospheric forcings IDENTICAL to ModelE-R** (confirmed: "alternative ocean representations with identical atmospheric model").
- **Primary documentation paper(s):** Schmidt et al. 2006, *J. Climate* 19:153–192 — doi:10.1175/JCLI3612.1 *(given)*; Hansen et al. 2007, *Clim. Dyn.* 29:661–696 — doi:10.1007/s00382-007-0255-8 (the authoritative 1880–2003 transient/20C3M forcing documentation).
- **Forcing-specific reference(s):** Hansen et al. 2002 (doi:10.1029/2001JD001143); Hansen et al. 2005 (doi:10.1029/2005JD005776, `hansen_efficacy_2005`).

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = claim from Durack & Wijffels (2012) Table S1 (Y / - / blank).
`Verdict` = **✓ supports** · **✗ conflicts** · **~ unclear** · **＋ confirmed + adds detail/qualification**.
`Temporal` = **TV** time-varying · **FX-clim** fixed climatology (seasonal, no interannual change) · **FX-const** fixed constant · **n/a** not applied · **?** unknown.
Backed by Schmidt et al. 2006 + Hansen et al. 2007 (primary), single-vote adversarial pass.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (time-varying series or fixed field) | Citation | bib key | Notes / evidence |
|-----|---------|----------|---------|----------|-------------------------------------------------------|----------|---------|------------------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | WMGHGs (direct) + stratospheric H₂O from CH₄ oxidation; concentrations from Hansen & Sato 2004 / Montzka et al. 1999 | Hansen et al. 2007 | hansen_climate_2007 *(add)* | |
| O  | Ozone (tropo + strato) | Y | ✓ supports | TV | Tropospheric: Shindell et al. 2003 GISS chemistry-climate. Stratospheric: Labow 3D monthly climatology + Randel & Wu 1999 trend (1979–97) | Schmidt et al. 2006; Randel & Wu 1999 | schmidt_presentday_2006 *(add)*; randel_stratospheric_1999 | |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Model-generated sulphate (SI2000; Koch 2001/Koch et al. 1999); industrial SO₂ from Lefohn et al. 1999 | Schmidt et al. 2006 | schmidt_presentday_2006 *(add)* | |
| SI | Sulphate aerosol — indirect | Y | ✓ supports *(qualified)* | TV (parameterized) | Parameterized indirect effect on **cloud COVER** (Menon & Del Genio 2007), tuned to ≈−1 W/m² vs 1850; **no cloud-albedo/Twomey effect** | Hansen et al. 2007 §3.2.2; Menon & Del Genio 2007 | hansen_climate_2007 *(add)*; menon_2007 *(add)* | Real but a tuned proxy (uncertainty ≥50%), unusual among CMIP3. Not a resolved indirect effect. |
| BC | Black carbon | Y | ✓ supports | TV | Fossil-fuel BC from Tegen et al. 2000 (UN energy stats) + Cooke et al. 1999 emission factors; Novakov et al. 2003 technology factors | Schmidt et al. 2006 | schmidt_presentday_2006 *(add)* | |
| OC | Organic carbon | Y | ✓ supports | TV | OC = 4× (fossil) / 7.9× (biomass) BC (Liousse et al. 1996); biomass BC/OC ramp ½(1850)→full(1990) | Schmidt et al. 2006 | schmidt_presentday_2006 *(add)* | |
| MD | Mineral dust | Y | ✗ conflicts *(fixed, not transient)* | **FX-clim** | Tegen et al. 1997 distribution; **fixed spatial field** (optical thickness, dimensionless) | Hansen et al. 2007 §3.2.1; Tegen et al. 1997 | tegen_contribution_1997 *(add)* | Present but **not time-varying** → Table S1 "Y" overstates as transient. "All aerosols except sea salt and soil dust are time-variable." |
| SS | Sea salt | Y | ✗ conflicts *(fixed, not transient)* | **FX-clim** | Sea salt; **fixed spatial field** (optical thickness, dimensionless) | Hansen et al. 2007 §3.2.1 | hansen_climate_2007 *(add)* | Same as MD. |
| LU | Land-use change | Y | ✓ supports | TV | Cropland conversion, Ramankutty & Foley 1999 | Schmidt et al. 2006 | ramankutty_estimating_1999 *(add)* | |
| SO | Solar irradiance | Y | ✓ supports | TV | Spectrally discriminated Lean 2000 reconstruction | Schmidt et al. 2006; Lean 2000 | lean_2000 *(add)* | GISS data page later cites Lean et al. 2002 for 2004–10 runs; model papers cite Lean 2000 (governs CMIP3). |
| VL | Volcanic aerosols | Y | ✓ supports | TV | Sato et al. 1993 GISS stratospheric-aerosol tabulation (updated by Sato & Lacis, GISS) | Schmidt et al. 2006; Hansen et al. 2002 | sato_stratospheric_1993; hansen_climate_2002 *(add)* | |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | None — non-flux-corrected coupled model | (consistent; not separately tested) | | |

### Table S1 conflicts found
- **MD=Y and SS=Y are misleading:** dust and sea salt were prescribed *fixed climatological* fields, not transient forcings. A binary "Y" implies time-variation that did not occur. (Contrast: GFDL's identically-fixed dust/sea salt are marked "−" in Table S1 — an internal inconsistency in Table S1's treatment.)
- **SI=Y is real but a tuned cloud-cover proxy** (≈−1 W/m², Menon & Del Genio 2007), not a physically resolved Twomey/albedo effect.

## Notes, uncertainties, and open questions
- Decide how the review presents fixed-vs-time-varying aerosols (footnote recommended) and whether ModelE's SI is comparable to other models' indirect-effect entries.

## Provenance
- Table S1 inclusion row: G Y · O Y · SD Y · SI Y · BC Y · OC Y · MD Y · SS Y · LU Y · SO Y · VL Y · FC -
- Sources (deep-research wf_0428cb12-249, 13/14 claims confirmed):
  - Schmidt et al. 2006: https://journals.ametsoc.org/view/journals/clim/19/2/jcli3612.1.xml
  - Hansen et al. 2007 (arXiv): https://arxiv.org/pdf/physics/0610109
  - GISS ModelE transient forcings: https://data.giss.nasa.gov/modelE/transient/climsim.html
  - GISS volcanic: https://data.giss.nasa.gov/modelforce/strataer/ · land use: https://data.giss.nasa.gov/modelforce/LULC/
