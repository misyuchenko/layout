<script setup lang="ts">
import LimitedContainer from '@/components/ui/LimitedContainer.vue'
import BaseButton from './ui/BaseButton.vue'

const getImageUrl = (n: number) => `/src/assets/images/portfolio_${n}.webp`
</script>

<template>
  <LimitedContainer tag="section" class="work-section" title="selected work">
    <div class="work-section__images">
      <img v-for="n in 4" :key="n" :src="getImageUrl(n)" alt="test" />
    </div>
    <div class="work-section__actions">
      <BaseButton class="work-section__button" block>See more</BaseButton>
    </div>
  </LimitedContainer>
</template>

<style scoped>
.work-section__images {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.work-section__actions {
  padding-top: 40px;
}
</style>
