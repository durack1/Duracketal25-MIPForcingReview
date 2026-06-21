# mpi_esm_mr — MPI-M (Max-Planck-Institut für Meteorologie, Germany)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** mpi_echam5 (via MPI-ESM-LR)
- **Model family / lineage:** MPI-ESM-MR (Mixed Resolution) = ECHAM6 atmosphere (T63L95 — same horizontal but more vertical levels than LR) + MPIOM ocean (0.4° TP10 — finer resolution) + JSBACH + HAMOCC. MR = medium resolution. Same physical parameterisations and forcing as MPI-ESM-LR; higher resolution ocean.
- **Atmosphere / ocean components:** ECHAM6 (T63L95) + MPIOM (TP10, ~0.4°) + JSBACH + HAMOCC
- **Primary documentation paper(s):** Giorgetta, M.A., et al. (2013). doi:10.1002/jame.20038 [giorgetta_climate_2013 *(add)*]
- **Forcing-specific reference(s):** As MPI-ESM-LR

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries expected identical to MPI-ESM-LR (same model physics; MR has higher-resolution ocean TP10 vs LR TP04).

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? (as LR) | TV | As LR | — | — | |
| O  | Ozone | Cionni et al. 2011 | ? (as LR) | TV | As LR | — | — | |
| SD | Sulphate direct | Lamarque et al. 2010 | ? (as LR) | TV | As LR | — | — | |
| SI | Sulphate indirect | Model-dependent | ? (as LR) | ? | As LR | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? (as LR) | TV | As LR | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? (as LR) | TV | As LR | — | — | |
| MD | Mineral dust | — | ? (as LR) | ? | As LR | — | — | |
| SS | Sea salt | — | ? (as LR) | ? | As LR | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? (as LR) | TV | As LR | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? (as LR) | TV | As LR | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? (as LR) | TV | As LR | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
As MPI-ESM-LR (same ESM components; resolution differs only).

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: pending
