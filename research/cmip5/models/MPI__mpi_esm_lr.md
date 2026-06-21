# mpi_esm_lr — MPI-M (Max-Planck-Institut für Meteorologie, Germany)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** mpi_echam5 — NOTE: CMIP3 MPI-ECHAM5 had 3 confirmed conflicts: BC/OC/LU not applied despite Table S1 Y marks ("only anthropogenic forcings" list excluded these). Test whether corrected in CMIP5 MPI-ESM.
- **Model family / lineage:** MPI-ESM-LR (Low Resolution) = ECHAM6 atmosphere (T63L47) + MPIOM ocean (1.5° TP04) + JSBACH land (active C cycle) + HAMOCC ocean biogeochemistry. Full ESM. LR = low resolution (same as MPI-ESM-MR grid but fewer ocean levels).
- **Atmosphere / ocean components:** ECHAM6 (T63L47) + MPIOM ocean + JSBACH (terrestrial C cycle) + HAMOCC (ocean biogeochemistry)
- **Primary documentation paper(s):** Giorgetta, M.A., et al. (2013). Climate and carbon cycle changes from 1850 to 2100 in MPI-ESM simulations for CMIP5. *J. Adv. Model. Earth Syst.* 5(3), 572–597. doi:10.1002/jame.20038 [giorgetta_climate_2013 *(add)*]
- **Forcing-specific reference(s):** Giorgetta et al. 2013; Stevens et al. 2013 (ECHAM6, doi:10.1002/jame.20015)

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | ? | — | — | |
| O  | Ozone | Cionni et al. 2011 | ? | TV | ? | — | — | Key question: Cionni2011 (std) or interactive ECHAM6-HAM/HAMMOZ chemistry (exc)? |
| SD | Sulphate direct | Lamarque et al. 2010 | ? | TV | ? | — | — | Key question: ECHAM6 with HAM2 interactive aerosols (likely exc) or prescribed OD (std)? |
| SI | Sulphate indirect | Model-dependent | ? | ? | ? | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | ? | — | — | CMIP3 MPI-ECHAM5 BC=not applied despite Table S1 Y — test if corrected |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | ? | — | — | CMIP3 MPI-ECHAM5 OC=not applied — test if corrected |
| MD | Mineral dust | — | ? | ? | ? | — | — | |
| SS | Sea salt | — | ? | ? | ? | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | ? | — | — | CMIP3 MPI-ECHAM5 LU=not applied — test if corrected |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | ? | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | ? | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | MPI-ESM free-running |

### ESM-specific forcing inputs
MPI-ESM-LR is a full ESM (JSBACH + HAMOCC). Document: N-deposition dataset; CO2 mode (concentration-driven historical vs. emission-driven esmHistorical); iron/dust deposition for HAMOCC ocean biogeochemistry; BC on snow/ice.

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition | ? | Lamarque 2010 or 2013 ACCMIP? | Key ESM question |
| CO2 mode | ? | Conc-driven (standard) or emis-driven? | |
| Iron/dust deposition | ? | ? | For HAMOCC ocean biogeochem |
| BC on snow/ice | ? | ? | |

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: pending
