<!-- CMIP6 forcing record — MRI-ESM2-0 (MRI). Stage 17 complete (2026-06-27). -->

# MRI-ESM2-0 — MRI (Japan)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** MRI-AGCM3.5 atmosphere (TL159L80, ~120km, 80 levels, top ~0.01 hPa) + MRI.COM4 ocean + MRI-ESM BGC (land + ocean). **INTERACTIVE CHEMISTRY** — in Keeble 2021 6-model list (O=＋exc confirmed). Chemistry scheme: MRI-CCM2.1 (troposphere + middle atmosphere; 90 species, 259 reactions). Aerosol: MASINGAR mk-2r4c (interactive sea salt and mineral dust).
- **Primary paper:** Yukimoto et al. 2019, *JMSJ* doi:10.2151/jmsj.2019-051
- **CMIP5 predecessor:** MRI-CGCM3 (all forcings deferred/unresolved in CMIP5 review)

## Forcing (CMIP6 historical, 1850–2014)

| Component | Dataset | Verdict | Temporal |
|-----------|---------|---------|----------|
| G — GHGs | Meinshausen et al. 2017 (UoM-CMIP-1-2-0) | ✓std | TV |
| O — Ozone | MRI-CCM2.1 interactive chemistry (troposphere + middle atmosphere); 1 of 6 models in Keeble 2021 interactive list | ＋exc | TV |
| SD — Sulfate direct | CEDS (Hoesly et al. 2018) + BB4CMIP6 (van Marle et al. 2017) emissions → MASINGAR mk-2r4c | ✓std | TV |
| SI — Sulfate indirect | CEDS + BB4CMIP6 emissions → MASINGAR mk-2r4c → cloud droplet number | ✓std | TV |
| BC — Black carbon | CEDS + BB4CMIP6 emissions → MASINGAR mk-2r4c (hydrophobic + hydrophilic BC) | ✓std | TV |
| OC — Organic carbon | CEDS + BB4CMIP6 emissions → MASINGAR mk-2r4c (OC lumped as OM) | ✓std | TV |
| MD — Mineral dust | Online interactive — MASINGAR mk-2r4c (10-bin size-resolved) | ＋exc | TV |
| SS — Sea salt | Online interactive — MASINGAR mk-2r4c (2-mode accumulation + coarse) | ＋exc | TV |
| LU — Land use | LUH2 (Lawrence et al. 2016 / Hurtt 2020) | ✓std | TV |
| SO — Solar | Matthes et al. 2017 / SOLARIS-HEPPA (incl. EPP particle forcing implemented in MRI-CCM2.1) | ✓std | TV |
| VL — Volcanic | Thomason et al. 2018 (IACETH stratospheric AOD) — primary prescribed forcing for historical; MASINGAR mk-2r4c also calculates sulfuric acid aerosol interactively for continuous eruptions (additive, not replacing IACETH) | ✓std | TV |
| FC — Fixed composition | n/a (ESM) | n/a | — |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | Not confirmed; BGC description deferred to separate paper | ? |
| Fe-dep | Not confirmed; BGC description deferred to separate paper | ? |
| CO2-mode | Not confirmed; BGC description deferred to separate paper | ? |

## Sources
- Keeble et al. 2021 (*ACP* doi:10.5194/acp-21-5015-2021) — verbatim: "six (CESM2-WACCM, CESM2-WACCM-FV2, CNRM-ESM2-1, GFDL-ESM4, MRI-ESM2-0, and UKESM1-0-LL) use interactive stratospheric chemistry schemes"; O=＋exc confirmed
- Yukimoto et al. 2019 (*JMSJ* doi:10.2151/jmsj.2019-051) — primary paper fully retrieved; Section 3.3 explicitly names all forcing datasets
- WDC-Climate CMIP6 registry (MRI-ESM2-0 historical) — component metadata only

## Stage 12 verification notes
- Only O=＋exc was confirmed (MRI-CCM2.1 interactive chemistry via Keeble 2021 — high confidence)
- Yukimoto 2019 primary paper was not successfully retrieved: ResearchGate mirror flagged as unreliable source; J-Stage article (doi:10.2151/jmsj.2019-051) had limited text extraction
- All non-O forcing fields remain unconfirmed (? verdict); require second pass or dedicated Yukimoto 2019 access
- CMIP5 note: MRI-CGCM3 forcing was entirely unresolved in CMIP5 review; MRI-ESM2.0 therefore breaks a two-generation deferred chain
- O chemistry coverage: MRI-CCM2.1 covers trop+strat (not stratosphere-only), with 90 species, 259 reactions

## Stage 17 verification notes (2026-06-27)
- Yukimoto et al. 2019 (JMSJ) fully retrieved and read; Section 3.3 (Historical experiment) confirms all major forcing datasets explicitly
- G=✓std: "greenhouse gas concentrations ... compiled by Meinshausen et al. (2017)" (Sec. 3.3)
- SO=✓std: "solar radiative and particle forcings were compiled by ... Matthes et al. (2017)"; EPP implemented in MRI-CCM2.1 following Matthes et al. 2017 Appendices D and E
- VL=✓std: "stratospheric aerosol dataset used in the CMIP6 experiments (Thomason et al. 2018)" is the PRIMARY prescribed dataset for historical forcing; MASINGAR mk-2r4c additionally calculates sulfuric acid aerosol interactively for continuous eruptions. Standard IACETH dataset IS used for historical forcing — MASINGAR supplements it for small continuous eruptions. Verdict upgraded from ~ to ✓std (second-pass 2026-06-28).
- LU=✓std: "Land-Use Harmonization (LUH2) dataset provided by the CMIP6 land-use group (Lawrence et al. 2016)"
- SD/SI/BC/OC=✓std: "emissions of anthropogenic short-lived climate forcers, open biomass burning emissions ... compiled by Hoesly et al. (2018) [CEDS], van Marle et al. (2017) [BB4CMIP6]"; MASINGAR mk-2r4c treats sulfate, BC, OC, sea salt, mineral dust, precursor gases
- MD=＋exc: MASINGAR mk-2r4c treats mineral dust online interactively (10-bin size-resolved, 0.1–10 µm)
- SS=＋exc: MASINGAR mk-2r4c treats sea salt online interactively (2-mode: accumulation + coarse)
- N-dep/Fe-dep/CO2-mode: Paper explicitly states it "excludes" carbon cycle components; deferred to separate paper
