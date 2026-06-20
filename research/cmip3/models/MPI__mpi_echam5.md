# mpi_echam5 — MPI-M (Max-Planck-Institut für Meteorologie, Germany)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** ECHAM5/MPI-OM → MPI-ESM-LR/MR/P (CMIP5) → MPI-ESM1-2-LR/HR (CMIP6)
- **Primary documentation paper(s):** Jungclaus et al. 2006 (*J. Climate* 19(16), doi:10.1175/JCLI3827.1)
- **Forcing-specific reference(s):** Boucher & Pham 2002 (*GRL* doi:10.1029/2001GL014048) — LOA SRES sulphate; Kiehl et al. 1999 — ozone (anomaly dataset)
- **PCMDI doc URL (live):** https://pcmdi.llnl.gov/ipcc/model_documentation/ECHAM5_MPI-OM.htm *(MPI-ECHAM5.htm returns 404)*

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | CO2, CH4, N2O, F11 (effective), F12; time-varying observed concentrations (ENSEMBLES protocol) | PCMDI ECHAM5_MPI-OM.htm (20C3M section) | — | "There are only anthropogenic forcings, i.e., CO2, CH4, N2O, F11 (effective), F12, ozone, and sulfate" |
| O  | Ozone (tropo + strato) | Y | ✓ supports | TV | Kiehl et al. 1999 ozone applied as anomaly relative to pre-industrial 1870 baseline — year-by-year time-varying | PCMDI ECHAM5_MPI-OM.htm | kiehl_1999 | "Anthropogenic ozone is defined as the difference between the actual value in the respective year and the pre-industrial value (year 1870)" — unusual anomaly implementation |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Boucher & Pham 2002 LOA SRES sulphate dataset (http://www-loa.univ-lille1.fr/~boucher/sres/); direct effect | PCMDI ECHAM5_MPI-OM.htm; Boucher & Pham 2002 (*GRL* doi:10.1029/2001GL014048) | boucher_pham_2002 | "sulfate aerosol is prescribed (direct and first indirect effect)" |
| SI | Sulphate aerosol — indirect | Y | ✓ supports | TV | Boucher LOA SRES dataset — **first indirect effect only**; second indirect explicitly scoped to a separate A1B experiment, NOT 20C3M | PCMDI ECHAM5_MPI-OM.htm | boucher_pham_2002 | SI=Y consistent; nuance: 1st indirect only; same dataset as SD |
| BC | Black carbon | Y | ✗ CONFLICT | n/a (not documented) | **BC absent from the 20C3M forcing list**: "only CO2, CH4, N2O, F11(eff), F12, ozone, and sulfate." No BC documented anywhere for 20C3M. | PCMDI ECHAM5_MPI-OM.htm | — | **Table S1 BC=Y UNSUPPORTED** — note: ECHAM5-HAM (Stier et al. 2005) has interactive BC/OC, but that configuration was NOT used for CMIP3 20C3M |
| OC | Organic carbon | Y | ✗ CONFLICT | n/a (not documented) | **OC absent from the 20C3M forcing list**; same closed list evidence as BC | PCMDI ECHAM5_MPI-OM.htm | — | **Table S1 OC=Y UNSUPPORTED** |
| MD | Mineral dust | - | ✓ supports | n/a | Not in forcing list | PCMDI ECHAM5_MPI-OM.htm | — | |
| SS | Sea salt | - | ✓ supports | n/a | Not in forcing list | PCMDI ECHAM5_MPI-OM.htm | — | |
| LU | Land-use change | Y | ✗ CONFLICT | n/a (not documented) | **LU absent from the 20C3M forcing list**; forcing set explicitly closed: "only anthropogenic forcings, i.e., CO2, CH4, N2O, F11(eff), F12, ozone, and sulfate" | PCMDI ECHAM5_MPI-OM.htm | — | **Table S1 LU=Y UNSUPPORTED** |
| SO | Solar irradiance | Y | ~ likely conflict | n/a (by "only anthropogenic") | PCMDI states "there are **only** anthropogenic forcings" for 20C3M — natural forcings excluded by explicit phrasing. Solar variability not listed. | PCMDI ECHAM5_MPI-OM.htm | — | "Only anthropogenic" phrasing is strong; probable ✗ conflict, not yet standalone-verified adversarially |
| VL | Volcanic aerosols | Y | ~ likely conflict | n/a (by "only anthropogenic") | Same: no natural forcings listed; volcanic not documented for 20C3M | PCMDI ECHAM5_MPI-OM.htm | — | Probable ✗ conflict; consistent with Stage 6 finding (CNRM/IPSL also had spurious SO/VL) |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | MPI-ECHAM5/MPI-OM does not apply flux corrections | PCMDI ECHAM5_MPI-OM.htm | — | |

### Table S1 conflicts found
- **BC=Y → ✗ CONFLICT**: No BC documented for 20C3M; only sulphate aerosol in the forcing inventory.
- **OC=Y → ✗ CONFLICT**: No OC documented for 20C3M; same closed forcing list.
- **LU=Y → ✗ CONFLICT**: No land-use change documented for 20C3M; forcing list is explicitly closed.
- **SO=Y → ~ likely conflict**: "Only anthropogenic forcings" excludes natural (solar); not standalone-verified.
- **VL=Y → ~ likely conflict**: Same; volcanic not documented for 20C3M.

### Open questions
- Were BC, OC, LU actually applied but omitted from the PCMDI page? ECHAM5-HAM (Stier et al. 2005) is capable of interactive BC/OC — did some MPI-ECHAM5 CMIP3 ensemble members use it? Jungclaus et al. 2006 (primary) should be read to confirm.
- Confirm SO and VL absence explicitly — the "only anthropogenic" quote is strong evidence but targeted adversarial verification of solar/volcanic would be cleaner.
- Kiehl et al. 1999 full citation to add to bib.

## Provenance
- Table S1 row (from Stage 7 args): G Y · O Y · SD Y · SI Y · BC Y · OC Y · MD - · SS - · LU Y · SO Y · VL Y · FC -
- Sources consulted: PCMDI ECHAM5_MPI-OM.htm (primary; direct quotes); WDC-Climate EH5-T63L31_OM_20C3M_1_6H metadata; Stier et al. 2005 ACP (ECHAM5-HAM aerosol module context); Jungclaus et al. 2006 JCli
- Stage 7 adversarial workflow: wf_0fca602f-9ce; BC/OC/LU conflict confidence HIGH; SO/VL confidence medium (inferred from "only anthropogenic" phrasing)
