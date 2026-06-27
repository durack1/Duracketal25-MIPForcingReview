<!-- CMIP6 forcing record — EC-Earth3-ESM-1 (EC-Earth-Consortium). Stage 10 workflow: wf_c0deb3a6-6f8 (2026-06-26) -->

# EC-Earth3-ESM-1 — EC-Earth-Consortium (Pan-European)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** Full Earth System Model variant of EC-Earth3. Active ocean biogeochemistry (**PISCES v2**, confirmed) + active land carbon (LPJ-GUESS suspected, NOT confirmed). All atmospheric IFS forcing expected identical to EC-Earth3 base but **NOT directly confirmed** — see critical note below.
- **Primary documentation paper(s):** Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022 [doscher_ecearth3_2022] — CAVEAT: EC-Earth3-ESM-1 is NOT documented in Döscher 2022

**CRITICAL: EC-Earth3-ESM-1 is absent from Döscher et al. 2022.** The paper covers exactly five configurations (Table 1): EC-Earth3, EC-Earth3-Veg, EC-Earth3-AerChem, EC-Earth3-CC, EC-Earth3-GrIS. EC-Earth3-ESM-1 is NOT among them. It is a registered CMIP6 source_id (WCRP-CMIP CVs; WDC-Climate confirmed) but its primary documentation paper has not been located. Ocean BGC component (PISCES v2) is confirmed from WDC-Climate metadata. All atmospheric forcing verdicts below are **inferred from shared IFS architecture** and must be treated as ? until a primary source naming EC-Earth3-ESM-1 is identified.

## Atmospheric forcing (all INFERRED from shared IFS — not confirmed from ESM-1 primary source)

| Key | Verdict | Temporal | Notes |
|-----|---------|----------|-------|
| G  | ? | ? | Expected ✓std/TV (Meinshausen 2017/2020 via IFS — as EC-Earth3 base; inferred from shared atmosphere) |
| O  | ? | ? | Expected ✓std/TV (CCMI prescribed via IFS; inferred) |
| SD | ? | ? | Expected ✓std/TV (MACv2-SP TM5-PI + anthropogenic plumes; inferred from shared IFS) |
| SI | ? | ? | Expected ✓std/TV (MACv2-SP; inferred) |
| BC | ? | ? | Expected ✓std/TV (MACv2-SP; inferred) |
| OC | ? | ? | Expected ✓std/TV (MACv2-SP; inferred) |
| MD | ? | ? | Expected FXc (TM5 PI; inferred) |
| SS | ? | ? | Expected FXc (TM5 PI; inferred) |
| LU | ? | ? | UNKNOWN — mechanism unclear: does ESM-1 directly ingest LUH2 (like EC-Earth3-Veg) or reuse precomputed vegetation from EC-Earth3-Veg runs (like EC-Earth3/CC)? NOT confirmed. |
| SO | ? | ? | Expected ✓std/TV (Matthes 2017; inferred) |
| VL | ? | ? | Expected ~/TV (CMIP6 strat aerosol prescribed; inferred) |
| FC | n/a | n/a | |

## ESM-specific inputs (confirmed partial)

| Input | Verdict | Notes |
|-------|---------|-------|
| Ocean BGC | PISCES v2 | **CONFIRMED** — WDC-Climate verbatim: "ocnBgchem: PISCES v2 (same grid as ocean)" running on NEMO3.6 ORCA1. Aumont et al. 2015 (doi:10.5194/gmd-8-2465-2015) is the PISCES-v2 description paper. |
| Fe deposition (PISCES) | ? | PISCES-v2 has iron cycling — Fe deposition dataset (dust-derived or explicit) required. Source_id unconfirmed. |
| Land BGC | ? | Suspected LPJ-GUESS (similar to EC-Earth3-Veg family) but NOT confirmed. LPJ-GUESS v4.1.2 attribution was REFUTED by workflow (version unconfirmed). |
| N-deposition | ? | If LPJ-GUESS land BGC AND PISCES ocean BGC both active, N-dep required. NCAR-CCMI-2-0 expected but NOT confirmed. |
| CO2-mode | ? | Concentration-driven for historical expected; NOT confirmed. |

