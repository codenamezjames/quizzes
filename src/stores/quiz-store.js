import { defineStore, acceptHMRUpdate } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    // Current quiz session
    currentQuiz: null,
    currentQuestionIndex: 0,
    answers: [],
    score: 0,
    isComplete: false,

    // UI state
    showingFeedback: false,
    feedbackData: null,

    // Timing
    questionStartTime: null,
  }),

  getters: {
    currentQuestion: (state) =>
      state.currentQuiz?.questions[state.currentQuestionIndex] ?? null,

    totalQuestions: (state) => state.currentQuiz?.questions.length ?? 0,

    progressPercent: (state) =>
      state.totalQuestions > 0
        ? (state.currentQuestionIndex / state.totalQuestions) * 100
        : 0,

    correctAnswers: (state) => state.answers.filter((a) => a.isCorrect).length,

    maxPossibleScore: (state) =>
      state.currentQuiz?.questions.reduce((sum, q) => sum + q.points, 0) ?? 0,
  },

  actions: {
    startQuiz(quiz) {
      this.currentQuiz = quiz
      this.currentQuestionIndex = 0
      this.answers = []
      this.score = 0
      this.isComplete = false
      this.showingFeedback = false
      this.feedbackData = null
      this.questionStartTime = Date.now()
    },

    submitAnswer(answer) {
      const question = this.currentQuestion
      const isCorrect = this.checkAnswer(question, answer)
      const timeSpent = Date.now() - this.questionStartTime

      this.answers.push({
        questionId: question.id,
        selectedAnswer: answer,
        isCorrect,
        timeSpent,
      })

      if (isCorrect) {
        this.score += question.points
      }

      this.showingFeedback = true
      this.feedbackData = { isCorrect, explanation: question.explanation }
    },

    checkAnswer(question, answer) {
      if (question.type === 'true-false') {
        return answer === question.correctAnswer
      } else {
        const selectedOption = question.options.find((o) => o.id === answer)
        return selectedOption?.isCorrect ?? false
      }
    },

    nextQuestion() {
      this.showingFeedback = false
      this.feedbackData = null

      if (this.currentQuestionIndex < this.totalQuestions - 1) {
        this.currentQuestionIndex++
        this.questionStartTime = Date.now()
      } else {
        this.isComplete = true
      }
    },

    resetQuiz() {
      this.$reset()
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuizStore, import.meta.hot))
}
