// CMIP6 Second-Pass PDF Extraction — Batch Workflow
//
// Usage (sequential — reads current_batch from state.json):
//   Workflow({ scriptPath: '<this file>' })
//
// Usage (parallel — specify a batch by ID):
//   Workflow({ scriptPath: '<this file>', args: 2 })
//   Workflow({ scriptPath: '<this file>', args: 3 })
//   Both can run concurrently; each touches different model files.
//   Pass skip_csv: true when running parallel batches; do one CSV pass after all finish.
//   Example parallel args: 2   or   "3"   (integer or string integer accepted)
//
// Resume a failed/interrupted run:
//   Workflow({ scriptPath: '<this file>', resumeFromRunId: '<prior run_id>', args: <same as original> })
//   Completed agents return cached results; only incomplete agents re-run.
//
// After completion, the LAUNCHER (Claude) updates state.json:
//   - marks the batch as complete in completed_batches[]
//   - advances current_batch by 1

export const meta = {
  name: 'cmip6-pdf-batch',
  description: 'Full-paper PDF forcing extraction via pdftotext (xcd0112 env); runs one batch from second-pass-state.json',
  phases: [
    { title: 'Load',    detail: 'Read state.json; identify target batch' },
    { title: 'Extract', detail: 'pdftotext full-paper extraction, one agent per model' },
    { title: 'Update',  detail: 'Write verdicts to model .md files and CSV' },
  ],
}

const BASE      = '/home/duro/git/Duracketal25-MIPForcingReview'
const MDIR      = BASE + '/research/cmip6/models'
const RES       = BASE + '/resources'
const CSV_PATH  = BASE + '/research/cmip6/data/verified-forcing-matrix.csv'
const PDFTOTEXT = 'mamba run -n xcd0112 pdftotext -layout'

// Default state path — overridable via args.state_path
let statePath = BASE + '/research/cmip6/automation/second-pass-state.json'

// Forcing verdict reference card
const REFS = `
VERDICT CODES (exact Unicode required):
  ✓std  = standard CMIP6 dataset
  ＋exc  = interactive / exceeds standard
  ✗dev  = deviates from standard
  ~     = hybrid / centre-specific
  ?     = unverified (not mentioned anywhere in the complete paper)
  n/a   = not applicable

TEMPORAL: TV=time-varying  FXc=fixed climatology  FXk=fixed constant

STANDARD CMIP6 FORCING DATASETS (each = ✓std if used):
  G:     Meinshausen 2017 GHG concentrations       doi:10.5194/gmd-10-2057-2017
  O:     CCMI ozone — Hegglin2016 or Keeble2021    (interactive trop+strat = ＋exc; non-CCMI = ✗dev)
  SD/SI: MACv2-SP optical depth (Stevens 2017)     doi:10.1002/2017GL073508
         OR GLOMAP-mode driven by CEDS+BB4CMIP6 emissions
  BC/OC: MACv2-SP prescribed OR CEDS+BB4CMIP6 emissions-driven
  MD/SS: Kinne 2013 natural background OR online interactive
  LU:    LUH2 (Hurtt 2020)                         doi:10.5194/gmd-13-5425-2020
  SO:    Matthes 2017 / SOLARIS-HEPPA              doi:10.5194/gmd-10-3513-2017
  VL:    Thomason 2018 / IACETH CMIP6 strat. AOD   doi:10.5194/essd-9-809-2017
  N-dep: NCAR CCMI-2-0                             doi:10.22033/ESGF/input4MIPs.1125
`

