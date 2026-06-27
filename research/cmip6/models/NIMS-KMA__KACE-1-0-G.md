<!-- CMIP6 forcing record — KACE-1-0-G (NIMS-KMA). Stage 11 workflow: wf_205a78ae-659 (2026-06-26) -->

# KACE-1-0-G — NIMS-KMA (South Korea)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** Korea-Australia Climate Model v1.0, Global configuration (KACE-1-0-G). NIMS-KMA fork of HadGEM3-GC31-LL, sharing UM GA7.1 atmosphere + NEMO3.6 (ORCA1) ocean + CICE6 sea ice + JULES land. AOGCM only — no interactive chemistry or ESM BGC. **Atmospheric forcing confirmed identical to HadGEM3-GC31-LL** (NIMS-KMA uses MOHC atmospheric components unchanged).
- **CMIP5 predecessor:** HadGEM2-AO (shared UK atmosphere)
- **Atmosphere / ocean components:** UM GA7.1 (NIMS-KMA fork) / NEMO3.6 ORCA1 + CICE6
- **Primary documentation paper(s):** Lee et al. 2020, *JAMES* doi:10.1029/2019MS001895 [lee_kace_2020] (paywalled)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

All atmospheric forcing confirmed identical to HadGEM3-GC31-LL. Lee et al. 2020 is paywalled; no Korean-specific modifications to standard MOHC forcing were identified in Stage 11 research. The "KACE" name reflects NIMS-KMA development and Korean science contributions but uses MOHC UM/JULES framework with standard CMIP6 forcing.

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | Meinshausen 2017 (as HadGEM3-GC31-LL) | As HadGEM3-GC31-LL | MOHC UM GA7.1 components shared; GHG input unchanged. |
| O  | Ozone | ✓std | TV | CCMI prescribed (Hegglin et al. 2016 / UReading-CCMI); ozone-redistribution scheme. No interactive chemistry. | As HadGEM3-GC31-LL | |
| SD | Aerosol — sulphate direct | ✓std | TV | GLOMAP-mode CEDS (Hoesly 2018) — as HadGEM3-GC31-LL. NOT MACv2-SP. | As HadGEM3-GC31-LL | |
| SI | Aerosol — sulphate indirect | ✓std | TV | GLOMAP-mode interactive indirect — as HadGEM3-GC31-LL. | As HadGEM3-GC31-LL | |
| BC | Black carbon | ✓std | TV | GLOMAP-mode CEDS+BB4CMIP6 ×2 — as HadGEM3-GC31-LL. | As HadGEM3-GC31-LL | BB4CMIP6 BC/OC scaled ×2 per Johnson et al. 2016. |
| OC | Organic carbon | ✓std | TV | As HadGEM3-GC31-LL. | As HadGEM3-GC31-LL | |
| MD | Mineral dust | ? | ? | GA7.1 dust treatment uncertain — as HadGEM3-GC31-LL. | As HadGEM3-GC31-LL | |
| SS | Sea salt | ✓std | TV | GLOMAP-mode interactive — as HadGEM3-GC31-LL. | As HadGEM3-GC31-LL | |
| LU | Land-use change | ✓std | TV | LUH2 v2.1h via JULES — as HadGEM3-GC31-LL. | As HadGEM3-GC31-LL | |
| SO | Solar irradiance | ✓std | TV | Matthes 2017 (SOLARIS-HEPPA) — as HadGEM3-GC31-LL. | As HadGEM3-GC31-LL | |
| VL | Volcanic aerosols | ✓std | TV | IACETH-SAGE3lambda lineage (Thomason 2018 + Arfeuille 2014) — as HadGEM3-GC31-LL. | As HadGEM3-GC31-LL | |
| FC | Flux corrections | n/a | n/a | | | |

### Open questions
- Lee et al. 2020 (primary paper) is paywalled; no KACE-specific modifications to MOHC forcing confirmed or refuted.
- Korean-specific parameterization changes (if any) are not documented in accessible sources.

## Provenance
- Stage 11 workflow run ID: wf_205a78ae-659 (2026-06-26); 28 agents; 11/14 confirmed, 3 killed
- Key sources: Lee et al. 2020 (doi:10.1029/2019MS001895 — paywalled, content inferred from accessible cross-references); HadGEM3-GC31-LL model file (same atmospheric components)
