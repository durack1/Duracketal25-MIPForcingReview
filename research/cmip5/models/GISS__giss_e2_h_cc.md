# giss_e2_h_cc — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** giss_model_e_r (chemistry-interactive variant)
- **Model family / lineage:** GISS ModelE2 with HYCOM ocean + "-CC" coupled carbon cycle. **SECOND-PASS RESOLVED (2026-06-21):** CC = interactive terrestrial carbon cycle + oceanic biogeochemistry. Physics_version = **p1 (NINT)** — confirmed from GISS ModelE CMIP5 rundecks (ES-DOC web agent 2026-06-21): `E_AR5_NINT_oH_CC.R`. This means E2-H-CC shares identical atmospheric forcing to E2-H p1, just adds carbon cycle coupling. Miller et al. 2014 (JAMES) does NOT cover CC variants — they appear only in GISS CMIP5 web documentation (data.giss.nasa.gov/modelE/cmip5/).
- **Atmosphere / ocean components:** ModelE2 atmosphere (2°×2.5°, 40 levels) + HYCOM ocean + interactive terrestrial carbon cycle + ocean biogeochemistry
- **Primary documentation paper(s):** Schmidt et al. 2014 doi:10.1002/2013MS000265 [schmidt_configuration_2014]; Miller et al. 2014 doi:10.1002/2013MS000266 [miller_cmip5_2014]

## SECOND-PASS RESOLUTION: CC suffix and physics_version

**CC = interactive carbon cycle (terrestrial + ocean BGC).** Confirmed from GISS ModelE CMIP5 rundecks (data.giss.nasa.gov/modelE/cmip5/ per ES-DOC web agent): rundeck `E_AR5_NINT_oH_CC.R` → physics_version = **p1 (NINT)**.

**Consequence:** E2-H-CC has identical atmospheric forcing to GISS-E2-H p1. All aerosol and ozone fields are prescribed offline NINT-physics datasets (same as E2-H p1 = ✗dev pattern). Miller et al. (2014) JAMES Table 3 confirms: G = GISS in-house Hansen/Sato compilation (not Meinshausen 2011); LU = HYDE 3.0 + Pongratz 2008 blend (not Hurtt 2011).

## Forcing datasets used (historical 1850–2005)

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✗ dev** | TV | GISS in-house compilation updated from Hansen & Sato (2004). Miller 2014 Table 3: "CO2: Observations [update from Hansen et al., 2007]." NOT Meinshausen 2011. | — | — | Deviation confirmed. Same as all GISS-E2 p1 models. Miller 2014 Table 3. |
| O  | Ozone | Cionni et al. 2011 | **✗ dev** | TV | Shindell et al. (2006a) offline chemistry fields (NINT prescribed). Same as E2-H p1 = ✗dev. | — | — | p1 (NINT) = prescribed offline O fields; same as E2-H p1. |
| SD | Sulphate direct | Lamarque et al. 2010 | **✗ dev** | TV | Koch et al. (2011) offline aerosol fields (NINT prescribed). Same as E2-H p1. | — | — | p1 (NINT) = prescribed offline SD fields. |
| SI | Sulphate indirect | Model-dependent | **✗ dev** | TV | Crude tuned aerosol indirect effect (Hansen 2005). Same as E2-H p1. | — | — | p1 (NINT) = dev. |
| BC | Black carbon | Lamarque et al. 2010 | **✗ dev** | TV | Koch et al. (2011) offline BC. Same as E2-H p1. | — | — | p1 (NINT) = dev. |
| OC | Organic carbon | Lamarque et al. 2010 | **✗ dev** | TV | Koch et al. (2011) offline OC. Same as E2-H p1. | — | — | p1 (NINT) = dev. |
| MD | Mineral dust | Model-dependent | **✗ dev** | TV | Koch et al. (2011) offline dust. Same as E2-H p1. | — | — | p1 (NINT) = dev (not interactive). |
| SS | Sea salt | Model-dependent | **✗ dev** | TV | Koch et al. (2011) offline sea salt. Same as E2-H p1. | — | — | p1 (NINT) = dev (not interactive). |
| LU | Land-use change | Hurtt et al. 2011 | **✗ dev** | TV | HYDE 3.0 (post-1900) blended with Pongratz et al. (2008) for 1850–1900. Miller 2014 Sect. 3.8: "After 1900, we specify...HYDE3.0 land-use and land-cover data base [Klein Goldewijk and van Drecht, 2006]." NOT Hurtt 2011. | — | — | Deviation confirmed. Applies to all GISS-E2 models per Miller 2014. |
| SO | Solar irradiance | Wang et al. 2005 | **✓ std** | TV | Wang et al. (2005) TSI + Lean (2009) spectral. Miller 2014 Sect. 3.6: "use the TSI reconstruction of Wang et al. [2005] as recommended for the CMIP5 experiments." Same as all GISS-E2. | wang_modeling_2005 | wang_modeling_2005 | Confirmed. Miller 2014 Sect. 3.6. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | **✓ std** | TV | Sato et al. (1993) updated. Miller 2014 Sect. 3.5: "prescribed using a compilation updated from Sato et al. [1993], available at http://data.giss.nasa.gov/modelforce/strataer/." Same as all GISS-E2. | sato_volcanic_1993 | sato_volcanic_1993 | Confirmed. Miller 2014 Sect. 3.5. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
CC = coupled carbon cycle is confirmed. Standard atmospheric NINT physics — carbon cycle inputs TBC.

| ESM input | Applied? | Dataset / source | Notes |
|-----------|----------|-----------------|-------|
| CO2 mode | Likely concentration-driven | Meinshausen 2011 expected for `historical` | NINT physics uses concentration-driven CO2 at coupler |
| BC on snow/ice | ✓ | Schmidt 2014 | BC-on-snow confirmed for all GISS-E2 CMIP5 variants |

### Provenance
- Durack et al. 2016 model list: included
- Stage 2 adversarial workflow: wf_f7556b2d-78b (original)
- Second-pass update: 2026-06-21; physics_version = p1 (NINT) confirmed from GISS ModelE CMIP5 rundecks; G/LU deviations confirmed from Miller 2014; all forcing cells resolved
