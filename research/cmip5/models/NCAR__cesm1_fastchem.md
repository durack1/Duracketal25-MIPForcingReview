# cesm1_fastchem — NCAR (National Center for Atmospheric Research, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** ncar_ccsm3_0
- **Model family / lineage:** CESM1(FASTCHEM) = CCSM4 + CAM-chem framework with fast (offline-based) chemistry. An intermediate variant between CCSM4 (no chemistry) and CESM1-WACCM (full interactive chemistry). Based on CAM4 dynamics. Key distinction: interactive ozone was adversarially refuted (0-1) → FASTCHEM does NOT compute ozone prognostically; ozone treatment is likely prescribed (Cionni2011 standard), but unconfirmed. Aerosol treatment: CAM-chem Lamarque2010-emissions claim was also refuted (0-1) → aerosols likely prescribed OD as per CAM4 base (same as CCSM4).
- **Atmosphere / ocean components:** CAM4 atmosphere + CAM-chem FASTCHEM chemistry module + POP2 ocean + CLM4 land + CICE4
- **Primary documentation paper(s):** Lamarque, J.-F., et al. (2012). The CESM1 Community Atmosphere Model with Chemistry (CAM-chem). *Geosci. Model Dev.* 5(2), 369–411. doi:10.5194/gmd-5-369-2012 [lamarque_cesm1_2012 *(add)*]
- **Forcing-specific reference(s):** Lamarque et al. 2010 [lamarque_historical_2010]

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | Meinshausen et al. 2011 (expected; Meinshausen GHG claim for CAM-chem was refuted, so specifics unconfirmed) | meinshausen_rcp_2011 | meinshausen_rcp_2011 | Refutation (0-1) concerned CAM-chem's CMIP5-specific lower-boundary setup; standard CMIP5 GHG protocol likely still applies |
| O  | Ozone | Cionni et al. 2011 | ~ unclear | TV | Likely Cionni et al. 2011 prescribed (interactive ozone refuted 0-1) | cionni_ozone_2011 | cionni_ozone_2011 | **Interactive ozone claim adversarially refuted (0-1)**. FASTCHEM likely uses prescribed Cionni2011 (std), not a prognostic scheme. Exact treatment unconfirmed; needs Lamarque2012 direct read or ES-DOC FASTCHEM metadata. |
| SD | Sulphate direct | Lamarque et al. 2010 | ~ unclear | TV | Likely Lamarque 2010 prescribed OD (as CAM4 base; Lamarque2010-emissions claim refuted) | lamarque_historical_2010 | lamarque_historical_2010 | **CAM-chem Lamarque2010-emissions claim refuted (0-1)**. Suggests aerosols are prescribed OD (std), not interactive from emissions (as in CESM1-CAM5). |
| SI | Sulphate indirect | Model-dependent | ~ unclear | ? | Likely n/a (if CAM4 base aerosols, direct effect only) | — | — | If aerosols are prescribed OD as in CCSM4/CAM4, no indirect effect expected |
| BC | Black carbon | Lamarque et al. 2010 | ~ unclear | TV | Likely Lamarque 2010 prescribed OD | lamarque_historical_2010 | lamarque_historical_2010 | |
| OC | Organic carbon | Lamarque et al. 2010 | ~ unclear | TV | Likely Lamarque 2010 prescribed OD | lamarque_historical_2010 | lamarque_historical_2010 | |
| MD | Mineral dust | — | ? | ? | Unknown | — | — | |
| SS | Sea salt | — | ? | ? | Unknown | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? std | TV | Hurtt et al. 2011 (expected) | hurtt_harmonization_2011 | hurtt_harmonization_2011 | |
| SO | Solar irradiance | Wang et al. 2005 | ✓ std (inferred) | TV | Wang & Lean 2005 (CAM4 base; same as CCSM4) | wang_modeling_2005 | wang_modeling_2005 | CCSM4 confirmed 1-0; inherited |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? unresolved | TV | As CCSM4 family (unresolved) | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM. FASTCHEM chemistry inputs unconfirmed.

### Open questions
1. **Ozone treatment**: Interactive ozone refuted (0-1). Is it prescribed Cionni2011 (std) or a fast offline chemistry output? Needs direct read of Lamarque 2012 §FASTCHEM configuration or ES-DOC metadata for the CMIP5 FASTCHEM historical run.
2. **Aerosol treatment**: Lamarque2010-emissions claim refuted (0-1). Are aerosols prescribed OD (like CCSM4) or something else? Needs confirmation.
3. **GHG lower boundaries**: Meinshausen2011-for-CAM-chem claim refuted (0-1). The CMIP5 standard GHG protocol likely still applied but specifics unconfirmed.

### Provenance
- Durack et al. 2016 model list: included
- Stage 3 workflow: wf_a0c75ead-5fd (resumed); key claims refuted (0-1); treatment largely uncertain
- Needs: Lamarque 2012 PDF (resources/) or ES-DOC CMIP5 FASTCHEM simulation metadata
