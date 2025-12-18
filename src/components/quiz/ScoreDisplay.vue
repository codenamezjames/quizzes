<template>
  <div class="score-display" :class="{ bounce: justScored }">
    <q-icon name="stars" size="sm" class="star-icon" />
    <span class="score-value">{{ displayScore }}</span>
    <span class="score-label">points</span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
})

const displayScore = ref(props.score)
const justScored = ref(false)

// Animate score changes
watch(
  () => props.score,
  (newScore, oldScore) => {
    if (newScore > oldScore) {
      justScored.value = true
      setTimeout(() => {
        justScored.value = false
      }, 500)

      // Animate number counting up
      const diff = newScore - oldScore
      const steps = 10
      const stepValue = diff / steps
      let current = oldScore

      const interval = setInterval(() => {
        current += stepValue
        if (current >= newScore) {
          displayScore.value = newScore
          clearInterval(interval)
        } else {
          displayScore.value = Math.round(current)
        }
      }, 30)
    } else {
      displayScore.value = newScore
    }
  }
)
</script>

<style lang="scss" scoped>
.score-display {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 170, 0, 0.2));
  border: 2px solid rgba(255, 215, 0, 0.5);
  border-radius: 24px;
  padding: 8px 16px;
  transition: transform 0.3s ease;

  &.bounce {
    animation: scoreBounce 0.5s ease;
  }
}

.star-icon {
  color: #ffd700;
}

.score-value {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffd700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.score-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

@keyframes scoreBounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
