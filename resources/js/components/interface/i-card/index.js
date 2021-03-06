import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    shadow: {
      type: Number,
      default: 2,
    },
    rounding: {
      type: Number,
      default: 1,
    },
    width: {
      type: String,
      default: null,
    },
  },
  setup() {

    return {
      styles,

    }

  }
}
