<script setup lang="ts">
import LimitedContainer from '@/components/ui/LimitedContainer.vue'
import IconArrowDown from '@/assets/svg/arrow-down.svg'
</script>

<template>
  <LimitedContainer tag="section" class="app-about">
    <h2 class="app-about__title">
      <span>Dianne Russell</span> <br />
      <span>Digital Design</span>
    </h2>
    <div class="app-about__actions">
      <IconArrowDown />
    </div>
  </LimitedContainer>
</template>

<style scoped>
.app-about {
  padding-block: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.app-about__title {
  text-align: center;
  font-size: var(--app-font-size-xxl);
  font-weight: var(--app-text-width-bold);
}

.app-about__title span:last-child {
  font-weight: var(--app-text-width-light);
}

.app-about__actions {
  display: flex;
  justify-content: center;
}
</style>
