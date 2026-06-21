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
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ✓std | TV | Meinshausen et al. 2011 RCP concentrations | Giorgetta et al. 2013 | giorgetta_climate_2013 *(add)* | Confirmed 1-0 medium conf (Wiley 402 paywalled; rests on reference-title match in Giorgetta2013 reference list + ESGF "GHG" flag) |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | Cionni et al. 2011 AC&C/SPARC database — 3D monthly climatology (zonal-mean stratosphere, extended above 1 hPa); no interactive chemistry | Stevens et al. 2013 | stevens_atmospheric_2013 *(add)* | Confirmed 1-0 high conf; Stevens2013 verbatim: "The default ozone climatology in ECHAM6 is given as three-dimensional monthly values...based on the merged and future ozone climatology as described by Cionni et al. [2011] for CMIP5. The original data cover only altitudes up to 1 hPa and have been extended upward for use in ECHAM6." MPI-ESM does NOT use interactive chemistry (HAMMOZ/MOZ) for standard CMIP5 historical. |
| SD | Sulphate direct | Lamarque et al. 2010 | ✗dev | TV | Kinne et al. MAC-v1 (MACv1) total-aerosol optical-property climatology — annual time steps from ~1860; prescribed optical depth, single-scattering albedo, asymmetry parameter for TOTAL anthropogenic aerosol (NOT speciated Lamarque2010-OD; NOT interactive HAM2) | Giorgetta et al. 2013; Kinne et al. 2013 | giorgetta_climate_2013 *(add)*; kinne_macv1_2013 *(add)* | Confirmed 1-0 high conf; Giorgetta2013 verbatim: "The optical properties of the aerosol are prescribed from a new climatology developed by S. Kinne et al." Kinne2013 (JAMES doi:10.1002/jame.20035) provides annual radiative properties for total + anthropogenic aerosol from 1860. HAM2 was NOT active in standard CMIP5 historical runs — a separate later config (MPI-ESM-HAM; CMIP6 MPI-ESM1.2-HAM). ESGF forcing string "GHG Oz SD Sl Vl LU" — SD-only tag is a metadata simplification of the bundled Kinne total-optical field. |
| SI | Sulphate indirect | Model-dependent | ? | ? | Not in ESGF "GHG Oz SD Sl Vl LU" forcing string; likely no indirect effect (prescribed-OD approach) but NOT confirmed | — | — | ESGF omits SI flag; Kinne MACv1 does not include indirect aerosol-cloud effects in the ECHAM6 implementation |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev | TV | Bundled within Kinne MAC-v1 total-anthropogenic optical field (BC radiative effects physically included but NOT speciated per Lamarque2010 separately) | Giorgetta et al. 2013 | giorgetta_climate_2013 *(add)* | Medium conf; BC effects physically incorporated in Kinne total-optical-field — CMIP3 ECHAM5 BC physical exclusion IS corrected; however the method DEVIATES from Lamarque2010 speciated OD standard (Taylor2012). ESGF metadata omits BC flag due to bundled-field approach. |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev | TV | As BC — bundled within Kinne MAC-v1 total-anthropogenic optical field | Giorgetta et al. 2013 | giorgetta_climate_2013 *(add)* | Medium conf; same rationale as BC — CMIP3 ECHAM5 OC physical exclusion corrected; method still dev from Lamarque2010 standard |
| MD | Mineral dust | — | ? | ? | Kinne MACv1 may include natural dust optical contribution; not separately confirmed | — | — | Kinne2013 describes both anthropogenic and natural aerosol components; dust contribution details not resolved |
| SS | Sea salt | — | ? | ? | As MD — not separately confirmed | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ✓std | TV | Hurtt et al. 2011 LUH1 (fractional land-use transitions, annual, 0.5°) applied via JSBACH land cover scheme (Reick et al. 2013) | Giorgetta et al. 2013; Reick et al. 2013 | giorgetta_climate_2013 *(add)*; reick_human_2013 *(add)* | Confirmed 1-0 medium conf; Giorgetta2013 reference list includes Hurtt2011 "Harmonization of land-use scenarios"; ESGF "LU" flag confirmed; JSBACH uses Hurtt LUH1 transitions. CORRECTS CMIP3 ECHAM5 LU exclusion (where LU was not applied despite Table S1 Y). |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | ESGF "Sl" flag present — solar applied; specific dataset unconfirmed | — | — | Likely Wang2005 (std) or similar — not confirmed from surviving workflow claims |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | ESGF "Vl" flag present — volcanic applied; specific dataset unconfirmed | — | — | Likely Sato-updated (std) — not confirmed from surviving workflow claims |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | MPI-ESM free-running coupled model |

### ESM-specific forcing inputs
MPI-ESM-LR is a full ESM (JSBACH + HAMOCC). All ESM-specific inputs UNRESOLVED from Stage 7 workflow (Giorgetta2013 paywalled Wiley 402).

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| N-deposition (NHx/NOy) | ? | Lamarque 2010 or 2013 ACCMIP? | Open question — GFDL ESMs used 2013; NCAR BGC used 2010 |
| CO2: conc.- or emission-driven | ? | Meinshausen 2011 conc. (expected for `historical`) | Open question — MPI-ESM also supports `esmHistorical` emission-driven mode |
| Atmospheric chem inputs | n/a | No interactive chemistry in standard historical | HAMMOZ/MOZ not active |
| Iron/dust deposition | ? | ? | For HAMOCC ocean biogeochemistry iron cycle |
| BC on snow/ice | ? | ? | |

### Confirmed deviations from Taylor 2012
1. **Aerosols (SD/BC/OC) = ✗dev**: Kinne MAC-v1 total-anthropogenic optical-property climatology — NOT Lamarque2010-OD, NOT interactive HAM2. BC/OC effects physically incorporated (corrects CMIP3 exclusion) but method deviates from Taylor2012 standard. ESGF tag "SD" only (bundled field).

### CMIP3 MPI-ECHAM5 comparison
CMIP3 confirmed conflicts: BC=✗(not applied), OC=✗(not applied), LU=✗(not applied). CMIP5 status: BC/OC physically incorporated in Kinne MACv1 total field (corrected in principle but method deviates); LU=✓std (Hurtt2011, confirmed corrected); O=✓std (Cionni2011 vs CMIP3 Kiehl1999 anomaly).

### Provenance
- Durack et al. 2016 model list: included
- Stage 7 workflow: wf_c371f969-29f (2026-06-21) — 11/14 claims confirmed; Giorgetta2013 + Stevens2013 + Kinne2013 primary sources accessed (Wiley 402 on full text; summaries + reference-title matches used)
