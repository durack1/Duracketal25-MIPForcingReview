# CMCC-CESM — CMCC (Centro Euro-Mediterraneo sui Cambiamenti Climatici, Italy)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — CMCC is a new CMIP5 entrant
- **Model family / lineage:** CMCC Carbon Earth System Model. Low-top (L39, ~30 hPa) ECHAM5-based ESM with interactive ocean biogeochemistry (BFMv2/PELAGOS) and land carbon cycle (SILVA). **COMPONENT CORRECTION (2026-06-21): Initial seed file incorrectly listed NEMO3.2 (ocean) and CLM3.5 (land) — these are post-CMIP5 CMIP6-era components. Correct CMIP5 components are OPA8.2 (ORCA2) and SILVA.** No interactive atmospheric chemistry — MOZART-3 is absent (refuted by all accessible documentation).
- **Atmosphere / ocean components:** ECHAM5 (T31L39) + OPA8.2 (ORCA2) + SILVA + LIM2 + BFMv2 (PELAGOS ocean BGC)
- **Primary documentation paper(s):**
  - Fogli, P.G., et al. (2009). INGV-CMCC Carbon (ICC): A Carbon Cycle Earth System Model. CMCC Research Papers RP0061. [fogli_ingv_2009 *(add)*] — describes CMCC-CESM architecture; grey literature, not a peer-reviewed journal paper
  - Vichi, M., et al. (2011). Global and regional ocean carbon uptake and climate change: Sensitivity to a substantial mitigation scenario. *Clim. Dyn.* 37, 1929–1947. doi:10.1007/s00382-011-1079-0 [vichi_global_2011 *(add)*]
- **Forcing-specific reference(s):** No primary forcing documentation found; Fogli 2009 tech report (behind paywall) needed

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | Expected Meinshausen et al. 2011 concentration-driven; CO2 mode (concentration vs. emission) uncertain for this ESM with interactive ocean carbon; unconfirmed | — | — | Resolve: WDCC metadata or Vichi 2011 / Fogli 2009 |
| O  | Ozone | Cionni et al. 2011 | ? | TV | CMCC-CESM absent from Eyring et al. (2013) Table 1. MOZART-3 interactive chemistry is absent (refuted). Prescribed Cionni2011 lowtop (C1modB) most plausible for this low-top L39 model; unconfirmed | — | — | Eyring2013 Table 1 does not include CMCC-CESM |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ? | TV | Expected Tanre 1984 background aerosol climatology per ECHAM5 base without HAM; unconfirmed | — | — | |
| SI | Sulphate indirect | Model-dependent | ? | ? | Likely not applied — no two-moment microphysics in ECHAM5 base; unconfirmed | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | Expected Lamarque et al. 2010; unconfirmed | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | Expected Lamarque et al. 2010; unconfirmed | — | — | |
| MD | Mineral dust | Model-dependent | ? | FXc | Expected Tanre 1984 climatology (ECHAM5 default). **ESM note:** dust deposition drives the PELAGOS iron cycle — dataset and time-variability have ocean BGC consequences beyond direct radiative forcing; unconfirmed | — | — | Resolve: Fogli 2009 BGC forcing section |
| SS | Sea salt | Model-dependent | ? | FXc | Likely fixed climatology per ECHAM5 default; unconfirmed | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | Expected Hurtt et al. 2011 via SILVA; unconfirmed | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | Expected Wang et al. 2005; unconfirmed | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | Expected Sato et al. 1993 updated (lowtop dataset appropriate for L39); unconfirmed | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running ESM | — | — | |

### ESM-specific forcing inputs

| ESM input | Expected source | Status | Notes |
|-----------|----------------|--------|-------|
| N-deposition (NHx/NOy) | Lamarque et al. 2010 or 2013 ACCMIP | ? unconfirmed | Drives SILVA and PELAGOS nitrogen cycling; Fogli 2009 or Vichi 2011 needed |
| CO2 mode | Concentration- or emission-driven | ? unconfirmed | Standard CMIP5 historical protocol is concentration-driven; ESM emission-driven mode possible. WDCC metadata unhelpful |
| Iron/dust deposition (PELAGOS) | Tanre 1984 climatology expected | ? unconfirmed | Time-variability unknown — whether time-varying dust was applied for PELAGOS iron forcing is unconfirmed |
| Atmospheric chemistry inputs (NOx/VOC/CO) | Not applicable — MOZART-3 absent | **refuted** | MOZART-3 interactive chemistry is absent; no chemistry inputs apply |

### Component corrections (2026-06-21)
The seed file incorrectly listed NEMO3.2 (ocean) and CLM3.5 (land). Stage 11 workflow confirmed:
- **Ocean:** OPA8.2 (ORCA2) — NOT NEMO3.2 (NEMO integration is post-CMIP5 development: Fogli & Iovino 2014, CMCC RP0248)
- **Land:** SILVA — NOT CLM3.5
- **BGC:** BFMv2 (Biogeochemical Flux Model, PELAGOS-based)
- **Chemistry:** None — MOZART-3 absent (refuted by CMCC official ESM page, IS-ENES, and WDCC metadata)

### historicalMisc experiments
CMCC-CESM did NOT submit historicalMisc (single-forcing attribution) experiments to CMIP5. Confirmed by ESGF search (numFound=0).

## Open questions
1. All 12 standard forcing cells remain unconfirmed — Fogli 2009 (CMCC RP0061) is the only plausible primary source; behind paywall.
2. CO2 mode (concentration vs. emission-driven) for the ESM historical run.
3. Iron/dust deposition dataset and time-variability for PELAGOS.
4. N-deposition dataset for SILVA/PELAGOS nitrogen cycling.

## Provenance
- Durack et al. 2016 model list: included (row 45)
- Sources consulted: CMCC official ESM page (cmcc.it/models/cmcc-esm-earth-system-model); IS-ENES European ESMs page (is.enes.org/smt-european-esms-detailed); WDCC CMC1hi metadata; Eyring et al. 2013 Table 1 (CMCC-CESM absent); Fogli & Iovino 2014 CMCC RP0248 (confirms NEMO is post-CMIP5)
- Stage 11 workflow: wf_89572b47-8df (2026-06-21); component corrections applied; MOZART-3 refuted; all forcing cells remain ?
