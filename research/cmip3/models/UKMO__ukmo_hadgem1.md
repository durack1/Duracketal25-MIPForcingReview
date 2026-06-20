# ukmo_hadgem1 — UKMO (UK Met Office Hadley Centre)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** HadGEM1 → HadGEM2-ES/CC (CMIP5) → HadGEM3-GC3.1/UKESM1 (CMIP6)
- **Primary documentation paper(s):** Johns et al. 2006 (*J. Climate* 19(7), doi:10.1175/JCLI3636.1); Martin et al. 2006 (*J. Climate* 19(7), doi:10.1175/JCLI3551.1); Stott et al. 2006 (*J. Climate* 19(12), doi:10.1175/JCLI3731.1)
- **Forcing-specific reference(s):** T. Nozawa (NIES, Japan) — BC and biomass-burning smoke; Smith/PNNL — anthropogenic SO2; Solanki & Krivova 2003 — solar (Run 2); Sato et al. 1993 updated (GISS) — volcanic (Run 2); Goldewijk 2001 — land use (Run 1); PCMDI: https://pcmdi.llnl.gov/ipcc/model_documentation/HadGEM1.htm
- **Run design:** Run 1 = anthropogenic forcings only; Run 2 = Run 1 + natural forcings (solar + volcanic)

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | Anthropogenic GHGs (Run 1 + Run 2); standard CMIP3 specification | PCMDI HadGEM1.htm | — | Part of Run 1 anthropogenic forcing set |
| O  | Ozone (tropo + strato) | Y | ✓ supports | TV | Included in Run 1 anthropogenic forcing; ozone treatment consistent with HadGEM1 design | PCMDI HadGEM1.htm | — | Specific ozone dataset not named on PCMDI page; TV assumed from context |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Anthropogenic SO2 emissions (Smith, PNNL, USA); CLASSIC aerosol scheme (sulphate: Aitken, accumulation, dissolved modes); direct radiative effect | PCMDI HadGEM1.htm; Martin et al. 2006 (*J. Climate* doi:10.1175/JCLI3551.1) | martin_physical_2006 | "sulphate (Aitken, accumulation and dissolved modes) with wet and dry removal processes" — all aerosol species have direct and semi-direct radiative effects |
| SI | Sulphate aerosol — indirect | Y | ✓ supports | TV | CLASSIC scheme — **all aerosol species except BC** contribute to **first AND second indirect effects** (cloud albedo + precipitation efficiency); more complete than HadCM3's delta-albedo method | Martin et al. 2006; PCMDI HadGEM1.htm | martin_physical_2006 | "All aerosols species but black carbon contribute to the first and second indirect effects on clouds (modifying cloud albedo and precipitation efficiency, respectively)" — SI=Y supported; 2nd indirect also present |
| BC | Black carbon | Y | ✓ supports | TV | Fossil fuel black carbon from **T. Nozawa (NIES, Japan)** pers. comm.; time-varying emissions | PCMDI HadGEM1.htm (Run 1) | — | "Fossil fuel black carbon and biomass smoke: provided by T. Nozawa, National Institute for Environmental Studies, Japan (pers. comm.)" — unlike MPI, BC=Y confirmed from primary source |
| OC | Organic carbon | Y | ✓ ~ supports | TV | Biomass-burning smoke from **T. Nozawa (NIES, Japan)**; maps to OC category | PCMDI HadGEM1.htm (Run 1) | — | "biomass smoke" is the specific Nozawa dataset; maps to OC code with medium confidence — terminology differs but physics corresponds |
| MD | Mineral dust | Y | ✗ CONFLICT | n/a | **Mineral dust entirely absent from HadGEM1 CLASSIC aerosol scheme**. Martin et al. 2006 closed-list: "sulphate... sea salt, black carbon and biomass-burning aerosol schemes" — four species, no dust. Interactive dust was added only in the later HadGEM2/HiGEM era. | Martin et al. 2006; PCMDI HadGEM1.htm | martin_physical_2006 | **Table S1 MD=Y is WRONG** — mineral dust was never implemented in HadGEM1. Note: seeded template had MD=-, which was correct. |
| SS | Sea salt | Y | ✓ ~ supports | ? (TV inferred) | Sea salt in CLASSIC scheme (Roberts & Jones 2004; Woodage et al. 2003); DMS noted as "time independent" but sea salt temporal treatment not explicitly stated — interactive emission scheme implies TV | Martin et al. 2006; PCMDI HadGEM1.htm | — | SS=Y plausible; exact temporal treatment (TV vs FX-clim) for 20C3M not confirmed from primary documentation |
| LU | Land-use change | - | ~ questionable | TV (if applied) | **PCMDI Run 1 lists "Land use changes following Goldewijk (2001)"** — Goldewijk HYDE dataset. Table S1 LU=- may be wrong; medium confidence. | PCMDI HadGEM1.htm (Run 1) | goldewijk_2001 | Table S1 LU=- conflicts with documented Goldewijk 2001 land use in Run 1 — possibly a Table S1 error, or a definitional difference (land-cover change vs agricultural forcing). Note: seeded template had LU=Y (possibly correct). |
| SO | Solar irradiance | Y | ✓ supports | TV | **Solanki & Krivova 2003** total solar irradiance reconstruction; Run 2 only (Run 1 = no natural forcings) | PCMDI HadGEM1.htm (Run 2); Stott et al. 2006 | solanki_2003 | "Solar variations following Solanki and Krivova (2003)" — NOTE: different solar reconstruction from HadCM3 (Lean 1995); the two UKMO CMIP3 models use different solar datasets |
| VL | Volcanic aerosols | Y | ✓ supports | TV | **Updated Sato et al. 1993** stratospheric AOD (GISS strataer database); Run 2 only | PCMDI HadGEM1.htm (Run 2) | sato_stratospheric_1993 | "SO2 emissions by volcanoes (following a recently updated version of Sato et al. 1993, from http://www.giss.nasa.gov/data/strataer/)" — VL=Y confirmed for HadGEM1 |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | HadGEM1 does not apply flux corrections | PCMDI HadGEM1.htm | — | |

