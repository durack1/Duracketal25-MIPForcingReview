# Resume after token reset → Stage 5 PARTIAL + Stage 4b (CCCma open questions) + Stage 6 (CNRM + IPSL)

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

## Stage 5 (CSIRO: csiro_mk3_0, csiro_mk3_5) — PARTIAL ◐ (2026-06-20)

Stage 5 ran but hit API session limits during the verify + synthesis phase. 5 claims confirmed 1-0; 9 verify agents + synthesis failed. Partial results written.

**Confirmed:**
- SD=TV (monthly mean Penner et al. 1994 sulphate, direct effect only) ✓ for Mk3.0; inferred for Mk3.5
- SI=BC=OC=MD=SS=na ("direct effect of aerosols only") ✓ for Mk3.0; inferred for Mk3.5
- FC=na confirmed for Mk3.0 (PCMDI)
- PCMDI docs for both models are blank/incomplete — Gordon 2002 Tech Report is primary source

**Still open (Stage 5 re-run needed OR Stage 5b):**
- O=Y: Is ozone time-varying or FX-clim? PCMDI notes "no interactive chemistry" — if FX-clim, ✗ conflict
- SO=-, VL=-: Unusual omissions — need Gordon 2002 Tech Report §forcing to confirm/refute
- G=Y: GHG time series not confirmed
- Mk3.5 specifics: all cells inferred from Mk3.0; Mk3.5 primary source (Gordon 2010?) not found
- Penner et al. 1994: exact journal ref not confirmed

**Stage 5 resume ID:** `wf_7d31707c-778` — use `Workflow({ scriptPath: "<lean script>", resumeFromRunId: "wf_7d31707c-778" })` to re-run failed verify agents without re-running completed ones.

---

## Stage 4b (CCCma SO/VL/FC/LU — NOW UNBLOCKED by new PDFs)

**NEW: Flato et al. 2000 (*Clim. Dyn.*) and Flato & Boer 2001 (*GRL*) uploaded to `resources/`.**
These directly resolve the CCCma open questions for SO=-, VL=-, FC=F,H, LU=-.

Can be run as a targeted follow-up after Stage 5 re-run, OR merged into the next session.

Prompt for Stage 4b:
Read the uploaded PDFs `resources/Flatoetal00ClimDyn-*.pdf` and `resources/Flato+Boer01GRL-*.pdf` and answer the following for both cccma_cgcm3_1_t47 and cccma_cgcm3_1_t63:
1. SO=-: Did CCCma CGCM3.1 truly omit solar forcing in 20C3M? Quote the relevant passage.
2. VL=-: Did CCCma CGCM3.1 truly omit volcanic forcing? Quote.
3. FC=F,H: What are the flux corrections — confirm heat (H) and freshwater (F) corrections are applied; give values with units if stated.
4. LU=-: Was land-use change forcing applied or omitted?
5. Kim et al. 2002 (doi:10.1007/s00382-002-0243-y, `resources/Kimetal02ClimDyn-*.pdf`) — confirm whether this LGM paper is the intended CCCma CGCM3.1 forcing reference, or if a different Kim et al. 2002 is needed.
Update both CCCma model files with confirmed verdicts + quotes; update verified-forcing-matrix.csv rows; append bib entries.

---

## Stage 5b / CSIRO re-run args (full verification)

**Resume failed Stage 5:** `Workflow({ scriptPath: "<lean script>", resumeFromRunId: "wf_7d31707c-778" })`

If resume doesn't work, re-run with this refined prompt (incorporating confirmed SD/SI/BC/OC/MD/SS/FC findings):

Document and adversarially verify the REMAINING unresolved forcings for CSIRO Mk3.0 (csiro_mk3_0) and Mk3.5 (csiro_mk3_5) CMIP3 20C3M simulations. SD/SI/BC/OC/MD/SS/FC are already confirmed from Stage 5 — focus ONLY on:

