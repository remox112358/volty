import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    name: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: '#60a217',
    },
    href: {
      type: String,
      default: '/',
    },
    marked: {
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
