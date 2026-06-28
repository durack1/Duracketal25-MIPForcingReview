# mri_cgcm2_3_2a — MRI (Meteorological Research Institute, Japan)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** MRI-CGCM2.3.2a — atmospheric model MRI/JMA98 at T42L30 + ocean model MRI.COM at 2.5°×0.5°(tropics)–2°(extratropics). Uses flux adjustment (heat, water, momentum). No direct CMIP5/6 successor (replaced by MRI-CGCM3 / MRI-ESM1 series).
- **Primary documentation paper(s):** Yukimoto, S., et al. (2001). *The new Meteorological Research Institute coupled GCM (MRI-CGCM2) — Model climate and variability.* Papers in Meteorology and Geophysics, 51(2), 47–88. (jStage doi:10.2467/mripapers.51.47); Yukimoto, S., et al. (2006). *Present-day climate and climate sensitivity in the Meteorological Research Institute coupled GCM, version 2.3 (MRI-CGCM2.3).* J. Meteor. Soc. Japan, 84(2), 333–363. (Pre-submission manuscript: https://pcmdi.llnl.gov/ipcc/model_documentation/Yukimoto_2005_Papers-submit.pdf); PCMDI CMIP3 model doc (note: PCMDI URL uses a typo — **MRI-GCGM2.3.2** not CGCM): https://pcmdi.llnl.gov/ipcc/model_documentation/MRI-GCGM2.3.2.htm
- **Forcing-specific reference(s):** Lean, J., Beer, J., and Bradley, R. (1995) (*Geophys. Res. Lett.*, doi:10.1029/95GL03093) — solar reconstruction used for 20C3M; Yukimoto et al. 2006 §solar forcing for Lean 1995 confirmation

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ✓ supports | TV | CO2, CH4, N2O, CFCs; time-varying 1851–2000; 5-member ensemble. Control runs by contrast hold GHGs fixed: PIcntrl at CO2=290 ppmv, CH4=792 ppbv, N2O=285 ppbv, CFCs=0. | PCMDI MRI-GCGM2.3.2.htm §V.C; Yukimoto et al. 2006 | yukimoto_mri_2006 | "The distributions and temporal changes are provided" (PCMDI) — time-varying confirmed |
| O  | Ozone (tropo + strato) | Y | ✗ conflict (strong candidate) | n/a (by absence) | **Table S1 O=Y is a strong candidate error.** Two independent lines of evidence: (1) Explicit 20C3M forcing-agent list (four agents: GHGs, sulphate direct, volcanic, solar) does NOT include ozone. (2) PCMDI PDF §II.A: *"atmospheric chemistry? Not included"* — no interactive atmospheric chemistry module. Combined, these constitute strong evidence that ozone was not prescribed as a transient forcing in MRI 20C3M. Note: "atmospheric chemistry not included" means no interactive chemistry but does not definitively exclude prescribed ozone — however, its absence from the four-agent list is primary evidence. | PCMDI MRI-GCGM2.3.2.htm §V.C (four-agent list); PCMDI MRI-GCGM2.3.2 PDF §II.A (atmospheric chemistry); WDC-Climate MRI_CGCM2.3.2_20C3M_1 | yukimoto_mri_2006 | Upgraded from "~ unclear" to "✗ conflict (strong candidate)" — PDF §II.A adds "atmospheric chemistry: Not included" confirmation. Definitive confirmation requires Yukimoto 2001 §radiation. |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Sulfate aerosol direct effect only; PCMDI verbatim: "Only direct effect of sulfate aerosol" (§II.C); among the four confirmed 20C3M forcing agents | PCMDI MRI-GCGM2.3.2.htm §II.C, §V.C | yukimoto_mri_2006 | SD=Y confirmed; direct effect only |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | "Only direct effect of sulfate aerosol" — explicit exclusion of indirect effect | PCMDI MRI-GCGM2.3.2.htm §II.C | yukimoto_mri_2006 | SI=- confirmed |
| BC | Black carbon | - | ✓ supports | n/a | Not in the four-agent 20C3M forcing list | PCMDI MRI-GCGM2.3.2.htm §V.C | yukimoto_mri_2006 | BC=- confirmed |
| OC | Organic carbon | - | ✓ supports | n/a | Not in the four-agent 20C3M forcing list | PCMDI MRI-GCGM2.3.2.htm §V.C | yukimoto_mri_2006 | OC=- confirmed |
| MD | Mineral dust | - | ✓ supports | n/a | Not in the four-agent 20C3M forcing list | PCMDI MRI-GCGM2.3.2.htm §V.C | yukimoto_mri_2006 | MD=- confirmed |
| SS | Sea salt | - | ✓ supports | n/a | Not in the four-agent 20C3M forcing list | PCMDI MRI-GCGM2.3.2.htm §V.C | yukimoto_mri_2006 | SS=- confirmed |
| LU | Land-use change | - | ✓ supports | n/a | Not in the four-agent 20C3M forcing list | PCMDI MRI-GCGM2.3.2.htm §V.C | yukimoto_mri_2006 | LU=- confirmed |
| SO | Solar irradiance | Y | ✓ supports | TV | Time-varying solar constant using **Lean et al. (1995)** reconstruction — 11-year activity cycle plus longer-term component based on sunspot variations. PIcntrl solar constant = 1366.0 W m⁻²; PDcntrl/SRES fixed at 1367 W m⁻² (no variability for future scenarios). | Yukimoto et al. 2006 (pre-submission PDF §solar forcing): *"The solar activity forcing is simply imposed by changing the solar constant ... Lean et al. 1995 ... includes 11-year activity cycle and a longer-term component"* | yukimoto_mri_2006; lean_1995 | SO=Y confirmed — genuinely time-varying; Lean 1995 reconstruction confirmed (contradicts the prior SO=Y-unreliable pattern seen at CNRM/IPSL/INGV) |
| VL | Volcanic aerosols | Y | ✓ supports | TV | Volcanic forcing time-varying in 20C3M — listed among the four confirmed forcing agents. Specific volcanic aerosol dataset not named in available documentation. | PCMDI MRI-GCGM2.3.2.htm §V.C | yukimoto_mri_2006 | VL=Y confirmed as time-varying; exact dataset (Sato 1993? Ammann 2003? other?) unconfirmed |
| FC | Flux corrections (F/H) | F,H | ✓ supports | FX-clim (monthly) | **Monthly climatological flux adjustment for heat and freshwater (water) globally, plus momentum/wind-stress adjustment restricted to equatorial band (12°S–12°N).** PCMDI verbatim: *"Monthly climatological flux adjustment for heat, water and momentum (only 12S-12N) is used."* Yukimoto 2001: wind-stress adjustment in equatorial band "to reproduce a realistic climatological thermocline along the equator." | PCMDI MRI-GCGM2.3.2.htm §IV.E; Yukimoto et al. 2001 | yukimoto_mri_2001 | FC=F,H confirmed (heat+water global; momentum equatorial-only — additional detail beyond Table S1 encoding). Same FC pattern as CCCma and MIUB. |

### Table S1 conflicts found
- **O=Y — strong candidate conflict:** Two independent lines from the PCMDI PDF — (1) explicit four-agent 20C3M list omits ozone, (2) §II.A "atmospheric chemistry: Not included". Upgraded from ~ unclear to ✗ conflict (strong candidate, high confidence). Definitive confirmation requires Yukimoto 2001 §radiation.
- **No other confirmed conflicts.**

### Open questions
1. **O=Y definitive confirmation**: Yukimoto et al. 2001 (§radiation) for explicit statement on prescribed ozone treatment.
2. **VL=Y dataset**: Which volcanic aerosol reconstruction? (Sato 1993 vs. Ammann 2003 vs. other?)
3. **SD temporal treatment**: Was the sulphate direct effect applied using a fixed climatology or a time-varying field? The four-agent list confirms SD was applied but does not specify TV vs FX-clim.

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO Y · VL Y · FC F,H
- Sources consulted: PCMDI MRI-GCGM2.3.2.htm (primary — verbatim four-agent 20C3M list, FC description; note PCMDI URL uses "GCGM" typo); WDC-Climate MRI_CGCM2.3.2_20C3M_1 run metadata (corroborating); Yukimoto et al. 2006 pre-submission manuscript PDF (solar Lean 1995 confirmed; GHG fixed-value contrasts confirmed); Yukimoto et al. 2001 jStage (FC details)
- Stage 9 adversarial workflow: wf_401d7787-4bc; 30 agent calls; 8 findings retained after synthesis; MRI findings all high confidence except O=Y (medium)
- Key quote (PCMDI §V.C 20C3M): *"The forcing agents of the experiment include greenhouse gases (CO2, CH4, N2O and CFCs), sulfate aerosol direct effects, volcanoes and solar forcing."*
- Key quote (PCMDI §II.C): *"Only direct effect of sulfate aerosol."*
- Key quote (Yukimoto 2006, solar): *"The solar activity forcing is simply imposed by changing the solar constant ... [using] Lean et al. 1995 ... includes 11-year activity cycle and a longer-term component based on the sunspot variations."*
