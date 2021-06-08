import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import template from './template'
import styles from './style.module.scss'

import PHeader from '../../partials/header'
import PSidebar from '../../partials/sidebar'

export default {
  extends: template,
  components: {
    PHeader,
    PSidebar,
  },
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    const modalClose = () => store.dispatch('modals/close', 'addNewBoard')

    return {
      styles,

      sidebarIsOpen: computed(() => store.state.sidebar.show),
      modalShow: computed(() => store.state.modals.addNewBoard),

      modalClose,
    }

  }
}
