# ipsl_cm5a_lr — IPSL (Institut Pierre-Simon Laplace, France)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ipsl_cm4 — NOTE: CMIP3 IPSL-CM4 had 2 confirmed conflicts: SO=✗(fixed 1365 W m⁻²), VL=✗(no natural forcings). Also SI=Y (first indirect via Boucher-Lohmann 1995 formula D — confirmed ✓ for CMIP3). Test whether SO/VL corrected in CMIP5.
- **Model family / lineage:** IPSL-CM5A-LR = LMDZ5A atmosphere (3.75°×1.875°L39) + NEMO3.2 ocean + ORCHIDEE land + LIM2 sea ice + INCA aerosol-chemistry. LR = low resolution. CM5A uses "new physics" LMDZ5A parameterisations. Related to IPSL-CM5A-MR (medium resolution) and IPSL-CM5B-LR (different physics).
- **Atmosphere / ocean components:** LMDZ5A (3.75°×1.875°L39) + NEMO3.2 + ORCHIDEE + LIM2 + INCA chemistry
- **Primary documentation paper(s):** Dufresne, J.-L., et al. (2013). Climate change projections using the IPSL-CM5 Earth System Model: from CMIP3 to CMIP5. *Clim. Dyn.* 40(9–10), 2123–2165. doi:10.1007/s00382-012-1636-1 [dufresne_ipsl_2013 *(add)*]
- **Forcing-specific reference(s):** Dufresne et al. 2013; Szopa et al. 2013 for chemistry/aerosol

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All three IPSL-CM5 configurations (CM5A-LR, CM5A-MR, CM5B-LR) share IDENTICAL forcing datasets. LMDZ5B (CM5B-LR) changes atmospheric physical parameterisations (boundary layer, convection, cloudiness) but NOT the forcing protocol. Differences are resolution-only (CM5A-MR) or physics-only (CM5B-LR).

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std | TV | Meinshausen2011 (expected; not confirmed by surviving claims) | meinshausen_rcp_2011 | meinshausen_rcp_2011 | |
| O  | Ozone | Cionni et al. 2011 | ✗dev | TV | Offline merged product: LMDz-OR-INCA (troposphere) + LMDz-REPROBUS (stratosphere), merged at 150 ppbv ozone contour (~tropopause), prescribed as time-varying monthly-mean zonal fields — NOT Cionni2011 | Szopa et al. 2013 | szopa_aerosol_2013 *(add)* | Confirmed 1-0 high conf; Szopa2013 verbatim: "INCA (tropospheric) and REPROBUS (stratospheric) ozone fields are then merged with a transition region centered on the tropopause region and averaged over longitudes to produce time-varying zonally-averaged monthly-mean ozone fields"; NOT interactive in the coupled model — prescribed offline (dev, not exc); corrects CMIP3 IPSL-CM4 no-natural-forcing error |
| SD | Sulphate direct | Lamarque et al. 2010 | ✗dev | TV | LMDZ-INCA offline-pre-computed monthly-mean aerosol fields, smoothed with 11-year running mean; Lamarque2010 emissions used as INCA input — NOT Lamarque2010-OD applied directly | Szopa et al. 2013 | szopa_aerosol_2013 *(add)* | Confirmed 1-0 high conf; Szopa2013 verbatim: "past and future evolutions of aerosol distribution are computed using the LMDZ-INCA model…Anthropogenic and biomass burning emissions are provided by Lamarque et al (2010)…computed monthly mean aerosol fields are then smoothed with an 11-year running mean"; offline-derived not Lamarque2010-OD |
| SI | Sulphate indirect | Model-dependent | ✗dev | TV | First indirect (cloud albedo) effect computed online in LMDZ using prescribed INCA aerosol concentrations — NOT Lamarque2010-OD; Boucher-Lohmann approach continues from CMIP3 IPSL-CM4 | Szopa et al. 2013 | szopa_aerosol_2013 *(add)* | 1st indirect active in LMDZ with INCA-prescribed concentrations; ~dev (source is INCA offline, not Lamarque2010-OD std) |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev | TV | As SD — offline LMDZ-INCA computation, 11-yr smoothed, Lamarque2010-emissions as input | Szopa et al. 2013 | szopa_aerosol_2013 *(add)* | |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev | TV | As SD — offline LMDZ-INCA computation, 11-yr smoothed, Lamarque2010-emissions as input | Szopa et al. 2013 | szopa_aerosol_2013 *(add)* | |
| MD | Mineral dust | — | ✗dev | TV | As SD — offline LMDZ-INCA computation, 11-yr smoothed; natural mineral dust emissions in INCA | Szopa et al. 2013 | szopa_aerosol_2013 *(add)* | INCA includes mineral dust; temporally varying from offline run |
| SS | Sea salt | — | ✗dev | TV | As SD — offline LMDZ-INCA computation, 11-yr smoothed; natural sea salt emissions in INCA | Szopa et al. 2013 | szopa_aerosol_2013 *(add)* | INCA includes sea salt; temporally varying from offline run |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | ORCHIDEE land — LU treatment in CMIP5 historical not confirmed from workflow output | — | — | Open question: Dufresne2013 ESM section to be checked for LU source |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | Wang2005 (long-term) + Frohlich & Lean 2004 (solar cycle variability) — combined TSI | Dufresne et al. 2013 | dufresne_ipsl_2013 *(add)*; frohlich_lean_2004 *(add)* | Confirmed 1-0 high conf; Dufresne2013 verbatim: "an estimate of the past solar cycles (Frohlich and Lean 2004) and…an estimate of long term variations (Wang et al. 2005)"; CORRECTS CMIP3 IPSL-CM4 fixed-solar error |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Updated Sato et al. 1993 stratospheric aerosol optical depth — prescription as reduced TSI | Dufresne et al. 2013 | dufresne_ipsl_2013 *(add)* | Confirmed 1-0 high conf; Dufresne2013 verbatim: "aerosol optical depth of volcanic aerosol is an updated version of Sato et al. (1993)"; CORRECTS CMIP3 IPSL-CM4 no-volcanic error; implemented as TSI reduction rather than 3D aerosol field |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
IPSL-CM5A-LR is an ESM (ORCHIDEE active carbon cycle). N-deposition source and CO2 mode (concentration vs emission-driven) not confirmed from Stage 6 workflow — open questions.

### Confirmed deviations from Taylor 2012
1. **O = ✗dev**: Offline merged INCA-trop + REPROBUS-strat ozone, prescribed monthly-mean zonal fields — not Cionni2011.
2. **SD/SI/BC/OC/MD/SS = ✗dev**: All aerosols from offline LMDZ-INCA pre-computation with Lamarque2010 emissions, 11-yr smoothed — not Lamarque2010-OD applied directly. SI computed online in LMDZ from INCA concentrations (dev, not std).
3. **SO = ✓std**: Wang2005 + Frohlich&Lean2004 corrects CMIP3 fixed-solar error.
4. **VL = ✓std**: Sato1993-updated corrects CMIP3 no-volcanic error.

### CMIP3 IPSL-CM4 comparison
CMIP3 confirmed conflicts: SO=✗(fixed 1365 W m⁻²), VL=✗(no natural forcings). Both corrected in CMIP5.
CMIP5 new deviations: O uses INCA+REPROBUS offline (dev from Cionni2011); aerosols all use offline LMDZ-INCA (dev from Lamarque2010-OD).

### Provenance
- Durack et al. 2016 model list: included
- Stage 6 workflow: wf_affaeb54-772 (2026-06-21) — 14/14 claims confirmed 1-0; Szopa2013 + Dufresne2013 primary sources accessed directly
