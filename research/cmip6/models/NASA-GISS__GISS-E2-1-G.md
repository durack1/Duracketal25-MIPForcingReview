<!-- CMIP6 forcing record — GISS-E2-1-G (NASA-GISS). Created 2026-06-22; Stage 2 workflow: wf_3520e866-fd8 -->

# GISS-E2-1-G — NASA Goddard Institute for Space Studies, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** GISS-E2-R (ModelE2 + Russell ocean)
- **Model family / lineage:** ModelE2.1 atmosphere + GISS Ocean v1 (G = Russell ocean). physics_version=1 (NINT).
- **Atmosphere / ocean components:** ModelE2.1 L40 top ~0.1 hPa / GISS Ocean v1 (Russell); ~2° atmosphere
- **Primary documentation paper(s):** Kelley et al. 2020, *JAMES* doi:10.1029/2019MS002025 [kelley_giss_2020]
- **Forcing-specific reference(s):** Bauer et al. 2020, *JAMES* doi:10.1029/2019MS001978 (OMA scheme) [bauer_giss_oma_2020]

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

`G/H atmospheric forcing is identical` — G and H variants share the same ModelE2.1 atmosphere; only ocean differs.

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | Expected standard; not explicitly confirmed | — | — | Open: confirm UoM-CMIP-1-2-0 |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | **✗dev** | TV | **GISS-OMA-derived prescribed fields** (NOT the standard CCMI UReading-CCMI-1-0). Pre-computed from an AMIP-style ensemble (1860–2014) of the interactive OMA model (physics_version=3) driven by CMIP6 CEDS+BB4CMIP6 emissions. Prescribed annually-resolved. | Kelley et al. 2020 | [kelley_giss_2020] | **KEY DEVIATION**: NINT ingests pre-computed OMA ozone — center-specific product, not the standard input4MIPs CCMI dataset. "Background fields of ozone and aerosol concentrations are derived from simulations of the interactive OMA version using an ensemble of AMIP-style runs (1860–2014) with annually resolved CMIP6 emissions." |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 (interactive) | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | **~** | TV | CMIP6-spec CEDS (Hoesly et al. 2018) + BB4CMIP6 (van Marle et al. 2017) emissions used to drive the offline OMA run; the NINT historical simulation then ingests pre-computed OMA aerosol fields (NOT raw emissions-driven interactive aerosol) | Kelley et al. 2020 | [kelley_giss_2020] | Emissions are CMIP6-standard but aerosol is prescribed offline (NINT), not interactively computed in the historical run |
| SI | Aerosol — sulphate indirect | Model-dependent | — | ~ | TV | Indirect effect parameterised using the prescribed OMA aerosol fields | Kelley et al. 2020 | [kelley_giss_2020] | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | As SD — OMA-derived prescribed fields; CEDS+BB4CMIP6 emissions source standard | Kelley et al. 2020 | [kelley_giss_2020] | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | As SD | Kelley et al. 2020 | [kelley_giss_2020] | |
| MD | Mineral dust | Model-dependent | — | ~ | TV | GISS-OMA-derived prescribed fields; online interactive in OMA (Cakmur et al. 2006 approach, 6 size bins 0.1–8 μm); NINT ingests pre-computed OMA dust fields — center-specific, NOT Kinne 2013 background | Kelley et al. 2020 | [kelley_giss_2020] | OMA dust tracers: Cakmur et al. 2006 approach, emitted silt/clay fractions optimized; NINT uses pre-computed offline fields as with sulfate/BC/OC |
| SS | Sea salt | Model-dependent | — | ~ | TV | GISS-OMA-derived prescribed fields; sea-salt included in OMA aerosol module alongside dust/sulfate; NINT ingests offline OMA sea-salt fields — center-specific | Kelley et al. 2020 | [kelley_giss_2020] | Same OMA offline package as SD/BC/OC/MD |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Expected standard; not explicitly confirmed | — | — | Open |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | TV | Expected standard; not explicitly confirmed | — | — | Open |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | **✓std** | TV | **Thomason et al. 2018 GloSSAC / IACETH stratospheric aerosol — explicitly confirmed**: "Volcanic aerosols were prescribed using precomputed aerosol depth and effective particle radius (Thomason et al., 2018)" | Kelley et al. 2020 | [kelley_giss_2020] | Direct textual confirmation from Kelley 2020 §3.2. Thomason 2018 ESSD (doi:10.5194/essd-10-469-2018) = standard CMIP6 stratospheric AOD. |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O  | Ozone | GISS-OMA-derived prescribed fields (center-specific) | Replaces | Pre-computed from AMIP-style OMA ensemble; NOT standard CCMI input4MIPs (UReading-CCMI-1-0) |
| SD/BC/OC | Aerosol | GISS-OMA-derived prescribed aerosol fields | Replaces | OMA aerosol fields passed to NINT; emissions (CEDS+BB4CMIP6) used only indirectly via OMA offline run |

### ModelE2.1 physics_version map (important for interpreting GISS CMIP6 submission variants)
- **v1 = NINT** (non-interactive): prescribed offline ozone+aerosol from pre-computed OMA fields — standard historical submission
- **v3 = TCADI/OMA** (interactive): online interactive composition (used for the offline OMA derivation runs)
- **v4 = TOMAS** (interactive microphysics, optional)
- **v5 = MATRIX** (interactive microphysics, optional — NOT the standard submission)

