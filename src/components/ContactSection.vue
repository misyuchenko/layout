<script setup lang="ts">
import LimitedContainer from './ui/LimitedContainer.vue'
import BaseButton from './ui/BaseButton.vue'
</script>

<template>
  <LimitedContainer tag="section" class="contact-section" title="contacts">
    <h2>Let's start building your brand's unique story together.</h2>
    <p>Want to see what a difference a strong brand can make? Request a consultation today.</p>
    <BaseButton type="secondary" block>Get in touch</BaseButton>
  </LimitedContainer>
</template>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  text-transform: uppercase;
  font-size: var(--app-font-size-xl);
}

.contact-section h2 {
  font-size: var(--app-font-size-xxl);
}
</style>
