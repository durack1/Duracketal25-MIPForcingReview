# MIROC5 — MIROC (CCSR/NIES/JAMSTEC, Japan)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** miroc3_2_medres — MIROC3.2-medres; MIROC5 is the updated medium-resolution AOGCM successor.
- **Model family / lineage:** Updated AOGCM (T85 atmosphere L40, MOM4-class ocean ~1°). Significant update from MIROC3.2: new atmospheric dynamical core, revised physics, updated ocean. CCSR/NIES/JAMSTEC consortium. MIROC5 is atmosphere–ocean only (no ESM components).
- **Atmosphere / ocean components:** CCSR/NIES AGCM 5.7 (T85 spectral, L40) + COCO 4.5 ocean (~1°, L50)
- **Primary documentation paper(s):** Watanabe, M., et al. (2010). Improved climate simulation by MIROC5: mean states, variability, and climate sensitivity. *J. Climate* 23(23), 6312–6335. doi:10.1175/2010JCLI3679.1 [watanabe_improved_2010 *(add)*]
- **Forcing-specific reference(s):** Watanabe et al. 2010 (primary); CMIP5 ES-DOC / PCMDI documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**SECOND-PASS UPDATE (2026-06-21): Watanabe M. et al. (2010) Section 2e "Control experiment" (pp. 6317–6318) contains explicit CMIP5 historical forcing boundary condition statements — found in second-pass targeted read. All 11 active forcing cells now resolved.**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✓ std** | TV | RCP task group / Meinshausen et al. 2011 via PIK Potsdam URL: "The atmospheric concentrations of well-mixed greenhouse gases and the surface emissions of tropospheric aerosols are provided by the international task group of the Representative Concentration Pathways (RCP) Concentration Calculations and Data (available online at http://www.pik-potsdam.de/~mmalte/rcps/index.htm)." CO2 set to 284.725 ppm for 1850 control. | meinshausen_rcp_2011 | meinshausen_rcp_2011 | Confirmed via PIK Potsdam URL (= Meinshausen 2011 dataset). Watanabe 2010 Sect. 2e. |
| O  | Ozone | Cionni et al. 2011 | **✗ dev** | TV | CHASER chemistry model (Sudo et al. 2002) — internally generated 3D ozone: "The three-dimensional atmospheric concentrations of ozone are precalculated by a chemical AGCM for the study of atmospheric environment and radiative forcing (Sudo et al. 2002), driven with emissions of its precursors in the 1850 condition." NOT Cionni 2011. | sudo_chaser_2002 | sudo_chaser_2002 | Deviation: in-house CHASER pre-computed 3D ozone, NOT Cionni 2011. Same CHASER approach as MIROC4h (Nozawa 2005 lineage). All MIROC models use CHASER-derived ozone. |
| SD | Sulphate direct | Lamarque et al. 2010 | **＋ exc** | TV | SPRINTARS (Spectral Radiation-Transport Model for Aerosol Species; Takemura et al. 2000) interactive online aerosol. Emissions from RCP/Lamarque et al. 2010 (same PIK Potsdam source). "SPRINTARS predicts the mass mixing ratios of the main tropospheric aerosols: carbonaceous (black carbon and organic matter), sulfate, soil dust, and sea salt." Coupled to radiation and cloud microphysics. | lamarque_historical_2010 | lamarque_historical_2010 | Exceeds: interactive SPRINTARS. Watanabe 2010 Sect. 2a(6) and 2e. |
| SI | Sulphate indirect | Model-dependent | **＋ exc** | TV | SPRINTARS "coupled with the radiation and cloud microphysics schemes to calculate the direct and indirect effects of the aerosols. A prognostic scheme for determining the cloud droplet and ice crystal number concentrations is introduced for calculating the aerosol indirect effect." Both 1st and 2nd indirect effects. | takemura_simulation_2000 | takemura_simulation_2000 | Exceeds: explicit 1st and 2nd indirect via SPRINTARS-microphysics coupling. |
| BC | Black carbon | Lamarque et al. 2010 | **＋ exc** | TV | SPRINTARS interactive (same as SD). "Carbonaceous (black carbon and organic matter)" predicted prognostically. | lamarque_historical_2010 | lamarque_historical_2010 | Exceeds: interactive online BC via SPRINTARS. |
| OC | Organic carbon | Lamarque et al. 2010 | **＋ exc** | TV | SPRINTARS interactive (same as SD/BC). | lamarque_historical_2010 | lamarque_historical_2010 | Exceeds: interactive online OC via SPRINTARS. |
| MD | Mineral dust | Model-dependent | **＋ exc** | TV | SPRINTARS interactive — "soil dust" predicted prognostically online. | takemura_simulation_2000 | takemura_simulation_2000 | Exceeds: interactive online dust via SPRINTARS. |
| SS | Sea salt | Model-dependent | **＋ exc** | TV | SPRINTARS interactive — "sea salt" predicted prognostically online. | takemura_simulation_2000 | takemura_simulation_2000 | Exceeds: interactive online sea salt via SPRINTARS. |
| LU | Land-use change | Hurtt et al. 2011 | **✓ std** | TV | Hurtt et al. (2009) harmonised land-use dataset: "The historical land use change is given by the land use harmonization data (Hurtt et al. 2009), in which the cropland fraction is fixed at the value in 1850 for the control simulation." | hurtt_harmonization_2011 | hurtt_harmonization_2011 | Confirmed. 2009 newsletter = Hurtt 2011 pre-publication version. |
| SO | Solar irradiance | Wang et al. 2005 | **~** | TV | Lean et al. (2005) Solar Phys. 230:27–53: "The historical changes in the total solar irradiance... are given by Lean et al. (2005)." Citation is to SORCE paper (Solar Phys.), not Wang, Lean & Sheeley (2005) ApJ (Taylor 2012 standard). TSI set to 1365.7 W/m² for 1850 control. | wang_modeling_2005 | wang_modeling_2005 | Nuanced: "Lean 2005" cited but as Solar Phys. 230 (SORCE paper). May be the same underlying TSI reconstruction; citation equivalence with Wang/Lean/Sheeley (2005) unconfirmed. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **✓ std** | TV | Sato et al. (1993) — "volcanic aerosol optical depth in the stratosphere... are given by... Sato et al. (1993)." Fixed at 1850 value for piControl. | sato_volcanic_1993 | sato_volcanic_1993 | Confirmed explicitly. Standard CMIP5 dataset. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running coupled model. | — | — | CMIP5 generation; no flux corrections. |

