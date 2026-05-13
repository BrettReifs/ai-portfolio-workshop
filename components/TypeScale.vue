<script setup lang="ts">
const scale = [
  { rem: 2,     label: 'display',  sample: 'Name / Hero heading',  use: 'h1 · hero'      },
  { rem: 1.5,   label: 'h2',       sample: 'Section Title',        use: 'h2 · section'   },
  { rem: 1.25,  label: 'h3',       sample: 'Card Title',           use: 'h3 · card'      },
  { rem: 1.125, label: 'lede',     sample: 'Lead paragraph copy',  use: 'lede · intro'   },
  { rem: 1,     label: 'body',     sample: 'Body paragraph text',  use: 'p · default'    },
  { rem: 0.875, label: 'sm',       sample: 'Caption or tag label', use: 'meta · tags'    },
]
</script>

<template>
  <div class="type-scale">
    <div class="scale-header">Type scale · ratio ~1.25</div>
    <div
      v-for="step in scale"
      :key="step.rem"
      class="scale-row"
    >
      <div
        class="scale-sample"
        :style="{
          fontSize: step.rem + 'rem',
          lineHeight: step.rem >= 1.5 ? '1.15' : '1.5',
        }"
      >{{ step.sample }}</div>
      <div class="scale-meta">
        <span class="scale-rem">{{ step.rem }}rem</span>
        <span class="scale-use">{{ step.use }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.type-scale {
  font-family: var(--pro-font-sans);
  display: flex;
  flex-direction: column;
}

.scale-header {
  font-family: var(--pro-font-mono);
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--pro-accent);
  margin-bottom: 0.625rem;
}

.scale-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--pro-border);
  gap: 0.5rem;
}

.scale-sample {
  color: currentColor;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;
}

.scale-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.1rem;
  flex-shrink: 0;
  font-family: var(--pro-font-mono);
}

.scale-rem {
  font-size: 0.65rem;
  color: var(--pro-accent);
}

.scale-use {
  font-size: 0.58rem;
  color: #525252;
}
</style>
