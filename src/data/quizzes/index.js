// Quiz manifest - add new quizzes here
// Each entry needs: id, title, description, icon, category, coverColor, and loader

// Category metadata for display
export const categoryMeta = {
  'demon-slayer': {
    title: 'Demon Slayer',
    description: 'Test your knowledge of the Demon Slayer Corps!',
    icon: 'local_fire_department',
    color: '#E74C3C',
  },
  'kpop-demon-hunters': {
    title: 'K-Pop Demon Hunters',
    description: 'The secret world of idol demon hunters!',
    icon: 'music_note',
    color: '#8E44AD',
  },
  frieren: {
    title: 'Frieren',
    description: 'Journey with the long-lived elf mage!',
    icon: 'auto_fix_high',
    color: '#3498DB',
  },
  'my-hero-academia': {
    title: 'My Hero Academia',
    description: 'Go beyond! Plus Ultra!',
    icon: 'flash_on',
    color: '#2ECC71',
  },
  animals: {
    title: 'Amazing Animals',
    description: 'Explore the animal kingdom!',
    icon: 'pets',
    color: '#FF69B4',
  },
  space: {
    title: 'Space Explorer',
    description: 'Journey through the stars!',
    icon: 'rocket_launch',
    color: '#9B59B6',
  },
}

export const quizManifest = [
  // Demon Slayer quizzes
  {
    id: 'demon-slayer',
    title: 'Demon Slayer Basics',
    description: 'Test your knowledge of Tanjiro and the Demon Slayer Corps!',
    icon: 'local_fire_department',
    category: 'demon-slayer',
    coverColor: '#E74C3C',
    loader: () => import('./demon-slayer.json'),
  },
  {
    id: 'demon-slayer-hashira',
    title: 'The Nine Hashira',
    description: 'Test your knowledge of the elite Demon Slayer pillars!',
    icon: 'military_tech',
    category: 'demon-slayer',
    coverColor: '#E67E22',
    loader: () => import('./demon-slayer-hashira.json'),
  },
  {
    id: 'demon-slayer-demons',
    title: 'Demons & Upper Moons',
    description: 'How well do you know the Twelve Kizuki and other demons?',
    icon: 'nights_stay',
    category: 'demon-slayer',
    coverColor: '#8E44AD',
    loader: () => import('./demon-slayer-demons.json'),
  },
  {
    id: 'demon-slayer-breathing',
    title: 'Breathing Techniques',
    description: 'Master the breathing styles and their forms!',
    icon: 'air',
    category: 'demon-slayer',
    coverColor: '#3498DB',
    loader: () => import('./demon-slayer-breathing.json'),
  },
  {
    id: 'demon-slayer-arcs',
    title: 'Story Arcs & Events',
    description: 'Test your memory of the epic Demon Slayer storyline!',
    icon: 'menu_book',
    category: 'demon-slayer',
    coverColor: '#1ABC9C',
    loader: () => import('./demon-slayer-arcs.json'),
  },
  {
    id: 'demon-slayer-characters',
    title: 'Character Deep Dive',
    description: 'How well do you know the backstories and details?',
    icon: 'people',
    category: 'demon-slayer',
    coverColor: '#E91E63',
    loader: () => import('./demon-slayer-characters.json'),
  },

  // K-Pop Demon Hunters quizzes
  {
    id: 'kpop-demon-hunters',
    title: 'KPDH Basics',
    description: 'Learn the fundamentals of the K-Pop Demon Hunter Organization!',
    icon: 'music_note',
    category: 'kpop-demon-hunters',
    coverColor: '#8E44AD',
    loader: () => import('./kpop-demon-hunters.json'),
  },
  {
    id: 'kpdh-dreamcatcher',
    title: 'Hunter Units & Roles',
    description: 'Learn about the elite hunter squads and their specialties!',
    icon: 'groups',
    category: 'kpop-demon-hunters',
    coverColor: '#6C3483',
    loader: () => import('./kpdh-dreamcatcher.json'),
  },
  {
    id: 'kpdh-dark-concepts',
    title: 'Demon Classes & Weaknesses',
    description: 'Know your enemy - learn about the demons hunters face!',
    icon: 'skull',
    category: 'kpop-demon-hunters',
    coverColor: '#2C3E50',
    loader: () => import('./kpdh-dark-concepts.json'),
  },
  {
    id: 'kpdh-supernatural-lore',
    title: 'KPDH History & Legends',
    description: 'The secret history of K-Pop demon hunting!',
    icon: 'auto_stories',
    category: 'kpop-demon-hunters',
    coverColor: '#16A085',
    loader: () => import('./kpdh-supernatural-lore.json'),
  },

  // Frieren quizzes
  {
    id: 'frieren',
    title: 'Frieren: Beyond Journey\'s End',
    description: 'How well do you know the journey of the long-lived elf mage?',
    icon: 'auto_fix_high',
    category: 'frieren',
    coverColor: '#3498DB',
    loader: () => import('./frieren.json'),
  },
  {
    id: 'frieren-magic',
    title: 'Magic & Spells',
    description: 'Explore the magical world of Frieren!',
    icon: 'bolt',
    category: 'frieren',
    coverColor: '#9B59B6',
    loader: () => import('./frieren-magic.json'),
  },

  // My Hero Academia quizzes
  {
    id: 'my-hero-academia',
    title: 'My Hero Academia',
    description: 'Go beyond! Plus Ultra! Test your hero knowledge!',
    icon: 'flash_on',
    category: 'my-hero-academia',
    coverColor: '#2ECC71',
    loader: () => import('./my-hero-academia.json'),
  },

  // Animals quizzes
  {
    id: 'animals',
    title: 'Amazing Animals',
    description: 'Test your knowledge about the animal kingdom!',
    icon: 'pets',
    category: 'animals',
    coverColor: '#FF69B4',
    loader: () => import('./animals.json'),
  },

  // Space quizzes
  {
    id: 'space',
    title: 'Space Explorer',
    description: 'Journey through the stars and planets!',
    icon: 'rocket_launch',
    category: 'space',
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

export function getQuizzesByCategory(categorySlug) {
  return getQuizList().filter((quiz) => quiz.category === categorySlug)
}

export function getCategories() {
  const categorySet = new Set(quizManifest.map((q) => q.category))
  return Array.from(categorySet).map((slug) => ({
    slug,
    ...categoryMeta[slug],
    quizCount: quizManifest.filter((q) => q.category === slug).length,
  }))
}
