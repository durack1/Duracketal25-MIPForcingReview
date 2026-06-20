# Resume after token reset → Stage 3 COMPLETE + Stage 4 (CCCma)

**Lean harness script (reuse, do not regenerate):**
`/home/duro/.claude/projects/-home-duro-git-Duracketal25-MIPForcingReview-research-models/1d50b049-f316-40c3-80be-a997612ce472/workflows/scripts/deep-research-lean.js`

## Stage 3 (NCAR) — COMPLETE ✓

Stage 3 results written (2026-06-20):
- `research/cmip3/models/NCAR__ncar_ccsm3_0.md` — populated; BC/OC/SD temporal treatment open
- `research/cmip3/models/NCAR__ncar_pcm1.md` — fully populated; no Table S1 conflicts
- `research/cmip3/data/verified-forcing-matrix.csv` — NCAR rows added
- `research/README.md` — #6/#7 registry updated; 3 cross-cutting findings added
- `research/bib-to-add.md` — 5 Stage 3 refs added (collins_community_2006, meehl_solar_2003, meehl_combinations_2004, washington_parallel_2000, ammann_volcanic_2003)

**Residual open question (CCSM3):** Are BC/OC/SD aerosols time-varying or FX-clim? FX-clim claim was adversarially refuted (suggesting TV), but no positive TV confirmation found. Requires direct read of Collins 2006 §3 or Lamarque et al. aerosol methods.

**Model strategy (hybrid):** run the session on **Sonnet 4.6** (`/model`). The lean script pins the **verify + synthesize** agents to **`model: "opus"`** (insurance) while scope/search/fetch inherit the session model (Sonnet). No per-launch flags needed — it's baked into deep-research-lean.js.

Stage files already seeded: `research/cmip3/models/NCAR__ncar_ccsm3_0.md`, `NCAR__ncar_pcm1.md`.

## Stage 3 args (NCAR: ccsm3_0, pcm1) — ALREADY LAUNCHED, preserved for reference
Document and adversarially verify the climate forcing datasets used in the two NCAR CMIP3 models — CCSM3 (ncar_ccsm3_0) and PCM1 (ncar_pcm1) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1, a SECONDARY compilation — treat every Y/- as a CLAIM TO TEST against each model's PRIMARY documentation; do not treat other compilations (IPCC/PCMDI tables) as primary.

PRIMARY SOURCES: CCSM3 — Collins et al. 2006 (J. Climate, doi:10.1175/JCLI3761.1), Meehl et al. 2006 CCSM3 20th-century/sensitivity. PCM1 — Washington et al. 2000 (Clim. Dyn.), Meehl et al. 2003/2004 PCM 20th-century forcing experiments.

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — and crucially whether TIME-VARYING or a FIXED field, and WHAT that fixed value is (record fixed scalars WITH UNITS, e.g. fixed solar constant in W m-2, fixed CO2 in ppm); (c) VERDICT vs Table S1 (supports/conflicts/unclear) with a quote/citation. Table S1's Y/- is read as "time-varying forcing applied" — flag fixed-but-marked-Y as a conflict.

Table S1 claims:
ncar_ccsm3_0: G=Y, O=Y, SD=Y, SI=-, BC=Y, OC=Y, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=blank
ncar_pcm1:    G=Y, O=Y, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=blank

Pay attention to: which solar (Lean?) and volcanic (Ammann et al. 2003 is the NCAR/CCSM dataset — verify vs Sato) reconstructions; whether ozone was time-varying or fixed; the FC=blank ambiguity (CCSM3/PCM are not flux-corrected — confirm should be "-"). Note differences between CCSM3 and PCM1.

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation (author/year/DOI). List all conflicts with Table S1.

## After Stage 3: write results into the two seeded NCAR files (research/cmip3/models/), add CCSM3/PCM1 rows to research/cmip3/data/verified-forcing-matrix.csv, update README registry + status + cross-cutting, append refs to bib-to-add.md.

---

## Stage 4 (CCCma) — COMPLETE ✓

Stage 4 results written (2026-06-20):
- `CCCma__cccma_cgcm3_1_t47.md`, `CCCma__cccma_cgcm3_1_t63.md` — populated; T47/T63 forcing identical
- Key findings: G=TV ✓; SD=TV via Boucher LOA surface-albedo proxy ✓; O=FX-clim (SUNYA/Wang 1995) ✓; BC/OC/MD/SS = FX-const (Shettle & Fenn 1979 with exact values); SO/VL/FC unverified (need Flato & Boer 2001)
- 3 bib entries added: scinocca_technical_2008, boucher_anderson_1995, flato_boer_2001 (verify)

---

## Stage 5 args (CSIRO: csiro_mk3_0, csiro_mk3_5) — NEXT TO LAUNCH
Stage files already seeded: `research/cmip3/models/CSIRO__csiro_mk3_0.md`, `CSIRO__csiro_mk3_5.md`.

Launch: `Workflow({ scriptPath: "<lean script>", args: "<Stage 5 prompt below>" })`

