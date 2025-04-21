<template>
  <component
    :is="iconComponent"
    class="base-icon"
    :class="customClass"
    :width="computedWidth"
    :height="computedHeight"
    :viewBox="viewBox"
    :fill="color"
    :stroke="strokeColor"
    :stroke-width="strokeWidth"
    :style="customStyle"
  />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

interface Props {
  name: string
  size?: string | number
  width?: string | number
  height?: string | number
  color?: string
  strokeColor?: string
  strokeWidth?: string | number
  viewBox?: string
  customClass?: string | string[] | Record<string, boolean>
  customStyle?: Record<string, string>
}

const props = defineProps<Props>()

const computedWidth = computed(() => props.size || props.width)
const computedHeight = computed(() => props.size || props.height)

const iconComponent = computed(() => {
  try {
    return defineAsyncComponent(() => import(`@/assets/svg/${props.name}.svg`))
  } catch (error) {
    console.error(`Error loading icon: ${props.name}`, error)
    return null
  }
})
</script>

<style scoped>
/* .base-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
  transition: all 0.2s ease;
} */
</style>
