# inmcm3_0 — INM (Institute for Numerical Mathematics, Russian Academy of Sciences, Russia)

- **CMIP phase:** CMIP3 (20C3M)
- **Note:** INM-CM3.0 is NOT in Durack & Wijffels (2012) Table S1. All 12 forcings documented from primary sources. No Table S1 claims to test — verdict column records the primary-source finding directly.
- **Model family / lineage:** INM-CM3.0 — INM atmospheric model at 5°×4° with 21 sigma levels + ocean model at 2.5°×2° with 33 layers. Successor: INM-CM4 (CMIP5).
- **Primary documentation paper(s):** Volodin, E.M. & Diansky, N.A. (2004). El-Niño reproduction in coupled general circulation model of atmosphere and ocean. *Russian Meteorology and Hydrology* 12, 5–14 (in Russian; English abstract available). PCMDI CMIP3 model documentation (primary 20C3M forcing source — both HTML and PDF confirmed): https://pcmdi.llnl.gov/ipcc/model_documentation/INM_CM3.0.htm *(note: URL uses underscore INM_CM3.0, not hyphen)*; PDF: https://pcmdi.llnl.gov/ipcc/model_documentation/INM_CM3.0.pdf
- **Forcing-specific reference(s):** PCMDI/LLNL 4ARForcing dataset (ftp://sprite.llnl.gov/pub/covey/IPCC_4AR_Forcing/, file PCM1_A1.nc) — GHG + solar time series; Wang et al. 1995 (*Atmos. Res.* 37:247–256) — AMIP II ozone climatology

## Forcing datasets used (historical / 20C3M) — documented from primary sources (no Table S1)

`Table S1` = n/a (model not in Table S1). `Verdict` column records primary-source finding.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Finding | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs (CO2, CH4, N2O, CFCs) | n/a | TV (partial — CFCs excluded) | TV (CO2, CH4, N2O only) | **CO2, CH4, N2O** — time-varying from 4ARForcing file **PCM1_A1.nc**, with linear time interpolation. **CFC-11 and CFC-12 NOT included.** PCMDI verbatim: *"Temporal changes of CO2, CH4, N2O, Solar constant were taken from 4ARForcing (file PCM1_A1.nc) ... Linear interpolation in time ... CFC11, CFC-12 are not taken into account."* | PCMDI INM_CM3.0.htm §V.C; INM_CM3.0.pdf (confirmed verbatim in PDF) | volodin_elnino_2004 | CFCs excluded — simpler GHG set than most CMIP3 models; same 4ARForcing repository as IAP |
| O  | Ozone (tropo + strato) | n/a | FX-clim | FX-clim (AMIP II monthly) | **Fixed AMIP II ozone climatology** (Wang et al. 1995). PCMDI verbatim: *"Ozone changes were not taken into account, Ozone monthly climatology was prescribed as for AMIP II (Wang et al, 1995)."* Ozone is NOT time-varying. | PCMDI INM_CM3.0.htm; Wang et al. 1995 | volodin_elnino_2004; wang_amip_1995 | Same AMIP II ozone (Wang 1995) as CCCma CGCM3.1, CSIRO Mk3; third centre confirmed using this climatology |
| SD | Sulphate aerosol — direct | n/a | TV (direct only) | TV (2-D burden, time-varying) | Time-varying **2-dimensional sulfate burden** from 4ARForcing dataset, linearly interpolated. PCMDI verbatim: *"Sulfate aerosol changes were used from 2-dimensional data in 4ARForcing (burden) ... Sulfate and volcanic aerosols, no indirect effect."* | PCMDI INM_CM3.0.htm; INM_CM3.0.pdf | volodin_elnino_2004 | Same 4ARForcing repository as IAP sulphate; direct effect only confirmed |
| SI | Sulphate aerosol — indirect | n/a | n/a | n/a | **No indirect effect.** PCMDI verbatim: *"no indirect effect."* | PCMDI INM_CM3.0.htm | volodin_elnino_2004 | |
| BC | Black carbon | n/a | n/a (by absence) | n/a | Not listed in 20C3M forcing agents | PCMDI INM_CM3.0.htm | — | Support by absence |
| OC | Organic carbon | n/a | n/a (by absence) | n/a | Not listed | PCMDI INM_CM3.0.htm | — | |
| MD | Mineral dust | n/a | n/a (by absence) | n/a | Not listed | PCMDI INM_CM3.0.htm | — | |
| SS | Sea salt | n/a | n/a (by absence) | n/a | Not listed | PCMDI INM_CM3.0.htm | — | |
| LU | Land-use change | n/a | n/a (by absence) | n/a | Not listed | PCMDI INM_CM3.0.htm | — | |
| SO | Solar irradiance | n/a | TV | TV | **Time-varying solar constant** from 4ARForcing file **PCM1_A1.nc** — same file and linear-interpolation protocol as CO2/CH4/N2O. PCMDI verbatim: *"Temporal changes of CO2, CH4, N2O, Solar constant were taken from 4ARForcing (file PCM1_A1.nc)."* | PCMDI INM_CM3.0.htm; INM_CM3.0.pdf | volodin_elnino_2004 | Solar varies with the same dataset as GHGs — time-varying. Contrast with BCCR/IAP (fixed solar constant) and CNRM/IPSL (fixed solar constant). INM applied genuine solar variability. |
| VL | Volcanic aerosols | n/a | ~ unclear | ? | OPEN. The INM PCMDI PDF quotes a volcanic aerosol file (*pcm_volcanic_1890-2000_T42.nc*) in the 20C3M section alongside sulphate, and the forcing list states *"Sulfate and volcanic aerosols."* However, the standalone claim that INM applied time-varying volcanic aerosols was adversarially refuted (0-1). Mark as ~ unclear pending re-read of the PCMDI PDF volcanic section. | PCMDI INM_CM3.0.pdf (volcanic file referenced); adversarial refute | volodin_elnino_2004 | PCMDI PDF evidence suggests VL=Y but the claim did not survive 1-vote verify; needs explicit confirmation |
| FC | Flux corrections (F/H) | n/a | ~ unclear | ? | Not documented in consulted sources; neither confirmed nor ruled out | PCMDI INM_CM3.0.htm | — | |

### Summary of 20C3M forcing set
INM-CM3.0 applied: time-varying CO2/CH4/N2O (no CFCs) + time-varying solar (PCM1_A1.nc) + time-varying sulphate direct (2-D burden, 4ARForcing) + fixed AMIP II ozone climatology. Volcanic aerosols referenced but verdict unclear. No indirect aerosol effect.

### Open questions
1. **VL**: Does the INM PCMDI PDF explicitly state time-varying volcanic aerosols from pcm_volcanic_1890-2000_T42.nc in the 20C3M section? If confirmed, VL=TV; this would make INM one of the more complete natural-forcing models alongside MIROC, HadGEM1, NCAR.
2. **FC**: Was flux correction applied? Not documented in primary sources consulted.
3. **CFCs excluded**: Does this mean the GHG radiative forcing is weaker than other models? The PCM1_A1.nc file may have included CFC forcing already folded into the CO2-equiv, or it may genuinely be absent.

## Provenance
- Table S1 row: n/a (model not in Table S1)
- Sources consulted: PCMDI INM_CM3.0.htm and INM_CM3.0.pdf (primary — verbatim quotes for GHG/solar/ozone/sulphate confirmed in both; URL uses underscore, not hyphen); Volodin & Diansky 2004 *Russian Meteorology and Hydrology* (model description in Russian; English abstract)
- Stage 10 adversarial workflow: wf_736d8594-819; G/O/SD/SI/SO confirmed high confidence from PCMDI primary sources.
- Key quote (PCMDI §V.C): *"Temporal changes of CO2, CH4, N2O, Solar constant were taken from 4ARForcing (file PCM1_A1.nc). ... Linear interpolation in time was used to obtain instantaneous values of these values."*
- Key quote (PCMDI §V.C): *"Ozone changes were not taken into account, Ozone monthly climatology was prescribed as for AMIP II (Wang et al, 1995)."*
- Key quote (PCMDI §V.C): *"Sulfate aerosol changes were used from 2-dimensional data in 4ARForcing (burden). ... Sulfate and volcanic aerosols, no indirect effect."*
- Key quote (PCMDI §V.C): *"CFC11, CFC-12 are not taken into account."*
