# cnrm_cm5_2 — CNRM (Centre National de Recherches Météorologiques, France)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** cnrm_cm3 (indirectly, via CNRM-CM5)
- **Model family / lineage:** CNRM-CM5-2 = CNRM-CM5.1 updated with interactive atmospheric chemistry module (MOCAGE). The "-2" suffix indicates the chemistry upgrade. Expected to EXCEED Taylor 2012 standard on O (and possibly aerosols) via MOCAGE interactive chemistry.
- **Atmosphere / ocean components:** ARPEGE-Climate 5.2 + MOCAGE chemistry + NEMO3.2 ocean + SURFEX land + GELATO sea ice
- **Primary documentation paper(s):** As CNRM-CM5 (Voldoire et al. 2013); plus Michou, M., et al. (2011) for MOCAGE integration. doi:10.1007/s00382-011-1259-y [voldoire_cnrm_2013 *(add)*]
- **Forcing-specific reference(s):** Voldoire et al. 2013; Michou et al. 2011 MOCAGE paper

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries inferred from CNRM-CM5 (same base; MOCAGE chemistry upgrade is the primary change). CNRM-CM5-2 was NOT separately documented in Stage 6 workflow — ozone and aerosol treatment vs CNRM-CM5 remains an open question.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ?std (inferred) | TV | As CNRM-CM5 (expected) | meinshausen_rcp_2011 | meinshausen_rcp_2011 | |
| O  | Ozone | Cionni et al. 2011 | ? exc (expected) | TV+ | MOCAGE full 3D interactive chemistry — expected to EXCEED standard; MOBIDIC replaced by MOCAGE in CM5-2. UNCONFIRMED from primary source. | — | — | Open question: does MOCAGE give O=exc? Expected yes but not confirmed from surviving Stage 6 claims |
| SD | Sulphate direct | Lamarque et al. 2010 | ✗dev (inferred) | TV | As CNRM-CM5 (LMDZ-INCA offline OD; inferred) OR interactive via MOCAGE? | voldoire_cnrm_2013 *(add)* | voldoire_cnrm_2013 *(add)* | Does MOCAGE also change the aerosol source? Not confirmed. |
| SI | Sulphate indirect | Model-dependent | ? (inferred) | ? | As CNRM-CM5 (inferred) | — | — | |
| BC | Black carbon | Lamarque et al. 2010 | ✗dev (inferred) | TV | As CNRM-CM5 (LMDZ-INCA offline OD; inferred) | voldoire_cnrm_2013 *(add)* | voldoire_cnrm_2013 *(add)* | |
| OC | Organic carbon | Lamarque et al. 2010 | ✗dev (inferred) | TV | As CNRM-CM5 (inferred) | — | — | |
| MD | Mineral dust | — | ✗dev (inferred) | FXc | As CNRM-CM5 (pre-industrial fixed; inferred) | — | — | |
| SS | Sea salt | — | ✗dev (inferred) | FXc | As CNRM-CM5 (Tegen1997-scaled; pre-industrial fixed; inferred) | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ✗dev (inferred) | n/a | As CNRM-CM5 (excluded; inferred) | — | — | |
| SO | Solar irradiance | Wang et al. 2005 | ? (inferred) | TV | As CNRM-CM5 (inferred; specific dataset unconfirmed) | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✗dev (inferred) | TV | As CNRM-CM5 (Ammann2007; inferred) | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Has interactive atmospheric chemistry (MOCAGE). Not a carbon-cycle ESM — chemistry inputs (NOx/VOC/CO from Lamarque2010) drive MOCAGE interactive ozone computation.

### Open questions
1. **O**: Does MOCAGE give O=exc (full 3D interactive chemistry)? Expected yes but NOT confirmed from Stage 6 workflow.
2. **Aerosols**: Does MOCAGE change the aerosol source (from LMDZ-INCA offline OD to MOCAGE interactive)? Not known.

### Provenance
- Durack et al. 2016 model list: included
- Stage 6 workflow: wf_affaeb54-772 (2026-06-21) — CNRM-CM5-2 NOT separately documented; all inferred from CNRM-CM5
