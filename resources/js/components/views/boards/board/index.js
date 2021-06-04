import draggable from 'vuedraggable'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  components: {
    draggable,
  },
  data: () => ({
    styles,
  }),
  computed: {
    data() {
      return this.$store.state.boards.boards[0]
    },
    columns: {
      get() {
        return this.$store.getters['boards/columnsByBoardId'](1)
      },
      set(value) {
        this.$store.dispatch('boards/setColumns', {
          value,
          boardId: 1,
        })
      },
    },
  },
}
