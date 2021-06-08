import { ref } from 'vue'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: null,
    },
    maxWidth: {
      type: String,
      default: null,
    },
  },
  setup(props, context) {

    const root = ref(null)

    const backDropClick = (event) => {
      const isBackdrop = event.target === root.value

      if (isBackdrop && props.modelValue)
        context.emit('close')
    }

    return {
      styles,

      root,

      backDropClick,
    }

  }
}
