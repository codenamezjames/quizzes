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
  fortnite: {
    title: 'Fortnite',
    description: 'Where we droppin\'? Test your Fortnite knowledge!',
    icon: 'sports_esports',
    color: '#5C6BC0',
  },
  'spy-x-family': {
    title: 'Spy x Family',
    description: 'Secrets, lies, and family bonds!',
    icon: 'family_restroom',
    color: '#E91E63',
  },
  minecraft: {
    title: 'Minecraft',
    description: 'Explore the blocky world of Minecraft!',
    icon: 'grid_view',
    color: '#8BC34A',
  },
  mario: {
    title: 'Super Mario',
    description: 'It\'s-a me, Mario! Test your knowledge!',
    icon: 'star',
    color: '#E53935',
  },
  'harry-potter': {
    title: 'Harry Potter',
    description: 'Welcome to the Wizarding World!',
    icon: 'auto_fix_high',
    color: '#5D4037',
  },
  disney: {
    title: 'Disney',
    description: 'The magic of Disney awaits!',
    icon: 'movie',
    color: '#1E88E5',
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

  // Fortnite quizzes
  {
    id: 'fortnite-basics',
    title: 'Fortnite Basics',
    description: 'Test your fundamental knowledge of Fortnite Battle Royale!',
    icon: 'sports_esports',
    category: 'fortnite',
    coverColor: '#5C6BC0',
    loader: () => import('./fortnite-basics.json'),
  },
  {
    id: 'fortnite-weapons',
    title: 'Weapons & Items',
    description: 'How well do you know Fortnite\'s arsenal of weapons and items?',
    icon: 'gps_fixed',
    category: 'fortnite',
    coverColor: '#FF7043',
    loader: () => import('./fortnite-weapons.json'),
  },
  {
    id: 'fortnite-seasons',
    title: 'Seasons & Events',
    description: 'Test your knowledge of Fortnite\'s epic seasons and live events!',
    icon: 'event',
    category: 'fortnite',
    coverColor: '#AB47BC',
    loader: () => import('./fortnite-seasons.json'),
  },
  {
    id: 'fortnite-map',
    title: 'Map & Locations',
    description: 'How well do you know the Fortnite island and its iconic locations?',
    icon: 'map',
    category: 'fortnite',
    coverColor: '#26A69A',
    loader: () => import('./fortnite-map.json'),
  },
  {
    id: 'fortnite-skins',
    title: 'Skins & Cosmetics',
    description: 'How well do you know Fortnite\'s iconic skins and cosmetics?',
    icon: 'face',
    category: 'fortnite',
    coverColor: '#EC407A',
    loader: () => import('./fortnite-skins.json'),
  },

  // Spy x Family quizzes
  {
    id: 'spy-x-family-basics',
    title: 'Spy x Family Basics',
    description: 'Test your knowledge of the Forger family and their secret lives!',
    icon: 'family_restroom',
    category: 'spy-x-family',
    coverColor: '#E91E63',
    loader: () => import('./spy-x-family-basics.json'),
  },
  {
    id: 'spy-x-family-missions',
    title: 'Missions & Characters',
    description: 'Deep dive into the world of spies, assassins, and telepaths!',
    icon: 'visibility',
    category: 'spy-x-family',
    coverColor: '#9C27B0',
    loader: () => import('./spy-x-family-missions.json'),
  },

  // Minecraft quizzes
  {
    id: 'minecraft-basics',
    title: 'Minecraft Basics',
    description: 'Test your knowledge of the blocky world of Minecraft!',
    icon: 'grid_view',
    category: 'minecraft',
    coverColor: '#8BC34A',
    loader: () => import('./minecraft-basics.json'),
  },
  {
    id: 'minecraft-mobs',
    title: 'Mobs & Creatures',
    description: 'How well do you know Minecraft\'s creatures and monsters?',
    icon: 'bug_report',
    category: 'minecraft',
    coverColor: '#4CAF50',
    loader: () => import('./minecraft-mobs.json'),
  },
  {
    id: 'minecraft-dimensions',
    title: 'Biomes & Dimensions',
    description: 'Explore the diverse worlds and dimensions of Minecraft!',
    icon: 'public',
    category: 'minecraft',
    coverColor: '#009688',
    loader: () => import('./minecraft-dimensions.json'),
  },

  // Mario quizzes
  {
    id: 'mario-basics',
    title: 'Mario Basics',
    description: 'Test your knowledge of the Mushroom Kingdom\'s hero!',
    icon: 'star',
    category: 'mario',
    coverColor: '#E53935',
    loader: () => import('./mario-basics.json'),
  },
  {
    id: 'mario-powerups',
    title: 'Power-Ups & Items',
    description: 'How well do you know Mario\'s amazing power-ups?',
    icon: 'local_fire_department',
    category: 'mario',
    coverColor: '#FF9800',
    loader: () => import('./mario-powerups.json'),
  },
  {
    id: 'mario-kart',
    title: 'Mario Kart',
    description: 'Rev your engines and test your Mario Kart knowledge!',
    icon: 'directions_car',
    category: 'mario',
    coverColor: '#2196F3',
    loader: () => import('./mario-kart.json'),
  },
  {
    id: 'mario-enemies',
    title: 'Enemies & Bosses',
    description: 'How well do you know the baddies of the Mushroom Kingdom?',
    icon: 'pest_control',
    category: 'mario',
    coverColor: '#795548',
    loader: () => import('./mario-enemies.json'),
  },
  {
    id: 'mario-games',
    title: 'Mario Games History',
    description: 'Test your knowledge of Mario\'s gaming legacy!',
    icon: 'videogame_asset',
    category: 'mario',
    coverColor: '#673AB7',
    loader: () => import('./mario-games.json'),
  },

  // Harry Potter quizzes
  {
    id: 'harry-potter-basics',
    title: 'Harry Potter Basics',
    description: 'Test your knowledge of the Boy Who Lived!',
    icon: 'auto_fix_high',
    category: 'harry-potter',
    coverColor: '#5D4037',
    loader: () => import('./harry-potter-basics.json'),
  },
  {
    id: 'harry-potter-spells',
    title: 'Spells & Magic',
    description: 'How well do you know wizarding world magic?',
    icon: 'bolt',
    category: 'harry-potter',
    coverColor: '#7B1FA2',
    loader: () => import('./harry-potter-spells.json'),
  },
  {
    id: 'harry-potter-houses',
    title: 'Hogwarts Houses',
    description: 'Test your knowledge of the four Hogwarts houses!',
    icon: 'school',
    category: 'harry-potter',
    coverColor: '#1565C0',
    loader: () => import('./harry-potter-houses.json'),
  },
  {
    id: 'harry-potter-creatures',
    title: 'Magical Creatures',
    description: 'How well do you know the beasts of the wizarding world?',
    icon: 'pets',
    category: 'harry-potter',
    coverColor: '#388E3C',
    loader: () => import('./harry-potter-creatures.json'),
  },
  {
    id: 'harry-potter-characters',
    title: 'Characters & Stories',
    description: 'Deep dive into the characters and plot of Harry Potter!',
    icon: 'people',
    category: 'harry-potter',
    coverColor: '#C62828',
    loader: () => import('./harry-potter-characters.json'),
  },

  // Disney quizzes
  {
    id: 'disney-classics',
    title: 'Disney Classics',
    description: 'Test your knowledge of classic Disney animated films!',
    icon: 'movie',
    category: 'disney',
    coverColor: '#1E88E5',
    loader: () => import('./disney-classics.json'),
  },
  {
    id: 'disney-princesses',
    title: 'Disney Princesses',
    description: 'How well do you know the Disney Princess lineup?',
    icon: 'auto_awesome',
    category: 'disney',
    coverColor: '#E91E63',
    loader: () => import('./disney-princesses.json'),
  },
  {
    id: 'disney-villains',
    title: 'Disney Villains',
    description: 'How well do you know Disney\'s most wicked characters?',
    icon: 'whatshot',
    category: 'disney',
    coverColor: '#6A1B9A',
    loader: () => import('./disney-villains.json'),
  },
  {
    id: 'disney-pixar',
    title: 'Pixar Films',
    description: 'Test your knowledge of Disney Pixar\'s amazing movies!',
    icon: 'animation',
    category: 'disney',
    coverColor: '#00ACC1',
    loader: () => import('./disney-pixar.json'),
  },
  {
    id: 'disney-frozen',
    title: 'Frozen & Modern Disney',
    description: 'Test your knowledge of Frozen and modern Disney hits!',
    icon: 'ac_unit',
    category: 'disney',
    coverColor: '#4FC3F7',
    loader: () => import('./disney-frozen.json'),
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
