<!-- PER-MODEL TEMPLATE — CMIP6. Copy to research/cmip6/models/<CENTER>__<source_id>.md and fill.
     Goal: document WHICH dataset/source implemented each forcing in the CMIP6 `historical` experiment (1850–2014),
     and whether the model followed the Eyring et al. 2016 standard protocol or deviated from it.
     Temporal treatment codes: TV=time-varying · FXc=fixed climatology · FXk=fixed constant (WITH UNITS) · n/a=not applied · ?=unknown
     Verdict codes: ✓std=standard protocol · ＋exc=exceeds standard (e.g. interactive where prescribed was standard) · ✗dev=deviates · ~=unclear/nuanced · ?=unknown · n/a=not applicable
     Cite bib keys like [held_structure_2019]. -->

# {source_id} — {Institution, Country}

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** {source_id or "none — new in CMIP6"}
- **Model family / lineage:** {}
- **Atmosphere / ocean components:** {}
- **Primary documentation paper(s):** {Author et al., year — DOI} [bib_key]
- **Forcing-specific reference(s):** {}

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

`Protocol` = Eyring et al. 2016 standard CMIP6 `historical` recommended dataset (input4MIPs source_id in brackets).
`Verdict` = **✓std** · **＋exc** (interactive > prescribed) · **✗dev** · **~** unclear · **?** unknown · **n/a** not applied.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | | | | | | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | | | | | | |
| SD | Aerosol — sulphate direct | Hoesly et al. 2018 CEDS + van Marle et al. 2017 BB4CMIP6 (interactive) OR MACv2-SP (prescribed) | `CEDS-2017-05-18` / `MPI-M-MACv2-SP-1-0` | | | | | | |
| SI | Aerosol — sulphate indirect | Model-dependent | — | | | | | | |
| BC | Black carbon | As SD | `CEDS-2017-05-18` / `VUA-CMIP-BB4CMIP6-1-2` | | | | | | |
| OC | Organic carbon | As SD | `CEDS-2017-05-18` / `VUA-CMIP-BB4CMIP6-1-2` | | | | | | |
| MD | Mineral dust | Model-dependent (often interactive) | — | | | | | | |
| SS | Sea salt | Model-dependent (often interactive) | — | | | | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | | | | | | |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | | | | | | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 (Thomason et al. 2018 / GloSSAC) | `IACETH-SAGE3lambda-3-0-0` | | | | | | |
| FC | Flux corrections | Not expected (CMIP6 generation) | — | | | | | | |

### ESM-specific forcing inputs
<!-- Complete for models with active carbon cycles, interactive chemistry, or ocean biogeochemistry. -->

| ESM input | Applied? | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | | NCAR CCMI CAM-Chem (standard) | `NCAR-CCMI-2-0` | drynhx/drynoy/wetnhx/wetnoy |
| CO2: conc.- or emission-driven | | Meinshausen 2017 conc. (`historical`) or emission-driven (`esm-hist`) | `UoM-CMIP-1-2-0` | |
| Atmospheric chem inputs (NOx/VOC/CO) | | CEDS + BB4CMIP6 (for interactive chem models) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | |
| Iron / dust deposition | | Model-specific | — | Ocean biogeochem iron cycle |
| BC on snow/ice | | Derived from CEDS deposition | — | Cryosphere albedo pathway |

### Supplemental / non-input4MIPs forcings
<!-- Document ANY forcing configuration that augmented, replaced, or extended the standard input4MIPs datasets.
     Modeling centers sometimes used center-specific aerosol climatologies, ozone fields, volcanic AOD files,
     solar spectra, or land-use products that were NOT registered in input4MIPs. List them here.
     Column "Replaces or augments?" — 'replaces' means the input4MIPs standard was NOT used; 'augments' means both were applied. -->

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| | | | | |

### Deviations from Eyring 2016 standard protocol
- {List any cell where the model used a non-standard dataset or omitted a recommended forcing.}

### Notes on CMIP5 lineage
- {How does forcing compare to the CMIP5 predecessor? Same datasets updated? New interactive schemes?}

## Open questions
- {}

## Provenance
- WCRP-CMIP CVs source_id: confirmed (cmip6-cv-model-list.csv, accessed 2026-06-22)
- Sources consulted: {}
- Stage workflow run ID: {}
