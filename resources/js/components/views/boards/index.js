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
     * Boards list.
     */
    const boards = computed(() => store.state.boards.boards)

    return {
      styles,

    }

  }
}
