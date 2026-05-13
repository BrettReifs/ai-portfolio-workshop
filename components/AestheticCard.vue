<script setup lang="ts">
defineProps<{
  name: string
  bestFor: string
  palette: [string, string, string] // [bg, text, accent]
}>()
</script>

<template>
  <div class="aesthetic-card">
    <div class="card-preview" :style="{ background: palette[0] }">
      <!-- Accent stripe across top -->
      <div class="preview-stripe" :style="{ background: palette[2] }" />
      <!-- Simulated content lines -->
      <div class="preview-body">
        <div class="preview-line preview-line--title" :style="{ background: palette[1] }" />
        <div class="preview-line preview-line--sub" :style="{ background: palette[1], opacity: 0.45 }" />
        <div class="preview-line preview-line--sub" :style="{ background: palette[1], opacity: 0.3 }" />
      </div>
      <!-- CTA chip -->
      <div class="preview-cta" :style="{ background: palette[2] }" />
    </div>
    <div class="card-body">
      <div class="card-name">{{ name }}</div>
      <div class="card-for">{{ bestFor }}</div>
    </div>
  </div>
</template>

<style scoped>
.aesthetic-card {
  border-radius: 8px;
  border: 1px solid var(--pro-border);
  overflow: hidden;
  background: var(--pro-surface);
  transition: border-color 0.18s ease, transform 0.18s ease;
}

.aesthetic-card:hover {
  border-color: var(--pro-accent);
  transform: translateY(-2px);
}

/* Preview area */
.card-preview {
  height: 4.75rem;
  padding: 0.625rem 0.75rem;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  position: relative;
}

.preview-stripe {
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
}

.preview-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 0.75rem;
}

.preview-line {
  border-radius: 2px;
  height: 4px;
}

.preview-line--title {
  width: 55%;
  height: 7px;
}

.preview-line--sub {
  width: 80%;
}

.preview-cta {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 5px;
  flex-shrink: 0;
  align-self: flex-end;
}

/* Text area */
.card-body {
  padding: 0.5rem 0.75rem 0.625rem;
  border-top: 1px solid var(--pro-border);
}

.card-name {
  font-family: var(--pro-font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--pro-text);
  margin-bottom: 0.2rem;
}

.card-for {
  font-family: var(--pro-font-mono);
  font-size: 0.6rem;
  color: var(--pro-muted);
  line-height: 1.4;
}
</style>
