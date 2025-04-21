<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout.vue'
// import useScreen from '@/composables/useScreen'
import AppHeader from './components/AppHeader.vue'
import AppAbout from './components/AppAbout.vue'
// const { isMobile, isTablet, isDesktop, viewportHeight, viewportWidth } = useScreen()s
</script>

<template>
  <BaseLayout>
    <main>
      <AppHeader />
      <AppAbout />
    </main>
  </BaseLayout>
</template>

<style scoped></style>
