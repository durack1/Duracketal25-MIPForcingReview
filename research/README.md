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
| 3 | giss_aom | GISS, USA | Russell et al. 1995 (*Atmos.–Ocean* 33, doi:10.1080/07055900.1995.9649550) — **PDF uploaded** | russell_coupled_1995 *(add)* | ◐ (primary source now available; G/SD/SO forcing details need read of Russell 1995) |
| 4 | giss_model_e_h | GISS, USA | Schmidt et al. 2006 (doi:10.1175/JCLI3612.1); Hansen et al. 2007 | schmidt_presentday_2006 *(add)*; hansen_climate_2007 *(add)* | ☑ |
| 5 | giss_model_e_r | GISS, USA | Schmidt et al. 2006 (doi:10.1175/JCLI3612.1); Hansen et al. 2007 | schmidt_presentday_2006 *(add)*; hansen_climate_2007 *(add)* | ☑ |
| 6 | ncar_ccsm3_0 | NCAR, USA | Collins et al. 2006 (doi:10.1175/JCLI3761.1); Ammann et al. 2003 volcanic | collins_community_2006; ammann_volcanic_2003 *(add)* | ◐ (VL/SI/FC confirmed; BC/OC/SD temporal treatment open) |
| 7 | ncar_pcm1 | NCAR, USA | Washington et al. 2000 (*Clim. Dyn.*); Meehl et al. 2003/2004 | meehl_solar_2003 *(add)*; meehl_combinations_2004 *(add)*; ammann_volcanic_2003 *(add)* | ☑ (all 12 forcings confirmed; FC notation open) |
| 8 | cccma_cgcm3_1_t47 | CCCma, Canada | Scinocca et al. 2008 (doi:10.5194/acp-8-7055-2008); Flato et al. 2000 (*Clim. Dyn.*, doi:10.1007/s003820050339 — CGCM1/control only); Flato & Boer 2001 (*GRL*, doi:10.1029/2000GL012121) | scinocca_technical_2008 *(add)*; flato_canadian_2000 *(add)*; flato_boer_2001 *(add)* | ☑ FC=F,H confirmed (heat+FW fixed fields); SO/VL/LU supported by documented silence; no conflicts. Kim 2002/2003 NOT relevant (LGM). |
| 9 | cccma_cgcm3_1_t63 | CCCma, Canada | Identical to T47 | scinocca_technical_2008 *(add)* | ☑ identical to T47 |
| 10 | csiro_mk3_0 | CSIRO, Australia | Gordon et al. 2002 CSIRO Tech Paper No. 60 (gordon_2002a.pdf) | gordon_csiro_2002 *(add)* | ◐ (SD=Penner1994 TV confirmed; FC=na confirmed; O=Y ambiguous; SO/VL/G/LU unverified — Stage 5 partial) |
| 11 | csiro_mk3_5 | CSIRO, Australia | Gordon et al. 2002 (inferred); Mk3.5 primary paper not located (Gordon 2010?) | gordon_csiro_2002 *(inferred)* | ◐ (all cells inferred from Mk3.0; PCMDI docs blank; needs Mk3.5-specific primary source) |
| 12 | cnrm_cm3 | CNRM, France | Salas-Mélia et al. 2005 (*Note de Centre CNRM/GMGEC no. 103*); Boucher & Pham 2002 (GRL doi:10.1029/2001GL014048, aerosol) | salas_melia_2005 *(add)*; boucher_pham_2002 *(add)* | ☑ **3 conflicts**: SI=Y (direct-only, no indirect), SO=Y (fixed 1370 W m⁻²), VL=Y (no volcanic). |
| 13 | ipsl_cm4 | IPSL, France | Marti et al. 2010 (*Clim. Dyn.* doi:10.1007/s00382-009-0598-2); Boucher & Pham 2002 (GRL, aerosol) | marti_new_2010 *(add)*; boucher_pham_2002 *(add)* | ☑ **2 confirmed conflicts**: SO=Y (fixed 1365 W m⁻²), VL=Y (no natural forcings). O=Y open. |
| 14 | mpi_echam5 | MPI-M, Germany | Jungclaus et al. 2006 (*J. Climate* doi:10.1175/JCLI3827.1); Boucher & Pham 2002 (LOA sulphate) | jungclaus_ocean_2006 *(add)*; boucher_pham_2002 | ☑ **3–5 conflicts**: BC=Y, OC=Y, LU=Y (all UNSUPPORTED — only sulphate in forcing list); SO=Y, VL=Y likely conflicts ("only anthropogenic forcings") |
| 15 | ingv_echam4 | INGV, Italy | PCMDI INGV-SXG doc 2006; Gualdi et al. 2008. Note: model registered as INGV-SXG (SINTEX-G) not "INGV-ECHAM4" | gualdi_tropical_2008 *(add)* | ☑ **3 conflicts**: O=Y (ECHAM4 FX-clim), SO=Y (not documented), VL=Y (not documented) |
| 16 | miub_echo_g | MIUB/METRI/M&D, Germany/Korea | Legutke & Voss 1999 (DKRZ Tech Report 18); Crowley 2000 (solar+volcanic forcing) | legutke_voss_1999 *(add)*; crowley_causes_2000 *(add)* | ☑ **2 conflicts**: SI=- (first indirect IS applied), FC=H (heat+water both applied, not heat only). SO=Y/VL=Y correct-but-bundled (Crowley 2000 solar constant). |
| 17 | ukmo_hadcm3 | UKMO, UK | Gordon et al. 2000 (*J. Climate*); Johns et al. 2003 (*Clim. Dyn.* doi:10.1007/s00382-002-0296-y); Stott et al. 2000 (*Science*) | johns_hadcm3_2003 *(add)*; stott_external_2000 *(add)* | ☑ G/O/SD/SI/SO all confirmed; VL=Y unverified (adversarially refuted — open); solar = Lean 1995 |
| 18 | ukmo_hadgem1 | UKMO, UK | Johns et al. 2006 (*J. Climate* doi:10.1175/JCLI3636.1); Martin et al. 2006 (*J. Climate* doi:10.1175/JCLI3551.1) | johns_hadgem1_2006 *(add)*; martin_physical_2006 *(add)* | ☑ **1 conflict**: MD=Y (mineral dust absent from CLASSIC scheme). LU=- ~ questionable (Goldewijk 2001 applied in Run 1). SO/VL=Y confirmed (Solanki & Krivova 2003 solar; Sato 1993 updated volcanic). |
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
- **CCCma CGCM3.1 FC=F,H confirmed: dual heat and freshwater flux corrections.** Both heat (W m⁻²) and freshwater flux correction fields were applied, calculated from uncoupled model equilibria and refined over a 14-year adaptive coupled run (60-day relaxation) plus a 5-year freshwater drift-correction run. This makes CCCma one of the few CMIP3 models using flux corrections (alongside MIUB and possibly MRI). Note: specific numeric values are not published. Flux adjustments are fixed climatological correction fields, not transient forcings.
- **CCCma sulphate implemented as surface-albedo proxy.** CGCM3.1's sulphate direct effect is applied as a change in surface albedo proportional to a time-evolving column burden (O. Boucher, LOA France — same dataset provider as GISS-AOM, but different implementation mechanism). This is a simplified approach distinct from the atmospheric optical-depth schemes used by GFDL, GISS ModelE, and NCAR — adding an important methodological dimension to the cross-model comparison.
- **CCCma fixed aerosol background (Shettle & Fenn 1979) with documented values.** AGCM3 radiative transfer uses a static, homogeneous aerosol background (not a time-varying forcing): continental dust-like **57.71 mg m⁻²**, water-soluble **2.55 mg m⁻²**, soot **0.2 mg m⁻²**; maritime oceanic **18.82 mg m⁻²**, water-soluble **0.263 mg m⁻²**. Table S1's BC=-, OC=-, MD=-, SS=- are all consistent with these fixed-field treatments. This is the most detailed fixed-aerosol documentation found so far.
- **Wang et al. 1995 AMIP II ozone is a shared baseline across at least two centres (CSIRO, CCCma) — and a candidate Table S1 conflict.** The CSIRO Mk3 and CCCma CGCM3.1 both use Wang et al. 1995 AMIP II as their ozone climatology baseline. For CCCma, this is confirmed FX-clim (Scinocca 2008). For CSIRO, the baseline is FX-clim but a per-year transient capability exists and was used in SRES-A2 runs — so the 20C3M ozone treatment is ambiguous rather than confirmed-FX. Whether Table S1 O=Y is correct depends on whether CSIRO submitted 20C3M runs with transient ozone files applied, which the PCMDI pages and CTR_021 do not document. No further primary source has been found: Collier et al. 2004 (CSIRO Tech Paper No. 69) documents the CMIP2+ 1%/yr-CO2 experiment only, not the 20C3M run.
- **CSIRO Mk3 uses a minimal aerosol scheme: sulphate direct only via Penner et al. 1994.** Gordon et al. 2002 is explicit — "Direct effect of aerosols only using monthly mean sulfate (Penner et al, 1994)" — with no indirect, no BC, no OC, no dust, no sea salt. Consistent with Table S1 for all aerosol columns. The sulphate dataset (Penner 1994) is distinct from the Boucher LOA dataset used by CCCma and GISS-AOM, and from the model-generated Koch/Hansen datasets used by GISS-ModelE. **PCMDI model documentation pages for CSIRO are incomplete** (same limitation found for NCAR): forcing sections are blank templates, making Gordon 2002 Tech Report the only workable primary source. Mk3.5 PCMDI docs were submitted in 2007 as "Not available yet" — primary source for Mk3.5 not yet located.
- **PCM1's five-forcing design is unusually clean.** Meehl et al. (2003, 2004) give an explicit closed list — volcanoes, solar, GHGs, ozone (strato + tropo), sulfate direct effect — ruling out BC, OC, dust, sea salt, indirect effect, and land use unambiguously. No conflicts with Table S1. PCM1 is the simplest NCAR CMIP3 forcing set.

