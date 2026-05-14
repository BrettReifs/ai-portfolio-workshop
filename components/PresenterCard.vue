<script setup>
defineProps({
  name: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  image: { type: String, default: '' },
})
</script>

<template>
  <div class="presenter-card">
    <div class="presenter-img-wrap">
      <img
        v-if="image"
        :src="image"
        :alt="name"
        class="presenter-img"
      />
      <div v-else class="presenter-img-placeholder">
        <span class="presenter-initial">{{ name.charAt(0) }}</span>
      </div>
    </div>
    <div class="presenter-info">
      <div class="presenter-name">{{ name }}</div>
      <div class="presenter-title">{{ title }}</div>
      <div v-if="subtitle" class="presenter-subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style scoped>
.presenter-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem 1.5rem;
  text-align: center;
}

.presenter-img-wrap {
  width: 160px;
  height: 160px;
  border-radius: 9999px;
  overflow: hidden;
  border: 3px solid var(--uw-gold-bright, #D4A853);
  box-shadow: 0 0 0 6px var(--uw-purple-light, #EDE8F5);
  flex-shrink: 0;
}

.presenter-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.presenter-img-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4B2E83, #7B5DB0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.presenter-initial {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.presenter-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.presenter-name {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--uw-purple, #4B2E83);
  letter-spacing: -0.02em;
}

.presenter-title {
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.45;
  max-width: 22ch;
  margin: 0 auto;
}

.presenter-subtitle {
  font-size: 0.75rem;
  color: var(--uw-gold-bright, #D4A853);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.25rem;
}
</style>
