<script setup lang="ts">
import { useId } from 'vue'
import LimitedContainer from './ui/LimitedContainer.vue'
import TeamSectionItem from './TeamSectionItem.vue'
import BaseButton from './ui/BaseButton.vue'

export interface Team {
  id: string
  name: string
  role: string
  avatar?: string
}

const teamMembers: Team[] = [
  { id: useId(), name: 'Tyra Dhillon', role: 'Creative director', avatar: 'tyra' },
  { id: useId(), name: 'Darcel Ballentine', role: 'Brand designer', avatar: 'darcel' },
  { id: useId(), name: 'Brittni Lando', role: 'Fasion designer', avatar: 'brittni' },
  { id: useId(), name: 'Roselle Ehrman', role: 'Graphic designer', avatar: 'roselle' },
  { id: useId(), name: 'Jane Cooper', role: 'Creative director', avatar: 'jane' },
  { id: useId(), name: 'Robert Fox', role: 'Brand designer', avatar: 'robert' },
]
</script>

<template>
  <LimitedContainer tag="section" class="team-section" title="our team">
    <ul class="team-section__list">
      <li v-for="teamMember in teamMembers" :key="teamMember.id">
        <TeamSectionItem :item="teamMember" />
      </li>
    </ul>
    <div class="team-section__join">
      <p>JOIN THE TEAM</p>
      <h2>Desire to influence the future of branding?</h2>
      <BaseButton type="secondary" block> Find Job </BaseButton>
    </div>
  </LimitedContainer>
</template>

<style scoped>
.team-section {
  text-transform: uppercase;
}

.team-section__join {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  font-size: var(--app-font-size-xl);
}

.team-section__join h2 {
  font-size: var(--app-font-size-xxl);
}

.team-section__list li + li {
  margin-top: 30px;
}
</style>
