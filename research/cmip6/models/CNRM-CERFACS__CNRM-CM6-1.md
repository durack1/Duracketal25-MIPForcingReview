<!-- CMIP6 forcing record — CNRM-CM6-1 (CNRM-CERFACS). Stage 7 workflow: wf_e2b2d348-b4e (2026-06-23) -->

# CNRM-CM6-1 — Centre National de Recherches Météorologiques / CERFACS, France

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** CNRM-CM5 (O=＋exc MOBIDIC; SD/BC/OC=✗dev LMDZ-INCA offline; LU=✗dev excluded; VL=✗dev Ammann2007; MD/SS=FXc)
- **Model family / lineage:** ARPEGE-Climat6 atmosphere (T127L91) + SURFEX v8 land + NEMO3.6 ocean + CICE5. AOGCM (no active carbon cycle or interactive chemistry).
- **Atmosphere / ocean components:** ARPEGE-Climat6 / NEMO3.6 + CICE5
- **Primary documentation paper(s):** Voldoire et al. 2019, *JAMES* doi:10.1029/2019MS001770 [voldoire_cnrm_2019]; Michou et al. 2020, *JAMES* doi:10.1029/2019MS001816 [michou_cnrm_2020]
- **Forcing-specific reference(s):** Keeble et al. 2021, *ACP* 21:5015 [keeble_ozone_2021]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | Expected Meinshausen 2017; not confirmed from Stage 7 | — | OPEN |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | — | ~ | TV | **Linearized stratospheric ozone scheme** — ozone is a prognostic variable with photochemical production/loss rates precomputed monthly from CNRM-ESM2-1 interactive chemistry. Tropospheric ozone is prescribed from CMIP6 CCMI dataset. | Keeble et al. 2021; Voldoire et al. 2019; Michou et al. 2020 | Keeble 2021: "CNRM-CM6-1 uses a linearized scheme to model stratospheric ozone, in which ozone mixing ratios are treated as a prognostic variable with photochemical production and loss rates computed from its associated Earth system model (CNRM-ESM2-1). Tropospheric ozone mixing ratios are not calculated interactively and are instead prescribed from the CMIP6 dataset." Voldoire 2019: "prescribed aerosols and a linear stratospheric ozone scheme." Keeble classifies this as a "simplified online scheme" — intermediate between fully interactive and fully prescribed. NOT a continuation of CMIP5 CNRM-CM5 MOBIDIC scheme (MOBIDIC = separate 2-D interactive module; CNRM-CM6 uses a simpler linearized approach). |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 / MACv2-SP | — | ✗dev | TV | Prescribed monthly AOD fields (5 aerosol types) generated offline by the **TACTIC_v2 scheme** run in CNRM-ESM2-1, using the same emissions as CNRM-ESM2-1. NOT MACv2-SP, NOT interactive CEDS+BB4CMIP6. Center-specific offline-derived AOD. | Michou et al. 2020 | Michou 2020: "aerosols are prescribed through monthly aerosol optical depth (AOD) fields varying each year, coming from atmosphere-only type simulations using the TACTIC_v2 scheme and the same emissions as CNRM-ESM2-1." Exact emissions provenance (whether CEDS+BB4CMIP6 or other) not confirmed. Neither the MACv2-SP path nor the CEDS+BB4CMIP6 interactive path — ✗dev. |
| SI | Aerosol — sulphate indirect | Model-dependent | — | ✗dev | TV | Indirect effects included in the prescribed monthly TACTIC_v2-derived AOD fields, but non-standard provenance | Michou et al. 2020 | As SD — TACTIC_v2 offline fields |
| BC | Black carbon | CEDS + BB4CMIP6 / MACv2-SP | — | ✗dev | TV | As SD — included in TACTIC_v2 offline monthly AOD (5 aerosol types bundled) | Michou et al. 2020 | |
| OC | Organic carbon | CEDS + BB4CMIP6 / MACv2-SP | — | ✗dev | TV | As SD | Michou et al. 2020 | |
| MD | Mineral dust | Model-dependent | — | ? | ? | Not confirmed | — | OPEN |
| SS | Sea salt | Model-dependent | — | ? | ? | Not confirmed | — | OPEN |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Not confirmed from Stage 7. CMIP5 CNRM excluded LU (✗dev) — did CMIP6 SURFEX v8 add it? | — | OPEN |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | TV | Not confirmed from Stage 7 | — | OPEN |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | Not confirmed. CMIP5 used Ammann2007 (✗dev) — did CMIP6 switch to IACETH? | — | OPEN |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | |

### Deviations from Eyring 2016 standard protocol
- **O = ~**: Linearized semi-interactive stratospheric ozone (prognostic O3 with precomputed chemistry rates from CNRM-ESM2-1) + prescribed CCMI tropospheric ozone. Neither fully prescribed (✓std) nor fully interactive (＋exc). New scheme in CNRM-CM6, distinct from CMIP5 MOBIDIC.
- **SD/BC/OC = ✗dev**: Prescribed monthly TACTIC_v2-derived AOD fields — neither MACv2-SP nor CEDS+BB4CMIP6 interactive. Center-specific offline aerosol approach analogous to (but different from) CMIP5 CNRM-CM5 LMDZ-INCA offline product.

### Notes on CMIP5 lineage
- CMIP5 CNRM-CM5: MOBIDIC 2-D interactive ozone (＋exc), LMDZ-INCA offline aerosols (✗dev), LU excluded (✗dev), VL=Ammann2007 (✗dev). CMIP6 CNRM-CM6-1 changes the ozone scheme to linearized (partially interactive, ~) and continues with offline-generated aerosol AOD (still ✗dev but from TACTIC_v2 not LMDZ-INCA).
- The linearized ozone scheme is an improvement over LMDZ-INCA offline (which used pre-computed fields not derived from an interactive model), but still deviates from the purely-prescribed CCMI standard.

## Open questions
1. **G**: Meinshausen 2017 / UoM-CMIP-1-2-0 — not confirmed
2. **LU**: Did SURFEX v8 add Hurtt 2020 LUH2 land-use? (CMIP5 excluded)
3. **SO**: Matthes 2017 / SOLARIS-HEPPA-3-2?
4. **VL**: IACETH-SAGE3lambda-3-0-0? (CMIP5 used Ammann2007)
5. **TACTIC_v2 emissions**: Does TACTIC_v2 consume CEDS+BB4CMIP6 emissions, or different emissions?

## Provenance
- Stage 7 workflow run ID: wf_e2b2d348-b4e (2026-06-23); 31 agents; 11/14 confirmed, 3 killed
- Key sources: Michou et al. 2020 (doi:10.1029/2019MS001816); Voldoire et al. 2019 (doi:10.1029/2019MS001770); Keeble et al. 2021 (doi:10.5194/acp-21-5015-2021)
