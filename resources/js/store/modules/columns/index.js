import axios from 'axios'

import config from '../../../config.json'

import AlertService from '../../../services/AlertService'

export default {
  namespaced: true,

  state: () => ({
    columns: [
      // ...
    ],
  }),

  getters: {

    /**
     * Returns array of columns by boardId.
     *
     * @param {Object} state
     * @returns {Array}
     */
    columnsByBoardId: (state) => (id) => {
      let columns = [...state.columns]

      columns = columns.filter(column => column.board_id == id)
      columns.sort((a, b) => a.index > b.index ? 1 : -1)

      return columns
    },

  },

  mutations: {

    /**
     * Columns `set` mutation.
     *
     * @param {Object} state
     * @param {Array} payload
     */
    set: (state, payload) => {
      state.columns = payload
    },

    /**
     * Columns `refresh` mutation.
     *
     * @param {Object} state
     * @param {Object} payload
     */
    refresh: (state, payload) => {
      const { value, board_id } = payload

      state.columns = state.columns.filter(column => column.board_id != board_id)
      state.columns = [...state.columns, ...value]
    },

    /**
     * Columns `add` mutation.
     *
     * @param {Object} state
     * @param {Object} payload
     */
    add: (state, payload) => {
      state.columns = [...state.columns, payload]
    },

    /**
     * Columns `remove` mutation.
     *
     * @param {Object} state
     * @param {Number} payload
     */
    remove: (state, payload) => {
      state.columns = state.columns.filter(column => column.id != payload)
    },

    /**
     * Column `update` mutation.
     *
     * FIXME: Make full assignment.
     *
     * @param {Object} state
     * @param {Object} payload
     */
    update: (state, payload) => {
      console.log(state.columns, payload.id)
      state.columns.find(column => column.id == payload.id).name = payload.name
    },

  },

  actions: {

    /**
     * Columns `refresh` action.
     *
     * FIXME: Make chain of requests.
     *
     * @param {Object} context
     * @param {Object} params
     */
    refresh: (context, params) => {
      return new Promise((resolve, reject) => {
        const { value, board_id } = params

        value.forEach((column, index) => {
          column.index = index + 1

          axios
            .put(`${config.api.routes.columns.update}/${column.id}`, {
              index: column.index
            })
            .catch(error => {
              reject()
            })
        })

        context.commit('refresh', { value, board_id })

        resolve()
      })
    },

    /**
     * Columns `fetch` action.
     *
     * @param {Object} context
     */
    fetch: (context) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .get(config.api.routes.columns.fetch)
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
     * Column `add` action.
     *
     * @param {Object} context
     * @param {Object} params
     */
    add: (context, params) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .post(config.api.routes.columns.add, params)
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
     * Column `remove` action.
     *
     * @param {Object} context
     * @param {Number} columnId
     */
    remove: (context, columnId) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .delete(`${config.api.routes.columns.remove}/${columnId}`)
          .then(response => {
            context.commit('remove', columnId)

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
     * Column `update` action.
     *
     * TODO: Make commit to cards clear mutation.
     *
     * @param {Object} context
     * @param {Object} params
     */
    update: (context, params) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .put(`${config.api.routes.columns.update}/${params.id}`, params)
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
     * Column `clear` action.
     *
     * @param {Object} context
     * @param {Number} columnId
     * @returns {Promise}
     */
    clear: (context, columnId) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .post(`${config.api.routes.columns.clear}/${columnId}/clear`)
          .then(response => {
            context.commit('cards/clear', columnId, { root: true })

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
