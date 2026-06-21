# ipsl_cm5b_lr — IPSL (Institut Pierre-Simon Laplace, France)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ipsl_cm4 (indirectly)
- **Model family / lineage:** IPSL-CM5B-LR = uses LMDZ5B atmosphere (revised physical parameterisations — notably different boundary layer, convection, and cloudiness schemes from LMDZ5A). Same NEMO3.2 ocean and ORCHIDEE land as CM5A variants, but different atmosphere. LR = low resolution (same 3.75°×1.875°L39 as CM5A-LR). Forcing datasets may differ from CM5A models if the different atmosphere physics changes how aerosols or chemistry are coupled.
- **Atmosphere / ocean components:** LMDZ5B (3.75°×1.875°L39; revised physics) + NEMO3.2 + ORCHIDEE + LIM2 + INCA
- **Primary documentation paper(s):** Dufresne, J.-L., et al. (2013). As other IPSL models. doi:10.1007/s00382-012-1636-1 [dufresne_ipsl_2013 *(add)*]
- **Forcing-specific reference(s):** Dufresne et al. 2013

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries identical to IPSL-CM5A-LR. LMDZ5B uses revised atmospheric physics (boundary layer, convection, cloudiness) relative to LMDZ5A but the SAME external forcing protocol. Confirmed by Dufresne2013: forcing datasets are shared across all IPSL-CM5 configurations; only the physical parameterisations differ between CM5A and CM5B.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std (as CM5A-LR) | TV | As CM5A-LR — Meinshausen2011 CMIP5 recommended dataset confirmed from Dufresne2013 | dufresne_climate_2013 | dufresne_climate_2013 | Confirmed via CM5A-LR (Dufresne2013 Sect. 3.5–3.6 covers all IPSL-CM5 variants; CM5B uses same forcing protocol) |
| O  | Ozone | Cionni et al. 2011 | ✗dev (as CM5A-LR) | TV | Offline INCA-trop+REPROBUS-strat merged zonal fields — as CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| SD | Sulphate direct | Lamarque et al. 2010 | ✗dev (as CM5A-LR) | TV | Offline LMDZ-INCA 11-yr smoothed fields — as CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| SI | Sulphate indirect | Model-dependent | ✗dev (as CM5A-LR) | TV | First indirect online in LMDZ5B from INCA concentrations — as CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev (as CM5A-LR) | TV | As CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev (as CM5A-LR) | TV | As CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| MD | Mineral dust | — | ✗dev (as CM5A-LR) | TV | As CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| SS | Sea salt | — | ✗dev (as CM5A-LR) | TV | As CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std (as CM5A-LR) | TV | As CM5A-LR — Hurtt2011 (UNH) transient crop/pasture confirmed from Dufresne2013 | dufresne_climate_2013 | dufresne_climate_2013 | Confirmed via CM5A-LR (Dufresne2013 Sect. 3.7 covers all IPSL-CM5 variants; CM5B uses same forcing protocol) |
| SO | Solar irradiance | Wang et al. 2005 | ✓std (as CM5A-LR) | TV | Wang2005 + Frohlich&Lean2004 — as CM5A-LR | dufresne_ipsl_2013 *(add)*; frohlich_lean_2004 *(add)* | dufresne_ipsl_2013 *(add)*; frohlich_lean_2004 *(add)* | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std (as CM5A-LR) | TV | Sato1993-updated — as CM5A-LR | dufresne_ipsl_2013 *(add)* | dufresne_ipsl_2013 *(add)* | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
As IPSL-CM5A-LR (ORCHIDEE active carbon cycle; LMDZ5B physics does not affect ESM inputs). N-dep and CO2 mode open questions carry over.

### Provenance
- Durack et al. 2016 model list: included
- Stage 6 workflow: wf_affaeb54-772 (2026-06-21) — all inferred from CM5A-LR; Dufresne2013 confirms identical forcing across all IPSL-CM5 variants
- Stage 7 update (2026-06-21): G and LU confirmed from Dufresne2013 Sect. 3.5–3.7 via CM5A-LR; all 12 standard forcing keys now resolved