- **SO=Y and VL=Y are systematic Table S1 errors for at least the two French CMIP3 models.** Both CNRM-CM3 and IPSL-CM4 used *fixed* solar constants (1370 and 1365 W m⁻² respectively) and applied *no volcanic variability*. PCMDI docs are unambiguous: CNRM — "Solar forcing was set at 1370 W m⁻² and no solar or volcanic variability were included"; IPSL — "All other variables are kept constant. There are no natural forcings." Table S1's SO=Y and VL=Y for both models are ✗ conflicts. This raises the possibility that Table S1's SO/VL codes may be unreliable for other centres too — stages 7–10 should test this hypothesis.
- **CNRM-CM3 SI=Y is a Table S1 error.** CNRM applied only the *direct* sulphate effect (Boucher & Pham 2002); no indirect aerosol effect was implemented. Table S1 incorrectly marks SI=Y. IPSL-CM4 correctly has SI=Y (first indirect / Twomey effect via Boucher & Lohmann 1995 formula D, POLDER-tuned; sulphate-only, first indirect only).
- **Boucher & Pham 2002 (LOA sulphate) is now confirmed for three centres: CCCma, CNRM, and IPSL.** All three used O. Boucher's LOA/CNRS sulphate fields for the direct aerosol effect. CNRM and IPSL are documented via PCMDI (citing GRL doi:10.1029/2001GL014048); CCCma via Scinocca 2008. Whether these are identical files or variants of the LOA dataset is unresolved but the lineage is shared. **Boucher & Pham 2002 DOI confirmed**: GRL doi:10.1029/2001GL014048 ("History of sulfate aerosol radiative forcings"; PDF uploaded). The JD doi:10.1029/2001JD000765 is Timmreck (2001) — a separate paper on 3D background stratospheric aerosol simulation (PDF also uploaded; potentially relevant to ECHAM-family models in Stage 7).

