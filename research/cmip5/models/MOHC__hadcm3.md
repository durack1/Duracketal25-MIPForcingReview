# HadCM3 — UKMO (UK Met Office Hadley Centre, UK)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ukmo_hadcm3 — same model; HadCM3 was also submitted to CMIP3 as ukmo_hadcm3. Key question: were forcing datasets updated to CMIP5 standards?
- **Model family / lineage:** HadCM3 = HadAM3 atmosphere (N48 T42 L19) + HadOM3 ocean. Older-generation model (Gordon et al. 2000); used extensively for CMIP3 detection-attribution studies (Stott et al. 2000, Tett et al. 2002).
- **Atmosphere / ocean components:** HadAM3 (N48, 19 levels) + HadOM3 (1.25°×1.25°, 20 levels)
- **Primary documentation paper(s):** Gordon, C., et al. (2000). The simulation of SST, sea ice extents and ocean heat transports in a version of the Hadley Centre coupled model without flux adjustments. *Clim. Dyn.* 16, 147–168. doi:10.1007/s003820050010
- **Forcing-specific reference(s):** Johns, T.C., et al. (2003). Anthropogenic climate change for 1860 to 2100 simulated with the HadCM3 model under updated emissions scenarios. *Clim. Dyn.* 20, 583–612. doi:10.1007/s00382-002-0296-y [johns_hadcm3_2003]

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | ? | CMIP3-era or updated Meinshausen2011? Key question for CMIP5 submission | — | — | HadCM3 is the same model as CMIP3; may carry over CMIP3-era GHG datasets or update to Meinshausen2011 |
| O  | Ozone | Cionni et al. 2011 | ? | ? | Cionni2011 (std) or CMIP3-era ozone climatology? | — | — | |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | ? | CLASSIC sulphate scheme; which dataset? | — | — | CMIP3 HadCM3 used Mitchell & Johns 1997 sulphate |
| SI | Sulphate indirect | Model-dependent | ? | ? | CLASSIC delta-albedo indirect (sulphate-only, Tett2002 method) — confirm for CMIP5 | — | — | CMIP3: Tett2002 offline delta-albedo method |
| BC | Black carbon | Lamarque et al. 2010 | ? | ? | Not in CMIP3 HadCM3 — was it added for CMIP5? | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | ? | As BC | — | — | |
| MD | Mineral dust | — | ? | ? | Not expected | — | — | |
| SS | Sea salt | — | ? | ? | Not expected | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | Not in CMIP3 HadCM3 — was it added? | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | CMIP3 used Lean 1995 — was it updated for CMIP5? | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | | — | — | |
| FC | Flux corrections | Not expected | ? | ? | CMIP3 HadCM3 had no flux corrections (Gordon 2000 confirms) | — | — | |

### ESM-specific forcing inputs
Not an ESM — no active carbon cycle. Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 8 workflow: pending
