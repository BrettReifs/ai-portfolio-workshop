---
theme: seriph
title: Build with AI — Follow-Along Demo
info: |
  Define, design, develop, and deploy a personal portfolio in 1 hour.
  Repo: https://github.com/BrettReifs/ai-portfolio-workshop
highlighter: shiki
drawings:
  persist: false
transition: fade-out
mdc: true
fonts:
  sans: Inter
  mono: JetBrains Mono
  weights: '300,400,600,700'
  italic: true
---

<!-- ============================================================
     SLIDE 1 — Title / Hero  (Image 3 pattern: full-screen hero)
     ============================================================ -->
<div class="hero-slide">
  <div class="hero-label">University of Washington · Foster School of Business</div>
  <h1 class="hero-title">Build with AI:<br><em>Follow-Along Demo.</em></h1>
  <p class="hero-sub">Define. Design. Develop. Deploy. <strong>In one hour.</strong></p>
  <a
    href="https://github.com/BrettReifs/ai-portfolio-workshop"
    class="hero-badge"
    target="_blank"
    rel="noopener"
  >github.com/BrettReifs/ai-portfolio-workshop</a>
</div>

<style>
.slidev-layout {
  background: linear-gradient(135deg, #2D1A52 0%, #4B2E83 40%, #7B5DB0 75%, #1a0a30 100%) !important;
  color: #FFFFFF !important;
}
.hero-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  gap: 1.25rem;
  padding: 2rem;
}
.hero-label {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(212, 168, 83, 0.9);
  font-weight: 600;
}
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  margin: 0;
}
.hero-title em {
  color: #D4A853;
  font-style: normal;
}
.hero-sub {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.75);
  margin: 0;
}
.hero-badge {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  background: rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.65);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.2);
}
</style>

<!--
Welcome everyone. Before we start, find this repo and star it.
You will leave today with a live portfolio URL.
-->

---

<!-- ============================================================
     SLIDE 2 — Presenters  (Image 1 pattern: images above text)
     ============================================================ -->
<div class="presenters-slide">
  <div class="presenters-label">Your instructors today</div>
  <div class="presenters-grid">
    <PresenterCard
      name="Leonard Boussioux"
      title="Professor of GenAI, Foster School of Business, University of Washington"
      image="/profile-leo-40.jpg"
      imagePosition="50% 40%"
      :imageScale="0.85"
    />
    <PresenterCard
      name="Brett Reifers"
      title="Senior Product Manager, Microsoft"
      subtitle="AI Portfolio Workshop"
      image="/profile-brett.jpg"
      imagePosition="50% -10%"
      :imageScale="2"
    />
  </div>
</div>

<style>
.slidev-layout {
  background: #FFFFFF !important;
  color: #0A0A0A !important;
}
.presenters-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
}
.presenters-label {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #D4A853;
  font-weight: 700;
}
.presenters-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 680px;
}
</style>

<!--
Introduce yourselves. Brett: PM at Microsoft, building AI demos and workshops.
Leonard: Professor of GenAI at UW Foster. We will walk you through
a real workflow from prompt to deployed site.
-->

---

<!-- ============================================================
     SLIDE 3 — Who this is for + Agenda
     ============================================================ -->

<div class="agenda-slide">
  <div class="agenda-left">
    <div class="section-label">Who this is for</div>
    <ul class="audience-list">
      <li><strong>New to AI tools?</strong> let's ship something simple</li>
      <li><strong>Already use AI?</strong> let's progress even further</li>
      <li>Have 1 hour, a device and internet access?</li>
    </ul>
    <p class="audience-note">Good news! You will leave with a <span style="color:#D4A853">deployed sharable site</span>.</p>
  </div>
  <div class="agenda-right">
    <div class="section-label">Today's agenda</div>
    <table class="agenda-table">
      <tbody>
        <tr><td class="time">5 min</td><td class="phase">Welcome</td><td class="outcome">Set the stage</td></tr>
        <tr class="highlight"><td class="time">10 min</td><td class="phase">Define</td><td class="outcome">Identity + voice</td></tr>
        <tr class="highlight"><td class="time">15 min</td><td class="phase">Design</td><td class="outcome">Tokens + layout</td></tr>
        <tr class="highlight"><td class="time">15 min</td><td class="phase">Develop</td><td class="outcome">Generate + refine</td></tr>
        <tr class="highlight gold"><td class="time">10 min</td><td class="phase">Deploy</td><td class="outcome">Live URL</td></tr>
        <tr><td class="time">5 min</td><td class="phase">Wrap + Q&A</td><td class="outcome">Take-home toolkit</td></tr>
      </tbody>
    </table>
  </div>
