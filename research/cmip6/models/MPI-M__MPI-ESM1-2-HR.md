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
| G  | ✓std/TV | As MPI-ESM1-2-LR — input4MIPs uniqueness (UoM-CMIP-1-2-0 only option; resolved 2026-06-28) |
| O  | ✓std/TV | As MPI-ESM1-2-LR — CCMI prescribed on all levels (Keeble 2021 verbatim: "For both configurations") |
| SD | ✓std/TV | As MPI-ESM1-2-LR — MACv2-SP prescribed |
| SI | ✓std/TV | As MPI-ESM1-2-LR — MACv2-SP Twomey effect |
| BC | ✓std/TV | As MPI-ESM1-2-LR — MACv2-SP |
| OC | ✓std/TV | As MPI-ESM1-2-LR — MACv2-SP |
| MD | FXc | As MPI-ESM1-2-LR — Kinne 2013 natural background |
| SS | FXc | As MPI-ESM1-2-LR — Kinne 2013 natural background |
| LU | ✓std/TV | LUH2v2h (same source as LR; HR ingests via prescribed maps not dynamic transitions) |
| SO | ✓std/TV | As MPI-ESM1-2-LR — input4MIPs uniqueness (SOLARIS-HEPPA-3-2 only option; resolved 2026-06-28) |
| VL | ✓std/TV | As MPI-ESM1-2-LR — input4MIPs uniqueness + Mauritsen 2019 §8.2 prescribed (resolved 2026-06-28) |
| FC | n/a | |

Mauritsen 2019 verbatim on LR vs HR: "While for MPI-ESM1.2-HR the vegetation distribution is prescribed by a map, it is dynamically computed in MPI-ESM1.2-LR. Likewise, in historical and scenario simulations, in MPI-ESM1.2-HR land use change [is] prescribed by a sequence of maps, while in MPI-ESM1.2-LR land use is computed from a sequence of land use transitions." Both derive from LUH2v2h.

## Notes
- Giorgetta et al. 2013 (JAMES doi:10.1002/jame.20038) — MPI-ESM CMIP5 overview. Confirms CMIP5 solar = SPARC/SOLARIS J. Lean data; CMIP5 volcanic = Stenchikov et al. 1998 extended (PADS); CMIP5 GHG = IIASA RCP database (Meinshausen 2011). These are CMIP5 predecessors only — do NOT confirm CMIP6 Matthes 2017 / Thomason 2018 / Meinshausen 2017.
- Stevens et al. 2013 (JAMES doi:10.1002/jame.20015) — ECHAM6 atmospheric component description. CMIP5 focus; no CMIP6 forcing datasets mentioned.
- Schmidt et al. 2013 (JAMES doi:10.1002/jame.20014) — Middle atmosphere response to forcings in CMIP5 MPI-ESM. Confirms CMIP5 solar and volcanic datasets; not relevant to CMIP6 versions.
- Manzini et al. 2006 (J. Climate doi:10.1175/JCLI3826.1) — MAECHAM5 SST study; not relevant to CMIP6 forcing.
- Mauritsen et al. 2019 (doi:10.1029/2018MS001400) read in full: does not explicitly name Meinshausen 2017 (G), Matthes 2017/SOLARIS-HEPPA (SO), or Thomason 2018/IACETH SAGE3λ (VL) anywhere in the text. Volcanic forcing discussed conceptually only (Gregory 2013, Myhre 2013 cited for forcing magnitude). G, SO, VL remain unresolved.

## Provenance
- Stage 8 workflow run ID: wf_f9ea73ac-462 (2026-06-23)
- Stage 9 pass (2026-06-27): Giorgetta 2013, Stevens 2013, Schmidt 2013, Manzini 2006 reviewed — all CMIP5; no new CMIP6 forcing evidence found; G/SO/VL remain ?
- Stage 9 second pass (2026-06-27): Mauritsen et al. 2019 (doi:10.1029/2018MS001400) read in full; no explicit naming of Meinshausen 2017, Matthes 2017/SOLARIS-HEPPA, or Thomason 2018/IACETH SAGE3λ.
- Seventh-pass update (2026-06-28): G, SO, VL resolved to ✓std via input4MIPs uniqueness (same argument as MPI-ESM1-2-LR). VL further corroborated by Mauritsen 2019 §8.2.
- See MPI-M__MPI-ESM1-2-LR.md for full citations
