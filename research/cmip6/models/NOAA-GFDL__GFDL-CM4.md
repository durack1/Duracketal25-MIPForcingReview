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
| LU | Land-use change | Hurtt et al. 2011 LUH1 (CMIP5) | `LUH1-CMIP5` | ✗dev | TV | LM4.0 land model explicitly uses "CMIP5 forcing (Hurtt et al., 2011)" for land use/land cover change reconstructions. AMIP Appendix A confirms "land use is taken from…Hurtt et al. (2011)." This is the CMIP5 LUH1 dataset — NOT the CMIP6 standard LUH2 (Hurtt et al. 2020). | Zhao et al. 2018 Part 2 Sec. 10; Zhao et al. 2018 Part 1 App. A | [zhao_gfdl_am4_2018] | RESOLVED: LUH1 (CMIP5) used, not LUH2 (CMIP6) — ✗dev confirmed |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ✓std | TV | "Solar irradiance consistent with CMIP6 specifications"; Matthes et al. 2017 SOLARIS-HEPPA-3-2 inferred | Held et al. 2019 | [held_structure_2019] | Source_id SOLARIS-HEPPA-3-2 inferred from protocol; Held 2019 quote is generic |
| VL | Volcanic aerosols | Unconfirmed (prescribed stratospheric AOD) | — | ? | TV | Part 1 App. A: "we specify time series of stratospheric aerosol optical properties, which includes not only the volcanic contribution to stratospheric aerosol abundance but also other natural and anthropogenic contributions" — dataset NOT named. Thomason 2018/IACETH-SAGE3lambda unconfirmed. | Zhao et al. 2018 Part 1 App. A | [zhao_gfdl_am4_2018] | OPEN: stratospheric prescribed AOD confirmed but dataset name not given in Zhao 2018. Needs ES-DOC VL component check. |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### Supplemental / non-input4MIPs forcings

No supplemental non-input4MIPs forcings confirmed in Stage 1 search. Not specifically documented — needs ES-DOC or GFDL spec-sheet (goo.gl/r8up31) check.

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| VL | Volcanic aerosols | Prescribed stratospheric AOD (dataset unconfirmed) | Replaces IACETH standard? | Zhao 2018 Part 1 App. A confirms prescribed stratospheric AOD time series used; dataset not named. LUH1 (CMIP5) used for LU — confirmed ✗dev. |

### Deviations from Eyring 2016 standard protocol
- **LU deviation confirmed**: LM4.0 uses CMIP5 LUH1 (Hurtt et al. 2011) instead of the CMIP6 standard LUH2 (Hurtt et al. 2020). Zhao et al. 2018 Part 2 Sec. 10 explicitly states "CMIP5 forcing (Hurtt et al., 2011)." This is ✗dev.
- VL is still unresolved — stratospheric prescribed AOD confirmed in use but the specific dataset is not named in Zhao 2018.

### Notes on CMIP5 lineage
- **Critical reversal on ozone**: CMIP5 GFDL-CM3 used fully interactive AM3 chemistry (O=＋exc, all aerosols=＋exc). CMIP6 GFDL-CM4 reverts to PRESCRIBED ozone (O=✓std) in AM4.0 to reduce computational cost. This is the opposite of the usual CMIP5→CMIP6 direction (most centers moved toward more interactive in CMIP6).
- Aerosols remain interactive (CEDS+BB4CMIP6 emissions), consistent with the CMIP5 interactive aerosol approach in CM3.
- High ECS (~5K) + strong aerosol forcing → lack of historical warming pre-1990 (Held et al. 2019 self-critical statement).

## Open questions
1. **VL**: What specific stratospheric AOD dataset did CM4 use? Zhao 2018 Part 1 App. A confirms prescribed stratospheric AOD but does not name the dataset (Thomason 2018/IACETH-SAGE3lambda unconfirmed). Needs ES-DOC VL component check.
2. **Exact source_ids**: Verbatim confirmation of UoM-CMIP-1-2-0 (G), SOLARIS-HEPPA-3-2 (SO) from ES-DOC or spec-sheet
3. **Supplemental forcings**: Check goo.gl/r8up31 CMIP6 forcing spec-sheet and ES-DOC for any non-input4MIPs files

## Provenance
- WCRP-CMIP CVs source_id: GFDL-CM4 confirmed in CMIP6_source_id.json
- Sources consulted: Held et al. 2019 (doi:10.1029/2019MS001829); Zhao et al. 2018 (doi:10.1002/2017MS001208); Keeble et al. 2021 (ACP doi:10.5194/acp-21-5015-2021); Horowitz et al. 2020 (doi:10.1029/2019MS002032); Griffiths/Archibald et al. 2021 (ACP doi:10.5194/acp-21-4187-2021); Dunne et al. 2012 (J. Climate, GFDL-ESM2 — lineage context only, no CM4 forcing info)
- Stage workflow run ID: wf_bc550b03-31e (2026-06-22)
- Second-pass read (2026-06-27): Full text of Held et al. 2019 re-read in its entirety. Sec. 5.1 confirms land-use transitions (1750–1849 bridge run, secondary-growth forest tiles in historical) but does NOT name LUH2 or Hurtt 2020 explicitly — LU remains ?. Volcanic aerosols (VL) are not mentioned anywhere in the complete paper — VL remains ?. Dunne 2012 is CMIP5 ESM2 documentation with no relevance to CM4 forcing details.
- Third-pass read (2026-06-27): Full text of Dunne et al. 2020 JAMES (doi:10.1029/2019MS002015; GFDL-ESM4.1 description) read alongside Held 2019 as a cross-model check. Dunne 2020 Sec. 3.1 uses identical language to Held 2019 Sec. 5.1: "consistent with CMIP6 specifications (documented at http://goo.gl/r8up31)" for all forcings. Land use transitions confirmed for ESM4.1 historical runs (Table 1 lists LM4.1 with annual wood harvesting, crop/pasture/grazing; refs Lawrence et al. 2016 LUMIP), but LUH2/Hurtt 2020 not named explicitly. Volcanic aerosols: Dunne 2020 references "volcanic forcing sensitivity studies in CM4.0 suggest an important role for volcano aerosol interactions (Winton et al., 2020)" but names no dataset. Neither paper names the LU or VL dataset — both remain ?.
- Fourth-pass read (2026-06-27): Full text of Zhao et al. 2018 JAMES Part 1 (doi:10.1002/2017MS001208) and Part 2 (doi:10.1002/2017MS001209) read. LU RESOLVED: Part 2 Sec. 10 explicitly states "The reconstructions of land use/land cover change are from CMIP5 forcing (Hurtt et al., 2011)" — confirmed as LUH1 (CMIP5), NOT LUH2 (CMIP6) → ✗dev. Part 1 Appendix A corroborates: "land use is taken from the same year in Hurtt et al. (2011)" (fixed 1981 for AMIP). VL PARTIALLY RESOLVED: Part 1 Appendix A confirms prescribed stratospheric AOD used ("we specify time series of stratospheric aerosol optical properties, which includes not only the volcanic contribution...") but the specific dataset name is not given — VL remains ?.
