<!-- CMIP6 forcing record — MPI-ESM1-2-HR (MPI-M). Stage 8 workflow: wf_f9ea73ac-462 (2026-06-23) -->

# MPI-ESM1-2-HR — Max Planck Institute for Meteorology, Germany

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** As MPI-ESM1-2-LR (MPI-ESM-LR lineage, higher resolution)
- **Model family / lineage:** High-resolution variant of MPI-ESM1-2-LR. ECHAM6.3 at T127L95 (~100km→40km). Same JSBACH3.2/MPIOM1.6.3/HAMOCC6 base.
- **Primary documentation paper(s):** Mauritsen et al. 2019, *JAMES* doi:10.1029/2018MS001400 [mauritsen_mpi_esm_2019]

## Forcing — all confirmed IDENTICAL to MPI-ESM1-2-LR (see MPI-ESM1-2-LR.md)

All atmospheric forcing confirmed identical to MPI-ESM1-2-LR — same ECHAM6.3 shared base, same MACv2-SP, same CCMI ozone, same LUH2v2h source.

**One confirmed implementation difference**: LU ingestion method — LR uses dynamic land-use transitions (JSBACH computes vegetation from sequence of transitions); HR uses prescribed land-use maps. Same LUH2v2h source dataset, different in-model processing. Verdict is identical (✓std).

| Key | Verdict | Notes |
|-----|---------|-------|
| G  | ? | As MPI-ESM1-2-LR |
| O  | ✓std/TV | As MPI-ESM1-2-LR — CCMI prescribed on all levels (Keeble 2021 verbatim: "For both configurations") |
| SD | ✓std/TV | As MPI-ESM1-2-LR — MACv2-SP prescribed |
| SI | ✓std/TV | As MPI-ESM1-2-LR — MACv2-SP Twomey effect |
| BC | ✓std/TV | As MPI-ESM1-2-LR — MACv2-SP |
| OC | ✓std/TV | As MPI-ESM1-2-LR — MACv2-SP |
| MD | FXc | As MPI-ESM1-2-LR — Kinne 2013 natural background |
| SS | FXc | As MPI-ESM1-2-LR — Kinne 2013 natural background |
| LU | ✓std/TV | LUH2v2h (same source as LR; HR ingests via prescribed maps not dynamic transitions) |
| SO | ? | As MPI-ESM1-2-LR |
| VL | ? | As MPI-ESM1-2-LR |
| FC | n/a | |

Mauritsen 2019 verbatim on LR vs HR: "While for MPI-ESM1.2-HR the vegetation distribution is prescribed by a map, it is dynamically computed in MPI-ESM1.2-LR. Likewise, in historical and scenario simulations, in MPI-ESM1.2-HR land use change [is] prescribed by a sequence of maps, while in MPI-ESM1.2-LR land use is computed from a sequence of land use transitions." Both derive from LUH2v2h.

## Provenance
- Stage 8 workflow run ID: wf_f9ea73ac-462 (2026-06-23)
- See MPI-M__MPI-ESM1-2-LR.md for full citations
