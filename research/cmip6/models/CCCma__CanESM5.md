<!-- CMIP6 forcing record — CanESM5 (CCCma). Stage 5 workflow: wf_743d4a9c-430 (2026-06-22) -->

# CanESM5 — Canadian Centre for Climate Modelling and Analysis, Canada

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CanESM2 (CanAM4 atm; Cionni 2011 O ✓std; interactive aerosols with SA 1st indirect)
- **Model family / lineage:** CanAM5 atmosphere (spectral T63L49) + CLASSIC land (C-N active) + CanOM4 ocean + CICE6 sea ice. ESM with active terrestrial carbon cycle.
- **Atmosphere / ocean components:** CanAM5 / CanOM4 + CICE6
- **Primary documentation paper(s):** Swart et al. 2019, *JAMES* doi:10.1029/2019MS001751 [swart_canesm5_2019]; Cole et al. 2023, *GMD* 16:5427, doi:10.5194/gmd-16-5427-2023 [cole_canesm5_2023]
- **Forcing-specific reference(s):** Rieger et al. 2020, *GMD* 13:4831, doi:10.5194/gmd-13-4831-2020 [rieger_iaceth_2020]; Keeble et al. 2021, *ACP* 21:5015, doi:10.5194/acp-21-5015-2021 [keeble_ozone_2021]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

`Protocol` = Eyring et al. 2016 standard CMIP6 `historical` recommended dataset.
`Verdict` = **✓std** · **＋exc** (interactive > prescribed) · **✗dev** · **~** unclear · **?** unknown · **n/a** not applied.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | Expected Meinshausen 2017 GHG concentrations; not directly named in Swart 2019 | — | — | OPEN: expected ✓std but not explicitly confirmed by primary source |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✓std | TV | Standard CMIP6 CCMI ozone (Checa-Garcia et al. 2018 / UReading-CCMI-1-0). CanAM5 is NOT an interactive chemistry model. | Swart et al. 2019 | [swart_canesm5_2019] | Swart 2019 verbatim: "O3 is specified as varying spatially – typically employing that prescribed for CMIP6 (Checa-Garcia et al., 2018)." The hedge "typically" flags that specialized MIP experiments (e.g., DAMIP hist-stratO3) substitute alternative fields, but the standard historical run uses the prescribed CMIP6 default. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | Interactive prognostic bulk aerosol scheme consuming CEDS + BB4CMIP6 emissions. NOT MACv2-SP. | Swart et al. 2019; Cole et al. 2023 | [swart_canesm5_2019; cole_canesm5_2023] | Swart 2019: "Aerosols are parameterized using a prognostic scheme for bulk concentrations of natural and anthropogenic aerosols, including sulfate, black and organic carbon, sea salt, and mineral dust." Gas-phase/aqueous chemistry uses specified climatological oxidants ("specified oxidants for aerosols" per WDC-Climate CV) — not full interactive chemistry. |
| SI | Aerosol — sulphate indirect | Model-dependent | — | ✓std | TV | First and second indirect effects included in CanAM5 interactive aerosol scheme | Swart et al. 2019 | [swart_canesm5_2019] | Both direct and indirect effects coupled to meteorology |
| BC | Black carbon | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD — prognostic interactive bulk BC from emissions | Swart et al. 2019 | [swart_canesm5_2019] | |
| OC | Organic carbon | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD — prognostic interactive bulk OC from emissions | Swart et al. 2019 | [swart_canesm5_2019] | |
| MD | Mineral dust | Model-dependent | — | ✓std | TV | Prognostic size-dependent mineral dust emission scheme (online, coupled to meteorology) | Cole et al. 2023 | [cole_canesm5_2023] | Cole 2023 (CanAM5.0.3): prognostic dust with size-dependent emission |
| SS | Sea salt | Model-dependent | — | ✓std | TV | Prognostic wind-dependent sea salt emission (online) | Swart et al. 2019 | [swart_canesm5_2019] | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ✓std | TV | LUH2 v2h (UofMD-landState-2-1-h); CLASSIC land model uses crop-area change | Swart et al. 2019 | [swart_canesm5_2019] | Swart 2019 Section 2.2: "increase in crop area over the historical period is based on LUH2 v2h product (http://luh.umd.edu/data.shtml, last access: 1 October 2017)." NOTE: Swart cites Hurtt et al. 2011 (CMIP5 LUH1 reference — a common mis-citation); the correct CMIP6 reference is Hurtt et al. 2020. The "v2h" pre-final label vs published "v2.1h" is also Swart 2019 imprecision. |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | TV | Uncertain for CanESM5.0 — Cole et al. 2023 frames Matthes 2017 as a *change* introduced in CanAM5.0.3 (CanESM5-1), implying CanESM5.0 used a different/older solar forcing. | Cole et al. 2023 | [cole_canesm5_2023] | OPEN: Cole 2023: "The change in the downward solar flux is due to the use of updated solar forcing (Matthes et al., 2017)..." This phrasing refers to what *changed* in CanAM5.0.3 vs CanAM5.0.0, so the baseline CanESM5.0 solar remains unconfirmed. See CanESM5-1.md for confirmed ✓std. |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ✓std | TV | IACETH-SAGE3lambda-3-0-0 v3; endorsed for all contributing CMIP6 simulations. v4 was sensitivity test only. | Rieger et al. 2020 | [rieger_iaceth_2020] | Rieger et al. 2020 (GMD 13:4831; CCCma+PCMDI authors including P. Durack): "This composes the IACETH-SAGE3lambda-3-0-0 dataset available from input4MIPs"; "version 3 remains the official CMIP6 input." v4 branched off at end-1989 as sensitivity test only. |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | CanESM5 is a modern CMIP6 AOGCM without flux corrections |

