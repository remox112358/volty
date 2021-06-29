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
    const show = computed(() => store.state.modals.editCard.show)

    /**
     * Data.
     */
    const data = computed(() => store.state.modals.editCard.data)

    /**
     * Validation schema.
     */
    const schema = schemas.card.edit

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
      value: text,
      meta: textMeta,
      errorMessage: textError
    } = useField('text')

    /**
     * Close action.
     */
    const close = () => {
      clear()
      resetForm()

      store.dispatch('modals/close', 'editCard')
    }

    /**
     * Clear action.
     */
    const clear = () => {
      text.value = ''
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
    const onSubmit = () => {
      if (!meta.value.valid) return

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
      textMeta,
      textError,

      data,

      close,
      onSubmit,
    }

  }
}
