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
| SI | Sulphate indirect | Model-dependent | ✗dev (as LR) | n/a | No aerosol-cloud indirect forcing — cloud droplet concentrations kept fixed; adjusted forcing from aerosol-cloud interactions not allowed to change in CMIP5 ECHAM6 runs — as MPI-ESM-LR (inferred; same ECHAM6 + MAC-v1 forcing) | Stevens et al. 2013 | stevens_atmospheric_2013 *(add)* | |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev (as LR) | TV | Bundled in Kinne MACv1 — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev (as LR) | TV | Bundled in Kinne MACv1 — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| MD | Mineral dust | — | ✗dev (as LR) | TC | Kinne MAC-v1 coarse-mode natural aerosol (dust + sea salt) time-invariant background — as MPI-ESM-LR (inferred; same ECHAM6 + MAC-v1) | Kinne et al. 2013; Stevens et al. 2013 | kinne_macv1_2013 *(add)*; stevens_atmospheric_2013 *(add)* | |
| SS | Sea salt | — | ✗dev (as LR) | TC | As MD — bundled within MAC-v1 coarse-mode natural component — as MPI-ESM-LR (inferred) | Kinne et al. 2013; Stevens et al. 2013 | kinne_macv1_2013 *(add)*; stevens_atmospheric_2013 *(add)* | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std (as LR) | TV | Hurtt2011 LUH1 via JSBACH — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| SO | Solar irradiance | Wang et al. 2005 | ✗dev (as LR) | TV | SPARC/SOLARIS project dataset — as MPI-ESM-LR (inferred; same ECHAM6 forcing) | Giorgetta et al. 2013 | giorgetta_climate_2013 *(add)* | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? (as LR) | TV | Stratospheric aerosol from volcanic eruptions (Pinatubo 1991 as last event); Schmidt et al. 2012 documents ECHAM6 application — as MPI-ESM-LR (inferred) | Stevens et al. 2013 | stevens_atmospheric_2013 *(add)* | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
As MPI-ESM-LR (same JSBACH + HAMOCC components). CO2 mode: concentration-driven for `historical` (inferred from LR; same experimental protocol). N-dep, iron/dust, BC-on-snow: unresolved as in LR.

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: wf_c371f969-29f (2026-06-21) — all inferred from MPI-ESM-LR; "GHG Oz SD Sl Vl LU" string plausible but only directly confirmed for LR
- Stage 8 workflow (2026-06-21): SI, MD, SS, SO, VL updated to match LR conclusions (inferred; same ECHAM6 + MAC-v1 forcing)
