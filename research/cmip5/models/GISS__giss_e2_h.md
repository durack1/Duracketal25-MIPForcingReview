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
| p1 | **NINT** | Prescribed offline (Shindell 2006a — NOT Cionni 2011) | Prescribed offline concentration fields (Koch 2011 — NOT Lamarque 2010 OD). Sea salt and dust also offline. | Tuned/crude (Hansen 2005 empirical parameterization — NOT the standard first-indirect parameterization) |
| p2 | **TCAD** | Interactive OMA (G-PUCCINI; driven by CMIP5 Lamarque 2010 emissions) | Interactive OMA from CMIP5 emissions; sea salt, dust, isoprene calculated interactively | Tuned/crude (same Hansen 2005 empirical parameterization as NINT) |
| p3 | **TCADI** | Interactive OMA | Interactive OMA; sea salt, dust, isoprene calculated interactively | First indirect effect parameterized using prognostic CDNC (Morrison & Gettelman 2008; Menon et al. 2010) |

Schmidt 2014 (abstract) states GISS submitted **six variations** = 3 composition treatments (NINT/TCAD/TCADI) × 2 oceans (R/H). E2-H therefore submitted p1, p2, and p3 realizations; the physics_version attribute (p1/p2/p3) distinguishes them within the CMIP5 archive. Schmidt 2014 does NOT document E2-H-CC or E2-R-CC — those variants are outside the scope of this paper.

## Forcing datasets used (historical 1850–2005) — verified against Taylor et al. 2012 protocol

Below gives NINT (p1) as the reference configuration; TCAD/TCADI entries listed in notes.

