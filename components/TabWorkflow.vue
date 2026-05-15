<script setup>
import { ref } from 'vue'

const activeTab = ref('DEFINE')
const copied = ref(false)

function copyPrompt() {
  navigator.clipboard.writeText(panels[activeTab.value].prompt).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 1800)
  })
}

const tabs = [
  { key: 'DEFINE',  label: 'DEFINE' },
  { key: 'DESIGN',  label: 'DESIGN' },
  { key: 'DEVELOP', label: 'DEVELOP' },
  { key: 'DEPLOY',  label: 'DEPLOY' },
]

const panels = {
  DEFINE: {
    headline: 'Align before you build',
    items: [
      { label: 'Identity', detail: 'Role + value prop in one line. Specific to this audience, not everyone.' },
      { label: 'Audience + action', detail: '"Hiring managers at AI startups in NYC" beats "tech recruiters." One specific desired action.' },
      { label: 'Projects', detail: 'Link to repos, docs, or case studies. One measurable outcome each — what shipped, what changed.' },
      { label: 'Voice', detail: '3–5 verbs or nouns, not adjectives. Used to strip AI slop after generation.' },
      { label: 'Definition of done', detail: 'Lighthouse ≥90, mobile tested, meta + OG in place, one shareable URL.' },
      { label: 'Antipatterns', detail: 'Aesthetics you hate, phrases to ban. Negative examples cut iteration rounds.' },
    ],
    prompt: `Ask me questions to help me spec and clarify a site for my audience.

Role: {ROLE}
Audience: {AUDIENCE} — specific, not generic
Action: {DESIRED_ACTION}
Voice (3–5 verbs/nouns): {VOICE_KEYWORDS}

Projects (repo/doc link + one outcome each):
{PROJECTS}

Aesthetic: {AESTHETIC}
References: {REFERENCES}
Antipatterns: {ANTIPATTERNS}

Done when: Lighthouse ≥90, mobile tested, OG tags, one URL.
No: delve, showcase, robust, seamless, innovative.`,
    promptLabel: 'Identity prompt — paste into preferred service',
    cta: null,
  },
  DESIGN: {
    headline: 'Decide how it looks before you build',
    items: [
      { label: 'Pick your feeling first', detail: 'One phrase: calm and minimal, bold and direct, editorial, warm. This is your anchor — give it to every prompt.' },
      { label: 'Find 2-3 sites you love', detail: 'Screenshot or save the URLs. Note what to borrow: colors, how text is set, how much breathing room things have.' },
      { label: 'Choose your colors', detail: 'A background, a text color, and one accent. Make sure they\'re readable together. Commit before you start prompting.' },
      { label: 'Pick your fonts', detail: 'One for headlines, one for body text. System fonts (Inter, Georgia) load fast and look sharp. Simpler is better.' },
      { label: 'Save your choices in a file', detail: 'Write decisions into DESIGN.md. Drop it into Lovable Knowledge so every session starts from the same baseline.' },
      { label: 'Re-attach, don\'t reinvent', detail: 'Starting a new chat? Re-attach DESIGN.md. Prevents AI from guessing at your colors or layout mid-build.' },
    ],
    prompt: `I'm designing a personal portfolio website.
Here's what I know about how I want it to look:

Feeling: {ONE_WORD_OR_PHRASE}
Sites I like: {URLS_OR_DESCRIPTIONS}
What I like about them: {WHAT_TO_BORROW}
Colors I'm drawn to: {COLOR_PREFERENCES}
Fonts I like: {FONT_PREFERENCES}

Ask me questions to lock in my visual
direction before we start building.
Then summarize my choices as a DESIGN.md
I can reuse in every future session.`,
    promptLabel: 'Design direction prompt — talk it through first',
    cta: null,
  },
  DEVELOP: {
    headline: 'Step-by-step: spec in, site out',
    items: [
      { label: 'Start in Plan mode', detail: 'Click Plan (or Alt+P). Lovable asks questions before writing code — catches misalignments before they cost you.' },
      { label: '+ → Attach your spec files', detail: 'Upload DEFINE.prompt.md and design.md. Lovable loads them as context for the full session.' },
      { label: '+ → Design for references', detail: 'Attach screenshots of sites to borrow from. Lovable\'s vision model extracts spacing, type, and color cues.' },
      { label: '+ → Connectors / Databases', detail: 'Link Notion, Airtable, or a CMS if your content already exists. Real copy instead of placeholders.' },
      { label: 'Follow the agentic prompts', detail: 'Lovable surfaces design directions — pick one, don\'t skip. Each choice narrows scope and prevents drift.' },
      { label: 'Visual edits for tweaks', detail: 'After build, click Visual edits in the chat bar to target a specific element without describing it in words.' },
    ],
    prompt: `I'm building a personal portfolio.
Files attached: DEFINE.prompt.md, DESIGN.md

Start in Plan mode — ask me questions
before writing any code.

When ready to build:
- Copy + structure: follow DEFINE.prompt.md
- Follow DESIGN.md exactly
- Show 2-3 design directions before committing

No placeholder copy. No Lorem ipsum.
No deviations from tokens in DESIGN.md.`,
    promptLabel: 'Opening prompt — attach files first, then paste',
    cta: null,
  },
  DEPLOY: {
    headline: 'Get a URL in under 5 minutes',
    items: [
      { label: 'Step 1 — Deploy', detail: 'Click the Deploy button in the top navigation bar of your Lovable project.' },
      { label: 'Step 2 — Publish', detail: 'Click Publish. Live instantly. No installs, no terminal.' },
      { label: 'Step 3 — Copy your URL', detail: 'yourname.lovable.app — paste it anywhere, it works immediately.' },
      { label: 'Custom domain (optional)', detail: 'Settings → Domain → Add domain → point DNS CNAME to lovable.app. ~2 min propagation.' },
      { label: 'Pre-flight check', detail: 'Title tag, OG image in iMessage preview, phone layout. Lighthouse ≥90.' },
    ],
    prompt: `Lovable — no terminal needed
1. Open project in Lovable
2. Click Deploy → Publish
3. Copy your URL: yourname.lovable.app

Custom domain (optional)
→ Settings → Domain → Add domain
→ At your registrar: add CNAME → lovable.app
→ Wait 2-5 min, then visit your domain

─────────────────────────────
Exported code? Use Vercel:
→ vercel.com → New Project → Import Repo
→ Click Deploy — no terminal needed`,
    promptLabel: 'Step-by-step — Lovable first',
    cta: null,
  },
}
</script>

