<template>
  <q-page class="quiz-play-page">
    <!-- Loading state -->
    <div v-if="loading" class="loading-state">
      <q-spinner-dots color="white" size="60px" />
      <p>Loading quiz...</p>
    </div>

    <!-- Quiz in progress -->
    <template v-else-if="quizStore.currentQuiz && !quizStore.isComplete">
      <div class="quiz-header">
        <q-btn
          flat
          round
          icon="close"
          color="white"
          class="close-btn"
          @click="confirmExit"
        />

        <ScoreDisplay :score="quizStore.score" />
      </div>

      <ProgressBar
        :current="quizStore.currentQuestionIndex + 1"
        :total="quizStore.totalQuestions"
      />

      <div class="question-area">
        <Transition
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown"
          mode="out-in"
        >
          <component
            :is="questionComponent"
            :key="quizStore.currentQuestionIndex"
            ref="questionRef"
            :question="quizStore.currentQuestion"
            :disabled="quizStore.showingFeedback"
            @answer-selected="handleAnswer"
          />
        </Transition>
      </div>

      <AnswerFeedback
        :show="quizStore.showingFeedback"
        :is-correct="quizStore.feedbackData?.isCorrect ?? false"
        :explanation="quizStore.feedbackData?.explanation ?? ''"
        :is-last-question="quizStore.currentQuestionIndex === quizStore.totalQuestions - 1"
        @next="handleNext"
      />
    </template>

    <!-- Quiz complete -->
    <QuizResults
      v-else-if="quizStore.isComplete"
      :score="quizStore.score"
      :total-questions="quizStore.totalQuestions"
      :correct-answers="quizStore.correctAnswers"
      :max-score="quizStore.maxPossibleScore"
      @play-again="playAgain"
      @go-home="goHome"
    />

    <!-- Confetti overlay -->
    <ConfettiCelebration ref="confettiRef" />
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useQuizStore } from 'src/stores/quiz-store'
import { useUserProgressStore } from 'src/stores/user-progress-store'
import { useQuizLoader } from 'src/composables/useQuizLoader'
import { useSoundEffects } from 'src/composables/useSoundEffects'

import ProgressBar from 'src/components/quiz/ProgressBar.vue'
import ScoreDisplay from 'src/components/quiz/ScoreDisplay.vue'
import MultipleChoiceQuestion from 'src/components/quiz/MultipleChoiceQuestion.vue'
import TrueFalseQuestion from 'src/components/quiz/TrueFalseQuestion.vue'
import AnswerFeedback from 'src/components/quiz/AnswerFeedback.vue'
import QuizResults from 'src/components/quiz/QuizResults.vue'
import ConfettiCelebration from 'src/components/animations/ConfettiCelebration.vue'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const quizStore = useQuizStore()
const progressStore = useUserProgressStore()
const { fetchQuiz, loading } = useQuizLoader()
const { playCorrect, playIncorrect, playCelebration } = useSoundEffects()

const questionRef = ref(null)
const confettiRef = ref(null)

const questionComponent = computed(() => {
  const type = quizStore.currentQuestion?.type
  if (type === 'true-false') return TrueFalseQuestion
  return MultipleChoiceQuestion
})

onMounted(async () => {
  progressStore.loadFromLocalStorage()

  const quizId = route.params.quizId
  const quiz = await fetchQuiz(quizId)

  if (quiz) {
    quizStore.startQuiz(quiz)
  } else {
    $q.notify({
      type: 'negative',
      message: 'Quiz not found!',
    })
    router.push({ name: 'quiz-select' })
  }
})

function handleAnswer(answer) {
  quizStore.submitAnswer(answer)

  if (quizStore.feedbackData?.isCorrect) {
    playCorrect()
    confettiRef.value?.burst()
    progressStore.updateStreak(true)
  } else {
    playIncorrect()
    progressStore.updateStreak(false)
  }
}

function handleNext() {
  questionRef.value?.reset?.()
  quizStore.nextQuestion()

  // If quiz is now complete, record it and celebrate
  if (quizStore.isComplete) {
    progressStore.recordQuizCompletion(
      quizStore.currentQuiz.id,
      quizStore.score,
      quizStore.maxPossibleScore
    )
    playCelebration()
    setTimeout(() => confettiRef.value?.burst(), 300)
  }
}

function playAgain() {
  quizStore.startQuiz(quizStore.currentQuiz)
}

function goHome() {
  quizStore.resetQuiz()
  router.push({ name: 'quiz-select' })
}

function confirmExit() {
  $q.dialog({
    title: 'Leave Quiz?',
    message: 'Your progress will be lost. Are you sure?',
    cancel: true,
    persistent: true,
    color: 'primary',
  }).onOk(() => {
    quizStore.resetQuiz()
    router.push({ name: 'quiz-select' })
  })
}

// Watch for quiz completion
watch(
  () => quizStore.isComplete,
  (isComplete) => {
    if (isComplete) {
      setTimeout(() => confettiRef.value?.burst(), 500)
    }
  }
)
</script>

<style lang="scss" scoped>
.quiz-play-page {
  min-height: 100vh;
  padding: 20px;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  color: white;

  p {
    margin-top: 16px;
    font-size: 1.2rem;
  }
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.close-btn {
  background: rgba(255, 255, 255, 0.2);
}

.question-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
}
</style>
