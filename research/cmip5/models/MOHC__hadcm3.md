# HadCM3 — UKMO (UK Met Office Hadley Centre, UK)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ukmo_hadcm3 — same model; HadCM3 was also submitted to CMIP3 as ukmo_hadcm3. Key question: were forcing datasets updated to CMIP5 standards?
- **Model family / lineage:** HadCM3 = HadAM3 atmosphere (N48 T42 L19) + HadOM3 ocean. Older-generation model (Gordon et al. 2000); used extensively for CMIP3 detection-attribution studies (Stott et al. 2000, Tett et al. 2002). Same generation as CMIP3 — NOT a member of the HadGEM2 family.
- **Atmosphere / ocean components:** HadAM3 (N48, 19 levels) + HadOM3 (1.25°×1.25°, 20 levels)
- **Primary documentation paper(s):** Gordon, C., et al. (2000). The simulation of SST, sea ice extents and ocean heat transports in a version of the Hadley Centre coupled model without flux adjustments. *Clim. Dyn.* 16, 147–168. doi:10.1007/s003820050010 [gordon_hadcm3_2000 *(add)*]
- **Forcing-specific reference(s):** Johns, T.C., et al. (2003). Anthropogenic climate change for 1860 to 2100 simulated with the HadCM3 model under updated emissions scenarios. *Clim. Dyn.* 20, 583–612. doi:10.1007/s00382-002-0296-y [johns_hadcm3_2003 — already in bib-to-add Stage 8 CMIP3 section]

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**NOTE: Stage 8 workflow (wf_71ff96d7-487) DID NOT confirm any forcing verdicts for HadCM3 — all 14 surviving verified claims concern HadGEM2-ES only. HadCM3 is the same model as CMIP3 ukmo_hadcm3 and it is unknown whether CMIP5 dataset updates (Meinshausen2011/Cionni2011/Lamarque2010/Wang2005) were applied. All cells remain "?" pending targeted read.**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | ? | CMIP3-era or updated Meinshausen2011? Key open question for CMIP5 submission | — | — | HadCM3 is same model as CMIP3; may carry over CMIP3-era GHG datasets or update to Meinshausen2011 |
| O  | Ozone | Cionni et al. 2011 | ? | ? | Cionni2011 (std) or CMIP3-era Haigh ozone climatology? | — | — | CMIP3 HadCM3 used a prescribed ozone climatology |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | ? | CLASSIC sulphate scheme; which aerosol dataset — Lamarque2010-OD or CMIP3-era Mitchell&Johns1997? | — | — | CMIP3 HadCM3 used Mitchell & Johns 1997 sulphate |
| SI | Sulphate indirect | Model-dependent | ? | ? | CLASSIC delta-albedo indirect (sulphate-only, Tett2002 method) — confirm for CMIP5 | — | — | CMIP3: Tett2002 offline delta-albedo indirect method |
| BC | Black carbon | Lamarque et al. 2010 | ? | ? | Not in CMIP3 HadCM3 — was it added for CMIP5? | — | — | Jones2011 Fig.13 describes HadCM3 solar (LBB95) but does not document BC treatment |
| OC | Organic carbon | Lamarque et al. 2010 | ? | ? | As BC — likely absent | — | — | |
| MD | Mineral dust | — | ? | ? | Not expected | — | — | |
| SS | Sea salt | — | ? | ? | Not expected | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | Not in CMIP3 HadCM3 — was it added for CMIP5? | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | CMIP3 HadCM3 used Lean 1995 (LBB95; TSI increase 2.95 W/m² Maunder-to-modern) — was it updated to Lean2009/Wang2005 for CMIP5? | — | — | Jones2011 Fig.13 caption: "LBB95" labels HadCM3 data point (Maunder-to-modern = 2.95 W/m²) |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | CMIP3 HadCM3 used Sato1993 in attribution ensemble (Stott2000); confirm for CMIP5 20C3M | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied. Gordon et al. (2000) title explicitly "without flux adjustments"; confirmed in abstract and Sect. 1. CMIP5 resubmission retained same free-running configuration. | gordon_hadcm3_2000 *(add)* | gordon_hadcm3_2000 | **Confirmed absent.** Second-pass 2026-06-21. |

### ESM-specific forcing inputs
Not an ESM — no active carbon cycle. Standard 12 keys only.

### Key open questions (needs targeted PDF read)
1. Were GHG/ozone datasets updated to Meinshausen2011/Cionni2011 for CMIP5, or are CMIP3-era datasets carried over?
2. Was solar updated from Lean1995 (2.95 W/m² Maunder-to-modern) to Wang2005/Lean2009 (1.11 W/m²)?
3. Was BC/OC included in CMIP5 (absent in CMIP3)?
4. Was land-use change (Hurtt2011) added for CMIP5?
5. Primary CMIP5-specific HadCM3 paper needed — search ES-DOC and PCMDI CMIP5 for HadCM3 historical forcing documentation.
6. ~~FC: RESOLVED (second-pass 2026-06-21) — confirmed n/a from Gordon 2000 "without flux adjustments."~~

### Provenance
- Durack et al. 2016 model list: included
- Stage 8 workflow: wf_71ff96d7-487 (2026-06-21); HadCM3 NOT addressed by surviving verified claims — G/O/SD/SI/BC/OC/MD/SS/LU/SO/VL all open
- Second-pass 2026-06-21: FC resolved n/a from Gordon 2000
