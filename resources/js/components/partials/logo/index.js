import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
  setup() {

    return {
      styles,

    }

  }
}
