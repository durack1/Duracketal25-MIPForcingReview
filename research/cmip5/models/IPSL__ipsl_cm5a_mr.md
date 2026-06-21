# ipsl_cm5a_mr — IPSL (Institut Pierre-Simon Laplace, France)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ipsl_cm4 (indirectly)
- **Model family / lineage:** IPSL-CM5A-MR = IPSL-CM5A-LR at medium resolution (2.5°×1.25°L39). Same LMDZ5A atmosphere physics, NEMO3.2 ocean, ORCHIDEE land, LIM2 sea ice, INCA chemistry. MR = medium resolution. All forcing datasets expected identical to IPSL-CM5A-LR; only atmospheric resolution differs.
- **Atmosphere / ocean components:** LMDZ5A (2.5°×1.25°L39) + NEMO3.2 + ORCHIDEE + LIM2 + INCA (as CM5A-LR but higher res)
- **Primary documentation paper(s):** Dufresne, J.-L., et al. (2013). As IPSL-CM5A-LR. doi:10.1007/s00382-012-1636-1 [dufresne_ipsl_2013 *(add)*]
- **Forcing-specific reference(s):** As IPSL-CM5A-LR

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries identical to IPSL-CM5A-LR (same model; only atmospheric resolution differs: 2.5°×1.25° vs 3.75°×1.875°). Confirmed by Dufresne2013: "the same physics as CM5A-LR but a higher horizontal resolution."

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std (as CM5A-LR) | TV | As CM5A-LR | meinshausen_rcp_2011 | meinshausen_rcp_2011 | |
| O  | Ozone | Cionni et al. 2011 | ✗dev (as CM5A-LR) | TV | Offline INCA-trop+REPROBUS-strat merged zonal fields — as CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| SD | Sulphate direct | Lamarque et al. 2010 | ✗dev (as CM5A-LR) | TV | Offline LMDZ-INCA 11-yr smoothed fields, Lamarque2010-emis input — as CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| SI | Sulphate indirect | Model-dependent | ✗dev (as CM5A-LR) | TV | First indirect online in LMDZ from INCA concentrations — as CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev (as CM5A-LR) | TV | As CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev (as CM5A-LR) | TV | As CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| MD | Mineral dust | — | ✗dev (as CM5A-LR) | TV | As CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| SS | Sea salt | — | ✗dev (as CM5A-LR) | TV | As CM5A-LR | szopa_aerosol_2013 *(add)* | szopa_aerosol_2013 *(add)* | |
| LU | Land-use change | Hurtt et al. 2011 | ? (as CM5A-LR) | TV | As CM5A-LR | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ✓std (as CM5A-LR) | TV | Wang2005 + Frohlich&Lean2004 — as CM5A-LR | dufresne_ipsl_2013 *(add)*; frohlich_lean_2004 *(add)* | dufresne_ipsl_2013 *(add)*; frohlich_lean_2004 *(add)* | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓std (as CM5A-LR) | TV | Sato1993-updated — as CM5A-LR | dufresne_ipsl_2013 *(add)* | dufresne_ipsl_2013 *(add)* | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
As IPSL-CM5A-LR (same ESM components; resolution differs only). N-dep and CO2 mode open questions carry over.

### Provenance
- Durack et al. 2016 model list: included
- Stage 6 workflow: wf_affaeb54-772 (2026-06-21) — all inferred from CM5A-LR; identical forcing confirmed
