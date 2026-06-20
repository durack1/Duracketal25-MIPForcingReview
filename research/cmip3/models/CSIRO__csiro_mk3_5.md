# csiro_mk3_5 — CSIRO (Commonwealth Scientific and Industrial Research Organisation, Australia)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** CSIRO Mk3.0 → Mk3.5 → Mk3.6 (CMIP5). Mk3.5 is an updated version of Mk3.0 — enhanced physics but likely same aerosol treatment (Penner et al. 1994 sulphate, direct effect only — see note below).
- **Primary documentation paper(s):** Mk3.5-specific description paper not yet located — candidate: Gordon et al. 2010 (*Clim. Dyn.*) or similar; PCMDI CMIP3 Mk3.5 doc page submitted 2007 but **forcing sections blank/incomplete** ("Not available yet"). Mk3.0 primary source (Gordon et al. 2002 Tech Paper No. 60) likely applicable by continuity.
- **Forcing-specific reference(s):** Penner, J.E. et al. (1994) — sulphate aerosol monthly mean fields *(inferred from Mk3.0 primary source; needs explicit Mk3.5 confirmation)*

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ~ unclear | ? | PCMDI section blank — not confirmed | PCMDI CMIP3 Mk3.5 doc *(blank)* | — | Requires Mk3.5-specific primary source |
| O  | Ozone (tropo + strato) | Y | ~ unclear | ? | PCMDI section blank; if same treatment as Mk3.0 (FX-clim), Table S1 Y may be ✗ conflict | PCMDI CMIP3 Mk3.5 doc *(blank)* | — | Critical open question — inherit Mk3.0 concern |
| SD | Sulphate aerosol — direct | Y | ~ unclear | TV (monthly mean, if same as Mk3.0) | Confirmed for Mk3.0 as Penner et al. 1994 monthly mean sulphate fields; Mk3.5 confirmed claim states "(and Mk3.5)" shares same treatment, but needs explicit Mk3.5 citation | Gordon et al. 2002 *(Mk3.0; inferred for Mk3.5)* | gordon_csiro_2002 | Vote 1-0 for the "(and Mk3.5)" claim; flagged as inferred — needs Mk3.5 primary source confirmation |
| SI | Sulphate aerosol — indirect | - | ~ unclear | n/a (inferred) | "Direct effect of aerosols only" (Mk3.0 Gordon 2002) — likely same for Mk3.5 but unconfirmed | Gordon et al. 2002 *(Mk3.0; inferred)* | gordon_csiro_2002 | Inferred by continuity; needs Mk3.5 confirmation |
| BC | Black carbon | - | ~ unclear | n/a (inferred) | Not in Mk3.0 aerosol scheme; likely same for Mk3.5 | Gordon et al. 2002 *(inferred)* | gordon_csiro_2002 | Inferred |
| OC | Organic carbon | - | ~ unclear | n/a (inferred) | Not in Mk3.0 aerosol scheme; likely same for Mk3.5 | Gordon et al. 2002 *(inferred)* | gordon_csiro_2002 | Inferred |
| MD | Mineral dust | - | ~ unclear | n/a (inferred) | Not in Mk3.0 aerosol scheme; likely same for Mk3.5 | Gordon et al. 2002 *(inferred)* | gordon_csiro_2002 | Inferred |
| SS | Sea salt | - | ~ unclear | n/a (inferred) | Not in Mk3.0 aerosol scheme; likely same for Mk3.5 | Gordon et al. 2002 *(inferred)* | gordon_csiro_2002 | Inferred |
| LU | Land-use change | - | ~ unclear | ? | PCMDI section blank; not confirmed | — | — | Requires Mk3.5-specific primary source |
| SO | Solar irradiance | - | ~ unclear | ? | PCMDI section blank; not confirmed | — | — | Requires Mk3.5-specific primary source |
| VL | Volcanic aerosols | - | ~ unclear | ? | PCMDI section blank; not confirmed | — | — | Requires Mk3.5-specific primary source |
| FC | Flux corrections (F/H) | - | ~ unclear | ? | PCMDI section blank; FC=- confirmed for Mk3.0 (PCMDI); Mk3.5 specific unconfirmed but likely same | PCMDI CMIP3 Mk3.0 *(inferred)* | — | Inferred from Mk3.0 |

### Table S1 conflicts found
- **None confirmed** — but most cells are unverified due to PCMDI docs being blank/incomplete.
- **Inherited open question**: O=Y — if ozone is FX-clim (as Mk3.0 evidence suggests), this may be a ✗ conflict for Mk3.5 as well.

### Open questions (Stage 5 residual)
1. **Locate Mk3.5-specific primary source** — Gordon et al. 2010 (*Clim. Dyn.*) is the best candidate; confirm aerosol, ozone, solar, and volcanic treatment for 20C3M runs.
2. **O=Y, SO=-, VL=-**: Inherit same ambiguity as Mk3.0 until Mk3.5 paper found.
3. **FC=-**: Likely confirmed (Mk3.0 has no flux corrections; Mk3.5 is unlikely to add them) but needs explicit confirmation.

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO - · VL - · FC -
- Primary sources consulted: PCMDI CMIP3 Mk3.5 model documentation page (pcmdi.llnl.gov/ipcc/model_documentation/CSIRO-Mk3.5.htm — forcing sections blank, submitted July 2007); Gordon et al. 2002 Tech Paper No. 60 (Mk3.0 — applied by continuity); researchdata.edu.au/csiro-mk35-climate-model-output/15214 (data repository record — incomplete)
- Stage 5 adversarial workflow: partial (synthesis step failed due to API rate limits); Mk3.5 primary PCMDI docs confirmed blank; all cell verdicts inferred from Mk3.0 or unverified — treat as ◐ pending re-run
