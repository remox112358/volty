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
     * Board data.
     */
    const data = computed(() => store.state.boards.boards[0])

    /**
     * Board columns.
     */
    const columns = computed(() => store.getters['boards/columnsByBoardId'](data.value.id))

    return {
      styles,

      data,
      columns,
    }

  }
}
