<!-- CMIP6 forcing record — FGOALS-f3-L (CAS). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# FGOALS-f3-L — CAS (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** FAMIL3 atmosphere (C96, ~100km, L32, top ~2.16 hPa) + CoLM land + LICOM3 ocean (1°) + CICE6. AOGCM. CAS/LASG, Beijing.
- **Primary documentation paper(s):** He et al. 2021 (*JAMES* doi:10.1029/2020MS002144); companion dataset description paper: *Adv. Atmos. Sci.* doi:10.1007/s00376-020-2004-4

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** (UoM-CMIP-1-2-0). | *Adv. Atmos. Sci.* 2020 (CAS group) | Verbatim: "historical global mean greenhouse gas concentrations from Meinshausen et al. (2017)." |
| O  | Ozone | ✓std | TV | **CCMI prescribed** (Checa-Garcia 2018 / UReading-CCMI-1-0). | *Adv. Atmos. Sci.* 2020 | Verbatim: "historical ozone concentrations from [CCMI forcing-databases-in-support-of-cmip6]." |
| SD | Aerosol — sulphate direct | ✓std | TV | Aerosol forcing from CMIP6 standard protocol ("full CMIP6 historical forcing"). Specific scheme/dataset not individually confirmed. | *Adv. Atmos. Sci.* 2020 | "Forced by the same historical forcing provided by CMIP6 from 1850 to 2014." Per-component aerosol dataset not named. |
| SI | Aerosol — sulphate indirect | ✓std | TV | As SD — summary-level CMIP6 standard compliance. | | |
| BC | Black carbon | ✓std | TV | As SD. | | |
| OC | Organic carbon | ✓std | TV | As SD. | | |
| MD | Mineral dust | ~ | FXc | **CAM-Chem offline aerosol climatology** (Lamarque et al. 2012). Five aerosol species (sulfates, sea salts, BC, OC, dust) prescribed from NCAR CAM-Chem output — not the CMIP6 standard Kinne 2013 natural background. | *Adv. Atmos. Sci.* 2019 (He et al.); *Atmos. Oce. Sci. Lett.* 2020 (He et al.) | Verbatim (He 2019): "aerosol mass concentrations…taken from…CAM-Chem (Lamarque et al., 2012), there are five aerosol species including sulfates, sea salts, black carbon, organic carbon, and dust." |
| SS | Sea salt | ~ | FXc | **CAM-Chem offline aerosol climatology** (Lamarque et al. 2012). Same source as MD. | *Adv. Atmos. Sci.* 2019 (He et al.); *Atmos. Oce. Sci. Lett.* 2020 (He et al.) | Confirmed alongside MD and BC/OC from the same CAM-Chem aerosol fields. |
| LU | Land-use change | ✗dev | TV | **Hurtt et al. 2011** (CMIP5-era LUH, not LUH2). AMIP paper explicitly cites Hurtt 2011. Historical coupled (Guo 2020) says "CMIP6 historical forcing" without naming LUH2. | *Adv. Atmos. Sci.* 2019 (He et al.) | Verbatim (He 2019 AMIP): "The land use datasets are prescribed as their mean climate values (Hurtt et al., 2011)." CMIP5 dataset; deviates from LUH2 standard. |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** (SOLARIS-HEPPA-3-2). | *Adv. Atmos. Sci.* 2020 | Verbatim: "solar forcing from Matthes et al. (2017)." |
| VL | Volcanic aerosols | ? | ? | Not confirmed from Stage 16 sources. | | |
| FC | Flux corrections | n/a | n/a | None | | |

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); confirmed: G/O/SO from *Adv. Atmos. Sci.* verbatim; SD/BC/OC summary-level only; MD/SS/LU/VL unconfirmed
- Key sources: He et al. 2021 (*JAMES* doi:10.1029/2020MS002144); *Adv. Atmos. Sci.* doi:10.1007/s00376-020-2004-4
- Second-pass PDF extraction (2026-06-27): He et al. 2019 *Adv. Atmos. Sci.* (doi:10.1007/s00376-019-9027-8) confirms MD and SS as CAM-Chem offline aerosol fields (Lamarque et al. 2012) — five species prescribed from NCAR CAM-Chem output, centre-specific (~). He 2020 *Atmos. Oce. Sci. Lett.* (doi:10.1080/16742834.2020.1778419) corroborates same aerosol source for piControl/DECK. He 2019 AMIP paper confirms LU = Hurtt et al. 2011 (CMIP5 LUH) prescribed as mean climatological values — deviates from LUH2 (✗dev). VL not named in any paper; remains unconfirmed.
