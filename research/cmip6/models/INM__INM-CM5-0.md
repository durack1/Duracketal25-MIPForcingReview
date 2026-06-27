<!-- CMIP6 forcing record — INM-CM5-0 (INM). Stage 15 workflow: wf_75e312c8-82e (2026-06-27) -->

# INM-CM5-0 — INM (Russia)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** INM atmosphere (INM-AM5-0, 2°×1.5°, **L73 top 0.2 hPa** — substantially higher top than INM-CM4-8) + INMOM ocean (0.5°). AOGCM. Russian Institute for Numerical Mathematics. Upgrades CM4-8 with greatly improved vertical resolution. **Interactive aerosol scheme (INM-AER1)** — deviates from both MACv2-SP prescribed and CEDS+BB4CMIP6 interactive standard pathways.
- **CMIP5 predecessor:** INM-CM4 (CMIP5)
- **Primary documentation paper(s):** Volodin & Gritsun 2018 (*Earth Syst. Dynam.* doi:10.5194/esd-9-1235-2018)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** (CMIP6 recommended). CO2, CH4, N2O prescribed. | Volodin & Gritsun 2018 | Verbatim: "Time series of CO2, CH4, N2O, O3, stratospheric volcanic sulfate aerosol concentration, total solar irradiance (TSI), and solar spectrum...were prescribed as recommended for the historical run of CMIP6 (Eyring et al., 2016)." |
| O  | Ozone | ✓std | TV | **CMIP6 prescribed ozone** (standard CCMI/Checa-Garcia 2018). O3 prescribed (not interactive). | Volodin & Gritsun 2018 | Verbatim "O3...prescribed as recommended for the historical run of CMIP6." Not in Keeble 2021 interactive list — confirmed prescribed. |
| SD | Aerosol — sulphate direct | ✗dev | TV | **INM-AER1 interactive aerosol block** (Volodin & Kostrykin 2016): 10 aerosol species computed from prescribed CMIP6 SO2/BC/OC emissions. NOT MACv2-SP, NOT direct CEDS/BB4CMIP6 field prescription. | Volodin & Gritsun 2018 | Verbatim: "The model includes an interactive aerosol block (Volodin and Kostrykin, 2016), in which concentrations of 10 aerosols are calculated." The 10 species are coarse/fine sea salt, coarse/fine mineral dust, BC, and several sulphate/organic modes. Emissions source not explicitly named (CMIP6-compatible assumed). |
| SI | Aerosol — sulphate indirect | ✗dev | TV | INM-AER1 — only **first aerosol indirect effect** (Twomey — influence on cloud drop radius) considered. No second indirect. | Volodin & Gritsun 2018 | Verbatim: "only the first aerosol indirect effect (the influence of aerosol on cloud drop radius) is taken into consideration." Incomplete indirect effect treatment. |
| BC | Black carbon | ✗dev | TV | INM-AER1 interactive; BC as one of 10 species. Emissions source from CMIP6 dataset (assumed). | Volodin & Gritsun 2018 | As SD — centre-specific interactive scheme, not standard CEDS+BB4CMIP6 field prescription. |
| OC | Organic carbon | ✗dev | TV | INM-AER1 interactive; OC as one of 10 species. | Volodin & Gritsun 2018 | As SD. |
| MD | Mineral dust | ? | ? | INM-AER1 includes coarse/fine mineral dust as two of the 10 species. Dataset/treatment details not confirmed. | Volodin & Gritsun 2018 | Interactive within INM-AER1; not a fixed background as in MPI-ESM1.2. |
| SS | Sea salt | ? | ? | INM-AER1 includes coarse/fine sea salt as two of the 10 species. | Volodin & Gritsun 2018 | As MD. |
| LU | Land-use change | ? | ? | Not addressed in Volodin & Gritsun 2018. LUH2 v2.1h expected but not confirmed. | — | Open. |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** (TSI + solar spectrum; SOLARIS-HEPPA). | Volodin & Gritsun 2018 | Verbatim: "total solar irradiance (TSI), and solar spectrum...prescribed as recommended for the historical run of CMIP6." |
| VL | Volcanic aerosols | ✓std | TV | **CMIP6 stratospheric volcanic sulfate aerosol** (= IACETH-SAGE3lambda-3-0-0). | Volodin & Gritsun 2018 | Verbatim: "stratospheric volcanic sulfate aerosol concentration...prescribed as recommended for the historical run of CMIP6." Source_id not named verbatim but IACETH is the only CMIP6 standard stratospheric aerosol dataset. |
| FC | Flux corrections | n/a | n/a | None | | |

### Deviations from Eyring 2016 standard protocol
- **SD/BC/OC = ✗dev**: INM-AER1 interactive aerosol block (Volodin & Kostrykin 2016) — 10-species scheme computing aerosol concentrations from CMIP6-compatible emissions. Neither the prescribed MACv2-SP path nor the CEDS+BB4CMIP6 interactive standard.
- **SI = ✗dev**: Only first indirect effect (cloud drop radius influence). No second indirect/lifetime effect.
- **G/O/SO/VL = ✓std**: Direct protocol compliance confirmed from Volodin & Gritsun 2018 verbatim.
- **LU = ?**: Not mentioned in the primary paper.

## Provenance
- Stage 15 workflow run ID: wf_75e312c8-82e (2026-06-27); INM findings: 1-0 (confirmed from primary source)
- Key sources: Volodin & Gritsun 2018 (*ESD* doi:10.5194/esd-9-1235-2018, verbatim quotes obtained); Volodin & Kostrykin 2016 (aerosol block description); WDC-Climate C6CMINIC0hi (component listings confirmed, no forcing dataset details)
