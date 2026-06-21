# giss_e2_h — GISS (NASA Goddard Institute for Space Studies, USA)

- **CMIP phase:** CMIP5 (historical, 1850–2005)
- **CMIP3 predecessor:** giss_model_e_r — ModelE2 succeeds CMIP3 ModelE with upgraded physics, aerosols, and land
- **Model family / lineage:** GISS ModelE → ModelE2 (CMIP5). E2-H uses **HYCOM** ocean (HYbrid Coordinate Ocean Model, tripolar ~1°×1°×L26); E2-R uses Russell 1995 latitude-longitude ocean. Atmospheric forcing is **identical between E2-H and E2-R for the same physics version** (Schmidt 2014 verbatim: "The ModelE2 AGCM coupled to the HYCOM or Russell OGCM is designated within the CMIP5 archive as the GISS-E2-H or GISS-E2-R model, respectively").
- **Atmosphere / ocean components:** ModelE2 atmosphere (2°×2.5°, 40 levels) + HYCOM ocean (tripolar ~1°×1°×L26)
- **Primary documentation paper(s):** Schmidt, G.A., et al. (2014). Configuration and assessment of the GISS ModelE2 contributions to the CMIP5 archive. *J. Adv. Model. Earth Syst.* 6(1), 141–184. doi:10.1002/2013MS000265 [schmidt_configuration_2014 *(add)*]; Miller, R.L., et al. (2014). CMIP5 historical simulations (1850–2012) with GISS ModelE2. *J. Adv. Model. Earth Syst.* doi:10.1002/2013MS000266 [miller_cmip5_2014 *(add)*]
- **Forcing-specific reference(s):** GISS ModelE2 CMIP5 page (data.giss.nasa.gov/modelE/cmip5/); Shindell et al. 2003 (NINT ozone, same as CMIP3) [shindell_2003]; Koch et al. 2011 (NINT aerosols) [koch_cmip5_2011 *(add)*]; Miller et al. 2006a (NINT tropospheric aerosols) [miller_aerosol_2006 *(add)*]

## CRITICAL NOTE: GISS ModelE2 physics_version framework

The decisive forcing distinction is the **CMIP5 physics_version attribute**, NOT the model name or the -CC suffix:

| physics_version | Code name | O treatment | Aerosol treatment | AIE |
|----------------|-----------|-------------|------------------|-----|
| p1 | **NINT** | Prescribed offline (Shindell 2003 — NOT Cionni 2011) | Prescribed offline concentration fields (Miller 2006a / Koch 2011 — NOT Lamarque 2010 OD) | None |
| p2 | **TCAD** | Interactive OMA (computed from CMIP5 emissions) | Interactive OMA from CMIP5 emissions | None |
| p3 | **TCADI** | Interactive OMA | Interactive OMA | First indirect effect parameterized |

GISS-E2-H (and E2-R) submitted multiple realizations across p1/p2/p3. The physics_version for each submitted realization must be confirmed from ESGF/CMIP5 archive metadata (e.g., r1i1p1 = NINT, r1i1p2 = TCAD, r1i1p3 = TCADI, but this mapping was NOT confirmed by workflow verification).

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

Below gives NINT (p1) as the reference configuration; TCAD/TCADI entries listed in notes.

| Key | Forcing | Protocol (Taylor 2012) | Verdict (NINT p1) | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|--------------------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ~ unclear | TV | Meinshausen et al. 2011 expected (not confirmed at model level) | Meinshausen et al. 2011 | meinshausen_rcp_2011 | GHG forcing same across p1/p2/p3 — confirmed standard but not verbatim at model level |
| O  | Ozone | Cionni et al. 2011 | ✗ deviates (NINT) | TV | **NINT: GISS offline fields from Shindell et al. 2003 (tropospheric) + stratospheric ozone — identical to CMIP3 GISS distribution, NOT Cionni 2011.** Miller 2014 verbatim: "Seasonal variations of tropospheric ozone are prescribed in the NINT ensembles based upon offline calculations by Shindell et al. [2003]... The NINT distribution of tropospheric ozone is identical to that used in the CMIP3 simulations." | Miller et al. 2014; Shindell et al. 2003 | miller_cmip5_2014, shindell_2003 | NINT=dev (Shindell 2003, not Cionni 2011); TCAD/TCADI (p2/p3)=exc (interactive OMA). This is a confirmed DEVIATION from Taylor 2012 standard for NINT. |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ✗ deviates (NINT) | TV | **NINT: prescribed offline concentration fields from Miller et al. 2006a and Koch et al. 2011 — NOT Lamarque 2010 optical-depth product.** Miller 2014 Table 3: "NINT tropospheric aerosols: concentration from Miller et al. [2006a] and Koch et al. [2011]." Note: Koch 2011 offline run itself driven by Lamarque 2010 emissions, but output is a different product than the Lamarque 2010 OD distributed by PCMDI. | Miller et al. 2014; Koch 2011 | miller_cmip5_2014 | NINT=dev; TCAD/TCADI=exc (interactive OMA). |
| SI | Sulphate indirect | Model-dependent | ~ unclear (NINT) | ? | NINT: no AIE parameterization. TCADI (p3): first indirect effect parameterized using calculated aerosol number concentrations. | Miller et al. 2014 | miller_cmip5_2014 | NINT=no AIE; p3 TCADI adds AIE. |
| BC | Black carbon | Lamarque et al. 2010 | ✗ deviates (NINT) | TV | **NINT: prescribed offline from Miller 2006a/Koch 2011 (same as SD above)** | Miller et al. 2014 | miller_cmip5_2014 | NINT=dev; TCAD/TCADI=exc (interactive) |
| OC | Organic carbon | Lamarque et al. 2010 | ✗ deviates (NINT) | TV | NINT: prescribed offline from Miller 2006a/Koch 2011 | Miller et al. 2014 | miller_cmip5_2014 | NINT=dev; TCAD/TCADI=exc |
| MD | Mineral dust | Model-dependent | ~ unclear | ? | NINT: likely prescribed from same offline suite; TCAD/TCADI: interactive | — | — | |
| SS | Sea salt | Model-dependent | ~ unclear | ? | Similar to MD | — | — | |
| LU | Land-use change | Hurtt et al. 2011 | ~ unclear | TV | Expected Hurtt 2011 (standard); not confirmed at model level | Hurtt et al. 2011 | hurtt_harmonization_2011 | |
| SO | Solar irradiance | Wang et al. 2005 | ~ unclear | ? | CMIP3 GISS used Lean 2000 — whether CMIP5 ModelE2 switched to Wang 2005 (standard) NOT confirmed from verified sources | Wang et al. 2005 (standard) | wang_modeling_2005 | Unverified; open question |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓ standard | TV | **Sato et al. 1993 UPDATED — confirmed across all GISS ModelE2 CMIP5 historical runs.** GISS CMIP5 page verbatim: "The volcanic forcings are from a more recent version of the Sato et al. data." GISS strataer dataset (data.giss.nasa.gov/modelforce/strataer/) maintains Sato-lineage updated volcanic AOD. | Schmidt et al. 2014; GISS strataer page | schmidt_configuration_2014 | CONFIRMED 1-0. Sato lineage continued from CMIP3. All 4 GISS models. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle or ocean biogeochemistry). No N-deposition or CO2 emissions required.

