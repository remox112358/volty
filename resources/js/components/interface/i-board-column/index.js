import { computed } from 'vue'
import { useStore } from 'vuex'
import draggable from 'vuedraggable'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  components: {
    draggable,
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    headerColor: {
      type: String,
      default: '#1f1f1f',
    },
  },
  setup({ id }) {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Columns cards.
     */
    const cards = computed(() => store.getters['boards/cardsByColumnId'](id))

    /**
     * Draggable change handler.
     *
     * @param {Object} event
     */
    const onChange = ({ newIndex }) => {
      console.log(cards.value)
      store.dispatch('boards/updateCardIndex', { id, newIndex })
      console.log(cards.value)
    }

    return {
      styles,

      cards,

      onChange,
    }

  }
}