| Key | Forcing | Protocol (Taylor 2012) | Verdict (NINT p1) | Temporal | Dataset / source | Citation | bib key | Notes |
|-----|---------|------------------------|--------------------|----------|-----------------|----------|---------|-------|
| G  | Well-mixed GHGs | Meinshausen et al. 2011 | ~ unclear | TV | Meinshausen et al. 2011 expected (not confirmed at model level) | Meinshausen et al. 2011 | meinshausen_rcp_2011 | GHG forcing same across p1/p2/p3 — confirmed standard but not verbatim at model level |
| O  | Ozone | Cionni et al. 2011 | ✗ deviates (NINT) | TV | **NINT: GISS offline fields from Shindell et al. 2003/2006a (tropospheric) + stratospheric ozone — identical to CMIP3 GISS distribution, NOT Cionni 2011.** Miller 2014 verbatim: "Seasonal variations of tropospheric ozone are prescribed in the NINT ensembles based upon offline calculations by Shindell et al. [2003]... The NINT distribution of tropospheric ozone is identical to that used in the CMIP3 simulations." Schmidt 2014 (p. 143) cites "[Koch et al., 2011; Shindell et al., 2006a]" for NINT offline fields. | Miller et al. 2014; Shindell et al. 2003; Schmidt et al. 2014 | miller_cmip5_2014, shindell_2003, schmidt_configuration_2014 | NINT=dev (Shindell offline ozone, not Cionni 2011); TCAD/TCADI (p2/p3)=exc (interactive OMA). Confirmed DEVIATION from Taylor 2012 standard for NINT. |
| SD | Sulphate direct | Lamarque et al. 2010 OD | ✗ deviates (NINT) | TV | **NINT: prescribed offline concentration fields from Miller et al. 2006a and Koch et al. 2011 — NOT Lamarque 2010 optical-depth product.** Miller 2014 Table 3: "NINT tropospheric aerosols: concentration from Miller et al. [2006a] and Koch et al. [2011]." Note: Koch 2011 offline run itself driven by Lamarque 2010 emissions, but output is a different product than the Lamarque 2010 OD distributed by PCMDI. | Miller et al. 2014; Koch 2011 | miller_cmip5_2014 | NINT=dev; TCAD/TCADI=exc (interactive OMA). |
| SI | Sulphate indirect | Model-dependent | ✗ deviates (NINT/TCAD) / ✓ exceeds (TCADI) | ? | **NINT and TCAD: tuned/crude AIE parameterized following Hansen et al. [2005]**, based on empirical effects of aerosols on cloud droplet number concentration — NOT the standard first-indirect parameterization. **TCADI: first indirect effect using prognostic CDNC** (Morrison & Gettelman 2008; Menon et al. 2010). Schmidt 2014 section 2.2.4 verbatim: "In the NINT and TCAD simulations, the indirect aerosol effect is crudely parameterized as in Hansen et al. [2005]." | Schmidt et al. 2014 | schmidt_configuration_2014 | NINT and TCAD = dev (crude tuned AIE, not first-indirect parameterization); TCADI = exc (prognostic CDNC first indirect). Schmidt 2014 p. 146. |
| BC | Black carbon | Lamarque et al. 2010 | ✗ deviates (NINT) | TV | **NINT: prescribed offline from Miller 2006a/Koch 2011 (same as SD above)** | Miller et al. 2014 | miller_cmip5_2014 | NINT=dev; TCAD/TCADI=exc (interactive) |
| OC | Organic carbon | Lamarque et al. 2010 | ✗ deviates (NINT) | TV | NINT: prescribed offline from Miller 2006a/Koch 2011 | Miller et al. 2014 | miller_cmip5_2014 | NINT=dev; TCAD/TCADI=exc |
| MD | Mineral dust | Model-dependent | ✗ deviates (NINT) / ✓ exceeds (TCAD/TCADI) | TV / TV | **NINT: prescribed offline from Koch 2011 offline suite (same offline fields as SD/BC/OC).** **TCAD/TCADI: calculated interactively** — Schmidt 2014 section 2.2.2 verbatim: "Sea salt, dust, and isoprene surface fluxes are calculated interactively" in TCAD/TCADI. | Schmidt et al. 2014 | schmidt_configuration_2014 | NINT=dev (offline, not Lamarque 2010 OD); TCAD/TCADI=exc (interactive, driven by Lamarque 2010 emissions). Schmidt 2014 p. 145. |
| SS | Sea salt | Model-dependent | ✗ deviates (NINT) / ✓ exceeds (TCAD/TCADI) | TV / TV | **NINT: prescribed offline from Koch 2011 offline suite.** **TCAD/TCADI: calculated interactively** — Schmidt 2014 section 2.2.2 verbatim: "Sea salt, dust, and isoprene surface fluxes are calculated interactively" in TCAD/TCADI. | Schmidt et al. 2014 | schmidt_configuration_2014 | NINT=dev (offline); TCAD/TCADI=exc (interactive). Schmidt 2014 p. 145. |
| LU | Land-use change | Hurtt et al. 2011 | ~ unclear | TV | Schmidt 2014 p. 4 confirms "land use/land cover changes" included as forcing; specific dataset (Hurtt 2011) expected per Taylor 2012 protocol but not named explicitly in Schmidt 2014. | Schmidt et al. 2014 | schmidt_configuration_2014 | |
| SO | Solar irradiance | Wang et al. 2005 | ✓ standard | TV | **Wang et al. 2005 CONFIRMED.** Schmidt 2014 section 2.4 verbatim: "Variations in incoming solar forcing in the 20th Century simulation follows Wang et al. [2005a]." Also includes updated spectral solar irradiance from Lean [2009]. Schmidt 2014 p. 147. | Schmidt et al. 2014 | schmidt_configuration_2014 | CONFIRMED. Wang et al. 2005a = Wang, Y.-M., J. L. Lean, and N. R. Sheeley Jr. (2005), Modeling the Sun's magnetic field and irradiance since 1713, Astrophys. J., 625, 522–538. CMIP3 GISS used Lean 2000 — confirmed switch to Wang 2005 for CMIP5. |
| VL | Volcanic aerosols | Sato et al. 1993 updated | ✓ standard | TV | **Sato et al. 1993 UPDATED — confirmed across all GISS ModelE2 CMIP5 historical runs.** GISS CMIP5 page verbatim: "The volcanic forcings are from a more recent version of the Sato et al. data." GISS strataer dataset (data.giss.nasa.gov/modelforce/strataer/) maintains Sato-lineage updated volcanic AOD. | Schmidt et al. 2014; GISS strataer page | schmidt_configuration_2014 | CONFIRMED 1-0. Sato lineage continued from CMIP3. All 4 GISS models. |
| FC | Flux corrections | Not expected | n/a | n/a | Not applied | — | — | |

### ESM-specific forcing inputs
Not an ESM (no active carbon cycle or ocean biogeochemistry). No N-deposition or CO2 emissions required.

| ESM input | Applied? | Notes |
|-----------|----------|-------|
| BC on snow/ice | ✓ exc (applied) | **CONFIRMED applied.** Schmidt 2014 p. 4 verbatim: historical forcings include "the direct and indirect sulfate, nitrate, black carbon, and organic aerosol changes (including the impact of black carbon on snow and ice albedo)." Applied across all physics versions (NINT/TCAD/TCADI). schmidt_configuration_2014. |
| N-deposition | No | No land/ocean biogeochemistry |
| CO2 mode | Concentration-driven | Meinshausen 2011 concentrations (standard `historical`) |

