# cnrm_cm5 — CNRM (Centre National de Recherches Météorologiques, France)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** cnrm_cm3 — NOTE: CMIP3 CNRM-CM3 had 3 confirmed conflicts: SI=✗(direct-only no-indirect), SO=✗(fixed 1370 W m⁻²), VL=✗(no volcanic). Test whether corrected in CMIP5.
- **Model family / lineage:** CNRM-CM5.1 = ARPEGE-Climate 5.2 atmosphere + NEMO3.2 ocean + SURFEX land + GELATO sea ice. Major upgrade from CMIP3 CNRM-CM3. Related to CNRM-CM5-2 which adds interactive atmospheric chemistry (MOCAGE).
- **Atmosphere / ocean components:** ARPEGE-Climate 5.2 (T127L31) + NEMO3.2 ocean + SURFEX/ISBA land + GELATO4 sea ice
- **Primary documentation paper(s):** Voldoire, A., et al. (2013). The CNRM-CM5.1 global climate model: description and basic evaluation. *Clim. Dyn.* 40(9–10), 2091–2121. doi:10.1007/s00382-011-1259-y [voldoire_cnrm_2013 *(add)*]
- **Forcing-specific reference(s):** Voldoire et al. 2013; Michou et al. 2011 for chemistry

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std | TV | Meinshausen2011 (expected; not confirmed by surviving claims) | meinshausen_rcp_2011 | meinshausen_rcp_2011 | |
| O  | Ozone | Cionni et al. 2011 | ✓exc | TV+ | MOBIDIC 2-D zonal linearized chemistry scheme (Cariolle & Teyssèdre 2007) — ozone is a PROGNOSTIC variable in ARPEGE | Voldoire et al. 2013 | voldoire_cnrm_2013 *(add)* | Confirmed 1-0 high conf; Voldoire2013 verbatim: "ozone-mixing ratio is a prognostic variable with photochemical production and loss rates computed by a 2-D zonal chemistry model (MOBIDIC, Cariolle and Teyssedre 2007)"; linearized interactive chemistry, not full 3D; exceeds Cionni2011 std |
| SD | Sulphate direct | Lamarque et al. 2010 | ✗dev | TV | Prescribed OD pre-computed from external LMDZ-INCA simulation (Lamarque2010 emissions as input); ODs evolve following LMDZ-INCA HIST run — NOT Lamarque2010-OD applied directly | Voldoire et al. 2013 | voldoire_cnrm_2013 *(add)* | Confirmed 1-0 high conf; Voldoire2013 verbatim: "optical depths of the five types of tropospheric aerosols are taken from an LMDZ-INCA simulation forced with CMIP5 prescribed emissions…sulphate, organic and black carbon aerosols optical depths evolve following the LMDZ-INCA HIST simulation" |
| SI | Sulphate indirect | Model-dependent | ? | ? | Likely included in LMDZ-INCA OD fields (1st indirect); unconfirmed from CNRM primary source | — | — | IPSL uses 1st indirect via LMDZ with INCA concentrations; CNRM may be similar but not confirmed |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev | TV | As SD — pre-computed from LMDZ-INCA HIST run with Lamarque2010 emissions | Voldoire et al. 2013 | voldoire_cnrm_2013 *(add)* | Same LMDZ-INCA offline pre-computation as SD/OC |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev | TV | As SD — pre-computed from LMDZ-INCA HIST run with Lamarque2010 emissions | Voldoire et al. 2013 | voldoire_cnrm_2013 *(add)* | |
| MD | Mineral dust | — | ✗dev | FXc | Fixed at pre-industrial level in historical — NOT time-varying from Lamarque2010 | Voldoire et al. 2013 | voldoire_cnrm_2013 *(add)* | Confirmed 1-0 high conf; Voldoire2013: "sea salt and dust fixed at pre-industrial in historical" |
| SS | Sea salt | — | ✗dev | FXc | Fixed at pre-industrial level; re-scaled to Tegen et al. 1997 global-mean target — NOT time-varying | Voldoire et al. 2013 | voldoire_cnrm_2013 *(add)*; tegen_contribution_1997 | Confirmed 1-0 high conf; Voldoire2013: "sea salt aerosols…re-scaled to obtain a global averaged optical depth equal to the value obtained with the Tegen data (Tegen et al. 1997)" |
| LU | Land-use change | Hurtt et al. 2011 | ✗dev | n/a | Explicitly excluded — "in the default version, land use changes are not taken into account" | Voldoire et al. 2013 | voldoire_cnrm_2013 *(add)* | Confirmed 1-0 high conf; second confirmed LU exclusion (after CSIRO-Mk3.6.0) |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | CMIP3 fixed-solar corrected; specific dataset unconfirmed in surviving claims | — | — | Solar corrected from CMIP3 CNRM-CM3 fixed-1370 W m⁻²; dataset not specified in workflow output |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✗dev | TV | Ammann et al. 2007 (NCAR) stratospheric aerosol optical thickness — NOT Sato-updated | Voldoire et al. 2013 | voldoire_cnrm_2013 *(add)*; ammann_volcanic_2007 *(add)* | Confirmed 1-0 high conf; Voldoire2013 verbatim: "volcanic eruptions…prescribing the zonal mean optical thicknesses…as diagnosed from Amman et al. (2007)"; distinct NCAR reconstruction ≠ GISS Sato-updated; CMIP3 no-volcanic error corrected but replaced with non-standard dataset |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | Free-running coupled model |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle). Standard 12 keys only.

### Confirmed deviations from Taylor 2012
1. **O = ✓exc**: MOBIDIC 2-D linearized interactive ozone (prognostic in ARPEGE); exceeds Cionni2011 standard.
2. **SD/BC/OC = ✗dev**: Prescribed OD from external LMDZ-INCA pre-computation (Lamarque2010 emissions as inputs to offline chemistry run, then ODs extracted) — not Lamarque2010-OD applied directly.
3. **MD = ✗dev**: Dust fixed at pre-industrial (FXc).
4. **SS = ✗dev**: Sea salt fixed at pre-industrial, scaled to Tegen1997 global mean (FXc).
5. **LU = ✗dev**: Explicitly excluded — "in the default version, land use changes are not taken into account."
6. **VL = ✗dev**: Ammann et al. 2007 (NCAR) — not Sato-updated (GISS). CMIP3 no-volcanic error corrected but with non-standard dataset.

### CMIP3 CNRM-CM3 comparison
CMIP3 confirmed conflicts: SI=✗(direct-only no-indirect), SO=✗(fixed 1370 W m⁻²), VL=✗(no volcanic).
CMIP5 status: SO corrected (time-varying); VL corrected in principle (time-varying Ammann2007 volcanic applied) but still deviates from Taylor2012 standard (Ammann2007 ≠ Sato-updated). O upgraded to interactive (exc). Aerosol scheme changed (LMDZ-INCA offline OD, dev). LU added as a new deviation.

### Provenance
- Durack et al. 2016 model list: included
- Stage 6 workflow: wf_affaeb54-772 (2026-06-21) — 14/14 claims confirmed 1-0; Voldoire2013 primary source accessed directly
