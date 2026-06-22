# mpi_esm_p — MPI-M (Max-Planck-Institut für Meteorologie, Germany)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** mpi_echam5 (via MPI-ESM-LR)
- **Model family / lineage:** MPI-ESM-P (Paleo) = MPI-ESM-LR configured for multi-millennium runs. "P" = optimized for long paleoclimate integrations. Same ECHAM6 T63L47 + MPIOM TP04 + JSBACH + HAMOCC as LR. Forcing protocol may be identical to MPI-ESM-LR or simplified for paleo — this is the key question for Stage 7.
- **Atmosphere / ocean components:** As MPI-ESM-LR (ECHAM6 T63L47 + MPIOM TP04 + JSBACH + HAMOCC)
- **Primary documentation paper(s):** Giorgetta, M.A., et al. (2013). doi:10.1002/jame.20038 [giorgetta_climate_2013 *(add)*]
- **Forcing-specific reference(s):** As MPI-ESM-LR; any paleo-specific forcing documentation

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

Inferred identical to MPI-ESM-LR. No evidence surfaced from Stage 7 workflow of any paleo-mode forcing simplification relative to LR. ESGF forcing string "GHG Oz SD Sl Vl LU" is plausible (same ECHAM6 physics; shared protocol) but was not independently confirmed for MPI-ESM-P.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std (as LR; inferred) | TV | Meinshausen2011 — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| O  | Ozone | Cionni et al. 2011 | ✓std (as LR; inferred) | TV | Cionni2011 3D monthly — as LR | stevens_atmospheric_2013 *(add)* | stevens_atmospheric_2013 *(add)* | |
| SD | Sulphate direct | Lamarque et al. 2010 | ✗dev (as LR; inferred) | TV | Kinne MAC-v1 total-optical climatology — as LR | giorgetta_climate_2013 *(add)*; kinne_macv1_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| SI | Sulphate indirect | Model-dependent | ✗dev (as LR; inferred) | n/a | No aerosol-cloud indirect forcing — cloud droplet concentrations fixed — as MPI-ESM-LR (inferred; same ECHAM6 + MAC-v1 forcing) | Stevens et al. 2013 | stevens_atmospheric_2013 *(add)* | |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev (as LR; inferred) | TV | Bundled in Kinne MACv1 — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev (as LR; inferred) | TV | Bundled in Kinne MACv1 — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| MD | Mineral dust | — | ✗dev (as LR; inferred) | TC | Kinne MAC-v1 coarse-mode natural aerosol (dust + sea salt) time-invariant — as MPI-ESM-LR (inferred; same ECHAM6 + MAC-v1) | Kinne et al. 2013; Stevens et al. 2013 | kinne_macv1_2013 *(add)*; stevens_atmospheric_2013 *(add)* | |
| SS | Sea salt | — | ✗dev (as LR; inferred) | TC | As MD — bundled within MAC-v1 coarse-mode natural component — as MPI-ESM-LR (inferred) | Kinne et al. 2013; Stevens et al. 2013 | kinne_macv1_2013 *(add)*; stevens_atmospheric_2013 *(add)* | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std (as LR; inferred) | TV | Hurtt2011 LUH1 via JSBACH — as LR | giorgetta_climate_2013 *(add)* | giorgetta_climate_2013 *(add)* | |
| SO | Solar irradiance | Wang et al. 2005 | ✗dev (as LR; inferred) | TV | SPARC/SOLARIS project dataset — as MPI-ESM-LR (inferred; same ECHAM6 forcing) | Giorgetta et al. 2013 | giorgetta_climate_2013 *(add)* | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **✗ dev** | TV | **Stenchikov1998/PADS-extended (as MPI-ESM-LR)** — Giorgetta2013 S4.7: Stenchikov1998 PADS extended by G. Stenchikov (pers. comm. 2010); NOT Sato1993-updated. | Giorgetta et al. 2013; Stenchikov et al. 1998 | giorgetta_climate_2013 *(add)* | **Deviation confirmed** (as MPI-ESM-LR). Second-pass 2026-06-22 (Stage C). |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
As MPI-ESM-LR (same JSBACH + HAMOCC). CO2 mode: concentration-driven for `historical` (inferred from LR; same experimental protocol). N-dep, iron/dust, BC-on-snow: unresolved as in LR. Open question: does the paleo configuration modify any ESM inputs for long-timescale runs? No evidence surfaced.

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: wf_c371f969-29f (2026-06-21) — no paleo-specific evidence surfaced; all inferred from MPI-ESM-LR
- Stage 8 workflow (2026-06-21): SI, MD, SS, SO, VL updated to match LR conclusions (inferred; same ECHAM6 + MAC-v1 forcing)
