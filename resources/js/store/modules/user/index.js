import axios from 'axios'

import config from '../../../config/api.json'

import { __ls_has, __ls_remove } from '../../../utils/localstorage'
import { __ax_update_token, __ax_remove_token } from '../../../utils/axios'

export default {
  namespaced: true,

  state: () => ({
    authorized: __ls_has('access_token'),
    data: {
      // ...
    },
  }),

  getters: {
    // ...
  },

  mutations: {

    /**
     * User `setAuthorize` mutation.
     *
     * @param {Object} state
     * @param {Boolean} status
     */
    setAuthorize: (state, status) => {
      state.authorized = status
    },

    /**
     * User `setData` mutation.
     *
     * @param {Object} state
     * @param {Object} data
     */
    setData: (state, data) => {
      state.data = data
    },

  },

  actions: {

    /**
     * User `login` action.
     *
     * @param {Object} context
     * @param {Object} data
     */
    login: (context, data) => {
      return new Promise((resolve, reject) => {
        try {
          context.commit('setAuthorize', true)
          context.commit('setData', data)

          __ax_update_token()

          resolve()
        } catch(error) {
          reject(error)
        }
      })
    },

    /**
     * User `logout` action.
     *
     * @param {Object} context
     */
    logout: context => {
      return new Promise((resolve, reject) => {
        try {
          context.commit('setAuthorize', false)
          context.commit('setData', {})

          if (__ls_has('access_token'))
            __ls_remove('access_token')

          __ax_remove_token()

          resolve()
        } catch(error) {
          reject(error)
        }
      })
    },

    /**
     * User `fetch` action.
     *
     * @param {Object} context
     */
    fetch: (context) => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .get(config.routes.user.fetch)
          .then(response => {
            context.commit('setData', response.data.data)

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

  },
}
