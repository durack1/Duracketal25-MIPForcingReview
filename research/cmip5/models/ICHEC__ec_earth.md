# ec_earth — ICHEC / EC-EARTH Consortium (Europe, coordinated by Ireland)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — EC-EARTH is new in CMIP5; no CMIP3 predecessor
- **Model family / lineage:** EC-EARTH v2.2 = IFS cy31r1 atmosphere (T159L62 — ECMWF operational forecast model) + NEMO2 ocean + LIM2 sea ice + HTESSEL land surface. Pan-European consortium (>15 institutions). Unique in CMIP5 for using the ECMWF IFS atmospheric model rather than an academic GCM (ECHAM, CAM, UM, etc.).
- **Atmosphere / ocean components:** IFS cy31r1 (T159L62) + NEMO2 (ORCA1 1° grid) + LIM2 + HTESSEL
- **Primary documentation paper(s):** Hazeleger, W., et al. (2012). EC-Earth V2.2: description and validation of a new seamless earth system prediction model. *Clim. Dyn.* 39(11), 2611–2629. doi:10.1007/s00382-011-1228-5 [hazeleger_ecearth_2012 *(add)*]
- **Forcing-specific reference(s):** Wyser et al. 2020 (GMD doi:10.5194/gmd-13-3465-2020); Döscher et al. 2022 (GMD doi:10.5194/gmd-15-2973-2022); Hazeleger et al. 2012

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

EC-EARTH architecture confirmed: IFS cy31r1 + H-TESSEL + NEMO2 (OPA9) + LIM2. Aerosol forcing treatment confirmed from Wyser et al. 2020 (GMD) retrospective. Other forcing details (G, O, SO, VL, LU) unconfirmed from surviving workflow claims.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | Prescribed CO2 confirmed applied (enhanced-CO2 experiments documented); specific GHG dataset (Meinshausen2011?) not named in accessible sources | Hazeleger et al. 2012 | hazeleger_ecearth_2012 *(add)* | Hazeleger2012 abstract confirms enhanced-CO2 response in idealized runs; historical GHG dataset unconfirmed |
| O  | Ozone | Cionni et al. 2011 | ? | TV | IFS cy31r1 ozone treatment unconfirmed — likely Cionni2011 but not documented in accessible sources | — | — | |
| SD | Sulphate direct | Lamarque et al. 2010 | ~std | TV | CMIP5 time series from Community Atmosphere Model (CAM; Lamarque et al. 2011) mass-concentration fields, mapped onto IFS aerosol types, fed into SW/LW radiation for DIRECT effect only | Wyser et al. 2020 | doscher_ec_earth_2022 *(add)*; wyser_ec_earth_2020 *(add)* | Confirmed 1-0 high conf from Wyser et al. 2020 (GMD doi:10.5194/gmd-13-3465-2020) verbatim: "aerosols are prescribed as mass concentration fields following the CMIP5 time series from the Community Atmosphere Model (CAM; Lamarque et al., 2011)...The provided aerosol components are mapped onto the aerosol types used in the IFS and fed into the short- and longwave radiation scheme (direct effect)." Source is a Lamarque2011 CAM distribution (not identical to Lamarque2010 OD but close lineage); IFS-mapping is an implementation detail; verdict ~std (broadly aligned but IFS-remapped, direct-only) |
| SI | Sulphate indirect | Model-dependent | ✗dev | n/a | NO indirect effect — "ECE2 only accounts for the direct radiative effects...it has no representation of the indirect effects" | Wyser et al. 2020 | doscher_ec_earth_2022 *(add)*; wyser_ec_earth_2020 *(add)* | Confirmed 1-0 high conf; Wyser et al. 2020 verbatim: "ECE2 only accounts for the direct radiative effects of aerosols...but it has no representation of the indirect effects." Direct-only is a confirmed deviation from models that include 1st indirect effect. |
| BC | Black carbon | Lamarque et al. 2010 | ~std | TV | Included in CAM/Lamarque2011 mass-concentration fields mapped onto IFS — direct effect only | Wyser et al. 2020 | doscher_ec_earth_2022 *(add)*; wyser_ec_earth_2020 *(add)* | BC is part of the IFS aerosol type mapping from CMIP5 CAM concentrations |
| OC | Organic carbon | Lamarque et al. 2010 | ~std | TV | As BC — part of CMIP5 CAM/Lamarque2011 mass-concentration mapping | Wyser et al. 2020 | doscher_ec_earth_2022 *(add)*; wyser_ec_earth_2020 *(add)* | |
| MD | Mineral dust | — | ? | ? | IFS aerosol mapping may include dust; not separately confirmed | — | — | |
| SS | Sea salt | — | ? | ? | IFS aerosol mapping may include sea salt; not separately confirmed | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | Not confirmed from surviving claims | — | — | H-TESSEL land surface; LU treatment for historical unconfirmed |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | Not confirmed from surviving claims | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | Not confirmed from surviving claims | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | Free-running coupled model |

### ESM-specific forcing inputs
Not an ESM — H-TESSEL is a land surface scheme without active carbon cycle. No JSBACH/ORCHIDEE/CTEM equivalent. Standard 12 keys only.

### Confirmed deviations from Taylor 2012
1. **SI = ✗dev**: No indirect aerosol-cloud effect — confirmed 1-0 high confidence (Wyser et al. 2020 verbatim).

### Notes on aerosol source
The aerosol mass-concentration fields used in EC-EARTH CMIP5 come from the CMIP5 CAM/Lamarque et al. 2011 distribution (a CMIP5-era successor to Lamarque2010). This is broadly aligned with the Taylor2012 standard (same emissions lineage) but implemented differently: (1) mass concentrations rather than optical depths, (2) mapped onto IFS aerosol types, (3) direct effect only. Verdict ~std (close alignment, minor implementation differences), not ✓std (not the exact Lamarque2010-OD as specified in Taylor2012).

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: wf_c371f969-29f (2026-06-21) — architecture confirmed 1-0; aerosol/SI from Wyser et al. 2020 (GMD) retrospective 1-0; G/O/SO/VL/LU unconfirmed
