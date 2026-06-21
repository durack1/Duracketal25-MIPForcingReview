# bcc_csm1_1_m — BCC (Beijing Climate Center, China Meteorological Administration)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none (BCC did not contribute to CMIP3 in the Durack et al. 2016 list)
- **Model family / lineage:** BCC-CSM1.1-m = moderate-resolution variant of BCC-CSM1.1. Atmosphere: BCC-AGCM2.0.1 (T106, ~1.1°) — same physics as BCC-CSM1.1 but higher resolution. All forcing datasets expected identical to bcc-csm1-1; only resolution and dynamics differ.
- **Atmosphere / ocean components:** BCC-AGCM2.0.1 atmosphere (T106, ~1.1°, 26 levels) + MOM4 L40 ocean + CLM3 land + sea ice
- **Primary documentation paper(s):** Wu, T., et al. (2014). An overview of BCC climate system model development and application for climate change studies. *J. Meteor. Res.* 28(1), 34–56. doi:10.1007/s13351-014-3041-7 [wu_overview_2014 *(add)*]
- **Forcing-specific reference(s):** As bcc-csm1-1 (Wu et al. 2014); all forcings expected identical to bcc-csm1-1

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries expected identical to bcc-csm1-1 (same BCC-CSM1.1 family physics, higher T106 resolution). Wu2014 p.43 (Section 3.1.1) explicitly states "both BCC-CSM1.1 and BCC-CSM1.1(m)" were forced identically: "Given external forcing by observed GHGs, natural and anthropogenic aerosols, volcanic eruptions, total column ozone, and solar activity". Not independently verified beyond this statement.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | As bcc-csm1-1 (inferred from same BCC family) | — | — | Wu2014 p.43: "both BCC-CSM1.1 and BCC-CSM1.1(m)" forced by "observed GHGs". Specific dataset unconfirmed; as bcc-csm1-1. |
| O  | Ozone | Cionni et al. 2011 | ? | TV | As bcc-csm1-1 (inferred from same BCC family) | — | — | Wu2014 p.43: "both BCC-CSM1.1 and BCC-CSM1.1(m)" forced by "total column ozone". Specific dataset unconfirmed; as bcc-csm1-1. |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | TV | As bcc-csm1-1 (inferred from same BCC family) | — | — | Wu2014 p.43: "both BCC-CSM1.1 and BCC-CSM1.1(m)" forced by "natural and anthropogenic aerosols". Specific dataset unconfirmed; as bcc-csm1-1. |
| SI | Sulphate indirect | Model-dependent | ? | ? | As bcc-csm1-1 (inferred from same BCC family) | — | — | As bcc-csm1-1; unconfirmed from Wu2014. |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | As bcc-csm1-1 (inferred from same BCC family) | — | — | As bcc-csm1-1; unconfirmed from Wu2014. |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | As bcc-csm1-1 (inferred from same BCC family) | — | — | As bcc-csm1-1; unconfirmed from Wu2014. |
| MD | Mineral dust | — | ? | ? | As bcc-csm1-1 (inferred from same BCC family) | — | — | As bcc-csm1-1; unconfirmed from Wu2014. |
| SS | Sea salt | — | ? | ? | As bcc-csm1-1 (inferred from same BCC family) | — | — | As bcc-csm1-1; unconfirmed from Wu2014. |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | As bcc-csm1-1 (inferred from same BCC family) | — | — | Wu2014 does NOT mention land-use change. As bcc-csm1-1; unconfirmed. |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | As bcc-csm1-1 (inferred from same BCC family) | — | — | Wu2014 p.43: "both BCC-CSM1.1 and BCC-CSM1.1(m)" forced by "solar activity". Specific dataset unconfirmed; as bcc-csm1-1. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | As bcc-csm1-1 (inferred from same BCC family) | — | — | Wu2014 p.43: "both BCC-CSM1.1 and BCC-CSM1.1(m)" forced by "volcanic eruptions". Specific dataset unconfirmed; as bcc-csm1-1. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM. Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 4 workflow: wf_6432ada7-087 — no CMIP5-specific findings; all entries inferred from bcc-csm1-1 (same physics)
- Wu2014 PDF read: Wuetal14JMetRes-BCC-CSM1Overview.pdf — Wu2014 explicitly confirms BCC-CSM1.1(m) and BCC-CSM1.1 used identical external forcing types (p.43, Section 3.1.1); specific datasets unconfirmed
- Next step: as bcc-csm1-1 — Xin et al. 2013c (Adv. Climate Change Res.) or ES-DOC CMIP5 documentation