- **Table S1 SO/VL errors are now confirmed across four of six completed stages.** CNRM, IPSL, INGV all applied no natural forcings yet Table S1 codes SO=Y/VL=Y for all three. MIUB SO/VL are technically applied but bundled into a single Crowley (2000) solar-constant time series — not independent channels and not latitudinally resolved. MPI SO/VL likely absent ("only anthropogenic forcings"). This is a systemic Table S1 coding failure: SO/VL=Y codes appear to reflect model *capability* or *design intent* rather than verified application in 20C3M. Stages 8–10 should be read with this prior.
- **Boucher LOA sulphate dataset (Boucher & Pham 2002, GRL doi:10.1029/2001GL014048) is now confirmed for FOUR centres: CCCma, CNRM, IPSL, and INGV-SXG.** MPI-ECHAM5 also used it (LOA SRES server reference in PCMDI doc). This single dataset underpins the sulphate direct-effect forcing for the majority of CMIP3 models documented so far — a striking convergence on one provider.
- **MIUB-ECHO-G volcanic+solar forcing is uniquely bundled: the Crowley (2000) single solar-constant approach.** Solar and volcanic RF are folded into a single temporally varying solar constant following Crowley (2000), scaled from Lean et al. 1995 solar variance. This is distinct from all other models documented so far (GFDL/GISS use Sato 1993 AOD; NCAR uses Ammann 2003 AOD; CNRM/IPSL/INGV omit natural forcing entirely). The single-scalar approach loses latitudinal and seasonal structure of volcanic aerosol loading.
- **ECHAM4-lineage models (INGV-SXG and MIUB-ECHO-G) diverge at the coupled-model level.** Both use ECHAM4.6 atmosphere, but INGV-SXG applies GHGs + sulphate direct only (no natural forcings), while MIUB-ECHO-G adds natural forcings (solar+volcanic via Crowley 2000) and sulphate first indirect effect. Two models from the same atmospheric code base but with substantially different 20C3M forcing sets.
- **MPI-ECHAM5's CMIP3 20C3M is simpler than its capability.** The ECHAM5-HAM configuration (Stier et al. 2005) supports interactive BC, OC, dust, sea salt, and two-moment cloud microphysics — but the CMIP3 20C3M runs used prescribed sulphate only ("only sulfate aerosol is prescribed, direct and first indirect effect"). Table S1 BC=Y, OC=Y, LU=Y for MPI appear to be errors — these capabilities were not used for 20C3M.
- **Two UKMO CMIP3 models use DIFFERENT solar reconstructions within the same centre.** HadCM3 uses Lean et al. 1995 (*GRL*); HadGEM1 uses Solanki & Krivova 2003 (*JGR*). Both are time-varying TSI series but from different research groups with different variance estimates — the first documented intra-centre divergence in solar forcing choice.
- **HadGEM1 MD=Y is a confirmed Table S1 error.** Mineral dust is absent from the HadGEM1 CLASSIC aerosol scheme (sulphate + sea salt + BC + biomass-burning only); interactive dust was added only in HadGEM2/HiGEM. HadGEM1 LU=- is also questionable — PCMDI Run 1 documents Goldewijk (2001) land-use changes as an applied forcing. HadCM3 VL=Y remains unverified — adversarial refute; volcanic in CEDA all-forcings ensemble but not confirmed for the archived 20C3M submission.
- **HadGEM1 SI=Y is the most complete indirect aerosol scheme documented so far.** CLASSIC: all aerosol species except BC contribute to first AND second indirect effects (cloud albedo + precipitation efficiency). Contrast with HadCM3 sulphate-only delta-albedo (prescribed, not interactive), IPSL sulphate-only first-indirect, MIUB first-indirect only.