<template>
  <div class="tw-root">
    <!-- Tab bar -->
    <div class="tw-tabs" role="tablist">
      <button
        v-for="t in tabs"
        :key="t.key"
        :class="['tw-tab', activeTab === t.key && 'tw-tab--active']"
        role="tab"
        :aria-selected="activeTab === t.key"
        @click="activeTab = t.key"
      >
        {{ t.label }}
      </button>
    </div>

    <!-- Panel -->
    <transition name="tw-fade" mode="out-in">
      <div :key="activeTab" class="tw-panel">
        <div class="tw-panel-left">
          <p class="tw-panel-headline">{{ panels[activeTab].headline }}</p>
          <ul class="tw-items">
            <li v-for="(item, i) in panels[activeTab].items" :key="i" class="tw-item">
              <span class="tw-item-marker">→</span>
              <span>
                <strong class="tw-item-label">{{ item.label }}</strong>
                <span class="tw-item-detail"> — {{ item.detail }}</span>
              </span>
            </li>
          </ul>
        </div>
        <div class="tw-panel-right">
          <p class="tw-prompt-label">{{ panels[activeTab].promptLabel }}</p>
          <div class="tw-prompt-wrap">
            <button class="tw-copy-btn" @click="copyPrompt" :class="{ 'tw-copy-btn--done': copied }">
              {{ copied ? 'Copied' : 'Copy' }}
            </button>
            <pre class="tw-prompt">{{ panels[activeTab].prompt }}</pre>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="activeTab === 'DEFINE'" class="tw-define-ref">
      Want the full structured prompt with every field?
      <a
        href="https://github.com/BrettReifs/ai-portfolio-workshop/blob/main/DEFINE.prompt.md"
        target="_blank"
        rel="noopener"
        class="tw-define-ref-link"
      >DEFINE.prompt.md on GitHub →</a>
    </div>
    <div v-if="activeTab === 'DESIGN'" class="tw-define-ref">
      DESIGN.md is a reusable reference file — one source of truth for every AI session.
      <a
        href="https://github.com/BrettReifs/ai-portfolio-workshop/blob/main/design.md"
        target="_blank"
        rel="noopener"
        class="tw-define-ref-link"
      >See the example on GitHub →</a>
    </div>
    <div v-if="activeTab === 'DEPLOY'" class="tw-define-ref">
      Stuck? The most common blocker is DNS propagation — give it 5 minutes before troubleshooting.
    </div>
  </div>
</template>

<style scoped>
.tw-root {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
}

/* Tab bar */
.tw-tabs {
  display: flex;
  gap: 0;
  border-bottom: 2px solid #E5E5E5;
  margin-bottom: 0.75rem;
}

.tw-tab {
  padding: 0.5rem 1.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  color: #9CA3AF;
  transition: color 0.15s, border-color 0.15s;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.tw-tab:hover {
  color: #4B2E83;
}

.tw-tab--active {
  color: #4B2E83;
  border-bottom-color: #D4A853;
}

/* Panel layout */
.tw-panel {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.tw-panel-headline {
  font-size: 0.9rem;
  font-weight: 700;
  color: #4B2E83;
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
}

/* Items list */
.tw-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.tw-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.76rem;
  line-height: 1.35;
  align-items: baseline;
}

.tw-item-marker {
  color: #D4A853;
  font-weight: 700;
  flex-shrink: 0;
}

.tw-item-label {
  color: #111827;
}

.tw-item-detail {
  color: #6B7280;
}

/* Prompt box */
.tw-panel-right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tw-prompt-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #D4A853;
  font-weight: 600;
  margin: 0;
  font-family: ui-monospace, "JetBrains Mono", monospace;
}

.tw-prompt-wrap {
  position: relative;
}

.tw-copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.58rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4B2E83;
  background: #EDE8F5;
  border: 1px solid #D4C8F0;
  border-radius: 4px;
  padding: 0.2em 0.6em;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, sans-serif;
  transition: background 0.15s, color 0.15s;
  line-height: 1.6;
}

.tw-copy-btn:hover {
  background: #4B2E83;
  color: #fff;
}

.tw-copy-btn--done {
  background: #4B2E83;
  color: #fff;
  border-color: #4B2E83;
}

.tw-prompt {
  background: #F3EFF9;
  border: 1px solid #D4C8F0;
  border-left: 3px solid #4B2E83;
  border-radius: 6px;
  padding: 0.625rem 0.875rem;
  font-family: ui-monospace, "JetBrains Mono", monospace;
  font-size: 0.62rem;
  line-height: 1.55;
  color: #2D1A52;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.tw-define-ref {
  font-size: 0.65rem;
  color: #9CA3AF;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #E5E7EB;
}

.tw-define-ref-link {
  color: #4B2E83;
  text-decoration: none;
  font-weight: 600;
  margin-left: 0.25rem;
}

.tw-define-ref-link:hover {
  text-decoration: underline;
}

/* Transition */
.tw-fade-enter-active,
.tw-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.tw-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.tw-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