</div>

<style>
.slidev-layout {
  background: #FFFFFF !important;
  color: #0A0A0A !important;
  display: flex !important;
  align-items: center !important;
}
.agenda-slide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: stretch;
  width: 100%;
  padding: 1rem 0;
}
.section-label {
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #D4A853;
  font-weight: 700;
  margin-bottom: 1rem;
}
.audience-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.audience-list li {
  font-size: 0.9rem;
  padding-left: 1.25rem;
  position: relative;
  line-height: 1.4;
}
.audience-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #4B2E83;
  font-weight: 700;
}
.agenda-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.audience-note {
  font-size: 1.35rem;
  font-weight: 700;
  color: #4B2E83;
  font-style: normal;
  line-height: 1.3;
}
.agenda-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}
.agenda-table td {
  padding: 0.5rem 0.6rem;
  border-bottom: 1px solid #F3F4F6;
  vertical-align: middle;
}
.time { color: #9CA3AF; font-family: "JetBrains Mono", monospace; white-space: nowrap; }
.phase { font-weight: 700; color: #111827; }
.outcome { color: #6B7280; }
.highlight .phase { color: #4B2E83; }
.gold .phase { color: #B7A57A; font-weight: 800; }
.gold .time { color: #D4A853; }
</style>

---

<!-- ============================================================
     SLIDE 3b — Lovable Setup
     ============================================================ -->

# Get set up on Lovable

<div class="setup-steps">
  <div class="setup-step">
    <div class="step-num">1</div>
    <div class="step-body">
      <div class="step-title">Create a free account</div>
      <div class="step-detail">Go to <a href="https://lovable.dev" target="_blank" rel="noopener" class="step-link">lovable.dev</a> and sign up.</div>
    </div>
  </div>
  <div class="setup-step">
    <div class="step-num">2</div>
    <div class="step-body">
      <div class="step-title">Upgrade to Lovable Pro</div>
      <div class="step-detail">Select the Pro plan from your account dashboard.</div>
    </div>
  </div>
  <div class="setup-step">
    <div class="step-num">3</div>
    <div class="step-body">
      <div class="step-title">Enter your promo code at checkout</div>
      <div class="step-detail">Add your payment info, then apply the code below. Your total will drop to <strong>$0</strong>.</div>
      <div class="promo-code">COMM-AISPARK-V4F4</div>
    </div>
  </div>
  <div class="setup-step">
    <div class="step-num">4</div>
    <div class="step-body">
      <div class="step-title">Cancel before your trial ends</div>
      <div class="step-detail">After completing the purchase, go to Settings and cancel your subscription so you are not charged next month.</div>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  background: #FFFFFF !important;
  color: #0A0A0A !important;
}
.slidev-layout h1 {
  color: #4B2E83;
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
}
.setup-steps {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.setup-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.step-num {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #4B2E83;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step-body {
  padding-top: 0.2rem;
}
.step-title {
  font-weight: 700;
  font-size: 0.9rem;
  color: #111827;
  margin-bottom: 0.2rem;
}
.step-detail {
  font-size: 0.8rem;
  color: #6B7280;
  line-height: 1.5;
}
.step-link {
  color: #4B2E83;
  text-decoration: none;
  border-bottom: 1px solid rgba(75, 46, 131, 0.4);
}
.promo-code {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.3rem 0.75rem;
  background: #EDE8F5;
  color: #4B2E83;
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  border-radius: 6px;
  border: 1px solid rgba(75, 46, 131, 0.25);
}
</style>

---

<!-- ============================================================
     SLIDE 4 — Working Backwards
     ============================================================ -->

# Working Backwards

<div class="wb-intro">
  The goal: a <strong style="color: #D4A853">deployed web application</strong> you can share with one link.
  To get there, three pillars must come first.
</div>

<div v-after style="margin-top: 2rem;">
  <WorkingBackwards />
</div>

<div class="wb-citation">Framework enjoyed by Microsoft Digital Design Studio</div>

<style>
.slidev-layout {
  background: #FFFFFF !important;
  color: #0A0A0A !important;
}
.slidev-layout h1 {
  color: #4B2E83;
  font-size: 2rem;
  margin-bottom: 0.75rem;
}
.wb-intro {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.6;
  max-width: 55ch;
}
.wb-citation {
  font-size: 0.6rem;
  color: #9CA3AF;
  letter-spacing: 0.06em;
  margin-top: 1rem;
  text-align: center;
}
</style>

<!--
We are going to work backwards from the deployed product.
Most people jump straight to building. We start with: what are we proud to share?
Define, Design, Develop in that order — then Deploy.
-->

---

<!-- ============================================================
     SLIDE 5b — Two prompt starters
     ============================================================ -->

<PromptStarters />

<style>
.slidev-layout {
  background: #FFFFFF !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
}
</style>

---

<!-- ============================================================
     SLIDE 5c — Side-by-side examples
     ============================================================ -->

<div class="examples-label">Prototyping Vibes vs. Jibes — the output</div>
<div class="examples-grid">
  <div class="examples-col">
    <div class="examples-tag examples-tag--purple">Vibes</div>
    <div class="examples-frame-wrap">
      <iframe src="/examples/beginner/index.html" class="examples-frame" frameborder="0" loading="lazy"></iframe>
    </div>
  </div>
  <div class="examples-col">
    <div class="examples-tag examples-tag--gold">"Jibes"</div>
    <div class="examples-frame-wrap">
      <iframe src="/examples/advanced/index.html" class="examples-frame" frameborder="0" loading="lazy"></iframe>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  background: #F3EFF9 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 1.25rem 1.5rem !important;
  gap: 0.75rem !important;
}
.examples-label {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #4B2E83;
  align-self: flex-start;
}
.examples-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  flex: 1;
  min-height: 0;
}
.examples-col {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-height: 0;
}
.examples-tag {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.2em 0.7em;
  border-radius: 9999px;
  align-self: flex-start;
}
.examples-tag--purple { background: #4B2E83; color: #fff; }
.examples-tag--gold { background: #D4A853; color: #1a0a30; }
.examples-frame-wrap {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(75, 46, 131, 0.15);
  min-height: 0;
}
.examples-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>

---

<!-- ============================================================
     SLIDE 5 — Vibe Demo (Lovable)
     ============================================================ -->

<div class="vibe-slide">
  <div class="vibe-left">
    <div class="section-label" style="color: #D4A853;">Vibe Demo</div>
    <h2 class="vibe-heading">Rapid prototype with Lovable</h2>
    <p class="vibe-body">
      Type a prompt. Get a deployed app. That is Define, Design, Develop, and Deploy in one session.
    </p>
    <p class="vibe-body" style="margin-top: 0.5rem;">
      Here is a live example built in one sitting:
    </p>
    <a
      href="https://expert-profile-kit.lovable.app"
      class="gold-cta"
      target="_blank"
      rel="noopener"
      style="margin-top: 1rem; width: fit-content;"
    >
      expert-profile-kit.lovable.app →
    </a>
  </div>
  <div class="vibe-right">
    <!--
      Save the Lovable dashboard screenshot as public/lovable-screenshot.png
      The purple gradient shows as a fallback until the file is present.
    -->
    <img
      :src="`/lovable-screenshot.png`"
      alt="Lovable dashboard — What should we build, Brett?"
      class="vibe-screenshot"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
    />
    <div class="vibe-screenshot-fallback">
      <span>Save screenshot to public/lovable-screenshot.png</span>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  background: #FFFFFF !important;
  color: #0A0A0A !important;
}
.vibe-slide {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 2.5rem;
  align-items: center;
  height: 100%;
}
.vibe-heading {
  font-size: 1.5rem;
  font-weight: 800;
  color: #4B2E83;
  margin: 0.5rem 0 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
.vibe-body {
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.6;
  margin: 0;
}
.vibe-screenshot {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(75, 46, 131, 0.25);
  border: 2px solid #EDE8F5;
  display: block;
}
.vibe-screenshot-fallback {
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 12px;
  background: linear-gradient(135deg, #2D1A52 0%, #4B2E83 50%, #D4A853 100%);
  display: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  color: rgba(255,255,255,0.5);
  font-size: 0.75rem;
}
</style>

---

<!-- ============================================================
     SLIDE 5c — Demo site
     ============================================================ -->

<div class="demo-wrapper">
  <iframe
    src="https://expert-profile-kit.lovable.app/"
    class="demo-frame"
    frameborder="0"
    allow="fullscreen"
  ></iframe>
</div>

<style>
.slidev-layout {
  background: #F3EFF9 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 1.5rem !important;
}
.demo-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(75, 46, 131, 0.18);
}
.demo-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>

---

<!-- ============================================================
     SLIDE 6 — Challenge
     ============================================================ -->

<div class="challenge-slide">
  <div class="challenge-tag">The catch</div>
  <h1 class="challenge-heading">But what if I want<br>something <em>different?</em></h1>
  <p class="challenge-body">
    Vibe coding is fast. Vibe coding is fun. But the result is often <strong>generic</strong>.
  </p>
  <p class="challenge-body">
    What if you want your portfolio to actually <strong>reflect you</strong> — your aesthetic,
    your voice, your standards? A lot will change after first build.
  </p>
  <ul class="challenge-list">
    <li>Fails accessibility check</li>
    <li>Project demands a rebrand</li>
    <li>Product requirements shift mid-build</li>
    <li>Auth and storage issues</li>
    <li>Client wants "more energy"</li>
    <li>Mobile layout breaks on real devices</li>
  </ul>
</div>

<style>
.slidev-layout {
  background: #FFFFFF !important;
  color: #0A0A0A !important;
}
.challenge-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 680px;
  gap: 1.25rem;
}
.challenge-tag {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #D4A853;
  font-weight: 700;
}
.challenge-heading {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #0A0A0A;
  margin: 0;
}
.challenge-heading em {
  color: #4B2E83;
  font-style: normal;
}
.challenge-body {
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
  margin: 0;
}
.challenge-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.challenge-list li {
  font-size: 0.72rem;
  color: #374151;
  background: #F3F4F6;
  border: 1px solid #E5E7EB;
  border-radius: 9999px;
  padding: 0.3em 0.85em;
  line-height: 1;
}
.challenge-cta {
  font-size: 1rem;
  font-weight: 700;
  color: #4B2E83;
  margin: 0;
}
</style>

---

<!-- ============================================================
     SLIDE 7 — "Jibe" Coding  (tabbed nav)
     ============================================================ -->

<div class="proto-slide">
  <div class="proto-header">
    <div class="section-label" style="color: #D4A853;">Step-by-step</div>
    <h2 class="proto-heading">How to <em>Jibe</em> Code</h2>
    <p class="proto-sub">Click a phase to see what to do and what to prompt.</p>
  </div>
  <TabWorkflow />
</div>

<style>
.slidev-layout {
  background: #FFFFFF !important;
  color: #0A0A0A !important;
}
.proto-slide {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  padding-top: 0.25rem;
}
.proto-header {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.proto-heading {
  font-size: 1.25rem;
  font-weight: 800;
  color: #4B2E83;
  margin: 0;
  letter-spacing: -0.02em;
}
.proto-sub {
  font-size: 0.75rem;
  color: #9CA3AF;
  margin: 0;
}
</style>

<!--
Click through each tab during the live walkthrough.
Each tab shows the key goal, action bullets, and a copy-paste prompt.
-->

---

<!-- ============================================================
     SLIDE 7b — Prototype Variants (design direction exploration)
     ============================================================ -->

<div class="pv-wrapper">
  <iframe
    src="/examples/prototype-variants/index.html"
    class="pv-frame"
    title="Prototype Variants — 3 design directions"
  ></iframe>
</div>

<style>
.slidev-layout {
  background: #0A0A0A !important;
  padding: 0 !important;
  display: flex !important;
  align-items: stretch !important;
}
.pv-wrapper {
  width: 100%;
  height: 100%;
}
.pv-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>

<!--
Click through all 3 variants using the switcher bar at the bottom.
Ask the audience: which direction fits your brand?
-->

---

<!-- ============================================================
     SLIDE 8 — Jibe Demo (placeholder)
     ============================================================ -->

<div class="demo-slide">
  <div class="demo-tag">Live Demo</div>
  <h1 class="demo-heading">New Demo</h1>
  <p class="demo-body">Switching to browser — final project examples.</p>
  <div class="demo-pill">
    <span>github.com/BrettReifs/ai-portfolio-workshop</span>
    <span class="demo-pill-sep">·</span>
    <span>examples/</span>
  </div>
</div>

<style>
.slidev-layout {
  background: linear-gradient(160deg, #EDE8F5 0%, #FFFFFF 60%) !important;
  color: #0A0A0A !important;
}
.demo-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  gap: 1.25rem;
}
.demo-tag {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #D4A853;
  font-weight: 700;
}
.demo-heading {
  font-size: 3.5rem;
  font-weight: 800;
  color: #4B2E83;
  letter-spacing: -0.03em;
  margin: 0;
}
.demo-body {
  font-size: 1.1rem;
  color: #6B7280;
  margin: 0;
}
.demo-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.1rem;
  background: rgba(75, 46, 131, 0.08);
  border: 1px solid #D4C8F0;
  border-radius: 9999px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: #4B2E83;
}
.demo-pill-sep { color: #D4A853; font-weight: 700; }
</style>

<!--
Switch to browser here. Walk through deployed project examples.
Return to slides when done.
-->

---

<!-- ============================================================
     SLIDE 12 — LiferMap demo (Professor Leo's deployed app)
     ============================================================ -->

<div class="demo-wrapper">
  <iframe
    src="https://lifermap.com"
    class="demo-frame"
    title="LiferMap — Professor Leonard Boussioux"
    allow="fullscreen"
  ></iframe>
</div>

<style>
.slidev-layout {
  background: #F3EFF9 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 1.5rem !important;
}
.demo-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(75, 46, 131, 0.18);
}
.demo-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>

---

<!-- ============================================================
     SLIDE 9 — Post-Launch Skills & Tips
     ============================================================ -->

# Post-Launch Skills & Tips

<div class="skills-intro">
  Shipping the first version is the beginning, not the end.
</div>

<div class="skills-grid">
  <div class="skill-card">
    <div class="skill-icon">✍</div>
    <div class="skill-name">Write about what you build</div>
    <div class="skill-detail">One post or share per project shipped. Verbs over adjectives. You build community while your agents build the things.</div>
  </div>
  <div class="skill-card">
    <div class="skill-icon">⚙</div>
    <div class="skill-name">Use your <em>skills</em></div>
    <div class="skill-detail">Drop agent or <code>.agents/skills/</code> into projects and repos. Each skill is a reusable workflow, not a one-time prompt.</div>
  </div>
  <div class="skill-card">
    <div class="skill-icon">↺</div>
    <div class="skill-name">Iterate publicly</div>
    <div class="skill-detail">Git version your DESIGN.md and DEFINE.md. Let the difference show and tell the story of how your thinking evolves.</div>
  </div>
  <div class="skill-card">
    <div class="skill-icon">◎</div>
    <div class="skill-name">Raise the quality bar over time</div>
    <div class="skill-detail"><em>EVALS!!!</em> Lighthouse ≥ 90. No cookie banners. Works offline. Each of these is a story about your standards.</div>
  </div>
</div>

<div class="share-link">
  <span class="share-label">Share your work</span>
  <a href="https://github.com/BrettReifs/ai-portfolio-workshop/discussions/3" target="_blank" rel="noopener" class="share-url">discussions/3 — Show and tell</a>
</div>

<style>
.slidev-layout {
  background: #FFFFFF !important;
  color: #0A0A0A !important;
}
.slidev-layout h1 {
  color: #4B2E83;
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}
.skills-intro {
  font-size: 0.925rem;
  color: #374151;
  margin-bottom: 1.25rem;
  font-style: italic;
}
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
}
.skill-card {
  padding: 1rem 1.125rem;
  border: 1px solid #E5E5E5;
  border-left: 3px solid #4B2E83;
  border-radius: 8px;
  background: #FAFAF9;
}
.skill-icon {
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
}
.skill-name {
  font-weight: 700;
  font-size: 0.85rem;
  color: #111827;
  margin-bottom: 0.25rem;
}
.skill-detail {
  font-size: 0.75rem;
  color: #6B7280;
  line-height: 1.5;
}
.skill-detail code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  background: #EDE8F5;
  color: #4B2E83;
  padding: 0.1em 0.3em;
  border-radius: 3px;
}
.share-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  font-size: 0.8rem;
}
.share-label {
  font-weight: 600;
  color: #4B2E83;
}
.share-url {
  color: #4B2E83;
  text-decoration: none;
  border-bottom: 1px solid rgba(75, 46, 131, 0.4);
}
</style>

---

<!-- ============================================================
     SLIDE 10 — Closing Q&A
     ============================================================ -->

<div class="close-slide">
  <div class="close-label">University of Washington · Foster School of Business</div>
  <h1 class="close-heading">Questions?</h1>
  <p class="close-sub">Deploy your portfolio. Drop the link in the discussion. Get into the gallery.</p>

  <div class="close-links">
    <a
      href="https://github.com/BrettReifs/ai-portfolio-workshop"
      class="close-repo"
      target="_blank"
      rel="noopener"
    >
      github.com/BrettReifs/ai-portfolio-workshop
    </a>
    <div class="close-divider"></div>
    <div class="close-examples">
      <span class="close-ex-label">Cohort gallery</span>
      <a href="/gallery.html" target="_blank" rel="noopener" class="close-ex-link close-ex-link--gold">ai-portfolio-workshop.vercel.app/gallery.html</a>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  background: linear-gradient(135deg, #2D1A52 0%, #4B2E83 50%, #1a0a30 100%) !important;
  color: #FFFFFF !important;
}
.close-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  gap: 1.25rem;
}
.close-label {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(212, 168, 83, 0.85);
  font-weight: 600;
}
.close-heading {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  margin: 0;
}
.close-sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.65);
  margin: 0;
}
.close-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
  margin-top: 0.5rem;
}
.close-repo {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(212, 168, 83, 0.15);
  border: 1px solid rgba(212, 168, 83, 0.4);
  border-radius: 9999px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  color: #D4A853;
  text-decoration: none;
}
.close-divider {
  width: 2rem;
  height: 1px;
  background: rgba(255,255,255,0.2);
}
.close-examples {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}
.close-ex-label {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255,255,255,0.4);
}
.close-ex-link {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
}
.close-ex-link:hover { color: #D4A853; }
.close-ex-link--gold { color: #D4A853; }
</style>

<!--
Thank you. Drop your deployed URL in the GitHub Discussion.
We will review and give feedback on a few live.
-->
