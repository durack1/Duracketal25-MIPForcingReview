# gfdl_cm3 — GFDL (Geophysical Fluid Dynamics Laboratory, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** gfdl_cm2_1 (major upgrade: AM2 → AM3 with interactive chemistry and aerosols)
- **Model family / lineage:** CM2.1 → CM3 (AM3 replaces AM2; interactive aerosols + full atmospheric chemistry) → CM4. First GFDL coupled model with prognostic ozone and aerosols. Not an ESM (no active carbon cycle).
- **Atmosphere / ocean components:** AM3 (2°×2.5°, 48 levels; interactive tropospheric+stratospheric chemistry, 85 species; 20 interactive aerosol species) + MOM4p1 z-level ocean (1°) + LM3 land
- **Primary documentation paper(s):** Donner, L.J., et al. (2011). The dynamical core, physical parameterizations, and basic simulation characteristics of the atmospheric component AM3 of the GFDL Global Coupled Model CM3. *J. Climate* 24(13), 3484–3519. doi:10.1175/2011JCLI3955.1 [donner_new_2011]
- **Forcing-specific reference(s):** Levy, H., et al. (2013). The roles of aerosol direct and indirect effects in past and future climate change. *J. Geophys. Res. Atmos.* 118, 4521–4532. doi:10.1002/jgrd.50192 [levy_roles_2013 *(add)*]; Lamarque et al. 2010 (*ACP* doi:10.5194/acp-10-7017-2010) [lamarque_historical_2010] — emissions source for AM3 chemistry and aerosols

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

`Protocol` = Taylor et al. 2012 standard CMIP5 `historical` recommended dataset.
`Verdict` = **✓ standard** · **＋ exceeds standard** (interactive > prescribed) · **✗ deviates** · **~ unclear**.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓ standard | TV | **Meinshausen et al. 2011** GHG concentrations (IIASA RCP Database) | PCMDI CMIP5 forcing page; Meinshausen et al. 2011 | meinshausen_rcp_2011 | Standard protocol |
| O  | Ozone | Cionni et al. 2011 (models w/o interactive chem) | ＋ exceeds standard | TV+ (interactive) | **AM3 interactive tropospheric and stratospheric chemistry (85 species)** — ozone calculated prognostically, NOT prescribed from Cionni 2011. Donner 2011 verbatim: "the first coupled chemistry-climate model that allowed representation of interactive aerosols and ozone, rather than prescribing concentrations from offline models." Captures Antarctic ozone hole trend over 1860–2005 from chemistry, not climatology. Taylor 2012 Cionni dataset is explicitly "for models WITHOUT interactive chemistry." | Donner et al. 2011; GFDL AM3 page | donner_new_2011 | GFDL AM3 page: "AM3 includes interactive tropospheric and stratospheric chemistry (85 species)." Lamarque 2010 NOx/VOC/CO/etc. emissions drive the chemistry. |
| SD | Sulphate aerosol — direct | Lamarque et al. 2010 OD | ＋ exceeds standard | TV+ (interactive) | **AM3 interactive sulphate aerosol** — one of 20 prognostic aerosol species computed from precursor SO2 emissions (Lamarque 2010), not read as prescribed OD. Donner 2011: aerosols are prognostic "based on their emissions (including precursor emissions), chemical production (sulfate and secondary organic aerosols), transport by advection, and removal by dry/wet deposition." | Donner et al. 2011; GFDL CM3 page | donner_new_2011 | Input is Lamarque 2010 SO2 EMISSIONS; output is interactive sulphate concentrations/OD. Exceeds the prescribed-OD standard. |
| SI | Sulphate aerosol — indirect | Model-dependent | ＋ exceeds standard | TV+ (interactive) | **Prognostic aerosol indirect effect via cloud-droplet activation** in AM3. GFDL verbatim: "cloud droplet activation by aerosols (i.e., aerosol indirect effect)." Requires aerosol NUMBER concentrations — only available from the prognostic scheme, not from prescribed OD. | GFDL CM3 page; Donner et al. 2011 | donner_new_2011 | More complete indirect effect than prescribed-OD models (which cannot represent droplet activation explicitly). |
| BC | Black carbon | Lamarque et al. 2010 emissions | ＋ exceeds standard | TV+ (interactive) | **AM3 interactive BC aerosol** — one of 20 prognostic species driven by Lamarque 2010 BC emissions. Computed prognostically with transport, removal, optical properties. | Donner et al. 2011; GFDL AM3 page | donner_new_2011 | Includes BC-on-snow pathway via interactive deposition? Likely yes — needs confirmation from Levy et al. 2013. |
| OC | Organic carbon | Lamarque et al. 2010 emissions | ＋ exceeds standard | TV+ (interactive) | **AM3 interactive OC aerosol** — prognostic; includes secondary organic aerosol (SOA) chemical production from Lamarque 2010 precursor emissions. | Donner et al. 2011 | donner_new_2011 | |
| MD | Mineral dust | Model-dependent | ＋ exceeds standard | TV+ (interactive) | **AM3 interactive mineral dust** — one of 20 prognostic aerosol species. Computed from emissions/surface wind conditions, not prescribed from climatology. | GFDL AM3 page; Donner et al. 2011 | donner_new_2011 | |
| SS | Sea salt | Model-dependent | ＋ exceeds standard | TV+ (interactive) | **AM3 interactive sea salt** — one of 20 prognostic aerosol species. | GFDL AM3 page; Donner et al. 2011 | donner_new_2011 | |
| LU | Land-use change | Hurtt et al. 2011 | ✓ standard | TV | **Hurtt et al. 2011** harmonised land-use transitions. LM3 land model applies time-varying land cover. | Hurtt et al. 2011; Taylor et al. 2012 | hurtt_harmonization_2011 | |
| SO | Solar irradiance | Wang et al. 2005 | ✓ standard | TV | **Fröhlich and Lean (2004)** observational time series, scaled uniformly to the TIM (Total Irradiance Monitor) absolute scale (Kopp et al. 2005), as recommended for CMIP5. Donner 2011 p.3486 (section 3a): "Total and spectral solar irradiances are from the Total Irradiance Monitor (TIM) (Kopp et al. 2005), as recommended for Climate Model Intercomparison Project 5 (CMIP5)." Donner 2011 p.3499 (section 4a): "solar irradiance varied following the observational time series recommended by CMIP5, as described by Fröhlich and Lean (2004). (the solar irradiance has been scaled uniformly to correspond to the TIM scale, as recommended by CMIP5.)" | Fröhlich and Lean 2004; Kopp et al. 2005 | frohlich_lean_2004 | Donner 2011 section 4a explicitly names Fröhlich and Lean (2004) for the CMIP5 historical solar time series; TIM scaling per Kopp et al. 2005. This IS the CMIP5-recommended solar dataset (not Wang 2005 by name, but conforming to CMIP5 standard). |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓ standard | TV | **Stenchikov et al. (2006)** prescribed stratospheric volcanic optical properties time series. Donner 2011 p.3487 (section 3a aerosol optics): "Direct injection of sulfur into the stratosphere from volcanic eruptions is not included, nor is carbonyl-sulfide chemistry … To compensate, in the stratosphere, a time series of volcanic optical properties is specified as in Stenchikov et al. (2006)." Stenchikov et al. 2006 uses the Sato et al. 1993 updated stratospheric aerosol OD dataset. | Stenchikov et al. 2006; Sato et al. 1993 | stenchikov_arctic_2006; sato_stratospheric_1993 | Confirmed prescribed stratospheric volcanic OD from Donner 2011 section 3a. AM3's interactive aerosol scheme covers tropospheric species only; stratospheric volcanic forcing is still prescribed via Stenchikov 2006 (which uses Sato 1993 updated data). ✓ standard. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
CM3 has interactive atmospheric chemistry (AM3) but NOT an ESM — no active carbon cycle, ocean biogeochemistry, or land carbon. Additional chemistry inputs:

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| Atmospheric chemistry emissions (NOx/VOC/CO/SO2/etc.) | Yes | **Lamarque et al. 2010** (*ACP*) historical anthropogenic + biomass-burning emissions | Primary fuel for AM3 interactive chemistry and aerosols; drives prognostic ozone and all 20 aerosol species |
| BC on snow/ice | Likely yes | Lamarque et al. 2010 BC deposition | AM3 prognostic BC with transport includes deposition to snow/ice surface; needs confirmation from Levy 2013 |
| N-deposition | Not applicable | — | No land/ocean biogeochemistry in CM3 |
| CO2 mode | Concentration-driven | Meinshausen et al. 2011 | Not an ESM; no emission-driven mode |

