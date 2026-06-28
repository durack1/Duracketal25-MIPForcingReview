<!-- CMIP6 forcing record — CanESM5-1 (CCCma). Stage 5 workflow: wf_743d4a9c-430 (2026-06-22) -->

# CanESM5-1 — Canadian Centre for Climate Modelling and Analysis, Canada

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** As CanESM5 (CanESM2 lineage)
- **Model family / lineage:** Incremental physics update of CanESM5. CanAM5.0.3 atmosphere (minor updates vs CanAM5.0.0) + CLASSIC land + CanOM4 ocean + CICE6. All atmospheric forcing expected identical to CanESM5 except solar (Matthes 2017 confirmed for CanAM5.0.3).
- **Atmosphere / ocean components:** CanAM5.0.3 / CanOM4 + CICE6
- **Primary documentation paper(s):** Cole et al. 2023, *GMD* 16:5427, doi:10.5194/gmd-16-5427-2023 [cole_canesm5_2023]; Swart et al. 2019, *GMD* 12:4823, doi:10.5194/gmd-12-4823-2019 [swart_canesm5_2019]
- **Forcing-specific reference(s):** Rieger et al. 2020, *GMD* 13:4831, doi:10.5194/gmd-13-4831-2020 [rieger_iaceth_2020]

## Forcing datasets used (historical 1850–2014) — see CCCma__CanESM5.md for full evidence

CanESM5-1 is a minor incremental update (CanAM5.0.3) of CanESM5 (CanAM5.0.0). All atmospheric forcing is identical to CanESM5 **except** solar irradiance, which was explicitly updated to Matthes 2017 (SOLARIS-HEPPA-3-2) in CanAM5.0.3.

| Key | Verdict | Temporal | Notes |
|-----|---------|----------|-------|
| G  | ✓std | TV | As CanESM5. input4MIPs uniqueness: UoM-CMIP-1-2-0 is the only CMIP6 historical GHG dataset; resolved 2026-06-28. |
| O  | ✓std | TV | As CanESM5. Checa-Garcia 2018 / UReading-CCMI-1-0. |
| SD | ✓std | TV | As CanESM5. Interactive prognostic, CEDS+BB4CMIP6 emissions. |
| SI | ✓std | TV | As CanESM5. Indirect effects included. |
| BC | ✓std | TV | As CanESM5. |
| OC | ✓std | TV | As CanESM5. |
| MD | ✓std | TV | As CanESM5. Prognostic size-dependent. |
| SS | ✓std | TV | As CanESM5. Prognostic wind-dependent. |
| LU | ✓std | TV | As CanESM5. LUH2 v2h (UofMD-landState-2-1-h). |
| SO | ✓std | TV | **Matthes et al. 2017 SOLARIS-HEPPA-3-2 confirmed for CanAM5.0.3.** Cole 2023: "The change in the downward solar flux is due to the use of updated solar forcing (Matthes et al., 2017) that has a reduced total solar irradiance, which is more consistent with observations and CERES." |
| VL | ✓std | TV | As CanESM5. IACETH-SAGE3lambda-3-0-0 v3. |
| FC | n/a | n/a | |

### ESM-specific forcing inputs (CLASSIC active C-N cycle)

| ESM input | Verdict | Notes |
|-----------|---------|-------|
| N-deposition | ? | As CanESM5. NCAR-CCMI-2-0 expected; not confirmed. |
| CO2-mode | conc.-driven | As CanESM5. |

### Deviations from Eyring 2016 standard protocol
- **No confirmed deviations.** All verified forcings follow the standard protocol.
- SO = ✓std confirmed (unlike CanESM5.0 which may have used a different solar — see CanESM5.md).

## Provenance
- Stage 5 workflow run ID: wf_743d4a9c-430 (2026-06-22)
- Primary source for SO confirmation: Cole et al. 2023 doi:10.5194/gmd-16-5427-2023
- Eighth-pass update (2026-06-28): (1) Primary paper DOI corrected — Swart 2019 is GMD 12:4823, doi:10.5194/gmd-12-4823-2019 (NOT JAMES doi:10.1029/2019MS001751). (2) G resolved to ✓std via input4MIPs uniqueness (UoM-CMIP-1-2-0 only CMIP6 historical GHG dataset; same argument as CanESM5 resolved same date).
