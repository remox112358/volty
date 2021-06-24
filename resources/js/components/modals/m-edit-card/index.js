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
    const show = computed(() => store.state.modals.editCard.show)

    /**
     * Data.
     */
    const data = computed(() => store.state.modals.editCard.data)
    const text = ref(null)

    /**
     * Close action.
     */
    const close = () => {
      text.value = ''

      store.dispatch('modals/close', 'editCard')
    }

    /**
     * Show status watcher.
     */
    watch(show, value => {
      if (value)
        text.value = data.value.oldText
    })

    /**
     * Form submit handler.
     */
    const onSubmit = async () => {
      store
        .dispatch('cards/update', {
          id: data.value.id,
          text: text.value,
          column_id: data.value.columnId,
        })
        .then(close)
    }

    return {
      styles,

      show,
      text,
      data,

      close,
      onSubmit,
    }

  }
}
