# FGOALS-g2 — LASG-CESS (Laboratory for Numerical Modeling for Atmospheric Sciences and Geophysical Fluid Dynamics / Center for Earth System Science, China)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** iap_fgoals1_0 — IAP-FGOALS1.0_g (CMIP3 Stage 10). Key difference: CMIP3 ancestor omitted SO, VL, LU, and used flux corrections — all corrected in CMIP5.
- **Model family / lineage:** FGOALS (Flexible Global Ocean-Atmosphere-Land System) grid-point version 2. Updated GAMIL2 (Grid-point Atmospheric Model of IAP/LASG v2) atmosphere replacing GAMIL1 in CMIP3. Same IAP/LASG modelling group, now jointly with CESS (Tsinghua University).
- **Atmosphere / ocean components:** GAMIL2 (T42, L26) + LICOM2 (LASG/IAP Climate system Ocean Model, ~1°) + CLM3 land + CICE4 sea ice
- **Primary documentation paper(s):** Li, L., et al. (2013). The Flexible Global Ocean-Atmosphere-Land System Model Grid-Point Version 2 (FGOALS-g2): Model Description and Evaluation. *Adv. Atmos. Sci.* 30(3), 543–560. doi:10.1007/s13351-013-0301-6 [li_flexible_2013 *(add)*]
- **Forcing-specific reference(s):** Li et al. 2013; PCMDI CMIP5 documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | Meinshausen et al. 2011 RCP/historical concentrations | Li2013 | li_flexible_2013 | Confirmed 1-0 |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | AC&C/SPARC Cionni et al. 2011; no interactive chemistry | Li2013 | li_flexible_2013 | Confirmed 1-0 |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ✗dev | TV | Bulk aerosol scheme (BAM) with prescribed monthly-mean mass concentrations from offline transport using Lamarque2010 emissions; not standard prescribed OD | Li2013 | li_flexible_2013 | Different methodology from Taylor2012 standard OD approach |
| SI | Sulphate indirect | Model-dependent | ＋exc | TV | First indirect (Twomey) effect parameterized via cloud droplet number in GAMIL2 | Li2013 | li_flexible_2013 | 1st indirect included; 2nd uncertain |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev | TV | Bulk aerosol scheme with BC mass concentrations from Lamarque2010 offline transport | Li2013 | li_flexible_2013 | As SD — same bulk scheme |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev | TV | Bulk aerosol scheme with OC mass concentrations from Lamarque2010 offline transport | Li2013 | li_flexible_2013 | As SD |
| MD | Mineral dust | Model-dependent | ＋exc | TV | Interactive mineral dust computed online from surface wind emissions in GAMIL2 | Li2013 | li_flexible_2013 | |
| SS | Sea salt | Model-dependent | ＋exc | TV | Interactive sea salt computed online from surface wind emissions in GAMIL2 | Li2013 | li_flexible_2013 | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std | TV | Hurtt et al. 2011 LUH1 land-use transitions via CLM3 | Li2013 | li_flexible_2013 | **CORRECTS CMIP3 FGOALS1.0 omission of LU** |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | Wang, Lean & Sheeley 2005 solar irradiance reconstruction | Li2013 | li_flexible_2013 | **CORRECTS CMIP3 FGOALS1.0 omission of SO** |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Sato et al. 1993 updated stratospheric aerosol ODs | Li2013 | li_flexible_2013 | **CORRECTS CMIP3 FGOALS1.0 omission of VL** |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running CMIP5 model | — | — | **CORRECTS CMIP3 FGOALS1.0 flux adjustments** |

### ESM-specific forcing inputs
Not an ESM — FGOALS-g2 is an AOGCM only. Standard 12 keys only.

### Deviations from Taylor 2012 standard protocol
- **SD/BC/OC = ✗dev**: Uses a bulk aerosol scheme with prescribed mass concentrations from offline transport model driven by Lamarque2010 emissions — not the standard prescribed aerosol optical depth. Method is internally consistent but differs from Taylor2012 specification.
- **SI = ＋exc**: First indirect (Twomey) effect included, exceeding the Taylor2012 standard which is prescribed-OD direct-only.
- **MD/SS = ＋exc**: Interactive online emissions from GAMIL2 dynamics (as opposed to prescribed climatologies or external fields).

### Notes on CMIP3 lineage
CMIP3 FGOALS1.0_g (IAP-FGOALS1.0) had significant forcing deficiencies confirmed in CMIP3 Stage 10: omitted SO (fixed solar constant), VL (no volcanic), and LU; used flux adjustments (FC). All four corrected in FGOALS-g2 for CMIP5 — model substantially updated.

## Open questions
- Whether bulk aerosol scheme computes aerosol OD consistently with Lamarque2010-derived fields (the offline transport model used is unspecified in Li2013).
- Whether SI includes 2nd indirect (lifetime) effect in addition to 1st indirect (Twomey).

## Provenance
- Durack et al. 2016 model list: included (row 41)
- Sources consulted: Li et al. 2013 (Adv. Atmos. Sci. 30:543-560, doi:10.1007/s13351-013-0301-6)
- Stage 10 workflow: wf_36a86e20-c4b (2026-06-21); G/O/LU/SO/VL corrections all confirmed 1-0; SD/BC/OC dev methodology confirmed 1-0; MD/SS exc confirmed 1-0
