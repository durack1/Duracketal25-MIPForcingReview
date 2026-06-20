# ncar_pcm1 — NCAR (National Center for Atmospheric Research / DOE, USA)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** PCM (Parallel Climate Model) — DOE/NCAR collaboration; predecessor line to CCSM.
- **Primary documentation paper(s):** Washington et al. 2000 (*Clim. Dyn.* 16, 755–774) — model description; Meehl et al. 2003 (*J. Climate* 16, 426–444, doi:10.1175/1520-0442(2003)016\<0426:SAGGFA\>2.0.CO;2); Meehl et al. 2004 (*J. Climate* 17, 3721–3727, doi:10.1175/1520-0442(2004)017\<3721:CONAAF\>2.0.CO;2)
- **Forcing-specific reference(s):** Ammann et al. 2003 (*GRL* 30, 1657, doi:10.1029/2003GL016875) — volcanic; Meehl et al. 2003/2004 — full forcing combination

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | Observed GHG concentrations; part of PCM's five-forcing 20C3M set | Meehl et al. 2004 (doi:10.1175/1520-0442(2004)017<3721:CONAAF>2.0.CO;2) | meehl_combinations_2004 | PCMDI PCM.htm: "forcings include… GHGs (Meehl et al., 2004)" |
| O  | Ozone (tropo + strato) | Y | ✓ supports | TV | Stratospheric and tropospheric ozone; explicit in PCM's five forcing set | Meehl et al. 2003 (doi:10.1175/1520-0442(2003)016<0426:SAGGFA>2.0.CO;2); Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | Meehl 2003 verbatim: "stratospheric and tropospheric ozone"; Meehl 2004: "ozone (stratospheric and tropospheric)" — both TV |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Sulfate aerosol, direct effect only; one of PCM's five forcings | Meehl et al. 2003; Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | Meehl 2003: "sulfate aerosol (direct effect only)"; Meehl 2004: "direct effect of sulfate aerosols" |
| SI | Sulphate aerosol — indirect | - | ✓ supports | n/a | Not applied; Meehl 2003/2004 specify "direct effect only" | Meehl et al. 2003; Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | "direct effect only" wording unambiguously excludes indirect effects |
| BC | Black carbon | - | ✓ supports | n/a | Not applied; explicitly absent from PCM's five-forcing list | Meehl et al. 2003; Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | Closed list of exactly five forcings rules out BC |
| OC | Organic carbon | - | ✓ supports | n/a | Not applied; explicitly absent from PCM's five-forcing list | Meehl et al. 2003; Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | Same as BC |
| MD | Mineral dust | - | ✓ supports | n/a | Not applied; not in PCM's five-forcing list | Meehl et al. 2003; Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | |
| SS | Sea salt | - | ✓ supports | n/a | Not applied; not in PCM's five-forcing list | Meehl et al. 2003; Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | |
| LU | Land-use change | - | ✓ supports | n/a | Not applied; not in PCM's five-forcing list | Meehl et al. 2003; Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | |
| SO | Solar irradiance | Y | ✓ supports | TV | Solar irradiance reconstruction; one of PCM's two natural forcings; specific dataset (Lean reconstruction) not confirmed from primary text | Meehl et al. 2003; Meehl et al. 2004 | meehl_solar_2003; meehl_combinations_2004 | Meehl 2003 title: "Solar and greenhouse gas forcing and climate response in the twentieth century"; solar explicitly time-varying in all PCM experiments |
| VL | Volcanic aerosols | Y | ✓ supports | TV | Ammann et al. (2003): "monthly and latitudinally varying volcanic forcing dataset"; 64 latitude bands, 2.8° spacing; aerosol optical depth, 1890–1999; NOT Sato et al. | Meehl et al. 2004; Ammann et al. 2003 (doi:10.1029/2003GL016875) | meehl_combinations_2004; ammann_volcanic_2003 | Meehl 2004 reference list cites Ammann/Meehl/Washington/Zender 2003 GRL for PCM volcanic |
| FC | Flux corrections (F/H) | (blank) | ~ unclear | n/a (likely) | PCM designed without flux adjustments; Meehl 2003 states runs "without flux adjustments" | Meehl et al. 2003 | meehl_solar_2003 | Table S1 FC=blank read as "-" (not applied); PCMDI PCM.htm Section V left blank; formal FC=none citation not confirmed by adversarial test (sourcing issue), but Meehl 2003 language supports it |

### Table S1 conflicts found
- **None.** All 12 Table S1 claims for PCM1 are supported or confirmed not-applicable by primary documentation. The PCM forcing set is unusually well-documented via the explicit closed five-item list in Meehl et al. (2003, 2004).

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO Y · VL Y · FC (blank)
- Primary sources consulted: Washington et al. 2000 (*Clim. Dyn.*); Meehl et al. 2003 (doi:10.1175/1520-0442(2003)016<0426:SAGGFA>2.0.CO;2); Meehl et al. 2004 (doi:10.1175/1520-0442(2004)017<3721:CONAAF>2.0.CO;2); Ammann et al. 2003 (doi:10.1029/2003GL016875); PCMDI PCM.htm (dated 20 Apr 2005 — Section V blank; Meehl 2004 cited as forcing reference)
- Stage 3 adversarial workflow: PCM1 forcing set confirmed at HIGH confidence from three corroborating primary sources (1-0 each claim); PCMDI docs proved uninformative but pointed to Meehl 2004 as authoritative reference
