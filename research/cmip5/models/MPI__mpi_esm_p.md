# mpi_esm_p — MPI-M (Max-Planck-Institut für Meteorologie, Germany)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** mpi_echam5 (via MPI-ESM-LR)
- **Model family / lineage:** MPI-ESM-P (Paleo) = MPI-ESM-LR configured for multi-millennium runs. "P" = optimized for long paleoclimate integrations. Same ECHAM6 T63L47 + MPIOM TP04 + JSBACH + HAMOCC as LR. Forcing protocol may be identical to MPI-ESM-LR or simplified for paleo — this is the key question for Stage 7.
- **Atmosphere / ocean components:** As MPI-ESM-LR (ECHAM6 T63L47 + MPIOM TP04 + JSBACH + HAMOCC)
- **Primary documentation paper(s):** Giorgetta, M.A., et al. (2013). doi:10.1002/jame.20038 [giorgetta_climate_2013 *(add)*]
- **Forcing-specific reference(s):** As MPI-ESM-LR; any paleo-specific forcing documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

Expected identical to MPI-ESM-LR pending confirmation. Key question: does the paleo configuration simplify or change any forcing for the CMIP5 `historical` run?

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? (as LR expected) | TV | As LR | — | — | |
| O  | Ozone | Cionni et al. 2011 | ? (as LR expected) | TV | As LR | — | — | |
| SD | Sulphate direct | Lamarque et al. 2010 | ? (as LR expected) | TV | As LR | — | — | |
| SI | Sulphate indirect | Model-dependent | ? (as LR) | ? | As LR | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? (as LR expected) | TV | As LR | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? (as LR expected) | TV | As LR | — | — | |
| MD | Mineral dust | — | ? (as LR) | ? | As LR | — | — | |
| SS | Sea salt | — | ? (as LR) | ? | As LR | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? (as LR expected) | TV | As LR | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? (as LR expected) | TV | As LR | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? (as LR expected) | TV | As LR | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
As MPI-ESM-LR (JSBACH + HAMOCC). If P configuration modified any ESM inputs for paleo runs, document.

### Open questions
- Does MPI-ESM-P differ from MPI-ESM-LR in its historical forcing? (Paleo setup may have extended or simplified the forcing datasets.)

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: pending
