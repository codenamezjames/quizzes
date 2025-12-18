// Quiz manifest - add new quizzes here
// Each entry needs: id, title, description, icon, category, coverColor, and loader

export const quizManifest = [
  {
    id: 'animals',
    title: 'Amazing Animals',
    description: 'Test your knowledge about the animal kingdom!',
    icon: 'pets',
    category: 'Science',
    coverColor: '#FF69B4',
    loader: () => import('./animals.json'),
  },
  {
    id: 'space',
    title: 'Space Explorer',
    description: 'Journey through the stars and planets!',
    icon: 'rocket_launch',
    category: 'Science',
    coverColor: '#9B59B6',
    loader: () => import('./space.json'),
  },
]

export async function loadQuiz(id) {
  const entry = quizManifest.find((q) => q.id === id)
  if (!entry) throw new Error(`Quiz not found: ${id}`)
  const module = await entry.loader()
  return module.default
}

export function getQuizList() {
  return quizManifest.map((quiz) => {
    const { loader, ...metadata } = quiz
    void loader // explicitly ignore
    return metadata
  })
}
