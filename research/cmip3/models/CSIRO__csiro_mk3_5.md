# csiro_mk3_5 — CSIRO (Commonwealth Scientific and Industrial Research Organisation, Australia)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** CSIRO Mk3.0 → Mk3.5 → Mk3.6 (CMIP5). Mk3.5 is an updated version of Mk3.0 — enhanced physics but likely same aerosol treatment (Penner et al. 1994 sulphate, direct effect only — see note below).
- **Primary documentation paper(s):** Gordon, H.B., O'Farrell, S., Collier, M., Dix, M., Rotstayn, L., Kowalczyk, E., Hirst, T., and Watterson, I. (2010). *The CSIRO Mk3.5 Climate Model.* CAWCR Technical Report No. 021, May 2010. (URL: https://www.cawcr.gov.au/technical-reports/CTR_021.pdf) — **Mk3.5-specific primary source found**; PCMDI CMIP3 Mk3.5 doc page submitted July 2007 — forcing sections blank ("Not available yet"). Also: Gordon et al. 2002 Tech Paper No. 60 (Mk3.0 baseline).
- **Note:** The enhanced aerosol radiation package (Rotstayn et al. 2010) was added to **Mk3.6**, NOT Mk3.5 — confirmed from CTR_021. Mk3.5 retains the same Penner et al. 1994 sulphate scheme as Mk3.0.
- **Forcing-specific reference(s):** Penner, J.E., Atherton, C.A., and Graedel, T.E. (1994) — sulphate aerosol monthly mean fields (confirmed from PCMDI Mk3.5 page); Wang, W.-C. et al. (1995) — AMIP II ozone climatology (inferred from Mk3.0; needs explicit Mk3.5 confirmation)

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ✓ supports | TV (equiv CO2) | "greenhouse gas concentration" as 20C3M forcing per researchdata.edu.au; same equiv-CO2 mechanism as Mk3.0 (Gordon 2002: CH4/N2O/CFCs folded into equiv-CO2, not represented explicitly); time-varying | researchdata.edu.au; Gordon et al. 2002 (Mk3.0 mechanism, inferred for Mk3.5) | gordon_csiro_2002 | Same equiv-CO2 approach as Mk3.0; exact time series not identified |
| O  | Ozone (tropo + strato) | Y | ~ unclear | FX-clim (baseline) / TV (capability) | Same ozone treatment as Mk3.0 (Wang et al. 1995 AMIP II) inferred; PCMDI Mk3.5 forcing sections blank; CTR_021 defers 20C3M details "elsewhere." If fixed Wang 1995 was used for 20C3M, Table S1 Y is a candidate conflict — same as Mk3.0. | Gordon et al. 2002 *(inferred for Mk3.5)*; PCMDI Mk3.5 *(blank)* | gordon_csiro_2002 | Candidate conflict inherited from Mk3.0; Collier & Bi 2008 may resolve |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV (monthly mean) | "Direct effect of aerosols only using monthly mean sulfate (Penner et al, 1994)" — confirmed verbatim from PCMDI Mk3.5 page (NOT just inferred from Mk3.0) | PCMDI CMIP3 Mk3.5; Gordon et al. 2002 | gordon_csiro_2002 | Directly confirmed for Mk3.5 from PCMDI; enhanced Rotstayn 2010 aerosol scheme was NOT added until Mk3.6 (confirmed from CTR_021) |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | "Direct effect of aerosols only" — confirmed from PCMDI Mk3.5 page verbatim | PCMDI CMIP3 Mk3.5 | gordon_csiro_2002 | Directly confirmed for Mk3.5 |
| BC | Black carbon | - | ✓ supports | n/a | Not applied; sulphate-direct-only scheme excludes BC — confirmed from PCMDI Mk3.5 | PCMDI CMIP3 Mk3.5 | gordon_csiro_2002 | Table S1 "-" confirmed |
| OC | Organic carbon | - | ✓ supports | n/a | Not applied — confirmed from PCMDI Mk3.5 | PCMDI CMIP3 Mk3.5 | gordon_csiro_2002 | Table S1 "-" confirmed |
| MD | Mineral dust | - | ✓ supports | n/a | Not applied — confirmed from PCMDI Mk3.5 | PCMDI CMIP3 Mk3.5 | gordon_csiro_2002 | Table S1 "-" confirmed |
| SS | Sea salt | - | ✓ supports | n/a | Not applied — confirmed from PCMDI Mk3.5 | PCMDI CMIP3 Mk3.5 | gordon_csiro_2002 | Table S1 "-" confirmed |
| LU | Land-use change | - | ~ supports | n/a (by absence) | Not mentioned in any primary source; consistent with minimal forcing set | — | — | Support by absence |
| SO | Solar irradiance | - | ~ supports | ? (no variability) | No solar variability mentioned in any primary source for Mk3.5; SO=- supported by absence/silence. Same as Mk3.0. | Gordon et al. 2010 CTR_021 *(solar not mentioned)* | — | Medium confidence only; CTR_021 defers 20C3M details "elsewhere" |
| VL | Volcanic aerosols | - | ~ supports | n/a (by absence) | No volcanic forcing mentioned in any primary source; VL=- by absence/silence. Same as Mk3.0. | Gordon et al. 2010 CTR_021 *(volcanic not mentioned)* | — | Medium confidence only |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | "Flux adjustment? … None" verbatim from PCMDI Mk3.5 Section E.3; "fully coupled… without the need for any adjustments of the interactive fluxes" from CTR_021 | PCMDI CMIP3 Mk3.5; Gordon et al. 2010 CTR_021 | gordon_csiro_2010 | Directly confirmed for Mk3.5 from two independent sources |

### Table S1 conflicts found
- **O=Y — candidate conflict (~unclear)**: Same as Mk3.0 — baseline is FX-clim Wang 1995; TV capability exists but 20C3M treatment undocumented (CTR_021 explicitly defers: "details… will be reported elsewhere"). Not a confirmed conflict.
- **No other confirmed conflicts.**

### Open questions
1. **O=Y transient vs. fixed**: CTR_021 defers 20C3M details — needs Collier & Bi 2008 or equivalent.
2. **Did Mk3.0 and Mk3.5 use identical 20C3M forcing inputs?** CTR_021 notes atmosphere/land/ocean/sea-ice changes to reduce drift — unknown if any forcing inputs changed.

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO - · VL - · FC -
- Primary sources consulted: PCMDI CMIP3 Mk3.5 page (verbatim SD/SI/BC/OC/MD/SS/FC and FC confirmed); Gordon et al. 2010 CAWCR Tech Report No. 021 CTR_021.pdf (Rotstayn 2010 aerosol upgrade = Mk3.6; FC confirmed; 20C3M details deferred "elsewhere"); Gordon et al. 2002 Tech Paper No. 60 (Mk3.0 baseline — G/O mechanism); researchdata.edu.au/15214 (G/O/SD listed as 20C3M forcings)
- Stage 5 adversarial workflow: **COMPLETE** — synthesis completed wf_7d31707c-778 third resume; 8 findings after synthesis
