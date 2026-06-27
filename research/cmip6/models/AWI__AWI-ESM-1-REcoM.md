<!-- CMIP6 forcing record — AWI-ESM-1-REcoM (AWI). Stage 15 workflow: wf_75e312c8-82e (2026-06-27) -->

# AWI-ESM-1-REcoM — AWI (Germany)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** AWI-CM-1-1 base (ECHAM6.3.04p1 T63L47 + JSBACH3.20 + FESOM2.0) + REcoM2 ocean BGC (Regulated Ecosystem Model v2; includes Fe limitation). **ESM — ocean BGC only.** Atmospheric forcing IDENTICAL to AWI-CM-1-1-LR (inferred shared ECHAM6.3 stack). Primary paper: Lacroix et al. 2021 (*JAMES* doi:10.1029/2020MS002544).
- **Primary documentation paper(s):** Lacroix et al. 2021 (*JAMES* doi:10.1029/2020MS002544)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

Atmospheric forcing all inferred from AWI-CM-1-1-LR/ECHAM6.3 lineage (not directly confirmed from Lacroix 2021).

| Key | Forcing | Verdict | Temporal | Dataset / source |
|-----|---------|---------|----------|-----------------|
| G  | Well-mixed GHGs | ✓std | TV | Meinshausen 2017 (inferred) |
| O  | Ozone | ✓std | TV | CCMI prescribed (inferred ECHAM6.3) |
| SD | Aerosol — sulphate direct | ✓std | TV | MACv2-SP (inferred ECHAM6.3) |
| SI | Aerosol — sulphate indirect | ✓std | TV | MACv2-SP (inferred) |
| BC | Black carbon | ✓std | TV | MACv2-SP (inferred) |
| OC | Organic carbon | ✓std | TV | MACv2-SP (inferred) |
| MD | Mineral dust | FXc | FXc | Kinne et al. 2013 (inferred) |
| SS | Sea salt | FXc | FXc | Kinne et al. 2013 (inferred) |
| LU | Land-use change | ✓std | TV | LUH2 v2.1h (inferred) |
| SO | Solar irradiance | ✓std | TV | Matthes 2017 (inferred) |
| VL | Volcanic aerosols | ✓std | TV | IACETH-SAGE3lambda-3-0-0 (inferred) |
| FC | Flux corrections | n/a | n/a | None |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | REcoM2 N cycle; dataset unknown — NCAR-CCMI-2-0 expected | ? |
| Fe-dep | REcoM2 includes Fe limitation; Fe-deposition dataset not confirmed | ? |
| CO2-mode | Concentration-driven assumed for historical | ? |

## Provenance
- Stage 15; all atmospheric forcing inferred from ECHAM6.3.04p1 = AWI-CM-1-1-LR lineage. Lacroix et al. 2021 (doi:10.1029/2020MS002544) not successfully extracted for forcing details. ESM inputs (Fe-dep, N-dep, CO2-mode) unconfirmed.
