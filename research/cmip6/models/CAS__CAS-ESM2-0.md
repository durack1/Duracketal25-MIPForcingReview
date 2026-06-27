<!-- CMIP6 forcing record — CAS-ESM2-0 (CAS). Stage 16 workflow: wf_dcf6412c-ee4 (2026-06-27) -->

# CAS-ESM2-0 — CAS (China)

- **CMIP phase:** CMIP6 (historical, 1850–2014)
- **Model family / lineage:** IAP AGCM 5.0 atmosphere (T85, ~1.4°, L35, top ~2.2 hPa) + CoLM land + LICOM2.0 ocean + CICE4 + IAP OBGCM ocean biogeochemistry. AOGCM/ESM hybrid. **IAP AACM** integrated aerosol–atmospheric-chemistry module (NOT a CMIP6 prescribed aerosol product).
- **Primary documentation paper(s):** Zhang et al. 2020 (*JAMES* doi:10.1029/2020MS002210); Wei et al. 2019 (*ACP* doi:10.5194/acp-19-8269-2019, IAP-AACM description)

## Forcing datasets used (historical 1850–2014) — verified against Eyring et al. 2016 protocol

| Key | Forcing | Verdict | Temporal | Dataset / source | Citation | Notes |
|-----|---------|---------|----------|-----------------|----------|-------|
| G  | Well-mixed GHGs | ? | ? | Not confirmed. Expected Meinshausen 2017. | — | |
| O  | Ozone | ? | ? | IAP AACM includes atmospheric chemistry — may be interactive. Not confirmed. Not in Keeble 2021 interactive list (but Keeble 2021 may be incomplete for Chinese models). | — | |
| SD | Aerosol — sulphate direct | ~ | TV | **IAP AACM** (integrated aerosol+chemistry module) — centre-specific interactive scheme, NOT a CMIP6-prescribed aerosol product (MACv2-SP or CEDS+BB4CMIP6 direct). Inputs/emissions provenance unconfirmed. | WDCC C6CMCASCE0hi; Wei et al. 2019 | WDC-Climate: "aerosol: IAP AACM, atmosChem: IAP AACM." Module is interactive (not prescribed field). Emissions source not confirmed from Stage 16 sources. |
| SI | Aerosol — sulphate indirect | ~ | TV | IAP AACM interactive indirect effects. Details unconfirmed. | | As SD. |
| BC | Black carbon | ~ | TV | IAP AACM; emissions source unconfirmed. | | As SD. |
| OC | Organic carbon | ~ | TV | IAP AACM; emissions source unconfirmed. | | As SD. |
| MD | Mineral dust | ? | ? | Not confirmed. | — | |
| SS | Sea salt | ? | ? | Not confirmed. | — | |
| LU | Land-use change | ? | ? | CoLM land; LUH2 v2.1h expected but not confirmed. | — | |
| SO | Solar irradiance | ? | ? | Not confirmed. | — | |
| VL | Volcanic aerosols | ? | ? | Not confirmed. | — | |
| FC | Flux corrections | n/a | n/a | None | | |

## Provenance
- Stage 16 workflow run ID: wf_dcf6412c-ee4 (2026-06-27); confirmed: aerosol module = IAP AACM (WDCC C6CMCASCE0hi + Wei 2019); all other forcing unconfirmed
- Key sources: WDCC ES-DOC metadata C6CMCASCE0hi; Wei et al. 2019 (*ACP* doi:10.5194/acp-19-8269-2019, IAP-AACM description); Zhang et al. 2020 (*JAMES* doi:10.1029/2020MS002210, not extracted in Stage 16)
