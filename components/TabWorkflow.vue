<script setup>
import { ref } from 'vue'

const activeTab = ref('DEFINE')

const tabs = [
  { key: 'DEFINE',  label: 'DEFINE' },
  { key: 'DESIGN',  label: 'DESIGN' },
  { key: 'DEVELOP', label: 'DEVELOP' },
  { key: 'DEPLOY',  label: 'DEPLOY' },
]

const panels = {
  DEFINE: {
    headline: 'Start with 3 questions',
    items: [
      { label: 'Who are you to this audience?', detail: 'Role and value prop in one line.' },
      { label: 'What do you want them to do?', detail: 'Apply, contact, hire, or follow.' },
      { label: 'What words capture your voice?', detail: '3–5 keywords — verbs, not adjectives.' },
    ],
    prompt: `Help me draft 3 portfolio identity statements.
Role: {ROLE}. Audience: {AUDIENCE}.
3 things I have shipped: {PROJECTS}.
Voice keywords: {VOICE_KEYWORDS}.
No banned phrases: delve, showcase, robust, seamless, innovative.`,
    promptLabel: 'Identity prompt (paste into preferred service)',
    cta: null,
  },
  DESIGN: {
    headline: 'Lock in a design system — once',
    items: [
      { label: 'Color', detail: 'bg / surface / accent — one palette, consistent throughout.' },
      { label: 'Typography', detail: 'Display, body, and mono stacks. Pick and commit.' },
      { label: 'Spacing', detail: 'One scale used everywhere — 0.25rem to 8rem.' },
      { label: 'Save to DESIGN.md', detail: 'Reusable across every future project and AI session.' },
    ],
    prompt: `Research using {{urls}} reference {{pasted}}screenshots to:
1. Extract the color palette from image 1
2. Identify the spacing scale from image 2
3. Synthesize a token set combining all three`,
    promptLabel: 'Multimodal design trick (Gemini)',
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
          <pre class="tw-prompt">{{ panels[activeTab].prompt }}</pre>
        </div>
      </div>
    </transition>
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
  margin-bottom: 1.25rem;
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
  font-size: 1rem;
  font-weight: 700;
  color: #4B2E83;
  margin: 0 0 0.875rem;
  letter-spacing: -0.01em;
}

/* Items list */
.tw-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.tw-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.82rem;
  line-height: 1.45;
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

.tw-prompt {
  background: #F3EFF9;
  border: 1px solid #D4C8F0;
  border-left: 3px solid #4B2E83;
  border-radius: 6px;
  padding: 0.875rem 1rem;
  font-family: ui-monospace, "JetBrains Mono", monospace;
  font-size: 0.68rem;
  line-height: 1.6;
  color: #2D1A52;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
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
