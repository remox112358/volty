import { useStore } from 'vuex'
import { ref, computed } from 'vue'
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
     * Validation schema.
     */
    const schema = schemas.board.add

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
     * Show status.
     */
    const show = computed(() => store.state.modals.addNewBoard.show)

    /**
     * Close action.
     */
    const close = () => {
      clear()
      resetForm()

      store.dispatch('modals/close', 'addNewBoard')
    }

    /**
     * Clear action.
     */
    const clear = () => {
      name.value = ''
      color.value = '#ff0000'
    }

    /**
     * Form submit handler.
     */
    const onSubmit = () => {
      if (!meta.value.valid) return

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
      nameMeta,
      nameError,

      color,

      close,
      onSubmit,
    }

  }
}
