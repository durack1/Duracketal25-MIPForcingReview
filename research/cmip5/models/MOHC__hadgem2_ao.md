# HadGEM2-AO — UKMO/NIMR (UK Met Office Hadley Centre; National Institute of Meteorological Research, Korea)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ukmo_hadgem1 — HadGEM2-AO is the AOGCM base of the HadGEM2 family; HadGEM1 was its CMIP3 predecessor
- **Model family / lineage:** HadGEM2-AO = HadGEM2-A atmosphere (N96 L38, HadAM4) + HadGEM2-O ocean (1°×1°, 40 levels). "AO" = Atmosphere-Ocean only (no ESM components, no interactive chemistry). Same atmosphere as ACCESS1-0/1-3 (Stage 5).
- **Atmosphere / ocean components:** HadGEM2-A (N96 L38) + HadGEM2-O (1°×1°, 40 levels)
- **Primary documentation paper(s):** Collins, W.J., et al. (2011). Development and evaluation of an Earth-System model – HadGEM2. *Geosci. Model Dev.* 4(4), 1051–1075. doi:10.5194/gmd-4-1051-2011 [collins_hadgem2_2011 *(add)*]
- **Forcing-specific reference(s):** Collins et al. 2011; Martin, G.M., et al. (2011). The HadGEM2 family of Met Office Unified Model climate configurations. *Geosci. Model Dev.* 4, 723–757. doi:10.5194/gmd-4-723-2011 [martin_hadgem2_2011 *(add)*]

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**NOTE: All cells below are INFERRED from the HadGEM2 family papers (Collins2011, Jones2011, Martin2011) describing the shared HadGEM2-A atmosphere and CLASSIC aerosol scheme. Stage 8 workflow (wf_71ff96d7-487) confirmed findings for HadGEM2-ES only. Key architectural difference from HadGEM2-CC/ES: HadGEM2-AO has NO UKCA chemistry → O=std (prescribed Cionni2011). All other cells inferred from HadGEM2 family.**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std | TV | Meinshausen et al. 2011 (inferred from HadGEM2 family) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| O  | Ozone | Cionni et al. 2011 | ?std | TV | Cionni et al. 2011 prescribed (no UKCA interactive chemistry in HadGEM2-AO) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred: no UKCA chemistry in HadGEM2-AO → Cionni2011 expected (std). Contrast with HadGEM2-CC/ES where UKCA is active (O=exc). |
| SD | Sulphate direct | Lamarque et al. 2010 | ?~std | TV+ | CLASSIC ammonium sulphate from Lamarque2010 emissions (inferred from HadGEM2-ES; same CLASSIC scheme family) | Collins et al. 2011; Martin et al. 2011 | collins_hadgem2_2011; martin_hadgem2_2011 | Inferred. Note: same HadGEM2-A atmosphere as ACCESS1-0/1-3 — confirms ACCESS aerosol inference (Stage 5). |
| SI | Sulphate indirect | Model-dependent | ?exc | TV+ | CLASSIC 1st+2nd indirect (inferred from HadGEM2-ES) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| BC | Black carbon | Lamarque et al. 2010 | ?~std | TV+ | CLASSIC FF-BC from Lamarque2010 emissions (inferred) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| OC | Organic carbon | Lamarque et al. 2010 | ?~std | TV+ | CLASSIC FF-OC + biomass-burning from Lamarque2010 emissions (inferred) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| MD | Mineral dust | — | ?exc | TV+ | CLASSIC interactive mineral dust from model winds (inferred) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| SS | Sea salt | — | ?exc | TV+ | CLASSIC interactive sea salt from model winds (inferred) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| LU | Land-use change | Hurtt et al. 2011 | ?std | TV | Hurtt2011 (inferred from HadGEM2 family) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| SO | Solar irradiance | Wang et al. 2005 | ?std | TV | Lean2009/Wang2005 (inferred from HadGEM2-ES and family) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ?dev | TV | Sato1993 original, extended post-2000 via Thomason2008 floor (inferred from HadGEM2-ES Jones2011) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred from HadGEM2-ES — VL=✗dev (Sato1993 original, not Sato-updated) likely used family-wide |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running coupled model | — | — | HadGEM2-generation free-running |

### ESM-specific forcing inputs
Not an ESM — HadGEM2-AO only, no active carbon cycle or chemistry. Standard 12 keys only.

### ACCESS cross-check
HadGEM2-AO shares the same HadGEM2-A atmosphere as ACCESS1-0 and ACCESS1-3 (Stage 5, CSIRO/BOM). Stage 8 confirmed via Collins2011 + Martin2011 that HadGEM2-A uses the CLASSIC 6-species aerosol scheme from Lamarque2010 emissions. This is consistent with the Stage 5 inference that ACCESS aerosol treatment follows HadGEM2-A, though no primary ACCESS-specific aerosol source was verified in Stage 8.

### Provenance
- Durack et al. 2016 model list: included
- Stage 8 workflow: wf_71ff96d7-487 (2026-06-21); HadGEM2-AO NOT independently confirmed — all findings inferred from HadGEM2-ES + Collins2011/Martin2011 family papers.
