<script setup lang="ts">
import { ref } from 'vue'

type V = 'bento' | 'brutalist' | 'document'
const active = ref<V>('bento')

const tabs: { id: V; label: string; sub: string }[] = [
  { id: 'bento',    label: 'Bento Grid', sub: 'Spatial · light · mosaic tiles' },
  { id: 'brutalist',label: 'Brutalist',  sub: 'Raw type · hard borders · one red' },
  { id: 'document', label: 'Document',   sub: 'Print metaphor · serif · two-col' },
]
</script>

<template>
  <div class="pv">
    <!-- Tab bar -->
    <div class="pv-tabs" role="tablist">
      <button
        v-for="t in tabs"
        :key="t.id"
        role="tab"
        :aria-selected="active === t.id"
        class="pv-tab"
        :class="{ 'pv-tab--active': active === t.id }"
        @click="active = t.id"
      >
        <span class="tab-name">{{ t.label }}</span>
        <span class="tab-sub">{{ t.sub }}</span>
      </button>
    </div>

    <!-- BENTO -->
    <Transition name="pv-fade" mode="out-in">
      <div v-if="active === 'bento'" key="bento" class="pv-frame pv-bento">
        <div class="b-grid">
          <!-- Row 1-2: name + bio -->
          <div class="b-tile b-name">
            <div class="b-headline">Brett<br>Reifers</div>
            <div class="b-role">Agentic AI Systems</div>
          </div>
          <div class="b-tile b-bio">
            <div class="b-line w-90"></div>
            <div class="b-line w-75"></div>
            <div class="b-line w-55"></div>
          </div>
          <!-- Row 3: stats + stack -->
          <div class="b-tile b-stat"><span class="b-n">12</span><span class="b-l">Projects</span></div>
          <div class="b-tile b-stat"><span class="b-n">20</span><span class="b-l">Skills</span></div>
          <div class="b-tile b-status"><span class="b-dot"></span><span>Shipping</span></div>
          <div class="b-tile b-stat"><span class="b-n">108</span><span class="b-l">Notes</span></div>
          <div class="b-tile b-stack">
            <span class="b-ey">Stack</span>
            <div class="b-chips">
              <span>TS</span><span>Py</span><span>React</span>
            </div>
          </div>
          <!-- Rows 4-5: projects -->
          <div class="b-tile b-proj b-tall">
            <span class="b-ey">Agent Framework</span>
            <span class="b-pt">Content Engine</span>
            <span class="b-badge">Prod</span>
          </div>
          <div class="b-tile b-proj b-wide">
            <span class="b-ey">Research</span>
            <span class="b-pt">Multi-Agent Debate</span>
          </div>
          <div class="b-tile b-proj b-sq">
            <span class="b-ey">Infra</span>
            <span class="b-pt">Model Router</span>
          </div>
          <div class="b-tile b-proj b-wide">
            <span class="b-ey">Tools</span>
            <span class="b-pt">AI Skills Library</span>
          </div>
          <div class="b-tile b-cta">
            <span class="b-ey b-cta-label">Contact</span>
            <span class="b-cta-link">Say hello →</span>
          </div>
        </div>
      </div>

      <!-- BRUTALIST -->
      <div v-else-if="active === 'brutalist'" key="brutalist" class="pv-frame pv-brutalist">
        <div class="br-bar">
          <span class="br-logo">Brett Reifers</span>
          <div class="br-nav"><span>Work</span><span>Stack</span><span>Contact</span></div>
        </div>
        <div class="br-hero">
          <div class="br-headline">AGENTIC<br>AI<br><em>SYSTEMS</em></div>
          <div class="br-tag">Brett Reifers, Product Engineer</div>
        </div>
        <div class="br-stats">
          <div class="br-sc"><span class="br-n">12</span><span class="br-l">Projects</span></div>
          <div class="br-sc br-red"><span class="br-n">20</span><span class="br-l">Skills</span></div>
          <div class="br-sc"><span class="br-n">108</span><span class="br-l">Notes</span></div>
          <div class="br-sc"><span class="br-n">3</span><span class="br-l">Active</span></div>
        </div>
        <div class="br-secbar">Selected Work</div>
        <div class="br-grid">
          <div class="br-pc"><span class="br-num">01</span><span class="br-title">CONTENT ENGINE</span></div>
          <div class="br-pc"><span class="br-num">02</span><span class="br-title">MULTI-AGENT DEBATE</span></div>
          <div class="br-pc"><span class="br-num">03</span><span class="br-title">MODEL ROUTER</span></div>
        </div>
      </div>

      <!-- DOCUMENT -->
      <div v-else key="document" class="pv-frame pv-document">
        <div class="doc-paper">
          <div class="doc-np">
            <div>
              <div class="doc-name">Brett Reifers</div>
              <div class="doc-sub">Agentic AI Systems / Product Engineer</div>
            </div>
            <div class="doc-contact">github.com/BrettReifs<br>Status: Shipping</div>
          </div>
          <hr class="doc-rule doc-rule--heavy">
          <p class="doc-summary">Product-minded engineer building agent frameworks and developer tools. Systems designed to compound over time.</p>
          <hr class="doc-rule">
          <div class="doc-two">
            <aside class="doc-side">
              <div class="doc-sh">Core Stack</div>
              <hr class="doc-rule doc-rule--thin">
              <div class="doc-item">TypeScript / Node.js</div>
              <div class="doc-item">Python / FastAPI</div>
              <div class="doc-item">LLM APIs</div>
            </aside>
            <div class="doc-main">
              <div class="doc-sh">Selected Work</div>
              <hr class="doc-rule doc-rule--thin">
              <div class="doc-entry">
                <div class="doc-et"><span>Content Engine</span><span>2024</span></div>
                <div class="doc-er">Flagship · Production</div>
              </div>
              <div class="doc-entry">
                <div class="doc-et"><span>Multi-Agent Debate</span><span>2024</span></div>
                <div class="doc-er">Research · Active</div>
              </div>
              <div class="doc-entry">
                <div class="doc-et"><span>Model Router</span><span>2024</span></div>
                <div class="doc-er">Infrastructure · Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* ── WRAPPER ── */
