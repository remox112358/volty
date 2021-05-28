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
  },
  setup() {

    return {
      styles,

    }

  }
}
