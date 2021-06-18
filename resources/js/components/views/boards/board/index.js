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
        return this.$store.getters['columns/columnsByBoardId'](this.id)
      },
      set(value) {
        this.$store.dispatch('columns/updateColumns', {
          value,
          boardId: this.id,
        })
      },
    },
  },
  methods: {
    /**
     * Modal open action.
     */
    openAddNewColumnModal() {
      this.$store.dispatch('modals/open', {
        modal: 'addNewColumn',
        data: {
          boardId: this.id,
        },
      })
    },

    /**
     * Modal open action.
     */
    openEditBoardModal() {
      this.$store.dispatch('modals/open', {
        modal: 'editBoard',
        data: {
          id: this.id,
          name: this.data.name,
        },
      })
    },
  },
}
