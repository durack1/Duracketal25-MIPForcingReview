# csiro_mk3_0 — CSIRO (Commonwealth Scientific and Industrial Research Organisation, Australia)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** CSIRO Mk3 → Mk3.5 → Mk3.6 (CMIP5). Mk3.0 and Mk3.5 share the same aerosol treatment (Penner et al. 1994 sulphate); Mk3.5 is an updated version with enhanced physics.
- **Primary documentation paper(s):** Gordon, H.B. et al. (2002). *The CSIRO Mk3 Climate System Model.* CSIRO Atmospheric Research Technical Paper No. 60. (`resources/` — locate or upload) — **key primary source, contains forcing details including aerosol quote**; PCMDI CMIP3 model documentation page for csiro_mk3_0 (incomplete for forcing specs).
- **Forcing-specific reference(s):** Penner, J.E. et al. (1994) — sulphate aerosol monthly mean fields; *(exact journal ref to confirm — likely Bull. Amer. Meteor. Soc. 75(3) or Nature)*

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ~ unclear | ? | Not confirmed from Gordon 2002 or PCMDI doc; PCMDI section incomplete | Gordon et al. 2002 *(incomplete)* | gordon_csiro_2002 | Requires further read of Gordon 2002 Tech Report |
| O  | Ozone (tropo + strato) | Y | ~ unclear | ? | PCMDI doc notes "No interactive atmospheric chemistry" — raises ambiguity about whether ozone is truly time-varying (TV) or a fixed climatology; if FX-clim, Table S1 Y would be ✗ conflict | PCMDI CMIP3 Mk3.0 doc | — | Critical open question — same potential fixed-clim pattern as CCCma |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV (monthly mean) | "Direct effect of aerosols only using monthly mean sulfate (Penner et al, 1994)" — monthly mean fields, time-varying | Gordon et al. 2002 Tech Paper No. 60 | gordon_csiro_2002 | Quote is direct from gordon_2002a.pdf; confirms SD=Y as monthly-mean TV; Penner et al. 1994 is the source dataset |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | "Direct effect of aerosols only" — no indirect effect applied | Gordon et al. 2002 | gordon_csiro_2002 | Explicit exclusion of indirect effect; Table S1 "-" confirmed |
| BC | Black carbon | - | ✓ supports | n/a | Not applied; Gordon 2002 states sulphate direct effect only — no BC in aerosol scheme | Gordon et al. 2002 | gordon_csiro_2002 | Table S1 "-" confirmed |
| OC | Organic carbon | - | ✓ supports | n/a | Not applied; same aerosol-only exclusion as BC | Gordon et al. 2002 | gordon_csiro_2002 | Table S1 "-" confirmed |
| MD | Mineral dust | - | ✓ supports | n/a | Not applied; sulphate-direct-only aerosol scheme excludes dust | Gordon et al. 2002 | gordon_csiro_2002 | Table S1 "-" confirmed |
| SS | Sea salt | - | ✓ supports | n/a | Not applied; sulphate-direct-only aerosol scheme excludes sea salt | Gordon et al. 2002 | gordon_csiro_2002 | Table S1 "-" confirmed |
| LU | Land-use change | - | ~ unclear | ? | Not confirmed from any located source; PCMDI section blank | — | — | Requires full read of Gordon 2002 Tech Report |
| SO | Solar irradiance | - | ~ unclear | ? | PCMDI forcing sections blank/incomplete; not confirmed from Gordon 2002 abstract; SO=- is unusual for a 20C3M run | Gordon et al. 2002 *(not confirmed)* | — | Same unusual pattern as CCCma CGCM3.1 — needs confirmation |
| VL | Volcanic aerosols | - | ~ unclear | ? | PCMDI forcing sections blank/incomplete; not confirmed from any located source; VL=- is unusual for a 20C3M run | — | — | Requires full read of Gordon 2002 Tech Report; if confirmed absent, notable omission |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | "None" for flux adjustment (heat, water, or momentum) — confirmed from PCMDI documentation | PCMDI CMIP3 Mk3.0 doc | — | FC=- confirmed; no flux corrections applied |

### Table S1 conflicts found
- **None confirmed.** SD=Y (Penner monthly sulphate, TV) and SI=BC=OC=MD=SS=FC=- are all consistent with primary documentation.
- **Open**: O=Y — if ozone is FX-clim (as PCMDI's "no interactive chemistry" note hints), this would be a ✗ conflict; unresolved pending full Gordon 2002 read.
- **Unresolved**: G=Y, SO=-, VL=-, LU=- — not confirmed or denied from sources accessed.

### Open questions (Stage 5 residual)
1. **O=Y**: Is ozone truly time-varying, or a fixed climatology? PCMDI notes "no interactive atmospheric chemistry" — could mean ozone is prescribed FX-clim, making Table S1 Y a conflict.
2. **SO=- and VL=-**: Did CSIRO Mk3.0 truly omit solar and volcanic forcing? Requires Gordon 2002 Tech Report §forcing or 20C3M run description.
3. **G=Y**: What GHG time series was used? Exact dataset not yet identified.
4. **Penner et al. 1994**: Confirm exact journal/DOI for the sulphate dataset.

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO - · VL - · FC -
- Primary sources consulted: Gordon et al. 2002 CSIRO Tech Paper No. 60 (gordon_2002a.pdf, accessed via cmar.csiro.au); PCMDI CMIP3 Mk3.0 model documentation page (pcmdi.llnl.gov/ipcc/model_documentation/CSIRO-Mk3.0.htm — forcing sections incomplete)
- Stage 5 adversarial workflow: partial (synthesis step failed due to API rate limits); 5 claims confirmed 1-0; 9 verify agents failed due to session limit — see NEXT-STAGE.md for resume plan
