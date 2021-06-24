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
    const boards = computed(() => store.getters['boards/boards']())

    /**
     * Modal open action.
     */
    const openAddNewBoardModal = () => store.dispatch('modals/open', { modal: 'addNewBoard' })

    return {
      styles,

      boards,

      openAddNewBoardModal,
    }

  }
}
