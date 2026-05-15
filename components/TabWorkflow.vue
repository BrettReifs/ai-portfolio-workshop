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
    headline: 'Lock in your tokens before you build',
    items: [
      { label: 'One palette', detail: 'bg / surface / accent. Both light and dark must hit WCAG AA. Commit before prompting.' },
      { label: 'Type stack', detail: 'Display, body, mono. System fonts by default. One modular scale, ratio ~1.25.' },
      { label: 'Spacing scale', detail: '0.25 to 8rem — one set of values everywhere. Never eyeball gaps between elements.' },
      { label: 'Aesthetic anchor', detail: 'One phrase: editorial-minimal, neo-brutalist, terminal-monospace. Mixing produces slop.' },
      { label: 'Reference sites', detail: 'Paste 1-3 URLs. Say what to borrow specifically: spacing rhythm, color density, type weight.' },
      { label: 'Save as DESIGN.md', detail: 'Token file reused across every AI session. Lint with npx @google/design.md — a Google-promoted standard.' },
    ],
    prompt: `Extract a token set from my references and output a DESIGN.md file.

Aesthetic: {AESTHETIC}
References: {REFERENCES} (what to borrow from each)
Color: {COLOR_PREFERENCE}
Type: {TYPE_PREFERENCE} — default: system font stack
Dark mode: {DARK_MODE}

Output tokens:
- Color: bg, surface, text, muted, accent, border
- Type: display / body / mono stacks + scale ratio
- Spacing: 0.25rem step to 8rem
- Radius: 1-2 values (4px controls, 8px cards)
- Shadows: sm and md only

WCAG AA contrast required. Output as a DESIGN.md code block.`,
    promptLabel: 'Multimodal token extraction — paste with screenshots',
    cta: null,
  },
  DEVELOP: {
    headline: 'Prompt → site in minutes',
    items: [
      { label: 'Fill DEFINE.prompt.md', detail: '{NAME}, {ROLE}, {VALUE_PROP}, {AESTHETIC}, {DEPLOY_TARGET}' },
      { label: 'Choose your platform', detail: 'Lovable · GitHub Copilot · Claude Artifacts · ChatGPT Canvas · Gemini' },
      { label: 'Stop the slop', detail: 'Strip: delve, showcase, robust, seamless, cutting-edge, innovative.' },
      { label: 'Iterate by chatting', detail: '"Make the hero tighter. Drop the gradient. Increase line height."' },
    ],
    prompt: `Rewrite all body copy in this voice: {VOICE_KEYWORDS}.
Remove: delve, showcase, robust, seamless, cutting-edge, innovative.
Replace adjectives with verbs and outcomes.`,
    promptLabel: 'Stop-slop pass (run after generation)',
    cta: null,
  },
  DEPLOY: {
    headline: 'Ship a URL you can share',
    items: [
      { label: 'GitHub Pages', detail: 'gh repo create → Settings → Pages → GitHub Actions' },
      { label: 'Vercel', detail: 'npm i -g vercel && vercel — live in ~30 seconds' },
      { label: 'Pre-flight checklist', detail: 'Lighthouse ≥ 90, meta title, OG image, mobile tested' },
      { label: 'Custom domain', detail: 'vercel domains add yourdomain.com — optional but worth it' },
    ],
    prompt: `gh repo create my-portfolio --public --source=. --push
gh repo edit --enable-pages --pages-branch main

# or one-liner Vercel:
npx vercel --yes`,
    promptLabel: 'Deploy commands',
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
      DESIGN.md is a token standard promoted by Google.
      <a
        href="https://github.com/BrettReifs/ai-portfolio-workshop/blob/main/design.md"
        target="_blank"
        rel="noopener"
        class="tw-define-ref-link"
      >design.md on GitHub →</a>
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
