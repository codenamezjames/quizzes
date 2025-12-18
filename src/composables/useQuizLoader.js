import { ref } from 'vue'
import { quizManifest, loadQuiz } from 'src/data/quizzes'

export function useQuizLoader() {
  const quizzes = ref(
    quizManifest.map((quiz) => {
      const { loader, ...meta } = quiz
      void loader // explicitly ignore
      return meta
    })
  )
  const loading = ref(false)
  const error = ref(null)

  async function fetchQuiz(id) {
    loading.value = true
    error.value = null
    try {
      const quiz = await loadQuiz(id)
      return quiz
    } catch (e) {
      error.value = e.message
      return null
    } finally {
      loading.value = false
    }
  }

  return {
    quizzes,
    loading,
    error,
    fetchQuiz,
  }
}
