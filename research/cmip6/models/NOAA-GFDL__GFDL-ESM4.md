<!-- CMIP6 forcing record — GFDL-ESM4 (NOAA-GFDL). Created 2026-06-22; Stage 1 workflow: wf_bc550b03-31e -->

# GFDL-ESM4 — NOAA Geophysical Fluid Dynamics Laboratory, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** GFDL-ESM2M / GFDL-ESM2G
- **Model family / lineage:** AM4.1 atmosphere + LM4.1 land + OM4 ocean + COBALT/TOPAZ4 ocean biogeochem. Full interactive tropospheric+stratospheric chemistry (GFDL-ATMCHEM4.1). Active carbon cycle.
- **Atmosphere / ocean components:** AM4.1 (LM4.1) / OM4 (MOM6 + COBALT + TOPAZ4); same ocean as CM4 but with full biogeochemistry
- **Primary documentation paper(s):** Dunne et al. 2020, *JAMES* 12(8) e2019MS002015, doi:10.1029/2019MS002015 [dunne_gfdl_esm4_2020]; Horowitz et al. 2020, *JAMES* doi:10.1029/2019MS002032 [horowitz_gfdl_am4_2020]
- **Forcing-specific reference(s):** Keeble et al. 2021, *ACP* 21, 5015–5061 [keeble_ozone_2021]; Griffiths/Archibald et al. 2021, *ACP* 21, 4187–4218 (tropospheric ozone in models with interactive stratospheric chemistry) [griffiths_tropospheric_2021]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

`Protocol` = Eyring et al. 2016 standard CMIP6 `historical` recommended dataset.
`Verdict` = **✓std** · **＋exc** (interactive > prescribed) · **✗dev** · **~** unclear · **?** unknown · **n/a** not applied.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ✓std | TV | Meinshausen et al. 2017 GHG concentrations; inferred from shared AM4 architecture and CMIP6-compliance statements | Dunne et al. 2020 | [dunne_gfdl_esm4_2020] | Medium confidence — not explicitly per-source_id confirmed; inferred from architecture shared with CM4 |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | **＋exc** | TV | **Interactive** — GFDL-ATMCHEM4.1 full tropospheric+stratospheric gas-phase and aerosol chemistry; ozone computed PROGNOSTICALLY. 56 prognostic + 36 diagnostic species, 43 photolysis + 190 gas-phase + 15 heterogeneous reactions. DOES NOT use prescribed CCMI dataset. | Dunne et al. 2020; Horowitz et al. 2020; Keeble et al. 2021; Griffiths et al. 2021 | [dunne_gfdl_esm4_2020; horowitz_gfdl_am4_2020; keeble_ozone_2021; griffiths_tropospheric_2021] | **Key CMIP5→CMIP6 distinction from CM4**: ESM4 AM4.1 runs full interactive chemistry (GFDL-ATMCHEM4.1), while CM4 AM4.0 prescribes ozone. ES-DOC classifies ESM4 atmosChem as "GFDL-ATMCHEM4.1 (full atmospheric chemistry)" vs CM4's "fast chemistry, aerosol only". Griffiths et al. 2021 places ESM4 among 5 CMIP6 models with "interactive stratospheric chemistry." |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | CEDS anthropogenic emissions (Hoesly et al. 2018) + BB4CMIP6 (van Marle et al. 2017); aerosol chemistry interactive via GFDL-ATMCHEM4.1. REFUTED claim that ESM4 used CMIP5-era prescribed oxidants for sulfate — full interactive chemistry confirmed. | Horowitz et al. 2020; Dunne et al. 2020 | [horowitz_gfdl_am4_2020; dunne_gfdl_esm4_2020] | Medium confidence on source_ids — architecture confirmed; source_id strings inferred from protocol |
| SI | Aerosol — sulphate indirect | Model-dependent | — | ✓std | TV | Interactive first and second indirect effects via AM4.1 aerosol-cloud coupling | Dunne et al. 2020 | [dunne_gfdl_esm4_2020] | |
| BC | Black carbon | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD | Horowitz et al. 2020 | [horowitz_gfdl_am4_2020] | |
| OC | Organic carbon | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD | Horowitz et al. 2020 | [horowitz_gfdl_am4_2020] | |
| MD | Mineral dust | Model-dependent | — | ~ | TV | Likely interactive (AM4.1 carries same dust scheme as AM4.0); not explicitly confirmed for ESM4 | Dunne et al. 2020 | [dunne_gfdl_esm4_2020] | |
| SS | Sea salt | Model-dependent | — | ~ | TV | Likely interactive; not explicitly confirmed | Dunne et al. 2020 | [dunne_gfdl_esm4_2020] | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Not confirmed in Stage 1 search; expected standard given CMIP6-compliance statement; LM4.1 land model handles LU transitions | — | — | OPEN: critical for active carbon cycle — LU affects LM4.1 land carbon; needs ES-DOC or Dunne 2020 supplemental confirmation |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ✓std | TV | "Consistent with CMIP6 specifications" (inferred shared architecture with CM4); SOLARIS-HEPPA-3-2 expected | Dunne et al. 2020 | [dunne_gfdl_esm4_2020] | Medium confidence — generic CMIP6-compliance inferred; source_id not explicitly confirmed |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | Not confirmed — standard IACETH-SAGE3lambda-3-0-0 unconfirmed; same open question as CM4 | — | — | OPEN: needs ES-DOC VL component check |
| FC | Flux corrections | Not expected | — | n/a | n/a | None expected | — | — | |