Document and adversarially verify the climate forcing datasets used in the two CSIRO CMIP3 models — Mk3.0 (csiro_mk3_0) and Mk3.5 (csiro_mk3_5) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1, a SECONDARY compilation — treat every Y/- as a CLAIM TO TEST against each model's PRIMARY documentation; do not treat other compilations (IPCC/PCMDI tables) as primary.

PRIMARY SOURCES: Mk3.0 — Gordon et al. 2002 (CSIRO Mk3, *QJRMS* or *Clim. Dyn.* — locate correct citation); PCMDI CMIP3 model documentation pages for csiro_mk3_0 and csiro_mk3_5. Mk3.5 — Gordon et al. 2010 (*Clim. Dyn.*) or similar. Also check Rotstayn et al. for aerosol forcing in CSIRO models.

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — and crucially whether TIME-VARYING or a FIXED field, and WHAT that fixed value is (record fixed scalars WITH UNITS, e.g. fixed solar constant in W m-2, fixed CO2 in ppm); (c) VERDICT vs Table S1 (supports/conflicts/unclear) with a quote/citation. Table S1's Y/- is read as "time-varying forcing applied" — flag fixed-but-marked-Y as a conflict.

Table S1 claims:
csiro_mk3_0: G=Y, O=Y, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=-, VL=-, FC=-
csiro_mk3_5: G=Y, O=Y, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=-, VL=-, FC=-

Pay attention to: SO=- and VL=- (no solar or volcanic — same unusual pattern as CCCma CGCM3.1; confirm or flag as conflict); O=Y (ozone time-varying — confirm whether truly TV or FX-clim like CCCma); FC=- (no flux corrections — confirm); the sulphate (SD=Y) dataset (which aerosol reconstruction?); whether Mk3.0 and Mk3.5 differ in forcing treatment (Mk3.5 was the updated version).

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation (author/year/DOI). List all conflicts with Table S1.

## After Stage 5: write results into the two seeded CSIRO files, add rows to verified-forcing-matrix.csv, update README registry + status + cross-cutting, append refs to bib-to-add.md. Then move to Stage 6 (CNRM + IPSL).

## Stage 4 args (CCCma: cccma_cgcm3_1_t47, cccma_cgcm3_1_t63) — COMPLETE, preserved for reference
Stage files already seeded: `research/cmip3/models/CCCma__cccma_cgcm3_1_t47.md`, `CCCma__cccma_cgcm3_1_t63.md`.

Launch: `Workflow({ scriptPath: "<lean script>", args: "<Stage 4 prompt below>" })`

Document and adversarially verify the climate forcing datasets used in the two CCCma CMIP3 models — CGCM3.1(T47) (cccma_cgcm3_1_t47) and CGCM3.1(T63) (cccma_cgcm3_1_t63) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1, a SECONDARY compilation — treat every Y/- as a CLAIM TO TEST against each model's PRIMARY documentation; do not treat other compilations (IPCC/PCMDI tables) as primary.

PRIMARY SOURCES: Flato & Boer 2001 (CGCM3 description, Clim. Dyn.); Kim et al. 2002 (CCCma CGCM3); Scinocca et al. 2008 (CCCma atmospheric model CanAM); also check Boer et al. 2000 and the PCMDI CMIP3 model documentation page for CCCma. T47 and T63 are the same model at different resolutions — forcing treatment is likely identical but confirm.

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — and crucially whether TIME-VARYING or a FIXED field, and WHAT that fixed value is (record fixed scalars WITH UNITS, e.g. fixed solar constant in W m-2, fixed CO2 in ppm); (c) VERDICT vs Table S1 (supports/conflicts/unclear) with a quote/citation. Table S1's Y/- is read as "time-varying forcing applied" — flag fixed-but-marked-Y as a conflict.

Table S1 claims:
cccma_cgcm3_1_t47: G=Y, O=-, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=-, VL=-, FC=F,H
cccma_cgcm3_1_t63: G=Y, O=-, SD=Y, SI=-, BC=-, OC=-, MD=-, SS=-, LU=-, SO=-, VL=-, FC=F,H

Pay attention to: SO=- and VL=- (no solar or volcanic — unusual for a 20C3M run; confirm or flag conflict); O=- (no ozone forcing — was it truly omitted or fixed?); FC=F,H (flux corrections applied — rare for this era; confirm F=freshwater, H=heat); the sulphate (SD=Y) dataset used (Boucher? Mitchell? Lamarque?); whether GHGs were time-varying (Y claim). Note whether T47 and T63 share identical forcing treatment or differ.

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation (author/year/DOI). List all conflicts with Table S1.

## After Stage 4: write results into the two seeded CCCma files, add rows to verified-forcing-matrix.csv, update README registry + status + cross-cutting, append refs to bib-to-add.md.

---

## Remaining queue (CMIP3 first pass)
5 CSIRO · 6 CNRM+IPSL · 7 MPI+INGV+MIUB · 8 UKMO · 9 MIROC+MRI · 10 BCCR+IAP+INM
Then later passes: CMIP5 lineage, CMIP6/input4MIPs.
