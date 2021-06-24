import { useStore } from 'vuex'
import { ref, computed, watch } from 'vue'

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
    const show = computed(() => store.state.modals.editBoard.show)

    /**
     * Data.
     */
    const data = computed(() => store.state.modals.editBoard.data)
    const name = ref(null)

    /**
     * Close action.
     */
    const close = () => {
      name.value = ''

      store.dispatch('modals/close', 'editBoard')
    }

    /**
     * Show status watcher.
     */
    watch(show, value => {
      if (value)
        name.value = data.value.name
    })

    /**
     * Form submit handler.
     */
    const onSubmit = () => {
      store
        .dispatch('boards/update', {
          id: data.value.id,
          name: name.value,
        })
        .then(close)
    }

    return {
      styles,

      show,
      name,
      data,

      close,
      onSubmit,
    }

  }
}
