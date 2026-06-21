# access1_3 — CSIRO/BOM (CSIRO & Bureau of Meteorology, Australia)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none (as ACCESS1-0)
- **Model family / lineage:** ACCESS1.3 = ACCESS1.0 with different convection (Kain-Fritsch 2 replacing Gregory-Rowntree) and different autoconversion scheme. Same HadGEM2-A atmosphere (UM7.3), MOM4p1 ocean, CABLE2 land. All forcing datasets expected identical to ACCESS1-0.
- **Atmosphere / ocean components:** As ACCESS1-0 (same HadGEM2-A atmosphere; same physics except convection/autoconversion)
- **Primary documentation paper(s):** Bi, D., et al. (2013). The ACCESS coupled model: description, control climate and evaluation. *Aust. Meteorol. Oceanogr. J.* 63(1), 41–64. doi:10.22499/2.6301.004 [bi_access_2013 *(add)*]
- **Forcing-specific reference(s):** As ACCESS1-0

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries inferred from ACCESS1-0 (identical HadGEM2-A atmosphere; only convection parameterization and autoconversion differ). Not independently verified.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std (inferred) | TV | As ACCESS1-0 | meinshausen_rcp_2011 | meinshausen_rcp_2011 | |
| O  | Ozone | Cionni et al. 2011 | ✓std (inferred) | TV | Cionni2011 (as ACCESS1-0) | bi_access_2013 *(add)* | bi_access_2013 *(add)* | Inherited from ACCESS1-0 (same HadGEM2-A; no interactive chemistry) |
| SD | Sulphate direct | Lamarque et al. 2010 | ? (inferred) | ? | As ACCESS1-0 | — | — | As ACCESS1-0; cross-check UKMO Stage 8 |
| SI | Sulphate indirect | Model-dependent | ? (inferred) | ? | As ACCESS1-0 | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? (inferred) | ? | As ACCESS1-0 | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? (inferred) | ? | As ACCESS1-0 | — | — | |
| MD | Mineral dust | — | ? (inferred) | ? | As ACCESS1-0 | — | — | |
| SS | Sea salt | — | ? (inferred) | ? | As ACCESS1-0 | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? (inferred) | ? | As ACCESS1-0 | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? (inferred) | ? | As ACCESS1-0 | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? (inferred) | ? | As ACCESS1-0 | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM. Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 5 workflow: wf_6a1942cb-0da (2026-06-21) — all entries inferred from ACCESS1-0 (identical HadGEM2-A atmosphere)
