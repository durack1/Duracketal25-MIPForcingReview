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
| G — GHGs | Meinshausen 2017 (CMIP6 protocol, per summary §6) | ✓std | TV |
| O — Ozone | — | ? | — |
| SD — Sulfate direct | MACv2-SP (Stevens et al. 2016/2017; Kinne et al. 2013) | ✓std | TV |
| SI — Sulfate indirect | MACv2-SP (Stevens et al. 2016/2017) | ✓std | TV |
| BC — Black carbon | MACv2-SP (Stevens et al. 2016/2017; Kinne et al. 2013) | ✓std | TV |
| OC — Organic carbon | MACv2-SP (Stevens et al. 2016/2017; Kinne et al. 2013) | ✓std | TV |
| MD — Mineral dust | Kinne et al. 2013 MAC-v1 natural background (prescribed, fixed) | ✓std | FXc |
| SS — Sea salt | Kinne et al. 2013 MAC-v1 natural background (prescribed, fixed) | ✓std | FXc |
| LU — Land use | LUH2 (Hurtt et al. 2016/2020; Lawrence et al. 2016 LUMIP) | ✓std | TV |
| SO — Solar | — | ? | — |
| VL — Volcanic | — | ? | — |
| N-dep | — | ? | — |
| Fe-dep | — | ? | — |
| CO2-mode | — | ? | — |
## Notes
Swapna et al. 2018 JAMES (doi:10.1029/2017MS001262) read in full. MACv2-SP CONFIRMED: §2.1 states "Radiative effects of aerosols are included through the Max Planck Institute Aerosol Climatology v2 (MAC-v2, Kinne et al., 2013; Stevens et al., 2016)" — Stevens et al. 2016 = MACv2-SP preprint (gmd-2016-189), confirming ✓std for SD/SI/BC/OC. Natural aerosols (sea salt and dust) prescribed as fixed 3-D distributions from Kinne et al. 2013 MAC-v1 background — same in 1850 and 2005 control runs (✓std for MD/SS, FXc). LU confirmed: "Time-varying land-use land-cover changes through the use of Land use harmonization (LUH) data set (Hurtt et al., 2016; Lawrence et al., 2016)" following Dufresne et al. 2013 procedure — CMIP6 LUH2 protocol (✓std TV). GHG: paper summary §6 states "greenhouse gas concentrations are incorporated in IITM-ESMv2, following the protocol of CMIP6 experiments" — consistent with Meinshausen 2017; specific dataset not cited by name (paper predates Meinshausen 2017 publication); assigned ✓std with moderate confidence. Ozone (O), solar (SO), volcanic (VL) not mentioned anywhere in the paper — remain ?. ESM inputs (N-dep, Fe-dep, CO2-mode) not discussed. MACv2-SP earlier REFUTED claim (0-1) now OVERTURNED by explicit paper text — confirmed ✓std. Architecture correction stands: IITM-GFSv1 T62L64 with top 0.2 mb. Sources: Swapna et al. 2018 JAMES doi:10.1029/2017MS001262; WDC-Climate C6CMCCIIIThi.
