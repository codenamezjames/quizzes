<template>
  <q-card class="category-card" :style="cardStyle" @click="$emit('select', category.slug)">
    <q-card-section class="card-content">
      <q-icon :name="category.icon" size="48px" class="category-icon" />

      <h3 class="category-title">{{ category.title }}</h3>

      <p class="category-description">{{ category.description }}</p>

      <q-badge color="white" text-color="dark" class="quiz-count">
        {{ category.quizCount }} {{ category.quizCount === 1 ? 'Quiz' : 'Quizzes' }}
      </q-badge>
    </q-card-section>

    <div class="card-overlay">
      <q-icon name="arrow_forward" size="24px" />
    </div>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])

const cardStyle = computed(() => ({
  background: `linear-gradient(135deg, ${props.category.color}, ${adjustColor(props.category.color, -20)})`,
}))

function adjustColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = ((num >> 8) & 0x00ff) + amt
  const B = (num & 0x0000ff) + amt
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  )
}
</script>

<style lang="scss" scoped>
.category-card {
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  min-height: 200px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    .card-overlay {
      opacity: 1;
    }
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
  color: white;
}

.category-icon {
  margin-bottom: 12px;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 8px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.category-description {
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 0 0 16px;
  line-height: 1.4;
}

.quiz-count {
  font-weight: 600;
  padding: 6px 16px;
}

.card-overlay {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>
