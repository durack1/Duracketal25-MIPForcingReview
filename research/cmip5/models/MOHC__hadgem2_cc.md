# HadGEM2-CC — UKMO (UK Met Office Hadley Centre, UK)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ukmo_hadgem1 (via HadGEM2-AO base)
- **Model family / lineage:** HadGEM2-CC = HadGEM2-AO + UKCA interactive stratospheric+tropospheric chemistry. "CC" = Coupled Chemistry. UKCA computes ozone and chemistry interactively — O=exc expected and supported by family analogy with HadGEM2-ES. Aerosols: CLASSIC scheme as in HadGEM2-ES (not separately verified). More vertical levels than AO for better stratosphere resolution (L60 vs L38).
- **Atmosphere / ocean components:** HadGEM2-A (N96 L60 — extended vertical) + HadGEM2-O (1°×1°, 40 levels) + UKCA chemistry
- **Primary documentation paper(s):** Collins, W.J., et al. (2011). Development and evaluation of an Earth-System model – HadGEM2. *Geosci. Model Dev.* 4(4), 1051–1075. doi:10.5194/gmd-4-1051-2011 [collins_hadgem2_2011 *(add)*]
- **Forcing-specific reference(s):** Collins et al. 2011; Martin, G.M., et al. (2011). The HadGEM2 family of Met Office Unified Model climate configurations. *Geosci. Model Dev.* 4, 723–757. doi:10.5194/gmd-4-723-2011 [martin_hadgem2_2011 *(add)*]; Jones et al. 2011 (GMD 4:543) for UKCA chemistry context via HadGEM2-ES.

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

**NOTE: All cells below are INFERRED from the HadGEM2 family papers (Collins2011, Jones2011, Martin2011) describing the shared HadGEM2-A atmosphere and CLASSIC aerosol scheme. Stage 8 workflow (wf_71ff96d7-487) confirmed these findings for HadGEM2-ES only; none of the surviving verified claims independently document HadGEM2-CC per-forcing verdicts. Mark all inferred entries with (inferred).**

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std | TV | Meinshausen et al. 2011 (inferred from HadGEM2 family) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred: same HadGEM2-A atmosphere as HadGEM2-ES; no independent confirmation |
| O  | Ozone | Cionni et al. 2011 | ?exc | TV+ | UKCA interactive chemistry (distinguishing feature of HadGEM2-CC); ozone expected interactive as in HadGEM2-ES | Collins et al. 2011; Jones et al. 2011 | collins_hadgem2_2011; jones_hadgem2es_2011 | Inferred: HadGEM2-CC's key feature is UKCA chemistry → O=exc expected. Specific UKCA configuration (same as HadGEM2-ES O'Connor2011 config.?) not independently confirmed. |
| SD | Sulphate direct | Lamarque et al. 2010 | ?~std | TV+ | CLASSIC ammonium sulphate from Lamarque2010 emissions (inferred from HadGEM2-ES) | Collins et al. 2011; Martin et al. 2011 | collins_hadgem2_2011; martin_hadgem2_2011 | Inferred from HadGEM2 family |
| SI | Sulphate indirect | Model-dependent | ?exc | TV+ | CLASSIC 1st+2nd indirect (inferred from HadGEM2-ES) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| BC | Black carbon | Lamarque et al. 2010 | ?~std | TV+ | CLASSIC FF-BC from Lamarque2010 emissions; direct effect only (inferred) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| OC | Organic carbon | Lamarque et al. 2010 | ?~std | TV+ | CLASSIC FF-OC + biomass-burning from Lamarque2010 emissions (inferred) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| MD | Mineral dust | — | ?exc | TV+ | CLASSIC interactive mineral dust from model winds (inferred) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| SS | Sea salt | — | ?exc | TV+ | CLASSIC interactive sea salt from model winds (inferred) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| LU | Land-use change | Hurtt et al. 2011 | ?std | TV | Hurtt2011 (inferred; HadGEM2-CC not an ESM but shares HadGEM2 surface scheme) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred; no TRIFFID active carbon cycle (not full ESM), but LU boundary condition likely same |
| SO | Solar irradiance | Wang et al. 2005 | ?std | TV | Lean2009/Wang2005 (inferred from HadGEM2-ES and family) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ?dev | TV | Sato1993 original, extended post-2000 via Thomason2008 floor (inferred from HadGEM2-ES Jones2011) | Collins et al. 2011 | collins_hadgem2_2011 | Inferred from HadGEM2-ES — same volcanic treatment likely used family-wide |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running coupled model | — | — | |

### ESM-specific forcing inputs
Not a full ESM — no active carbon cycle. But UKCA chemistry requires emissions inputs.

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| Atmospheric chem inputs (NOx/VOC/CO) | Yes (inferred) | Lamarque et al. 2010 precursor emissions (inferred) | Drives UKCA interactive chemistry — same as HadGEM2-ES |
| BC on snow/ice | ? | Unconfirmed | |

### Provenance
- Durack et al. 2016 model list: included
- Stage 8 workflow: wf_71ff96d7-487 (2026-06-21); HadGEM2-CC NOT independently confirmed — all findings inferred from HadGEM2-ES + Collins2011/Martin2011 family papers. O=exc supported by family analogy; not directly verified.