### ESM-specific forcing inputs
Not an ESM — MIROC5 is an AOGCM only (no active carbon cycle or interactive chemistry). Standard 12 keys only.

### Open questions
1. SO: "Lean et al. (2005) Solar Phys. 230" may be same TSI reconstruction as Wang, Lean & Sheeley (2005) ApJ (Taylor 2012 standard), but cited as SORCE paper — equivalence unconfirmed. Verdict held at ~ (nuanced).

### Notes on CMIP3 lineage
CMIP3 MIROC3.2-medres used SPRINTARS interactive aerosols (BC/OC/dust/SS interactive; SI=1st indirect). MIROC5 continues SPRINTARS — now with prognostic cloud droplet/ice crystal scheme for both indirect effects. Aerosol treatment confirmed ＋exc (exceeds standard). Ozone = CHASER-derived, also consistent with CMIP3 lineage.

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: Watanabe M. et al. 2010 (J. Climate 23(23), doi:10.1175/2010JCLI3679.1); Sect. 2e "Control experiment" and Sect. 2a(6) aerosol description
- Stage 9 workflow: wf_9b467e91-606 (2026-06-21); scope limitation — Stage 9 did not extract forcing specifics from Sect. 2e
- Second-pass update: 2026-06-21; all 11 active cells resolved
