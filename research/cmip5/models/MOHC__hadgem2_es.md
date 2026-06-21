# HadGEM2-ES — UKMO (UK Met Office Hadley Centre, UK)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ukmo_hadgem1 (via HadGEM2 family)
- **Model family / lineage:** HadGEM2-ES = HadGEM2-CC + TRIFFID interactive vegetation (terrestrial C cycle) + MEDUSA ocean biogeochemistry + interactive UKCA chemistry. Full ESM. "ES" = Earth System. Primary UKMO ESM for CMIP5; Jones et al. 2011 is the key CMIP5 implementation paper.
- **Atmosphere / ocean components:** HadGEM2-A (N96 L38) + HadGEM2-O (1°×1°, 40 levels) + TRIFFID land (active C cycle) + MEDUSA ocean biogeochemistry + UKCA chemistry
- **Primary documentation paper(s):** Collins, W.J., et al. (2011). Development and evaluation of an Earth-System model – HadGEM2. *Geosci. Model Dev.* 4(4), 1051–1075. doi:10.5194/gmd-4-1051-2011 [collins_hadgem2_2011 *(add)*]
- **Forcing-specific reference(s):** Jones, C.D., et al. (2011). The HadGEM2-ES implementation of CMIP5 centennial simulations. *Geosci. Model Dev.* 4(3), 543–570. doi:10.5194/gmd-4-543-2011 [jones_hadgem2es_2011 — already in bib-to-add Stage 5 section]

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | ? | | — | — | |
| O  | Ozone | Cionni et al. 2011 | ? | ? | UKCA interactive chemistry expected — O=exc | — | — | HadGEM2-ES includes UKCA; if ozone interactive → exc |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | ? | CLASSIC scheme from Lamarque2010 emissions? | — | — | |
| SI | Sulphate indirect | Model-dependent | ? | ? | CLASSIC includes 1st+2nd indirect? | — | — | HadGEM1 had 1st+2nd indirect (most complete CMIP3 scheme) |
| BC | Black carbon | Lamarque et al. 2010 | ? | ? | | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | ? | | — | — | |
| MD | Mineral dust | — | ? | ? | | — | — | |
| SS | Sea salt | — | ? | ? | | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | TRIFFID interactive vegetation — LU via Hurtt2011? | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
HadGEM2-ES is a full ESM (TRIFFID + MEDUSA + UKCA).

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | ? | Lamarque 2010 or 2013 ACCMIP? | Drives TRIFFID land C cycle |
| CO2: conc.- or emission-driven | ? | Meinshausen 2011 conc. (expected for `historical`) | `esmHistorical` emission-driven runs also exist |
| Atmospheric chem inputs (NOx/VOC/CO) | ? | Lamarque et al. 2010 (expected) | Drives UKCA interactive chemistry |
| Iron / dust deposition | ? | ? | MEDUSA ocean biogeochemistry |
| BC on snow/ice | ? | ? | |

### Provenance
- Durack et al. 2016 model list: included
- Stage 8 workflow: pending
