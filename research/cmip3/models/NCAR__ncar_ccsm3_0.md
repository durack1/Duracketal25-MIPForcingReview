# ncar_ccsm3_0 — NCAR (National Center for Atmospheric Research, USA)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** CCSM3 → CCSM4 (CMIP5) → CESM1 → CESM2 (CMIP6).
- **Primary documentation paper(s):** Collins et al. 2006 (*J. Climate* 19, 2122–2143, doi:10.1175/JCLI3761.1); Meehl et al. 2006 (CCSM3 20th-century/sensitivity, *J. Climate* 19, 2597–2616)
- **Forcing-specific reference(s):** Ammann et al. 2003 (*GRL* 30, 1657, doi:10.1029/2003GL016875) — volcanic; aerosol dataset TBC (BC/OC/SD temporal treatment unresolved — see Notes)

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ~ unclear | ? | Observed GHG concentrations (dataset unspecified; PCMDI doc "Still working on this") | Collins et al. 2006 | collins_community_2006 | PCMDI CCSM3.htm uninformative; inclusion implied by 20C3M design; TV assumed but not confirmed from primary text |
| O  | Ozone (tropo + strato) | Y | ~ unclear | ? | Ozone forcing applied; temporal treatment (TV vs FX-clim) unconfirmed from primary text | Collins et al. 2006 | collins_community_2006 | PCMDI doc silent; primary text needed |
| SD | Sulphate aerosol — direct | Y | ~ unclear | ? | Sulfate direct effect included in CAM3/CCSM3 aerosol scheme; TV vs FX-clim unresolved (FX-clim claim adversarially REFUTED — see Notes) | Collins et al. 2006 | collins_community_2006 | Adversarial test refuted the claim that aerosols are a fixed prescribed field — consistent with TV, but no positive TV citation confirmed |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | Not applied. "Indirect effects of aerosols on cloud albedo and cloud lifetime are not incorporated in CAM3" | Collins et al. 2006 (verbatim) | collins_community_2006 | Semi-direct effect (absorbing-aerosol heating) IS present |
| BC | Black carbon | Y | ~ unclear | ? | Black carbon included in CAM3/CCSM3 five aerosol species; TV vs FX-clim unresolved (FX-clim claim adversarially REFUTED) | Collins et al. 2006 | collins_community_2006 | If TV → ✓; if FX-clim → ✗ conflict with Table S1 Y. Resolution requires direct read of Collins 2006 or Lamarque et al. aerosol methods |
| OC | Organic carbon | Y | ~ unclear | ? | Organic carbon included alongside BC in CCSM3 aerosol species; same temporal ambiguity | Collins et al. 2006 | collins_community_2006 | Same open question as BC |
| MD | Mineral dust | - | ✓ supports | FX-clim (?) | Soil dust included in CCSM3/CAM3 as prescribed climatological field (not time-varying); Table S1 "-" consistent with FX-clim pattern (cf. GFDL) | Collins et al. 2006 | collins_community_2006 | FX-clim interpretation consistent with GFDL precedent and Table S1 "-"; adversarial test refuted FX-clim for other aerosols but left dust unresolved |
| SS | Sea salt | - | ✓ supports | FX-clim (?) | Sea salt included in CCSM3/CAM3 as prescribed climatological field; Table S1 "-" consistent with FX-clim | Collins et al. 2006 | collins_community_2006 | Same as MD; FX-clim presumed pending primary confirmation |
| LU | Land-use change | - | ~ unclear | ? | Not mentioned among CCSM3 forcings; Table S1 "-" likely correct but not explicitly confirmed | Collins et al. 2006 | collins_community_2006 | |
| SO | Solar irradiance | Y | ~ unclear | ? | Solar irradiance forcing applied; specific reconstruction (Lean? year?) not confirmed from primary text; TV presumed | Collins et al. 2006; Meehl et al. 2006 | collins_community_2006 | CAM3 namelist default is fixed 1367 W m⁻², but 20C3M runs activate RAMPED solar (SCENARIO_SCON flag); specific dataset TBC |
| VL | Volcanic aerosols | Y | ✓ supports | TV | Ammann et al. (2003): "monthly and latitudinally varying volcanic forcing dataset"; 64 latitude bands, 2.8° spacing; aerosol optical depth, 1890–1999; NOT Sato et al. | Collins et al. 2006; Ammann et al. 2003 (doi:10.1029/2003GL016875) | collins_community_2006; ammann_volcanic_2003 | Collins 2006 verbatim: "The corresponding effects of stratospheric volcanic aerosols are parameterized following Ammann et al. (2003)." |
| FC | Flux corrections (F/H) | (blank) | ✓ supports | n/a | No flux correction applied. CCSM3 does not use flux adjustments. | Collins et al. 2006 | collins_community_2006 | Table S1 FC=blank interpreted as "-" (not applied); Collins 2006 documents non-flux-corrected design |

### Table S1 conflicts found
- **None confirmed.** The primary adversarial concern — whether CCSM3 BC/OC/SD are FX-clim (fixed prescribed climatology) rather than TV, which would make BC=Y and OC=Y ✗ conflicts — was tested but the FX-clim claim was **adversarially REFUTED** (0-1 vote). This does not confirm TV, but removes the grounds for flagging a conflict at this stage. Resolution requires direct reading of Collins et al. 2006 aerosol methods section or Lamarque et al. forcing paper.

### Open questions (Stage 3 residual)
1. **CCSM3 aerosol temporal treatment**: Are BC, OC, and SD time-varying emissions-driven fields or fixed prescribed climatologies? This is the key unresolved question — if FX-clim, BC=Y and OC=Y become ✗ conflicts.
2. **Solar reconstruction**: Which Lean reconstruction year/version used in CCSM3 20C3M?
3. **Ozone dataset**: What is the temporal treatment and source for ozone forcing in CCSM3?

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI - · BC Y · OC Y · MD - · SS - · LU - · SO Y · VL Y · FC (blank)
- Primary sources consulted: Collins et al. 2006 (doi:10.1175/JCLI3761.1); Ammann et al. 2003 (doi:10.1029/2003GL016875); PCMDI CCSM3.htm (dated 31 Jan 2005 — uninformative: "Still working on this..." for forcing specs); NCAR/UCAR CESM forum (confirms Ammann 2003 volcanic)
- Stage 3 adversarial workflow: 10/14 claims confirmed (1-0); 4 killed (0-1); PCMDI docs proved uninformative for both NCAR models
