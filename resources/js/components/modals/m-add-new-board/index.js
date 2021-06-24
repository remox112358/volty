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
    const name  = ref(null)
    const color = ref('#ff0000')

    /**
     * Show status.
     */
    const show = computed(() => store.state.modals.addNewBoard.show)

    /**
     * Close action.
     */
    const close = () => {
      clear()

      store.dispatch('modals/close', 'addNewBoard')
    }

    /**
     * Clear action.
     */
    const clear = () => {
      name.value = ''
    }

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      store
        .dispatch('boards/add', {
          name: name.value,
          color: color.value,
        })
        .then(close)
    }

    return {
      styles,

      show,
      name,
      color,

      close,
      onSubmit,
    }

  }
}
