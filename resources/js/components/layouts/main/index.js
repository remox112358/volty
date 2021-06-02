import { computed } from 'vue'
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

    return {
      styles,

      sidebarIsOpen: computed(() => store.state.sidebar.show)
    }

  }
}
