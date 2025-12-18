const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'quizzes',
        name: 'quiz-select',
        component: () => import('pages/QuizSelectPage.vue'),
      },
    ],
  },
  {
    path: '/play/:quizId',
    component: () => import('layouts/QuizLayout.vue'),
    children: [
      {
        path: '',
        name: 'quiz-play',
        component: () => import('pages/QuizPlayPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
