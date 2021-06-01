import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  setup() {

    return {
      styles,

    }

  }
}