## Status: PERMANENTLY UNRESOLVABLE (confirmed 2026-06-27)

**No primary documentation paper exists for EC-Earth3-ESM-1.** Confirmed by user 2026-06-27: the EC-Earth3 Consortium has not published a dedicated paper for this configuration. **EC-Earth3-ESM-1-1 is planned as the successor for CMIP7.** All forcing verdicts remain ? by necessity — not from lack of effort but from absence of primary documentation. The shared-IFS inference (all main atm forcings expected to follow EC-Earth3 base) is the best available evidence but cannot be promoted to a confirmed verdict without a citable source.

## Notes
Both primary EC-Earth papers read in full (2026-06-27 pass):
- Döscher et al. 2022, *GMD* doi:10.5194/gmd-15-2973-2022: Table 1 lists exactly five CMIP6 configurations (EC-Earth3, EC-Earth3-Veg, EC-Earth3-AerChem, EC-Earth3-CC, EC-Earth3-GrIS); EC-Earth3-ESM-1 is entirely absent. Table 13 documents forcing datasets (GHG v1.2.0 Meinshausen 2017; stratospheric aerosols v3.0.0 Thomason 2018; ozone v1.0 CCMI/Hegglin 2021; solar v3.2 Matthes 2017; MACv2-SP Stevens 2017; LUH2 v2.1 Hurtt 2020 — only with LPJ-GUESS; N-dep v2.0 CCMI/Hegglin 2021 — only with LPJ-GUESS) but these apply to EC-Earth3/EC-Earth3-Veg, NOT to ESM-1. PISCES-v2 and LPJ-GUESS are described as components but only in CC/Veg configurations.
- Hazeleger et al. 2010, *BAMS*: pre-CMIP6 description of original EC-Earth system; contains no CMIP6 forcing information. Not applicable.
- van Noije et al. 2021, *GMD* doi:10.5194/gmd-14-5637-2021 (EC-Earth3-AerChem): Read in full (2026-06-27 pass). This paper documents EC-Earth3-AerChem (IFS+TM5), NOT EC-Earth3-ESM-1. EC-Earth3-ESM-1 is not mentioned anywhere in this paper. IFS-layer CMIP6 forcings confirmed for AerChem: solar (Matthes 2017), GHG concentrations (Meinshausen 2017/2020), stratospheric aerosol radiative properties from CMIP6, vegetation fields consistent with LUH2 (Hurtt 2020) produced via EC-Earth3-Veg. However, EC-Earth3-AerChem uses interactive TM5 for tropospheric aerosols (BC, OC, sea salt, mineral dust, SO4) — EC-Earth3-ESM-1 does NOT have TM5. The paper explicitly states that EC-Earth3 (without TM5) uses MACv2-SP for tropospheric aerosols. Ozone in AerChem is interactive via TM5 with stratospheric nudging to Checa-Garcia 2018 CMIP6 ozone data. None of this applies directly to ESM-1 which lacks the TM5 chemistry module. The paper provides no new evidence for EC-Earth3-ESM-1 forcing verdicts.
All forcing verdicts for EC-Earth3-ESM-1 remain ? — no primary documentation source identified.

## Provenance
- Stage 10 workflow run ID: wf_c0deb3a6-6f8 (2026-06-26); 31 agents; 11/14 confirmed, 3 killed
- Second-pass paper read: 2026-06-27; Döscher 2022 + Hazeleger 2010 both read in full; no new verdicts assigned
- Key sources: WDC-Climate CMIP6 (wdc-climate.de, EC-Earth3-ESM-1 metadata); Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022, confirms PISCES in NEMO but does NOT describe ESM-1)
