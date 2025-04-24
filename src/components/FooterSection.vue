<script setup lang="ts">
import LimitedContainer from './ui/LimitedContainer.vue'
import SocialBlock from './ui/SocialBlock.vue'
</script>

<template>
  <LimitedContainer tag="footer" class="footer-section">
    <p>© Made by Kunturi Design. All rights reserved.</p>
    <SocialBlock />
  </LimitedContainer>
</template>

<style scoped>
.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
