import axios from 'axios'

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
    setAuthorize: (state, status) => {
      state.authorized = status
    },
    setData: (state, data) => {
      state.data = data
    }
  },

  actions: {
    login: (context, data) => {
      context.commit('setAuthorize', true)
      context.commit('setData', data)

      __ax_update_token()
    },
    logout: context => {
      context.commit('setAuthorize', false)
      context.commit('setData', {})

      if (__ls_has('access_token'))
        __ls_remove('access_token')

      __ax_remove_token()
    },
    doFetch: async (context) => {
      await axios
              .get('/api/user/fetch')
              .then(response => {
                context.commit('setData', response.data.data)
              })
              .catch(error => {
                console.log(error.response.message)
              })
    },
  },
}
