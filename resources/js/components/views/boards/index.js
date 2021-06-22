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
    const allBoards            = computed(() => store.getters['boards/boards']())
    const recentlyViewedBoards = computed(() => store.getters['boards/recentlyViewedBoards']())

    return {
      styles,

      allBoards,
      recentlyViewedBoards,
    }

  }
}
