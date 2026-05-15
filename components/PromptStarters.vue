<template>
  <div class="ps-slide">
    <div class="ps-label">
      <span v-click.hide="1">Two ways to prompt</span>
      <span v-click="1">Try it now — pick your path</span>
    </div>
    <div class="ps-grid">

      <div class="ps-col ps-col--beginner">
        <div class="ps-col-header">
          <span class="ps-badge ps-badge--purple">Vibes</span>
          <span class="ps-time">~5 min</span>
        </div>

        <div v-click.hide="1">
          <p class="ps-def">Prompting by feeling: you describe the result you want, not the steps to get there.</p>
          <p class="ps-example">Example: "Make it look really professional, like I know what I'm doing" gives the model creative latitude to decide layout, type, and color on your behalf.</p>
        </div>
        <pre v-click="1" class="ps-box ps-box--purple">Make me a portfolio website.

My name is {NAME} and I work in {FIELD}.

Make it look really beautiful and professional.
I want people to be impressed when they see it.
Like, really impressed.

I have projects and stuff but I'm not sure how
to describe them yet — just leave space for that.

Make it feel like me but also make it look like
I know what I'm doing. Simple but also not boring.

Tell the truth, don't make things up about me.
Host it on a lovable.app subdomain.</pre>
      </div>

      <div class="ps-col ps-col--advanced">
        <div class="ps-col-header">
          <span class="ps-badge ps-badge--gold">"Jibes"</span>
          <span class="ps-time">~15 min</span>
        </div>

        <div v-click.hide="1">
          <p class="ps-def">Prompting with spec: you front-load context so the output aligns with who you actually are.</p>
          <p class="ps-example">Example: Giving the model your role, voice keywords, and a reference site means the result jibes with your real identity instead of a generic developer template.</p>
        </div>
        <pre v-click="1" class="ps-box ps-box--gold">Build a portfolio that reflects how I think.

Name: {NAME} | Role: {ROLE}
Value prop: {What you do and why it matters, one line}
Audience: {Who visits and what you want them to do}
Voice: {3 words — verbs or nouns, not adjectives}

Projects (raw — you tighten the copy):
• {Project 1: what it does, one measurable outcome}
• {Project 2: what it does, one measurable outcome}

Aesthetic: {editorial-minimal / neo-brutalist / terminal}
Reference: {One site you admire — what to borrow from it}

Do not use: showcase, robust, seamless, innovative.
Output: semantic HTML, CSS variables, mobile-first.</pre>
      </div>

    </div>
  </div>
</template>

<style scoped>
.ps-slide {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  width: 100%;
  height: 100%;
  justify-content: center;
}
.ps-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #D4A853;
  position: relative;
  min-height: 1em;
}
.ps-label span {
  position: absolute;
  left: 0;
}
.ps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  align-items: start;
}
.ps-col {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-radius: 10px;
  padding: 1rem 1.125rem;
}
.ps-col--beginner {
  background: #F3EFF9;
  border: 1.5px solid #D4C8F0;
}
.ps-col--advanced {
  background: #FAF5E8;
  border: 1.5px solid #E8D197;
}
.ps-col-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
.ps-badge {
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.2em 0.65em;
  border-radius: 9999px;
}
.ps-badge--purple { background: #4B2E83; color: #FFFFFF; }
.ps-badge--gold { background: #D4A853; color: #1a0a30; }
.ps-time {
  font-size: 0.65rem;
  color: #9CA3AF;
  font-family: "JetBrains Mono", monospace;
}
.ps-desc {
  font-size: 0.75rem;
  color: #6B7280;
  margin: 0;
  line-height: 1.45;
}
.ps-def {
  font-size: 0.78rem;
  font-weight: 600;
  color: #1a0a30;
  margin: 0 0 0.5rem;
  line-height: 1.45;
}
.ps-example {
  font-size: 0.72rem;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
  font-style: italic;
}
.ps-box {
  margin: 0;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.605rem;
  line-height: 1.65;
  white-space: pre;
  background: transparent;
  border: none;
  padding: 0;
  overflow: visible;
}
.ps-box--purple { color: #2D1A52; }
.ps-box--gold { color: #4A3000; }
:deep(.slidev-vclick-hidden) {
  display: none !important;
}
</style>
