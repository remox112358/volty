import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: require('../components/layouts/main').default,
    children: [
      {
        path: 'boards',
        name: 'boards',
        component: require('../components/views/boards').default,
      },
      {
        path: 'boards/:board_id',
        name: 'board',
        component: require('../components/views/boards/board').default,
      },
      {
        path: 'settings',
        name: 'settings',
        component: require('../components/views/settings').default,
      },
    ]
  },
  {
    path: '/auth',
    component: require('../components/layouts/auth').default,
    meta: {
      public: true,
    },
    children: [
      {
        path: 'login',
        name: 'login',
        component: require('../components/views/login').default,
        meta: {
          public: true,
        },
      },
      {
        path: 'signup',
        name: 'signup',
        component: require('../components/views/signup').default,
        meta: {
          public: true,
        },
      },
    ],
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/'),
})

/**
 * Middleware for unauthorized users.
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => !route.meta.public)) {
    if (!store.state.user.authorized) {
      store.dispatch('user/logout')

      return next({ name: 'login' })
    }
  } else {
    if (store.state.user.authorized) {
      return next({ name: 'home' })
    }
  }

  next()
})

export default router
