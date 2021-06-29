import { useStore } from 'vuex'
import { ref, computed, watch } from 'vue'
import { useForm, useField } from 'vee-validate'

import schemas from '../../../config/schemas'

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
    const data  = computed(() => store.state.modals.editBoard.data)

    /**
     * Validation schema.
     */
    const schema = schemas.board.edit

    /**
     * Form context.
     */
    const { meta, setErrors, resetForm } = useForm({
      validationSchema: schema,
    })

    /**
     * Form fields.
     */
    const color = ref('#ff0000')

    const {
      value: name,
      meta: nameMeta,
      errorMessage: nameError
    } = useField('name')

    /**
     * Close action.
     */
    const close = () => {
      clear()
      resetForm()

      store.dispatch('modals/close', 'editBoard')
    }

    /**
     * Clear action.
     */
    const clear = () => {
      name.value  = ''
      color.value = '#ff0000'
    }

    /**
     * Show status watcher.
     */
    watch(show, value => {
      if (value) {
        name.value  = data.value.name
        color.value = data.value.color
      }
    })

    /**
     * Form submit handler.
     */
    const onSubmit = () => {
      if (!meta.value.valid) return

      store
        .dispatch('boards/update', {
          id: data.value.id,
          name: name.value,
          color: color.value,
        })
        .then(close)
    }

    return {
      styles,

      show,

      name,
      nameMeta,
      nameError,

      data,
      color,

      close,
      onSubmit,
    }

  }
}
