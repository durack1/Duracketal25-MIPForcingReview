<!-- CMIP6 forcing record — MRI-ESM2-0 (MRI). Stage 12 complete (2026-06-26). -->

# MRI-ESM2-0 — MRI (Japan)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** MRI-AGCM3.5 atmosphere (TL159L80, ~120km, 80 levels, top ~0.01 hPa) + MRI.COM4 ocean + MRI-ESM BGC (land + ocean). **INTERACTIVE CHEMISTRY** — in Keeble 2021 6-model list (O=＋exc confirmed). Chemistry scheme: MRI-CCM2.1 (troposphere + middle atmosphere; 90 species, 259 reactions).
- **Primary paper:** Yukimoto et al. 2019, *JMSJ* doi:10.2151/jmsj.2019-051
- **CMIP5 predecessor:** MRI-CGCM3 (all forcings deferred/unresolved in CMIP5 review)

## Forcing (CMIP6 historical, 1850–2014)

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Not confirmed by Stage 12 research; expected Meinshausen 2017 (UoM-CMIP-1-2-0) | ? | — |
| O — Ozone | MRI-CCM2.1 interactive chemistry (troposphere + middle atmosphere); 1 of 6 models in Keeble 2021 interactive list | ＋exc | TV |
| SD — Sulfate direct | Not confirmed; expected CEDS+BB4CMIP6 | ? | — |
| SI — Sulfate indirect | Not confirmed | ? | — |
| BC — Black carbon | Not confirmed | ? | — |
| OC — Organic carbon | Not confirmed | ? | — |
| MD — Mineral dust | Not confirmed | ? | — |
| SS — Sea salt | Not confirmed | ? | — |
| LU — Land use | Not confirmed | ? | — |
| SO — Solar | Not confirmed; expected Matthes 2017 | ? | — |
| VL — Volcanic | Not confirmed; expected IACETH-SAGE3lambda-3-0-0 | ? | — |
| FC — Fixed composition | n/a (ESM) | n/a | — |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | Not confirmed; active land BGC expected | ? |
| Fe-dep | Not confirmed; ocean BGC expected | ? |
| CO2-mode | Not confirmed; concentration-driven assumed for historical | ? |

## Sources
- Keeble et al. 2021 (*ACP* doi:10.5194/acp-21-5015-2021) — verbatim: "six (CESM2-WACCM, CESM2-WACCM-FV2, CNRM-ESM2-1, GFDL-ESM4, MRI-ESM2-0, and UKESM1-0-LL) use interactive stratospheric chemistry schemes"; O=＋exc confirmed
- Yukimoto et al. 2019 (*JMSJ* doi:10.2151/jmsj.2019-051) — primary; not retrieved in Stage 12 (ResearchGate version flagged unreliable; J-Stage access incomplete)
- WDC-Climate CMIP6 registry (MRI-ESM2-0 historical) — component metadata only

## Stage 12 verification notes
- Only O=＋exc was confirmed (MRI-CCM2.1 interactive chemistry via Keeble 2021 — high confidence)
- Yukimoto 2019 primary paper was not successfully retrieved: ResearchGate mirror flagged as unreliable source; J-Stage article (doi:10.2151/jmsj.2019-051) had limited text extraction
- All non-O forcing fields remain unconfirmed (? verdict); require second pass or dedicated Yukimoto 2019 access
- CMIP5 note: MRI-CGCM3 forcing was entirely unresolved in CMIP5 review; MRI-ESM2-0 therefore breaks a two-generation deferred chain
- O chemistry coverage: MRI-CCM2.1 covers trop+strat (not stratosphere-only), with 90 species, 259 reactions