## Staging plan — grouped by modeling centre (CMIP3 first pass)
| Stage | Centre(s) / country | CMIP3 models | Status |
|-------|---------------------|--------------|--------|
| 1 | GFDL (USA) | gfdl_cm2_0, gfdl_cm2_1 | ☑ complete — Table S1 fully supported; 1 ozone nuance open |
| 2 | GISS (USA) | giss_aom, giss_model_e_h, giss_model_e_r | ☑ ModelE-H/R complete; AOM partial (needs primary source). Found: MD/SS fixed-not-transient; SI=cloud-cover proxy |
| 3 | NCAR (USA) | ncar_ccsm3_0, ncar_pcm1 | ☑ PCM1 complete (all 12 confirmed); CCSM3 partial (VL/SI/FC/MD/SS confirmed; BC/OC/SD temporal treatment open) |
| 4 | CCCma (Canada) | cccma_cgcm3_1_t47, cccma_cgcm3_1_t63 | ☑ FC=F,H confirmed; SO/VL/LU by documented silence; no conflicts. Flato 2000 = CGCM1 control only. Boer et al. 2000 (doi:10.1007/s003820050337) recommended for explicit SO/VL/LU statements. |
| 5 | CSIRO (Australia) | csiro_mk3_0, csiro_mk3_5 | ☑ G=TV equiv-CO2; SD/FC confirmed; O=Y **candidate conflict** (Wang 1995 AMIPII baseline but TV capability exists — 20C3M docs silent); SO/VL=- by absence; CTR_021 (Mk3.5) defers 20C3M details "elsewhere" |
| 6 | CNRM + IPSL (France) | cnrm_cm3, ipsl_cm4 | ☑ CNRM: 3 conflicts (SI/SO/VL); IPSL: 2 conflicts (SO/VL) + O=Y open. Both used Boucher & Pham 2002 LOA sulphate; neither applied natural forcings. |
| 7 | MPI + INGV + MIUB (Germany/Italy) | mpi_echam5, ingv_echam4, miub_echo_g | ☑ MPI: 3–5 conflicts (BC/OC/LU unsupported; SO/VL likely absent). INGV: 3 conflicts (O/SO/VL). MIUB: 2 conflicts (SI=- wrong; FC=H wrong). MIUB SO/VL bundled via Crowley 2000 solar constant. |
| 8 | UKMO (UK) | ukmo_hadcm3, ukmo_hadgem1 | ☑ HadCM3: all confirmed except VL=Y unverified. HadGEM1: 1 conflict (MD=Y wrong — mineral dust absent); LU=- questionable; SO/VL=Y confirmed (different solar from HadCM3: Solanki & Krivova 2003 vs Lean 1995). |
| 9 | MIROC + MRI (Japan) | miroc3_2_hires, miroc3_2_medres, mri_cgcm2_3_2a | ☐ not started |
| 10 | BCCR + IAP + INM (Norway/China/Russia) | bccr_bcm2.0, iap_fgoals1_0, inmcm3_0 | ☐ not started |

