<script setup>
const pillars = [
  {
    key: 'DEFINE',
    icon: '◎',
    desc: 'Identity, audience, voice',
    color: 'purple',
  },
  {
    key: 'DESIGN',
    icon: '◈',
    desc: 'Tokens, layout, references',
    color: 'purple',
  },
  {
    key: 'DEVELOP',
    icon: '◧',
    desc: 'Generate, refine, ship copy',
    color: 'purple',
  },
  {
    key: 'DEPLOY',
    icon: '◉',
    desc: 'Live URL you are proud of',
    color: 'gold',
  },
]
</script>

<template>
  <div class="wb-container">
    <div class="wb-pipeline">
      <template v-for="(p, i) in pillars" :key="p.key">
        <div :class="['wb-node', p.color === 'gold' ? 'wb-node--gold' : 'wb-node--purple']">
          <div class="wb-node-icon">{{ p.icon }}</div>
          <div class="wb-node-key">{{ p.key }}</div>
          <div class="wb-node-desc">{{ p.desc }}</div>
        </div>
        <div v-if="i < pillars.length - 1" class="wb-arrow">→</div>
      </template>
    </div>
    <p class="wb-goal">
      Start with the end goal. Work backwards.
    </p>
  </div>
</template>

<style scoped>
.wb-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
}

.wb-pipeline {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: nowrap;
}

.wb-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  min-width: 120px;
  text-align: center;
  transition: transform 0.15s;
}

.wb-node--purple {
  background: #EDE8F5;
  border: 2px solid #4B2E83;
  color: #4B2E83;
}

.wb-node--gold {
  background: linear-gradient(135deg, #D4A853 0%, #B7A57A 100%);
  border: 2px solid #B7A57A;
  color: #1a0a30;
  box-shadow: 0 4px 16px rgba(212, 168, 83, 0.35);
}

.wb-node-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.wb-node-key {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.wb-node-desc {
  font-size: 0.68rem;
  opacity: 0.75;
  line-height: 1.3;
  max-width: 10ch;
}

.wb-arrow {
  font-size: 1.5rem;
  color: #9CA3AF;
  flex-shrink: 0;
}

.wb-goal {
  font-size: 0.875rem;
  color: #6B7280;
  font-style: italic;
  margin: 0;
}
</style>
