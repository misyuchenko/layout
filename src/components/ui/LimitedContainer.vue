<script setup lang="ts">
interface Props {
  tag?: keyof HTMLElementTagNameMap
}
const { tag = 'div' } = defineProps<Props>()
</script>

<template>
  <Component :is="tag" class="limited-container" v-bind="$attrs">
    <slot></slot>
  </Component>
</template>

<style scoped>
.limited-container {
  padding-inline: 20px;
}
</style>
