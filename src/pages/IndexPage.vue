<template>
  <q-page class="home-page">
    <div class="hero-section">
      <div class="hero-content animated bounceIn">
        <q-icon name="psychology" size="120px" class="hero-icon" />

        <h1 class="hero-title">Quiz Time!</h1>

        <p class="hero-subtitle">
          Learn cool facts and test your knowledge with fun quizzes!
        </p>

        <q-btn
          label="Start Playing"
          color="accent"
          text-color="dark"
          size="xl"
          rounded
          class="start-btn"
          @click="$router.push({ name: 'quiz-select' })"
        >
          <q-icon name="play_arrow" right />
        </q-btn>
      </div>

      <div v-if="progressStore.totalScore > 0" class="stats-card animated fadeInUp">
        <h3>Your Progress</h3>
        <div class="stats-row">
          <div class="stat">
            <q-icon name="stars" size="md" color="accent" />
            <span class="stat-value">{{ progressStore.totalScore }}</span>
            <span class="stat-label">Total Points</span>
          </div>
          <div class="stat">
            <q-icon name="emoji_events" size="md" color="warning" />
            <span class="stat-value">{{ completedQuizCount }}</span>
            <span class="stat-label">Quizzes Completed</span>
          </div>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="feature">
        <q-icon name="lightbulb" size="lg" color="accent" />
        <span>Learn Fun Facts</span>
      </div>
      <div class="feature">
        <q-icon name="celebration" size="lg" color="secondary" />
        <span>Win Points</span>
      </div>
      <div class="feature">
        <q-icon name="trending_up" size="lg" color="positive" />
        <span>Track Progress</span>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useUserProgressStore } from 'src/stores/user-progress-store'

const progressStore = useUserProgressStore()

onMounted(() => {
  progressStore.loadFromLocalStorage()
})

const completedQuizCount = computed(
  () => Object.keys(progressStore.completedQuizzes).length
)
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #9b59b6, #ff69b4);
  display: flex;
  flex-direction: column;
}

.hero-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
}

.hero-content {
  max-width: 500px;
}

.hero-icon {
  color: white;
  margin-bottom: 16px;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2));
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  margin: 0 0 16px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 32px;
  line-height: 1.5;
}

.start-btn {
  font-weight: 700;
  font-size: 1.2rem;
  padding: 16px 48px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.05);
  }
}

.stats-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 24px 32px;
  margin-top: 40px;
  color: white;

  h3 {
    margin: 0 0 16px;
    font-size: 1.1rem;
    opacity: 0.9;
  }
}

.stats-row {
  display: flex;
  gap: 32px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.85rem;
  opacity: 0.8;
}

.features-section {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 30px 20px;
  background: rgba(0, 0, 0, 0.1);
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: white;
  font-weight: 500;
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .features-section {
    flex-direction: column;
    gap: 20px;
  }

  .stats-row {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
