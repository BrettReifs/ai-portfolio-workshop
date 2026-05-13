<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  mode?: 'light' | 'dark'
}>()

const lightPalette = [
  { token: '--bg',      value: '#FAFAF9', label: 'Background' },
  { token: '--surface', value: '#FFFFFF', label: 'Surface'    },
  { token: '--text',    value: '#0A0A0A', label: 'Text'       },
  { token: '--muted',   value: '#525252', label: 'Muted'      },
  { token: '--accent',  value: '#2563EB', label: 'Accent'     },
  { token: '--border',  value: '#E5E5E5', label: 'Border'     },
]

const darkPalette = [
  { token: '--bg',      value: '#0A0A0A', label: 'Background' },
  { token: '--surface', value: '#171717', label: 'Surface'    },
  { token: '--text',    value: '#FAFAF9', label: 'Text'       },
  { token: '--muted',   value: '#A3A3A3', label: 'Muted'      },
  { token: '--accent',  value: '#60A5FA', label: 'Accent'     },
  { token: '--border',  value: '#262626', label: 'Border'     },
]

const swatches = computed(() =>
  props.mode === 'light' ? lightPalette : darkPalette
)

function needsOutline(hex: string): boolean {
  return ['#0A0A0A', '#171717', '#262626', '#FAFAF9', '#FFFFFF', '#E5E5E5'].includes(hex)
}
</script>

<template>
  <div class="palette">
    <div class="palette-mode">{{ mode === 'light' ? 'Light mode' : 'Dark mode' }}</div>
    <div class="palette-grid">
      <div v-for="s in swatches" :key="s.token" class="swatch">
        <div
          class="swatch-chip"
          :style="{
            background: s.value,
            boxShadow: needsOutline(s.value) ? 'inset 0 0 0 1px rgba(128,128,128,0.25)' : 'none',
          }"
        />
        <div class="swatch-label">
          <span class="swatch-token">{{ s.token }}</span>
          <span class="swatch-hex">{{ s.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.palette {
  font-family: var(--pro-font-mono);
  padding: 1rem 1.125rem;
  border-radius: 8px;
  background: var(--pro-surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.palette-mode {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--pro-accent);
  margin-bottom: 0.875rem;
}

.palette-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem 0.625rem;
}

.swatch {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.swatch-chip {
  height: 2.75rem;
  border-radius: 6px;
}

.swatch-label {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.swatch-token {
  font-size: 0.58rem;
  color: var(--pro-muted);
  letter-spacing: 0.02em;
}

.swatch-hex {
  font-size: 0.68rem;
  color: var(--pro-text);
  letter-spacing: 0.02em;
}
</style>
