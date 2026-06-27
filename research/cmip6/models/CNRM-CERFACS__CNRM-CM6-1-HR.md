<!-- CMIP6 forcing record — CNRM-CM6-1-HR (CNRM-CERFACS). Stage 7 workflow: wf_e2b2d348-b4e (2026-06-23) -->

# CNRM-CM6-1-HR — Centre National de Recherches Météorologiques / CERFACS, France

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** As CNRM-CM6-1 (CNRM-CM5 lineage)
- **Model family / lineage:** High-resolution variant of CNRM-CM6-1 (~50km atmospheric resolution, 0.25° ocean). Resolution-only difference — all atmospheric forcing expected IDENTICAL to CNRM-CM6-1.
- **Primary documentation paper(s):** Voldoire et al. 2019, *JAMES* doi:10.1029/2019MS001770 [voldoire_cnrm_2019]

**NOTE**: No Stage 7 claim explicitly confirmed CNRM-CM6-1-HR shares identical forcing with CNRM-CM6-1. This is the expected/assumed architecture (resolution-only variant) but is unverified.

## Forcing datasets — see CNRM-CM6-1.md (all forcing identical; resolution-only variant)

| Key | Verdict | Notes |
|-----|---------|-------|
| G | ✓std | Meinshausen et al. 2017 yearly global averages; CO2, N2O, CH4, CFC12, CFC11eq (option 2) |
| O | ~ | Linearized strat ozone (coefficients from CNRM-ESM2-1 REPROBUS runs) + prescribed CCMI trop ozone |
| SD | ✗dev | TACTIC_v2 offline monthly AOD (5 aerosol types: SO4, BC, OM, SS, DD); NOT MACv2-SP |
| SI | ✗dev | As SD — indirect effects included in TACTIC_v2 AOD fields |
| BC | ✗dev | As SD — included in TACTIC_v2 offline monthly AOD bundle |
| OC | ✗dev | As SD — included in TACTIC_v2 offline monthly AOD bundle |
| MD | ✗dev | As SD — dust (DD) included in TACTIC_v2 offline monthly AOD bundle |
| SS | ✗dev | As SD — sea salt (SS) included in TACTIC_v2 offline monthly AOD bundle |
| LU | ✗dev | Time-invariant ECOCLIMAP-II land cover; does NOT follow LUH2 recommendation |
| SO | ✓std | Matthes et al. 2017 yearly global averages of total solar irradiance |
| VL | ✓std | Thomason et al. 2018 official CMIP6 stratospheric AOD dataset (adapted for 550 nm) |
| FC | n/a | |

## Notes

**Voldoire et al. 2019 (JAMES, doi:10.1029/2019MS001683) read in full.** Section 3.2 (Forcings) confirms all forcing for CNRM-CM6-1, which applies identically to CNRM-CM6-1-HR (resolution-only variant, explicitly identified as base for HR in this paper). G: Meinshausen et al. 2017, yearly global averages, option 2 (CO2, N2O, CH4, CFC12, CFC11eq). SO: Matthes et al. 2017 yearly global averages of total solar irradiance. VL: Thomason et al. 2018 official CMIP6 stratospheric AOD adapted for 550 nm. LU: time-invariant ECOCLIMAP-II land cover — paper explicitly states model "does not follow the recommendation of Eyring et al. (2016) to account for land use and land cover change forcings." SD/SI/BC/OC/MD/SS: all prescribed from TACTIC_v2 offline monthly AOD (5 aerosol types: SO4, BC, OM, sea salt, dust) — ✗dev.

**Michou et al. 2020 (JAMES, doi:10.1029/2019MS001816) read in full.** Confirms TACTIC_v2 scheme for all five aerosol types in CNRM-CM6-1 prescribed AOD. Sea salt and dust (MD/SS) are explicitly included in the TACTIC_v2 offline AOD bundle alongside SO4, BC, and OM.

## Provenance
- Stage 7 workflow run ID: wf_e2b2d348-b4e (2026-06-23); CNRM-CM6-1-HR not explicitly confirmed — inferred from CNRM-CM6-1
- Second-pass read: Voldoire et al. 2012 (Clim Dyn 40:2091–2121) — CMIP5 paper only; no CMIP6 verdicts extractable
- Third-pass read (2026-06-27): Voldoire et al. 2019 (JAMES doi:10.1029/2019MS001683) + Michou et al. 2020 (JAMES doi:10.1029/2019MS001816) — all target unknowns G, MD, SS, LU, SO, VL resolved
