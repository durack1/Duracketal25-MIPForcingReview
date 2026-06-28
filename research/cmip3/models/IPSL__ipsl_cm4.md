# ipsl_cm4 — IPSL (Institut Pierre-Simon Laplace, France)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** IPSL-CM4 (LMDZ4 atmosphere + ORCA2 ocean) → IPSL-CM5A/B (CMIP5) → IPSL-CM6A-LR (CMIP6)
- **Primary documentation paper(s):** Marti et al. 2010 (*Clim. Dyn.* doi:10.1007/s00382-009-0598-2)
- **Forcing-specific reference(s):** Boucher & Pham 2002 (*GRL* doi:10.1029/2001GL014048) — sulphate direct effect; Boucher & Lohmann 1995 (indirect / first indirect effect, updated formula D, POLDER-tuned); GHG data gathered by J-F Royer (CNRM), ENSEMBLES protocol, Law Dome DE08/DE08-2/DSS ice cores

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | CO2/CH4/N2O/CFCs; data gathered by J-F Royer (CNRM) via ENSEMBLES protocol; CO2 from Law Dome DE08, DE08-2, DSS ice cores | PCMDI IPSL-CM4 doc (Section E.2) | — | Shared GHG data supplier with CNRM-CM3 (J-F Royer) |
| O  | Ozone (tropo + strato) | Y | ✗ conflict (confirmed) | FXc (fixed climatological ozone) | Table S1 O=Y is a CONFIRMED ERROR. PCMDI PDF §V 20C3M section closes with: 'Other variables: All other variables are kept constant. There are no natural forcings.' Ozone is held at a fixed climatological value throughout the 20C3M run — NOT time-varying as Table S1 claims. No ozone scheme or dataset is mentioned anywhere in the model physics section (§IV). | PCMDI IPSL-CM4.pdf §V.C (verbatim) | — | |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | O. Boucher (LOA/CNRS) sulphate fields; Boucher & Pham 2002 (GRL); time-varying; **NOTE: sulphate span claim (1860–2000) was adversarially refuted** — actual coverage not confirmed | PCMDI IPSL-CM4 doc; Boucher & Pham 2002 (*GRL* doi:10.1029/2001GL014048) | boucher_pham_2002 | Same LOA aerosol lineage as CNRM-CM3 and CCCma; sulphate span 1860–2000 unconfirmed |
| SI | Sulphate aerosol — indirect | Y | ✓ supports | TV | **First indirect (Twomey) effect only**; updated formula D of Boucher & Lohmann 1995, POLDER-tuned cloud droplet parameterisation; sulphate aerosols only; **second indirect (cloud lifetime) NOT included** | PCMDI IPSL-CM4 doc | boucher_lohmann_1995 | "indirect effect...using an update version of the formula D of Boucher and Lohmann (1995)...as observed by POLDER; sulfate aerosols only, and first indirect effect only" — Table S1 SI=Y supported but nuance: 1st indirect only |
| BC | Black carbon | - | ✓ supports | n/a | "No other aerosols are considered" (PCMDI verbatim) | PCMDI IPSL-CM4 doc | — | |
| OC | Organic carbon | - | ✓ supports | n/a | Not applied | PCMDI IPSL-CM4 doc | — | |
| MD | Mineral dust | - | ✓ supports | n/a | Not applied | PCMDI IPSL-CM4 doc | — | |
| SS | Sea salt | - | ✓ supports | n/a | Not applied | PCMDI IPSL-CM4 doc | — | |
| LU | Land-use change | - | ~ supports | n/a (by absence) | Not mentioned in PCMDI docs | PCMDI IPSL-CM4 doc | — | Absence claim; medium confidence |
| SO | Solar irradiance | Y | ✗ CONFLICT | FX-const (1365 W m⁻²) | **"All other variables are kept constant. There are no natural forcings"** (PCMDI verbatim); solar constant fixed at 1365 W m⁻² | PCMDI IPSL-CM4 doc | — | **Table S1 SO=Y is wrong** — no solar variability prescribed; compare CNRM fixed at 1370 W m⁻² |
| VL | Volcanic aerosols | Y | ✗ CONFLICT | n/a | **"There are no natural forcings"** (PCMDI verbatim) | PCMDI IPSL-CM4 doc | — | **Table S1 VL=Y is wrong** — volcanic forcing entirely absent |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | Not mentioned; IPSL-CM4 is flux-correction-free | PCMDI IPSL-CM4 doc | — | |

### Table S1 conflicts found
- **SO=Y → ✗ CONFLICT**: Solar constant fixed at 1365 W m⁻²; no solar variability. Table S1 incorrectly marks SO=Y.
- **VL=Y → ✗ CONFLICT**: Volcanic forcing entirely absent ("there are no natural forcings"). Table S1 incorrectly marks VL=Y.
- **O=Y → ✗ CONFLICT (CONFIRMED)**: Ozone not time-varying. PCMDI PDF §V: 'All other variables are kept constant. There are no natural forcings.' This is a confirmed additional Table S1 error alongside SO=Y and VL=Y.

### Open questions
- SD temporal coverage: The 1860–2000 span for the IPSL sulphate field was adversarially refuted; actual coverage period not confirmed.
- Boucher & Pham 2002 DOI **confirmed**: GRL doi:10.1029/2001GL014048 ("History of sulfate aerosol radiative forcings"). The JD doi:10.1029/2001JD000765 is Timmreck (2001) — a separate paper on background stratospheric aerosol; not Boucher & Pham.

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI Y · BC - · OC - · MD - · SS - · LU - · SO Y · VL Y · FC -
- Sources consulted: PCMDI IPSL-CM4 model documentation page (primary; direct quotes obtained)
- Stage 6 adversarial workflow: wf_9e81bc88-cfa; 28 agent calls; findings confidence HIGH; 2 confirmed conflicts + 1 open question (O=Y)
