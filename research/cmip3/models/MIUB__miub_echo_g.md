# miub_echo_g — MIUB/METRI/M&D (Meteorologisches Institut der Universität Bonn / Korea + Germany)

- **CMIP phase:** CMIP3 (20C3M)
- **Model name:** ECHO-G (ECHAM4 atmosphere + HOPE-G ocean)
- **Model family / lineage:** ECHO-G (ECHAM4.6 atm + HOPE-G ocean); shared ECHAM4 atmospheric lineage with INGV-SXG but different coupled model and different forcing treatment
- **Primary documentation paper(s):** Min et al. 2005 (*Theor. Appl. Climatol.*); Legutke & Voss 1999 (ECHO-G model description, DKRZ Technical Report No. 18); González-Rouco et al. 2003; von Storch et al. 2004
- **Forcing-specific reference(s):** Crowley 2000 (*Science* doi:10.1126/science.289.5477.270) — solar+volcanic bundled time series; Lohmann & Feichter 1997 (*JGR* doi:10.1029/97JD00631) — first indirect effect (ECHAM4 implementation)
- **PCMDI doc URL (live):** https://pcmdi.llnl.gov/ipcc/model_documentation/ECHO-G.htm *(MIUB-ECHO-G.htm returns 404)*

## Forcing datasets used (historical / 20C3M) — with adversarial verification of Table S1

`Table S1` = Y / - / blank. `Verdict` = ✓ supports · ✗ conflicts · ~ unclear · ＋ adds detail.
`Temporal` = TV · FX-clim · FX-const · n/a · ? — record fixed values WITH UNITS.

| Key | Forcing | Table S1 | Verdict | Temporal | Dataset / source (series or fixed field) | Citation | bib key | Notes |
|-----|---------|----------|---------|----------|------------------------------------------|----------|---------|-------|
| G  | Well-mixed GHGs | Y | ✓ supports | TV | Time-varying GHGs (anthropogenic) over 1860–2000 | WDC-Climate ECHO_G_20C3M_2 metadata | — | "Anthropogenic (GHGs, sulfate aerosol direct and first indirect effects) and natural forcing... used for the 20C3M simulations" |
| O  | Ozone (tropo + strato) | Y | ✗ CONFLICT | FX-clim | **ECHAM4.6 atmospheric component confirmed** (Legutke & Voss 1999 p.3: "ECHAM4, which is used for ECHO-G"); ECHAM4 uses a **fixed prescribed ozone climatology** (band absorber), not a time-varying ozone field. No TV ozone documented in PCMDI ECHO-G.htm or WDC metadata. Same treatment as INGV-SXG (shared ECHAM4 lineage). | Legutke & Voss 1999 (DKRZ TR No. 18, §2); PCMDI ECHO-G.htm | legutke_voss_1999 | **Table S1 O=Y CONFLICTS** — ECHAM4 ozone is FX-clim, confirmed by ECHAM4 lineage in Legutke 1999. |
| SD | Sulphate aerosol — direct | Y | ✓ supports | TV | Sulphate aerosol direct effect; time-varying over 1860–2000 (Boucher LOA data, same lineage as INGV) | WDC-Climate ECHO_G_20C3M_2 metadata | boucher_pham_2002 | "sulfate aerosol direct and first indirect effects" — SD part confirmed |
| SI | Sulphate aerosol — indirect | Y | ✗ CONFLICT | TV | **First indirect effect (Twomey) IS applied** per WDC run2 primary metadata: "sulfate aerosol direct and first indirect effects." Implemented via Lohmann & Feichter 1997 ECHAM4 parameterisation. | WDC-Climate ECHO_G_20C3M_2; Lohmann & Feichter 1997 (*JGR* doi:10.1029/97JD00631) | lohmann_feichter_1997 | **Table S1 SI=- CONFLICTS** — first indirect aerosol effect IS documented and applied in ECHO-G 20C3M. Note: seeded template had SI=Y (matching WDC primary); Stage 7 args had SI=- (matching Table S1). Table S1 appears in error here. |
| BC | Black carbon | - | ✓ supports | n/a | Not documented | PCMDI ECHO-G.htm | — | |
| OC | Organic carbon | - | ✓ supports | n/a | Not documented | PCMDI ECHO-G.htm | — | |
| MD | Mineral dust | - | ✓ supports | n/a | Not documented | PCMDI ECHO-G.htm | — | |
| SS | Sea salt | - | ✓ supports | n/a | Not documented | PCMDI ECHO-G.htm | — | |
| LU | Land-use change | - | ✓ supports | n/a | Not documented | PCMDI ECHO-G.htm | — | |
| SO | Solar irradiance | Y | ✓ ~ supports (bundled) | TV | **"Natural (solar and volcanic) forcing is implemented through temporally varying solar constant (Crowley, 2000)"** — solar IS time-varying but **bundled with volcanic** into a single effective solar-constant time series; scaled from Lean et al. 1995 variance | PCMDI ECHO-G.htm; WDC-Climate ECHO_G_20C3M_1 and _2 | crowley_causes_2000 | SO=Y is technically correct but NOT an independent channel — solar and volcanic are inseparable in the Crowley forcing scheme; globally averaged, not latitudinally resolved |
| VL | Volcanic aerosols | Y | ✓ ~ supports (bundled) | TV | Volcanic RF scaled into the same Crowley (2000) solar-constant time series — **not a separate stratospheric-AOD dataset** (not Sato 1993 / not Ammann 2003) | PCMDI ECHO-G.htm; WDC-Climate metadata | crowley_causes_2000 | VL=Y technically correct but bundled with SO; volcano RF folded into effective solar constant globally (no latitudinal/seasonal AOD structure) |
| FC | Flux corrections (F/H) | H | ✗ CONFLICT | FX-clim (annual) | **"Flux adjustment: Yes (heat, water, annual) outside sea ice region (climatological extent)"** — BOTH heat AND water (freshwater) corrections applied, NOT heat only. Diagnosed from last 100 years of coupled spin-up. | PCMDI ECHO-G.htm; Legutke & Voss 1999 | legutke_voss_1999 | **Table S1 FC=H CONFLICTS** — freshwater correction also applied; correct code should be FC=F,H (same as CCCma). Seeded template had FC=F,H (correct); Stage 7 args had FC=H (Table S1 error confirmed). |

