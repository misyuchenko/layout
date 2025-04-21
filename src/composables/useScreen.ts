import { computed, onMounted, onUnmounted, ref } from 'vue'

const useScreen = (debounceDelay = 100) => {
  const viewportWidth = ref(0)
  const viewportHeight = ref(0)

  const timeoutId = ref(0)

  const isMobile = computed(() => viewportWidth.value < 768)
  const isTablet = computed(() => viewportWidth.value >= 768 && viewportWidth.value < 1024)
  const isDesktop = computed(() => viewportWidth.value >= 1024)

  const updateDimensions = () => {
    clearTimeout(timeoutId.value)

    timeoutId.value = setTimeout(() => {
      viewportWidth.value = window.innerWidth
      viewportHeight.value = window.innerHeight
    }, debounceDelay)
  }

  onMounted(() => {
    viewportHeight.value = window.innerHeight
    viewportWidth.value = window.innerWidth
    window.addEventListener('resize', updateDimensions)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateDimensions)
    clearTimeout(timeoutId.value)
  })

  return { isMobile, isTablet, isDesktop, viewportWidth, viewportHeight }
}

export default useScreen
