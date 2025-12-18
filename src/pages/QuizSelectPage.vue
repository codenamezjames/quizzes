<template>
  <q-page class="quiz-select-page">
    <div class="page-header">
      <h1 class="page-title">Choose Your Quiz!</h1>
      <p class="page-subtitle">Pick a topic and test your knowledge</p>
    </div>

    <div class="quiz-grid">
      <QuizCard
        v-for="quiz in quizzes"
        :key="quiz.id"
        :quiz="quiz"
        :progress="progressStore.getQuizProgress(quiz.id)"
        @select="startQuiz"
      />
    </div>

    <div v-if="progressStore.totalScore > 0" class="total-score">
      <q-icon name="military_tech" size="sm" />
      <span>Total Score: {{ progressStore.totalScore }} points</span>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useQuizLoader } from 'src/composables/useQuizLoader'
import { useUserProgressStore } from 'src/stores/user-progress-store'
import QuizCard from 'src/components/quiz/QuizCard.vue'

const router = useRouter()
const { quizzes } = useQuizLoader()
const progressStore = useUserProgressStore()

function startQuiz(quizId) {
  router.push({ name: 'quiz-play', params: { quizId } })
}
</script>

<style lang="scss" scoped>
.quiz-select-page {
  padding: 40px 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #9b59b6, #ff69b4);
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.page-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.quiz-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.total-score {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
</style>