### Table S1 conflicts found
- **SI=- → ✗ CONFLICT**: First indirect (Twomey) aerosol effect IS applied in ECHO-G 20C3M per WDC primary metadata. Table S1 incorrectly omits it.
- **FC=H → ✗ CONFLICT**: Both heat AND freshwater flux corrections applied ("heat, water, annual" per PCMDI). Table S1 FC=H (heat only) is wrong; should be FC=F,H.
- **O=Y → ✗ CONFLICT**: ECHAM4 atmospheric component confirmed (Legutke & Voss 1999); ECHAM4 ozone is a fixed prescribed climatology. Table S1 O=Y is wrong.

### Open questions
- MIUB-ECHO-G ozone treatment: ~~Resolved~~ — Legutke & Voss 1999 confirms ECHAM4.6 atmospheric component; ECHAM4 ozone is FX-clim. O=Y conflict confirmed.
- Crowley (2000) forcing details: exact scaling factor from Lean et al. 1995 solar, and volcanic RF-to-solar-constant conversion used in the CMIP3 20C3M runs — confirm from González-Rouco et al. 2003 or von Storch et al. 2004.

## Provenance
- Table S1 row (from Stage 7 args): G Y · O Y · SD Y · SI - · BC - · OC - · MD - · SS - · LU - · SO Y · VL Y · FC H
- Note: seeded template had O=- and SI=Y and FC=F,H — these reflect an alternative Table S1 reading; the workflow confirms SI and FC=F,H are the correct *primary-doc* values, but Table S1 coding error is for SI=- and FC=H.
- Sources consulted: PCMDI ECHO-G.htm (primary; direct quotes); WDC-Climate ECHO_G_20C3M_1 and ECHO_G_20C3M_2 run-level metadata (primary)
- Stage 7 adversarial workflow: wf_0fca602f-9ce; SI/FC conflict confidence HIGH; O=Y probable conflict (ECHAM4 lineage); SO/VL bundled confirmed
