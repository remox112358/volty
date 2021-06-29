import { computed } from 'vue'
import { useStore } from 'vuex'
import { useForm, useField } from 'vee-validate'

import * as yup from 'yup'

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
     * Validation schema.
     */
    const schema = yup.object({
      name: yup.string().required().min(1).max(16),
    })

    /**
     * Form context.
     */
    const { meta, setErrors, resetForm } = useForm({
      validationSchema: schema,
    })

    /**
     * Form fields.
     */
    const {
      value: name,
      meta: nameMeta,
      errorMessage: nameError
    } = useField('name')

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
      clear()
      resetForm()

      store.dispatch('modals/close', 'addNewColumn')
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
      if (!meta.value.valid) return

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
      nameMeta,
      nameError,

      close,
      onSubmit,
    }

  }
}
