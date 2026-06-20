# MIP Forcing Review — research workspace

Incremental, citation-backed documentation of the **climate forcing datasets** used to drive
the *historical / 20C3M* simulations across **CMIP3, CMIP5 and CMIP6**. Anchored on the
24(→23)-model CMIP3 suite defined in **Durack & Wijffels (2012), Table S1/S2**
(`resources/Duracketal12SC-Supp-*.pdf`). In CMIP6 this organisation became the **input4MIPs**
project (Durack et al., 2018; doi:10.1029/2018EO101751).

## What we capture per model
Three things: (1) **which dataset/source** implemented each forcing — and crucially, whether it was
**time-varying or a fixed field, and what that data/fixed field is** (the `Temporal` column:
TV / FX-clim / FX-const / n/a / ?); (2) a citation + `241114a.bib` key per forcing; and (3) an
**adversarial verification of Table S1** — Table S1 is itself a secondary compilation
("Updated from (39)"), so every `Y`/`-` is treated as a *claim to test* against each model's primary
documentation, returning a verdict (**✓ supports / ✗ conflicts / ~ unclear**) with supporting evidence.

**Table S1's binary Y/− is read as "time-varying forcing applied."** Under that reading, a forcing
present only as a *fixed climatology* should be "−"; where Table S1 marks such a field "Y" we record a
✗ conflict (see GISS dust/sea salt). Conflicts are logged per model and rolled up below.
Every deep-research stage prompt must request the temporal treatment (TV vs fixed) for each forcing.

### Forcing taxonomy (from Table S1)
| Key | Forcing |
|-----|---------|
| G  | Well-mixed greenhouse gases (CO2, CH4, N2O, CFCs/HCFCs) |
| O  | Ozone — tropospheric + stratospheric |
| SD | Sulphate aerosol — direct effects |
| SI | Sulphate aerosol — indirect effects |
| BC | Black carbon |
| OC | Organic carbon |
| MD | Mineral dust |
| SS | Sea salt |
| LU | Land-use change |
| SO | Solar irradiance |
| VL | Volcanic aerosols |
| FC | Flux corrections (F=freshwater, H=heat/momentum) |

