<template>
  <q-page class="category-page">
    <div class="page-header">
      <q-btn
        flat
        round
        icon="arrow_back"
        color="white"
        class="back-btn"
        @click="$router.push({ name: 'quiz-select' })"
      />

      <div class="header-content">
        <q-icon :name="category?.icon || 'quiz'" size="60px" class="category-icon" />
        <h1 class="page-title">{{ category?.title || 'Category' }}</h1>
        <p class="page-subtitle">{{ category?.description }}</p>
        <q-badge color="white" text-color="dark" class="quiz-count">
          {{ quizzes.length }} {{ quizzes.length === 1 ? 'Quiz' : 'Quizzes' }}
        </q-badge>
      </div>
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

    <div v-if="categoryScore > 0" class="category-score">
      <q-icon name="emoji_events" size="sm" />
      <span>Category Score: {{ categoryScore }} points</span>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getQuizzesByCategory, categoryMeta } from 'src/data/quizzes'
import { useUserProgressStore } from 'src/stores/user-progress-store'
import QuizCard from 'src/components/quiz/QuizCard.vue'

const route = useRoute()
const router = useRouter()
const progressStore = useUserProgressStore()

const categorySlug = computed(() => route.params.categorySlug)

const category = computed(() => {
  const slug = categorySlug.value
  return categoryMeta[slug] ? { slug, ...categoryMeta[slug] } : null
})

const quizzes = computed(() => getQuizzesByCategory(categorySlug.value))

const categoryScore = computed(() => {
  return quizzes.value.reduce((total, quiz) => {
    const progress = progressStore.getQuizProgress(quiz.id)
    return total + (progress?.bestScore || 0)
  }, 0)
})

onMounted(() => {
  progressStore.loadFromLocalStorage()

  // Redirect if category doesn't exist
  if (!category.value) {
    router.push({ name: 'quiz-select' })
  }
})

function startQuiz(quizId) {
  router.push({ name: 'quiz-play', params: { quizId } })
}
</script>

<style lang="scss" scoped>
.category-page {
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #9b59b6, #ff69b4);
}

.page-header {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  padding-top: 20px;
}

.back-btn {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.2);
}

.header-content {
  max-width: 500px;
  margin: 0 auto;
}

.category-icon {
  color: white;
  margin-bottom: 12px;
  filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2));
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.page-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 16px;
}

.quiz-count {
  font-size: 0.9rem;
  padding: 6px 16px;
}

.quiz-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.category-score {
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

@media (max-width: 600px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