### ESM-specific forcing inputs

| ESM input | Applied? | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | ? | NCAR CCMI CAM-Chem (standard) OR GFDL-derived from ATMCHEM4.1 | `NCAR-CCMI-2-0` | **OPEN**: ESM4 runs interactive chemistry (GFDL-ATMCHEM4.1) — may generate N-dep internally rather than ingesting NCAR-CCMI-2-0. This is a key deviation-risk for the carbon-cycle forced by nitrogen. Needs Dunne 2020 supplemental or ES-DOC. |
| CO2: conc.- or emission-driven | ? | Meinshausen 2017 conc. (`historical`) or emission-driven (`esm-hist`) | `UoM-CMIP-1-2-0` | **OPEN**: ESM4 has active carbon cycle; may run both `historical` (conc.-driven) and `esm-hist` (emission-driven) variants. Review scope = `historical`. |
| Atmospheric chem inputs (NOx/VOC/CO) | Yes | CEDS + BB4CMIP6 (for interactive GFDL-ATMCHEM4.1) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | AM4.1 interactive chemistry uses precursor emissions as inputs |
| Iron / dust deposition | ? | GFDL OMIP protocol or center-specific | — | COBALT/TOPAZ4 ocean biogeochem needs iron; source not confirmed in Stage 1 |
| BC on snow/ice | ? | Derived from CEDS interactive deposition or offline | — | LM4.1 cryosphere albedo; likely handled via interactive BC deposition from AM4.1 |

### Supplemental / non-input4MIPs forcings

No supplemental non-input4MIPs forcings confirmed in Stage 1 search. Not specifically documented — needs ES-DOC check.

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O  | Ozone | GFDL-ATMCHEM4.1 internal computation | Replaces | Prognostic ozone replaces the input4MIPs CCMI prescribed field entirely |
| N-dep | N-deposition | Potentially GFDL-ATMCHEM4.1 internal deposition fields | Replaces? | If N-dep is derived from interactive chemistry run, NCAR-CCMI-2-0 would not be used |
| VL | Volcanic aerosols | Potentially center-specific AOD (unconfirmed) | Replaces? | Same open question as CM4 |

### Deviations from Eyring 2016 standard protocol
- **O (Ozone): ＋exc** — ESM4 runs full interactive chemistry (GFDL-ATMCHEM4.1) and computes ozone prognostically; does NOT use the prescribed CCMI dataset (UReading-CCMI-1-0) that the Eyring 2016 standard recommends for models without interactive chemistry. This EXCEEDS the standard (interactive > prescribed).
- No other confirmed deviations. VL remains open.

### Notes on CMIP5 lineage
- CMIP5 GFDL-ESM2M/2G: simpler ocean biogeochem (TOPAZ2), older AM2 atmosphere, limited aerosol scheme.
- CMIP6 GFDL-ESM4: completely new atmosphere (AM4.1 + GFDL-ATMCHEM4.1), new ocean biogeochem (COBALT/TOPAZ4), new land carbon (LM4.1). Major upgrade across all components.
- The AM4.0→AM4.1 distinction (CM4 vs ESM4) is specifically the addition of full interactive chemistry — the most important architectural difference between these two GFDL CMIP6 models.

## Open questions
1. **VL**: Did ESM4 use IACETH-SAGE3lambda-3-0-0 or a GFDL center-specific volcanic AOD?
2. **LU**: Confirm Hurtt et al. 2020 LUH2 v2.1h (UofMD-landState-2-1-h) — critical for LM4.1 land carbon
3. **N-dep**: Does ESM4 use NCAR-CCMI-2-0 or internally derive N-deposition from GFDL-ATMCHEM4.1?
4. **CO2 mode**: `historical` (concentration-driven) or `esm-hist` (emission-driven)?
5. **Iron/dust deposition**: Source for COBALT/TOPAZ4 ocean biogeochem (not in input4MIPs)?
6. **Supplemental forcings**: Check ES-DOC for any non-input4MIPs files

## Provenance
- WCRP-CMIP CVs source_id: GFDL-ESM4 confirmed in CMIP6_source_id.json
- Sources consulted: Dunne et al. 2020 (doi:10.1029/2019MS002015); Horowitz et al. 2020 (doi:10.1029/2019MS002032); Keeble et al. 2021 (ACP doi:10.5194/acp-21-5015-2021); Griffiths/Archibald et al. 2021 (ACP doi:10.5194/acp-21-4187-2021)
- Stage workflow run ID: wf_bc550b03-31e (2026-06-22)
