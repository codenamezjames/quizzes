<template>
  <div class="progress-container">
    <div class="progress-info">
      <span class="question-counter">
        Question {{ current }} of {{ total }}
      </span>
    </div>
    <q-linear-progress
      :value="progress"
      size="12px"
      rounded
      color="accent"
      track-color="purple-2"
      class="progress-bar"
    />
    <div class="progress-dots">
      <span
        v-for="n in total"
        :key="n"
        class="dot"
        :class="{
          completed: n < current,
          current: n === current,
          upcoming: n > current,
        }"
      >
        <q-icon v-if="n < current" name="star" size="xs" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})

const progress = computed(() => (props.current - 1) / props.total)
</script>

<style lang="scss" scoped>
.progress-container {
  padding: 16px;
}

.progress-info {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.question-counter {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.progress-bar {
  border-radius: 6px;
}

.progress-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &.completed {
    background: linear-gradient(135deg, #ffd700, #ffaa00);
    color: white;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);
  }

  &.current {
    background: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
    animation: pulse 1.5s infinite;
  }

  &.upcoming {
    background: rgba(255, 255, 255, 0.3);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
