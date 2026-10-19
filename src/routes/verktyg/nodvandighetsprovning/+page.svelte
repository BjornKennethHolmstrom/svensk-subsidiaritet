<script>
  import { onMount } from 'svelte';
  import { locale } from '$lib/stores/i18n';
  import { necessityI18n, languageOf } from '$lib/necessity/i18n.mjs';
  import {
    newDraft, exampleDraft, newConstraint, newAlternative,
    constraintKinds, evidenceStatuses, reversibilityOptions,
    importDraft, reviewWarnings, toMarkdown
  } from '$lib/necessity/logic.mjs';

  const key = 'svensksubsidiaritet:necessity:v1'; // same local-storage key as v0.1
  let draft = newDraft(languageOf($locale));
  let step = 0;
  let saved = false;
  let message = '';
  let importInput;
  $: lang = languageOf($locale);
  $: i = necessityI18n[lang];
  $: warnings = reviewWarnings(draft, lang);
  let previousLang = languageOf($locale);
  $: if (lang !== previousLang) {
    // Only translate untouched default names. Never translate entered/imported text.
    const before = necessityI18n[previousLang].defaultAlternatives;
    if (!draft.statement && !draft.origin && !draft.context && !draft.affected
      && draft.alternatives.length === 2
      && draft.alternatives.every((a, n) => a.name === before[n]
        && !a.mechanism && !a.preserves && !a.needs && !a.harms && !a.uncertainties)) {
      draft.alternatives = draft.alternatives.map((a, n) => ({ ...a, name: necessityI18n[lang].defaultAlternatives[n] }));
    }
    previousLang = lang;
    message = '';
  }

  onMount(() => {
    // The site's global language selector controls this page; no separate selector.
    try { saved = !!localStorage.getItem(key); } catch { /* storage may be blocked */ }
  });

  function showMessage(text) { message = text; }
  function goTo(index) {
    step = Math.min(i.steps.length - 1, Math.max(0, index));
    message = '';
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function addConstraint() {
    if (draft.constraints.length >= 30) return showMessage(i.messages.maxConstraints);
    draft.constraints = [...draft.constraints, newConstraint()];
  }
  function removeConstraint(id) {
    draft.constraints = draft.constraints.filter(c => c.id !== id);
    if (!draft.constraints.length) draft.constraints = [newConstraint()];
  }
  function addAlternative() {
    if (draft.alternatives.length >= 12) return showMessage(i.messages.maxAlternatives);
    draft.alternatives = [...draft.alternatives, newAlternative(`${i.defaultAlternatives[2]} ${draft.alternatives.length}`)];
  }
  function removeAlternative(id) {
    if (draft.alternatives.length <= 2) return showMessage(i.messages.minAlternatives);
    draft.alternatives = draft.alternatives.filter(a => a.id !== id);
  }
  function loadExample() {
    if (draft.statement && !confirm(i.messages.confirmExample)) return;
    draft = exampleDraft(lang);
    step = 0;
    showMessage(i.messages.exampleLoaded);
  }
  function resetDraft() {
    if (!confirm(i.messages.confirmReset)) return;
    draft = newDraft(lang);
    step = 0;
    showMessage(i.messages.resetDone);
  }
  function saveLocal() {
    try {
      localStorage.setItem(key, JSON.stringify(draft));
      saved = true;
      showMessage(i.messages.saved);
    } catch { showMessage(i.messages.saveFailed); }
  }
  function loadLocal() {
    if (!saved) return;
    if (draft.statement && !confirm(i.messages.confirmLoad)) return;
    try {
      draft = importDraft(localStorage.getItem(key), lang);
      step = 0;
      showMessage(i.messages.loaded);
    } catch { showMessage(i.messages.loadFailed); }
  }
  function eraseLocal() {
    if (!confirm(i.messages.confirmErase)) return;
    try {
      localStorage.removeItem(key);
      saved = false;
      showMessage(i.messages.erased);
    } catch { showMessage(i.messages.eraseFailed); }
  }
  function download(content, mime, name) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }
  function exportJSON() {
    download(JSON.stringify(draft, null, 2), 'application/json;charset=utf-8', 'institutional-necessity-draft.json');
  }
  function exportMarkdown() {
    download(toMarkdown(draft, lang), 'text/markdown;charset=utf-8',
      lang === 'en' ? 'institutional-necessity-report.md' : 'nodvandighetsprovning-rapport.md');
  }
  async function copyReport() {
    try { await navigator.clipboard.writeText(toMarkdown(draft, lang)); showMessage(i.messages.copied); }
    catch { showMessage(i.messages.copyFailed); }
  }
  async function handleImport(event) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    try {
      if (file.size > 500_000) throw new Error('TOO_LARGE');
      const content = await file.text();
      const restored = importDraft(content, lang);
      if (draft.statement && !confirm(i.messages.confirmImport)) return;
      draft = restored;
      step = 0;
      showMessage(i.messages.imported);
    } catch (error) {
      const reason = error instanceof Error ? error.message : '';
      const localizedReason = reason === 'TOO_LARGE' ? i.messages.tooLarge
        : reason === 'INVALID_STRUCTURE' ? i.messages.invalidStructure
        : reason === 'UNSUPPORTED_VERSION' ? i.messages.unsupportedVersion
        : i.messages.invalidFormat;
      showMessage(`${i.messages.importFailed}: ${localizedReason}`);
    } finally { if (importInput) importInput.value = ''; }
  }
