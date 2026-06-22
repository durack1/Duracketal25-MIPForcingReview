<!-- CMIP6 forcing record — CESM2-WACCM (NCAR). Populated 2026-06-22 from Stage 3 workflow wf_5c9d74cf-149. -->

# CESM2-WACCM — National Center for Atmospheric Research, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CESM1-WACCM (interactive chemistry, O=＋exc in CMIP5; confirmed continuation)
- **Model family / lineage:** WACCM6 atmosphere (Whole Atmosphere Community Climate Model) with full TSMLT interactive chemistry + CLM5 land + POP2/MOM6 ocean. Model top ~140 km.
- **Atmosphere / ocean components:** WACCM6 / POP2 + MOM6 + CICE5
- **Primary documentation paper(s):** Gettelman et al. 2019, *JGR* doi:10.1029/2019JD030943 [gettelman_waccm6_2019]; Danabasoglu et al. 2020, *JAMES* doi:10.1029/2019MS001916 [danabasoglu_cesm2_2020]
- **Forcing-specific reference(s):** Emmons et al. 2020, *JAMES* doi:10.1029/2019MS001882; Keeble et al. 2021, *ACP* 21, 4187 doi:10.5194/acp-21-4187-2021

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ~ | TV | Meinshausen 2017 GHG concentrations (medium confidence) | | meinshausen_shared_2017 | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ＋exc | TV | WACCM6 TSMLT fully interactive chemistry: ~228 prognostic (231 total) species; troposphere + stratosphere + mesosphere + lower thermosphere. Ozone calculated prognostically — prescribed CCMI dataset not used. MAM4 aerosol scheme. | Gettelman et al. 2019; Emmons et al. 2020; Keeble et al. 2021 | gettelman_waccm6_2019; emmons_2020_james; keeble_2021_acp | Keeble 2021 (*ACP* 21,4187) verbatim: "The CESM2-WACCM model includes interactive chemistry and aerosols for the troposphere, stratosphere and lower thermosphere with 228 chemical compounds, including the four-mode Modal Aerosol Model (MAM4)." 150 photolysis + 403 gas-phase reactions. Consistent with CMIP5 CESM1-WACCM (also ＋exc). |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | CEDS (Hoesly et al. 2018) anthropogenic + BB4CMIP6 (van Marle et al. 2017) biomass-burning emissions, interactive through MAM4 aerosol scheme. Upgrade from CMIP5 ACCMIP Lamarque 2010. | Emmons et al. 2020; Keeble et al. 2021 | emmons_2020_james | Keeble 2021 (*ACP* 21,4187): "Anthropogenic and biomass burning emissions are prescribed (Hoesly et al., 2018; van Marle et al., 2017a)" |
| SI | Aerosol — sulphate indirect | — | — | ~ | TV | Interactive via MAM4 (four-mode modal aerosol model) — includes aerosol-cloud interactions | | | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD — CEDS + BB4CMIP6, interactive MAM4 | Emmons et al. 2020 | emmons_2020_james | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ✓std | TV | As SD | Emmons et al. 2020 | emmons_2020_james | |
| MD | Mineral dust | — | — | ~ | TV | Interactive in MAM4 | | | |
| SS | Sea salt | — | — | ~ | TV | Interactive in MAM4 | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ~ | TV | As CESM2 — CLM5 land component (medium confidence) | | | |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ~ | TV | SOLARIS-HEPPA-3-2 spectrally resolved (medium confidence); WACCM6 resolves solar spectral variability | | | WACCM6 middle atmosphere responds to SSI spectrum — SOLARIS-HEPPA-3-2 provides full spectral input (not just TSI) |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ＋exc | TV | WACCM6 MAM4 computes stratospheric sulfate aerosol prognostically from volcanic SO2 emissions — interactive stratospheric aerosol. The WACCM6 output is then used to create the prescribed fields for CESM2/CESM2-FV2 (CAM6). | Gettelman et al. 2019; Danabasoglu et al. 2020 | gettelman_waccm6_2019; danabasoglu_cesm2_2020 | CESM2-WACCM IS THE SOURCE of the CESM2/FV2 VL deviation (the WACCM6 output file is what CAM6 prescribes) |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### ESM-specific forcing inputs (WACCM6 + CLM5 active biogeochemistry)

| ESM input | Applied? | Dataset / source | input4MIPs source_id | Notes |
|-----------|----------|-----------------|---------------------|-------|
| N-deposition (NHx/NOy) | ? | NCAR-CCMI-2-0 expected (NCAR is source center) OR computed online via WACCM6 chemistry | `NCAR-CCMI-2-0` | WACCM6 interactive N chemistry may produce N-dep online — could mean CESM2-WACCM is effectively the source of the NCAR-CCMI-2-0 product |
| CO2: conc.- or emission-driven | ~ | Meinshausen 2017 conc. (`historical`) | `UoM-CMIP-1-2-0` | |

### Supplemental / non-input4MIPs forcings

*None for CESM2-WACCM — all forcings handled via interactive chemistry (O, VL) or standard input4MIPs emissions (SD/BC/OC). The ozone_strataero_WACCM6-derived file is only used as supplemental input for CESM2 and CESM2-FV2 (not for CESM2-WACCM itself).*

## Open questions

1. G: Meinshausen 2017 UoM-CMIP-1-2-0 — medium confidence; not explicitly confirmed
2. LU: Hurtt 2020 LUH2 v2.1h for CLM5 — not confirmed
3. SO: SOLARIS-HEPPA-3-2 confirmed? WACCM6 spectral solar confirmed as standard dataset
4. N-dep: NCAR-CCMI-2-0 vs online WACCM6 chemistry — which pathway?
5. CO2 mode: concentration-driven (standard) or emission-driven for WACCM6?

## Provenance
- Stage 3 workflow run ID: wf_5c9d74cf-149
- Key primary sources: Gettelman et al. 2019 (*JGR* doi:10.1029/2019JD030943); Emmons et al. 2020 (*JAMES* doi:10.1029/2019MS001882); Keeble et al. 2021 (*ACP* 21, 4187, doi:10.5194/acp-21-4187-2021); Keeble et al. 2021 (*ACP* 21, 5015, doi:10.5194/acp-21-5015-2021); Danabasoglu et al. 2020 (*JAMES* doi:10.1029/2019MS001916)
