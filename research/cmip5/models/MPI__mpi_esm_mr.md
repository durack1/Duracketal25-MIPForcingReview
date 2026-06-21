# mpi_esm_mr — MPI-M (Max-Planck-Institut für Meteorologie, Germany)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** mpi_echam5 (via MPI-ESM-LR)
- **Model family / lineage:** MPI-ESM-MR (Mixed Resolution) = ECHAM6 atmosphere (T63L95 — same horizontal but more vertical levels than LR) + MPIOM ocean (0.4° TP10 — finer resolution) + JSBACH + HAMOCC. MR = medium resolution. Same physical parameterisations and forcing as MPI-ESM-LR; higher resolution ocean.
- **Atmosphere / ocean components:** ECHAM6 (T63L95) + MPIOM (TP10, ~0.4°) + JSBACH + HAMOCC
- **Primary documentation paper(s):** Giorgetta, M.A., et al. (2013). doi:10.1002/jame.20038 [giorgetta_climate_2013 *(add)*]
- **Forcing-specific reference(s):** As MPI-ESM-LR

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries identical to MPI-ESM-LR — same ECHAM6 atmosphere, same forcing protocol. MR has higher-resolution ocean (TP10 ~0.4° vs TP04 ~1.5°) and additional vertical levels (L95 vs L47) but the same physical parameterisations and forcing datasets. ESGF forcing string confirmed "GHG Oz SD Sl Vl LU" for all three MPI-ESM variants (medium conf — directly verified for LR; MR plausible from shared protocol but not independently confirmed).

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std (as LR) | TV | Meinshausen2011 — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| O  | Ozone | Cionni et al. 2011 | ✓std (as LR) | TV | Cionni2011 3D monthly climatology — as LR | stevens_atmospheric_2013 *(add)* | stevens_atmospheric_2013 *(add)* | |
| SD | Sulphate direct | Lamarque et al. 2010 | ✗dev (as LR) | TV | Kinne MAC-v1 total-anthropogenic optical climatology — as LR | giorgetta_climate_2013 *(add)*; kinne_macv1_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| SI | Sulphate indirect | Model-dependent | ? (as LR) | ? | As LR — not in ESGF string | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev (as LR) | TV | Bundled in Kinne MACv1 — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev (as LR) | TV | Bundled in Kinne MACv1 — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| MD | Mineral dust | — | ? (as LR) | ? | As LR | — | — | |
| SS | Sea salt | — | ? (as LR) | ? | As LR | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std (as LR) | TV | Hurtt2011 LUH1 via JSBACH — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| SO | Solar irradiance | Wang et al. 2005 | ? (as LR) | TV | As LR — ESGF "Sl" flag | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? (as LR) | TV | As LR — ESGF "Vl" flag | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
As MPI-ESM-LR (same JSBACH + HAMOCC components; all ESM inputs unresolved).

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: wf_c371f969-29f (2026-06-21) — all inferred from MPI-ESM-LR; "GHG Oz SD Sl Vl LU" string plausible but only directly confirmed for LR
