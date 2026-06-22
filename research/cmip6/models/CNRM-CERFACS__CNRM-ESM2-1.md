<!-- CMIP6 forcing record — CNRM-ESM2-1 (CNRM-CERFACS). Stage 7 workflow: wf_e2b2d348-b4e (2026-06-23) -->

# CNRM-ESM2-1 — Centre National de Recherches Météorologiques / CERFACS, France

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CNRM-CM5-2 (MOCAGE online chemistry)
- **Model family / lineage:** CNRM-CM6-1 + SURFEX v8 active C-N-P biogeochemistry + TRIPc carbon/nitrogen cycle + PISCES ocean BGC. Full ESM with REPROBUS-C_v2 interactive atmospheric chemistry. ARPEGE-Climat6 (T127L91).
- **Atmosphere / ocean components:** ARPEGE-Climat6 / NEMO3.6 + CICE5 + PISCES
- **Primary documentation paper(s):** Séférian et al. 2019, *JAMES* doi:10.1029/2019MS001885 [seferian_cnrm_esm_2019]; Michou et al. 2020, *JAMES* doi:10.1029/2019MS001816 [michou_cnrm_2020]
- **Forcing-specific reference(s):** Keeble et al. 2021, *ACP* 21:5015 [keeble_ozone_2021]

**TACTIC vs REPROBUS disambiguation**: TACTIC_v2 = the aerosol scheme in CNRM-ESM2-1 (interactive aerosols). REPROBUS-C_v2 = the online atmospheric chemistry scheme (ozone/chemistry). They are distinct components.

## Forcing datasets used (historical 1850–2014)

| Key | Forcing | Protocol (Eyring 2016) | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | ? | TV | Expected Meinshausen 2017; not confirmed | — | OPEN |
| O  | Ozone | Checa-Garcia et al. 2018 CCMI | ＋exc | TV | **REPROBUS-C_v2 fully interactive online atmospheric chemistry**. 168 reactions (39 photolysis, 9 heterogeneous), ~63 species, called every physics time step, down to/above 560 hPa, ozone coupled to radiation. One of only 6 CMIP6 models with interactive stratospheric chemistry. | Keeble et al. 2021; Michou et al. 2020; Séférian et al. 2019 | Keeble 2021: lists CNRM-ESM2-1 as one of exactly 6 CMIP6 models with interactive stratospheric chemistry (with CESM2-WACCM, CESM2-WACCM-FV2, GFDL-ESM4, MRI-ESM2-0, UKESM1-0-LL). Michou 2020: "online scheme in which the chemistry routines are part of the physics of the atmospheric climate model and are called at each time step." |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | ~ | TV | **TACTIC_v2 interactive aerosol scheme** — run fully interactively in CNRM-ESM2-1 (vs offline in CNRM-CM6-1). Emissions provenance (whether CEDS+BB4CMIP6) unconfirmed. | Michou et al. 2020 | Michou 2020: "CNRM-ESM2-1 has interactive tropospheric aerosols and chemistry of the midtroposphere aloft." Exact emission inputs not confirmed — CEDS+BB4CMIP6 expected but not verified. |
| SI | Aerosol — sulphate indirect | — | ~ | TV | As SD — indirect effects through interactive TACTIC_v2 scheme | Michou et al. 2020 | |
| BC | Black carbon | CEDS + BB4CMIP6 | ~ | TV | As SD | Michou et al. 2020 | |
| OC | Organic carbon | CEDS + BB4CMIP6 | ~ | TV | As SD | Michou et al. 2020 | |
| MD | Mineral dust | — | ? | ? | Not confirmed | — | OPEN |
| SS | Sea salt | — | ? | ? | Not confirmed | — | OPEN |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | ? | TV | Not confirmed | — | OPEN |
| SO | Solar irradiance | Matthes et al. 2017 | ? | TV | Not confirmed | — | OPEN |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | ? | TV | Not confirmed | — | OPEN |
| FC | Flux corrections | Not expected | n/a | n/a | None | — | |

### ESM-specific forcing inputs

| ESM input | Applied? | Verdict | Notes |
|-----------|----------|---------|-------|
| N-deposition (NHx/NOy) | Expected yes | ? | SURFEX C-N-P + TRIPc + PISCES — NCAR-CCMI-2-0 expected; not confirmed |
| CO2-mode | ? | ? | Concentration-driven expected for historical; not confirmed |
| Fe deposition (PISCES) | Possible | ? | PISCES ocean BGC may need Fe input; not confirmed |

### Deviations from Eyring 2016 standard protocol
- **O = ＋exc**: Fully interactive REPROBUS-C_v2 online chemistry — exceeds prescribed CCMI standard. Only 6 CMIP6 models do this.
- **SD/BC/OC = ~**: Interactive TACTIC_v2 aerosol scheme; whether emissions are CEDS+BB4CMIP6 (which would be ✓std) or other (✗dev) is unconfirmed.

## Provenance
- Stage 7 workflow run ID: wf_e2b2d348-b4e (2026-06-23)
- Key sources: Michou et al. 2020 (doi:10.1029/2019MS001816); Séférian et al. 2019 (doi:10.1029/2019MS001885); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)
