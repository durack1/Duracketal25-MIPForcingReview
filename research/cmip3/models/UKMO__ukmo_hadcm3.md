# ukmo_hadcm3 — UKMO (UK Met Office Hadley Centre)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** HadCM3 → HadGEM1 (CMIP3) → HadCM3/HadGEM2 (CMIP5) → UKESM1/HadGEM3-GC3.1 (CMIP6)
- **Primary documentation paper(s):** Gordon et al. 2000 (*J. Climate* doi:10.1175/1520-0442(2000)013<0728:TSMFTH>2.0.CO;2); Johns et al. 2003 (*Clim. Dyn.* doi:10.1007/s00382-002-0296-y)
- **Forcing-specific reference(s):** Lean, Beer & Bradley 1995 (*GRL* 22, 3195–3198) — solar; Stott et al. 2000 (*Science* doi:10.1126/science.290.5499.2133) — 20th-century attribution ensemble; PCMDI CMIP3 page: https://pcmdi.llnl.gov/ipcc/model_documentation/HadCM3.htm

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | IPCC 1995 IS92a-like GHG variations; values tabulated in Johns et al. 2003 Table 1a | PCMDI HadCM3.htm (20C3M section) | johns_hadcm3_2003 | "anthropogenic greenhouse gas forcing (as specified in the IPCC 1995 report, to give IS92a-like forcing variations, see Table 1a in Johns et al., 2003)" |
| O  | Ozone (tropo + strato) | Y | ✓ supports | TV | Tropospheric/stratospheric ozone reconstruction 1858–1970; year-by-year varying | PCMDI HadCM3.htm | — | "Tropospheric/stratospheric ozone (reconstruction for the period 1858 - 1970)" — post-1970 treatment not specified on PCMDI page |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Anthropogenic SO2 emissions only (surface + high-level); NO natural DMS or 3D SO2 background; Smith pers. comm. + Nakicenovic et al. 2000 | PCMDI HadCM3.htm; Johns et al. 2003 | johns_hadcm3_2003 | "sulphur chemistry without natural DMS & 3D SO2 background emissions, (ie. anthropogenic SO2 emissions surface and high level only)" |
| SI | Sulphate aerosol — indirect | Y | ✓ supports | TV | **Calibrated delta-albedo method** — prescribed offline-computed cloud changes, NOT interactive cloud microphysics; sulphate-only | PCMDI HadCM3.htm; Tett et al. 2002 (*JGR* doi:10.1029/2000JD000028) | tett_estimation_2002 | "sulphate aerosol direct + indirect forcing (via calibrated delta-albedo; see Johns et al, 2003 Appendix 1A)... indirect effect was implemented by prescribing cloud changes calculated by offline models" |
| BC | Black carbon | - | ✓ supports | n/a | HadCM3 is sulphate-only aerosol scheme; no BC | PCMDI HadCM3.htm; Gordon et al. 2000 | — | |
| OC | Organic carbon | - | ✓ supports | n/a | Not in HadCM3 aerosol scheme | PCMDI HadCM3.htm | — | |
| MD | Mineral dust | - | ✓ supports | n/a | Not in HadCM3 aerosol scheme | PCMDI HadCM3.htm | — | |
| SS | Sea salt | - | ✓ supports | n/a | Not in HadCM3 aerosol scheme | PCMDI HadCM3.htm | — | CEDA record lists only sulphate + GHG + ozone + solar + volcanic |
| LU | Land-use change | - | ✓ supports | n/a | Not documented in 20C3M forcing list | PCMDI HadCM3.htm | — | |
| SO | Solar irradiance | Y | ✓ supports | TV | **Lean, Beer & Bradley 1995** total solar irradiance reconstruction (*GRL* 22, 3195–3198) | CEDA HadCM3-ALL3 record; Stott et al. 2000 | lean_reconstruction_1995 | "changes in total solar irradiance from Lean, J., J. Beer, and R. Bradley (1995), Reconstruction of Solar Irradiance Since 1610... GRL, 22, 3195-3198" — SO=Y correct, unlike CNRM/IPSL/INGV/MPI |
| VL | Volcanic aerosols | Y | ✓ supports | TV | **Sato et al. 1993** stratospheric AOD from explosive volcanic eruptions — Stott 2000 verbatim: *"The simulations include natural forcings due to changes in the amount of stratospheric aerosols following explosive volcanic eruptions (21)"* where ref. 21 = Sato et al. 1993 | Stott et al. 2000 (*Science* doi:10.1126/science.290.5499.2133) | sato_stratospheric_1993; stott_external_2000 | VL=Y confirmed from Stott 2000 direct text — the ALL ensemble described therein is the HadCM3 20C3M CMIP3 submission. Previous adversarial refutation was overcautious. |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | HadCM3 does not apply flux corrections | PCMDI HadCM3.htm | — | |

### Table S1 conflicts found
- **None confirmed.** All 12 forcings supported. VL=Y confirmed from Stott et al. 2000 direct text (previously adversarially refuted — overcautious).

### Open questions
- Post-1970 ozone treatment: PCMDI specifies 1858–1970 reconstruction — what was prescribed for 1970–2000?

## Provenance
- Table S1 row (from Stage 8 args): G Y · O Y · SD Y · SI Y · BC - · OC - · MD - · SS - · LU - · SO Y · VL Y · FC -
- Note: seeded template had VL=- — this was incorrect. Stage 8 args (VL=Y) confirmed correct by Stott et al. 2000 direct text read.
- Sources consulted: PCMDI HadCM3.htm (primary; direct quotes); CEDA HadCM3-ALL3 dataset catalogue; Stott et al. 2000 Science (direct PDF read); Tett et al. 2002 JGR
- Stage 8 adversarial workflow: wf_5be03d40-b24; 29 agent calls; G/O/SD/SI/SO fully confirmed; VL resolved by direct PDF read (post-workflow)
