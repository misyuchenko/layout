<script setup lang="ts">
interface Props {
  tag?: keyof HTMLElementTagNameMap
  title?: string
  hideBorder?: boolean
}
const { tag = 'div', hideBorder = false } = defineProps<Props>()
</script>

<template>
  <Component
    :is="tag"
    class="limited-container"
    v-bind="$attrs"
    :class="{ 'limited-container--hide-border': hideBorder }"
  >
    <h2 v-if="title" class="limited-container__title">{{ title }}</h2>
    <slot></slot>
  </Component>
</template>

<style scoped>
.limited-container {
  padding: 30px 20px;
  border-top: 1px solid rgb(37, 37, 37);
}

.limited-container--hide-border {
  border-top: unset;
}

.limited-container__title {
  font-size: 68px;
  text-align: center;
  font-weight: var(--app-text-width-light);
  padding-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0;
}
</style>
