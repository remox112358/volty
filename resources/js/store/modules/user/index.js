import { __ax_update_token } from '../../../utils/axios'
import { __ls_has, __ls_remove } from '../../../utils/localstorage'

export default {
  namespaced: true,

  state: () => ({
    authorized: false,
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
    },
  },
}
