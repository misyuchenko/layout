<script setup lang="ts">
import type { Skill } from '../components/SkillsSection.vue'

interface Props {
  item: Skill
  place: string
}

defineProps<Props>()
</script>

<template>
  <div class="skills-section-item">
    <div class="skills-section-item__title">
      <div class="skills-section-item__place">{{ place }}</div>
      <div class="skills-section-item__name">{{ item.name }}</div>
    </div>
    <p class="skills-section-item__text">{{ item.description }}</p>
  </div>
</template>

<style scoped>
.skills-section-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(37, 37, 37);
}

.skills-section-item__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--app-font-size-xl);
}

.skills-section-item__name {
  font-weight: var(--app-text-width-bold);
}

.skills-section-item__text {
  font-size: var(--app-font-size-m);
}
</style>
