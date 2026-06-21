# access1_0 — CSIRO/BOM (CSIRO & Bureau of Meteorology, Australia)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none (ACCESS is new to CMIP5; predecessor to CSIRO-BOM contributions)
- **Model family / lineage:** ACCESS = Australian Community Climate and Earth System Simulator version 1.0. Based on the UK Met Office HadGEM2-A atmospheric model (UM7.3), coupled to MOM4p1 ocean and CABLE2 land surface. Differs from ACCESS1-3 only in convection parameterization (Gregory-Rowntree) and autoconversion scheme. NOTE: shares HadGEM2-A atmosphere with ACCESS1-3; Stage 8 (UKMO) will cover HadGEM2-AO/CC/ES directly — check for overlap.
- **Atmosphere / ocean components:** HadGEM2-A atmosphere (UM7.3, N96, 38 levels; same as HadGEM2-AO) + MOM4p1 ocean + CABLE2 land + sea ice
- **Primary documentation paper(s):** Bi, D., et al. (2013). The ACCESS coupled model: description, control climate and evaluation. *Aust. Meteorol. Oceanogr. J.* 63(1), 41–64. doi:10.22499/2.6301.004 [bi_access_2013 *(add)*]
- **Forcing-specific reference(s):** Bi et al. 2013; also Martin et al. 2011 (HadGEM2-A description, doi:10.5194/gmd-4-723-2011)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std | TV | Meinshausen2011 expected | meinshausen_rcp_2011 | meinshausen_rcp_2011 | Not directly confirmed from primary text |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | Cionni et al. 2011 (AC&C/SPARC) | Bi et al. 2013; Eyring et al. 2013 | bi_access_2013 *(add)*; eyring_ozone_2013 | Confirmed 1-0 high conf; no interactive chemistry (prescribed only); HadGEM2-A with prescribed atmospheric chemistry effects |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | ? | Likely CLASSIC prescribed sulfate (HadGEM2-A); unconfirmed | — | — | Claims asserting standard Lamarque2010 refuted 0-1 for lack of primary support; cross-check UKMO Stage 8 (HadGEM2 direct) |
| SI | Sulphate indirect | Model-dependent | ? | ? | Likely CLASSIC (1st indirect if any); unconfirmed | — | — | ACCESS1-0 has prescribed (not interactive) chemistry — GLOMAP ruled out |
| BC | Black carbon | Lamarque et al. 2010 | ? | ? | Unconfirmed | — | — | Claims refuted 0-1; cross-check Stage 8 |
| OC | Organic carbon | Lamarque et al. 2010 | ? | ? | Unconfirmed | — | — | |
| MD | Mineral dust | — | ? | ? | Unconfirmed | — | — | |
| SS | Sea salt | — | ? | ? | Unconfirmed | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | ? | Unconfirmed | — | — | Claims asserting Hurtt2011 refuted 0-1; CABLE2 land interaction unresolved |
| SO | Solar irradiance | Wang et al. 2005 | ? | ? | Unconfirmed | — | — | Claims asserting Wang2005 refuted 0-1; cross-check Stage 8 |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | ? | Unconfirmed | — | — | Claims asserting Sato-updated refuted 0-1; cross-check Stage 8 |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | Free-running coupled model |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle). Standard 12 keys only.

### Key architecture note
- Shares HadGEM2-A atmosphere (UM7.3, N96L38) with ACCESS1-3. ACCESS1-0 and ACCESS1-3 differ only in convection parameterization (Gregory-Rowntree vs Kain-Fritsch 2) and autoconversion scheme — forcing is identical between them.
- Jones et al. 2011 (GMD 4:543–570) documents HadGEM2-ES as using CLASSIC aerosols + interactive UKCA chemistry. ACCESS1-0/1-3 use PRESCRIBED chemistry (no interactive), so GLOMAP-mode interactive aerosols from HadGEM2-CC/ES are NOT inherited. Likely CLASSIC prescribed sulfate — but not confirmed from primary text this stage.
- All aerosol/solar/volcanic/LU details to be cross-checked when UKMO Stage 8 (HadGEM2-AO, HadGEM2-CC, HadGEM2-ES) runs.

### Open questions for Stage 8 cross-check
1. ACCESS aerosol scheme: CLASSIC prescribed sulfate OD (std) or other?
2. ACCESS solar: Wang2005 (std) or different?
3. ACCESS volcanic: Sato-updated (std) or different?
4. ACCESS LU: Hurtt2011 (std) or excluded (as in CSIRO-Mk3.6.0)?

### Provenance
- Durack et al. 2016 model list: included
- Stage 5 workflow: wf_6a1942cb-0da (2026-06-21) — O confirmed 1-0 high conf; aerosol/SO/VL/LU claims refuted 0-1 (insufficient primary text evidence this stage)
