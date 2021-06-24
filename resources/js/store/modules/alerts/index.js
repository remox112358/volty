import { generateRandomString } from '../../../utils/functions'

export default {
  namespaced: true,

  state: () => ({
    list: [
      // ...
    ],
  }),

  getters: {
    // ...
  },

  mutations: {

    /**
     * Alert `add` mutation.
     * 
     * @param {Object} state 
     * @param {Object} payload
     */
    add: (state, payload) => {
      const { text, type, duration } = payload

      state.list = [...state.list, {
        id: generateRandomString(),
        text,
        type,
        duration,
      }]
    },

    /**
     * Alert `remove` mutation.
     * 
     * @param {Object} state 
     * @param {Number} id 
     */
    remove: (state, id) => {
      state.list = state.list.filter(item => item.id !== id)
    },

    /**
     * Alert `shift` mutation.
     * 
     * @param {Object} state 
     */
    shift: state => {
      state.list.shift()
    },

  },

  actions: {

    /**
     * Alert `add` action.
     * 
     * @param {Object} context 
     * @param {Object} data 
     */
    add: (context, data) => {
      if (context.state.list.length >= 4)
        context.commit('shift')

      context.commit('add', data)
    },

    /**
     * Alert `remove` action.
     * 
     * @param {Object} context 
     * @param {Number} id 
     */
    remove: (context, id) => {
      context.commit('remove', id)
    },

  },
}
