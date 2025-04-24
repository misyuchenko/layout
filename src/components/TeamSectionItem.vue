<script setup lang="ts">
import type { Team } from './TeamSection.vue'
import SocialBlock from './ui/SocialBlock.vue'

interface Props {
  item: Team
}

defineProps<Props>()
</script>

<template>
  <div class="team-section-item">
    <h3 class="team-section-item__name">{{ item.name }}</h3>
    <span class="team-section-item__role">{{ item.role }}</span>
    <img
      class="team-section-item__avatar"
      :src="`src/assets/images/team_${item.avatar}.webp`"
      alt="team"
    />
    <SocialBlock />
  </div>
</template>

<style>
.team-section-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.team-section-item__name {
  font-size: var(--app-font-size-xl);
}

.team-section-item__role {
  font-size: var(--app-font-size-m);
}
</style>
