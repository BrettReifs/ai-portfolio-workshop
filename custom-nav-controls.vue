<script setup>
import { showGotoDialog } from '@slidev/client/state/index.ts'

function toggleGoto() {
  showGotoDialog.value = !showGotoDialog.value
}
</script>

<template>
  <button
    class="icon-btn"
    title="Go to slide (g)"
    @click="toggleGoto"
  >
    <div class="i-carbon:search" />
  </button>
</template>