### Table S1 conflicts found
- **MD=Y → ✗ CONFLICT**: Mineral dust absent from HadGEM1 CLASSIC aerosol scheme; added only in HadGEM2/HiGEM. Table S1 MD=Y is wrong.
- **LU=- → ~ questionable**: PCMDI Run 1 documents "Land use changes following Goldewijk (2001)"; Table S1 LU=- may be an error. Medium confidence — definitional ambiguity possible.

### Open questions
- Sea salt (SS=Y): confirm temporal treatment is time-varying rather than fixed-climatological in the 20C3M runs.
- LU=- vs Goldewijk 2001: clarify whether Durack & Wijffels (2012) treated land-cover change as LU forcing — if so, Table S1 LU=- is a further error.
- OC=Y: confirm biomass-burning smoke counts as OC in the Table S1 taxonomy.

## Provenance
- Table S1 row (from Stage 8 args): G Y · O Y · SD Y · SI Y · BC Y · OC Y · MD Y · SS Y · LU - · SO Y · VL Y · FC -
- Note: seeded template had MD=-, SS=-, LU=Y — MD=- and LU=Y appear to be the correct primary-doc values; Stage 8 args had MD=Y and LU=- (likely Table S1 errors).
- Sources consulted: PCMDI HadGEM1.htm (primary; direct quotes); Martin et al. 2006 J. Climate; Johns et al. 2006 J. Climate; Stott et al. 2006 J. Climate; CEDA HadGEM1 dataset catalogue
- Stage 8 adversarial workflow: wf_5be03d40-b24; 29 agent calls; MD=Y conflict HIGH confidence; LU=- conflict MEDIUM confidence
