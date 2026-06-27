# KIOST KIOST-ESM
## Architecture
ARCHITECTURE CORRECTION: GFDL-lineage, NOT HadGEM2-AO as in stage-configs.
- Atmosphere: GFDL-AM2.0 (cubed sphere C48, 192×96, 32 levels, top 2 hPa)
- Ocean: GFDL-MOM5.0 (tripolar ~1 deg, 360×200, 52 levels)
- Sea ice: GFDL-SIS
- Land: NCAR-CLM4
- Ocean BGC: TOPAZ4 (ESM)
Korea Institute of Ocean Science and Technology. Primary paper: Pak et al. 2021 (JAMES doi:10.1029/2020MS002212). Pak et al. 2021: "KIOST-ESM contains modified versions of GFDL-AM2.0 and CLM4 for atmosphere and land-surface dynamics, as well as GFDL-MOM5 and GFDL-SIS for ocean and sea-ice dynamics."
## Forcing (CMIP6 historical, 1850–2014)
| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Meinshausen 2017 | ✓std | TV |
| O — Ozone | — | ? | — |
| SD — Sulfate direct | Simple carbon aerosol model | ✗dev | — |
| SI — Sulfate indirect | Simple carbon aerosol model | ✗dev | — |
| BC — Black carbon | Simple carbon aerosol model | ✗dev | — |
| OC — Organic carbon | Simple carbon aerosol model | ✗dev | — |
| MD — Mineral dust | — | ? | — |
| SS — Sea salt | — | ? | — |
| LU — Land use | — | ? | — |
| SO — Solar | — | ? | — |
| VL — Volcanic | — | ? | — |
| N-dep | — | ? | — |
| Fe-dep | — | ? | — |
| CO2-mode | — | ? | — |
## Notes
Aerosol CV slot registered as 'none'; atmosChem = 'Simple carbon aerosol model (emission type)' (250 km). This rules out CLASSIC (UM), MAM3 (CAM), and all CMIP6-standard aerosol approaches. SD/SI/BC/OC = ✗dev (simplified non-standard aerosol, incompatible with CEDS+BB4CMIP6 or MACv2-SP). MD/SS not addressed — ?. G/O/LU/SO/VL all unresolved. ESM inputs (N-dep, Fe-dep, CO2-mode) unconfirmed. Note: 2 hPa model top (well into stratosphere) means stratospheric forcing (O, VL, SO) assessment not compromised by lid truncation. Sources: WDC-Climate CMIP6 C6CMKIOKIMhi + CMIP6_CVs (confirmed, high confidence); Pak et al. 2021 JAMES doi:10.1029/2020MS002212 (architecture confirmed, high confidence). Pak et al. 2021 Ocean Sci doi:10.1007/s12601-021-00001-7: Table 2 confirms G = Meinshausen et al. 2017 (climatecollege.unimelb.edu.au/cmip6, TV concentrations). Table 2 also confirms air pollutant emissions (SO2, OC, BC) from CEDS (globalchange.umd.edu/ceds/) for anthropogenic and globalfiredata.org for bioburning — consistent with already-confirmed SD/SI/BC/OC = ✗dev. O/MD/SS/LU/SO/VL and ESM inputs (N-dep, Fe-dep, CO2-mode) are NOT listed in Table 2 or discussed anywhere in this paper.
