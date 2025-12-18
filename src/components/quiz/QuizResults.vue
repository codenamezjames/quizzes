<template>
  <div class="results-container">
    <div class="results-card animated bounceIn">
      <div class="trophy-section">
        <q-icon name="emoji_events" size="100px" class="trophy-icon" />
      </div>

      <h1 class="results-title">{{ resultTitle }}</h1>

      <div class="score-circle">
        <svg viewBox="0 0 100 100" class="score-ring">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            stroke-width="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#scoreGradient)"
            stroke-width="8"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset"
            class="progress-ring"
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFD700" />
              <stop offset="100%" stop-color="#FF69B4" />
            </linearGradient>
          </defs>
        </svg>
        <div class="score-text">
          <span class="score-percent">{{ percentage }}%</span>
        </div>
      </div>

      <div class="stats">
        <div class="stat-item">
          <q-icon name="check_circle" color="positive" size="sm" />
          <span>{{ correctAnswers }} correct</span>
        </div>
        <div class="stat-item">
          <q-icon name="stars" color="accent" size="sm" />
          <span>{{ score }} points</span>
        </div>
      </div>

      <div class="stars-rating">
        <q-icon
          v-for="n in 5"
          :key="n"
          :name="n <= starRating ? 'star' : 'star_outline'"
          :color="n <= starRating ? 'accent' : 'grey-5'"
          size="36px"
          class="star"
          :class="{ filled: n <= starRating }"
        />
      </div>

      <div class="actions">
        <q-btn
          label="Play Again"
          color="primary"
          size="lg"
          rounded
          outline
          class="action-btn"
          @click="$emit('play-again')"
        >
          <q-icon name="replay" left />
        </q-btn>

        <q-btn
          label="More Quizzes"
          color="secondary"
          size="lg"
          rounded
          class="action-btn"
          @click="$emit('go-home')"
        >
          <q-icon name="home" left />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  correctAnswers: {
    type: Number,
    required: true,
  },
  maxScore: {
    type: Number,
    required: true,
  },
})

defineEmits(['play-again', 'go-home'])

const percentage = computed(() =>
  Math.round((props.correctAnswers / props.totalQuestions) * 100)
)

const circumference = 2 * Math.PI * 45

const dashOffset = computed(
  () => circumference - (percentage.value / 100) * circumference
)

const starRating = computed(() => {
  const pct = percentage.value
  if (pct >= 100) return 5
  if (pct >= 80) return 4
  if (pct >= 60) return 3
  if (pct >= 40) return 2
  return 1
})

const resultTitle = computed(() => {
  const pct = percentage.value
  if (pct >= 100) return '🏆 Perfect Score!'
  if (pct >= 80) return '🌟 Amazing!'
  if (pct >= 60) return '✨ Great Job!'
  if (pct >= 40) return '👍 Good Try!'
  return '💪 Keep Practicing!'
})
</script>

<style lang="scss" scoped>
.results-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #9b59b6, #ff69b4);
}

.results-card {
  background: white;
  border-radius: 32px;
  padding: 40px;
  max-width: 450px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.trophy-section {
  margin-bottom: 16px;
}

.trophy-icon {
  color: #ffd700;
  filter: drop-shadow(0 4px 8px rgba(255, 215, 0, 0.4));
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.results-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: #333;
}

.score-circle {
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0 auto 24px;
}

.score-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-ring {
  transition: stroke-dashoffset 1s ease-out;
}

.score-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.score-percent {
  font-size: 2.5rem;
  font-weight: 700;
  color: #9b59b6;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: #666;
}

.stars-rating {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 32px;
}

.star {
  transition: transform 0.3s ease;

  &.filled {
    animation: starPop 0.5s ease backwards;
    animation-delay: calc(var(--index, 0) * 0.1s);
  }
}

@keyframes starPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-btn {
  font-weight: 600;
}
</style>
