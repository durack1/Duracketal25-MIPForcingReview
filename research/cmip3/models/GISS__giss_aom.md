# giss_aom — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** GISS Atmosphere-Ocean Model (AOM; Russell et al.) — **distinct from the ModelE line**; older, sparser forcing set, different aerosol source.
- **Atmosphere / ocean components:** Russell AOM.
- **Primary documentation paper(s):** Russell, G.L., Miller, J.R. & Rind, D. (1995). *Atmosphere-Ocean* 33(4):683–730 (doi:10.1080/07055900.1995.9649550). ⚠️ Control climate + 1%/yr CO₂ IPCC experiment only — does **not** document 20C3M historical forcing specifics (GHG series, sea salt).
- **Forcing-specific reference(s):** PCMDI CMIP3 model documentation: https://pcmdi.llnl.gov/ipcc/model_documentation/GISS-AOM.htm

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = claim from Durack & Wijffels (2012) Table S1 (Y / - / blank).
`Verdict` = **✓ supports** · **✗ conflicts** · **~ unclear/unverified** · **＋ confirmed + adds detail**.
`Temporal` = **TV** time-varying · **FX-clim** fixed climatology (seasonal, no interannual change) · **FX-const** fixed constant · **n/a** not applied · **?** unknown.
Single source available (PCMDI); only SO=− is firmly established. PCMDI: "other forcing agents have monthly changes, but no annual changes" → non-sulphate agents are FX-clim.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (time-varying series or fixed field) | Citation | bib key | Notes / evidence |
|-----|---------|----------|---------|----------|-------------------------------------------------------|----------|---------|------------------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | **GHG URL confirmed** — PCMDI PDF §V 20C3M: *"Greenhouse gases: http://aom.giss.nasa.gov/IN/GHGA1B.LP"* — a time-varying observed GHG concentration file. G=TV confirmed. | PCMDI GISS-AOM.pdf §V (verbatim) | | G=Y confirmed TV; GHGA1B.LP is the time-varying GHG dataset used in AOM 20C3M |
| O  | Ozone (tropo + strato) | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | Consistent with "-"; not independently verified |
| SD | Sulphate aerosol — direct | Y | ＋ supports *(distinct dataset)* | **TV** | **Boucher time-varying sulphate burden (1850–2000)** — DIFFERS from ModelE's model-generated Koch sulphate | PCMDI CMIP3 doc | | The one explicitly time-varying agent listed for AOM 20C3M |
| SI | Sulphate aerosol — indirect | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| BC | Black carbon | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | Consistent with sparse AOM set |
| OC | Organic carbon | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| MD | Mineral dust | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| SS | Sea salt | Y | ~ unverified | FX-clim *(likely)* | Sea salt present (per Table S1); fixed spatial field, monthly/seasonal but no annual change (units not pinned) | PCMDI CMIP3 doc | | **Open:** SS=Y not independently confirmed; if FX-clim this is the same fixed-vs-transient issue as ModelE |
| LU | Land-use change | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| SO | Solar irradiance | - | ✓ supports | **FX-const** | **1367 W m⁻²** — solar constant held fixed; no Lean/time-varying solar | PCMDI CMIP3 doc; **Russell et al. 1995** | russell_aom_1995 | Fixed solar constant confirmed. Russell 1995 Discussion (p.727): "small solar constant reduction" cited only as a future improvement, confirming the current model used a fixed value. |
| VL | Volcanic aerosols | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| FC | Flux corrections (F/H) | - | ✓ confirms | n/a | "Flux adjustments are not used" (Abstract); Table 5: "No surface flux corrections … No ocean restoring forces" | PCMDI CMIP3 doc; **Russell et al. 1995** | russell_aom_1995 | Explicit in Abstract and Table 5. Confirmed independently of PCMDI. |

### Table S1 conflicts found
- **None confirmed.** SO=− firmly supported; SD=Y supported with the important detail that AOM used **Boucher** sulphate, not ModelE's Koch sulphate. Other cells consistent with Table S1 but rest on a single (PCMDI) source.

## Notes, uncertainties, and open questions
- **FC=n/a confirmed** (Russell et al. 1995): Abstract states "Flux adjustments are not used"; Table 5: "No surface flux corrections … No ocean restoring forces." Independent of PCMDI.
- **SO=FXk corroborated** (Russell et al. 1995): model uses fixed solar constant; Discussion (p.727) notes a "small solar constant reduction" as a future improvement, meaning the control uses a fixed value. Consistent with PCMDI's 1367 W m⁻².
- **G confirmed TV** (PCMDI PDF §V): GHG URL `http://aom.giss.nasa.gov/IN/GHGA1B.LP` confirms a time-varying GHG concentration file was used for 20C3M. G=Y supported.
- **SS still open**: PCMDI PDF §V describes "other forcing agents have monthly changes, but no annual changes" (FX-clim), and §II.C describes only the Boucher sulfate aerosol — sea salt not named as a separate forcing agent. Whether SS was applied as a distinct aerosol forcing or is absent remains unclear. FX-clim is the most likely treatment if applied.

## Provenance
- Table S1 inclusion row: G Y · O - · SD Y · SI - · BC - · OC - · MD - · SS Y · LU - · SO - · VL - · FC -
- Sources (deep-research wf_0428cb12-249): PCMDI CMIP3 GISS-AOM doc (https://pcmdi.llnl.gov/ipcc/model_documentation/GISS-AOM.htm); GISS pubs ru00100w; GISS modelE/cmip3 pages.
- **Russell et al. 1995** (*Atmosphere-Ocean* 33(4):683–730; doi:10.1080/07055900.1995.9649550; PDF in resources/) — confirms FC=n/a; corroborates SO=FXk. Does not document 20C3M historical forcing (piControl + 1%CO₂ only). Second-pass read: 2026-06-28.
