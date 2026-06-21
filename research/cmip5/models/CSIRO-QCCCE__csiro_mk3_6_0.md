# csiro_mk3_6_0 — CSIRO-QCCCE (CSIRO + Queensland Climate Change Centre of Excellence, Australia)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** csiro_mk3_5 (CSIRO-Mk3.5) — in the Mark lineage
- **Model family / lineage:** CSIRO-Mk3.5 (CMIP3) → CSIRO-Mk3.6.0 (CMIP5). Spectral AGCM (R63L18 = T63-equivalent, 18 pressure levels). Independent lineage from ACCESS. Has a sulfate aerosol scheme but not clear if it's interactive or prescribed. Ozone treatment is a key question — may use a CSIRO-specific dataset rather than Cionni2011.
- **Atmosphere / ocean components:** CSIRO-AGCM (R63L18 spectral) + MOM2.2 ocean + MOSES2.2 land + sea ice
- **Primary documentation paper(s):** Jeffrey, S., et al. (2013). Australia's CMIP5 submission using the CSIRO-Mk3.6.0 model. *Aust. Meteorol. Oceanogr. J.* 63(1), 1–13. doi:10.22499/2.6301.001 [jeffrey_australia_2013 *(add)*]
- **Forcing-specific reference(s):** Jeffrey et al. 2013

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std | TV | Meinshausen2011 (implied by "all forcings time-varying unless specified"; LU is the only stated exception) | — | meinshausen_rcp_2011 | Not explicitly quoted from primary source |
| O  | Ozone | Cionni et al. 2011 | ✓std | TV | Cionni et al. 2011 (AC&C/SPARC) — "Ozone concentrations are based on the AC&C/SPARC ozone database (Cionni et al., 2011)" | Syktus et al. 2011 (MODSIM2011); Jeffrey et al. 2013 | jeffrey_australia_2013 *(add)* | Confirmed 1-0 high conf; verbatim quote from Syktus2011 PDF; corroborated by Collier/Jeffrey2013 (historicalNoOz started 1950 = changes prior to 1950 negligible; main run carried TV ozone) |
| SD | Sulphate direct | Lamarque et al. 2010 | ✓exc | TV+ | Interactive prognostic sulfate via Rotstayn et al. 2010 scheme; SO4 tracer driven by Lamarque 2010 anthropogenic emissions | Syktus et al. 2011; Rotstayn et al. 2010/2012 | rotstayn_aerosol_2010 *(add)* | Confirmed 1-0 high conf; Syktus2011: "Prescribed anthropogenic and biomass burning sources of sulfur…are based on the recommended data sets for CMIP5 (Lamarque et al., 2010)" — 'Prescribed' modifies emission sources, not OD; OD computed online by interactive scheme |
| SI | Sulphate indirect | Model-dependent | ✓exc | TV+ | First indirect (cloud albedo) effect via Rotstayn2010 interactive scheme | Syktus et al. 2011; Rotstayn et al. 2010 | rotstayn_aerosol_2010 *(add)* | Confirmed 1-0 high conf; Collier/Jeffrey2013: "most important improvement…inclusion of an interactive aerosol scheme…required update to the radiation scheme" — cloud-aerosol interaction included |
| BC | Black carbon | Lamarque et al. 2010 | ✓exc | TV+ | Interactive prognostic BC via Rotstayn2010 scheme; Lamarque2010 anthropogenic+biomass burning emissions | Syktus et al. 2011 | rotstayn_aerosol_2010 *(add)* | Confirmed 1-0 high conf; 11-tracer scheme includes hydrophobic+hydrophilic BC |
| OC | Organic carbon | Lamarque et al. 2010 | ✓exc | TV+ | Interactive prognostic OC via Rotstayn2010 scheme; Lamarque2010 anthropogenic+biomass burning emissions | Syktus et al. 2011 | rotstayn_aerosol_2010 *(add)* | Confirmed 1-0 high conf; 11-tracer scheme includes hydrophobic+hydrophilic OC |
| MD | Mineral dust | — | ✓exc | TV+ | Interactive prognostic mineral dust (4 size bins) via Rotstayn2010 scheme; natural emission computed online | Syktus et al. 2011 | rotstayn_aerosol_2010 *(add)* | Confirmed 1-0 high conf; Syktus2011: scheme treats "sulfate, dust, sea salt and carbonaceous aerosol"; dust 4 size bins online |
| SS | Sea salt | — | ✓exc | TV+ | Interactive prognostic sea salt via Rotstayn2010 scheme; natural emission computed online | Syktus et al. 2011 | rotstayn_aerosol_2010 *(add)* | Confirmed 1-0 high conf; natural emissions (DMS, dust, sea salt) computed online |
| LU | Land-use change | Hurtt et al. 2011 | ✗dev | n/a | Explicitly excluded — "Changes in land cover and use are not included" (Syktus2011; Collier2011) | Syktus et al. 2011; Collier et al. 2011 | jeffrey_australia_2013 *(add)* | Confirmed 1-0 high conf; this is a genuine deviation from Taylor 2012 protocol (no Hurtt2011); independent literature corroboration confirmed |
| SO | Solar irradiance | Wang et al. 2005 | ~dev | TV | Lean (2000) — "11-year solar cycle and changes in background irradiance" (Syktus2011) — NOT Wang2005 | Syktus et al. 2011 | lean_2000 | Confirmed 1-0 medium conf; Lean 2000 and Wang/Lean/Sheeley 2005 are same TSI reconstruction lineage — this may be a citation-vintage difference rather than substantively different forcing |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ~dev/std? | TV | Sato et al. (1993) — "CMIP5 did not provide a dataset for volcanic forcing…stratospheric sulfate…based on Sato et al. (1993)" (Syktus2011) | Syktus et al. 2011 | sato_volcanic_1993 | Confirmed 1-0 medium conf; Sato1993 is the original reference for the same GISS stratospheric aerosol dataset lineage that Taylor2012 references as "Sato updated" — likely same data, different citation vintage |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | Free-running coupled model |

