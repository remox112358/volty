import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'

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

    const openAddNewBoardModal = () => store.dispatch('modals/open', 'addNewBoard')

    return {
      styles,

      groups,

      redirectHandler,
      openAddNewBoardModal,

      showStatus: computed(() => store.state.sidebar.show),
    }

  }
}
