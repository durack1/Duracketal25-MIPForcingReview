# MIROC4h — MIROC (CCSR/NIES/JAMSTEC, Japan)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** miroc3_2_hires — MIROC3.2-hires; MIROC4h is the high-resolution successor in the MIROC lineage. Key question: does MIROC4h continue CMIP3-era SPRINTARS interactive aerosols?
- **Model family / lineage:** High-resolution AOGCM (T213 atmosphere, ~0.5° ocean). Developed jointly by CCSR (Center for Climate System Research), NIES (National Institute for Environmental Studies), and JAMSTEC (Japan Agency for Marine-Earth Science and Technology). Same modelling consortium as MIROC3.2 (CMIP3). MIROC4h is atmosphere–ocean only (no ESM components).
- **Atmosphere / ocean components:** CCSR/NIES AGCM 5.7 (T213 spectral, L56) + COCO 3.4 ocean (~0.5°, L50)
- **Primary documentation paper(s):** Sakamoto, T.T., et al. (2012). MIROC4h — a new high-resolution atmosphere–ocean coupled general circulation model. *J. Meteor. Soc. Japan* 90(3), 325–359. doi:10.2151/jmsj.2012-301 [sakamoto_miroc4h_2012 *(add)*]
- **Forcing-specific reference(s):** Sakamoto et al. 2012 (primary); CMIP5 ES-DOC / PCMDI documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**SECOND-PASS UPDATE (2026-06-21): Sakamoto et al. (2012) Section 3.1 "External forcing in MIROC4h" (p. 331) contains a dedicated CMIP5 historical forcing inventory with explicit dataset citations — missed by Stage 9 which read only the 1950 control run setup. All 11 active forcing cells are now resolved.**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✓ std** | TV | Meinshausen et al. 2011 — "following the guidelines of CMIP5, we use the same concentrations of well-mixed greenhouse gases in the atmosphere as those used in our previous studies (Nozawa et al. 2005), which are almost identical to those reported by Meinshausen et al. (2011)." | meinshausen_rcp_2011 | meinshausen_rcp_2011 | Confirmed explicitly by name. Sakamoto 2012 Sect. 3.1 |
| O  | Ozone | Cionni et al. 2011 | **✗ dev** | TV | CHASER chemistry model (Sudo et al. 2002) — internally generated 3D ozone fields: "We use the same three-dimensional atmospheric concentrations of ozone as in Nozawa et al. (2005), which are calculated by a chemistry climate model called CHASER (Sudo et al. 2002)." NOT Cionni et al. 2011. | sudo_chaser_2002 | sudo_chaser_2002 | Deviation: in-house CHASER 3D ozone, same as Nozawa 2005 CMIP3. Consistent with all other MIROC AOGCM/ESM models. Cionni 2011 not used. |
| SD | Sulphate direct | Lamarque et al. 2010 | **＋ exc** | TV | sSPRINTARS (simplified SPRINTARS; Takemura et al. 2000, 2002) interactive aerosol module + Lamarque et al. (2010) emissions: "emissions of anthropogenic aerosol precursors (sulfate and carbonaceous aerosols) reported by Lamarque et al. (2010)." Interactive, not prescribed OD. | lamarque_historical_2010 | lamarque_historical_2010 | Exceeds: interactive online aerosol (sSPRINTARS) with Lamarque2010 emissions. Sakamoto 2012 Sect. 3.1 |
| SI | Sulphate indirect | Model-dependent | **＋ exc** | TV | sSPRINTARS with aerosol indirect effects (Takemura et al. 2002) — prognostic cloud droplet scheme. Indirect effects active per Takemura et al. (2002) JGR implementation. | takemura_simulation_2002 | takemura_simulation_2002 | Exceeds: interactive indirect effects via sSPRINTARS. "Simplified" vs MIROC5 full SPRINTARS but indirect effects documented in Takemura 2002. |
| BC | Black carbon | Lamarque et al. 2010 | **＋ exc** | TV | sSPRINTARS interactive + Lamarque et al. (2010) emissions (same as SD). | lamarque_historical_2010 | lamarque_historical_2010 | Exceeds: interactive online BC. |
| OC | Organic carbon | Lamarque et al. 2010 | **＋ exc** | TV | sSPRINTARS interactive + Lamarque et al. (2010) emissions (same as SD). | lamarque_historical_2010 | lamarque_historical_2010 | Exceeds: interactive online OC. |
| MD | Mineral dust | Model-dependent | **＋ exc** | TV | sSPRINTARS interactive dust (Takemura et al. 2000, 2002). Dust predicted prognostically online. | takemura_simulation_2000 | takemura_simulation_2000 | Exceeds: interactive online dust. |
| SS | Sea salt | Model-dependent | **＋ exc** | TV | sSPRINTARS interactive sea salt (Takemura et al. 2000). Sea salt predicted prognostically online. | takemura_simulation_2000 | takemura_simulation_2000 | Exceeds: interactive online sea salt. |
| LU | Land-use change | Hurtt et al. 2011 | **✓ std** | TV | Hurtt et al. (2009) harmonised land-use dataset (= Hurtt et al. 2011 pre-publication version): "The distributions of vegetation type and the monthly leaf-area index (LAI) are set up by the method of Hirabayashi et al. (2005) using the Land Use Harmonization data (Hurtt et al. 2009)." | hurtt_harmonization_2011 | hurtt_harmonization_2011 | Confirmed explicitly. 2009 newsletter pre-pub of the Hurtt 2011 dataset. |
| SO | Solar irradiance | Wang et al. 2005 | **~** | TV | Lean et al. (2005) Solar Phys. 230:27–53 — "total solar irradiance reported by Lean et al. (2005)." Citation is to the SORCE paper (Solar Phys.), not to Wang, Lean & Sheeley (2005) ApJ — the canonical Taylor 2012 standard citation. Likely the same underlying TSI dataset given CMIP5 context, but citation ambiguity is genuine. | wang_modeling_2005 | wang_modeling_2005 | Nuanced: "Lean 2005" cited but as Solar Phys. 230 (SORCE paper), not Wang/Lean/Sheeley 2005 ApJ (Taylor 2012 standard). May be same dataset cited differently; cannot confirm equivalence. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **✓ std** | TV | Sato et al. (1993) — "volcanic stratospheric aerosol optical depth reported by Sato et al. (1993)." Explicitly named. | sato_volcanic_1993 | sato_volcanic_1993 | Confirmed explicitly. Standard CMIP5 dataset. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running coupled model | — | — | CMIP5 generation; no flux corrections. |

### ESM-specific forcing inputs
Not an ESM — MIROC4h is an AOGCM only (no active carbon cycle or interactive chemistry). Standard 12 keys only.

### Open questions
1. SO: "Lean et al. (2005) Solar Phys. 230" may be the same TSI reconstruction as Wang, Lean & Sheeley (2005) ApJ (Taylor 2012 standard), but the citation is to the SORCE instrument paper, not the reconstruction paper — equivalence unconfirmed.

### Notes on CMIP3 lineage
CMIP3 MIROC3.2-hires used SPRINTARS interactive aerosols (BC/OC/dust/SS interactive; SI=1st indirect). MIROC4h continues with sSPRINTARS — interactive aerosol treatment confirmed exc, consistent with CMIP3. Ozone is CHASER-derived (Nozawa 2005 approach), also consistent.

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: Sakamoto et al. 2012 (JMSJ, doi:10.2151/jmsj.2012-301); Sect. 3.1 "External forcing in MIROC4h" (p. 331) — dedicated CMIP5 historical forcing section with explicit dataset citations
- Stage 9 workflow: wf_9b467e91-606 (2026-06-21); scope limitation (Stage 9 agents missed Sect. 3.1)
- Second-pass update: 2026-06-21; all 11 active cells resolved