const SCHEMA = {
  type: 'object',
  properties: {
    source_id:           { type: 'string' },
    G:  { type: 'string' }, O:  { type: 'string' },
    SD: { type: 'string' }, SI: { type: 'string' },
    BC: { type: 'string' }, OC: { type: 'string' },
    MD: { type: 'string' }, SS: { type: 'string' },
    LU: { type: 'string' }, SO: { type: 'string' },
    VL: { type: 'string' },
    esm_inputs:          { type: 'string',
                           description: 'N-dep / Fe-dep / CO2-mode notation. Empty for non-ESMs.' },
    protocol_deviations: { type: 'string',
                           description: 'Short comma-separated deviations found.' },
    notes_update:        { type: 'string',
                           description: 'Text to APPEND to model .md Notes section. Cite paper and datasets.' },
    key_findings:        { type: 'array', items: { type: 'string' }, maxItems: 5 },
    still_unknown:       { type: 'array', items: { type: 'string' },
                           description: 'Components that are not mentioned anywhere in the complete paper.' },
    missing_citations:   { type: 'string',
                           description: 'Papers not in /resources/ needed for still_unknown. Format: AuthorYY Journal doi:XXX. Empty if none.' }
  },
  required: ['source_id', 'G', 'O', 'SD', 'SI', 'BC', 'OC', 'MD', 'SS', 'LU', 'SO', 'VL',
             'key_findings', 'still_unknown']
}

// ── PARSE ARGS ────────────────────────────────────────────────────────────────
// Support: no args, integer, string integer, JSON-string object, or plain object
// The workflow harness may pass object args as a JSON-encoded string — handle both.
let targetBatchId = null
let skipCSV = false

if (args !== undefined && args !== null) {
  // Unwrap JSON string if the harness serialised the object arg
  let a = args
  if (typeof a === 'string') {
    const t = a.trim()
    if (t.startsWith('{') || t.startsWith('[')) {
      try { a = JSON.parse(t) } catch (e) { /* keep as string */ }
    }
  }

  if (typeof a === 'number') {
    targetBatchId = Math.floor(a)
  } else if (typeof a === 'string' && /^\d+$/.test(a.trim())) {
    targetBatchId = parseInt(a.trim(), 10)
  } else if (typeof a === 'object' && a !== null) {
    if (a.batch_id)   targetBatchId = parseInt(a.batch_id, 10)
    if (a.skip_csv)   skipCSV = true
    if (a.state_path) statePath = a.state_path
  }
}

// ── PHASE 1: LOAD STATE ───────────────────────────────────────────────────────
phase('Load')

const stateRaw = await agent(
  `Read the file at: ${statePath}\nReturn ONLY the raw JSON — no markdown, no explanation.`,
  { label: 'read-state', phase: 'Load', effort: 'low' }
)

let state
try {
  const txt   = typeof stateRaw === 'string' ? stateRaw : JSON.stringify(stateRaw)
  const clean = txt.replace(/^```[a-z]*\n?/m, '').replace(/\n?```$/m, '').trim()
  state = JSON.parse(clean)
} catch (e) {
  log('ERROR: Could not parse state.json — ' + e.message)
  return { error: 'state-parse-failed' }
}

const batchId = targetBatchId || state.current_batch
if (batchId > state.total_batches) {
  log('All ' + state.total_batches + ' batches complete.')
  return { status: 'all-complete' }
}

const batch = state.batches.find(b => b.id === batchId)
if (!batch) {
  log('ERROR: Batch ' + batchId + ' not found in state.json')
  return { error: 'batch-not-found', batch_id: batchId }
}

log('Batch ' + batch.id + '/' + state.total_batches + ': ' + batch.label)
log('Models: ' + batch.models.join(', '))
log('PDFs: ' + batch.pdfs.join(', '))
log('skip_csv: ' + skipCSV)

// ── BUDGET CHECK ──────────────────────────────────────────────────────────────
if (budget.total && budget.remaining() < 300000) {
  log('BUDGET LOW: ' + budget.remaining() + ' remaining — batch ' + batchId + ' skipped')
  return { batch_id: batchId, status: 'skipped-low-budget', remaining: budget.remaining() }
}

// ── PHASE 2: EXTRACT (one agent per model, parallel) ─────────────────────────
phase('Extract')

