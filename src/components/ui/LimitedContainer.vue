<script setup lang="ts">
interface Props {
  tag?: keyof HTMLElementTagNameMap
  title?: string
}
const { tag = 'div' } = defineProps<Props>()
</script>

<template>
  <Component :is="tag" class="limited-container" v-bind="$attrs">
    <h2 v-if="title" class="limited-container__title">{{ title }}</h2>
    <slot></slot>
  </Component>
</template>

<style scoped>
.limited-container {
  border-top: 1px solid rgb(37, 37, 37);
  padding: 30px 20px;
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
