<!-- CMIP6 forcing record — GFDL-CM4 (NOAA-GFDL). Created 2026-06-22; Stage 1 workflow: wf_bc550b03-31e -->

# GFDL-CM4 — NOAA Geophysical Fluid Dynamics Laboratory, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** GFDL-CM3 / GFDL-CM2.1
- **Model family / lineage:** AM4.0 atmosphere (LM4 land surface) + MOM6/OM4 ocean + SIS2 sea ice. AOGCM — no interactive chemistry or carbon cycle.
- **Atmosphere / ocean components:** AM4.0 (LM4.0) / OM4 (MOM6 + SIS2); ~100km atm, 0.25° ocean
- **Primary documentation paper(s):** Held et al. 2019, *JAMES* 11(11) 3691–3727, doi:10.1029/2019MS001829 [held_structure_2019]; Zhao et al. 2018, *JAMES* 10(3) 735–769, doi:10.1002/2017MS001208 [zhao_gfdl_am4_2018]
- **Forcing-specific reference(s):** Keeble et al. 2021, *ACP* 21, 5015–5061 (ozone evaluation) [keeble_ozone_2021]; Horowitz et al. 2020, *JAMES* doi:10.1029/2019MS002032 (AM4.1, contrasts with AM4.0) [horowitz_gfdl_am4_2020]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

`Protocol` = Eyring et al. 2016 standard CMIP6 `historical` recommended dataset.
`Verdict` = **✓std** · **＋exc** (interactive > prescribed) · **✗dev** · **~** unclear · **?** unknown · **n/a** not applied.
`Temporal` = **TV** · **FXc** · **FXk** (with units) · **n/a** · **?**

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ✓std | TV | Meinshausen et al. 2017 GHG concentrations; "consistent with CMIP6 specifications" | Held et al. 2019 | [held_structure_2019] | Source_id inferred from protocol; not explicitly named in Held 2019 |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✓std | TV | CMIP6 CCMI v1.0 prescribed ozone (Checa-Garcia et al. 2018) — prescribed throughout troposphere and stratosphere; AM4.0 has NO interactive ozone chemistry | Keeble et al. 2021; Zhao et al. 2018 | [keeble_ozone_2021; zhao_gfdl_am4_2018] | **AM4.0 reversal from CMIP5 CM3**: CM3 used fully interactive AM3 chemistry (O=exc); CM4 AM4.0 prescribes ozone to avoid the "high computational cost of interactive atmospheric chemistry". Keeble et al. 2021 (ACP): "Ozone is prescribed using the recommended CMIP6 dataset throughout the troposphere and stratosphere." Source_id UReading-CCMI-1-0 inferred from Eyring2016 standard — not quoted from GFDL. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | CEDS anthropogenic precursor emissions (Hoesly et al. 2018) + GFED4s/BB4CMIP6 biomass burning (van Marle et al. 2017). AM4.0 "light chemistry" computes aerosols interactively from precursor emissions. NOT MACv2-SP. | Held et al. 2019; Zhao et al. 2018 | [held_structure_2019; zhao_gfdl_am4_2018] | 17 prognostic aerosol species in AM4.0; biomass burning is GFED4s post-1997 + van Marle 2017/BB4CMIP6 pre-1997 hybrid |
| SI | Aerosol — sulphate indirect | Model-dependent | — | ✓std | TV | Interactive first and second indirect effects via AM4.0 two-moment aerosol module | Zhao et al. 2018 | [zhao_gfdl_am4_2018] | |
| BC | Black carbon | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD — interactive from CEDS + BB4CMIP6/GFED4s emissions | Held et al. 2019; Zhao et al. 2018 | [held_structure_2019; zhao_gfdl_am4_2018] | |
| OC | Organic carbon | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD | Held et al. 2019; Zhao et al. 2018 | [held_structure_2019; zhao_gfdl_am4_2018] | |
| MD | Mineral dust | Model-dependent | — | ~ | TV | Likely interactive (AM4.0 dust scheme with prognostic dust tracers); not explicitly confirmed | Zhao et al. 2018 | [zhao_gfdl_am4_2018] | |
| SS | Sea salt | Model-dependent | — | ~ | TV | Likely interactive (AM4.0 sea-salt scheme); not explicitly confirmed | Zhao et al. 2018 | [zhao_gfdl_am4_2018] | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Not confirmed in Stage 1 search; expected standard (LUH2 v2.1h) given general CMIP6-compliance statement | — | — | OPEN: needs ES-DOC or supplemental spec confirmation |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ✓std | TV | "Solar irradiance consistent with CMIP6 specifications"; Matthes et al. 2017 SOLARIS-HEPPA-3-2 inferred | Held et al. 2019 | [held_structure_2019] | Source_id SOLARIS-HEPPA-3-2 inferred from protocol; Held 2019 quote is generic |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | Unknown — standard IACETH-SAGE3lambda-3-0-0 unconfirmed; Stenchikov et al. 2006-derived claim REFUTED by adversarial verifier | — | — | OPEN: this is a key unresolved question. Stenchikov claim refuted = CM4 likely did NOT use CMIP5-era volcanic; but what IS used is unknown. Needs ES-DOC VL component check. |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### Supplemental / non-input4MIPs forcings

