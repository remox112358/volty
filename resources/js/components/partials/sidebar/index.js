import { computed } from 'vue'
import { useStore } from 'vuex'

import router from '../../../router'

import template from './template'
import styles from './style.module.scss'

import groups from './groups.json'

export default {
  extends: template,
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

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
    const onLogout = () => {
      store.dispatch('user/logout')
      router.push({ name: 'login' })
    }

    return {
      styles,

      groups,

      onLogout,
      redirectHandler,
      openAddNewBoardModal,

      showStatus: computed(() => store.state.sidebar.show),
    }

  }
}