### Deviations from Taylor 2012 standard protocol
- **O: DEVIATES (NINT/p1)** — uses GISS offline Shindell 2006a tropospheric ozone (same as CMIP3 GISS distribution), NOT Cionni et al. 2011. Confirmed deviation for p1 realizations.
- **SD/BC/OC/MD/SS: DEVIATES (NINT/p1)** — uses GISS offline concentration fields from Koch 2011, NOT Lamarque 2010 OD. Includes mineral dust and sea salt (all offline in NINT).
- **SI: DEVIATES (NINT and TCAD/p1 and p2)** — crude tuned AIE from Hansen 2005, not first-indirect parameterization. Only TCADI (p3) exceeds standard on SI.
- **TCAD/TCADI (p2/p3): EXCEEDS standard** on O and all aerosols (interactive OMA from CMIP5 Lamarque 2010 emissions; sea salt, dust, isoprene calculated interactively).
- **SO: CONFIRMED Wang et al. 2005** — standard for CMIP5. Schmidt 2014 section 2.4 verbatim. CMIP3 GISS used Lean 2000; switch to Wang 2005 confirmed for CMIP5.
- **BC-on-snow: CONFIRMED applied** — Schmidt 2014 p. 4, all physics versions.
- **Key: E2-H submitted all three physics versions** (p1/p2/p3) = three sets of realizations in CMIP5 archive. Schmidt 2014 does NOT cover E2-H-CC or E2-R-CC.

### Notes on CMIP3 lineage
- NINT (p1) ozone treatment is **identical to CMIP3** (Shindell 2003 offline distribution), constituting a CMIP3→CMIP5 non-update for ozone in these realizations. TCAD/TCADI variants represent a genuine upgrade to interactive composition.
- H = HYCOM ocean (corrects earlier "HydraBASE" label — HYCOM = HYbrid Coordinate Ocean Model).

## Open questions
1. **LU (land use)**: Hurtt 2011 expected per Taylor 2012 standard but not named explicitly in Schmidt 2014 — not fully confirmed at model level.
2. **G (GHGs)**: Meinshausen 2011 expected as standard — not confirmed at model level by Schmidt 2014.
3. **"-CC" models**: Schmidt 2014 does NOT document E2-H-CC or E2-R-CC at all. Those variants require a separate primary source (likely Miller et al. 2014 or GISS CMIP5 web pages). CC suffix meaning and their physics version remain unresolved from this paper.

## Provenance
- Durack et al. 2016 model list: included
- Sources confirmed: NASA GISS CMIP5 page (data.giss.nasa.gov/modelE/cmip5/); Schmidt et al. 2014 doi:10.1002/2013MS000265; Miller et al. 2014 doi:10.1002/2013MS000266; GISS strataer page (data.giss.nasa.gov/modelforce/strataer/)
- Key quotes from Schmidt 2014: (p. 143) "The NonINTeractive ('NINT') version (physics-version=1) is similar in conception to the CMIP3 version of the model...with noninteractive (though decadally varying) fields of radiatively active components (ozone and multiple aerosol species) read in from previously calculated offline fields [Koch et al., 2011; Shindell et al., 2006a], and includes a tuned aerosol indirect effect (AIE) following Hansen et al. [2005]."
- Key quote (Schmidt 2014, p. 146): "In the NINT and TCAD simulations, the indirect aerosol effect is crudely parameterized as in Hansen et al. [2005]."
- Key quote (Schmidt 2014, p. 147): "Variations in incoming solar forcing in the 20th Century simulation follows Wang et al. [2005a]."
- Key quote (Schmidt 2014, p. 144): historical forcings include "the direct and indirect sulfate, nitrate, black carbon, and organic aerosol changes (including the impact of black carbon on snow and ice albedo), and land use/land cover changes."
- Key quote (Schmidt 2014, p. 145, sec. 2.2.2): "Sea salt, dust, and isoprene surface fluxes are calculated interactively" [in TCAD/TCADI].
- Key quote (GISS CMIP5 page verbatim): v1 (NINT) 'aerosols and ozone are read in via pre-computed transient aerosol and ozone fields'; v2 (TCAD) 'aerosols and atmospheric chemistry are calculated online as a function of atmospheric state and transient emissions inventories'; v3 (TCADI) 'as for physics_version=2, but the aerosol impacts on clouds (and hence the AIE) is calculated.'
- Key quote (Miller 2014 verbatim): "The NINT distribution of tropospheric ozone is identical to that used in the CMIP3 simulations."
- Stage 2 adversarial workflow: wf_f7556b2d-78b; 14 claims verified, 6 confirmed (1-0), 8 killed; model-name-to-physics-version mapping refuted
- Schmidt 2014 PDF read directly: pages 1–7 confirmed; six variations = 3 composition × 2 ocean; CC variants not covered.
