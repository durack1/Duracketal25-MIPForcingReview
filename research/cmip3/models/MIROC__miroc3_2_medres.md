# miroc3_2_medres — CCSR/NIES/FRCGC (Center for Climate System Research / National Institute for Environmental Studies / Frontier Research Center for Global Change, Japan)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** MIROC3.2 (medium-res) — CCSR/NIES AGCM5.7 atmosphere at T42L20 + COCO ocean at ~1.4°; companion to MIROC3.2(hires) at T106L56. Aerosol handled by SPRINTARS interactive transport scheme.
- **Primary documentation paper(s):** K-1 Model Developers (Hasumi, H. and Emori, S., eds.) (2004). *K-1 Coupled Model (MIROC) Description.* K-1 Technical Report 1, CCSR/NIES/FRCGC, 34 pp. (URL: https://cger.nies.go.jp/publications/report/i073/I073e.html); PCMDI CMIP3 model documentation (https://pcmdi.llnl.gov/ipcc/model_documentation/MIROC3.2_medres.htm) — primary 20C3M forcing specification verbatim.
- **Forcing-specific reference(s):** Takemura et al. 2000 (SPRINTARS aerosol scheme)
- **Note:** MIROC3.2(medres) and MIROC3.2(hires) share an **identical forcing treatment** for 20C3M — same primary documentation, same three-category forcing list, same SPRINTARS aerosol scheme. The PCMDI pages for both models contain verbatim-identical forcing descriptions. All verdicts below apply equally to hires. See `MIROC__miroc3_2_hires.md` for full provenance details.

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ✓ supports | TV | CO2, CH4, N2O, and 13 halocarbons; category (a) prescribed agent "changed according to historical data" over 1900–2000 | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires |
| O  | Ozone (tropo + strato) | Y | ✓ supports | TV | Tropospheric and stratospheric ozone; category (a) agent "changed according to historical data" | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Sulfate from fossil fuel combustion — category (b) prescribed emissions, SPRINTARS | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires |
| SI | Sulphate aerosol — indirect | Y | ✓ supports | TV | Indirect effect via SPRINTARS interactive aerosol-cloud coupling | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires |
| BC | Black carbon | Y | ✓ supports | TV | BC from fossil fuel, ag waste, fuelwood, forest fires — category (b) prescribed emissions | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires |
| OC | Organic carbon | Y | ✓ supports | TV | OC from same source categories as BC — category (b) prescribed emissions | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires |
| MD | Mineral dust | Y | ~ nuance | TV (diagnosed) | Soil dust diagnosed from modeled conditions (SPRINTARS category (c)) — NOT prescribed from external dataset | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires — time-varying but internally generated |
| SS | Sea salt | Y | ~ nuance | TV (diagnosed) | Sea salt diagnosed from modeled conditions — category (c), same as soil dust | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires |
| LU | Land-use change | Y | ✓ supports | TV | Land use — category (a) prescribed agent "changed according to historical data" | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | Identical to hires |
| SO | Solar irradiance | Y | ✓ supports | TV | Solar variability — category (a) prescribed agent "changed according to historical data" | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | SO=Y confirmed; specific dataset not named |
| VL | Volcanic aerosols | Y | ✓ supports | TV | Volcanic aerosols — category (a) prescribed agent "changed according to historical data" | PCMDI MIROC3.2_medres.htm §V.C | hasumi_emori_2004 | VL=Y confirmed; specific dataset not named |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | Not documented; FC=- consistent with PCMDI | PCMDI MIROC3.2_medres.htm | hasumi_emori_2004 | Identical to hires |

### Table S1 conflicts found
- **MD=Y and SS=Y — methodological nuance (not a hard conflict):** Mineral dust and sea salt are present as time-varying fields but diagnosed interactively by SPRINTARS, not prescribed from external datasets. Same nuance as hires. Recorded as ~ nuance.
- **No other confirmed conflicts.**

### Open questions
- Same open questions as hires (solar/volcanic datasets, SPRINTARS indirect aerosol details, land-use dataset). See `MIROC__miroc3_2_hires.md`.

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI Y · BC Y · OC Y · MD Y · SS Y · LU Y · SO Y · VL Y · FC -
- Sources consulted: PCMDI MIROC3.2_medres.htm (primary — identical forcing description to hires); K-1 Tech Report No. 1 (Hasumi & Emori 2004)
- Stage 9 adversarial workflow: wf_401d7787-4bc; PCMDI medres and hires pages returned verbatim-identical forcing descriptions — all hires verdicts transferred directly.
