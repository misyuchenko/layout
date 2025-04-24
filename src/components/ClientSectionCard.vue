<script setup lang="ts">
import type { Client } from '@/components/ClientsSection.vue'

interface Props {
  client: Client
}

defineProps<Props>()
</script>

<template>
  <div class="client-card">
    <!-- <div class="client-card__logo">{{ client.logo }}</div> -->
    <h3 class="client-card__job-title">{{ client.title }}</h3>
    <div class="client-card__commentary">{{ client.commentary }}</div>
    <div class="client-card__user">
      <img
        class="client-card__avatar"
        :src="`src/assets/images/client_${client.avatar}.webp`"
        alt="avatar"
      />
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
  padding-top: 30px;
  gap: 40px;
  /* border-bottom: 1px solid rgb(37, 37, 37); */
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

.client-card__avatar {
  --size: 70px;
  width: var(--size) !important;
  height: var(--size);
  border-radius: 50%;
  background-color: var(--app-color-white);
  object-fit: cover;
}

.client-card__job-title {
  font-size: var(--app-font-size-xl);
}

.client-card__commentary {
  font-size: var(--app-font-size-m);
}
</style>
