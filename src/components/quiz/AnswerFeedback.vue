<template>
  <Transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="show" class="feedback-overlay" :class="{ correct: isCorrect }">
      <div class="feedback-content animated" :class="isCorrect ? 'bounceIn' : 'tada'">
        <div class="feedback-icon-wrapper">
          <q-icon
            :name="isCorrect ? 'celebration' : 'sentiment_dissatisfied'"
            size="80px"
            :color="isCorrect ? 'positive' : 'negative'"
          />
        </div>

        <h2 class="feedback-title">
          {{ isCorrect ? randomCorrectMessage : randomIncorrectMessage }}
        </h2>

        <p class="feedback-explanation">{{ explanation }}</p>

        <q-btn
          :label="isLastQuestion ? 'See Results' : 'Next Question'"
          :color="isCorrect ? 'positive' : 'primary'"
          size="lg"
          rounded
          class="next-btn"
          @click="$emit('next')"
        >
          <q-icon
            :name="isLastQuestion ? 'emoji_events' : 'arrow_forward'"
            right
          />
        </q-btn>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
  explanation: {
    type: String,
    default: '',
  },
  isLastQuestion: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['next'])

const correctMessages = [
  'Amazing! 🌟',
  'You got it! ✨',
  'Brilliant! 🎉',
  'Super smart! 🧠',
  'Nailed it! 💫',
  'Fantastic! 🌈',
]

const incorrectMessages = [
  "Nice try! Let's learn something new!",
  "Oops! But now you know!",
  "Not quite, but keep going!",
  "Good guess! Here's the answer:",
]

const randomCorrectMessage = computed(
  () => correctMessages[Math.floor(Math.random() * correctMessages.length)]
)

const randomIncorrectMessage = computed(
  () => incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)]
)
</script>

<style lang="scss" scoped>
.feedback-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;

  &.correct {
    background: rgba(46, 204, 113, 0.15);
  }
}

.feedback-content {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.feedback-icon-wrapper {
  margin-bottom: 16px;
}

.feedback-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 16px;
  color: #333;
}

.feedback-explanation {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
}

.next-btn {
  font-weight: 600;
  padding: 12px 32px;
}
</style>
