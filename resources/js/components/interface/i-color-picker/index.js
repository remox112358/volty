import { ColorPicker } from 'vue-color-kit'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  components: {
    ColorPicker,
  },
  props: {
    modelValue: {
      type: String,
      default: '#ff0000',
    },
  },
  setup(props, context) {

    /**
     * Color change handler.
     *
     * @param {Object} color
     */
    const change = color => {
      context.emit('update:modelValue', color.hex)
    }

    return {
      styles,

      change,
    }

  }
}
