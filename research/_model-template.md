<!-- PER-MODEL TEMPLATE. Copy to research/models/<center>__<model_id>.md and fill.
     Goal: capture not just WHETHER a forcing was applied (Table S1 gives that for CMIP3),
     but WHICH dataset/source was used to implement it, with a citation + bib key (241114a.bib).
     Use "?" for unknown, "n/a" for not applicable. Cite bib keys like [delworth_gfdl_2006]. -->

# {MODEL_ID} — {Modeling Center, Country}

- **CMIP phase:** CMIP3 (20C3M)  <!-- one file per model; note lineage below -->
- **Model family / lineage:** {e.g. GFDL CM2.0 → CM2.1 → CM3 → CM4; ESM2M/2G → ESM4}
- **Atmosphere / ocean components:** {}
- **Primary documentation paper(s):** {Author et al., year — DOI} [bib_key]
- **Forcing-specific reference(s):** {}

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = the claim from Durack & Wijffels (2012) Table S1 (Y / - / blank).
`Verdict` = literature check: **✓ supports** · **✗ conflicts** · **~ unclear/unstated** · **＋ confirmed + adds detail**.
`Temporal` = how the field varied through the 20C3M run: **TV** = time-varying (interannual) · **FX-clim** = fixed climatology (seasonal cycle, no interannual change) · **FX-const** = fixed constant · **n/a** = not applied · **?** = unknown.
The Dataset column must say WHAT the field is — the time-varying dataset *or* the fixed field/value, whichever applies.
**For any fixed field, record the fixed value WITH UNITS** as a bolded key (e.g. **1367 W m⁻²** solar constant; **284 ppm** pre-industrial CO₂). If the fixed field is spatial (no single scalar — e.g. a dust optical-depth climatology), state that and give the field's units + reference year (e.g. "fixed 1990 spatial AOD climatology, dimensionless").
A verdict must be backed by a primary source (the model's own documentation), not another compilation.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (time-varying series or fixed field) | Citation | bib key | Notes / evidence |
|-----|---------|----------|---------|----------|-------------------------------------------------------|----------|---------|------------------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | | | | | | | |
| O  | Ozone (tropo + strato) | | | | | | | |
| SD | Sulphate aerosol — direct | | | | | | | |
| SI | Sulphate aerosol — indirect | | | | | | | |
| BC | Black carbon | | | | | | | |
| OC | Organic carbon | | | | | | | |
| MD | Mineral dust | | | | | | | |
| SS | Sea salt | | | | | | | |
| LU | Land-use change | | | | | | | |
| SO | Solar irradiance | | | | | | | |
| VL | Volcanic aerosols | | | | | | | |
| FC | Flux corrections (F/H) | | | | | | | |

### Table S1 conflicts found
- {List any cell where the literature conflicts with Table S1's Y/-, with the supporting quote/citation.}

## Notes, uncertainties, and open questions
- {Where the source is ambiguous, conflicting between papers, or unstated.}

## Provenance
- Table S1 (Durack & Wijffels 2012) inclusion row: {paste Y/- row}
- Sources consulted this stage: {DOIs / URLs}