### Deviations from Eyring 2016 standard protocol
- **O: ✗dev** — prescribed ozone is GISS-OMA-derived, NOT the standard CCMI dataset (UReading-CCMI-1-0). Same emissions source (CEDS+BB4CMIP6) used to generate it, but the product deviates from the Eyring 2016 prescribed-ozone baseline.

### Notes on CMIP5 lineage
- CMIP5 GISS-E2-R used the interactive TCADI/OMA scheme (O=＋exc). CMIP6 E2-1-G reverted to NINT (prescribed OMA-derived), matching the GFDL-CM4 pattern of downgrading to prescribed despite interactive capability.
- CMIP5 GISS used Sato volcanic AOD — what CMIP6 uses is unresolved.

## Open questions
1. ~~**VL**: RESOLVED — Thomason et al. 2018 confirmed in Kelley 2020 §3.2~~
2. **G/LU/SO**: Kelley 2020 says these were "specified using a mix of approaches (Miller et al., 2020)"; confirm UoM-CMIP-1-2-0 (G), UofMD-landState-2-1-h (LU), SOLARIS-HEPPA-3-2 (SO) via Miller 2020 (doi:10.1029/2019MS002034)
3. **G/H forcing identity**: Confirm atmospheric forcings identical between G and H variants (expected yes)

## Provenance
- WCRP-CMIP CVs source_id: GISS-E2-1-G confirmed
- Sources: Kelley et al. 2020 (doi:10.1029/2019MS002025); data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22)

### Notes — CMIP5 lineage review (2026-06-27)
Papers read: Schmidt et al. 2014 JAMES (doi:10.1002/2013MS000265) and Miller et al. 2014 JAMES (doi:10.1002/2013MS000266) — both CMIP5 GISS-E2-R/E2-H papers, not CMIP6 primary sources. Lineage clues only; no CMIP6 verdicts can be confirmed from these papers.

CMIP5 GISS-E2 forcing datasets (for lineage reference):
- **G**: GISS-specific GHG concentrations from Hansen et al. 2007 / GISS data server (data.giss.nasa.gov/modelforce/ghgases/) — NOT Meinshausen 2017. Possible ✗dev lineage for CMIP6.
- **LU**: HYDE3.0 (Klein Goldewijk & van Drecht 2006) + Pongratz et al. 2008 blend (1850–1900) — NOT LUH2 (Hurtt 2020). Possible ✗dev lineage for CMIP6.
- **SO**: TSI from Wang et al. 2005 updated + spectral variations from Lean 2009 (CMIP5-recommended) — NOT Matthes 2017. Possible ✗dev lineage for CMIP6.
- **VL**: Sato et al. 1993 stratospheric AOD updated (data.giss.nasa.gov/modelforce/strataer/) — NOT Thomason 2018 / IACETH. Consistent with CMIP6 VL still open.
- **MD**: NINT version uses prescribed climatological dust cycle from Miller et al. 2006a (no temporal variability) — NOT Kinne 2013 standard. Possible ✗dev/~ lineage.
- **SS**: Included in NINT offline aerosol package alongside dust/sulfate/BC/OC — center-specific; not separately referenced to any CMIP6 standard dataset.

All six target unknowns (G, MD, SS, LU, SO, VL) remain **?** — CMIP5 papers document E2-R/E2-H predecessors only; explicit CMIP6 confirmation requires Kelley et al. 2020 or supplementary CMIP6 documentation.

### Notes — Stage 9 second pass CMIP6 (2026-06-27)
Kelley et al. 2020 JAMES (doi:10.1029/2019MS002025) read in full (1827 lines). Key findings for target unknowns:

- **VL = ✓std CONFIRMED**: §3.2 (line 628-629): "Volcanic aerosols were prescribed using precomputed aerosol depth and effective particle radius (Thomason et al., 2018)" — Thomason 2018 ESSD doi:10.5194/essd-10-469-2018 = standard CMIP6 IACETH stratospheric AOD. Prior "refuted" note was incorrect; direct textual evidence now overrides.
- **MD = ~ CONFIRMED**: §2.1.3: OMA module treats dust interactively (Cakmur et al. 2006, 6 size bins 0.1–8 μm, optimized clay fractions). NINT runs ingest pre-computed OMA dust fields — same center-specific offline package as sulfate/BC/OC. Not Kinne 2013 natural background.
- **SS = ~ CONFIRMED**: OMA treats sea-salt alongside dust/sulfate (§2.1.3, line 299-301). NINT GISS-E2-1-G ingests offline OMA sea-salt fields — center-specific, same mechanism as MD/SD/BC/OC.
- **G, LU, SO remain ?**: Kelley 2020 §3.2 (line 626-627) states "Well-mixed greenhouse gases, solar activity changes (affecting TSI and the spectral irradiance), and LULC (including irrigation) were specified using a mix of approaches (Miller et al., 2020)." The specific datasets are NOT named in Kelley 2020 — they are deferred entirely to Miller et al. 2020 (doi:10.1029/2019MS002034).
- Thomason 2018 reference in Kelley: doi:10.5194/essd-10-469-2018, "A global space-based stratospheric aerosol climatology: 1979–2016".
