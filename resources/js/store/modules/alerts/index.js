import { generateRandomString } from '../../../utils/functions'

export default {
  namespaced: true,

  state: () => ({
    list: [
      {
        id: 'random1',
        text: 'Some message...',
        type: 'warning',
        duration: 3,
      },
      {
        id: 'random2',
        text: 'Some message...',
        type: 'warning',
        duration: 3,
      },
      {
        id: 'random3',
        text: 'Some message...',
        type: 'warning',
        duration: 3,
      }
    ],
  }),

  getters: {
    // ...
  },

  mutations: {
    add: (state, { text, type, duration }) => {
      state.list = [...state.list, {
        id: generateRandomString(),
        text,
        type,
        duration,
      }]
    },
    remove: (state, id) => {
      state.list = [...state.list].filter(item => item.id !== id)
    },
    shift: state => {
      state.list.shift()
    },
  },

  actions: {
    add: (context, data) => {
      if (context.state.list.length >= 4)
        context.commit('shift')

      context.commit('add', data)
    },
    remove: (context, id) => {
      context.commit('remove', id)
    },
  },
}
