import axios from 'axios'

import AlertService from '../../../services/AlertService'

import config from '../../../config.json'

export default {
  namespaced: true,

  state: () => ({
    cards: [
      // ...
    ],
  }),

  getters: {

    /**
     * Returns the cards by columnId.
     * 
     * @param {Object} state
     * @param {Number} id 
     * @returns {Array}
     */
    cardsByColumnId: (state) => (id) => {
      let cards = [...state.cards]

      cards = cards.filter(card => card.column_id === id)
      cards.sort((a, b) => a.index > b.index ? 1 : -1)

      return cards
    },

  },

  mutations: {

    /**
     * Cards `set` mutation.
     * 
     * @param {Object} state 
     * @param {Array} payload 
     */
    set: (state, payload) => {
      state.cards = payload
    },

    /**
     * Cards `refresh` mutation.
     * 
     * @param {Object} state 
     * @param {Object} payload 
     */
    refresh: (state, payload) => {
      const { value, column_id } = payload

      state.cards = state.cards.filter(card => card.column_id != column_id)
      state.cards = [...state.cards, ...value]
    },

    /**
     * Card `add` mutation.
     * 
     * @param {Object} state 
     * @param {Object} payload 
     */
    add: (state, payload) => {
      state.cards = [...state.cards, payload]
    },

    /**
     * Card `update` mutation.
     * 
     * FIXME: Make full assignment.
     * 
     * @param {Object} state 
     * @param {Object} payload 
     */
    update: (state, payload) => {
      state.cards.find(card => card.id == payload.id).text = payload.text
    },

    /**
     * Card `remove` mutation.
     * 
     * @param {Object} state 
     * @param {Number} payload 
     */
    remove: (state, payload) => {
      state.cards = state.cards.filter(card => card.id != payload)
    },

  },

  actions: {

    /**
     * Cards `fetch` action.
     * 
     * @param {Object} context 
     * @returns {Promise}
     */
    fetch: (context) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .get(config.api.routes.cards.fetch)
          .then(response => {
            context.commit('set', response.data.data)

            resolve()
          })
          .catch(error => {
            reject()
          })
          .finally(() => {
            context.commit('setLoading', false, { root: true })
          })
      })
    },

    /**
     * Cards `refresh` action.
     * 
     * FIXME: Make chain of requests.
     * 
     * @param {Object} context 
     * @param {Object} params 
     * @returns {Promise}
     */
    refresh: (context, params) => {
      return new Promise((resolve, reject) => {
        const { value, column_id } = params
  
        value.forEach((card, index) => {
          card.index = index + 1
          card.column_id = column_id
  
          axios
            .put(`${config.api.routes.cards.update}/${card.id}`, {
              index: card.index,
              column_id: column_id,
            })
            .catch(error => {
              reject()
            })
        })
  
        context.commit('refresh', { value, column_id })

        resolve()
      })
    },

    /**
     * Card `add` action.
     * 
     * @param {Object} context
     * @param {Object} params
     * @returns {Promise}
     */
    add: (context, params) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .post(config.api.routes.cards.add, params)
          .then(response => {
            context.commit('add', response.data.data)

            AlertService.success(response.data.message)
            
            resolve()
          })
          .catch(error => {
            AlertService.danger(error.response.message)
          
            reject()
          })
          .finally(() => {
            context.commit('setLoading', false, { root: true })
          })
      })
    },

    /**
     * Card `update` action.
     * 
     * @param {Object} context 
     * @param {Object} params
     * @returns {Promise} 
     */
    update: (context, params) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .put(`${config.api.routes.cards.update}/${params.id}`, params)
          .then(response => {
            context.commit('update', params)

            AlertService.success(response.data.message)

            resolve()
          })
          .catch(error => {
            AlertService.danger(error.response.message)
          
            reject()
          })
          .finally(() => {
            context.commit('setLoading', false, { root: true })
          })
      })
    },

    /**
     * Card `remove` action.
     * 
     * @param {Object} context 
     * @param {Number} cardId 
     * @returns {Promise}
     */
    remove: (context, cardId) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .delete(`${config.api.routes.cards.remove}/${cardId}`)
          .then(response => {
            context.commit('remove', cardId)

            AlertService.success(response.data.message)
          
            resolve()
          })
          .catch(error => {
            AlertService.danger(error.response.data.message)
          
            reject()
          })
          .finally(() => {
            context.commit('setLoading', false, { root: true })
          })
      })
    }

  },
}
