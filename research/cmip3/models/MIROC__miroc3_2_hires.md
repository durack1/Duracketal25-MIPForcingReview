# miroc3_2_hires — CCSR/NIES/FRCGC (Center for Climate System Research / National Institute for Environmental Studies / Frontier Research Center for Global Change, Japan)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** MIROC3.2 (hi-res) — CCSR/NIES AGCM5.7 atmosphere at T106L56 + COCO ocean at ~0.28°; companion to MIROC3.2(medres) at T42L20. Successor lineage: MIROC4 (CMIP5), MIROC6 (CMIP6). Aerosol handled by SPRINTARS interactive transport scheme (Takemura et al.).
- **Primary documentation paper(s):** K-1 Model Developers (Hasumi, H. and Emori, S., eds.) (2004). *K-1 Coupled Model (MIROC) Description.* K-1 Technical Report 1, CCSR/NIES/FRCGC, 34 pp. (URL: https://cger.nies.go.jp/publications/report/i073/I073e.html); PCMDI CMIP3 model documentation (https://pcmdi.llnl.gov/ipcc/model_documentation/MIROC3.2_hires.htm) — primary 20C3M forcing specification verbatim.
- **Forcing-specific reference(s):** Takemura et al. 2000 (SPRINTARS aerosol scheme); PCMDI MIROC3.2_hires.htm (three-category forcing list — primary 20C3M specification)
- **Note:** MIROC3.2(hires) and MIROC3.2(medres) share an **identical forcing treatment** for 20C3M; all verdicts in this file apply equally to medres. The only difference between the two configurations is resolution. Spin-up held all agents at 1900 values; 20C3M integration is 101-yr 1900–2000.

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | Y | ✓ supports | TV | CO2, CH4, N2O, and 13 halocarbons; category (a) prescribed agent "changed according to historical data" over 1900–2000 | PCMDI MIROC3.2_hires.htm §V.C (20C3M) | hasumi_emori_2004 | Spin-up held at 1900 values; transient from start of 20C3M run |
| O  | Ozone (tropo + strato) | Y | ✓ supports | TV | Tropospheric and stratospheric ozone prescribed; category (a) agent "changed according to historical data" | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | Listed alongside GHGs and solar/volcanic as time-varying prescribed agents |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Sulfate aerosol from fossil fuel combustion — emissions prescribed as category (b), processed interactively by SPRINTARS | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | SPRINTARS handles direct (and indirect) effects interactively from prescribed emissions |
| SI | Sulphate aerosol — indirect | Y | ✓ supports | TV | Indirect effect included via SPRINTARS interactive aerosol-cloud coupling; not a separately prescribed forcing but a consequence of interactive sulfate treatment | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | SPRINTARS computes aerosol-cloud effects interactively; both first and second indirect documented |
| BC | Black carbon | Y | ✓ supports | TV | Black carbon emissions from fossil fuel combustion, agricultural waste burning, fuelwood consumption, and forest fires — category (b) prescribed emissions "changed according to historical data" | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | Explicitly listed in PCMDI category (b); distinct from MPI error where BC was not in the 20C3M forcing list |
| OC | Organic carbon | Y | ✓ supports | TV | Organic carbon from same source categories as BC (fossil fuel, ag waste, fuelwood, forest fires) — category (b) prescribed emissions | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | Explicitly listed alongside BC |
| MD | Mineral dust | Y | ~ nuance | TV (diagnosed) | Soil dust **diagnosed from modeled atmospheric conditions** (SPRINTARS category (c): "Emissions diagnosed from modeled conditions: soil dust, sea salt, DMS-origin sulfate") — NOT prescribed from an external time-varying dataset. PCMDI note: this is a deliberate change from TAR (where dust was "calculated off-line and prescribed by 3D data"). | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | MD=Y is technically correct (time-varying field present) but the field is *internally diagnosed*, not externally forced. Methodological distinction vs. models with prescribed dust inventories. |
| SS | Sea salt | Y | ~ nuance | TV (diagnosed) | Sea salt **diagnosed from modeled atmospheric conditions** — same category (c) as soil dust. Not an externally prescribed dataset. | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | Same nuance as MD — time-varying but internally generated, not an external prescribed forcing |
| LU | Land-use change | Y | ✓ supports | TV | Land use listed as a category (a) prescribed agent "changed according to historical data"; applied over 1900–2000 20C3M integration. (Adversarial claim that LU was excluded was refuted 0-1 by verifier — PCMDI clearly includes it.) | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | LU=Y confirmed; specific land-use dataset not named in PCMDI doc |
| SO | Solar irradiance | Y | ✓ supports | TV | Solar variability listed as category (a) prescribed agent "changed according to historical data"; applied as time-varying solar constant over 20C3M. Fixed only for future SRES (fixed at 2000 values). | PCMDI MIROC3.2_hires.htm §V.C; WDC-Climate MIROC3.2_hr_20C3M_1 | hasumi_emori_2004 | SO=Y confirmed — solar variability genuinely applied (not a Table S1 error, unlike CNRM/IPSL); specific dataset (Lean? other?) not named in PCMDI doc |
| VL | Volcanic aerosols | Y | ✓ supports | TV | Volcanic aerosols listed as category (a) prescribed agent "changed according to historical data" | PCMDI MIROC3.2_hires.htm §V.C | hasumi_emori_2004 | VL=Y confirmed; specific volcanic aerosol dataset not named (not confirmed as Sato 1993 vs other) |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | Not documented; MIROC3.2 is not known to use flux adjustments; Table S1 FC=- consistent with PCMDI | PCMDI MIROC3.2_hires.htm | hasumi_emori_2004 | FC=- confirmed; no flux adjustment mentioned |

### Table S1 conflicts found
- **MD=Y and SS=Y — methodological nuance (not a hard conflict):** Mineral dust and sea salt are present as time-varying fields but are *diagnosed interactively* by SPRINTARS from atmospheric conditions, not prescribed from an external dataset. Under a strict "externally prescribed forcing" reading these could be flagged; under a "time-varying field present" reading they pass. PCMDI explicitly distinguishes this from the TAR approach of prescribing off-line dust. Recorded as ~ nuance rather than ✗ conflict.
- **No other confirmed conflicts.**

### Open questions
1. **Solar dataset for MIROC3.2**: Which solar reconstruction was used? (Lean? Solanki? Other?) PCMDI doc names "solar variability" but not the specific dataset.
2. **Volcanic dataset for MIROC3.2**: Which volcanic aerosol reconstruction? (Sato 1993 updated? Ammann? Other?)
3. **SPRINTARS indirect aerosol details**: Which indirect effects (1st only, or 1st+2nd)? Reference for SPRINTARS scheme in MIROC3.2 context.
4. **Land-use dataset**: Which land-use inventory was applied?

## Provenance
- Table S1 row: G Y · O Y · SD Y · SI Y · BC Y · OC Y · MD Y · SS Y · LU Y · SO Y · VL Y · FC -
- Sources consulted: PCMDI MIROC3.2_hires.htm (primary — verbatim three-category forcing list, 20C3M section); WDC-Climate MIROC3.2_hr_20C3M_1 metadata (corroborating); K-1 Tech Report No. 1 website (Hasumi & Emori 2004)
- Stage 9 adversarial workflow: wf_401d7787-4bc; 30 agent calls; 14 claims verified → 11 confirmed, 3 killed. All hires findings confirmed high-confidence.
- Key quote from PCMDI: *"All of the agents in (a) and emissions in (b) are changed according to historical data"* for 20C3M; category (a) = GHGs/ozone/solar/volcanic/land-use; category (b) = sulfate/BC/OC emissions; category (c) = diagnosed soil dust/sea salt/DMS-sulfate.
