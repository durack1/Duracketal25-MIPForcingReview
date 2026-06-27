# THU CIESM
## Architecture
CIESM atmosphere (based on CAM5, T85L30, top ~3hPa) + MOM6 ocean + CICE6 + CLM4.5 land. Tsinghua University, China. Primary paper: Lin et al. 2020 (JAMES doi:10.1029/2019MS002035).
## Forcing (CMIP6 historical, 1850–2014)
| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | CMIP6 protocol (Eyring 2016); specific dataset not named | ~ | TV |
| O — Ozone | — | ? | — |
| SD — Sulfate direct | MACv2-SP (Stevens et al. 2017) | ✓std | TV |
| SI — Sulfate indirect | MACv2-SP Twomey effect (Stevens et al. 2017) | ✓std | TV |
| BC — Black carbon | MACv2-SP (Stevens et al. 2017) | ✓std | TV |
| OC — Organic carbon | MACv2-SP (Stevens et al. 2017) | ✓std | TV |
| MD — Mineral dust | — | ? | — |
| SS — Sea salt | — | ? | — |
| LU — Land use | — | ? | — |
| SO — Solar | — | ? | — |
| VL — Volcanic | Thomason (2012) SAGE II–HALOE; stratospheric AOD multi-level | ✗dev | TV |
## Notes
Lin et al. 2020 JAMES doi:10.1029/2019MS002036 read in full. Table 1 and section 2.1.6 confirm MACv2-SP (Stevens et al. 2017) for all anthropogenic aerosol forcing — direct (SD/BC/OC) and first indirect (SI). Volcanic stratospheric AOD is prescribed following "CMIP6 procedure" with citation to Thomason (2012) SAGE II–HALOE paper, not Thomason 2018/IACETH CMIP6 dataset — marked ✗dev pending clarification. GHG concentrations follow CMIP6 protocol (Eyring 2016) but specific dataset (Meinshausen 2017) is not named — marked ~ pending confirmation. Ozone, solar, land use, mineral dust, and sea salt are not mentioned anywhere in the paper.
