<!-- CMIP6 forcing record — CAMS-CSM1-0 (CAMS). Stage 6 workflow: wf_1a7b005d-ffd (2026-06-22) -->

# CAMS-CSM1-0 — Chinese Academy of Meteorological Sciences, China

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** None (new CMIP6 entrant)
- **Model family / lineage:** ECMWF IFS-based atmosphere (T106L31 spectral dynamical core) + CLM4 land + MOM4 ocean + CICE4 sea ice. AOGCM — no active carbon cycle.
- **Atmosphere / ocean components:** IFS-based T106L31 / MOM4 + CICE4
- **Primary documentation paper(s):** He et al. 2019, *JAMES* doi:10.1029/2018MS001602 [he_cams_2019]; He et al. 2020, *Adv. Atmos. Sci.* doi:10.1007/s00376-020-0171-y [he_cams_hist_2020]

## Forcing datasets used (historical 1850–2014)

Stage 6 search confirmed only GHG forcing from He et al. 2020 (the historical dataset description paper). All other forcings unresolved — no primary source quotes found for O/SD/BC/OC/LU/SO/VL.

| Key | Forcing | Protocol (Eyring 2016) | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | ✓std | TV | Meinshausen et al. 2017; CO2, CH4, N2O, CFC-12, equivalent CFC-11 | He et al. 2020 | He 2020 (AAS) verbatim: "historical greenhouse gases (CO2, CH4, N2O, CFC-12, and equivalent CFC-11)" citing Meinshausen 2017. Only confirmed forcing from Stage 6. |
| O  | Ozone | Checa-Garcia et al. 2018 | ? | ? | Unknown — no primary source text found | — | OPEN |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | ? | ? | Unknown | — | OPEN |
| SI | Aerosol — sulphate indirect | Model-dependent | ? | ? | Unknown | — | OPEN |
| BC | Black carbon | CEDS + BB4CMIP6 / MACv2-SP | ? | ? | Unknown | — | OPEN |
| OC | Organic carbon | CEDS + BB4CMIP6 / MACv2-SP | ? | ? | Unknown | — | OPEN |
| MD | Mineral dust | Model-dependent | ? | ? | Unknown | — | OPEN |
| SS | Sea salt | Model-dependent | ? | ? | Unknown | — | OPEN |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | ? | ? | Unknown — CLM4 land model | — | OPEN |
| SO | Solar irradiance | Matthes et al. 2017 | ? | ? | Unknown | — | OPEN |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | ? | ? | Unknown | — | OPEN |
| FC | Flux corrections | Not expected | n/a | n/a | None expected | — | |

## Open questions
1. All forcing datasets except G remain unconfirmed — primary source He et al. 2019 (JAMES) not fetched; He et al. 2020 (AAS) confirmed only G. ES-DOC and WDC-Climate metadata may contain forcing details.
2. Does the IFS-based atmosphere inherit any ECMWF forcing lineage, or use standard CMIP6 input4MIPs throughout?
3. CLM4 land — is LU from LUH2 v2.1h (CMIP6 standard)?
4. MOM4 ocean — any ocean BGC inputs?

## Provenance
- WCRP-CMIP CVs source_id: CAMS-CSM1-0 confirmed in CMIP6_source_id.json
- Sources: He et al. 2020 (doi:10.1007/s00376-020-0171-y); WDC-Climate metadata
- Stage 6 workflow run ID: wf_1a7b005d-ffd (2026-06-22); CAMS substantially under-documented; all forcings except G remain open
