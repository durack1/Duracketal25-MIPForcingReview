# MIROC4h — MIROC (CCSR/NIES/JAMSTEC, Japan)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** miroc3_2_hires — MIROC3.2-hires; MIROC4h is the high-resolution successor in the MIROC lineage. Key question: does MIROC4h continue CMIP3-era SPRINTARS interactive aerosols?
- **Model family / lineage:** High-resolution AOGCM (T213 atmosphere, ~0.5° ocean). Developed jointly by CCSR (Center for Climate System Research), NIES (National Institute for Environmental Studies), and JAMSTEC (Japan Agency for Marine-Earth Science and Technology). Same modelling consortium as MIROC3.2 (CMIP3). MIROC4h is atmosphere–ocean only (no ESM components).
- **Atmosphere / ocean components:** CCSR/NIES AGCM 5.7 (T213 spectral, L56) + COCO 3.4 ocean (~0.5°, L50)
- **Primary documentation paper(s):** Sakamoto, T.T., et al. (2012). MIROC4h — a new high-resolution atmosphere–ocean coupled general circulation model. *J. Meteor. Soc. Japan* 90(3), 325–359. doi:10.2151/jmsj.2012-301 [sakamoto_miroc4h_2012 *(add)*]
- **Forcing-specific reference(s):** Sakamoto et al. 2012 (primary); CMIP5 ES-DOC / PCMDI documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**STAGE 9 SCOPE LIMITATION (wf_9b467e91-606, 2026-06-21): Sakamoto et al. (2012) — the primary MIROC4h reference — documents only a 1950 present-day control run and does NOT describe CMIP5 historical forcing protocols. Zero forcing-level claims survived the Stage 9 adversarial verification (refuted claim: MIROC4h developer consortium identity). All 12 forcing cells remain "?". Inference (unconfirmed): SPRINTARS aerosols are likely (given MIROC-ESM/CHEM confirmation of SPRINTARS continuity from CMIP3), but this is NOT confirmed for the AOGCM-only MIROC4h. Requires ES-DOC/PCMDI metadata or dedicated CMIP5 historical-forcing documentation.**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | ? | ? | — | — | Standard expected (Meinshausen2011) |
| O  | Ozone | Cionni et al. 2011 | ? | ? | ? | — | — | No interactive chemistry → Cionni2011 expected (std); or CMIP3-era prescribed ozone? |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | ? | ? | — | — | CMIP3: SPRINTARS interactive (exc). Test CMIP5 continuation vs prescribed-OD switch. |
| SI | Sulphate indirect | Model-dependent | ? | ? | ? | — | — | CMIP3: SPRINTARS 1st indirect confirmed. Test continuation. |
| BC | Black carbon | Lamarque et al. 2010 | ? | ? | ? | — | — | CMIP3: SPRINTARS BC interactive (exc). Test CMIP5. |
| OC | Organic carbon | Lamarque et al. 2010 | ? | ? | ? | — | — | CMIP3: SPRINTARS OC interactive (exc). Test CMIP5. |
| MD | Mineral dust | Model-dependent | ? | ? | ? | — | — | CMIP3: SPRINTARS interactive dust (exc). Test CMIP5. |
| SS | Sea salt | Model-dependent | ? | ? | ? | — | — | CMIP3: SPRINTARS interactive sea salt (exc). Test CMIP5. |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | ? | — | — | Standard expected (Hurtt2011) |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | ? | — | — | CMIP3: genuine SO confirmed. Test Wang2005 update or CMIP3-era solar carried over. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | ? | — | — | CMIP3: genuine VL confirmed. Test Sato-updated vs HadGEM2-ES-style deviation (Sato1993-original). |
| FC | Flux corrections | Not expected | n/a | n/a | Not expected — CMIP5 generation free-running model | — | — | CMIP5 generation; no flux corrections expected |

### ESM-specific forcing inputs
Not an ESM — MIROC4h is an AOGCM only (no active carbon cycle or interactive chemistry). Standard 12 keys only.

### Key open questions (Stage 9 scope limitation — all 12 cells remain unresolved)
1. Does MIROC4h continue SPRINTARS interactive aerosols from CMIP3 MIROC3.2-hires (→ SD/BC/OC/MD/SS=exc)? [SPRINTARS is confirmed for MIROC-ESM/CHEM but NOT for AOGCM-only MIROC4h]
2. Ozone: Cionni2011 (std) or CMIP3-era prescribed ozone climatology? [No interactive chemistry — std is most likely]
3. Solar: Wang2005 (std) or CMIP3-era solar reconstruction? [Lean2005 deviation refuted for MIROC-ESM in Stage 9; same claim for MIROC4h was also refuted]
4. Volcanic: Sato-updated (std) or deviation? [Sato1993+updates confirmed for MIROC-ESM; likely same for MIROC4h]
5. MIROC4h vs MIROC5: is forcing protocol identical or substantially different?
6. Recommended next step: ES-DOC experiment detail for MIROC4h historical run, or PCMDI CMIP5 metadata

### Notes on CMIP3 lineage
CMIP3 MIROC3.2-hires used SPRINTARS interactive aerosols and had the richest aerosol suite in the CMIP3 review (BC/OC/dust/SS all interactive; SI=1st indirect). MIROC4h may continue this or switch to prescribed Lamarque2010-OD for CMIP5 standardisation.

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: Sakamoto et al. 2012 (JMSJ; primary paper — 1950 control run only, no CMIP5 historical forcing documentation); CMIP3 Stage 9 results for miroc3_2_hires
- Stage 9 workflow: wf_9b467e91-606 (2026-06-21); zero surviving claims (scope limitation — Sakamoto2012 does not document CMIP5 historical forcings); refuted: MIROC4h developer consortium identity claim
