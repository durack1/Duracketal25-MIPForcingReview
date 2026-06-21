# gfdl_cm2p1 — GFDL (Geophysical Fluid Dynamics Laboratory, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** gfdl_cm2_1 — CM2p1 is essentially the CMIP3 CM2.1 model rerun under the CMIP5 historical protocol. Uses the same AM2.1/MOM4p1 components.
- **Model family / lineage:** CM2.0 → CM2.1 (CMIP3) → CM2p1 (CMIP5 resubmission) → CM3 → CM4. CM2p1 is an atmospheric-ocean-only model (AOGCM); no active carbon cycle or atmospheric chemistry.
- **Atmosphere / ocean components:** AM2.1 (2°×2.5°, 24 levels) + MOM4p1 z-level ocean (1°) + LM2 land
- **Primary documentation paper(s):** Delworth, T.L., et al. (2006). GFDL's CM2 global coupled climate models. Part I. *J. Climate* 19(5), 643–674. doi:10.1175/JCLI3629.1 [delworth_gfdls_2006]
- **Forcing-specific reference(s):** Taylor et al. 2012 (*BAMS* doi:10.1175/BAMS-D-11-00094.1) [taylor_overview_2012]; PCMDI CMIP5 forcing page (https://pcmdi.llnl.gov/mips/cmip5/forcing.html)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

`Protocol` = Taylor et al. 2012 standard CMIP5 `historical` recommended dataset.
`Verdict` = **✓ standard** · **＋ exceeds standard** · **✗ deviates** · **~ unclear**.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓ standard | TV | **Meinshausen et al. 2011** global-mean concentration time series distributed via IIASA RCP Database. PCMDI verbatim: "The pre-industrial, historical and future (RCP) concentrations of anthropogenically affected greenhouse gases are available as global mean time series from the website at IIASA … This is the data that should be used to drive your runs." | PCMDI CMIP5 forcing page; Meinshausen et al. 2011 | meinshausen_rcp_2011 *(add)* | Standard protocol confirmed at protocol level |
| O  | Ozone | Cionni et al. 2011 | ✓ standard | TV | **Cionni et al. 2011** AC&C/SPARC ozone database (historical 1850–2009). Stratospheric component from SAGE I+II satellite + ozonesonde regression; tropospheric from CAM 3.5 and NASA-GISS PUCCINI CCMs. AM2.1 has no interactive chemistry — prescribed ozone appropriate. | PCMDI CMIP5 forcing page; Cionni et al. 2011 | cionni_ozone_2011 *(add)* | Cionni 2011 final DOI: 10.5194/acp-11-11267-2011 (ACPD discussion DOI 10.5194/acpd-11-10875-2011 is the same work) |
| SD | Sulphate aerosol — direct | Lamarque et al. 2010 | ✓ standard | TV | **Lamarque et al. 2010** historical anthropogenic + biomass-burning aerosol emissions or prescribed optical depths derived from same inventory. AM2.1 uses prescribed OD (no interactive aerosols). | Lamarque et al. 2010; Taylor et al. 2012 | lamarque_historical_2010 *(add)* | AM2.1 is a prescribed-aerosol model; no prognostic aerosol chemistry |
| SI | Sulphate aerosol — indirect | Model-dependent | ~ unclear | ? | Indirect aerosol effect in AM2.1 — AM2.1 uses prescribed aerosol concentration fields (not prognostic); Donner 2011 notes AM3 was specifically developed to address indirect effects that "could not be addressed with AM2" (section 1). This strongly implies AM2.1 did NOT include a full aerosol indirect effect. No indirect-effect parameterization for AM2.1 is documented in either Donner 2011 or Dunne 2012. | — | — | Donner 2011 section 1 states indirect effects were a key new capability added in AM3 (not present in AM2); confirms AM2.1 (used by CM2p1) lacks full aerosol indirect effect treatment |
| BC | Black carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 emissions / prescribed OD — same inventory as SD | Lamarque et al. 2010 | lamarque_historical_2010 | Prescribed (not interactive) in AM2.1 |
| OC | Organic carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 — same | Lamarque et al. 2010 | lamarque_historical_2010 | |
| MD | Mineral dust | Model-dependent | ~ unclear | ? | AM2.1 uses prescribed aerosol concentration/OD fields (not interactive); dust is included in prescribed aerosol distribution. Dunne 2012 p.3 confirms dust is among "specified as input concentration fields" in AM2.1 for ESM2G/M (which share AM2.1). Specific dust climatology/dataset for CM2p1 historical not pinned down. | — | — | AM2.1 prescribed; dataset source unconfirmed |
| SS | Sea salt | Model-dependent | ~ unclear | ? | Same as MD — AM2.1 prescribed aerosol fields include sea salt. Dunne 2012 p.3 confirms sea salt is among "specified as input concentration fields" in AM2.1. Specific dataset unconfirmed. | — | — | AM2.1 prescribed; dataset source unconfirmed |
| LU | Land-use change | Hurtt et al. 2011 | ✓ standard | TV | **Hurtt et al. 2011** harmonised land-use transition dataset | Hurtt et al. 2011 | hurtt_harmonization_2011 *(add)* | Standard protocol |
| SO | Solar irradiance | Wang et al. 2005 | ~ unclear | ? | Standard is Wang et al. 2005 (*GRL* doi:10.1029/2005GL024546) — CMIP5 protocol; not confirmed for CM2p1 from CM2p1-specific documentation. Note: Donner 2011 confirms GFDL CM3 used Fröhlich and Lean (2004) / TIM (CMIP5-recommended solar series), so CM2p1 may use the same CMIP5 dataset, but no CM2p1-specific source found. | Wang et al. 2005 (standard) | wang_modeling_2005 *(add)* | Unverified at CM2p1 model level. CMIP3 CM2.1 used Lean 2000; Donner 2011 shows GFDL CM3 uses Fröhlich and Lean 2004/TIM for CMIP5. CM2p1-specific solar forcing not documented in either Donner 2011 or Dunne 2012. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ~ unclear | ? | Standard is Sato et al. 1993 updated; not confirmed for CM2p1 from CM2p1-specific documentation. Note: Donner 2011 confirms GFDL CM3 used Stenchikov et al. (2006) prescribed stratospheric volcanic OD (which uses Sato 1993 updated data); likely same dataset for CM2p1, but no per-model source found. | Sato et al. 1993 (standard) | sato_stratospheric_1993 | Unverified at CM2p1 model level. Donner 2011 shows GFDL CM3 uses Stenchikov 2006 / Sato 1993 updated. CM2p1 expected same, but not documented in Donner 2011 or Dunne 2012. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied (CMIP5-generation; free-running) | — | — | |

### ESM-specific forcing inputs
Not an ESM — AM2.1/MOM4p1 AOGCM; no active carbon cycle, biogeochemistry, or atmospheric chemistry. Standard 12 keys only.

### Deviations from Taylor 2012 standard protocol
- **None confirmed.** CM2p1 follows the standard prescribed-forcing CMIP5 protocol on all confirmed cells.
- **SI: likely absent** — Donner 2011 section 1 makes explicit that aerosol indirect effects were a new capability in AM3 that "could not be addressed with AM2," strongly implying AM2.1 (used by CM2p1) did not implement a meaningful aerosol first indirect effect. This may constitute a deviation below standard if CMIP5 expected at least a first indirect effect.
- **Open:** SO and VL not confirmed from CM2p1-specific documentation; expected to follow CMIP5 standards (Fröhlich & Lean 2004/TIM and Stenchikov 2006/Sato 1993 updated) based on GFDL-wide practice documented in Donner 2011 for CM3.

### Notes on CMIP3 lineage
- Functionally identical atmosphere/ocean to CMIP3 CM2.1. The CMIP5 resubmission likely applied CMIP5-standard forcing datasets but the specific updates have not been verified. CMIP3 CM2.1 used: GHG concentrations (CMIP3-era), Lean 2000 solar, Sato 1993 volcanic, Boucher sulphate, Hurtt 2006 land use.

## Open questions
1. SO: Wang 2005 or Fröhlich and Lean 2004/TIM (both referenced as CMIP5-compatible; Donner 2011 shows CM3 uses the latter)? No CM2p1-specific source found.
2. VL: Same Stenchikov 2006/Sato 1993 updated as CM3? Highly likely but no CM2p1-specific source found.
3. SI: Donner 2011 implies AM2.1 lacked a meaningful aerosol indirect effect. Was any indirect parameterization applied for CMIP5 CM2p1, or is it absent?
4. MD/SS: Prescribed in AM2.1 (confirmed by Dunne 2012 for AM2.1-based ESM2G/M); specific climatological dataset source for CM2p1 unconfirmed.

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: PCMDI CMIP5 forcing page (pcmdi.llnl.gov/mips/cmip5/forcing.html); Taylor et al. 2012 BAMS; Delworth et al. 2006; GFDL primary website; Donner et al. 2011 (for AM2 vs AM3 indirect-effect comparison); Dunne et al. 2012 (for AM2.1 prescribed aerosol confirmation)
- Stage 1 adversarial workflow: wf_ad589a7e-9e9; 12 confirmed claims, 2 killed; per-model GFDL forcing tables not located
