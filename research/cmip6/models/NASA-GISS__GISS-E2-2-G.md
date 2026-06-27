<!-- CMIP6 forcing record — GISS-E2-2-G (NASA-GISS). Created 2026-06-22; Stage 2 workflow: wf_3520e866-fd8 -->

# GISS-E2-2-G — NASA Goddard Institute for Space Studies, USA

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **CMIP5 predecessor:** No direct predecessor (ModelE2.2 is a new middle-atmosphere configuration)
- **Model family / lineage:** ModelE2.2 atmosphere (L102, model top 0.002 hPa — substantially higher than E2.1's L40/0.1 hPa) + GISS Ocean v1. QBO-resolving vertical resolution.
- **Atmosphere / ocean components:** ModelE2.2 L102 top 0.002 hPa / GISS Ocean v1 (Russell)
- **Primary documentation paper(s):** Rind et al. 2020, *JGR-Atmospheres* doi:10.1029/2019JD032204 [rind_giss_e22_2020]
- **Forcing-specific reference(s):** Rind et al. 2020 JGR doi:10.1029/2019JD032204; Orbe et al. 2020 JGR doi:10.1029/2020JD033151

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

**E2.2 ozone treatment CONFIRMED ✗dev.** The coupled historical CMIP6 submission uses NINT (noninteractive chemistry) mode. Rind et al. 2020 (sec. 2.1) confirms the coupled model "utilizes trace gases and climate forcings saved from the 'OMA' simulation"; Orbe et al. 2020 (sec. 2.1, Table 1) confirms "all DECK simulations… for the case of the coupled atmosphere-ocean model utilizing non-interactive (NINT) chemistry." Ozone is thus prescribed from GISS OMA offline fields, not from CCMI standard datasets. Aerosols (SD/BC/OC/MD/SS) are also from OMA, the GISS center-specific one-moment aerosol scheme.

| Key | Forcing | Protocol (Eyring 2016) | input4MIPs source_id | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2017 | `UoM-CMIP-1-2-0` | ? | TV | Expected standard | — | — | |
| O  | Ozone | Checa-Garcia et al. 2018 (CCMI v1.0) | `UReading-CCMI-1-0` | ✗dev | TV | Prescribed offline from GISS OMA simulation (NINT coupled mode); not CCMI standard. Confirmed: Rind et al. 2020 sec. 2.1; Orbe et al. 2020 sec. 2.1 + Table 1 | Rind et al. 2020; Orbe et al. 2020 | [rind_giss_e22_2020] | Parallel to E2-1-G ✗dev pattern. OMA AMIP uses interactive chemistry but the CMIP6 coupled historical submission uses NINT offline-OMA ozone. |
| SD | Aerosol — sulphate direct | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | GISS OMA (one-moment aerosol) center-specific scheme; aerosol fields from OMA simulation saved for NINT coupled run | Rind et al. 2020 sec. 2.1 | [rind_giss_e22_2020] | |
| SI | Aerosol — sulphate indirect | — | — | ~ | TV | As SD — OMA scheme; indirect effects computed within OMA framework | Rind et al. 2020 sec. 2.1 | [rind_giss_e22_2020] | |
| BC | Black carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | GISS OMA scheme; BC from OMA offline fields | Rind et al. 2020 sec. 2.1 | [rind_giss_e22_2020] | |
| OC | Organic carbon | CEDS + BB4CMIP6 | `CEDS-2017-05-18` + `VUA-CMIP-BB4CMIP6-1-2` | ~ | TV | GISS OMA scheme; OC from OMA offline fields | Rind et al. 2020 sec. 2.1 | [rind_giss_e22_2020] | |
| MD | Mineral dust | — | — | ~ | TV | GISS OMA scheme; dust from OMA offline fields | Rind et al. 2020 sec. 2.1 | [rind_giss_e22_2020] | |
| SS | Sea salt | — | — | ~ | TV | GISS OMA scheme; sea salt from OMA offline fields | Rind et al. 2020 sec. 2.1 | [rind_giss_e22_2020] | |
| LU | Land-use change | Hurtt et al. 2020 LUH2 v2.1h | `UofMD-landState-2-1-h` | ? | TV | Expected standard | — | — | |
| SO | Solar irradiance | Matthes et al. 2017 | `SOLARIS-HEPPA-3-2` | ? | TV | Expected standard | — | — | |
| VL | Volcanic aerosols | IACETH SAGE3λ v3.0.0 | `IACETH-SAGE3lambda-3-0-0` | ? | TV | Unresolved (as for E2.1) | — | — | |
| FC | Flux corrections | Not expected | — | n/a | n/a | None | — | — | |

### Supplemental / non-input4MIPs forcings

| Key | Forcing | Source / filename | Replaces or augments? | Notes |
|-----|---------|------------------|-----------------------|-------|
| O | Ozone | GISS OMA offline fields (from OMA simulation) | Replaces CCMI standard | Confirmed NINT mode for coupled historical CMIP6 submission |
| SD/SI/BC/OC/MD/SS | Aerosols | GISS OMA offline fields | Replaces standard input4MIPs datasets | OMA one-moment aerosol scheme; fields saved from OMA run and prescribed in NINT coupled model |

### Architectural note: E2.1 vs E2.2 key difference
- E2.1: L40, model top ~0.1 hPa — no self-generated QBO; prescribes ozone from OMA (NINT) — ✗dev confirmed
- **E2.2: L102, model top 0.002 hPa** — self-generated QBO in OMA AMIP mode. However the CMIP6 coupled historical submission uses NINT mode (offline OMA forcing), so the QBO capability does NOT translate to interactive ozone/aerosol forcing in the coupled run.
- Note: Orbe et al. 2020 notes interactive (OMA coupled) versions "currently processing" as of 2020 but those were not the CMIP6 historical submissions.

### Deviations from Eyring 2016 standard protocol
- **O**: ✗dev — ozone prescribed from GISS OMA offline fields, not CCMI standard dataset
- **SD/SI/BC/OC/MD/SS**: ~ — aerosols from GISS OMA center-specific scheme, not standard CMIP6 input4MIPs

## Open questions
1. **G, LU, SO, VL**: Not mentioned in either primary paper (Rind 2020, Orbe 2020) — remain unverified (?). Kelley 2020 JAMES for E2-1-G may document the CMIP6 standard datasets shared between E2.1 and E2.2.

## Provenance
- Sources: Rind et al. 2020 (doi:10.1029/2019JD032204); data.giss.nasa.gov/modelE/cmip6/
- Stage workflow run ID: wf_3520e866-fd8 (2026-06-22; partial findings)

## Notes
- Schmidt et al. 2014 (JAMES doi:10.1002/2013MS000265) and Miller et al. 2014 (JAMES doi:10.1002/2013MS000266) were read in full. Both papers describe GISS-E2-R/H (CMIP5, L40/0.1 hPa) only. Neither paper references GISS-E2-2-G, ModelE2.2, or CMIP6. All CMIP5 forcings use pre-CMIP6 datasets (Wang et al. 2005 solar, Sato et al. 1993 volcanic, Lamarque et al. 2010 CMIP5 emissions, Hansen 2007 GHGs, HYDE3.0 land use). These papers provide lineage context only — no CMIP6 forcing verdicts can be assigned from them.
- Rind et al. 2020 JGR (doi:10.1029/2019JD032204) read in full. Section 2.1 explicitly describes the three E2.2 model configurations: (1) OMA = coupled atmosphere-chemistry with interactive aerosols and trace gases, used for AMIP; (2) Coupled = NINT mode with "trace gases and climate forcings saved from the OMA simulation," used for the CMIP6 coupled ocean historical/DECK submissions; (3) AMIP NINT. The CMIP6 coupled historical submission (GISS-E2-2-G.historical) uses configuration (2) — NINT with offline OMA forcing. This confirms O=✗dev and SD/SI/BC/OC/MD/SS=~ (OMA center-specific). G/LU/SO/VL not mentioned in this paper.
- Orbe et al. 2020 JGR (doi:10.1029/2020JD033151) read in full. Section 2.1 and Table 1 explicitly confirm: "all DECK simulations having thus far been submitted to ESGF, for the case of the coupled atmosphere-ocean model utilizing non-interactive (NINT) chemistry." Table 1 shows the CMIP6 archive tag GISS-E2-2-G.piControl.r1i1p1f1 and GISS-E2-2-G.historical uses NINT Coupled configuration. G/LU/SO/VL not mentioned in this paper.
