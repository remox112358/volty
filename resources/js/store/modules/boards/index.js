import config from '../../../config.json'

import axios from 'axios'

import router from '../../../router'

import AlertService from '../../../services/AlertService'

export default {
  namespaced: true,

  state: () => ({
    boards: [
      // ...
    ],
  }),

  getters: {

    /**
     * Returns the boards by count.
     * 
     * @param {Object} state 
     * @returns {Array}
     */
    boards: (state) => (count = state.boards.length) => {
      return state.boards.slice(0, count)
    },

    /**
     * Returns the board by id.
     * 
     * @param {Object} state 
     * @param {Number} id
     * @returns {Object}
     */
    boardById: (state) => (id) => {
      return state.boards.find(board => board.id == id)
    },

  },

  mutations: {

    /**
     * Boards `set` mutation.
     * 
     * @param {Object} state 
     * @param {Array} payload 
     */
    set: (state, payload) => {
      state.boards = payload
    },

    /**
     * Board `add` mutation.
     * 
     * @param {Object} state 
     * @param {Object} payload 
     */
    add: (state, payload) => {
      state.boards = [...state.boards, payload]
    },

    /**
     * Board `remove` mutation.
     * 
     * @param {Object} state 
     * @param {Number} payload 
     */
    remove: (state, payload) => {
      state.boards = state.boards.filter(board => board.id != payload)
    },

    /**
     * Board `update` mutation.
     * 
     * FIXME: Make full assignment
     * 
     * @param {Object} state 
     * @param {Object} payload 
     */
    update: (state, payload) => {
      state.boards.find(board => board.id == payload.id).name = payload.name
    },

  },

  actions: {

    /**
     * Boards `fetch` action.
     * 
     * @param {Object} context 
     * @returns {Promise}
     */
    fetch: (context) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .get(config.api.routes.boards.fetch)
          .then(response => {
            context.commit('set', response.data.data)

            resolve()
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            context.commit('setLoading', false, { root: true })
          })
      })
    },

    /**
     * Board `add` action.
     * 
     * @param {Object} context 
     * @param {Object} board 
     * @returns {Promise}
     */
    add: (context, board) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .post(config.api.routes.boards.add, board)
          .then(response => {
            context.commit('add', response.data.data)

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
    },

    /**
     * Board `remove` action.
     * 
     * @param {Object} context 
     * @param {Number} boardId 
     * @returns {Promise}
     */
    remove: (context, boardId) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .delete(`${config.api.routes.boards.remove}/${boardId}`)
          .then(response => {
            router.push({ name: 'boards' })

            context.commit('remove', boardId)

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
     * Board `update` action.
     * 
     * @param {Object} context 
     * @param {Object} board 
     * @returns {Promise}
     */
    update: (context, board) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .put(`${config.api.routes.boards.update}/${board.id}`, board)
          .then(response => {
            context.commit('update', board)

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

  },
}