No supplemental non-input4MIPs forcings confirmed in Stage 1 search. Not specifically documented — needs ES-DOC or GFDL spec-sheet (goo.gl/r8up31) check.

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| VL | Volcanic aerosols | Potentially center-specific AOD (unconfirmed) | Replaces? | Stenchikov et al. 2006-based claim was REFUTED; true VL source remains open |

### Deviations from Eyring 2016 standard protocol
- **No confirmed deviations.** All confirmed forcings (G, O, SD/BC/OC, SO) follow the standard protocol.
- VL is unresolved — if GFDL used a center-specific volcanic product rather than IACETH-SAGE3lambda-3-0-0, that would be a deviation.

### Notes on CMIP5 lineage
- **Critical reversal on ozone**: CMIP5 GFDL-CM3 used fully interactive AM3 chemistry (O=＋exc, all aerosols=＋exc). CMIP6 GFDL-CM4 reverts to PRESCRIBED ozone (O=✓std) in AM4.0 to reduce computational cost. This is the opposite of the usual CMIP5→CMIP6 direction (most centers moved toward more interactive in CMIP6).
- Aerosols remain interactive (CEDS+BB4CMIP6 emissions), consistent with the CMIP5 interactive aerosol approach in CM3.
- High ECS (~5K) + strong aerosol forcing → lack of historical warming pre-1990 (Held et al. 2019 self-critical statement).

## Open questions
1. **VL**: Did CM4 use IACETH-SAGE3lambda-3-0-0 or a GFDL center-specific volcanic AOD? (Stenchikov 2006 claim refuted; true source unknown)
2. **LU**: Confirm Hurtt et al. 2020 LUH2 v2.1h (UofMD-landState-2-1-h) — expected but not explicitly found
3. **Exact source_ids**: Verbatim confirmation of UoM-CMIP-1-2-0 (G), SOLARIS-HEPPA-3-2 (SO) from ES-DOC or spec-sheet
4. **Supplemental forcings**: Check goo.gl/r8up31 CMIP6 forcing spec-sheet and ES-DOC for any non-input4MIPs files

## Provenance
- WCRP-CMIP CVs source_id: GFDL-CM4 confirmed in CMIP6_source_id.json
- Sources consulted: Held et al. 2019 (doi:10.1029/2019MS001829); Zhao et al. 2018 (doi:10.1002/2017MS001208); Keeble et al. 2021 (ACP doi:10.5194/acp-21-5015-2021); Horowitz et al. 2020 (doi:10.1029/2019MS002032); Griffiths/Archibald et al. 2021 (ACP doi:10.5194/acp-21-4187-2021)
- Stage workflow run ID: wf_bc550b03-31e (2026-06-22)
