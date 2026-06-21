# canesm2 — CCCma (Canadian Centre for Climate Modelling and Analysis, Canada)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** cccma_cgcm3_1 (CGCM3.1 T47 and T63 variants)
- **Model family / lineage:** CGCM3.1 (CMIP3) → CanESM2 (CMIP5). Full ESM with active carbon cycle: CanAM4 atmosphere + CTEM (Canadian Terrestrial Ecosystem Model) land carbon + CMOC (Canadian Model of Ocean Carbon) + CanOM4 ocean. Aerosol and ozone treatment in CanAM4 is the key question for this stage — prescribed OD or interactive?
- **Atmosphere / ocean components:** CanAM4 atmosphere (T63 spectral, ~2.8°, 35 levels) + CanOM4 ocean (NEMO-based) + CTEM land carbon + CMOC ocean carbon + sea-ice model
- **Primary documentation paper(s):** Arora, V.K., et al. (2011). Carbon emission limits required to satisfy future representative concentration pathways of greenhouse gases. *Geophys. Res. Lett.* 38(5), L05805. doi:10.1029/2010GL046270 [arora_carbon_2011 *(add)*] **[PDF: Aroraetal11GRL-CarbonEmissionLimitsRequiredToSatisfyRCPsCanESM2.pdf]**; VonSalzen, K., et al. (2013). The Canadian Fourth Generation Atmospheric Global Climate Model (CanAM4). Part I: representation of physical processes. *Atmos.-Ocean* 51(1), 104–125. doi:10.1080/07055900.2012.755610 [vonsalzen_canam4_2013 *(add)*] **[PDF: vonSalzenetal13Atmos-Ocean-CanAM4RepresentationOfPhysicalProcesses.pdf]**
- **Forcing-specific reference(s):** VonSalzen et al. 2013 for atmospheric forcing details; Arora et al. 2011 for ESM-specific inputs

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? std | TV | Meinshausen et al. 2011 (expected) | meinshausen_rcp_2011 | meinshausen_rcp_2011 | No primary-source confirmation; VonSalzen2013 PDF in /resources should confirm |
| O  | Ozone | Cionni et al. 2011 | ? | TV | ? | cionni_ozone_2011 | cionni_ozone_2011 | UNCONFIRMED. VonSalzen2013 (paywalled in workflow; PDF in /resources) is the key source. CanAM4 has no confirmed interactive chemistry → Cionni2011 likely but unverified. |
| SD | Sulphate direct | Lamarque et al. 2010 | ~ unclear | TV+ | CanAM4 interactive aerosol scheme (first indirect effect confirmed; dataset unknown) | — | — | **Prescribed-OD claim REFUTED (0-1; Wilcox2013).** CanAM4 has interactive aerosol microphysics (SA classification per Wilcox2013 — at least first indirect effect). Dataset (Lamarque2010 emissions vs other) unresolved. Likely exc but unconfirmed. |
| SI | Sulphate indirect | Model-dependent | ~ unclear | TV+ | CanAM4 interactive (first indirect effect = YES; second = NO per Wilcox2013) | — | — | **First indirect effect confirmed via Wilcox2013 SA classification.** Verdict likely exc but dataset source unconfirmed. |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | ? | — | — | Interactive aerosol scheme likely active for BC; dataset unknown |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | ? | — | — | As BC |
| MD | Mineral dust | — | ? | ? | ? | — | — | |
| SS | Sea salt | — | ? | ? | ? | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? std | TV | Hurtt et al. 2011 (expected) | hurtt_harmonization_2011 | hurtt_harmonization_2011 | No confirmation |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | ? | — | — | Unverified; VonSalzen2013 PDF in /resources should confirm |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | ? | — | — | Unverified; VonSalzen2013 PDF in /resources should confirm |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs

| ESM input | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----------|---------|----------|-----------------|----------|-------|
| N-deposition (NHx/NOy) | ? | TV | ? Lamarque 2010 or 2013 ACCMIP? | — | UNRESOLVED. Critical question: GFDL ESMs used 2013; NCAR used 2010. Arora2011 GRL PDF in /resources may help; primary CanESM2 model description paper needed. |
| CO2 mode | ? | TV | Concentration-driven (historical) vs emission-driven (esmHistorical)? | — | Standard historical = concentration-driven (Meinshausen2011 conc.); esmHistorical = emission-driven. CanESM2 participated in both (Jones et al. 2013: 5 historical + 5 esmHistorical). |
| Ocean C / DIC initialisation | ? | FXc? | ? | — | UNRESOLVED; Christian et al. 2014 PDF in /resources may document CMOC initialisation. |

### Aerosol scheme context (Wilcox et al. 2013)
Wilcox, Highwood & Dunstone (2013, ERL 8:024033, doi:10.1088/1748-9326/8/2/024033) Table 1 classifies CMIP5 models into SA (first indirect effect included) and SD (direct only). CanESM2 is classified **SA**: first indirect effect = YES, second indirect effect = NO. This confirms CanAM4 has interactive aerosol microphysics beyond the prescribed-OD standard, but the forcing DATASET (Lamarque2010 emissions vs other) is unresolved. The prescribed-OD interpretation was adversarially refuted (0-1).

### Open questions
1. **CanAM4 ozone**: Cionni2011 (std) or alternative? — Needs VonSalzen2013 direct read (PDF in /resources)
2. **Aerosol dataset**: Does CanAM4 ingest Lamarque2010 EMISSIONS (→ exc) or another source? — Needs VonSalzen2013
3. **N-deposition year**: Lamarque 2010 or 2013 ACCMIP? — Critical cross-ESM comparison question
4. **Solar/volcanic**: Wang2005/Sato-updated? — Needs VonSalzen2013
5. **CanESM2 detection-attribution runs**: historicalGHG + historicalNat + historicalMisc(p4=aerosol-only) each 5 members (Jones et al. 2013) — confirms forcing categories were separable but not which datasets

### Provenance
- Durack et al. 2016 model list: included
- Stage 4 workflow: wf_6432ada7-087 — primary sources (VonSalzen2013, Arora2011) paywalled; PDFs now in /resources for next pass
- Key finding: CanAM4 aerosol = interactive (SA; first indirect effect) per Wilcox2013; prescribed-OD claim refuted (0-1)
- Next step: read VonSalzen2013 PDF (vonSalzenetal13Atmos-Ocean-CanAM4RepresentationOfPhysicalProcesses.pdf) and Arora2011 PDF for ozone/aerosol/solar/volcanic/N-dep details
