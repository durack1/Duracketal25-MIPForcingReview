# FIO-ESM — FIO (First Institute of Oceanography, China)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — FIO-ESM is a new CMIP5 entrant
- **Model family / lineage:** FIO Earth System Model. UNIQUE FEATURE: incorporates surface ocean wave mixing (Bv parameterisation) in the modified POP2 ocean — additional physical process. CAM3.1 atmosphere (not CAM4 or CAM4-Oslo). Despite "ESM" in the name, no standard ESM carbon cycle components (no interactive ocean or land biogeochemistry). CAM3-derived aerosol scheme.
- **Atmosphere / ocean components:** CAM3.1 (T42 spectral, L26) + modified POP2 (NCAR POP2 with wave mixing, ~1°) + CLM3.5 land + CICE4 sea ice
- **Primary documentation paper(s):** Qiao, F., et al. (2013). Development and evaluation of an Earth System Model with surface gravity waves. *Sci. China Earth Sci.* 56(12), 3079–3088. doi:10.1007/s11430-013-4647-0 [qiao_fioresm_2013 *(add)*]
- **Forcing-specific reference(s):** Qiao et al. 2013; PCMDI CMIP5 documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | Meinshausen et al. 2011 | Qiao2013 | qiao_fioresm_2013 | |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | AC&C/SPARC Cionni et al. 2011; no interactive chemistry in CAM3.1 | Qiao2013 | qiao_fioresm_2013 | |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ✓std | TV | Lamarque et al. 2010 prescribed aerosol OD (direct effect) | Qiao2013 | qiao_fioresm_2013 | CAM3.1 prescribed OD — follows standard |
| SI | Sulphate indirect | Model-dependent | n/a | n/a | Not applied — CAM3.1 does not include indirect aerosol effects | Qiao2013 | qiao_fioresm_2013 | |
| BC | Black carbon | Lamarque et al. 2010 | ✓std | TV | Lamarque2010 prescribed OD (direct effect only) | Qiao2013 | qiao_fioresm_2013 | |
| OC | Organic carbon | Lamarque et al. 2010 | ✓std | TV | Lamarque2010 prescribed OD (direct effect only) | Qiao2013 | qiao_fioresm_2013 | |
| MD | Mineral dust | Model-dependent | ~unclear | FXc | Fixed background mineral dust climatology — not dynamically simulated | Qiao2013 | qiao_fioresm_2013 | Not interactive in CAM3.1 |
| SS | Sea salt | Model-dependent | ~unclear | FXc | Fixed background sea salt climatology | Qiao2013 | qiao_fioresm_2013 | Not interactive in CAM3.1 |
| LU | Land-use change | Hurtt et al. 2011 | ✓std | TV | Hurtt et al. 2011 LUH1 transitions via CLM3.5 | Qiao2013 | qiao_fioresm_2013 | |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | Wang, Lean & Sheeley 2005 | Qiao2013 | qiao_fioresm_2013 | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Sato et al. 1993 updated — NOT Ammann2003 despite CAM3 heritage | Qiao2013 | qiao_fioresm_2013 | **Key finding: FIO-ESM adopted CMIP5 Sato-updated despite CCSM3/CAM3 heritage** |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running CMIP5 model | — | — | |

### ESM-specific forcing inputs
Despite "ESM" in the name, FIO-ESM has no standard ESM carbon cycle components — no interactive ocean biogeochemistry, no land carbon cycle beyond CLM3.5. No N-deposition or CO2 emission-driven runs. Standard 12 keys only.

### Deviations from Taylor 2012 standard protocol
- **SI = n/a**: No indirect aerosol effect in CAM3.1 — this is an omission relative to many CMIP5 models but is not a deviation from a Taylor2012 prescribed standard (indirect effects are "model-dependent").
- **MD/SS = FXc**: Fixed background climatology (not interactive) — deviation from models that compute these online, though Taylor2012 categorises these as "model-dependent."

### Notes on CMIP3 lineage
No CMIP3 predecessor. FIO-ESM uses CAM3.1 (CCSM3-era atmosphere), but critically adopted the CMIP5 standard Sato-updated volcanic dataset rather than carrying forward the CCSM3-era Ammann2003 dataset used in CMIP3. This is a deliberate CMIP5 update confirmed from Qiao2013.

## Open questions
- Whether the CAM3.1 aerosol scheme uses exactly Lamarque2010-OD format or an adapted version.
- Exact year-range coverage of the volcanic aerosol dataset.

## Provenance
- Durack et al. 2016 model list: included (row 43)
- Sources consulted: Qiao et al. 2013 (Sci. China Earth Sci. 56:3079-3088, doi:10.1007/s11430-013-4647-0)
- Stage 10 workflow: wf_36a86e20-c4b (2026-06-21); VL=Sato-updated confirmed 1-0 (Qiao2013; Ammann2003 REFUTED 0-1); SI=n/a confirmed 1-0; MD/SS=FXc confirmed 1-0