## Layout — split by CMIP phase (scales to 100s of models)
Shared (cross-phase) files at `research/` root:
- `_model-template.md` — per-model template (CMIP3-shaped; the "Table S1" column is the phase's *source-claim* column — rename per phase: Table S1 for CMIP3, Taylor et al. 2012 / forcing-recs for CMIP5, input4MIPs for CMIP6).
- `bib-to-add.md` — references to add to `../241114a.bib`. · `NEXT-STAGE.md` — resume pointer. · `README.md` — this file.

Per phase: `cmip3/`, `cmip5/`, `cmip6/`, each with:
- `models/<CENTER>__<model_id>.md` — one file per model (CENTER prefix groups by centre; add `models/<CENTER>/` subdirs if a phase balloons).
- `data/` — the phase's matrices. CMIP3 has: `cmip3-tableS1-forcing-matrix.csv` (Table S1 verbatim) and `verified-forcing-matrix.csv` (corrected, with temporal treatment).

## Method per stage (≤ ~850k tokens each)
1. For each model in the stage, copy the template into `models/`.
2. Deep-research the **primary** documentation + forcing papers; fill the dataset/source for each forcing key.
3. **Adversarially verify Table S1**: for every Y/-/blank, find primary-source evidence and record a
   verdict (✓ supports / ✗ conflicts / ~ unclear). A claim is only "supported" if the model's own
   literature backs it — not another compilation. Default to "~ unclear" when evidence is thin.
4. Log conflicts in the per-model file and the rollup below.
5. Add any new references to `241114a.bib`; record bib keys.
6. Update the status table; commit.

## Scope (confirmed)
- **CMIP3 first pass:** Stages 1–10 document only the CMIP3 20C3M forcings (matches Table S1), then a
  later pass traces each centre's CMIP5 and CMIP6/input4MIPs lineage forward.
- **Suite = 24 models:** the 23 in Table S1 **+ INM-CM3.0** (Russia). **Confirmed:** Durack et al. (2016) Nat. Clim. Change Table S2 lists exactly these 23 CMIP3 models **plus `inmcm3_0`** as the 24th — independent corroboration of both the suite and the INM addition. (Minor naming variants there: cccma_cgcm3_1≡_t47, iap_fgoals1_0_g≡iap_fgoals1_0, "ncap_pcm1" is a typo for ncar_pcm1.)

## Model registry — key configuration/documentation citation per model
Filled as stages complete; seed citations from the project notes are marked *(given)*, the rest *(to confirm)*.

| # | model_id | Centre, country | Key documentation citation | bib key | Status |
|---|----------|-----------------|----------------------------|---------|--------|
| 1 | gfdl_cm2_0 | GFDL, USA | Delworth et al. 2006 (doi:10.1175/JCLI3629.1) | delworth_gfdls_2006 *(add)* | ☑ |
| 2 | gfdl_cm2_1 | GFDL, USA | Delworth et al. 2006 (doi:10.1175/JCLI3629.1) | delworth_gfdls_2006 *(add)* | ☑ |
| 3 | giss_aom | GISS, USA | PCMDI CMIP3 doc (Russell AOM; no forcing paper found) | — | ◐ (SO=− firm; G/SD/SS need AOM primary source) |
| 4 | giss_model_e_h | GISS, USA | Schmidt et al. 2006 (doi:10.1175/JCLI3612.1); Hansen et al. 2007 | schmidt_presentday_2006 *(add)*; hansen_climate_2007 *(add)* | ☑ |
| 5 | giss_model_e_r | GISS, USA | Schmidt et al. 2006 (doi:10.1175/JCLI3612.1); Hansen et al. 2007 | schmidt_presentday_2006 *(add)*; hansen_climate_2007 *(add)* | ☑ |
| 6 | ncar_ccsm3_0 | NCAR, USA | Collins et al. 2006 (doi:10.1175/JCLI3761.1); Ammann et al. 2003 volcanic | collins_community_2006; ammann_volcanic_2003 *(add)* | ◐ (VL/SI/FC confirmed; BC/OC/SD temporal treatment open) |
| 7 | ncar_pcm1 | NCAR, USA | Washington et al. 2000 (*Clim. Dyn.*); Meehl et al. 2003/2004 | meehl_solar_2003 *(add)*; meehl_combinations_2004 *(add)*; ammann_volcanic_2003 *(add)* | ☑ (all 12 forcings confirmed; FC notation open) |
| 8 | cccma_cgcm3_1_t47 | CCCma, Canada | Scinocca et al. 2008 (doi:10.5194/acp-8-7055-2008); Flato & Boer 2001 (*needed*) | scinocca_technical_2008 *(add)* | ◐ (G/SD confirmed TV; O/BC/OC/MD/SS confirmed FX; SO/VL/FC unverified — need Flato & Boer 2001) |
| 9 | cccma_cgcm3_1_t63 | CCCma, Canada | Scinocca et al. 2008 (identical to T47) | scinocca_technical_2008 *(add)* | ◐ (identical to T47) |
| 10 | csiro_mk3_0 | CSIRO, Australia | *(to confirm)* | | ☐ |
| 11 | csiro_mk3_5 | CSIRO, Australia | *(to confirm)* | | ☐ |
| 12 | cnrm_cm3 | CNRM, France | *(to confirm)* | | ☐ |
| 13 | ipsl_cm4 | IPSL, France | *(to confirm)* | | ☐ |
| 14 | mpi_echam5 | MPI-M, Germany | *(to confirm)* | | ☐ |
| 15 | ingv_echam4 | INGV, Italy | *(to confirm)* | | ☐ |
| 16 | miub_echo_g | MIUB/METRI/M&D, Germany/Korea | *(to confirm)* | | ☐ |
| 17 | ukmo_hadcm3 | UKMO, UK | *(to confirm)* | | ☐ |
| 18 | ukmo_hadgem1 | UKMO, UK | *(to confirm)* | | ☐ |
| 19 | miroc3_2_hires | CCSR/NIES/FRCGC, Japan | *(to confirm)* | | ☐ |
| 20 | miroc3_2_medres | CCSR/NIES/FRCGC, Japan | *(to confirm)* | | ☐ |
| 21 | mri_cgcm2_3_2a | MRI, Japan | *(to confirm)* | | ☐ |
| 22 | bccr_bcm2.0 | BCCR, Norway | *(to confirm)* | | ☐ |
| 23 | iap_fgoals1_0 | IAP, China | *(to confirm)* | | ☐ |
| 24 | inmcm3_0 | INM, Russia | *(to confirm)* | | ☐ |

## Cross-cutting findings (the adversarial payoff)
Patterns that Table S1's binary Y/− obscures, surfacing as stages complete:
- **Fixed vs. time-varying aerosols treated inconsistently.** GFDL's dust & sea salt (fixed seasonal climatology) are marked **−**; GISS ModelE's dust & sea salt (also fixed climatology) are marked **Y**. Same physical treatment, opposite Table S1 codes → the table conflates "present in model" with "time-varying forcing." **Now captured structurally via the `Temporal` column (TV/FX-clim/FX-const) in every per-model table**, and the review will carry a fixed/transient distinction.
- **"SI=Y" is not uniform.** GISS ModelE's indirect effect is a tuned cloud-*cover* proxy (≈−1 W/m², Menon & Del Genio 2006), not a resolved Twomey/albedo effect — so an indirect-effect "Y" can mean very different physics across models.
- **Same forcing, different datasets across centres.** Volcanic: GFDL & GISS both use Sato et al. 1993 (GISS tabulation). NCAR (both CCSM3 and PCM1) uses Ammann et al. 2003 (GRL, doi:10.1029/2003GL016875) — an NCAR-developed monthly, latitudinally varying volcanic AOD dataset (64 bands, 2.8° spacing), entirely distinct from Sato. Sulphate: GISS-AOM uses Boucher, GISS ModelE uses model-generated Koch, NCAR PCM uses unspecified sulfate direct-effect dataset — divergent within and across centres.
- **PCMDI model documentation pages proved uninformative for NCAR.** CCSM3.htm explicitly says "Still working on this..." for all forcing specifications; PCM.htm leaves Section V blank and only points to Meehl et al. 2004. Primary forcing detail for NCAR models must come from Collins et al. 2006 (CCSM3) and Meehl et al. 2003/2004 (PCM), not PCMDI pages.
- **CCCma sulphate implemented as surface-albedo proxy.** CGCM3.1's sulphate direct effect is applied as a change in surface albedo proportional to a time-evolving column burden (O. Boucher, LOA France — same dataset provider as GISS-AOM, but different implementation mechanism). This is a simplified approach distinct from the atmospheric optical-depth schemes used by GFDL, GISS ModelE, and NCAR — adding an important methodological dimension to the cross-model comparison.
- **CCCma fixed aerosol background (Shettle & Fenn 1979) with documented values.** AGCM3 radiative transfer uses a static, homogeneous aerosol background (not a time-varying forcing): continental dust-like **57.71 mg m⁻²**, water-soluble **2.55 mg m⁻²**, soot **0.2 mg m⁻²**; maritime oceanic **18.82 mg m⁻²**, water-soluble **0.263 mg m⁻²**. Table S1's BC=-, OC=-, MD=-, SS=- are all consistent with these fixed-field treatments. This is the most detailed fixed-aerosol documentation found so far.
- **PCM1's five-forcing design is unusually clean.** Meehl et al. (2003, 2004) give an explicit closed list — volcanoes, solar, GHGs, ozone (strato + tropo), sulfate direct effect — ruling out BC, OC, dust, sea salt, indirect effect, and land use unambiguously. No conflicts with Table S1. PCM1 is the simplest NCAR CMIP3 forcing set.

## Staging plan — grouped by modeling centre (CMIP3 first pass)
| Stage | Centre(s) / country | CMIP3 models | Status |
|-------|---------------------|--------------|--------|
| 1 | GFDL (USA) | gfdl_cm2_0, gfdl_cm2_1 | ☑ complete — Table S1 fully supported; 1 ozone nuance open |
| 2 | GISS (USA) | giss_aom, giss_model_e_h, giss_model_e_r | ☑ ModelE-H/R complete; AOM partial (needs primary source). Found: MD/SS fixed-not-transient; SI=cloud-cover proxy |
| 3 | NCAR (USA) | ncar_ccsm3_0, ncar_pcm1 | ☑ PCM1 complete (all 12 confirmed); CCSM3 partial (VL/SI/FC/MD/SS confirmed; BC/OC/SD temporal treatment open) |
| 4 | CCCma (Canada) | cccma_cgcm3_1_t47, cccma_cgcm3_1_t63 | ◐ G/SD/O/BC/OC/MD/SS confirmed; SO/VL/FC open (need Flato & Boer 2001) |
| 5 | CSIRO (Australia) | csiro_mk3_0, csiro_mk3_5 | ☐ not started |
| 6 | CNRM + IPSL (France) | cnrm_cm3, ipsl_cm4 | ☐ not started |
| 7 | MPI + INGV + MIUB (Germany/Italy) | mpi_echam5, ingv_echam4, miub_echo_g | ☐ not started |
| 8 | UKMO (UK) | ukmo_hadcm3, ukmo_hadgem1 | ☐ not started |
| 9 | MIROC + MRI (Japan) | miroc3_2_hires, miroc3_2_medres, mri_cgcm2_3_2a | ☐ not started |
| 10 | BCCR + IAP + INM (Norway/China/Russia) | bccr_bcm2.0, iap_fgoals1_0, inmcm3_0 | ☐ not started |

Legend: ☐ not started · ◐ in progress · ☑ complete

**All 24 CMIP3 model files pre-seeded** in `cmip3/models/<CENTER>__<model>.md` with their Table S1 rows in the augmented schema (Verdict/Temporal/Dataset blank, ready to fill). Stages 3–10 now just populate existing files — no setup per stage. INM-CM3.0's row is all "?" (built from primary literature, not in Table S1).

Later passes (after CMIP3): CMIP5 lineage (e.g. GFDL CM3/ESM2M, GISS-E2-H/R, CCSM4) then CMIP6/input4MIPs.

**CMIP5 pre-seeded:** `cmip5/data/cmip5-duracketal16-model-list.csv` — 47 CMIP5 models from Durack et al. (2016) Table S1. Includes the CMIP3-centre descendants: GFDL-CM2p1/CM3/ESM2G/ESM2M, GISS-E2-H/R(+CC), CCSM4/CESM1-*, CNRM-CM5, CSIRO-Mk3.6.0, IPSL-CM5A/B, MPI-ESM-LR/MR/P, HadCM3/HadGEM2-*, MIROC5/-ESM, CanESM2, NorESM1, bcc-csm1-1, FGOALS-g2/s2.

**CMIP6 pre-seeded:** `cmip6/data/cmip6-rothig23-model-list.csv` — 46 CMIP6 models / 25 institutions from Röthig et al. (2023) Tables S2–S4. The tables enumerate ScenarioMIP SSP runs, but **the model list is what we use** — every listed model also ran the CMIP6 `historical` experiment (1850–2014) that its SSP runs branch from, so all are in scope. Not exhaustive (full historical ensemble ~100+). **Canonical CMIP6 model registry: WCRP-CMIP/CMIP6_CVs `CMIP6_source_id.json`** (source_id, expanded acronym, institution_id) — reconcile/expand the list against it in the CMIP6 pass; pair with input4MIPs for forcing data. Many are direct descendants of the CMIP3 centres being documented now (GFDL-ESM4/CM4, GISS-E2-1-G/H, NCAR CESM2, CNRM-CM6-1, MIROC6, MRI-ESM2-0, UKESM1, INM-CM5-0, etc.) — a ready lineage bridge. Caveats (typo-dup, full historical ensemble is ~100+) noted in the CSV header.
