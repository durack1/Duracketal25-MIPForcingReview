<!-- PER-MODEL TEMPLATE — CMIP5. Copy to research/cmip5/models/<CENTER>__<model_id>.md and fill.
     Goal: document WHICH dataset/source implemented each forcing in the CMIP5 `historical` experiment,
     and whether the model followed the Taylor et al. 2012 standard protocol or deviated from it.
     Temporal treatment codes: TV=time-varying · FXc=fixed climatology · FXk=fixed constant (WITH UNITS) · n/a=not applied · ?=unknown
     Verdict codes: ✓=standard protocol · ＋=exceeds standard (e.g. interactive where OD was standard) · ✗=deviates from standard · ~=unclear/undocumented
     Use "?" for unknown; "n/a" for not applicable. Cite bib keys like [donner_new_2011]. -->

# {MODEL_ID} — {Modeling Center, Country}

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** {model_id or "none" — note lineage}
- **Model family / lineage:** {}
- **Atmosphere / ocean components:** {}
- **Primary documentation paper(s):** {Author et al., year — DOI} [bib_key]
- **Forcing-specific reference(s):** {}

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

`Protocol` = Taylor et al. 2012 standard CMIP5 `historical` recommended dataset.
`Verdict` = **✓ standard protocol** · **＋ exceeds standard** (interactive > prescribed) · **✗ deviates** · **~ unclear**.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**
Dataset column must state the actual source — time-varying dataset name/DOI *or* fixed field + value with units.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs/HCFCs) | Meinshausen et al. 2011 | | | | | | |
| O  | Ozone (tropo + strato) | Cionni et al. 2011 (models w/o interactive chem) | | | | | | |
| SD | Aerosol — sulphate direct | Lamarque et al. 2010/2011 prescribed OD or emissions | | | | | | |
| SI | Aerosol — sulphate indirect | Model-dependent | | | | | | |
| BC | Black carbon | Lamarque et al. 2010 emissions | | | | | | |
| OC | Organic carbon | Lamarque et al. 2010 emissions | | | | | | |
| MD | Mineral dust | Model-dependent (often interactive) | | | | | | |
| SS | Sea salt | Model-dependent (often interactive) | | | | | | |
| LU | Land-use change | Hurtt et al. 2011 | | | | | | |
| SO | Solar irradiance | Wang et al. 2005 | | | | | | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | | | | | | |
| FC | Flux corrections (F/H) | Not expected (CMIP5 generation) | | | | | | |

### ESM-specific forcing inputs
<!-- Complete this section for models with active carbon cycles, ocean biogeochemistry, or interactive chemistry.
     Leave blank / "Not an ESM" for atmosphere-ocean-only models (CM2p1, CCSM4, etc.) -->

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | | Lamarque et al. 2010 (standard) | Drives land/ocean C cycle |
| CO2: conc.- or emission-driven | | Meinshausen 2011 conc. (standard) | Note if emission-driven |
| Atmospheric chem inputs (NOx/VOC/CO) | | Lamarque et al. 2010 (standard) | Only for models with interactive chem |
| Iron / dust deposition | | Model-specific | Ocean biogeochem iron cycle |
| BC on snow/ice | | Lamarque et al. 2010 deposition | Cryosphere albedo pathway |

### Deviations from Taylor 2012 standard protocol
- {List any cell where the model used a non-standard dataset or omitted a recommended forcing.}

### Notes on CMIP3 lineage
- {How does the forcing setup compare to the CMIP3 predecessor? Same datasets? Upgraded?}

## Open questions
- {}

## Provenance
- Durack et al. 2016 model list: included
- Sources consulted: {}
- Stage workflow run ID: {}
