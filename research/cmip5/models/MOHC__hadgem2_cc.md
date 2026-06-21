# HadGEM2-CC — UKMO (UK Met Office Hadley Centre, UK)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ukmo_hadgem1 (via HadGEM2-AO base)
- **Model family / lineage:** HadGEM2-CC = HadGEM2-AO + UKCA interactive stratospheric+tropospheric chemistry. "CC" = Coupled Chemistry. UKCA (United Kingdom Chemistry and Aerosols) scheme computes ozone and chemistry interactively — expected O=exc. May also include interactive aerosols from chemistry.
- **Atmosphere / ocean components:** HadGEM2-A (N96 L60 — more levels than AO for better stratosphere) + HadGEM2-O + UKCA chemistry
- **Primary documentation paper(s):** Collins, W.J., et al. (2011). Development and evaluation of an Earth-System model – HadGEM2. *Geosci. Model Dev.* 4(4), 1051–1075. doi:10.5194/gmd-4-1051-2011 [collins_hadgem2_2011 *(add)*]
- **Forcing-specific reference(s):** Collins et al. 2011; Martin et al. 2011 (*GMD* 4:723–757, doi:10.5194/gmd-4-723-2011)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | ? | | — | — | |
| O  | Ozone | Cionni et al. 2011 | ? | ? | UKCA interactive chemistry expected — O=exc if confirmed | — | — | HadGEM2-CC key distinguishing feature from AO |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | ? | CLASSIC + UKCA chemistry? | — | — | |
| SI | Sulphate indirect | Model-dependent | ? | ? | | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? | ? | | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | ? | | — | — | |
| MD | Mineral dust | — | ? | ? | | — | — | |
| SS | Sea salt | — | ? | ? | | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not a full ESM — no active carbon cycle. But UKCA chemistry requires emissions inputs.

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| Atmospheric chem inputs (NOx/VOC/CO) | ? | Lamarque et al. 2010 (expected) | Drives UKCA interactive chemistry |
| BC on snow/ice | ? | ? | |

### Provenance
- Durack et al. 2016 model list: included
- Stage 8 workflow: pending