</script>

<svelte:head>
  <title>{i.title} | Svensk Subsidiaritet</title>
  <meta name="description" content={i.seo} />
</svelte:head>

<div class="necessity-tool" lang={lang}>
  <div class="breadcrumb"><a href="/verktyg/">{i.back}</a></div>
  <header class="intro">
    <span class="eyebrow">{i.eyebrow}</span>
    <h1>{i.shortTitle}<br /><span>{i.titleSecond}</span></h1>
    <p class="lede">{i.lede}</p>
    <div class="intro-actions">
      <button type="button" class="outline" on:click={loadExample}>{i.exampleButton}</button>
      <button type="button" class="text-button" on:click={resetDraft}>{i.blankButton}</button>
    </div>
    <p class="privacy">{i.privacy}</p>
  </header>

  <nav aria-label={i.stepNav} class="step-nav">
    {#each i.steps as label, index}
      <button type="button" class:active={step === index} aria-current={step === index ? 'step' : undefined} on:click={() => goTo(index)}>
        <span class="step-num">{index + 1}</span><span class="step-label">{label}</span>
      </button>
    {/each}
  </nav>

  <main class="panel">
    <div class="panel-heading">
      <span class="small-cap">{i.stepCount(step + 1)}</span>
      <h2>{i.headings[step]}</h2>
      <p>{i.introductions[step]}</p>
    </div>
    {#if step === 0}
      <div class="field">
        <label for="statement">{i.fields.statement}</label>
        <textarea id="statement" bind:value={draft.statement} rows="3" maxlength="6000" placeholder={i.placeholders.statement} />
        <small>{i.statementHelp}</small>
      </div>
      <div class="field"><label for="origin">{i.fields.origin}</label><input id="origin" bind:value={draft.origin} maxlength="6000" placeholder={i.placeholders.origin} /></div>
      <div class="field"><label for="context">{i.fields.context}</label><textarea id="context" bind:value={draft.context} rows="3" maxlength="6000" placeholder={i.placeholders.context} /></div>
      <div class="field"><label for="affected">{i.fields.affected}</label><textarea id="affected" bind:value={draft.affected} rows="3" maxlength="6000" placeholder={i.placeholders.affected} /></div>
      <aside class="tip"><strong>{i.tips[0][0]}</strong> {i.tips[0][1]}</aside>
    {:else if step === 1}
      {#each draft.constraints as c, index (c.id)}
        <section class="entry-card">
          <div class="entry-heading"><h3>{i.constraintN(index + 1)}</h3><button type="button" class="remove" on:click={() => removeConstraint(c.id)} aria-label={i.removeConstraintN(index + 1)}>{i.remove}</button></div>
          <div class="field"><label for={`c-desc-${c.id}`}>{i.fields.constraintDescription}</label><textarea id={`c-desc-${c.id}`} rows="2" maxlength="6000" bind:value={c.description} placeholder={i.placeholders.constraintDescription} /></div>
          <div class="two-cols">
            <div class="field"><label for={`c-kind-${c.id}`}>{i.fields.kind}</label><select id={`c-kind-${c.id}`} bind:value={c.kind}>{#each constraintKinds as kind}<option value={kind.value}>{i.kinds[kind.value][0]}</option>{/each}</select></div>
            <div class="field"><label for={`c-status-${c.id}`}>{i.fields.status}</label><select id={`c-status-${c.id}`} bind:value={c.status}>{#each evidenceStatuses as status}<option value={status.value}>{i.statuses[status.value]}</option>{/each}</select></div>
          </div>
          <p class="hint">{i.kinds[c.kind]?.[1] || i.kinds.unknown[1]}</p>
          <div class="field"><label for={`c-evidence-${c.id}`}>{i.fields.constraintEvidence}</label><textarea id={`c-evidence-${c.id}`} rows="2" maxlength="6000" bind:value={c.evidence} placeholder={i.placeholders.constraintEvidence} /></div>
          <div class="field"><label for={`c-source-${c.id}`}>{i.fields.source}</label><input id={`c-source-${c.id}`} maxlength="6000" bind:value={c.source} placeholder={i.placeholders.source} /></div>
          <div class="field"><label for={`c-authority-${c.id}`}>{i.fields.whoCanChange}</label><input id={`c-authority-${c.id}`} maxlength="6000" bind:value={c.whoCanChange} placeholder={i.placeholders.whoCanChange} /></div>
          <div class="field"><label for={`c-condition-${c.id}`}>{i.fields.conditions}</label><textarea id={`c-condition-${c.id}`} rows="2" maxlength="6000" bind:value={c.conditions} placeholder={i.placeholders.conditions} /></div>
        </section>
      {/each}
      <button type="button" class="outline" on:click={addConstraint}>{i.addConstraint}</button>
      <aside class="tip"><strong>{i.tips[1][0]}</strong> {i.tips[1][1]}</aside>
    {:else if step === 2}
      <div class="field"><label for="benefits">{i.fields.currentBenefit}</label><textarea id="benefits" bind:value={draft.currentBenefit} rows="4" maxlength="6000" placeholder={i.placeholders.currentBenefit} /></div>
      <div class="field"><label for="cost">{i.fields.currentCost}</label><textarea id="cost" bind:value={draft.currentCost} rows="4" maxlength="6000" placeholder={i.placeholders.currentCost} /></div>
      <div class="field"><label for="noChange">{i.fields.noChange}</label><textarea id="noChange" bind:value={draft.noChange} rows="4" maxlength="6000" placeholder={i.placeholders.noChange} /></div>
      <div class="field"><label for="defense">{i.fields.strongestDefense}</label><textarea id="defense" bind:value={draft.strongestDefense} rows="4" maxlength="6000" placeholder={i.placeholders.strongestDefense} /></div>
      <aside class="tip"><strong>{i.tips[2][0]}</strong> {i.tips[2][1]}</aside>
    {:else if step === 3}
      {#each draft.alternatives as alt, index (alt.id)}
        <section class="entry-card">
          <div class="entry-heading"><h3>{i.alternativeN(index + 1)}</h3>{#if draft.alternatives.length > 2}<button type="button" class="remove" on:click={() => removeAlternative(alt.id)} aria-label={i.removeAlternativeN(index + 1)}>{i.remove}</button>{/if}</div>
          <div class="field"><label for={`a-name-${alt.id}`}>{i.fields.altName}</label><input id={`a-name-${alt.id}`} bind:value={alt.name} maxlength="160" /></div>
          <div class="field"><label for={`a-mechanism-${alt.id}`}>{i.fields.mechanism}</label><textarea id={`a-mechanism-${alt.id}`} bind:value={alt.mechanism} rows="3" maxlength="6000" /></div>
          <div class="field"><label for={`a-preserves-${alt.id}`}>{i.fields.preserves}</label><textarea id={`a-preserves-${alt.id}`} bind:value={alt.preserves} rows="2" maxlength="6000" placeholder={i.placeholders.preserves} /></div>
          <div class="field"><label for={`a-needs-${alt.id}`}>{i.fields.needs}</label><textarea id={`a-needs-${alt.id}`} bind:value={alt.needs} rows="2" maxlength="6000" placeholder={i.placeholders.needs} /></div>
          <div class="field"><label for={`a-harms-${alt.id}`}>{i.fields.harms}</label><textarea id={`a-harms-${alt.id}`} bind:value={alt.harms} rows="2" maxlength="6000" /></div>
          <div class="field"><label for={`a-unknowns-${alt.id}`}>{i.fields.uncertainties}</label><textarea id={`a-unknowns-${alt.id}`} bind:value={alt.uncertainties} rows="2" maxlength="6000" /></div>
          <div class="field"><label for={`a-evidence-${alt.id}`}>{i.fields.altEvidence}</label><textarea id={`a-evidence-${alt.id}`} bind:value={alt.evidence} rows="2" maxlength="6000" /></div>
          <div class="two-cols">
            <div class="field"><label for={`a-authority-${alt.id}`}>{i.fields.authority}</label><input id={`a-authority-${alt.id}`} bind:value={alt.authority} maxlength="6000" /></div>
            <div class="field"><label for={`a-reverse-${alt.id}`}>{i.fields.reversibility}</label><select id={`a-reverse-${alt.id}`} bind:value={alt.reversibility}>{#each reversibilityOptions as value}<option value={value}>{i.reversibility[value]}</option>{/each}</select></div>
          </div>
        </section>
      {/each}
      <button type="button" class="outline" on:click={addAlternative}>{i.addAlternative}</button>
      <aside class="tip"><strong>{i.tips[3][0]}</strong> {i.tips[3][1]}</aside>
    {:else}
      <div class="field"><label for="ex-question">{i.fields.question}</label><textarea id="ex-question" bind:value={draft.experiment.question} rows="2" maxlength="6000" /></div>
      <div class="field"><label for="ex-approach">{i.fields.approach}</label><textarea id="ex-approach" bind:value={draft.experiment.approach} rows="3" maxlength="6000" placeholder={i.placeholders.approach} /></div>
      <div class="field"><label for="ex-measures">{i.fields.metrics}</label><textarea id="ex-measures" bind:value={draft.experiment.metrics} rows="2" maxlength="6000" placeholder={i.placeholders.metrics} /></div>
      <div class="field"><label for="ex-guardrails">{i.fields.guardrails}</label><textarea id="ex-guardrails" bind:value={draft.experiment.guardrails} rows="2" maxlength="6000" placeholder={i.placeholders.guardrails} /></div>
      <div class="field"><label for="ex-stop">{i.fields.stopRule}</label><textarea id="ex-stop" bind:value={draft.experiment.stopRule} rows="2" maxlength="6000" /></div>
      <div class="field"><label for="ex-participants">{i.fields.participants}</label><textarea id="ex-participants" bind:value={draft.experiment.participants} rows="2" maxlength="6000" /></div>
      <div class="field"><label for="ex-mandate">{i.fields.mandate}</label><textarea id="ex-mandate" bind:value={draft.experiment.mandate} rows="2" maxlength="6000" /></div>
      <div class="field"><label for="ex-duration">{i.fields.duration}</label><input id="ex-duration" bind:value={draft.experiment.duration} maxlength="6000" placeholder={i.placeholders.duration} /></div>
      <div class="field"><label for="ex-conclusion">{i.fields.interpretation}</label><textarea id="ex-conclusion" bind:value={draft.experiment.interpretation} rows="3" maxlength="6000" placeholder={i.placeholders.interpretation} /></div>
      <section class="review" aria-label={i.reviewLabel}>
        <h3>{i.reviewTitle}</h3>
        {#if warnings.length}<ul>{#each warnings as warning}<li>{warning}</li>{/each}</ul>{:else}<p>{i.reviewOk}</p>{/if}
      </section>
      <section class="export">
        <h3>{i.exportTitle}</h3><p>{i.exportHelp}</p>
        <div class="button-row">
          <button type="button" class="primary" on:click={exportMarkdown}>{i.exportMarkdown}</button>
          <button type="button" class="outline" on:click={exportJSON}>{i.exportJSON}</button>
          <button type="button" class="outline" on:click={copyReport}>{i.copyReport}</button>
        </div>
      </section>
    {/if}

    <div class="panel-footer">
      {#if step > 0}<button class="outline" type="button" on:click={() => goTo(step - 1)}>{i.previous}</button>{:else}<span />{/if}
      {#if step < i.steps.length - 1}<button class="primary" type="button" on:click={() => goTo(step + 1)}>{i.next}: {i.steps[step + 1]} →</button>{:else}<button class="outline" type="button" on:click={() => goTo(0)}>{i.start}</button>{/if}
    </div>
  </main>

  <section class="draft-tools" aria-label={i.draftsLabel}>
    <div><h2>{i.draftsTitle}</h2><p>{i.draftsHelp}</p></div>
    <div class="button-row">
      <button type="button" class="outline" on:click={saveLocal}>{i.save}</button>
      {#if saved}<button type="button" class="outline" on:click={loadLocal}>{i.open}</button><button type="button" class="text-button" on:click={eraseLocal}>{i.erase}</button>{/if}
      <label for="import-file" class="upload-button">{i.importJSON}</label>
      <input id="import-file" class="visually-hidden" type="file" accept="application/json,.json" bind:this={importInput} on:change={handleImport} />
    </div>
    {#if message}<p class="status" role="status" aria-live="polite">{message}</p>{/if}
  </section>
  <footer class="local-footer">{i.footerPrefix} <a href="/verktyg/">{i.site}</a>.</footer>
</div>

<style>
  .necessity-tool{--ink:#153631;--muted:#566d67;--accent:#087d70;--accent-dark:#066458;--line:#d6e1dc;--wash:#f4f8f5;--paper:#fff;max-width:960px;margin:0 auto;padding:2rem 1.35rem 5rem;color:var(--ink);font-family:inherit;line-height:1.5}
  .breadcrumb{font-size:.91rem;margin-bottom:1.75rem}.breadcrumb a,.local-footer a{color:var(--accent);text-decoration:underline;text-underline-offset:3px}
  .intro{padding:1.7rem 0 2.4rem}.eyebrow,.small-cap{display:block;font-weight:750;letter-spacing:.13em;text-transform:uppercase;color:var(--accent);font-size:.72rem}
  h1{font-size:clamp(2.1rem,5.4vw,4.15rem);line-height:1.08;letter-spacing:-.045em;max-width:900px;margin:.6rem 0 1.25rem;font-weight:800}h1 span{color:var(--accent)}
  .lede{font-size:clamp(1.09rem,2vw,1.33rem);max-width:760px;line-height:1.66;color:var(--muted);margin:0 0 1.5rem}.privacy{font-size:.87rem;color:var(--muted);max-width:760px;margin:1rem 0 0}
  button,.upload-button{cursor:pointer;font:inherit;border-radius:10px;padding:.65rem 1rem;font-size:.92rem;font-weight:650;transition:background-color .14s, border-color .14s}button:focus-visible,.upload-button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #85cebb;outline-offset:2px}button:disabled{opacity:.55;cursor:not-allowed}
  .primary{background:var(--accent);color:white;border:1px solid var(--accent)}.primary:hover{background:var(--accent-dark)}.outline{background:white;color:var(--ink);border:1px solid #aec8bc}.outline:hover,.upload-button:hover{background:var(--wash)}.text-button{background:transparent;color:var(--accent-dark);border:1px solid transparent}.text-button:hover{text-decoration:underline}
  .intro-actions,.button-row{display:flex;gap:.65rem;flex-wrap:wrap;align-items:center}
  .step-nav{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.45rem;margin-bottom:1rem}
  .step-nav button{border:1px solid var(--line);border-radius:12px;background:var(--paper);color:var(--muted);font-weight:620;display:flex;align-items:center;justify-content:center;gap:.55rem;min-height:54px;padding:.5rem}.step-nav button:hover{background:var(--wash)}.step-nav button.active{border-color:var(--accent);background:#eaf5f0;color:var(--ink)}
  .step-num{width:1.6rem;height:1.6rem;border-radius:100%;display:inline-grid;place-items:center;flex:none;background:#e6eee9;font-size:.83rem}.active .step-num{background:var(--accent);color:white}.step-label{font-size:.84rem}
  .panel{border:1px solid var(--line);border-radius:18px;background:var(--paper);padding:clamp(1.1rem,3.5vw,2.1rem);box-shadow:0 12px 36px rgba(17,53,43,.045)}
  .panel-heading{margin-bottom:2rem}.panel-heading h2{font-size:clamp(1.5rem,2.5vw,2rem);line-height:1.2;letter-spacing:-.025em;margin:.55rem 0}.panel-heading p{color:var(--muted);margin:.5rem 0 0;max-width:680px}
  .field{display:flex;flex-direction:column;gap:.37rem;margin-bottom:1.22rem}.field label{font-weight:650;font-size:.95rem}.field small,.hint{font-size:.83rem;color:var(--muted);margin:0}
  .field input,.field textarea,.field select{width:100%;box-sizing:border-box;border-radius:10px;border:1px solid #b9cbbf;background:#fff;color:var(--ink);padding:.72rem .82rem;line-height:1.45;font:inherit;font-size:.96rem;max-width:100%}.field textarea{min-height:80px;resize:vertical}.field input::placeholder,.field textarea::placeholder{color:#778981;opacity:1}
  .two-cols{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.two-cols .field{min-width:0}.tip{border-left:3px solid var(--accent);background:var(--wash);padding:1rem 1.1rem;border-radius:0 10px 10px 0;color:#34584f;font-size:.93rem;margin-top:1.3rem}
  .entry-card{background:#fbfcfb;border:1px solid var(--line);border-radius:14px;padding:1.25rem 1.1rem;margin:1.1rem 0 1.4rem}.entry-card .field:last-child{margin-bottom:0}.entry-heading{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.1rem}.entry-heading h3{font-size:1.1rem;margin:0}.remove{padding:.3rem .5rem;border:0;background:transparent;color:#a13636;font-size:.86rem}.remove:hover{text-decoration:underline}.hint{margin:-.6rem 0 1rem}
  .review{margin:2rem 0;padding:1.3rem;background:#fffaf1;border:1px solid #e4d8b4;border-radius:12px}.review h3,.export h3{margin:0 0 .6rem;font-size:1.1rem}.review ul{padding-left:1.2rem;margin:.7rem 0}.review li{margin:.4rem 0}.export{border-top:1px solid var(--line);padding-top:1.6rem}.export p{color:var(--muted);font-size:.93rem}
  .panel-footer{border-top:1px solid var(--line);padding-top:1.25rem;margin-top:2rem;display:flex;align-items:center;justify-content:space-between;gap:.7rem;flex-wrap:wrap}
  .draft-tools{border:1px solid var(--line);border-radius:14px;background:var(--wash);padding:1.3rem;margin-top:1.25rem}.draft-tools h2{font-size:1.1rem;margin:0}.draft-tools p{font-size:.87rem;color:var(--muted);margin:.4rem 0 1rem}.draft-tools .button-row button,.upload-button{font-size:.86rem}.upload-button{display:inline-block;background:white;color:var(--ink);border:1px solid #aec8bc}.status{margin:.85rem 0 0!important;font-weight:650;color:var(--accent-dark)!important}
  .visually-hidden{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.local-footer{color:var(--muted);margin-top:1.5rem;font-size:.82rem}
  @media(max-width:700px){.step-nav{gap:.3rem}.step-nav button{flex-direction:column;gap:.2rem;min-height:66px;padding:.35rem .18rem}.step-label{font-size:.66rem;line-height:1.25}.two-cols{grid-template-columns:1fr;gap:0}.necessity-tool{padding:1rem .75rem 3rem}.intro{padding:1rem 0 1.65rem}.panel{padding:1.15rem}.entry-card{padding:.85rem}}
  @media(prefers-reduced-motion:reduce){button{transition:none}}
</style>
