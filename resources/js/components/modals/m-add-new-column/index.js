import { useStore } from 'vuex'
import { ref, computed } from 'vue'

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
     * Data.
     */
    const name = ref(null)

    /**
     * Show status.
     */
    const show = computed(() => store.state.modals.addNewColumn.show)

    /**
     * Data.
     */
    const data = computed(() => store.state.modals.addNewColumn.data)

    /**
     * Close action.
     */
    const close = () => {
      name.value = ''

      store.dispatch('modals/close', 'addNewColumn')
    }

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      store
        .dispatch('columns/add', {
          name: name.value,
          board_id: data.value.board_id,
        })
        .then(close)
    }

    return {
      styles,

      show,
      name,

      close,
      onSubmit,
    }

  }
}