1. **O=Y for both models**: PCMDI notes "no interactive atmospheric chemistry" for Mk3.0 — does this mean ozone is a fixed climatology (FX-clim), not time-varying? If FX-clim, Table S1 Y is a ✗ conflict. Search for Gordon et al. 2002 (CSIRO Tech Paper No. 60) ozone treatment, and any Mk3.5 primary paper (Gordon et al. 2010 or similar).
2. **SO=- and VL=- for both models**: Confirm or refute from primary sources. Most CMIP3 models include solar and volcanic — what's the CSIRO rationale for omission?
3. **G=Y for both models**: What GHG time series was prescribed?
4. **Mk3.5 primary source**: Locate the Mk3.5 description paper — candidate is Gordon et al. 2010 (*Clim. Dyn.*) or a CSIRO Technical Report. Find the exact citation and confirm whether aerosol/ozone/solar/volcanic treatment changed from Mk3.0.
5. **Penner et al. 1994 exact citation**: Confirm the full reference for the sulphate dataset cited in Gordon 2002.

PRIMARY SOURCES: Gordon et al. 2002 (CSIRO Tech Paper No. 60, cmar.csiro.au/e-print/open/gordon_2002a.pdf); Rotstayn et al. (check for aerosol/ozone updates in Mk3.5); any Mk3.5 description paper.

Table S1 claims (open items only):
csiro_mk3_0: G=Y, O=Y, SO=-, VL=-
csiro_mk3_5: G=Y, O=Y, SD=Y(inferred), SO=-, VL=-, FC=-(inferred)

DELIVERABLE: per forcing per model — verdict, temporal treatment, dataset, citation. Flag any ✗ conflicts with Table S1.

---

## Stage 6 args (CNRM + IPSL: cnrm_cm3, ipsl_cm4) — NEXT AFTER CSIRO

Stage files already seeded: `research/cmip3/models/CNRM__cnrm_cm3.md`, `IPSL__ipsl_cm4.md`.

Document and adversarially verify the climate forcing datasets used in two French CMIP3 models — CNRM-CM3 (cnrm_cm3) and IPSL-CM4 (ipsl_cm4) — for their CMIP3 20C3M (historical) simulations.

CONTEXT: Stage of a review anchored on Durack & Wijffels (2012) Table S1, a SECONDARY compilation — treat every Y/- as a CLAIM TO TEST against each model's PRIMARY documentation.

PRIMARY SOURCES: CNRM-CM3 — Salas-Mélia et al. 2005 (*Note de Centre CNRM*); Déqué et al. 1994 (ARPEGE atmosphere); PCMDI CMIP3 doc for cnrm_cm3. IPSL-CM4 — Marti et al. 2010 (*Clim. Dyn.*); Boucher & Pham 2002 (aerosol forcing); PCMDI CMIP3 doc for ipsl_cm4.

FOR EACH of 12 forcings, for EACH model: (a) applied in 20C3M? (b) WHICH dataset/source — and crucially whether TIME-VARYING or a FIXED field, and WHAT that fixed value is (record fixed scalars WITH UNITS); (c) VERDICT vs Table S1 with quote/citation.

Table S1 claims:
cnrm_cm3:  G=Y, O=-, SD=Y, SI=Y, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=-
ipsl_cm4:  G=Y, O=Y, SD=Y, SI=Y, BC=-, OC=-, MD=-, SS=-, LU=-, SO=Y, VL=Y, FC=-

Pay attention to: SI=Y for both (indirect aerosol effect — confirm mechanism and source); O=- for CNRM but O=Y for IPSL (ozone treatment differs?); SO=Y and VL=Y for both (confirm datasets — which solar and volcanic reconstructions?); whether sulphate aerosol direct and indirect use same or different datasets.

DELIVERABLE: cited report, per forcing per model: verdict, temporal treatment (TV/fixed + fixed value with units), dataset/source, exact citation (author/year/DOI). List all conflicts with Table S1.

## After Stage 6: write results into the two seeded French model files, add rows to verified-forcing-matrix.csv, update README registry + status + cross-cutting, append refs to bib-to-add.md. Then move to Stage 7 (MPI + INGV + MIUB).

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