| ESM input | Applied? | Notes |
|-----------|----------|-------|
| BC on snow/ice | ? | GISS has BC-on-snow capability from CMIP3 era — whether applied in all ModelE2 CMIP5 physics versions unconfirmed |
| N-deposition | No | No land/ocean biogeochemistry |
| CO2 mode | Concentration-driven | Meinshausen 2011 concentrations (standard `historical`) |

### Deviations from Taylor 2012 standard protocol
- **O: DEVIATES (NINT/p1)** — uses GISS offline Shindell 2003 tropospheric ozone (same as CMIP3 GISS distribution), NOT Cionni et al. 2011. This is a confirmed deviation for p1 realizations.
- **SD/BC/OC: DEVIATES (NINT/p1)** — uses GISS offline concentration fields (Miller 2006a, Koch 2011) derived from a prior generation of composition runs, NOT Lamarque 2010 prescribed OD distributed by PCMDI.
- **TCAD/TCADI (p2/p3): EXCEEDS standard** on O and all aerosols (interactive OMA from CMIP5 emissions).
- **Key: model-name-to-physics-version mapping unconfirmed** — cannot assign dev/exc per named model without ESGF metadata lookup.

### Notes on CMIP3 lineage
- NINT (p1) ozone treatment is **identical to CMIP3** (Shindell 2003 offline distribution), constituting a CMIP3→CMIP5 non-update for ozone in these realizations. TCAD/TCADI variants represent a genuine upgrade to interactive composition.
- H = HYCOM ocean (corrects earlier "HydraBASE" label — HYCOM = HYbrid Coordinate Ocean Model).

## Open questions
1. What physics_version (p1/p2/p3) was submitted for each of the named CMIP5 realizations — GISS-E2-H, GISS-E2-H-CC, GISS-E2-R, GISS-E2-R-CC? This determines whether the per-model verdict is dev (NINT) or exc (TCAD/TCADI).
2. Does the "-CC" suffix denote interactive carbon cycle (ESM-type) or something else? If CC = carbon cycle, these variants may require N-deposition and CO2 emission inputs.
3. Solar forcing: Wang 2005 or Lean 2000?
4. BC-on-snow: confirmed for all variants or only certain physics versions?
5. GHG and land-use (G/LU): Meinshausen 2011 / Hurtt 2011 as standard — not confirmed at model level.

## Provenance
- Durack et al. 2016 model list: included
- Sources confirmed: NASA GISS CMIP5 page (data.giss.nasa.gov/modelE/cmip5/); Schmidt et al. 2014 doi:10.1002/2013MS000265; Miller et al. 2014 doi:10.1002/2013MS000266; GISS strataer page (data.giss.nasa.gov/modelforce/strataer/)
- Key quote (GISS CMIP5 page verbatim): v1 (NINT) 'aerosols and ozone are read in via pre-computed transient aerosol and ozone fields'; v2 (TCAD) 'aerosols and atmospheric chemistry are calculated online as a function of atmospheric state and transient emissions inventories'; v3 (TCADI) 'as for physics_version=2, but the aerosol impacts on clouds (and hence the AIE) is calculated.'
- Key quote (Miller 2014 verbatim): "The NINT distribution of tropospheric ozone is identical to that used in the CMIP3 simulations."
- Stage 2 adversarial workflow: wf_f7556b2d-78b; 14 claims verified, 6 confirmed (1-0), 8 killed; model-name-to-physics-version mapping refuted
