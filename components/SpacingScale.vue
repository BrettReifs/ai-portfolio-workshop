<script setup lang="ts">
const scale = [
  { rem: 0.25, px: 4   },
  { rem: 0.5,  px: 8   },
  { rem: 0.75, px: 12  },
  { rem: 1,    px: 16  },
  { rem: 1.5,  px: 24  },
  { rem: 2,    px: 32  },
  { rem: 3,    px: 48  },
  { rem: 4,    px: 64  },
  { rem: 6,    px: 96  },
  { rem: 8,    px: 128 },
]

// 8rem = 100% of the visual track
const MAX_REM = 8

function barWidth(rem: number): string {
  return Math.min((rem / MAX_REM) * 100, 100) + '%'
}
</script>

<template>
  <div class="spacing-scale">
    <div class="scale-header">Spacing scale · 10 steps</div>
    <div v-for="step in scale" :key="step.rem" class="scale-row">
      <div class="scale-labels">
        <span class="scale-rem">{{ step.rem }}rem</span>
        <span class="scale-px">{{ step.px }}px</span>
      </div>
      <div class="scale-track">
        <div class="scale-bar" :style="{ width: barWidth(step.rem) }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.spacing-scale {
  font-family: var(--pro-font-mono);
  display: flex;
  flex-direction: column;
}

.scale-header {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--pro-accent);
  margin-bottom: 0.625rem;
}

.scale-row {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--pro-border);
}

.scale-labels {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex-shrink: 0;
  width: 3.25rem;
  text-align: right;
}

.scale-rem {
  font-size: 0.63rem;
  color: var(--pro-accent);
}

.scale-px {
  font-size: 0.55rem;
  color: #525252;
}

.scale-track {
  flex: 1;
  height: 0.5rem;
  background: var(--pro-surface);
  border-radius: 3px;
  overflow: hidden;
}

.scale-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--pro-light-accent) 0%, var(--pro-accent) 100%);
  border-radius: 3px;
}
</style>
