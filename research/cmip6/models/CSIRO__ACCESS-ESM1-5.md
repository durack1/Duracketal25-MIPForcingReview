<!-- CMIP6 forcing record — ACCESS-ESM1-5 (CSIRO). Stage 14 workflow: wf_915f8ce0-f07 (2026-06-26) -->

# ACCESS-ESM1-5 — CSIRO (Australia)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** UM GA1.0 atmosphere (HadGAM2 r1.1, N96L38, top ~39 km) + NEMO3.6 ocean (ACCESS-OM2, 1°) + CICE5 + CABLE2.4-CN land BGC + WOMBAT ocean BGC. **Full ESM** (interactive C-N cycle). Older UM GA1.0 era; markedly lower model top (38L, ~39km) than GA7.1 (85L, ~85km). **CLASSIC v1.0 aerosol scheme — NOT GLOMAP-mode.**
- **CMIP5 predecessor:** ACCESS-ESM (development; no formal CMIP5 submission as ESM)
- **Atmosphere / ocean components:** HadGAM2 (r1.1, N96, 192×145, 38L, top 39,255 m) / NEMO3.6 ACCESS-OM2 (1°) + CICE5
- **Primary documentation paper(s):** Ziehn et al. 2020 (*JAMES* doi:10.1029/2019MS001829)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ? | ? | Expected Meinshausen 2017; not confirmed | — | Not verified in Stage 14. |
| O  | Ozone | ? | ? | Unknown. L38 model top (~39 km) is low — may use a different ozone product than L85 models. Not in Keeble 2021 interactive list. | — | GA1.0 era lower top raises question of which CMIP6 ozone product was used. Not confirmed. |
| SD | Aerosol — sulphate direct | ? | ? | **CLASSIC v1.0** bulk aerosol scheme confirmed — but emissions inventory (CEDS vs older product) unconfirmed. | WDC-Climate; WCRP CMIP6_CVs | CLASSIC is the older mass-based bulk scheme (as in HadGEM2-ES), distinct from GLOMAP-mode. Scheme confirmed; forcings dataset not verified. |
| SI | Aerosol — sulphate indirect | ? | ? | CLASSIC v1.0; indirect effect treatment and aerosol–cloud parameterisation unknown. | — | |
| BC | Black carbon | ? | ? | CLASSIC v1.0; emission inventory unconfirmed. | — | |
| OC | Organic carbon | ? | ? | CLASSIC v1.0; emission inventory unconfirmed. | — | |
| MD | Mineral dust | ? | ? | CLASSIC v1.0; dust treatment unconfirmed. | — | |
| SS | Sea salt | ? | ? | CLASSIC v1.0; sea salt scheme unconfirmed. | — | |
| LU | Land-use change | ? | ? | Expected LUH2 v2.1h via CABLE2.4-CN; not confirmed. | — | |
| SO | Solar irradiance | ? | ? | Expected Matthes 2017; not confirmed. | — | |
| VL | Volcanic aerosols | ? | ? | Unknown; may differ from IACETH-SAGE3lambda given L38 low top. | — | |
| FC | Flux corrections | n/a | n/a | None | | |

## ESM-specific inputs

| Input | Dataset | Verdict |
|-------|---------|---------|
| N-dep | CABLE2.4-CN drives active C-N cycle; NCAR-CCMI-2-0 expected but unconfirmed | ? |
| Fe-dep | WOMBAT ocean BGC; Fe-dep dataset unknown | ? |
| CO2-mode | Concentration-driven assumed for historical; not confirmed | ? |

### Deviations from Eyring 2016 standard protocol
- **Aerosol scheme = CLASSIC v1.0**: Older bulk aerosol scheme, not GLOMAP-mode. This architectural difference from GA7.1 (HadGEM3-GC31-LL, ACCESS-CM2) means forcing datasets may differ — requires targeted Stage 14+ follow-up using Ziehn 2020.
- **Low model top (38L, ~39 km)**: Potentially impacts ozone product used and volcanic aerosol treatment.
- **All verdicts ?**: Only the aerosol scheme (CLASSIC v1.0) and atmospheric configuration (HadGAM2 r1.1) were confirmed in Stage 14.

## Provenance
- Stage 14 workflow run ID: wf_915f8ce0-f07 (2026-06-26); confirmed: aerosol=CLASSIC v1.0, atmos=HadGAM2 r1.1; all forcing datasets unconfirmed
- Key sources: Ziehn et al. 2020 (*JAMES* doi:10.1029/2019MS001829, not retrieved in Stage 14); WDC-Climate CMIP6 metadata (CLASSIC v1.0, HadGAM2 confirmed); WCRP CMIP6_CVs registry; Fiddes et al. 2025 (*ACP*, confirmed CLASSIC vs GLOMAP split)
- Requires targeted second pass: Ziehn 2020 for ozone, solar, volcanic, GHG, LU; access.hive.edu.au documentation for emissions inventories used with CLASSIC v1.0
