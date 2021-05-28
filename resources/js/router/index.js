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
    ]
  },
  {
    path: '/auth',
    component: require('../components/layouts/auth').default,
    children: [
      {
        path: 'login',
        name: 'login',
        component: require('../components/views/login').default,
      },
      {
        path: 'signup',
        name: 'signup',
        component: require('../components/views/signup').default,
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/'),
})

export default router
