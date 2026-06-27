<!-- CMIP6 forcing record — INM-CM4-8 (INM). Stage 15 workflow: wf_75e312c8-82e (2026-06-27) -->

# INM-CM4-8 — INM (Russia)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** INM atmosphere (INM-AM4-8, 2°×1.5°, **L21 top ~10 hPa — LOW MODEL TOP**) + INMOM ocean (0.5°). AOGCM. Russian Institute for Numerical Mathematics. Low top (21 levels, sigma=0.01 ~10 hPa) limits stratospheric resolution. Same INM family as INM-CM5-0 but with older shallow atmosphere. Primary paper: Volodin et al. 2018 (*JAMES* doi:10.1029/2017MS001065).
- **CMIP5 predecessor:** INM-CM4 (CMIP5)
- **Primary documentation paper(s):** Volodin et al. 2018 (*JAMES* doi:10.1029/2017MS001065)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ? | ? | Expected ✓std (Meinshausen 2017) by family inference from INM-CM5-0; not confirmed from Volodin et al. 2018. | — | Volodin et al. 2018 (primary paper) not successfully extracted in Stage 15. |
| O  | Ozone | ? | ? | Summary suggests prescribed ozone per CMIP6 (both INM models); low L21 top may limit stratospheric ozone treatment. Not in Keeble 2021 interactive list. | — | Not confirmed from primary source. |
| SD | Aerosol — sulphate direct | ? | ? | Aerosol treatment not confirmed. INM-CM5-0 uses INM-AER1 interactive block (✗dev). CM4-8 aerosol scheme should be confirmed separately — claim that CM4-8 uses INM-AER1 was refuted (0-1) as unconfirmed. | — | Requires Volodin et al. 2018 §model description. |
| SI | Aerosol — sulphate indirect | ? | ? | Not confirmed. | — | |
| BC | Black carbon | ? | ? | Not confirmed. | — | |
| OC | Organic carbon | ? | ? | Not confirmed. | — | |
| MD | Mineral dust | ? | ? | Not confirmed. | — | |
| SS | Sea salt | ? | ? | Not confirmed. | — | |
| LU | Land-use change | ? | ? | Not confirmed. | — | |
| SO | Solar irradiance | ? | ? | Expected ✓std by family inference from INM-CM5-0 (Volodin & Gritsun 2018 verbatim for CM5-0). Not confirmed from CM4-8 primary source. | — | |
| VL | Volcanic aerosols | ? | ? | Expected ✓std by family inference from INM-CM5-0. Not confirmed from CM4-8 primary source. | — | |
| FC | Flux corrections | n/a | n/a | None | | |

### Deviations from Eyring 2016 standard protocol
- **All verdicts ?**: Primary source (Volodin et al. 2018) not successfully extracted in Stage 15. INM-CM4-8 should not be assumed identical to INM-CM5-0 — aerosol treatment in particular should be confirmed separately.
- **Low model top**: L21 top ~10 hPa may affect ozone dataset compatibility and volcanic aerosol treatment.

## Provenance
- Stage 15 workflow run ID: wf_75e312c8-82e (2026-06-27); no confirmed findings for CM4-8 (Volodin 2018 not extracted)
- Key sources: Volodin et al. 2018 (*JAMES* doi:10.1029/2017MS001065, not retrieved); WDC-Climate: atmos confirmed as INM-AM4-8 (2×1.5, L21, top sigma=0.01); cross-reference INM-CM5-0 family (Volodin & Gritsun 2018) for expected pattern
- Requires: targeted second pass reading Volodin et al. 2018 §2 for GHG, ozone, aerosol, LU, solar, volcanic treatment
