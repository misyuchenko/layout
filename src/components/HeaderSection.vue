<script setup lang="ts">
import LimitedContainer from './ui/LimitedContainer.vue'
import LogoIcon from '@/assets/svg/logo.svg'
</script>

<template>
  <LimitedContainer tag="header" class="app-header">
    <a href="#">
      <LogoIcon class="app-header__logo" />
    </a>
    <div class="app-header__menu">Menu</div>
  </LimitedContainer>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 20px;
  height: fit-content;
}

.app-header__menu {
  font-size: var(--app-font-size-l);
  font-weight: var(--app-text-width-bold);
}

.app-header__logo {
  width: 65px;
  height: 30px;
}
</style>
