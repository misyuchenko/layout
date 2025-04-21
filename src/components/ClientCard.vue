<script setup lang="ts">
import type { Client } from '@/components/AppClients.vue'

interface Props {
  client: Client
}

defineProps<Props>()
</script>

<template>
  <div class="client-card">
    <div class="client-card__logo">{{ client.logo }}</div>
    <h3 class="client-card__job-title">{{ client.jobTitle }}</h3>
    <div class="client-card__commentary">{{ client.commentary }}</div>
    <div class="client-card__user">
      <img src="" alt="avatar" />
      <div class="client-card__user-info">
        <span>{{ client.name }}</span>
        <span>{{ client.role }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.client-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  gap: 30px;
}

.client-card__user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.client-card__user-info {
  display: flex;
  flex-direction: column;
}

.client-card__job-title {
  white-space: pre;
}
</style>
