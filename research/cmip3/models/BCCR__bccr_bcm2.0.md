# bccr_bcm2.0 — BCCR (Bjerknes Centre for Climate Research, Bergen, Norway)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** BCM2.0 (Bergen Climate Model version 2) — ARPEGE-Climat atmosphere (shared lineage with CNRM-CM3) + MICOM ocean (Miami Isopycnic Coordinate Ocean Model), coupled via OASIS. Predecessor BCM was used in coordinated ARPEGE/MICOM climate studies from late 1990s. No direct CMIP5/6 successor under BCCR name (Norway later contributed via NorESM).
- **Primary documentation paper(s):** Furevik, T., Bentsen, M., Drange, H., Kindem, I.K.T., Kvamstø, N.G., and Sorteberg, A. (2003). Description and evaluation of the Bergen climate model: ARPEGE coupled with MICOM. *Clim. Dyn.* 21(1–2), 27–51. doi:10.1007/s00382-003-0317-5. **Note: this paper describes a 300-yr CONTROL integration (fixed forcing), not the 20C3M transient — 20C3M forcing specifics must come from the PCMDI page.** PCMDI model documentation (primary 20C3M forcing source): https://pcmdi.llnl.gov/ipcc/model_documentation/BCCR_BCM2.0.htm *(note: URL uses underscore BCCR_BCM2.0, not hyphen)*
- **Forcing-specific reference(s):** ENSEMBLES project GHG concentrations (observational; same protocol as CNRM, INGV, MIUB)

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ✓ supports | TV | ENSEMBLES project annual global concentrations, observation-based; run 1850–2000. PCMDI verbatim: *"The greenhouse gases annual global concentrations were specified based on observations as specified in the ENSEMBLES project webpage."* | PCMDI BCCR_BCM2.0.htm §V.C | furevik_description_2003 | Same ENSEMBLES protocol as CNRM-CM3 and INGV-SXG |
| O  | Ozone (tropo + strato) | - | ~ supports | n/a (by absence) | Not listed among 20C3M forcing agents; O=- supported by absence | PCMDI BCCR_BCM2.0.htm (forcing list) | — | Support by absence; medium confidence |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | **Boucher & Pham (2002) confirmed** — PCMDI PDF §II.C verbatim: *"Sulfate aerosols are specified in all experiments according to Boucher and Pham (2002) data... only the direct effect of anthropogenic sulfate aerosols was taken into account."* Urban aerosols (mapped to BC/OC) also vary 1850–2000: *"Urban aerosols vary according to estimates between 1850 and 2000."* The prior adversarial refutation of Boucher & Pham was WRONG — the PCMDI HTML page was uninformative; the PDF §II.C names the dataset explicitly. | PCMDI BCCR_BCM2.0.pdf §II.C (verbatim) | furevik_description_2003 | SD dataset: Boucher & Pham (2002), time-varying 1850–2000 sulfate burden; same dataset as GISS-AOM |
| SI | Sulphate aerosol — indirect | - | ~ supports | n/a (by absence) | No indirect aerosol effect documented; not listed in forcing agents | PCMDI BCCR_BCM2.0.htm | — | Support by absence |
| BC | Black carbon | - | ~ supports | n/a (by absence) | Not listed | PCMDI BCCR_BCM2.0.htm | — | |
| OC | Organic carbon | - | ~ supports | n/a (by absence) | Not listed | PCMDI BCCR_BCM2.0.htm | — | |
| MD | Mineral dust | - | ~ supports | n/a (by absence) | Not listed | PCMDI BCCR_BCM2.0.htm | — | |
| SS | Sea salt | - | ~ supports | n/a (by absence) | Not listed | PCMDI BCCR_BCM2.0.htm | — | |
| LU | Land-use change | - | ~ supports | n/a (by absence) | Not listed | PCMDI BCCR_BCM2.0.htm | — | |
| SO | Solar irradiance | - | ✓ supports | FX-const (1368 W m⁻²) | **Solar forcing held constant at 1368 W m⁻² with no variability.** PCMDI verbatim: *"Solar forcing was set at 1368 W/m2 and no solar or volcanic variability were included."* SO=- is confirmed — no time-varying solar. | PCMDI BCCR_BCM2.0.htm §V.C | — | Same pattern as CNRM (1370 W/m²) and IPSL (1365 W/m²) — fixed solar constant, no TSI variability |
| VL | Volcanic aerosols | - | ✓ supports | n/a | **No volcanic aerosol variability included.** Same PCMDI verbatim quote as SO above: *"no solar or volcanic variability were included."* VL=- confirmed. | PCMDI BCCR_BCM2.0.htm §V.C | — | Joins CNRM, IPSL, INGV, and CCCma as models with confirmed volcanic omission |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a (as forcing) | Flux adjustment applied to **heat and freshwater** fluxes as a coupled-model **stabilization** technique (anti-drift), not as a transient anthropogenic forcing. Furevik 2003: *"A flux adjustment technique has been applied to the heat and fresh-water fluxes"*; residual drift ~0.1°C and ~0.02 psu/century; momentum not adjusted. Under Table S1's convention (FC = time-varying forcing correction), FC=- is consistent. | Furevik et al. 2003 §model description | furevik_description_2003 | Note: flux adjustment present in the model for stability but correctly not encoded as a 20C3M forcing |

### Table S1 conflicts found
- **None confirmed.** SO=- and VL=- are correct (genuine omissions confirmed by PCMDI verbatim quote). SD=Y confirmed with Boucher & Pham (2002) dataset.

### Open questions
1. **Urban aerosols / BC-OC mapping**: PCMDI PDF §II.C notes *"Urban aerosols vary according to estimates between 1850 and 2000."* This implies a BC/OC-like forcing was applied. Whether these were accounted for in the 20C3M characterisation as part of SD (sulphate), a separate BC/OC term, or simply unrecognised is unclear. Low priority.
2. **O, BC, OC, MD, SS, LU**: All supported by absence; no explicit exclusion statements found.

## Provenance
- Table S1 row: G Y · O - · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO - · VL - · FC -
- Sources consulted: PCMDI BCCR_BCM2.0.htm (primary — GHG ENSEMBLES + solar/volcanic confirmed verbatim; URL uses underscore); PCMDI BCCR_BCM2.0.pdf (SD dataset confirmed: Boucher & Pham 2002 named verbatim in §II.C; urban aerosols noted in §II.C; 20C3M solar/volcanic in §V.C); Furevik et al. 2003 *Clim. Dyn.* doi:10.1007/s00382-003-0317-5 (control run — flux adjustment confirmed)
- Stage 10 adversarial workflow: wf_736d8594-819; 10 claims confirmed, 4 killed. SO=VL=- confirmed high confidence. Prior Boucher & Pham 2002 refutation OVERTURNED by PCMDI PDF §II.C verbatim.
- Key quote (PCMDI §V.C): *"Solar forcing was set at 1368 W/m2 and no solar or volcanic variability were included."*
- Key quote (PCMDI §II.C): *"Sulfate aerosols are specified in all experiments according to Boucher and Pham (2002) data... only the direct effect of anthropogenic sulfate aerosols was taken into account."*