### ESM-specific forcing inputs (CLASSIC active C-N cycle)

| ESM input | Applied? | Verdict | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|---------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | Expected yes | ? | NCAR-CCMI-2-0 expected (CLASSIC C-N terrestrial cycle); not confirmed from surviving Stage 5 claims | `NCAR-CCMI-2-0` | OPEN |
| CO2: conc.- or emission-driven | Conc.-driven | ✓ | Concentration-driven historical; confirmed by Christian et al. 2022: "prescribed atmospheric CO2 concentration" for CMIP6 DECK historical | — | Standard CMIP6 `historical` protocol |

### Supplemental / non-input4MIPs forcings

None identified. All confirmed forcings use standard input4MIPs products or interactive schemes consuming standard emissions.

### Deviations from Eyring 2016 standard protocol
- **No confirmed deviations.** First CLEAN PASS stage across all verified forcings.
- SO for CanESM5.0 is unresolved — if the baseline model used a pre-Matthes 2017 solar product, this would be a deviation. See Open Questions.

### Notes on CMIP5 lineage
- CMIP5 CanESM2 used Cionni 2011 ozone (✓std) and interactive aerosols with 1st indirect effect. CanESM5 continues this approach, upgrading to Checa-Garcia 2018 ozone and CEDS/BB4CMIP6 emissions — consistent with CMIP6 standard protocol throughout.
- Key CMIP6 upgrade: aerosol emissions source upgraded from Lamarque 2010 ACCMIP → CEDS 2017/BB4CMIP6.
- Ocean BGC: CMOC replaced by CanOE in CanESM5-CanOE variant (NOT TOPAZ — CMOC was always the default).

## Open questions
1. **G**: Confirm Meinshausen 2017 / UoM-CMIP-1-2-0 explicitly from ES-DOC or Swart 2019 supplement
2. **SO (CanESM5.0)**: Did the original CanESM5.0 historical runs use SOLARIS-HEPPA-3-2 (Matthes 2017), or an earlier solar forcing? Cole 2023 implies Matthes 2017 was newly adopted in CanAM5.0.3 (CanESM5-1).
3. **N-dep**: Confirm NCAR-CCMI-2-0 for CLASSIC terrestrial C-N cycle
4. **Direct input4MIPs provenance**: Verify exact source_id strings from CanESM5 historical netCDF global attributes

## Provenance
- WCRP-CMIP CVs source_id: CanESM5 confirmed in CMIP6_source_id.json
- Sources consulted: Swart et al. 2019 (doi:10.1029/2019MS001751); Cole et al. 2023 (doi:10.5194/gmd-16-5427-2023); Rieger et al. 2020 (doi:10.5194/gmd-13-4831-2020); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021); Christian et al. 2022 (doi:10.5194/gmd-15-4393-2022)
- Stage 5 workflow run ID: wf_743d4a9c-430 (2026-06-22); 28 agents; 14/14 claims confirmed, 0 killed
