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
| SI | Sulphate aerosol — indirect | Model-dependent | ~ unclear | ? | Indirect aerosol effect in AM2.1 — treatment not pinned down from per-model GFDL documentation consulted | — | — | Open question |
| BC | Black carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 emissions / prescribed OD — same inventory as SD | Lamarque et al. 2010 | lamarque_historical_2010 | Prescribed (not interactive) in AM2.1 |
| OC | Organic carbon | Lamarque et al. 2010 | ✓ standard | TV | Lamarque et al. 2010 — same | Lamarque et al. 2010 | lamarque_historical_2010 | |
| MD | Mineral dust | Model-dependent | ~ unclear | ? | Not confirmed for CM2p1 | — | — | |
| SS | Sea salt | Model-dependent | ~ unclear | ? | Not confirmed for CM2p1 | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ✓ standard | TV | **Hurtt et al. 2011** harmonised land-use transition dataset | Hurtt et al. 2011 | hurtt_harmonization_2011 *(add)* | Standard protocol |
| SO | Solar irradiance | Wang et al. 2005 | ~ unclear | ? | Standard is Wang et al. 2005 (*GRL* doi:10.1029/2005GL024546) — CMIP5 protocol; not confirmed at CM2p1 model level from surviving evidence | Wang et al. 2005 (standard) | wang_modeling_2005 *(add)* | Unverified at model level. CMIP3 CM2.1 used Lean 2000; whether updated to Wang 2005 for CM2p1 is an open question |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ~ unclear | ? | Standard is Sato et al. 1993 updated; not confirmed at model level | Sato et al. 1993 (standard) | sato_stratospheric_1993 | Unverified at model level. CMIP3 used Sato 1993 — likely same updated series |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied (CMIP5-generation; free-running) | — | — | |

### ESM-specific forcing inputs
Not an ESM — AM2.1/MOM4p1 AOGCM; no active carbon cycle, biogeochemistry, or atmospheric chemistry. Standard 12 keys only.

### Deviations from Taylor 2012 standard protocol
- **None confirmed.** CM2p1 follows the standard prescribed-forcing CMIP5 protocol on all confirmed cells.
- **Open:** Whether GFDL updated CM2p1 from CMIP3-era datasets (Lean 2000 solar, original aerosol ODs) to full CMIP5 standards (Wang 2005 solar, Meinshausen 2011 GHGs, Hurtt 2011 LU, Lamarque 2010 aerosols) has not been confirmed at the per-model level. This is the key unresolved question for CM2p1 specifically.

### Notes on CMIP3 lineage
- Functionally identical atmosphere/ocean to CMIP3 CM2.1. The CMIP5 resubmission likely applied CMIP5-standard forcing datasets but the specific updates have not been verified. CMIP3 CM2.1 used: GHG concentrations (CMIP3-era), Lean 2000 solar, Sato 1993 volcanic, Boucher sulphate, Hurtt 2006 land use.

## Open questions
1. Did GFDL update CM2p1 from CMIP3-era forcing datasets to CMIP5 standards (Meinshausen 2011 / Hurtt 2011 / Wang 2005 solar)? No per-model GFDL forcing table found to confirm.
2. What is the SI treatment in AM2.1? Is a first indirect aerosol effect included?
3. SO: Wang 2005 (CMIP5 standard) or Lean 2000 (carried over from CMIP3)?
4. Dust and sea-salt treatment: fixed climatology or interactive in AM2.1?

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: PCMDI CMIP5 forcing page (pcmdi.llnl.gov/mips/cmip5/forcing.html); Taylor et al. 2012 BAMS; Delworth et al. 2006; GFDL primary website
- Stage 1 adversarial workflow: wf_ad589a7e-9e9; 12 confirmed claims, 2 killed; per-model GFDL forcing tables not located
