# ec_earth — ICHEC / EC-EARTH Consortium (Europe, coordinated by Ireland)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — EC-EARTH is new in CMIP5; no CMIP3 predecessor
- **Model family / lineage:** EC-EARTH v2.2 = IFS cy31r1 atmosphere (T159L62 — ECMWF operational forecast model) + NEMO2 ocean + LIM2 sea ice + HTESSEL land surface. Pan-European consortium (>15 institutions). Unique in CMIP5 for using the ECMWF IFS atmospheric model rather than an academic GCM (ECHAM, CAM, UM, etc.).
- **Atmosphere / ocean components:** IFS cy31r1 (T159L62) + NEMO2 (ORCA1 1° grid) + LIM2 + HTESSEL
- **Primary documentation paper(s):** Hazeleger, W., et al. (2012). EC-Earth V2.2: description and validation of a new seamless earth system prediction model. *Clim. Dyn.* 39(11), 2611–2629. doi:10.1007/s00382-011-1228-5 [hazeleger_ecearth_2012 *(add)*]
- **Forcing-specific reference(s):** Hazeleger et al. 2012; Hazeleger et al. 2010 (BAMS doi:10.1175/2010BAMS2877.1)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

EC-EARTH is a new model with an IFS atmosphere — its aerosol and chemistry framework is distinct from ECHAM-family (HAM2) and CAM-family (MAM3) models.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | ? | — | — | |
| O  | Ozone | Cionni et al. 2011 | ? | TV | ? | — | — | Key question: IFS cy31r1 ozone treatment — prescribed Cionni2011 (std) or IFS-specific climatology? |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | TV | ? | — | — | Key question: IFS aerosol scheme — prescribed OD from Lamarque2010 (std) or IFS-internal? |
| SI | Sulphate indirect | Model-dependent | ? | ? | ? | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | ? | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | ? | — | — | |
| MD | Mineral dust | — | ? | ? | ? | — | — | |
| SS | Sea salt | — | ? | ? | ? | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | ? | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | ? | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | ? | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | Free-running coupled model |

### ESM-specific forcing inputs
EC-EARTH v2.2 does NOT include an active carbon cycle — HTESSEL is a land surface scheme without a carbon cycle. Not an ESM in the CMIP5 sense (no JSBACH/ORCHIDEE/CTEM equivalent). Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: pending
