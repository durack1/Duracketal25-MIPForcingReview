# HadGEM2-AO — UKMO/NIMR (UK Met Office Hadley Centre; National Institute of Meteorological Research, Korea)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ukmo_hadgem1 — HadGEM2-AO is the AOGCM base of the HadGEM2 family; HadGEM1 was its CMIP3 predecessor
- **Model family / lineage:** HadGEM2-AO = HadGEM2-A atmosphere (N96 L38, HadAM4) + HadGEM2-O ocean (1°×1°, 40 levels). "AO" = Atmosphere-Ocean only (no ESM components, no interactive chemistry). Same atmosphere as ACCESS1-0/1-3 (Stage 5).
- **Atmosphere / ocean components:** HadGEM2-A (N96 L38) + HadGEM2-O (1°×1°, 40 levels)
- **Primary documentation paper(s):** Collins, W.J., et al. (2011). Development and evaluation of an Earth-System model – HadGEM2. *Geosci. Model Dev.* 4(4), 1051–1075. doi:10.5194/gmd-4-1051-2011 [collins_hadgem2_2011 *(add)*]
- **Forcing-specific reference(s):** Collins et al. 2011; Martin et al. 2011 (*GMD* 4:723–757, doi:10.5194/gmd-4-723-2011)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | ? | | — | — | |
| O  | Ozone | Cionni et al. 2011 | ? | ? | Prescribed (no interactive chemistry in HadGEM2-AO) | — | — | |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | ? | CLASSIC scheme — which aerosol distribution? | — | — | ACCESS1-0/1-3 inherit same HadGEM2-A atmosphere; Stage 5 results unconfirmed for aerosols |
| SI | Sulphate indirect | Model-dependent | ? | ? | CLASSIC 1st indirect? | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? | ? | CLASSIC includes BC? | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | ? | CLASSIC includes OC? | — | — | |
| MD | Mineral dust | — | ? | ? | | — | — | |
| SS | Sea salt | — | ? | ? | CLASSIC includes sea salt? | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | HadGEM2-generation free-running |

### ESM-specific forcing inputs
Not an ESM — HadGEM2-AO only, no active carbon cycle or chemistry. Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 8 workflow: pending