const extractions = await parallel(batch.models.map((model, i) => () => {
  const modelFile = MDIR + '/' + batch.model_files[i]
  const targets   = (batch.target_unknowns && batch.target_unknowns[model]) || ['all components']
  const batchNote = batch.note || ''

  // Per-model PDF override: if batch.per_model_pdfs[model] exists, use it; else fall back to batch.pdfs
  const modelPdfs = (batch.per_model_pdfs && batch.per_model_pdfs[model]) || batch.pdfs
  // Replace any non-ASCII characters (e.g. Unicode hyphens U+2010/U+2011) with * so
  // find -name glob matching works regardless of which Unicode hyphen variant was used.
  const pdfCmds = modelPdfs.map(p => {
    const globPattern = p.replace(/[^\x00-\x7F]+/g, '*').replace(/\*+/g, '*')
    return `  ${PDFTOTEXT} "$(find "${RES}" -name "${globPattern}" -type f 2>/dev/null | head -1)" -`
  }).join('\n')

  return agent(
`CMIP6 FORCING EXTRACTION — ${model}

═══ STEP 1: Read the current model file ═══
Read: ${modelFile}

═══ STEP 2: Extract the complete text of every PDF for this batch ═══
Use the Bash tool to run pdftotext on each PDF. Read the FULL output of each command:

${pdfCmds}

The -layout flag preserves table formatting. Read ALL output — do not truncate.
Look especially for any section, table, or appendix covering:
  "Forcing", "External forcing(s)", "CMIP6 forcing", "Historical simulations",
  "Experimental design", "Model configuration", forcing tables, dataset appendices.

═══ STEP 3: Extract verdicts for ${model} ═══
Target unknowns: ${targets.join(', ')}

  • Keep ALL existing non-? verdicts UNCHANGED.
  • Only assign a confirmed verdict where the paper provides explicit evidence.
  • If a component is not mentioned anywhere in the complete paper(s), return ? for it
    and add it to still_unknown — do NOT guess or infer.

═══ STEP 4: Edit the model .md file ═══
  • Update the Forcing table rows: fill Dataset and Verdict for resolved components.
  • Append a brief note to the Notes section naming the paper read and datasets confirmed.
  • No restructuring — targeted edits only.

═══ STEP 5: Return structured data via the schema ═══

BATCH NOTE: ${batchNote}

${REFS}`,
    { label: model, phase: 'Extract', schema: SCHEMA, effort: 'medium' }
  )
}))

const results = extractions.filter(Boolean)
log(results.length + '/' + batch.models.length + ' extractions returned')

if (results.length === 0) {
  return { batch_id: batchId, batch_label: batch.label, status: 'no-results' }
}

// ── PHASE 3: CSV UPDATE ───────────────────────────────────────────────────────
phase('Update')

if (skipCSV) {
  log('skip_csv=true — CSV update deferred to launcher')
} else if (budget.total && budget.remaining() < 40000) {
  log('BUDGET LOW before CSV update — model files updated, CSV skipped')
} else {
  await agent(
`Update verified-forcing-matrix.csv for batch ${batchId} (${batch.label}).

CSV PATH: ${CSV_PATH}

RESULTS:
${JSON.stringify(results, null, 2)}

RULES:
1. Read the full CSV.
2. For each result, find the row matching source_id exactly.
3. Update ONLY cells that are currently ? AND the result provides a confirmed non-? verdict.
   NEVER downgrade a confirmed verdict (✓std / ＋exc / ✗dev / ~) to ? or a different value
   unless key_findings explicitly documents a correction with evidence.
4. esm_inputs: APPEND after semicolon — do not replace existing text.
5. protocol_deviations: APPEND after semicolon — do not replace existing text.
6. Use Edit tool to replace each modified row. Exact CSV format: no spaces around commas,
   exact Unicode characters (✓ ＋ ✗ ~), no row additions or deletions.
7. Print a concise summary: which source_ids updated, which columns changed.`,
    { label: 'CSV-Update', phase: 'Update', effort: 'low' }
  )
}

// ── RETURN RESULT ─────────────────────────────────────────────────────────────
return {
  batch_id:          batchId,
  batch_label:       batch.label,
  status:            'complete',
  next_batch:        batchId + 1,
  skip_csv:          skipCSV,
  models_processed:  results.map(r => r.source_id),
  still_unknown:     results.map(r => ({ model: r.source_id, unknowns: r.still_unknown })),
  missing_citations: results
                       .filter(r => r.missing_citations && r.missing_citations.length > 0)
                       .map(r => ({ model: r.source_id, citations: r.missing_citations })),
  raw_results:       results
}
