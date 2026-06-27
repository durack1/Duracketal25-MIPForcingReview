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

## Open questions for second pass
1. What is the primary documentation paper for EC-Earth3-ESM-1? (Not Döscher 2022 — absent from Table 1)
2. Is the land BGC component LPJ-GUESS? Which version?
3. LU mechanism: direct LUH2 ingestion or precomputed from EC-Earth3-Veg runs?
4. N-dep dataset: NCAR-CCMI-2-0 or other?
5. Fe deposition dataset for PISCES-v2 ocean iron cycling?
6. CO2-mode confirmation for historical?

## Provenance
- Stage 10 workflow run ID: wf_c0deb3a6-6f8 (2026-06-26); 31 agents; 11/14 confirmed, 3 killed
- Key sources: WDC-Climate CMIP6 (wdc-climate.de, EC-Earth3-ESM-1 metadata); Döscher et al. 2022 (doi:10.5194/gmd-15-2973-2022, confirms PISCES in NEMO but does NOT describe ESM-1)
