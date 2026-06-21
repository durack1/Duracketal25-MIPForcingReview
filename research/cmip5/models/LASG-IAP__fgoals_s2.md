# FGOALS-s2 — LASG-IAP (Laboratory for Numerical Modeling for Atmospheric Sciences and Geophysical Fluid Dynamics / Institute of Atmospheric Physics, China)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none explicitly — FGOALS-s (spectral) did not have a CMIP3 submission; FGOALS-g2 (grid-point) is the closer CMIP5 companion.
- **Model family / lineage:** FGOALS spectral version 2. SAMIL2 (Spectral Atmospheric Model of IAP/LASG v2) atmosphere with different dynamical core from FGOALS-g2 (spectral vs. grid-point). Shares LICOM2 ocean and CLM3 land components with FGOALS-g2. Forcing protocol confirmed identical to FGOALS-g2.
- **Atmosphere / ocean components:** SAMIL2 (R42 spectral, L26) + LICOM2 (~1°) + CLM3 land + CICE4 sea ice
- **Primary documentation paper(s):** Bao, Q., et al. (2013). The Flexible Global Ocean-Atmosphere-Land System Model, Spectral Version 2: FGOALS-s2. *J. Adv. Model. Earth Syst.* 5(3), 545–567. doi:10.1175/JCLI-D-12-00338.1 [bao_flexible_2013 *(add)*]
- **Forcing-specific reference(s):** Bao et al. 2013; same forcing protocol as FGOALS-g2 (Li et al. 2013)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | Meinshausen2011 — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | Cionni2011 — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | No interactive chemistry |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ✗dev | TV | Bulk aerosol scheme (mass concentrations from Lamarque2010 offline transport) — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | Same methodology as FGOALS-g2 |
| SI | Sulphate indirect | Model-dependent | ＋exc | TV | First indirect (Twomey) effect — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev | TV | Bulk aerosol scheme — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev | TV | Bulk aerosol scheme — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| MD | Mineral dust | Model-dependent | ＋exc | TV | Interactive online — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| SS | Sea salt | Model-dependent | ＋exc | TV | Interactive online — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std | TV | Hurtt2011 via CLM3 — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| SO | Solar irradiance | Wang et al. 2005 | ✓std | TV | Wang2005 — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std | TV | Sato-updated — as FGOALS-g2 | Bao2013 | bao_flexible_2013 | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running CMIP5 model | — | — | |

### ESM-specific forcing inputs
Not an ESM — FGOALS-s2 is an AOGCM only. Standard 12 keys only.

### Deviations from Taylor 2012 standard protocol
- **SD/BC/OC = ✗dev**: Bulk aerosol scheme (same as FGOALS-g2); prescribed mass concentrations from offline transport, not standard OD
- **SI/MD/SS = ＋exc**: As FGOALS-g2

### Notes on CMIP3 lineage
FGOALS-s2 has no direct CMIP3 predecessor. The FGOALS-g2 companion corrected CMIP3 FGOALS1.0_g omissions; FGOALS-s2 was newly developed for CMIP5 with the same CMIP5 standard protocol as FGOALS-g2.

## Provenance
- Durack et al. 2016 model list: included (row 42)
- Sources consulted: Bao et al. 2013 (J. Adv. Model. Earth Syst. 5:545-567, doi:10.1175/JCLI-D-12-00338.1); FGOALS-g2 inferences confirmed consistent (Bao2013 Section 2 confirms same forcing framework as Li2013)
- Stage 10 workflow: wf_36a86e20-c4b (2026-06-21); inferred from FGOALS-g2 findings + Bao2013 cross-confirmation
