# ingv_echam4 — INGV (Istituto Nazionale di Geofisica e Vulcanologia, Italy)

- **CMIP phase:** CMIP3 (20C3M)
- **Model name:** INGV-SXG / SINTEX-G (CMIP3 model ID: ingv_echam4; PCMDI registered as "INGV-SXG") — ECHAM4.6 atmosphere + ORCA2 ocean
- **Model family / lineage:** ECHAM4.6 atmosphere (MPI lineage) + ORCA2 ocean; no direct CMIP5/6 successor listed
- **Primary documentation paper(s):** PCMDI INGV-SXG documentation (20 Dec 2006); Gualdi et al. 2008 (*J. Climate* doi:10.1175/2007JCLI1824.1)
- **Forcing-specific reference(s):** Boucher & Pham 2002 (*GRL* doi:10.1029/2001GL014048) — sulphate direct effect, 1870–2000; ENSEMBLES GHG protocol
- **PCMDI doc URL (live):** https://pcmdi.llnl.gov/ipcc/model_documentation/INGV-SXG.htm *(INGV-ECHAM4.htm returns 404)*

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | ENSEMBLES project GHG concentrations; time-varying | PCMDI INGV-SXG.htm (Section V, 20C3M) | — | "annual global concentrations...ENSEMBLES" |
| O  | Ozone (tropo + strato) | Y | ✗ CONFLICT | FX-clim | ECHAM4 prescribed ozone appears only as a **fixed band absorber** (14.6 μm band); not described as time-varying anywhere in primary doc. Section II.A: atmospheric chemistry = "No". | PCMDI INGV-SXG.htm (Section IV.A.4.d, II.A) | — | **Table S1 O=Y CONFLICTS** with primary doc — ozone is a fixed climatology absorber, not a time-varying forcing field |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Boucher & Pham 2002 LOA data (http://www-loa.univ-lille1.fr/~boucher/sres/), 1870–2000; **direct effect only** | PCMDI INGV-SXG.htm (Section V, Section II.C); Boucher & Pham 2002 (*GRL* doi:10.1029/2001GL014048) | boucher_pham_2002 | "Sulfate aerosols are specified according to Boucher and Pham (2002) data... Results are given for the years 1870 to 2000." |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | **"only direct effect of sulfate included"** (PCMDI verbatim, Section II.C); no indirect aerosol effect | PCMDI INGV-SXG.htm | — | Consistent with Table S1 SI=- |
| BC | Black carbon | - | ✓ supports | n/a | Not documented; sulphate-direct-only scheme | PCMDI INGV-SXG.htm | — | |
| OC | Organic carbon | - | ✓ supports | n/a | Not documented | PCMDI INGV-SXG.htm | — | |
| MD | Mineral dust | - | ✓ supports | n/a | Not documented | PCMDI INGV-SXG.htm | — | |
| SS | Sea salt | - | ✓ supports | n/a | Not documented | PCMDI INGV-SXG.htm | — | |
| LU | Land-use change | - | ✓ supports | n/a | Section II.D land/ice-sheets = "None" | PCMDI INGV-SXG.htm | — | |
| SO | Solar irradiance | Y | ✗ CONFLICT | n/a (not documented) | **No solar forcing listed anywhere in 20C3M section or model docs**. Section V lists ONLY GHGs + sulphate. Multiple independent sources (CMCC INGV-SXG page, WDC-Climate, Gualdi summaries) consistently omit solar. | PCMDI INGV-SXG.htm; secondary corroboration | — | **Table S1 SO=Y SPURIOUS** — confirmed pattern from Stage 6 (CNRM, IPSL also had no natural forcings) |
| VL | Volcanic aerosols | Y | ✗ CONFLICT | n/a (not documented) | **No volcanic forcing listed**; same sources as SO. Section V 20C3M is a closed list: ENSEMBLES GHGs + Boucher & Pham sulphate only. | PCMDI INGV-SXG.htm; secondary corroboration | — | **Table S1 VL=Y SPURIOUS** |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | Section IV.E.4 flux adjustment = "None" | PCMDI INGV-SXG.htm | — | |

### Table S1 conflicts found
- **O=Y → ✗ CONFLICT**: Ozone is a fixed ECHAM4 band absorber (FX-clim), not a time-varying forcing. Table S1 O=Y is not supported.
- **SO=Y → ✗ CONFLICT**: No solar forcing documented in 20C3M; only GHGs and sulphate listed. Table S1 SO=Y is spurious.
- **VL=Y → ✗ CONFLICT**: No volcanic forcing documented; same closed forcing list. Table S1 VL=Y is spurious.

### Open questions
- Is the ECHAM4.6 ozone treatment genuinely a fixed annual-mean climatology, or does the INGV-SXG run use a time-varying prescribed ozone field (which would revise O from ✗ to ✓)? Roeckner et al. 1996 ECHAM4 documentation would clarify.
- Note: the INGV model is registered in CMIP3 as "ingv_echam4" but the PCMDI documentation page is INGV-SXG.htm (SINTEX-G). Gualdi et al. 2008 is the primary coupled model paper.

## Provenance
- Table S1 row (from Stage 7 args): G Y · O Y · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO Y · VL Y · FC -
- Sources consulted: PCMDI INGV-SXG.htm and INGV-SXG.pdf (primary; direct quotes from Sections II, IV, V); secondary: CMCC INGV-SXG summary, WDC-Climate metadata
- Stage 7 adversarial workflow: wf_0fca602f-9ce; O/SO/VL conflict confidence HIGH (multiple independent sources consistent)
