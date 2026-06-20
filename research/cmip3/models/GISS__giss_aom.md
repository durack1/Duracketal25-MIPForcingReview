# giss_aom — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** GISS Atmosphere-Ocean Model (AOM; Russell et al.) — **distinct from the ModelE line**; older, sparser forcing set, different aerosol source.
- **Atmosphere / ocean components:** Russell AOM.
- **Primary documentation paper(s):** Russell et al. (GISS AOM) — *(specific 20C3M forcing paper not located; PCMDI CMIP3 doc page is the canonical metadata)*
- **Forcing-specific reference(s):** PCMDI CMIP3 model documentation: https://pcmdi.llnl.gov/ipcc/model_documentation/GISS-AOM.htm

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = claim from Durack & Wijffels (2012) Table S1 (Y / - / blank).
`Verdict` = **✓ supports** · **✗ conflicts** · **~ unclear/unverified** · **＋ confirmed + adds detail**.
`Temporal` = **TV** time-varying · **FX-clim** fixed climatology (seasonal, no interannual change) · **FX-const** fixed constant · **n/a** not applied · **?** unknown.
Single source available (PCMDI); only SO=− is firmly established. PCMDI: "other forcing agents have monthly changes, but no annual changes" → non-sulphate agents are FX-clim.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (time-varying series or fixed field) | Citation | bib key | Notes / evidence |
|-----|---------|----------|---------|----------|-------------------------------------------------------|----------|---------|------------------|
| G  | Well-mixed GHGs | Y | ~ unverified | ? (likely TV) | WMGHGs applied (per PCMDI); specific concentration series not pinned | PCMDI CMIP3 doc | | **Open:** does AOM's GHG series match ModelE (Hansen & Sato 2004) or a different CMIP3 dataset? |
| O  | Ozone (tropo + strato) | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | Consistent with "-"; not independently verified |
| SD | Sulphate aerosol — direct | Y | ＋ supports *(distinct dataset)* | **TV** | **Boucher time-varying sulphate burden (1850–2000)** — DIFFERS from ModelE's model-generated Koch sulphate | PCMDI CMIP3 doc | | The one explicitly time-varying agent listed for AOM 20C3M |
| SI | Sulphate aerosol — indirect | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| BC | Black carbon | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | Consistent with sparse AOM set |
| OC | Organic carbon | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| MD | Mineral dust | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| SS | Sea salt | Y | ~ unverified | FX-clim *(likely)* | Sea salt present (per Table S1); fixed spatial field, monthly/seasonal but no annual change (units not pinned) | PCMDI CMIP3 doc | | **Open:** SS=Y not independently confirmed; if FX-clim this is the same fixed-vs-transient issue as ModelE |
| LU | Land-use change | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| SO | Solar irradiance | - | ✓ supports | **FX-const** | **1367 W m⁻²** — solar constant held fixed; no Lean/time-varying solar | PCMDI CMIP3 doc | | Firmly established. |
| VL | Volcanic aerosols | - | ~ consistent | n/a | Not applied | PCMDI CMIP3 doc | | |
| FC | Flux corrections (F/H) | - | ~ consistent | n/a | None indicated | PCMDI CMIP3 doc | | |

### Table S1 conflicts found
- **None confirmed.** SO=− firmly supported; SD=Y supported with the important detail that AOM used **Boucher** sulphate, not ModelE's Koch sulphate. Other cells consistent with Table S1 but rest on a single (PCMDI) source.

## Notes, uncertainties, and open questions
- AOM needs an AOM-specific primary source to confirm G=Y (GHG series) and SS=Y (and whether sea salt is fixed). Candidate: a Russell-model description paper. Lower priority than the ModelE pair.

## Provenance
- Table S1 inclusion row: G Y · O - · SD Y · SI - · BC - · OC - · MD - · SS Y · LU - · SO - · VL - · FC -
- Sources (deep-research wf_0428cb12-249): PCMDI CMIP3 GISS-AOM doc (https://pcmdi.llnl.gov/ipcc/model_documentation/GISS-AOM.htm); GISS pubs ru00100w; GISS modelE/cmip3 pages.
