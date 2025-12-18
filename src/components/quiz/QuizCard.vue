<template>
  <q-card
    class="quiz-card"
    :style="{ '--card-color': quiz.coverColor }"
    @click="$emit('select', quiz.id)"
  >
    <q-card-section class="card-header">
      <q-icon :name="quiz.icon" size="48px" class="quiz-icon" />
    </q-card-section>

    <q-card-section class="card-content">
      <h3 class="quiz-title">{{ quiz.title }}</h3>
      <p class="quiz-description">{{ quiz.description }}</p>

      <div class="quiz-meta">
        <q-chip
          :color="categoryColor"
          text-color="white"
          size="sm"
          class="category-chip"
        >
          {{ quiz.category }}
        </q-chip>

        <div v-if="progress" class="progress-badge">
          <q-icon name="emoji_events" size="xs" />
          <span>{{ progress.bestScore }} pts</span>
        </div>
      </div>
    </q-card-section>

    <q-card-actions class="card-actions">
      <q-btn
        :label="progress ? 'Play Again' : 'Start Quiz'"
        color="white"
        text-color="primary"
        rounded
        class="play-btn"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  quiz: {
    type: Object,
    required: true,
  },
  progress: {
    type: Object,
    default: null,
  },
})

defineEmits(['select'])

const categoryColors = {
  Science: 'purple',
  Geography: 'blue',
  Math: 'orange',
  History: 'brown',
  Art: 'pink',
}

const categoryColor = computed(
  () => categoryColors[props.quiz.category] || 'grey'
)
</script>

<style lang="scss" scoped>
.quiz-card {
  background: linear-gradient(
    135deg,
    var(--card-color),
    color-mix(in srgb, var(--card-color) 70%, black)
  );
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }
}

.card-header {
  display: flex;
  justify-content: center;
  padding-top: 24px;
}

.quiz-icon {
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 16px;
}

.card-content {
  text-align: center;
  color: white;
}

.quiz-title {
  margin: 0 0 8px;
  font-size: 1.4rem;
  font-weight: 700;
}

.quiz-description {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.4;
}

.quiz-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
}

.progress-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 4px 10px;
  font-size: 0.85rem;
  color: #ffd700;
}

.card-actions {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

.play-btn {
  font-weight: 600;
  padding: 8px 32px;
}
</style>
