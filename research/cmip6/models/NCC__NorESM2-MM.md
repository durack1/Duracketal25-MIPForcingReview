<!-- CMIP6 forcing record — NorESM2-MM (NCC). Stage 13 complete (2026-06-26). -->

# NorESM2-MM — NCC (Norway)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** As NorESM2-LM but higher horizontal resolution (~1°). OsloAero6 interactive aerosol. All prescribed forcing confirmed identical to NorESM2-LM (resolution only differs).
- **Primary paper:** Seland et al. 2020, *GMD* doi:10.5194/gmd-13-6165-2020
- **CMIP5 predecessor:** NorESM1-ME (same family as NorESM2-LM)

## Forcing (CMIP6 historical, 1850–2014)

All forcing identical to NorESM2-LM. Seland et al. 2020 verbatim: "The forcing fields for all the experiments are generally the same as those used in CESM2.1"; LM and MM "differ by the horizontal resolution of the atmosphere and land components."

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | As NorESM2-LM (Meinshausen 2017, UoM-CMIP-1-2-0) | ✓std | TV |
| O — Ozone | As NorESM2-LM (WACCM6-derived from CESM2, NOT CCMI) | ✗dev | TV |
| SD — Sulfate direct | As NorESM2-LM (OsloAero6, CEDS+BB4CMIP6) | ✓std | TV |
| SI — Sulfate indirect | As NorESM2-LM | ✓std | TV |
| BC — Black carbon | As NorESM2-LM | ✓std | TV |
| OC — Organic carbon | As NorESM2-LM | ✓std | TV |
| MD — Mineral dust | As NorESM2-LM (OsloAero6 prognostic) | ✓std | TV |
| SS — Sea salt | As NorESM2-LM (OsloAero6 prognostic) | ✓std | TV |
| LU — Land use | As NorESM2-LM (LUH2 v2.1h inferred via CLM5) | ✓std | TV |
| SO — Solar | As NorESM2-LM (Matthes 2017, SOLARIS-HEPPA-3-2) | ✓std | TV |
| VL — Volcanic | As NorESM2-LM (Thomason 2018 CMIP6 SAD, separate stream) | ✓std | TV |
| FC — Fixed composition | n/a (AOGCM) | n/a | — |

## Sources
- Seland et al. 2020 (*GMD* doi:10.5194/gmd-13-6165-2020) — primary; NorESM2-LM/-MM treated as single entry; LM/MM sharing confirmed verbatim
- Keeble et al. 2021 (*ACP* doi:10.5194/acp-21-5015-2021) — "NorESM2" without LM/MM distinction; O=✗dev applies to both
