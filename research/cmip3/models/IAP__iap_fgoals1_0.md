# iap_fgoals1_0 — IAP (Institute of Atmospheric Physics, Chinese Academy of Sciences, China)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** FGOALS-g1.0 (Flexible Global Ocean-Atmosphere-Land System model, gridpoint version) — GAMIL atmosphere + LICOM ocean + CLM land surface + CSIM sea ice, coupled via CPL5. Successor: FGOALS-g2 (CMIP5), FGOALS-g3 (CMIP6).
- **Primary documentation paper(s):** Yu, Y.-Q., et al. (2004). A flexible coupled ocean-atmosphere general circulation model. *Adv. Atmos. Sci.* 21(3), 442–455. doi:10.1007/BF02915723; PCMDI CMIP3 model documentation (primary 20C3M forcing source): https://pcmdi.llnl.gov/ipcc/model_documentation/FGOALS-g1.0.htm *(note: working URL slug is FGOALS-g1.0, not FGOALS1.0_g — the latter 404s)*
- **Forcing-specific reference(s):** PCMDI/LLNL IPCC AR4 forcing FTP repository (ftp://sprite.llnl.gov/pub/covey/IPCC_4AR_Forcing/) — sulphate aerosol dataset source

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ✓ supports | TV | CO2, N2O, CH4, CFC-11, CFC-12 — time-varying historical protocol for 20C3M. PCMDI verbatim (20C3M entry): *"CO2, N2O, CH4, CFC11, CFC12; climatologic mean ozone; sulfate aerosol data from ftp://sprite.llnl.gov/pub/covey/IPCC_4AR_Forcing/"* | PCMDI FGOALS-g1.0.htm §V.C | yu_flexible_2004 | Five GHG species; same 4ARForcing repository as INM-CM3.0 |
| O  | Ozone (tropo + strato) | - | ✓ supports | FX-clim | **Fixed climatological-mean ozone** prescribed. PCMDI verbatim: *"climatologic mean ozone"* in 20C3M forcing list. O=- is correct — ozone is not time-varying. | PCMDI FGOALS-g1.0.htm §V.C | yu_flexible_2004 | Same pattern as CCCma CGCM3.1 (Wang 1995 AMIP II) and INM-CM3.0 |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Sulphate aerosol from **PCMDI/LLNL IPCC AR4 forcing FTP repository** (sprite.llnl.gov); time-varying protocol for 20C3M. Listed as the third component in the 20C3M forcing entry alongside GHGs and ozone. | PCMDI FGOALS-g1.0.htm §V.C | yu_flexible_2004 | Same 4AR forcing repository as INM-CM3.0 sulphate; distinct from Boucher & Pham 2002 (LOA) dataset used by European models |
| SI | Sulphate aerosol — indirect | - | ~ supports | n/a (by absence) | No indirect aerosol effect documented; sulphate direct only implied | PCMDI FGOALS-g1.0.htm | — | Support by absence |
| BC | Black carbon | - | ~ supports | n/a (by absence) | Not listed in 20C3M forcing agents | PCMDI FGOALS-g1.0.htm | — | |
| OC | Organic carbon | - | ~ supports | n/a (by absence) | Not listed | PCMDI FGOALS-g1.0.htm | — | |
| MD | Mineral dust | - | ~ supports | n/a (by absence) | Not listed | PCMDI FGOALS-g1.0.htm | — | |
| SS | Sea salt | - | ~ supports | n/a (by absence) | Not listed | PCMDI FGOALS-g1.0.htm | — | |
| LU | Land-use change | - | ~ supports | n/a (by absence) | Not listed | PCMDI FGOALS-g1.0.htm | — | |
| SO | Solar irradiance | - | ~ supports | ? (likely FX-const) | Not listed in 20C3M forcing entry (GHG + ozone + sulphate only). PI-control entry states *"Solar constant is 1367 W/m²"* (fixed); 20C3M entry does not explicitly confirm. Adversarial claim that "IAP used fixed 1367 W/m² in 20C3M" was **refuted** (evidence was from picntrl, not 20C3M entry). SO=- supported by absence from 20C3M forcing list (medium confidence). | PCMDI FGOALS-g1.0.htm §V.A (picntrl), §V.C (20C3M) | — | Table S1 SO=- likely correct; not confirmed with explicit 20C3M statement |
| VL | Volcanic aerosols | - | ~ supports | n/a (by absence) | Not listed in 20C3M forcing entry; VL=- supported by absence (medium confidence) | PCMDI FGOALS-g1.0.htm §V.C | — | Same pattern as BCCR, CCCma |
| FC | Flux corrections (F/H) | - | ~ supports | n/a (by absence) | Not documented in PCMDI page | PCMDI FGOALS-g1.0.htm | — | Support by absence |

### Table S1 conflicts found
- **None confirmed.** All Table S1 codes consistent with primary documentation. SO=- and VL=- are probable (not yet confirmed with explicit 20C3M quotes as for BCCR).

### Open questions
1. **SO=- and VL=- explicit confirmation**: Does the FGOALS-g1.0 20C3M documentation explicitly state fixed solar and no volcanic variability (as BCCR and CNRM do)? Only silence from the 20C3M forcing list found so far.
2. **SD temporal treatment**: Is the 4AR forcing sulphate dataset explicitly time-varying? Inferred from 20C3M protocol but not stated verbatim.
3. **Yu et al. 2004 as primary source**: Needs PDF access to confirm whether it discusses 20C3M forcing treatments.

## Provenance
- Table S1 row: G Y · O - · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO - · VL - · FC -
- Sources consulted: PCMDI FGOALS-g1.0.htm (primary — GHG/O/SD verbatim from 20C3M entry; URL uses FGOALS-g1.0 slug not FGOALS1.0_g); Yu et al. 2004 *Adv. Atmos. Sci.* doi:10.1007/BF02915723 (model description)
- Stage 10 adversarial workflow: wf_736d8594-819; key 20C3M forcing list verbatim from PCMDI.
- Key quote (PCMDI §V.C 20C3M): *"CO2, N2O, CH4, CFC11, CFC12; climatologic mean ozone; sulfate aerosol data from ftp://sprite.llnl.gov/pub/covey/IPCC_4AR_Forcing/"*
- Key quote (PCMDI §V.A picntrl): *"No non-antropogenic aerosols included. Solar constant is 1367 W/M*M."* [sic — PCMDI typo "antropogenic"]
