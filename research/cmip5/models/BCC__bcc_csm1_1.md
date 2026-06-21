# bcc_csm1_1 — BCC (Beijing Climate Center, China Meteorological Administration)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none (BCC did not contribute to CMIP3 in the Durack et al. 2016 list)
- **Model family / lineage:** BCC-CSM1.1 = BCC Climate System Model version 1.1. Atmosphere: BCC-AGCM2.0 (based on CAM2.0/CCM3 framework, significantly modified). Lower-resolution variant (T42 ~2.8°). Aerosol and ozone treatment are the key questions for this model — BCC-AGCM may use prescribed OD or have its own aerosol treatment.
- **Atmosphere / ocean components:** BCC-AGCM2.0 atmosphere (T42, ~2.8°, 26 levels) + MOM4 L40 ocean + CLM3 land + sea ice
- **Primary documentation paper(s):** Wu, T., et al. (2014). An overview of BCC climate system model development and application for climate change studies. *J. Meteor. Res.* 28(1), 34–56. doi:10.1007/s13351-014-3041-7 [wu_overview_2014 *(add)*]
- **Forcing-specific reference(s):** Wu et al. 2014

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | ? | — | — | UNVERIFIED. NOTE: Wu2019/2020 (GMD) describe BCC-CSM2/BCC-ESM1 (CMIP6) using Meinshausen 2017 — NOT this model. |
| O  | Ozone | Cionni et al. 2011 | ? | TV | ? | — | — | UNVERIFIED. |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | TV | ? | — | — | UNVERIFIED. |
| SI | Sulphate indirect | Model-dependent | ? | ? | ? | — | — | UNVERIFIED. |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | ? | — | — | UNVERIFIED. |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | ? | — | — | UNVERIFIED. |
| MD | Mineral dust | — | ? | ? | ? | — | — | |
| SS | Sea salt | — | ? | ? | ? | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? std | TV | ? | hurtt_harmonization_2011 | hurtt_harmonization_2011 | UNVERIFIED. |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | ? | — | — | UNVERIFIED. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | ? | — | — | UNVERIFIED. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM (BCC-CSM1.1 is an AOGCM). Standard 12 keys only.

### BCC model lineage note
bcc-csm1-1 → BCC-CSM2-MR (Wu et al. 2019 GMD) → BCC-ESM1 (Wu et al. 2020 GMD). The CMIP6 papers (Wu2019/2020) describe a different model generation using CMIP6 forcing datasets (Meinshausen 2017 GHGs, CMIP6 anthropogenic aerosol properties). **These MUST NOT be used to infer CMIP5 bcc-csm1-1 forcing provenance** — confirmed 1-0 by Stage 4 workflow adversarial check. Wu et al. 2014 (Wuetal14JMetRes-BCC-CSM1Overview.pdf in /resources) and Xin et al. 2013 (ScienceDirect, HTTP 403 in Stage 4 workflow) are the correct CMIP5-era primary sources.

### Open questions
1. All 12 forcing keys unresolved — needs Wu2014 PDF direct read (/resources/Wuetal14JMetRes-BCC-CSM1Overview.pdf)
2. **Risk**: BCC-AGCM2.0 is based on CAM2.0/CCM3 framework — possibly follows Cionni2011 and Lamarque2010-OD (std), but unconfirmed
3. Xin, X.-G., et al. (2013). How well does BCC_CSM1.1 reproduce the 20th century climate change over China? *Atmos. Ocean. Sci. Lett.* 6(1). doi:10.1080/16742834.2013.11447053 — alternate primary source (HTTP 403 in Stage 4; try different access route)

### Provenance
- Durack et al. 2016 model list: included
- Stage 4 workflow: wf_6432ada7-087 — no CMIP5-specific findings; all entries remain ? 
- Critical source to read: Wuetal14JMetRes-BCC-CSM1Overview.pdf (in /resources)
