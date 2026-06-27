<!-- CMIP6 forcing record — ACCESS-ESM1-5 (CSIRO). Second pass 2026-06-27: all 11 components resolved from Ziehn et al. 2020 JSHESS -->

# ACCESS-ESM1-5 — CSIRO (Australia)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** UM GA1.0 atmosphere (HadGAM2 r1.1 ≈ GA1, N96L38, top ~39 km) + MOM5 ocean (ACCESS-OM2, 1°) + CICE4.1 + CABLE2.4/CASA-CNP land BGC + WOMBAT ocean BGC. **Full ESM** (interactive C-N-P cycle). Older UM GA1.0 era; markedly lower model top (38L, ~39 km) than GA7.1 (85L, ~85 km). **CLASSIC v1.0 bulk aerosol scheme — NOT GLOMAP-mode.**
- **CMIP5 predecessor:** ACCESS-ESM1 (CMIP5-era development version; no formal CMIP5 submission as ESM)
- **Atmosphere / ocean components:** HadGAM2 (r1.1 ≈ GA1, UM7.3, N96, 192×145, 38L, top ~39 km) / MOM5 (1°, 50 levels) + CICE4.1
- **Primary documentation paper(s):** Ziehn et al. 2020 (*J. South. Hemisph. Earth Syst. Sci.* doi:10.1071/ES19035); Law et al. 2017 (*GMD* doi:10.5194/gmd-10-2567-2017); Ziehn et al. 2017 (*GMD* doi:10.5194/gmd-10-2591-2017)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | CMIP6 standard GHG concentrations; "radiative gases were updated to CMIP6 standards" during spin-up (Ziehn 2020 §4). Prescribed CO2 increases from ~285 ppm (1850) to 379 ppm (2005). | Ziehn et al. 2020 §4 | Majority of forcing files adapted from UK Met Office CMIP6 setup; GHG concentrations explicitly stated as CMIP6 standard. |
| O  | Ozone | ✓std | TV | CMIP6 ozone from CCMI/Hegglin2016 (UK Met Office CMIP6 standard); "forcing fields with vertical definition such as ozone had to be interpolated from higher vertical resolution (85 levels) to our vertical resolution (38 levels)" | Ziehn et al. 2020 §3.1 | L38 model requires vertical interpolation of the standard CMIP6 ozone file from 85L. Ozone source confirmed as UK Met Office CMIP6 setup = Hegglin2016/CCMI. |
| SD | Aerosol — sulphate direct | ~ | TV | **CLASSIC v1.0** bulk aerosol scheme; forcing files "adapted from the UK Met Office setup for CMIP6" using CEDS-based emission datasets for sulfate. CLASSIC prescribes AOD from mass-based scheme driven by emissions; not GLOMAP-mode. | Ziehn et al. 2017 §2.2; Ziehn et al. 2020 §3.1 | Aerosols "based on emission datasets (i.e. sulfate and organic carbon)" (Ziehn 2017). Older CLASSIC bulk scheme rather than GLOMAP-mode; emission inventory CMIP6-standard (CEDS) but scheme architecture differs from MACv2-SP or GLOMAP-mode = hybrid. |
| SI | Aerosol — sulphate indirect | ~ | TV | CLASSIC v1.0 first indirect effect (aerosol–cloud interaction) via bulk scheme; same UKMO CMIP6 emission-driven setup. Not GLOMAP-mode cloud-droplet scheme. | Ziehn et al. 2020 §3.1 | Indirect effect parameterised through bulk CLASSIC scheme — deviates architecturally from GLOMAP-mode standard but uses CMIP6 emissions. |
| BC | Black carbon | ~ | TV | CLASSIC v1.0 bulk scheme; "emission datasets" from UKMO CMIP6 setup (CEDS + BB4CMIP6). | Ziehn et al. 2017 §2.2; Ziehn et al. 2020 §3.1 | Same as SD/OC: CMIP6 emission inventories used but through older CLASSIC bulk scheme. |
| OC | Organic carbon | ~ | TV | CLASSIC v1.0 bulk scheme; "emission datasets (i.e. sulfate and organic carbon)" from UKMO CMIP6 setup. | Ziehn et al. 2017 §2.2; Ziehn et al. 2020 §3.1 | Explicitly mentioned alongside sulfate as emission-dataset-driven in Ziehn 2017. |
| MD | Mineral dust | ~ | TV | Online interactive dust: Woodward (2001, 2011) dust-uplift scheme; nine size bins; depends on wind speed, soil composition and moisture. Tuned in ACCESS1.4 (global burden 14.9 ± 1.3 Tg, comparable to AEROCOM). | Law et al. 2017 Appendix A; Ziehn et al. 2017 §2.2 | "Calculated interactively" (Ziehn 2017). Consistent with standard online dust, but uses ACCESS-specific Woodward scheme rather than Kinne 2013 climatology. |
| SS | Sea salt | ~ | TV | Online interactive sea salt; "calculated interactively" within the UM atmospheric model. | Ziehn et al. 2017 §2.2 | Explicitly stated as interactive in Ziehn 2017. Standard UM interactive sea salt. |
| LU | Land-use change | ✓std | TV | LUH2 v2.1h (Hurtt et al. 2017, doi:10.22033/ESGF/INPUT4MIPS.1127); annual net tile-fraction changes from 1850–2100 applied to CABLE2.4 PFTs. | Ziehn et al. 2020 §2.2.1 | "The annual change in vegetation tile fractions is derived from the Land-Use Harmonisation 2 (LUH2) dataset (Hurtt et al. 2017)." New feature in ACCESS-ESM1.5 (not in ACCESS-ESM1). |
| SO | Solar irradiance | ✗dev | TV | CMIP6 Matthes 2017 data applied with a constant +4.9 W m⁻² offset to match CMIP5-tuned piControl (piControl used CMIP5 TSI of 1365.65 W m⁻², vs CMIP6 mean of 1360.75 W m⁻²). | Ziehn et al. 2020 §3.1 | "The historical and future scenario simulations used the CMIP6 data with a constant 4.9 W m⁻² offset." Model uses only TSI (no spectral variation). Offset-corrected Matthes 2017 = ✗dev from strict standard. |
| VL | Volcanic aerosols | ✗dev | TV | piControl: extended Sato 1993 (CMIP5 forcing, AOD in 4 equal-area latitude bands). Historical: CMIP6 AOD at 550 nm collapsed to 4 latitude bands, with uniform +0.00271 AOD offset applied to match piControl (piControl uses AOD=0.01338 vs CMIP6 mean=0.01067). | Ziehn et al. 2020 §3.1 | Cannot use full CMIP6 stratospheric aerosol optical properties (function of lat, height, wavelength); uses simplified 4-band AOD. Additional constant offset from piControl mismatch. Both deviations from IACETH Thomason 2018 standard = ✗dev. |
| FC | Flux corrections | n/a | n/a | None | | |

