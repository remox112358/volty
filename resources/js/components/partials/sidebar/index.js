import { computed } from 'vue'
import { useStore } from 'vuex'

import axios from 'axios'

import AlertService from '../../../services/AlertService'

import router from '../../../router'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Data.
     */
    const avatar   = computed(() => 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')
    const boards   = computed(() => store.getters['boards/boards'](3))
    const username = computed(() => store.state.user.data.username)

    /**
     * Handler for redirect action.
     */
    const redirectHandler = () => {
      const isMobile = window.innerWidth <= 576

      if (isMobile)
        store.dispatch('sidebar/hide')
    }

    /**
     * Modal open action.
     */
    const openAddNewBoardModal = () => store.dispatch('modals/open', 'addNewBoard')

    /**
     * On logout action.
     */
    const onLogout = async () => {
      store.commit('setLoading', true)

      await axios
        .get('/api/logout')
        .then(response => {
          AlertService.success(response.data.message)

          store.dispatch('user/logout')
          router.push({ name: 'login' })
        })
        .catch(error => {
          AlertService.danger(error.response.data.message)
        })
        .finally(() => {
          store.commit('setLoading', false)
        })
    }

    return {
      styles,

      avatar,
      boards,
      username,

      onLogout,
      redirectHandler,
      openAddNewBoardModal,

      showStatus: computed(() => store.state.sidebar.show),
    }

  }
}