### ESM-specific forcing inputs
Not an ESM. Standard 12 keys only.

### Key aerosol scheme note
Rotstayn et al. 2010 interactive aerosol scheme carries **11 prognostic mass tracers**: DMS, SO₂, sulfate, hydrophobic BC, hydrophilic BC, hydrophobic OC, hydrophilic OC, and four mineral dust size bins. This is the "by far the most important improvement" over CSIRO-Mk3.5 predecessor (Collier/Jeffrey et al. 2013). Scheme EXCEEDS the Taylor 2012 standard (prescribed Lamarque2010 OD) by computing aerosol optical depths online from prognostic mass fields + Lamarque2010 anthropogenic emission inputs + online natural emission sources.

### Confirmed deviations from Taylor 2012
1. **LU = ✗dev**: Land-use change explicitly excluded. Taylor 2012 standard = Hurtt et al. 2011 time-varying transitions. CSIRO-Mk3.6.0 does not apply LU.
2. **SD/SI/BC/OC/MD/SS = ✓exc**: Interactive aerosols from Rotstayn2010 scheme exceed prescribed-OD standard. This is an exceedance, not a deviation in the failure sense.
3. **SO = ~dev (medium conf)**: Lean2000 cited instead of Wang2005; both are the same underlying TSI reconstruction lineage.
4. **VL = ~dev/std? (medium conf)**: Sato1993 cited instead of "Sato updated"; likely same GISS stratospheric aerosol dataset at different vintage.

### Provenance
- Durack et al. 2016 model list: included
- Stage 5 workflow: wf_6a1942cb-0da (2026-06-21) — O confirmed 1-0 high conf (Syktus2011 verbatim); SD/SI/BC/OC/MD/SS confirmed 1-0 high conf (Rotstayn2010 interactive); LU confirmed 1-0 high conf (explicitly excluded); SO/VL confirmed 1-0 medium conf
