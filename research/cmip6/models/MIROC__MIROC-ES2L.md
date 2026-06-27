<!-- CMIP6 forcing record — MIROC-ES2L (MIROC). Stage 12 complete (2026-06-26); Appendix C verified (2026-06-27). -->

# MIROC-ES2L — MIROC (Japan)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** Full ESM. MIROC6 base atmosphere (T42L40, ~300km — lower horizontal resolution than MIROC6 standard) + COCO4.9 ocean (1°) + OECO2 ocean BGC (oxygen, carbon, nitrogen, Fe cycling) + VISIT-e land BGC (active C-N cycle). SPRINTARS6.0 aerosol scheme.
- **Primary paper:** Hajima et al. 2020, *GMD* doi:10.5194/gmd-13-2197-2020
- **CMIP5 predecessor:** MIROC-ESM (SPRINTARS + CHASER chemistry in MIROC-ESM-CHEM) — MIROC-ES2L switches to prescribed CCMI ozone (no CHASER)

## Forcing (CMIP6 historical, 1850–2014)

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Meinshausen et al. 2017 (UoM-CMIP-1-2-0); historical is concentration-driven (prescribed CO2) per Hajima 2020 verbatim | ✓std | TV |
| O — Ozone | Checa-Garcia (2018) CMIP6 ozone forcing dataset (Zenodo doi:10.5281/zenodo.1135127); 3-D monthly concentration; same as MIROC6 (Tatebe 2019) | ✓std | TV |
| SD — Sulfate direct | SPRINTARS6.0 interactive; CEDS (Hoesly 2018) + BB4CMIP6 (van Marle 2017) emissions; same scheme as MIROC6 | ✓std | TV |
| SI — Sulfate indirect | SPRINTARS6.0 interactive (same emissions as SD) | ✓std | TV |
| BC — Black carbon | SPRINTARS6.0 interactive; CEDS + BB4CMIP6 | ✓std | TV |
| OC — Organic carbon | SPRINTARS6.0 interactive; CEDS + BB4CMIP6 | ✓std | TV |
| MD — Mineral dust | SPRINTARS6.0 prognostic online | ✓std | TV |
| SS — Sea salt | SPRINTARS6.0 prognostic online | ✓std | TV |
| LU — Land use | Ma et al. (2019) = LUH2 transition rules (GMD-2019 preprint; Hurtt et al. 2020 LUH2); status/transition/fertilizer via GLM2; five land use types | ✓std | TV |
| SO — Solar | Matthes et al. (2017) SOLARIS-HEPPA; monthly solar irradiance spectra; same as MIROC6 (Tatebe 2019) | ✓std | TV |
| VL — Volcanic | Thomason et al. IACETH CMIP6 stratospheric aerosol; monthly vertically integrated extinction coefficients per radiation band; same as MIROC6 | ✓std | TV |
| FC — Fixed composition | n/a (ESM; concentration-driven) | n/a | — |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | IGAC/SPARC CCMI N-dep (http://blogs.reading.ac.uk/ccmi/forcing-databases-in-support-of-cmip6/); NOy+NHy wet+dry monthly deposition = NCAR-CCMI-2-0 (doi:10.22033/ESGF/input4MIPs.1125) | ✓std |
| Fe-dep | Online two-component system: (1) lithogenic Fe — SPRINTARS mineral dust at 3.5% Fe content (Duce & Tindale 1991), 2% solubility (Jickells 2005); (2) pyrogenic Fe — diagnosed from BB4CMIP6 BC emissions (van Marle 2017; Ito 2011) + fossil/biofuel (Hoesly 2018; Ito et al. 2018); variable solubility by source (oil 79%, coal 11%, biomass 18%; Ito 2013). Also sediment Fe (Moore 2004; Aumont & Bopp 2006) + hydrothermal Fe (Tagliabue 2010). No single external prescribed Fe-dep climatology. | ~online |
| CO2-mode | Concentration-driven (prescribed CO2); Hajima 2020 verbatim: "CO2 concentration was prescribed in the simulations (i.e., so-called concentration-driven experiments)" | ✓std |

## Sources
- Hajima et al. 2020 (*GMD* doi:10.5194/gmd-13-2197-2020) — primary; Table C1 (Appendix C) verified directly; per-forcing datasets confirmed
- Kawamiya et al. 2020 (*Prog Earth Planet Sc*) — secondary; confirms MIROC-ES2L Fe treatment (lithogenic+pyrogenic differentiation; Ito et al. 2019)
- Ma et al. (2019) = doi:10.5194/gmd-2019-xxx (GMD Discuss.); LUH2-based land use transition rules
- Checa-Garcia (2018) = doi:10.5281/zenodo.1135127; CMIP6 CCMI ozone forcing dataset

## Stage 12 + Appendix C verification notes (2026-06-27)
- Appendix C (Table C1) verified by direct PDF extraction: all 9 forcing categories confirmed with references
- G: Meinshausen 2017 — verbatim confirmed in Table C1
- O: Checa-Garcia 2018 (Zenodo doi:10.5281/zenodo.1135127) = CMIP6 CCMI standard ozone; ✓std confirmed
- SD/SI/BC/OC: SPRINTARS6.0 with Hoesly 2018 (CEDS) + van Marle 2017 (BB4CMIP6) — Table C1 row "Anthropogenic SLCF emission" + "Open biomass burning emission"
- MD/SS: SPRINTARS6.0 prognostic online — not an external forcing in Table C1 (computed inline)
- LU: Ma et al. (2019) = LUH2 transition rules paper (GLM2, CMIP6); ✓std confirmed
- SO: Matthes et al. (2017) — verbatim confirmed in Table C1
- VL: Thomason et al. WCRP-CMIP stratospheric aerosol document — confirmed in Table C1 (same Tatebe 2019 treatment)
- N-dep: IGAC/SPARC CCMI URL = same dataset as NCAR-CCMI-2-0 (doi:10.22033/ESGF/input4MIPs.1125); ✓std confirmed
- Fe-dep: NOT a standard prescribed external dataset. MIROC-ES2L uses online/emissions-based Fe: mineral dust Fe from SPRINTARS (lithogenic), pyrogenic Fe diagnosed from BB4CMIP6+CEDS emissions using Ito et al. 2018 factors, plus sediment and hydrothermal Fe sources. Verdict: ~online (internally computed, not a prescribed Fe climatology).
- CMIP5 note: MIROC-ESM-CHEM used CHASER interactive chemistry (O=＋exc). MIROC-ES2L uses prescribed Checa-Garcia 2018 CCMI ozone (O=✓std)
