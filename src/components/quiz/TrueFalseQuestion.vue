<template>
  <div class="question-container">
    <h2 class="question-text">{{ question.question }}</h2>

    <div class="tf-buttons">
      <q-btn
        class="tf-btn true-btn"
        :class="{ selected: selectedAnswer === true }"
        :outline="selectedAnswer !== true"
        :disable="disabled"
        color="positive"
        size="xl"
        @click="selectAnswer(true)"
      >
        <q-icon name="check_circle" size="48px" />
        <span class="tf-label">True</span>
      </q-btn>

      <q-btn
        class="tf-btn false-btn"
        :class="{ selected: selectedAnswer === false }"
        :outline="selectedAnswer !== false"
        :disable="disabled"
        color="negative"
        size="xl"
        @click="selectAnswer(false)"
      >
        <q-icon name="cancel" size="48px" />
        <span class="tf-label">False</span>
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

const selectedAnswer = ref(null)

function selectAnswer(value) {
  if (props.disabled) return
  selectedAnswer.value = value
  emit('answer-selected', value)
}

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
  margin-bottom: 40px;
  line-height: 1.4;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.tf-buttons {
  display: flex;
  justify-content: center;
  gap: 24px;
  max-width: 500px;
  margin: 0 auto;
}

.tf-btn {
  flex: 1;
  min-height: 140px;
  border-radius: 20px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &.selected {
    transform: scale(1.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  :deep(.q-btn__content) {
    flex-direction: column;
    gap: 8px;
  }
}

.tf-label {
  font-size: 1.3rem;
  font-weight: 700;
}

@media (max-width: 500px) {
  .tf-buttons {
    flex-direction: column;
    gap: 16px;
  }

  .tf-btn {
    min-height: 100px;
  }

  .question-text {
    font-size: 1.25rem;
  }
}
</style>