.pv {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

/* ── TABS ── */
.pv-tabs {
  display: flex;
  gap: 0.4rem;
}
.pv-tab {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.45rem 0.875rem;
  border-radius: 8px;
  border: 1px solid var(--pro-border);
  background: transparent;
  color: var(--pro-muted);
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
  font-family: var(--pro-font-sans);
}
.pv-tab:hover {
  border-color: var(--pro-accent);
  color: var(--pro-text);
}
.pv-tab--active {
  border-color: var(--pro-accent);
  background: rgba(96, 165, 250, 0.07);
  color: var(--pro-text);
}
.tab-name {
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.2;
}
.tab-sub {
  font-size: 0.6rem;
  color: var(--pro-muted);
  margin-top: 1px;
  font-family: var(--pro-font-mono);
}

/* ── FRAME ── */
.pv-frame {
  height: 228px;
  border-radius: 10px;
  overflow: hidden;
}

/* ── TRANSITION ── */
.pv-fade-enter-active,
.pv-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.pv-fade-enter-from { opacity: 0; transform: translateY(5px); }
.pv-fade-leave-to   { opacity: 0; transform: translateY(-5px); }


/* ══════════════════════════════════════
   BENTO GRID
══════════════════════════════════════ */
.pv-bento {
  background: #EDEAE4;
  padding: 8px;
}
.b-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 34px;
  gap: 5px;
  height: 100%;
}

/* Tiles */
.b-tile {
  border-radius: 8px;
  padding: 6px 8px;
  overflow: hidden;
}

