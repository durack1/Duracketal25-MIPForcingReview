# CMCC-CM — CMCC (Centro Euro-Mediterraneo sui Cambiamenti Climatici, Italy)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — CMCC is a new CMIP5 entrant
- **Model family / lineage:** CMCC Climate Model. ECHAM5 (T159L31, low-top ~10 hPa) atmosphere from MPI-M; OPA8.2 (ORCA2, ~1°) ocean; SILVA land surface; LIM2 sea ice. No interactive chemistry. Pure AOGCM — no ESM components.
- **Atmosphere / ocean components:** ECHAM5 (T159L31) + OPA8.2 (ORCA2) + SILVA + LIM2
- **Primary documentation paper(s):** Scoccimarro, E., et al. (2011). Effects of Tropical Cyclones on Ocean Heat Transport in a High Resolution Coupled General Circulation Model. *J. Climate* 24, 4368–4384. doi:10.1175/2011JCLI4104.1 **[DOI flagged for verification — see notes]** [scoccimarro_effects_2011 *(add)*]
- **Forcing-specific reference(s):** Eyring, V., et al. (2013). Long-term ozone changes and associated climate impacts in CMIP5 simulations with chemistry. *J. Geophys. Res. Atmos.* 118, 5029–5060. doi:10.1002/jgrd.50316 [eyring_ozone_2013 *(add)*] — Table 1 confirms CMCC-CM ozone dataset

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | Expected Meinshausen et al. 2011 by ECHAM5 lineage; unconfirmed | — | — | Resolve: Scoccimarro et al. 2011 full text or CMCC tech report |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | Cionni et al. 2011 **C1modB** variant — AC&C/SPARC lowtop ozone database with Met Office solar-cycle modification (Jones et al. 2011). CMCC-CM classified NOCHEM (no interactive chemistry). One of 7 of 31 NOCHEM models using this specific variant. | Eyring2013 Table 1 | eyring_ozone_2013 | **CONFIRMED 1-0** (Eyring2013 Table 1). C1modB = lowtop-specific, appropriate for L31 model top at ~10 hPa. Jones et al. 2011 doi:10.5194/gmd-4-543-2011 describes the dataset |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ? | TV | Expected Lamarque et al. 2010 OD or ECHAM5 Tanre 1984 background aerosol climatology; unconfirmed | — | — | NetCDF forcing code 'Nat,Ant,GHG,SA,TO,Sl' too coarse to distinguish. NOT the same as MPI-ESM's Kinne MACv1 (that is ECHAM6-specific) |
| SI | Sulphate indirect | Model-dependent | ? | ? | Likely not applied — standard ECHAM5 without two-moment microphysics does not simulate indirect effects; unconfirmed | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | Expected Lamarque et al. 2010 ACCMIP emissions; unconfirmed | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | Expected Lamarque et al. 2010 ACCMIP emissions; unconfirmed | — | — | |
| MD | Mineral dust | Model-dependent | ? | FXc | Likely Tanre 1984 climatology (ECHAM5 default without interactive dust); temporal mode and dataset unconfirmed | — | — | |
| SS | Sea salt | Model-dependent | ? | FXc | Likely fixed background climatology per standard ECHAM5 base; unconfirmed | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | Expected Hurtt et al. 2011 via SILVA land surface; unconfirmed | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | Expected Wang et al. 2005; unconfirmed. C1modB ozone already incorporates an 11-yr solar cycle modulation — if Wang2005 TSI was also applied, solar forcing operates through two distinct pathways | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | Expected Sato et al. 1993 updated; unconfirmed. Low-top model (10 hPa ceiling) constrains stratospheric volcanic representation | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running AOGCM | — | — | |

### ESM-specific forcing inputs
Not an ESM — CMCC-CM is an AOGCM only. Standard 12 keys only.

### Deviations from Taylor 2012 standard protocol
- **O = ✓std** (C1modB): Cionni2011 lowtop variant confirmed; not a deviation, but C1modB is the solar-cycle-modified subset used by 7 of 31 NOCHEM models.
- All aerosol and remaining forcing cells unconfirmed — verdicts may change once primary source is obtained.

### Notes on ECHAM5 heritage
CMCC-CM shares the ECHAM5 atmosphere with some CMIP5 models. However, MPI-ESM uses ECHAM6 (not ECHAM5), and MPI-ESM aerosols = Kinne MACv1 (✗dev), which is ECHAM6-specific. CMCC-CM likely uses the older ECHAM5 Tanre 1984 aerosol background rather than MACv1. Do NOT assume CMCC-CM aerosol treatment mirrors MPI-ESM.

### historicalMisc experiments
CMCC-CM did NOT submit historicalMisc (single-forcing attribution) experiments to CMIP5. Confirmed by ESGF search (numFound=0).

### Primary paper DOI note
Workflow found doi:10.1175/2011JCLI4104.1 for "Effects of Tropical Cyclones..."; the README seed showed 10.1175/2011JCLI3773.1. Verify against PDF before adding to bib. Also possible the correct CMCC-CM model description paper is Bellucci et al. 2011 or a CMCC technical report.

## Open questions
1. G, SD, BC, OC, LU, SO, VL all unconfirmed — Scoccimarro 2011 full text or CMCC tech report needed.
2. Whether SI is included (unlikely for base ECHAM5).
3. MD/SS: confirm Tanre 1984 or updated climatology.
4. Correct DOI for Scoccimarro et al. 2011 primary paper.

## Provenance
- Durack et al. 2016 model list: included (row 46)
- Sources consulted: Eyring et al. 2013 (JGR 118:5029-5060, doi:10.1002/jgrd.50316) Table 1 — CMCC-CM confirmed NOCHEM, C1modB ozone; Jones et al. 2011 (GMD 4:543-570, doi:10.5194/gmd-4-543-2011) — C1modB dataset description
- Stage 11 workflow: wf_89572b47-8df (2026-06-21); O=✓std confirmed 1-0 (Eyring2013 Table 1); all other cells remain ?
