<!-- CMIP6 forcing record — NorESM2-LM (NCC). Stage 13 complete (2026-06-26). -->

# NorESM2-LM — NCC (Norway)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** CAM6-Nor atmosphere (T85L32, ~2°, 32 levels) + CLM5 land + MICOM ocean (isopycnal, ~1°) + CICE5. AOGCM. Forked from CESM2.1. OsloAero6 interactive aerosol scheme. No interactive chemistry.
- **Primary paper:** Seland et al. 2020, *GMD* doi:10.5194/gmd-13-6165-2020
- **CMIP5 predecessor:** NorESM1-ME

## Forcing (CMIP6 historical, 1850–2014)

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Meinshausen et al. 2017 (UoM-CMIP-1-2-0); CO2, CH4, N2O, CFC-11-eq, CFC-12-eq | ✓std | TV |
| O — Ozone | WACCM6-derived zonally-averaged 5-day ozone fields from CESM2 (NOT CCMI Checa-Garcia 2018); also CH4-oxidation stratospheric water vapour (3-D monthly from CESM2-WACCM6) | ✗dev | TV |
| SD — Sulfate direct | OsloAero6 interactive; SO2 from CEDS (Hoesly et al. 2018) + BB4CMIP6 (van Marle et al. 2017); Dentener et al. 2006 vertical distribution | ✓std | TV |
| SI — Sulfate indirect | OsloAero6 interactive (same emissions as SD) | ✓std | TV |
| BC — Black carbon | OsloAero6 interactive; CEDS (Hoesly 2018) + BB4CMIP6 (van Marle 2017) | ✓std | TV |
| OC — Organic carbon | OsloAero6 interactive; CEDS + BB4CMIP6 | ✓std | TV |
| MD — Mineral dust | OsloAero6 prognostic online (natural emission parameterization) | ✓std | TV |
| SS — Sea salt | OsloAero6 prognostic online (natural emission parameterization) | ✓std | TV |
| LU — Land use | CLM5 land; "generally same as CESM2.1" (Seland 2020 verbatim) — LUH2 v2.1h inferred but not explicitly confirmed | ✓std | TV |
| SO — Solar | Matthes et al. 2017 (SOLARIS-HEPPA-3-2) | ✓std | TV |
| VL — Volcanic | CMIP6 stratospheric aerosol optical properties per Thomason et al. 2018 (IACETH-SAGE3lambda / GloSSAC lineage); **SEPARATE stream from ozone** — NOT bundled WACCM file; VL=✓std despite O=✗dev | ✓std | TV |
| FC — Fixed composition | n/a (AOGCM) | n/a | — |

## Sources
- Seland et al. 2020 (*GMD* doi:10.5194/gmd-13-6165-2020) — primary; all forcing confirmed verbatim
- Keeble et al. 2021 (*ACP* doi:10.5194/acp-21-5015-2021) — corroborates O=✗dev (WACCM6-derived) verbatim

## Stage 13 verification notes (27 agents, 13 claims verified from 13 confirmed, 0 killed)
- **Critical VL finding**: Unlike CESM2 (where ozone and stratospheric aerosol are a single bundled file), NorESM2 has **separate input streams**. Seland 2020 verbatim: "In NorESM2, prescribed optical properties from CMIP6 are used instead ... The monthly distributions of stratospheric sulfate aerosols follow now the CMIP6 recommendations (Thomason et al., 2018)." → VL=✓std even though O=✗dev.
- **O deviation confirmed** (5-0 vote): Seland 2020 verbatim: "For ozone concentrations used in the radiative transfer calculations, we also use fields from CESM2 (WACCM6). They are zonally averaged 5 d varying fields." Same WACCM6-provenance as CESM2/FV2 (Stage 3), different file from the bundled strataero.
- **Forcing identical to NorESM2-MM** (1-0 vote): Seland 2020 verbatim: "generally the same as those used in CESM2.1"; LM and MM "differ only by horizontal resolution."
- **CMCC not covered** in Stage 13 research — no verified findings for CMCC-CM2-SR5 or CMCC-ESM2.
- LU: "generally the same as CESM2.1" implies LUH2 v2.1h (CLM5); not explicitly confirmed for NorESM2 in Seland 2020.
