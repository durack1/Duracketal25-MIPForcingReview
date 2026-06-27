# CCCR-IITM IITM-ESM
## Architecture
ARCHITECTURE CORRECTION: IITM-GFSv1 (GFS-based, T62L64), NOT SPEEDY T30L18 as in stage-configs. SPEEDY relates to an earlier IITM-ESM lineage only.
- Atmosphere: IITM-GFSv1 (T62L64, Linearly Reduced Gaussian Grid, 192×94, 64 levels, top 0.2 mb)
- Ocean: MOM4p1
- Ocean BGC: TOPAZ2 (ESM)
- Land: CLM
Indian Institute of Tropical Meteorology. Primary paper: Swapna et al. 2018 (BAMS doi:10.1175/BAMS-D-14-00034.1). WDC-Climate CMIP6 registry verbatim: "IITM-GFSv1 (T62L64, Linearly Reduced Gaussian Grid; 192x94 longitude/latitude; 64 levels; top level 0.2 mb)".
## Forcing (CMIP6 historical, 1850–2014)
| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | — | ? | — |
| O — Ozone | — | ? | — |
| SD — Sulfate direct | — | ? | — |
| SI — Sulfate indirect | — | ? | — |
| BC — Black carbon | — | ? | — |
| OC — Organic carbon | — | ? | — |
| MD — Mineral dust | — | ? | — |
| SS — Sea salt | — | ? | — |
| LU — Land use | — | ? | — |
| SO — Solar | — | ? | — |
| VL — Volcanic | — | ? | — |
| N-dep | — | ? | — |
| Fe-dep | — | ? | — |
| CO2-mode | — | ? | — |
## Notes
All forcing datasets unverified. MACv2-SP aerosol claim REFUTED (0-1) — aerosol scheme remains ?. Architecture correction: IITM-GFSv1 T62L64 with top 0.2 mb (much higher/better-resolved than original SPEEDY T30L18 assumption). High model top (0.2 mb) means stratospheric forcing resolution is adequate. ESM inputs (N-dep, Fe-dep, CO2-mode) unconfirmed. Requires extraction of Swapna et al. 2018 and IITM-ESM CMIP6 documentation. Sources: WDC-Climate C6CMCCIIIThi (confirmed, high confidence).
