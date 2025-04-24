<script setup lang="ts">
interface Props {
  block?: boolean
  type?: 'primary' | 'secondary'
}

defineProps<Props>()
</script>

<template>
  <button
    class="btn"
    v-bind="$attrs"
    :class="{ 'btn--block': block, 'btn--secondary': type === 'secondary' }"
  >
    <slot name="icon-prepend"></slot>
    <slot>Button</slot>
    <slot name="icon-append"></slot>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: var(--app-text-width-light);
  background-color: var(--app-color-white);
  border: none;
  border-radius: 30px;
}

.btn--block {
  width: 100%;
}

.btn--secondary {
  background-color: var(--app-color-black);
  color: var(--app-color-white);
}
</style>
