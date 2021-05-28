import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    href: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
    color: {
      type: String,
      default: 'dark',
    },
    outline: {
      type: Boolean,
      default: false,
    }
  },
  setup({ href }) {

    /**
     * HTML tag of the button.
     */
    const tag = href ? 'a' : 'button'

    return {
      styles,

      tag,
    }

  }
}
