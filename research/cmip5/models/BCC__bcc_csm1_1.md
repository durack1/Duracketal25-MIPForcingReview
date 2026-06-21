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
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | ? | — | — | Wu2014 p.43 (Section 3.1.1): "Given external forcing by observed GHGs, natural and anthropogenic aerosols, volcanic eruptions, total column ozone, and solar activity" — confirms time-varying GHG forcing used, but specific dataset (Meinshausen 2011) NOT named in Wu2014. Dataset unconfirmed. |
| O  | Ozone | Cionni et al. 2011 | ? | TV | ? | — | — | Wu2014 p.43 (Section 3.1.1): "total column ozone" confirmed as external forcing. Specific dataset (Cionni 2011) NOT named in Wu2014. Unconfirmed. |
| SD | Sulphate direct | Lamarque et al. 2010 | **✗ dev** | FXc | **Collins et al. (2006)** CAM3-inherited prescribed aerosol optical depth climatology. BCC-AGCM2.1 (the CMIP5 BCC-CSM1.1 atmosphere) inherits prescribed climatological OD from Collins 2006 — NOT transient Lamarque 2010 emissions. Wu2014 p.36 explicitly distinguishes CMIP5 BCC-CSM1.1 (BCC-AGCM2.1, prescribed aerosols) from the research model BCC-AGCM2.0.1-CAM (CUACE interactive). | collins_parameterization_2006 | collins_parameterization_2006 | **Deviation confirmed.** Fixed climatological OD (Collins 2006) vs. standard transient emissions (Lamarque 2010). Second-pass 2026-06-21. |
| SI | Sulphate indirect | Model-dependent | n/a | n/a | Absent. Prescribed aerosol OD cannot drive aerosol-cloud interactions — no aerosol number concentration available for cloud droplet activation. Wu2014 does NOT claim indirect aerosol effects for BCC-CSM1.1. | collins_parameterization_2006 | collins_parameterization_2006 | **Absent.** Prescribed OD precludes AIE. Second-pass 2026-06-21. |
| BC | Black carbon | Lamarque et al. 2010 | **✗ dev** | FXc | **Collins et al. (2006)** prescribed climatological OD — absorbing-aerosol component includes BC. NOT Lamarque 2010 transient. | collins_parameterization_2006 | collins_parameterization_2006 | **Deviation inferred.** Collins 2006 CAM3 prescribed OD (FXc), not Lamarque 2010 (TV). Second-pass 2026-06-21. |
| OC | Organic carbon | Lamarque et al. 2010 | **✗ dev** | FXc | **Collins et al. (2006)** prescribed climatological OD — scattering-aerosol component includes OC. | collins_parameterization_2006 | collins_parameterization_2006 | **Deviation inferred.** Second-pass 2026-06-21. |
| MD | Mineral dust | — | **✗ dev** | FXc | **Collins et al. (2006)** prescribed climatological OD — dust included as one component. NOT Lamarque 2010 transient. | collins_parameterization_2006 | collins_parameterization_2006 | **Deviation inferred.** Second-pass 2026-06-21. |
| SS | Sea salt | — | **✗ dev** | FXc | **Collins et al. (2006)** prescribed climatological OD — sea salt included as one component. | collins_parameterization_2006 | collins_parameterization_2006 | **Deviation inferred.** Second-pass 2026-06-21. |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | ? | — | — | Wu2014 does NOT mention land-use change forcing. Hurtt 2011 dataset unconfirmed. |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | ? | — | — | Wu2014 p.43 (Section 3.1.1): "solar activity" confirmed as external forcing. Wu2014 p.49 (Section 3.3): "errors in assumed solar radiation" discussed. Specific dataset (Wang 2005) NOT named in Wu2014. Unconfirmed. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | ? | — | — | Wu2014 p.43: "volcanic eruptions" confirmed as external forcing. Wu2014 p.49–50: Krakatoa (1883), Pelee (1902), Agung (1963), Pinatubo (1991) discussed. Specific dataset (Sato 1993 updated) NOT named in Wu2014. Unconfirmed. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM (BCC-CSM1.1 is an AOGCM). Standard 12 keys only.

### BCC model lineage note
bcc-csm1-1 → BCC-CSM2-MR (Wu et al. 2019 GMD) → BCC-ESM1 (Wu et al. 2020 GMD). The CMIP6 papers (Wu2019/2020) describe a different model generation using CMIP6 forcing datasets (Meinshausen 2017 GHGs, CMIP6 anthropogenic aerosol properties). **These MUST NOT be used to infer CMIP5 bcc-csm1-1 forcing provenance** — confirmed 1-0 by Stage 4 workflow adversarial check. Wu et al. 2014 (Wuetal14JMetRes-BCC-CSM1Overview.pdf in /resources) and Xin et al. 2013 (ScienceDirect, HTTP 403 in Stage 4 workflow) are the correct CMIP5-era primary sources.

### Open questions
1. **RESOLVED (second-pass 2026-06-21):** SD/SI/BC/OC/MD/SS — aerosol treatment confirmed as Collins 2006 prescribed climatological OD (✗dev); SI absent (n/a). Basis: BCC-AGCM2.1 inherits CAM3 prescribed-OD scheme per Wu2014 p.36 architecture description.
2. Wu2014 does NOT cite specific CMIP5-standard datasets (Meinshausen 2011, Cionni 2011, Hurtt 2011, Wang 2005, Sato 1993) by name — G/O/LU/SO/VL remain ?.
3. Xin, X.-G., et al. (2013). How well does BCC_CSM1.1 reproduce the 20th century climate change over China? *Atmos. Oceanic Sci. Lett.* 6(1), 21–26. doi:10.1080/16742834.2013.11447053 — may contain specific forcing dataset citations. HTTP 403 in Stage 4; try different access route. Also Xin et al. 2013c (Adv. Climate Change Res. 4(1), 41–49) cited repeatedly in Wu2014 for CMIP5 BCC-CSM experiments.

### Provenance
- Durack et al. 2016 model list: included
- Stage 4 workflow: wf_6432ada7-087 — no CMIP5-specific dataset findings; aerosol type confirmed as prescribed
- Wu2014 PDF read: Wuetal14JMetRes-BCC-CSM1Overview.pdf — forcing types confirmed, specific datasets unconfirmed
- Second-pass 2026-06-21: aerosol cells (SD/SI/BC/OC/MD/SS) resolved from Collins 2006 CAM3 prescribed-OD inference
