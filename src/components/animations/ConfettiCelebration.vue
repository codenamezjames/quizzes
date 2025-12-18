<template>
  <canvas
    ref="canvasRef"
    class="confetti-canvas"
    :width="width"
    :height="height"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useConfetti } from 'src/composables/useConfetti'

const props = defineProps({
  trigger: {
    type: Boolean,
    default: false,
  },
})

const canvasRef = ref(null)
const width = ref(window.innerWidth)
const height = ref(window.innerHeight)

const { canvas, burstFromCenter, resizeCanvas } = useConfetti()

onMounted(() => {
  canvas.value = canvasRef.value
  resizeCanvas()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  width.value = window.innerWidth
  height.value = window.innerHeight
  resizeCanvas()
}

watch(
  () => props.trigger,
  (newVal) => {
    if (newVal) {
      burstFromCenter(100)
    }
  }
)

// Expose method for manual triggering
defineExpose({
  burst: burstFromCenter,
})
</script>

<style scoped>
.confetti-canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}
</style>
