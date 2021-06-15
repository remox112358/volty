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
    id() {
      return this.$router.currentRoute.value.params.boardId
    },
    data() {
      return this.$store.getters['boards/boardById'](this.id)
    },
    columns: {
      get() {
        return this.$store.getters['boards/columnsByBoardId'](this.id)
      },
      set(value) {
        this.$store.dispatch('boards/setColumns', {
          value,
          boardId: this.id,
        })
      },
    },
  },
}
