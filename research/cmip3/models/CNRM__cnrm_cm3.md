# cnrm_cm3 — CNRM (Centre National de Recherches Météorologiques, France)

- **CMIP phase:** CMIP3 (20C3M)
- **Model family / lineage:** CNRM-CM3 (ARPEGE-Climat atmosphere + NEMO ocean) → CNRM-CM5 (CMIP5) → CNRM-CM6-1 (CMIP6)
- **Primary documentation paper(s):** Salas-Mélia et al. 2005 (*Note de Centre CNRM/GMGEC no. 103*); Déqué et al. 1994 (ARPEGE atmosphere)
- **Forcing-specific reference(s):** Boucher & Pham 2002 (*GRL* doi:10.1029/2001GL014048) — sulphate aerosol direct effect; ENSEMBLES GHG protocol (J-F Royer, CNRM); PCMDI CMIP3 documentation page (primary cross-check source)

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | Annual global GHG concentrations, observation-based, via ENSEMBLES protocol; CO2, CH4, N2O, halocarbons | PCMDI CNRM-CM3 doc (Section E.2) | — | "annual global concentrations...specified based on observations...ENSEMBLES" |
| O  | Ozone (tropo + strato) | - | ~ supports | ? (FX-clim inferred) | PCMDI doc silent on ozone treatment; consistent with O=- (no time-varying ozone). Possible FX-clim background. | PCMDI CNRM-CM3 doc | — | O=- supported by documented absence; exact treatment (omitted vs FX-clim) not confirmed — needs Salas-Mélia 2005 |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Boucher & Pham 2002 sulphate field, interpolated at annual resolution, 1860–2000; direct radiative effect only | PCMDI CNRM-CM3 doc; Boucher & Pham 2002 (GRL, doi:10.1029/2001GL014048) | boucher_pham_2002 | Same LOA dataset as CCCma; exact same Boucher aerosol lineage |
| SI | Sulphate aerosol — indirect | Y | ✗ CONFLICT | n/a | **"only the direct effect of anthropogenic sulfate aerosols was taken into account"** (PCMDI verbatim); no indirect aerosol effect implemented | PCMDI CNRM-CM3 doc | — | **Table S1 SI=Y is wrong** — CNRM applied direct sulphate only; indirect effect (cloud droplet/lifetime) NOT included |
| BC | Black carbon | - | ✓ supports | n/a | Sulphate-direct-only scheme; no BC aerosol forcing applied | PCMDI CNRM-CM3 doc | — | Confirmed by absence ("only the direct effect of anthropogenic sulfate aerosols") |
| OC | Organic carbon | - | ✓ supports | n/a | Not applied | PCMDI CNRM-CM3 doc | — | |
| MD | Mineral dust | - | ✓ supports | n/a | Not applied | PCMDI CNRM-CM3 doc | — | |
| SS | Sea salt | - | ✓ supports | n/a | Not applied | PCMDI CNRM-CM3 doc | — | |
| LU | Land-use change | - | ~ supports | n/a (by absence) | Not mentioned in PCMDI doc | PCMDI CNRM-CM3 doc | — | Absence claim; medium confidence |
| SO | Solar irradiance | Y | ✗ CONFLICT | FX-const (1370 W m⁻²) | **"Solar forcing was set at 1370 W m⁻² and no solar or volcanic variability were included"** (PCMDI verbatim) | PCMDI CNRM-CM3 doc | — | **Table S1 SO=Y is wrong** — solar constant fixed, no TSI time series; note 1370 W m⁻² (vs 1365 used by IPSL/others) |
| VL | Volcanic aerosols | Y | ✗ CONFLICT | n/a | **"no solar or volcanic variability were included"** (PCMDI verbatim) | PCMDI CNRM-CM3 doc | — | **Table S1 VL=Y is wrong** — volcanic forcing entirely omitted |
| FC | Flux corrections (F/H) | - | ✓ supports | n/a | Not mentioned; CNRM-CM3 is a flux-correction-free coupled model | PCMDI CNRM-CM3 doc | — | |

### Table S1 conflicts found
- **SI=Y → ✗ CONFLICT**: CNRM-CM3 applied direct sulphate only; no indirect aerosol effect. Table S1 incorrectly marks SI=Y.
- **SO=Y → ✗ CONFLICT**: Solar forcing fixed at 1370 W m⁻²; no solar variability prescribed. Table S1 incorrectly marks SO=Y.
- **VL=Y → ✗ CONFLICT**: Volcanic forcing entirely absent ("no solar or volcanic variability were included"). Table S1 incorrectly marks VL=Y.

### Open questions
- O=- treatment: PCMDI doc silent — is ozone truly omitted, or is a fixed (FX-clim) ozone climatology used in the radiation scheme? Needs Salas-Mélia 2005 or ARPEGE-Climat documentation.
- SD coverage: Boucher & Pham 2002 span stated as 1860–2000 in the CNRM PCMDI doc; whether this is the same LOA dataset used by CCCma (via Scinocca 2008) not confirmed but strongly suspected.
- Boucher & Pham 2002 DOI **confirmed**: GRL doi:10.1029/2001GL014048 ("History of sulfate aerosol radiative forcings"). The JD doi:10.1029/2001JD000765 is Timmreck (2001) — a separate paper on background stratospheric aerosol simulation.

## Provenance
- Table S1 row: G Y · O - · SD Y · SI Y · BC - · OC - · MD - · SS - · LU - · SO Y · VL Y · FC -
- Sources consulted: PCMDI CNRM-CM3 model documentation page (primary; direct quotes obtained); PCMDI CMIP3 model documentation index
- Stage 6 adversarial workflow: wf_9e81bc88-cfa; 28 agent calls; findings confidence HIGH; 3 conflicts confirmed with verbatim quotes
