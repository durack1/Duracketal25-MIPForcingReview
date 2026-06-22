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
| MD | Mineral dust | Model-dependent | — | ? | ? | | | | |
| SS | Sea salt | Model-dependent | — | ? | ? | | | | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Expected standard; not explicitly confirmed | — | — | Open |
| SO | Solar irradiance | Matthes et al. 2017 SOLARIS-HEPPA-3-2 | `SOLARIS-HEPPA-3-2` | ? | TV | Expected standard; not explicitly confirmed | — | — | Open |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | VL source unresolved — "Thomason 2018 GloSSAC" claim REFUTED by adversarial verifier | — | — | OPEN: VL source for all GISS models unresolved |
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
1. **VL**: What volcanic aerosol dataset? (Thomason GloSSAC claim refuted; standard IACETH-SAGE3lambda unconfirmed)
2. **G/LU/SO**: Confirm UoM-CMIP-1-2-0, UofMD-landState-2-1-h, SOLARIS-HEPPA-3-2
3. **G/H forcing identity**: Confirm atmospheric forcings identical between G and H variants (expected yes)

## Provenance
- WCRP-CMIP CVs source_id: GISS-E2-1-G confirmed
- Sources: Kelley et al. 2020 (doi:10.1029/2019MS002025); data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22)
