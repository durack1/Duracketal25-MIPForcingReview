# gfdl_cm2_1 — GFDL (Geophysical Fluid Dynamics Laboratory / NOAA, USA)

- **CMIP phase:** CMIP3 (20C3M, 1861–2000)
- **Model family / lineage:** GFDL CM2.0 → CM2.1 → CM3 → CM4; ESM2M/ESM2G → ESM4
- **Atmosphere / ocean components:** AM2 atmosphere with revised dynamical core & physics vs CM2.0; MOM4 ocean. Higher equilibrium climate sensitivity (≈3.4 K vs ≈2.9 K for CM2.0).
- **Primary documentation paper(s):** Delworth et al., 2006, *J. Climate* 19(5) — doi:10.1175/JCLI3629.1 *(bib key TO ADD: delworth_gfdls_2006)*
- **Forcing-specific reference(s):** Knutson et al. 2006 (doi:10.1175/JCLI3709.1, *bib TO ADD*); GFDL CM2.X forcing FAQ (nomads.gfdl.noaa.gov)
- **Forcings identical to CM2.0** (confirmed, Delworth et al. 2006, 3-0 vote) — the two versions differ in dynamics/physics, not in the prescribed 20C3M forcing set.

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = the claim from Durack & Wijffels (2012) Table S1 (Y / - / blank).
`Verdict` = literature check: **✓ supports** · **✗ conflicts** · **~ unclear/unstated** · **＋ confirmed + adds detail**.
`Temporal` = **TV** time-varying · **FX-clim** fixed climatology (seasonal, no interannual change) · **FX-const** fixed constant · **n/a** not applied · **?** unknown.
Verdicts below are backed by the GFDL primary documentation (Delworth et al. 2006; GFDL CM2.X FAQ), 3-0/2-0 adversarial votes.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (time-varying series or fixed field) | Citation | bib key | Notes / evidence |
|-----|---------|----------|---------|----------|-------------------------------------------------------|----------|---------|------------------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ✓ supports | TV | Historical CO₂/CH₄/N₂O/halocarbon concentrations | Delworth et al. 2006 | delworth_gfdls_2006 *(add)* | Concentration series (IPCC TAR / Houghton et al. 2001?) to confirm |
| O  | Ozone (tropo + strato) | Y | ✓ supports *(nuance)* | TV (tropo possibly FX-clim) | Tropo+strato O3; stratospheric trend 1977–2000 from Randel & Wu 1999 | Delworth et al. 2006; Randel & Wu 1999 | delworth_gfdls_2006 *(add)*; randel_stratospheric_1999 | **OPEN:** GFDL FAQ suggests tropospheric O3 = fixed 1990 climatology (NCAR MACCM3); only stratospheric O3 time-varying. Verify. |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Anthropogenic tropospheric sulfate (direct effect) | Delworth et al. 2006 | delworth_gfdls_2006 *(add)* | |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | Not included | Delworth et al. 2006 | delworth_gfdls_2006 *(add)* | "Indirect effects … on clouds and precipitation … are not included." |
| BC | Black carbon | Y | ✓ supports | TV | Black carbon distributions | Delworth et al. 2006 | delworth_gfdls_2006 *(add)* | Prognostic vs prescribed to confirm |
| OC | Organic carbon | Y | ✓ supports | TV | Organic carbon distributions | Delworth et al. 2006 | delworth_gfdls_2006 *(add)* | |
| MD | Mineral dust | - | ✓ supports | **FX-clim** | Dust concentration; **fixed seasonal spatial field**, no year-to-year change (concentration units not stated in source) | Delworth et al. 2006 | delworth_gfdls_2006 *(add)* | Present in model but not transient → Table S1 "-". (WDC-Climate metadata conflicts; primary source resolves.) |
| SS | Sea salt | - | ✓ supports | **FX-clim** | Sea salt concentration; **fixed seasonal spatial field**, no year-to-year change | Delworth et al. 2006 | delworth_gfdls_2006 *(add)* | Same as MD. |
| LU | Land-use change | Y | ✓ supports | TV | Hurtt et al. 2006 global land-use reconstruction (alters albedo, roughness, stomatal resistance, water capacity) | Delworth et al. 2006; Hurtt et al. 2006 | hurtt_underpinnings_2006 | |
| SO | Solar irradiance | Y | ✓ supports | TV | Lean reconstruction, wavelength-dependent, 1882–2000 | Lean et al. 1995; Lean 2003 | lean_reconstruction_1995; lean_new_2003 | |
| VL | Volcanic aerosols | Y | ✓ supports | TV | Sato et al. 1993 stratospheric AOD, improved by Hansen et al. 2002; optics per Stenchikov et al. 1998; Ramachandran 1999 Pinatubo blend, back to 1860 | Sato et al. 1993; Hansen et al. 2002; Stenchikov et al. 1998 | sato_stratospheric_1993; hansen_climate_2002 *(add)*; stenchikov_radiative_1998 | NOT Ammann/Andronova-type. |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | None — no flux adjustments | Delworth et al. 2006 | delworth_gfdls_2006 *(add)* | |

### Table S1 conflicts found
- **None outright.** All 12 cells supported by the primary documentation.
- One **nuance to resolve (O):** tropospheric ozone may have been a fixed 1990 climatology rather than time-varying (see O row). This does not change the Y/- inclusion but qualifies "time-varying."

## Notes, uncertainties, and open questions
- Verify tropospheric-ozone time-variation (Delworth 2006 text vs GFDL FAQ / Randel & Wu 1999).
- Pin the well-mixed GHG concentration source dataset (likely IPCC TAR / Houghton et al. 2001).
- Confirm whether BC/OC were prognostic or prescribed distributions.

## Provenance
- Table S1 (Durack & Wijffels 2012) inclusion row: G Y · O Y · SD Y · SI - · BC Y · OC Y · MD - · SS - · LU Y · SO Y · VL Y · FC -
- Sources consulted this stage (deep-research wf_2a8dcafc-9ab, 9 claims confirmed 3-0/2-0):
  - Delworth et al. 2006 PDF: https://nomads.gfdl.noaa.gov/CM2.X/references/i1520-0442-19-9-1624.pdf
  - GFDL CM2.X forcing FAQ: https://nomads.gfdl.noaa.gov/nomads/forms/deccen/CM2.X/faq/question_13.html
  - PCMDI IPCC model doc: https://pcmdi.llnl.gov/ipcc/model_documentation/GFDL-cm2.htm
  - Knutson et al. 2006 (GFDL bibliography)
