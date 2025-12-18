<template>
  <div class="question-container">
    <h2 class="question-text">{{ question.question }}</h2>

    <div class="options-grid">
      <q-btn
        v-for="(option, index) in question.options"
        :key="option.id"
        :label="option.text"
        :color="getOptionColor(option.id)"
        :text-color="selectedAnswer === option.id ? 'white' : 'dark'"
        :outline="selectedAnswer !== option.id"
        :disable="disabled"
        size="lg"
        class="option-btn"
        :class="{ selected: selectedAnswer === option.id }"
        @click="selectAnswer(option.id)"
      >
        <template #default>
          <span class="option-letter">{{ letters[index] }}</span>
          <span class="option-text">{{ option.text }}</span>
        </template>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['answer-selected'])

const letters = ['A', 'B', 'C', 'D']
const selectedAnswer = ref(null)

const optionColors = ['pink', 'purple', 'blue', 'teal']

function getOptionColor(optionId) {
  const index = props.question.options.findIndex((o) => o.id === optionId)
  return optionColors[index] || 'primary'
}

function selectAnswer(optionId) {
  if (props.disabled) return
  selectedAnswer.value = optionId
  emit('answer-selected', optionId)
}

// Reset selection when question changes
defineExpose({
  reset: () => {
    selectedAnswer.value = null
  },
})
</script>

<style lang="scss" scoped>
.question-container {
  padding: 20px;
}

.question-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 32px;
  line-height: 1.4;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.option-btn {
  min-height: 80px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: scale(1.03);
  }

  &.selected {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  :deep(.q-btn__content) {
    flex-direction: column;
    gap: 4px;
  }
}

.option-letter {
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0.7;
}

.option-text {
  font-size: 1rem;
  text-align: center;
  line-height: 1.3;
}

@media (max-width: 500px) {
  .options-grid {
    grid-template-columns: 1fr;
  }

  .question-text {
    font-size: 1.25rem;
  }
}
</style>
