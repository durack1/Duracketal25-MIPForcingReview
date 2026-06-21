# CMCC-CMS — CMCC (Centro Euro-Mediterraneo sui Cambiamenti Climatici, Italy)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** none — CMCC is a new CMIP5 entrant
- **Model family / lineage:** CMCC Climate Model with a resolved Stratosphere. Same ECHAM5 base as CMCC-CM but with higher vertical resolution (T63L95 extending to ~0.01 hPa) to resolve stratospheric dynamics. No interactive chemistry. OPA8.2 (ORCA2) ocean, SILVA land, LIM2 sea ice. The lowtop (CMCC-CM, L31, ~10 hPa) vs. hightop (CMCC-CMS, L95, ~0.01 hPa) distinction physically requires different versions of the Cionni2011 ozone database — the lowtop C1modB variant used by CMCC-CM is NOT appropriate for CMCC-CMS.
- **Atmosphere / ocean components:** ECHAM5 (T63L95) + OPA8.2 (ORCA2) + SILVA + LIM2
- **Primary documentation paper(s):** Manzini, E., et al. (2006). The influence of sea surface temperatures on the Northern winter stratosphere: Ensemble simulations with the MAECHAM5 model. *J. Climate* 19, 3863–3881. doi:10.1175/JCLI3826.1 [manzini_influence_2006 *(add)*] — describes the high-top ECHAM5 (MAECHAM5) configuration underlying CMCC-CMS
- **Forcing-specific reference(s):** No primary CMCC-CMS-specific forcing documentation found; CMCC-CMS absent from Eyring et al. (2013) Table 1

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? | TV | Expected Meinshausen et al. 2011 by analogy with CMCC-CM; unconfirmed. No dedicated CMCC-CMS model description paper identified. | — | — | |
| O  | Ozone | Cionni et al. 2011 | ? | TV | CMCC-CMS absent from Eyring et al. (2013) Table 1 (confirmed by full PDF stream extraction). Contextual evidence suggests use of the **Cionni2011 hitop variant** — same dataset as MPI-ESM models and HadGEM2-CC — physically required by L95 vertical grid extending to 0.01 hPa. This is a physically distinct dataset from CMCC-CM's C1modB lowtop variant. Unverified: no Table 1 entry, no primary source | — | — | The CMCC-CM vs CMCC-CMS ozone claim (identical datasets) was REFUTED by the Stage 11 workflow |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ? | TV | By ECHAM5 analogy with CMCC-CM; unconfirmed | — | — | |
| SI | Sulphate indirect | Model-dependent | ? | ? | Likely not applied (ECHAM5 without two-moment microphysics); unconfirmed | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | Expected Lamarque et al. 2010; unconfirmed | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | Expected Lamarque et al. 2010; unconfirmed | — | — | |
| MD | Mineral dust | Model-dependent | ? | FXc | Expected Tanre 1984 climatology; unconfirmed | — | — | |
| SS | Sea salt | Model-dependent | ? | FXc | Likely fixed climatology per ECHAM5 default; unconfirmed | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? | TV | Expected Hurtt et al. 2011; unconfirmed | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | Expected Wang et al. 2005; unconfirmed. High-top configuration is more sensitive to solar UV in the stratosphere — dataset choice has larger dynamical consequences here than in lowtop CMCC-CM | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | Expected Sato et al. 1993 updated; unconfirmed. L95 vertical grid extends well into middle stratosphere; dataset must cover these levels | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied — free-running AOGCM | — | — | |

### ESM-specific forcing inputs
Not an ESM — CMCC-CMS is an AOGCM only. Standard 12 keys only.

### Key distinction from CMCC-CM
The claim that CMCC-CM and CMCC-CMS share identical forcing configurations was **REFUTED** by the Stage 11 workflow. The lowtop (L31, ~10 hPa) vs. hightop (L95, ~0.01 hPa) model-top difference physically requires different versions of the Cionni2011 ozone database:
- CMCC-CM uses C1modB (confirmed by Eyring 2013 Table 1) — lowtop-specific
- CMCC-CMS physically requires the hitop variant — pressure levels extend to 0.01 hPa
- The Zenodo AC&C/SPARC hitop ozone database (zenodo.org/records/1035142) is a distinct product

### historicalMisc experiments
CMCC-CMS did NOT submit historicalMisc (single-forcing attribution) experiments to CMIP5. Confirmed by ESGF search (numFound=0).

## Open questions
1. O: hitop Cionni2011 variant strongly inferred but unconfirmed — needs CMCC-CMS forcing documentation.
2. All aerosol, G, LU, SO, VL cells unconfirmed.
3. No dedicated CMCC-CMS model description paper identified — may exist as a CMCC technical report.

## Provenance
- Durack et al. 2016 model list: included (row 47)
- Sources consulted: Eyring et al. 2013 (JGR 118:5029-5060, doi:10.1002/jgrd.50316) Table 1 — confirms CMCC-CMS absent; Zenodo hitop ozone record (zenodo.org/records/1035142); Manzini et al. 2006 (JCLI doi:10.1175/JCLI3826.1)
- Stage 11 workflow: wf_89572b47-8df (2026-06-21); lowtop/hitop ozone distinction refuted identical-forcing claim; all forcing cells remain ?