## ESM-specific inputs

| Input | Dataset | Verdict | Notes |
|-------|---------|---------|-------|
| N-dep | CMIP6 nitrogen deposition (Jones et al. 2016 C4MIP protocol = NCAR CCMI-2-0) | ✓std (TV) | "Nitrogen deposition is provided by CMIP6 (Jones et al. 2016) and has been implemented for our simulations." (Ziehn 2020 §3.1) |
| Fe-dep | No external Fe-dep forcing file. WOMBAT uses a fixed internal background iron parameter: 0.6 µmol Fe m⁻³ (ACCESS-ESM1.5 value, increased from 0.1 µmol Fe m⁻³ in ACCESS-ESM1 to improve OBGC state). | FXk | "Background iron" is a model parameter, not an external forcing dataset. Iron deposition from dust is not explicitly modelled — background Fe is specified as a constant. |
| CO2-mode | Concentration-driven (conc) for all standard CMIP6 experiments including historical and piControl | conc | "All experiments are run in concentration driven mode, where atmospheric CO2 concentrations are prescribed." (Ziehn 2020 §3). Emissions-driven capability exists but not used for standard historical. |

### Deviations from Eyring 2016 standard protocol
1. **Solar (SO) — ✗dev**: CMIP6 Matthes 2017 data used with a constant +4.9 W m⁻² offset to reconcile with CMIP5-era piControl tuning. Model uses only TSI (not spectral variation).
2. **Volcanic (VL) — ✗dev**: CMIP6 AOD simplified to 4 latitude bands (cannot use height/wavelength-resolved CMIP6 dataset); uniform +0.00271 AOD offset applied to match piControl. Both piControl and historical use non-standard implementations.
3. **Aerosols (SD/SI/BC/OC) — ~**: CLASSIC v1.0 bulk aerosol scheme (not GLOMAP-mode). Forcing files adapted from UKMO CMIP6 setup with CEDS/BB4CMIP6 emission inventories; same emissions as standard but different radiative scheme architecture.
4. **Mineral dust (MD) — ~**: Online interactive using Woodward (2001/2011) scheme in UM, not Kinne 2013 prescribed climatology.
5. **Sea salt (SS) — ~**: Online interactive, not Kinne 2013 prescribed climatology.
6. **Low model top (38L, ~39 km)**: Requires vertical interpolation of ozone from 85L standard; cannot use height-resolved CMIP6 volcanic optical properties.

## Provenance
- Second pass 2026-06-27: all 11 forcing components resolved from Ziehn et al. 2020 (*J. South. Hemisph. Earth Syst. Sci.* doi:10.1071/ES19035) §3.1 "Forcing", cross-checked against Ziehn et al. 2017 (*GMD* doi:10.5194/gmd-10-2591-2017) §2.2 and Law et al. 2017 (*GMD* doi:10.5194/gmd-10-2567-2017) §3/Appendix A
- Stage 14 workflow run ID (prior): wf_915f8ce0-f07 (2026-06-26); confirmed: aerosol=CLASSIC v1.0, atmos=HadGAM2 r1.1
- Key sources: Ziehn 2020 §3.1 (primary CMIP6 forcing description); Ziehn 2017 §2.2 (ACCESS-ESM1 historical forcing — same physical setup); Law 2017 Appendix A (dust/volcanic piControl); Fiddes et al. 2025 (*ACP*, confirmed CLASSIC vs GLOMAP split)