/* Name */
.b-name {
  grid-column: span 5;
  grid-row: span 2;
  background: #1A1A1A;
  color: #EDEAE4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.b-headline {
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.03em;
}
.b-role {
  font-size: 0.38rem;
  color: #777;
  margin-top: 3px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Bio */
.b-bio {
  grid-column: span 7;
  grid-row: span 2;
  background: #D1FAE5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}
.b-line {
  height: 4px;
  background: #064E3B;
  border-radius: 2px;
  opacity: 0.45;
}
.w-90 { width: 90%; }
.w-75 { width: 75%; }
.w-55 { width: 55%; }

/* Stats */
.b-stat {
  grid-column: span 2;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.b-n {
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #1A1A1A;
}
.b-l {
  font-size: 0.38rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #A3A3A3;
}

/* Status */
.b-status {
  grid-column: span 2;
  background: #FEF9C3;
  color: #713F12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 3px;
  font-size: 0.42rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.b-dot {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #16A34A;
}

/* Stack */
.b-stack {
  grid-column: span 4;
  background: #6366F1;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.b-ey {
  font-size: 0.38rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
}
.b-chips {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
}
.b-chips span {
  background: rgba(255, 255, 255, 0.18);
  border-radius: 100px;
  padding: 1px 5px;
  font-size: 0.38rem;
  font-weight: 600;
  color: #fff;
}

/* Projects */
.b-proj {
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.b-tall { grid-column: span 4; grid-row: span 2; }
.b-wide { grid-column: span 5; }
.b-sq   { grid-column: span 3; }
.b-pt {
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1A1A1A;
  margin-top: 1px;
}
.b-tall .b-pt { font-size: 0.65rem; }
.b-badge {
  font-size: 0.38rem;
  font-weight: 700;
  text-transform: uppercase;
  background: #DCFCE7;
  color: #15803D;
  border-radius: 3px;
  padding: 1px 5px;
  align-self: flex-start;
}

/* CTA */
.b-cta {
  grid-column: span 3;
  background: #1A1A1A;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.b-cta-label { color: #555; }
.b-cta-link {
  font-size: 0.55rem;
  font-weight: 700;
  color: #EDEAE4;
}


/* ══════════════════════════════════════
   BRUTALIST
══════════════════════════════════════ */
.pv-brutalist {
  background: #fff;
}
.br-bar {
  border-bottom: 2px solid #000;
  padding: 5px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.br-logo {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 0.5rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #000;
}
.br-nav {
  display: flex;
}
.br-nav span {
  font-family: Arial, sans-serif;
  font-size: 0.45rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1px 8px;
  border-left: 1px solid #000;
  color: #000;
}
.br-nav span:last-child {
  border-right: 1px solid #000;
}

.br-hero {
  border-bottom: 2px solid #000;
  padding: 10px 14px 8px;
  overflow: hidden;
  position: relative;
}
.br-headline {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 2.1rem;
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: #000;
}
.br-headline em {
  font-style: normal;
  color: #FF2D20;
}
.br-tag {
  display: inline-block;
  background: #FF2D20;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 0.45rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 3px 8px;
  margin-top: 6px;
}

.br-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 2px solid #000;
}
.br-sc {
  padding: 5px 10px;
  border-right: 1px solid #000;
  display: flex;
  flex-direction: column;
}
.br-sc:last-child { border-right: none; }
.br-sc.br-red .br-n { color: #FF2D20; }
.br-n {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 1.0rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #000;
}
.br-l {
  font-family: Arial, sans-serif;
  font-size: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #777;
  margin-top: 1px;
}

.br-secbar {
  padding: 3px 14px;
  border-bottom: 1px solid #000;
  font-family: Arial, sans-serif;
  font-size: 0.45rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #000;
}
.br-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.br-pc {
  padding: 5px 10px;
  border-right: 1px solid #000;
  display: flex;
  flex-direction: column;
}
.br-pc:last-child { border-right: none; }
.br-num {
  font-family: 'Arial Black', Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.07);
  line-height: 1;
  letter-spacing: -0.04em;
}
.br-title {
  font-family: Arial, sans-serif;
  font-size: 0.48rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #000;
  margin-top: -2px;
}


/* ══════════════════════════════════════
   DOCUMENT
══════════════════════════════════════ */
.pv-document {
  background: #DDD9D0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.doc-paper {
  background: #FAF7F1;
  padding: 16px 22px;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  font-family: Georgia, 'Times New Roman', serif;
  color: #1C1917;
}

.doc-np {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 8px;
}
.doc-name {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1;
  color: #1C1917;
}
.doc-sub {
  font-family: 'Courier New', monospace;
  font-size: 0.45rem;
  color: #78716C;
  margin-top: 4px;
}
.doc-contact {
  text-align: right;
  font-family: 'Courier New', monospace;
  font-size: 0.42rem;
  line-height: 1.9;
  color: #78716C;
}

.doc-rule {
  border: none;
  border-top: 1px solid #D6D3D1;
  margin: 5px 0;
}
.doc-rule--heavy {
  border-color: #1C1917;
  border-top-width: 1.5px;
  margin-bottom: 7px;
}
.doc-rule--thin {
  border-color: #E8E5E2;
  margin: 3px 0;
}

.doc-summary {
  font-size: 0.5rem;
  line-height: 1.6;
  color: #292524;
  font-style: italic;
  margin-bottom: 5px;
}

.doc-two {
  display: grid;
  grid-template-columns: 95px 1fr;
  gap: 14px;
}
.doc-sh {
  font-size: 0.42rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #A8A29E;
  margin-bottom: 2px;
}
.doc-item {
  font-family: 'Courier New', monospace;
  font-size: 0.44rem;
  color: #44403C;
  line-height: 1.9;
}

.doc-entry {
  margin-bottom: 5px;
}
.doc-et {
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  font-weight: 700;
  color: #1C1917;
  margin-top: 4px;
}
.doc-er {
  font-size: 0.42rem;
  font-style: italic;
  color: #78716C;
}
</style>