Legend: ☐ not started · ◐ in progress · ☑ complete

**All 24 CMIP3 model files pre-seeded** in `cmip3/models/<CENTER>__<model>.md` with their Table S1 rows in the augmented schema (Verdict/Temporal/Dataset blank, ready to fill). Stages 3–10 now just populate existing files — no setup per stage. INM-CM3.0's row is all "?" (built from primary literature, not in Table S1).

Later passes (after CMIP3): CMIP5 lineage (e.g. GFDL CM3/ESM2M, GISS-E2-H/R, CCSM4) then CMIP6/input4MIPs.

**CMIP5 pre-seeded:** `cmip5/data/cmip5-duracketal16-model-list.csv` — 47 CMIP5 models from Durack et al. (2016) Table S1. Includes the CMIP3-centre descendants: GFDL-CM2p1/CM3/ESM2G/ESM2M, GISS-E2-H/R(+CC), CCSM4/CESM1-*, CNRM-CM5, CSIRO-Mk3.6.0, IPSL-CM5A/B, MPI-ESM-LR/MR/P, HadCM3/HadGEM2-*, MIROC5/-ESM, CanESM2, NorESM1, bcc-csm1-1, FGOALS-g2/s2.

**CMIP6 pre-seeded:** `cmip6/data/cmip6-rothig23-model-list.csv` — 46 CMIP6 models / 25 institutions from Röthig et al. (2023) Tables S2–S4. The tables enumerate ScenarioMIP SSP runs, but **the model list is what we use** — every listed model also ran the CMIP6 `historical` experiment (1850–2014) that its SSP runs branch from, so all are in scope. Not exhaustive (full historical ensemble ~100+). **Canonical CMIP6 model registry: WCRP-CMIP/CMIP6_CVs `CMIP6_source_id.json`** (source_id, expanded acronym, institution_id) — reconcile/expand the list against it in the CMIP6 pass; pair with input4MIPs for forcing data. Many are direct descendants of the CMIP3 centres being documented now (GFDL-ESM4/CM4, GISS-E2-1-G/H, NCAR CESM2, CNRM-CM6-1, MIROC6, MRI-ESM2-0, UKESM1, INM-CM5-0, etc.) — a ready lineage bridge. Caveats (typo-dup, full historical ensemble is ~100+) noted in the CSV header.
