import { useStore } from 'vuex'
import { ref, computed, watch } from 'vue'

import axios from 'axios'

import AlertService from '../../../services/AlertService'

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
    const show = computed(() => store.state.modals.editColumn.show)

    /**
     * Data.
     */
    const data = computed(() => store.state.modals.editColumn.data)
    const name = ref(data.value.oldName)

    /**
     * Close action.
     */
    const close = () => {
      name.value = ''

      store.dispatch('modals/close', 'editColumn')
    }

    /**
     * Show status watcher.
     */
    watch(show, value => {
      if (value)
        name.value = data.value.oldName
    })

    /**
     * Form submit handler.
     */
    const onSubmit = () => {
      store
        .dispatch('columns/update', {
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
