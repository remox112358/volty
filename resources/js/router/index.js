import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: require('../components/layouts/main').default,
    children: [
      {
        path: '',
        name: 'board',
        component: require('../components/views/board').default,
      },
      {
        path: '/registration',
        name: 'registration',
        component: require('../components/views/registration').default,
      },
    ]
  },
  {
    path: '/login',
    component: require('../components/layouts/empty').default,
    children: [
      {
        path: '/',
        name: 'login',
        component: require('../components/views/login').default,
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/'),
})

export default router
