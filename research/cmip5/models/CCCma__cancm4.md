# cancm4 — CCCma (Canadian Centre for Climate Modelling and Analysis, Canada)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** cccma_cgcm3_1 (CGCM3.1)
- **Model family / lineage:** CanESM2 → CanCM4 (AOGCM component; no active carbon cycle). CanCM4 uses the same CanAM4 atmosphere as CanESM2 but without CTEM/CMOC carbon cycles. All atmospheric forcings expected identical to CanESM2. Key difference from CanESM2: not an ESM — standard 12 forcing keys only.
- **Atmosphere / ocean components:** CanAM4 atmosphere (T63, ~2.8°, 35 levels) + CanOM4 ocean + sea ice (no CTEM/CMOC)
- **Primary documentation paper(s):** VonSalzen, K., et al. (2013). The Canadian Fourth Generation Atmospheric Global Climate Model (CanAM4). Part I: representation of physical processes. *Atmos.-Ocean* 51(1), 104–125. doi:10.1080/07055900.2012.755610 [vonsalzen_canam4_2013 *(add)*]
- **Forcing-specific reference(s):** As CanESM2 (VonSalzen et al. 2013); all atmospheric forcings expected shared

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

All entries expected identical to CanESM2 (same CanAM4 atmosphere). Not independently verified.

| Key | Forcing | Protocol (Taylor 2012) | Verdict | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|---------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ? std | TV | As CanESM2 (expected) | meinshausen_rcp_2011 | meinshausen_rcp_2011 | Inferred from CanESM2 |
| O  | Ozone | Cionni et al. 2011 | ? | TV | As CanESM2 | cionni_ozone_2011 | cionni_ozone_2011 | Unverified; inferred from CanESM2 |
| SD | Sulphate direct | Lamarque et al. 2010 | ~ unclear (inferred) | TV+ | As CanESM2 — CanAM4 interactive aerosol (SA) | — | — | Inferred from CanESM2; prescribed-OD claim refuted for CanESM2 (0-1; Wilcox2013) |
| SI | Sulphate indirect | Model-dependent | ~ unclear (inferred) | TV+ | As CanESM2 — first indirect effect (Wilcox2013 SA) | — | — | Inferred from CanESM2 |
| BC | Black carbon | Lamarque et al. 2010 | ? | TV | As CanESM2 | — | — | |
| OC | Organic carbon | Lamarque et al. 2010 | ? | TV | As CanESM2 | — | — | |
| MD | Mineral dust | — | ? | ? | As CanESM2 | — | — | |
| SS | Sea salt | — | ? | ? | As CanESM2 | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ? std | TV | As CanESM2 | hurtt_harmonization_2011 | hurtt_harmonization_2011 | |
| SO | Solar irradiance | Wang et al. 2005 | ? | TV | As CanESM2 | — | — | |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ? | TV | As CanESM2 | — | — | |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle). Standard 12 keys only.

### Provenance
- Durack et al. 2016 model list: included
- Stage 4 workflow: wf_6432ada7-087 — all entries inferred from CanESM2 (same CanAM4 atmosphere)
- Key finding inherited: CanAM4 aerosol = interactive (SA; first indirect effect) per Wilcox2013; prescribed-OD claim refuted (0-1)
- Next step: VonSalzen2013 PDF read will confirm CanAM4 forcings for both CanESM2 and CanCM4
