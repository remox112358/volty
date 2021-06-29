import { useStore } from 'vuex'
import { computed, watch } from 'vue'
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
    const show = computed(() => store.state.modals.editColumn.show)

    /**
     * Data.
     */
    const data = computed(() => store.state.modals.editColumn.data)

    /**
     * Validation schema.
     */
    const schema = schemas.column.edit

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
     * Close action.
     */
    const close = () => {
      clear()
      resetForm()

      store.dispatch('modals/close', 'editColumn')
    }

    /**
     * Clear action.
     */
    const clear = () => {
      name.value = ''
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
      if (!meta.value.valid) return

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
      nameMeta,
      nameError,

      data,

      close,
      onSubmit,
    }

  }
}