### Deviations from Taylor 2012 standard protocol
- **O: EXCEEDS standard** — interactive chemistry replaces Cionni 2011 prescribed ozone (correct and intended per Taylor 2012 design)
- **SD/SI/BC/OC/MD/SS: ALL EXCEED standard** — all six aerosol-related forcings are interactive (20 prognostic species from Lamarque 2010 emissions), exceeding the prescribed-OD standard
- **Key implication**: CM3 is the only non-ESM GFDL CMIP5 model with interactive aerosol-chemistry; the gap between CM3 and CM2p1 is methodologically larger than the gap between CM2p1 and any CMIP3 model

### Notes on CMIP3 lineage
- Represents a fundamental atmospheric-model upgrade from CMIP3 CM2.1. AM3's interactive aerosol scheme is qualitatively different from CMIP3's prescribed-OD approach. CMIP3 CM2.1 used Boucher LOA sulphate OD; CMIP5 CM3 computes sulphate interactively from SO2 emissions.

## Open questions
1. BC-on-snow: is the cryosphere albedo pathway from deposited BC explicitly included? Levy et al. 2013 likely addresses this.
2. Ozone chemistry: which emission species (NOx sources, VOCs) from Lamarque 2010 were used? Same inventory across all GFDL models?

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: GFDL AM3 model page (gfdl.noaa.gov/am3-model/); GFDL CM3 page (gfdl.noaa.gov/coupled-physical-model-cm3/); Donner et al. 2011 J. Climate doi:10.1175/2011JCLI3955.1; Taylor et al. 2012 BAMS; PCMDI CMIP5 forcing page; Fröhlich and Lean 2004 Astron. Astrophys. Rev. doi:10.1007/s00159-004-0024-1; Stenchikov et al. 2006 JGR doi:10.1029/2005JD006286
- Key quote (GFDL AM3 page): "AM3 is GFDL's first global atmospheric model to include cloud-aerosol interactions, with 20 interactive aerosol species" and "uses emissions to drive its chemistry and aerosols"
- Key quote (Donner 2011): "the first coupled chemistry-climate model that allowed representation of interactive aerosols and ozone, rather than prescribing concentrations from offline models"
- Stage 1 adversarial workflow: wf_ad589a7e-9e9; CM3 O/aerosol exceeding-standard findings confirmed 1-0 (high confidence)
