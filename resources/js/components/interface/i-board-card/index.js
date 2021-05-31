import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    text: {
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
