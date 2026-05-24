<template>
  <q-page class="quiz-select-page">
    <div class="page-header">
      <q-btn
        flat
        round
        icon="arrow_back"
        color="white"
        class="back-btn"
        @click="$router.push({ name: 'home' })"
      />

      <h1 class="page-title">Choose a Category!</h1>
      <p class="page-subtitle">Pick a topic and test your knowledge</p>
    </div>

    <div class="groups-wrapper">
      <section
        v-for="group in categoryGroups"
        :key="group.name"
        class="category-group"
      >
        <h2 class="group-title">{{ group.name }}</h2>
        <div class="category-grid">
          <CategoryCard
            v-for="category in group.categories"
            :key="category.slug"
            :category="category"
            @select="goToCategory"
          />
        </div>
      </section>
    </div>

    <div v-if="progressStore.totalScore > 0" class="total-score">
      <q-icon name="military_tech" size="sm" />
      <span>Total Score: {{ progressStore.totalScore }} points</span>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getCategoryGroups } from 'src/data/quizzes'
import { useUserProgressStore } from 'src/stores/user-progress-store'
import CategoryCard from 'src/components/quiz/CategoryCard.vue'

const router = useRouter()
const progressStore = useUserProgressStore()

const categoryGroups = getCategoryGroups()

onMounted(() => {
  progressStore.loadFromLocalStorage()
})

function goToCategory(categorySlug) {
  router.push({ name: 'category', params: { categorySlug } })
}
</script>

<style lang="scss" scoped>
.quiz-select-page {
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

.groups-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.category-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.group-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  margin: 0;
  padding: 8px 16px;
  border-left: 6px solid rgba(255, 255, 255, 0.6);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.5px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
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

@media (max-width: 600px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
