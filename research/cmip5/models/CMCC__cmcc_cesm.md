# CMCC-CESM — CMCC (Centro Euro-Mediterraneo sui Cambiamenti Climatici, Italy)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — CMCC is a new CMIP5 entrant
- **Model family / lineage:** CMCC Carbon Earth System Model. Low-top (L39, ~30 hPa) ECHAM5-based ESM with interactive ocean biogeochemistry (BFMv2/PELAGOS) and land carbon cycle (SILVA). **COMPONENT CORRECTION (2026-06-21): Initial seed file incorrectly listed NEMO3.2 (ocean) and CLM3.5 (land) — these are post-CMIP5 CMIP6-era components. Correct CMIP5 components are OPA8.2 (ORCA2) and SILVA.** No interactive atmospheric chemistry — MOZART-3 is absent (refuted by all accessible documentation).
- **Atmosphere / ocean components:** ECHAM5 (T31L39) + OPA8.2 (ORCA2) + SILVA + LIM2 + BFMv2 (PELAGOS ocean BGC)
- **Primary documentation paper(s):**
  - Fogli, P.G., et al. (2009). INGV-CMCC Carbon (ICC): A Carbon Cycle Earth System Model. CMCC Research Papers RP0061. [fogli_ingv_2009 *(add)*] — describes CMCC-CESM architecture; grey literature, not a peer-reviewed journal paper
  - Vichi, M., et al. (2011). Global and regional ocean carbon uptake and climate change: Sensitivity to a substantial mitigation scenario. *Clim. Dyn.* 37, 1929–1947. doi:10.1007/s00382-011-1079-0 [vichi_global_2011 *(add)*]
