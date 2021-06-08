import { computed } from 'vue'
import { useStore } from 'vuex'

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
     * Show status.
     */
    const show = computed(() => store.state.modals.addNewBoard)

    /**
     * Close action.
     */
    const close = () => {
      store.dispatch('modals/close', 'addNewBoard')
    }

    return {
      styles,

      show,

      close,
    }

  }
}
