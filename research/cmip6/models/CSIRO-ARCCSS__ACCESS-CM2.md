<!-- CMIP6 forcing record — ACCESS-CM2 (CSIRO-ARCCSS). Stage 14 workflow: wf_915f8ce0-f07 (2026-06-26) -->

# ACCESS-CM2 — CSIRO-ARCCSS (Australia)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** UM GA7.1 atmosphere (N96L85, top ~85km) + NEMO3.6/ACCESS-OM2 ocean (1°) + CICE5.1 + CABLE2.0 land. AOGCM. **Byte-identical GA7.1 atmosphere to HadGEM3-GC31-LL** — differs only in land (CABLE2.0 vs JULES), ocean, and sea-ice components. No interactive chemistry.
- **CMIP5 predecessor:** ACCESS1.0 / ACCESS1.3
- **Atmosphere / ocean components:** MetUM-HadGEM3-GA7.1 (N96, 192×144, 85L, top 85 km) / NEMO3.6 ORCA1 + CICE5.1
- **Primary documentation paper(s):** Bi et al. 2020 (*JAMES* doi:10.1029/2020MS002138); also inherits: Walters et al. 2019 (*GMD* doi:10.5194/gmd-12-1909-2019); Mulcahy et al. 2020 (*GMD* doi:10.5194/gmd-13-6383-2020)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ✓std | TV | **Meinshausen et al. 2017** (UoM-CMIP-1-2-0). | Inherited GA7.1 lineage (HadGEM3-GC31-LL Stage 11) | Not directly verified for ACCESS-CM2. Inferred from byte-identical MetUM-HadGEM3-GA7.1 atmosphere. |
| O  | Ozone | ✓std | TV | **Hegglin et al. 2016 CCMI** prescribed ozone (UReading-CCMI-1-0 expected). GA7.1 ozone-redistribution scheme applied (thermal tropopause alignment). Not in Keeble 2021 interactive list. | Inherited GA7.1 lineage | Not directly verified for ACCESS-CM2. Inferred from byte-identical GA7.1 atmospheric configuration. |
| SD | Aerosol — sulphate direct | ✓std | TV | **UKCA-GLOMAP-mode** interactive prognostic aerosol consuming **CEDS (Hoesly 2018)** anthropogenic SO2 emissions. | Fiddes et al. 2025 (ACP); Mulcahy et al. 2020 | Fiddes 2025: "ACCESS-CM2 and ACCESS-AM2 include the modal aerosol module GLOMAP-mode" across five modes. WDC-Climate and WCRP CVs confirm aerosol component = UKCA-GLOMAP-mode. NOT the older CLASSIC scheme used in ACCESS-ESM1-5. |
| SI | Aerosol — sulphate indirect | ✓std | TV | **GLOMAP-mode** interactive indirect effects (first + second indirect). | Mulcahy et al. 2020 | Confirmed via GA7.1 aerosol stack inheritance. |
| BC | Black carbon | ✓std | TV | **GLOMAP-mode** consuming **CEDS (Hoesly 2018)** + **BB4CMIP6 (van Marle 2017)** biomass burning, BC/OC **scaled ×2** per Johnson et al. 2016. | Mulcahy et al. 2020; confirmed 1-0 in Stage 14 | Mulcahy 2020 (verbatim for GA7.1 lineage): "biomass burning emissions of BC and OC are scaled by a factor of 2 following...Johnson et al. (2016)." Confirmed as the GA7.1 standard for GLOMAP-mode models. Refuted claim: BB4CMIP6 attribution not GFED4s (GFED4s is for ACCESS-AM2 HighResMIP only). |
| OC | Organic carbon | ✓std | TV | As BC — GLOMAP-mode, CEDS+BB4CMIP6 biomass burning ×2. | Mulcahy et al. 2020 | |
| MD | Mineral dust | ＋exc | TV | **Woodward (2011) interactive prognostic dust scheme** in UM GA7.1 — simulated separately from GLOMAP-mode (which handles SO4/BC/OC/SS only). Dust is online and prognostic, not prescribed. | Bi et al. 2020 | Bi 2020 (verbatim): "mineral dust is not included in the GLOMAP-mode species and is simulated separately using the Woodward (2011) scheme." Also: "For ACCESS-CM2, the dust is properly included" (contrast to ACCESS1.3 CMIP5 where dust setting was incomplete). Interactive/online scheme = ＋exc. |
| SS | Sea salt | ✓std | TV | **GLOMAP-mode** interactive sea salt from wind-driven surface flux. | Walters et al. 2019; Mulcahy et al. 2020 | Sea salt is a prognostic GLOMAP-mode species in GA7.1. |
| LU | Land-use change | ✓std | TV | **LUH2 v2.1h** (Hurtt et al. 2020). | Inherited GA7.1 lineage | Not directly verified for ACCESS-CM2. Inferred from GA7.1 inheritance (replaces JULES land with CABLE2.0, but LUH2 forcing dataset expected to be identical). |
| SO | Solar irradiance | ✓std | TV | **Matthes et al. 2017** (SOLARIS-HEPPA-3-2). | Inherited GA7.1 lineage | Not directly verified for ACCESS-CM2. Inferred from byte-identical MetUM-HadGEM3-GA7.1 atmosphere. |
| VL | Volcanic aerosols | ✓std | TV | **IACETH-SAGE3lambda-3-0-0** (Thomason et al. 2018). Prescribed. | Inherited GA7.1 lineage | Not directly verified for ACCESS-CM2. Inferred from GA7.1 atmosphere. |
| FC | Flux corrections | n/a | n/a | None | | AOGCM — no ESM inputs. |

