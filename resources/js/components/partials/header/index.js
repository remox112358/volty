import { useStore } from 'vuex'

import template from './template'
import styles from './style.module.scss'

import PLogo from '../logo'

export default {
  extends: template,
  components: {
    PLogo,
  },
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Sidebar show action.
     */
    const showSidebar = () => {
      store.dispatch('sidebar/toggle')
    }

    return {
      styles,

      showSidebar,
    }

  }
}
