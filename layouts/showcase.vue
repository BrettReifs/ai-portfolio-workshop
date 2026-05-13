<!--
  layouts/showcase.vue
  Two-column layout: left for slide content, right for a labeled live-demo panel.
  Used by Phase 2 design slides to show a component demo alongside explanation.

  Usage in slides:
    ---
    layout: showcase
    ---
    Left column markdown content
    ::right::
    <SomeComponent />
-->
<template>
  <div class="slidev-layout showcase">
    <div class="showcase-left">
      <slot />
    </div>
    <div class="showcase-right">
      <div class="showcase-panel-header">live demo</div>
      <div class="showcase-panel-body">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2.5rem;
  align-items: start;
  height: 100%;
}

.showcase-left {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.showcase-right {
  border-radius: 10px;
  border: 1px solid rgba(96, 165, 250, 0.22);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.015);
}

.showcase-panel-header {
  padding: 0.35rem 0.875rem;
  font-family: var(--pro-font-mono);
  font-size: 0.58rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--pro-accent);
  background: rgba(96, 165, 250, 0.07);
  border-bottom: 1px solid rgba(96, 165, 250, 0.15);
}

.showcase-panel-body {
  padding: 1.25rem;
}
</style>
