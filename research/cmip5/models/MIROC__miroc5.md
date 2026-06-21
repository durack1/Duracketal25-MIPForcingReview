# MIROC5 — MIROC (CCSR/NIES/JAMSTEC, Japan)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** miroc3_2_medres — MIROC3.2-medres; MIROC5 is the updated medium-resolution AOGCM successor.
- **Model family / lineage:** Updated AOGCM (T85 atmosphere L40, MOM4-class ocean ~1°). Significant update from MIROC3.2: new atmospheric dynamical core, revised physics, updated ocean. CCSR/NIES/JAMSTEC consortium. MIROC5 is atmosphere–ocean only (no ESM components).
- **Atmosphere / ocean components:** CCSR/NIES AGCM 5.7 (T85 spectral, L40) + COCO 4.5 ocean (~1°, L50)
- **Primary documentation paper(s):** Watanabe, M., et al. (2010). Improved climate simulation by MIROC5: mean states, variability, and climate sensitivity. *J. Climate* 23(23), 6312–6335. doi:10.1175/2010JCLI3679.1 [watanabe_improved_2010 *(add)*]
- **Forcing-specific reference(s):** Watanabe et al. 2010 (primary); CMIP5 ES-DOC / PCMDI documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**STAGE 9 SCOPE LIMITATION (wf_9b467e91-606, 2026-06-21): Watanabe M., et al. (2010; J. Climate) — the primary MIROC5 reference — produced zero surviving forcing-level claims. The paper characterises MIROC5's mean state, variability, and climate sensitivity in AMIP-style and piControl runs; it does NOT document CMIP5 historical forcing protocols in the level of detail needed for per-cell verdicts. All 12 forcing cells remain "?". Inference (unconfirmed): SPRINTARS aerosols likely continue (given MIROC-ESM/CHEM Stage 9 confirmation), but NOT confirmed for the AOGCM-only MIROC5. Requires ES-DOC/PCMDI metadata or dedicated CMIP5 historical-run documentation.**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | ? | ? | — | — | Standard expected (Meinshausen2011) |
| O  | Ozone | Cionni et al. 2011 | ? | ? | ? | — | — | No interactive chemistry → Cionni2011 expected (std); confirm |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | ? | ? | — | — | SPRINTARS (exc) or prescribed-OD (std)? New aerosol scheme in MIROC5? |
| SI | Sulphate indirect | Model-dependent | ? | ? | ? | — | — | SPRINTARS 1st indirect (from CMIP3)? Test continuation or switch. |
| BC | Black carbon | Lamarque et al. 2010 | ? | ? | ? | — | — | SPRINTARS interactive (exc) or prescribed Lamarque2010-OD (std)? |
| OC | Organic carbon | Lamarque et al. 2010 | ? | ? | ? | — | — | As BC — SPRINTARS or prescribed? |
| MD | Mineral dust | Model-dependent | ? | ? | ? | — | — | SPRINTARS interactive dust (exc)? Or excluded? |
| SS | Sea salt | Model-dependent | ? | ? | ? | — | — | SPRINTARS interactive sea salt (exc)? Or excluded? |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | ? | — | — | Standard expected (Hurtt2011) |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | ? | — | — | Wang2005 (std) expected; CMIP3 MIROC3.2 had genuine SO. Confirm update. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | ? | — | — | Sato-updated (std) expected; CMIP3 MIROC3.2 had genuine VL. Test Sato-updated vs original. |
| FC | Flux corrections | Not expected | n/a | n/a | Not expected — CMIP5 generation free-running model | — | — | CMIP5 generation; no flux corrections expected |

### ESM-specific forcing inputs
Not an ESM — MIROC5 is an AOGCM only (no active carbon cycle or interactive chemistry). Standard 12 keys only.

### Key open questions (Stage 9 scope limitation — all 12 cells remain unresolved)
1. Aerosol scheme: Does MIROC5 continue SPRINTARS (exc) or switch to prescribed Lamarque2010-OD (std)? [SPRINTARS confirmed for MIROC-ESM/CHEM; unclear if AOGCM-only MIROC5 differs]
2. Ozone: Cionni2011 (std)? [No interactive chemistry — most likely; but not confirmed]
3. Solar: Wang2005 (std)? [Lean2005 deviation refuted for MIROC-ESM in Stage 9; MIROC5 claim not separately tested]
4. Volcanic: Sato1993+updates (std)? [Confirmed for MIROC-ESM; likely same for MIROC5]
5. MIROC4h vs MIROC5: are the forcing datasets identical?
6. Recommended next step: ES-DOC experiment detail for MIROC5 historical run, or PCMDI CMIP5 metadata

### Notes on CMIP3 lineage
CMIP3 MIROC3.2-medres used SPRINTARS interactive aerosols (BC/OC/dust/SS all interactive; SI=1st indirect). MIROC5 is a major architectural update — the aerosol scheme may have changed. Watanabe et al. 2010 is the primary paper to check.

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: Watanabe M. et al. 2010 (J. Climate; primary paper — mean state/variability focus, no CMIP5 historical forcing documentation); CMIP3 Stage 9 results for miroc3_2_medres
- Stage 9 workflow: wf_9b467e91-606 (2026-06-21); zero surviving claims (scope limitation — Watanabe M. 2010 does not document CMIP5 historical forcings at per-cell resolution)
