import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserProgressStore = defineStore('userProgress', {
  state: () => ({
    completedQuizzes: {},
    totalScore: 0,
    streak: 0,
  }),

  getters: {
    getQuizProgress: (state) => (quizId) => state.completedQuizzes[quizId] ?? null,
    hasCompletedQuiz: (state) => (quizId) => !!state.completedQuizzes[quizId],
  },

  actions: {
    recordQuizCompletion(quizId, score, maxScore) {
      const existing = this.completedQuizzes[quizId]
      this.completedQuizzes[quizId] = {
        bestScore: Math.max(existing?.bestScore ?? 0, score),
        maxScore,
        attempts: (existing?.attempts ?? 0) + 1,
        lastPlayed: new Date().toISOString(),
      }
      this.totalScore += score
      this.saveToLocalStorage()
    },

    updateStreak(isCorrect) {
      this.streak = isCorrect ? this.streak + 1 : 0
    },

    saveToLocalStorage() {
      localStorage.setItem(
        'quizProgress',
        JSON.stringify({
          completedQuizzes: this.completedQuizzes,
          totalScore: this.totalScore,
        })
      )
    },

    loadFromLocalStorage() {
      const saved = localStorage.getItem('quizProgress')
      if (saved) {
        try {
          const data = JSON.parse(saved)
          this.completedQuizzes = data.completedQuizzes ?? {}
          this.totalScore = data.totalScore ?? 0
        } catch {
          // Invalid data, ignore
        }
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserProgressStore, import.meta.hot))
}