- **Forcing-specific reference(s):** No primary forcing documentation found; Fogli 2009 tech report (behind paywall) needed

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | **✗ dev** | TV | **ENSEMBLES multi-model experiment GHG concentrations** (Johns et al. 2011; data at http://www.cnrm.meteo.fr/ensembles/public/model_simulation.html), NOT Meinshausen2011. Vichi2011: "The well-mixed GHGs and the sulphate aerosols used in the preindustrial and historical runs are the annually prescribed observation-based concentrations available from the ENSEMBLES multi-model experiment (Johns et al. 2011)." | Vichi et al. 2011 | vichi_global_2011 *(add)* | **Deviation confirmed.** Stage D 2026-06-22. |
| O  | Ozone | Cionni et al. 2011 | **✗ dev** | FXc | **Fixed monthly zonal ozone climatology** (T31_o3clim2.nc; Fogli2009 input file list), NOT time-varying Cionni2011. CMCC-CESM absent from Eyring2013 Table 1 (consistent with non-standard ozone). | Fogli et al. 2009 | fogli_ingv_2009 *(add)* | **Deviation confirmed.** Fogli2009 auxiliary files: "T31_o3clim2.nc — Ozone monthly zonal climatology (unit.21)". Stage D 2026-06-22. |
| SD | Sulphate direct | Lamarque et al. 2010 OD | **✗ dev** | TV | **ENSEMBLES annual sulphate aerosol concentrations** (T31_so4_YYYY.nc; Fogli2009 input file; sourced from ENSEMBLES Johns et al. 2011/cnrm.meteo.fr), NOT Lamarque2010-OD. Natural background from T31_so4_nat_clim.nc (fixed climatology). Vichi2011 identifies "Boucher & Pham 2002" sulphate for A1B future scenario. | Vichi et al. 2011; Fogli et al. 2009 | vichi_global_2011 *(add)*; fogli_ingv_2009 *(add)* | **Deviation confirmed.** Stage D 2026-06-22. |
| SI | Sulphate indirect | Model-dependent | **✗ dev** | n/a | Not applied — ECHAM5 T31 without HAM has no two-moment microphysics; no indirect aerosol effect files in Fogli2009 input list. | Fogli et al. 2009 | fogli_ingv_2009 *(add)* | **Deviation confirmed** (not applied). Stage D 2026-06-22. |
| BC | Black carbon | Lamarque et al. 2010 | **✗ dev** | n/a | Not applied separately — ECHAM5 T31 without HAM uses sulphate-only aerosol scheme; no BC forcing file in Fogli2009 input list. | Fogli et al. 2009 | fogli_ingv_2009 *(add)* | **Deviation confirmed** (not applied). Stage D 2026-06-22. |
| OC | Organic carbon | Lamarque et al. 2010 | **✗ dev** | n/a | As BC — not applied; no OC forcing file in Fogli2009 input list. | Fogli et al. 2009 | fogli_ingv_2009 *(add)* | **Deviation confirmed** (not applied). Stage D 2026-06-22. |
| MD | Mineral dust | — | **✗ dev** | FXc | Not applied as a time-varying forcing. Fogli2009 input files include T31_so4_nat_clim.nc (fixed natural SULPHATE background only) but no dust file. ECHAM5 T31 without HAM has no prognostic dust. **ESM note:** PELAGOS iron cycle requires dust/iron deposition input — exact dataset unconfirmed. | Fogli et al. 2009 | fogli_ingv_2009 *(add)* | **Deviation confirmed** (fixed background at best, dust species absent from explicit forcing). Stage D 2026-06-22. |
| SS | Sea salt | — | **✗ dev** | FXc | Not applied as a time-varying forcing; no sea salt forcing file in Fogli2009 input list. Fixed background only (ECHAM5 default). | Fogli et al. 2009 | fogli_ingv_2009 *(add)* | **Deviation confirmed** (not applied). Stage D 2026-06-22. |
| LU | Land-use change | Hurtt et al. 2011 | **✗ dev** | n/a | Not applied as time-varying forcing. Fogli2009 vegetation input files are all fixed climatologies (T31_VLTCLIM.nc, T31_VGRATCLIM.nc, T31_TSLCLIM.nc — all "CLIM" = climatologies); no time-varying land-use file. | Fogli et al. 2009 | fogli_ingv_2009 *(add)* | **Deviation confirmed** (not applied; fixed vegetation). Stage D 2026-06-22. |
| SO | Solar irradiance | Wang et al. 2005 | ~ | ? | Likely not applied with time variation. Vichi2011: "The INGV-CMCC-CE simulations were performed without any variation in natural forcings (solar and volcanic)." Applies to all INGV-CMCC-CE simulations. No solar forcing file in Fogli2009 input list. CAVEAT: Vichi2011 describes ENSEMBLES experiments (1860–1999), not specifically CMIP5 historical — CMIP5 submission may differ. | Vichi et al. 2011 | vichi_global_2011 *(add)* | **Likely ✗dev** (no natural forcing variation). Stage D 2026-06-22. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ~ | ? | As SO — Vichi2011: "without any variation in natural forcings (solar and volcanic)." No volcanic forcing file in Fogli2009 input list. Same CAVEAT as SO. | Vichi et al. 2011 | vichi_global_2011 *(add)* | **Likely ✗dev** (no natural forcing variation). Stage D 2026-06-22. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running ESM | — | — | |

### ESM-specific forcing inputs

| ESM input | Expected source | Status | Notes |
|-----------|----------------|--------|-------|
| N-deposition (NHx/NOy) | Lamarque et al. 2010 or 2013 ACCMIP | ? unconfirmed | Drives SILVA and PELAGOS nitrogen cycling; not named in Vichi2011 or Fogli2009 |
| CO2 mode | Concentration-driven | **confirmed** | Vichi2011: "prescribed atmospheric 'target' concentrations" — ESM run with prescribed CO2 concentrations. Historical run uses ENSEMBLES CO2 concentrations (time-varying prescribed). |
| Iron/dust deposition (PELAGOS) | Unknown | ? unconfirmed | PELAGOS iron cycle requires dust/iron input; Fogli2009 has no dust forcing file; Vichi2011 does not name an iron deposition dataset. Fixed dust background or absent. |
| Atmospheric chemistry inputs (NOx/VOC/CO) | Not applicable — MOZART-3 absent | **refuted** | MOZART-3 interactive chemistry is absent; no chemistry inputs apply |

### Component corrections (2026-06-21)
The seed file incorrectly listed NEMO3.2 (ocean) and CLM3.5 (land). Stage 11 workflow confirmed:
- **Ocean:** OPA8.2 (ORCA2) — NOT NEMO3.2 (NEMO integration is post-CMIP5 development: Fogli & Iovino 2014, CMCC RP0248)
- **Land:** SILVA — NOT CLM3.5
- **BGC:** BFMv2 (Biogeochemical Flux Model, PELAGOS-based)
- **Chemistry:** None — MOZART-3 absent (refuted by CMCC official ESM page, IS-ENES, and WDCC metadata)

### historicalMisc experiments
CMCC-CESM did NOT submit historicalMisc (single-forcing attribution) experiments to CMIP5. Confirmed by ESGF search (numFound=0).

### Confirmed deviations from Taylor 2012 (Stage D 2026-06-22)
1. **G = ✗dev**: ENSEMBLES GHG concentrations (Johns et al. 2011), NOT Meinshausen2011. Vichi2011 verbatim.
2. **O = ✗dev**: Fixed monthly ozone climatology (T31_o3clim2.nc), NOT time-varying Cionni2011. Fogli2009 input file list.
3. **SD = ✗dev**: ENSEMBLES annual sulphate concentrations (T31_so4_YYYY.nc), NOT Lamarque2010-OD. Vichi2011 + Fogli2009.
4. **SI = ✗dev (n/a)**: No indirect aerosol effect — ECHAM5 T31 without HAM; no indirect files in Fogli2009.
5. **BC = ✗dev (n/a)**: Not applied — no BC file in Fogli2009 input list; sulphate-only ECHAM5.
6. **OC = ✗dev (n/a)**: Same as BC.
7. **MD = ✗dev (FXc)**: No time-varying dust; T31_so4_nat_clim.nc is natural sulphate background only.
8. **SS = ✗dev (n/a)**: No sea salt file; fixed background only.
9. **LU = ✗dev (n/a)**: No time-varying land-use; vegetation files are fixed climatologies only (Fogli2009).
10. **SO = ~ (likely ✗dev)**: Vichi2011 "without any variation in natural forcings (solar and volcanic)" for all INGV-CMCC-CE simulations; no solar file in Fogli2009.
11. **VL = ~ (likely ✗dev)**: Same as SO.

## Open questions
1. SO/VL: Whether natural forcing variation was added for the CMIP5 historical submission (vs. ENSEMBLES experiments described by Vichi2011). Fogli2009 input file list supports the same design.
2. Iron/dust deposition dataset for PELAGOS iron cycle — absent from Fogli2009 and Vichi2011; likely fixed background or absent.
3. N-deposition dataset for SILVA/PELAGOS nitrogen cycling — not named in available sources.

## Provenance
- Durack et al. 2016 model list: included (row 45)
- Stage 11 workflow: wf_89572b47-8df (2026-06-21); component corrections applied; MOZART-3 refuted; all forcing cells ? after Stage 11
- Stage D 2026-06-22: Fogli2009 (CMCC RP0061) downloaded from cmcc.it and extracted via pdfminer; Vichi2011 PDF extracted. G/SD=✗dev(ENSEMBLES); O=✗dev(fixed-clim); SI/BC/OC=✗dev(not-applied); MD/SS=✗dev(fixed-background); LU=✗dev(no-TV-LU); CO2-mode=conc-driven; SO/VL=~(Vichi2011-no-natural-forcing-variation)