### Deviations from Eyring 2016 standard protocol
- **BC/OC = ✓std with calibration note**: BB4CMIP6 ×2 scaling per Johnson 2016 — same as HadGEM3-GC31-LL; a published calibration, not an arbitrary deviation.
- **MD = ＋exc**: Woodward (2011) interactive prognostic dust scheme in UM GA7.1; dust is online/prognostic, NOT the Kinne 2013 standard prescribed climatology. Dust is handled separately from GLOMAP-mode. ACCESS-CM2 CMIP6 fixed the incomplete dust of ACCESS1.3 CMIP5.
- **GA7.1 inheritance caveats**: G, O, LU, SO, VL inferred from byte-identical MetUM-HadGEM3-GA7.1 atmospheric configuration. Aerosol (SD/SI/BC/OC/SS) confirmed by independent sources. Land = CABLE2.0 (not JULES); ESM forcing datasets (if any) would differ.

## Notes
- **Bi et al. 2020 (JSHESS doi:10.1071/ES19040)** — primary ACCESS-CM2 configuration paper. Confirms: (1) GLOMAP-mode handles SO4/BC/OC/SS only; (2) mineral dust simulated separately via **Woodward (2011) scheme** (interactive, prognostic); (3) ACCESS-CM2 CMIP6 fixed the incomplete dust in ACCESS1.3 CMIP5 ("the dust is properly included"). PI forcing described in Section 3.1: standard CMIP6 GHG concentrations, ozone, solar, aerosol emissions (SO2/BC/OC), background volcanic aerosol confirmed. No explicit citation of Meinshausen/Hegglin dataset names — inherited from GA7.1/HadGEM3 lineage.
- **Bodman et al. 2020 (JSHESS doi:10.1071/ES19033)** — ACCESS-AM2 AMIP evaluation paper; describes AMIP forcing (prescribed SST/sea-ice + standard CMIP6 external forcing). Confirms GLOMAP-mode aerosol in ACCESS-AM2; consistent with ACCESS-CM2 aerosol configuration. No new dust information beyond Bi 2020.

## Provenance
- Stage 14 workflow run ID: wf_915f8ce0-f07 (2026-06-26); fully confirmed: SD/SI/BC/OC/SS/MD; inferred: G/O/LU/SO/VL; unresolved: none
- Key sources: Bi et al. 2020 (*JSHESS* doi:10.1071/ES19040, confirmed Woodward 2011 dust scheme for MD); Fiddes et al. 2025 (*ACP*, confirmed GLOMAP-mode for ACCESS-CM2); Mulcahy et al. 2020 (*GMD* doi:10.5194/gmd-13-6383-2020, GA7.1 aerosol); Walters et al. 2019 (*GMD* doi:10.5194/gmd-12-1909-2019); WDC-Climate CMIP6 metadata; WCRP CMIP6_CVs registry
- Cross-reference: [[MOHC__HadGEM3-GC31-LL]] Stage 11 (byte-identical atmosphere, GA7.1 lineage base)
