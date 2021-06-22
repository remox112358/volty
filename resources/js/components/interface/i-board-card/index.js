import { computed } from 'vue'
import { useStore } from 'vuex'

import axios from 'axios'

import AlertService from '../../../services/AlertService'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    id: {
      type: Number,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    columnId: {
      type: Number,
      default: null,
    },
  },
  setup(props) {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Card actions.
     */
    const actions = computed(() => {
      return [
        {
          name: 'Edit',
          callback: edit,
        },
        {
          name: 'Delete',
          callback: remove,
        },
      ]
    })

    /**
     * Card edit action.
     */
    const edit = () => {
      store.dispatch('modals/open', {
        modal: 'editCard',
        data: {
          id: props.id,
          oldText: props.text,
          columnId: props.columnId,
        }
      })
    }

    /**
     * Card delete action.
     */
    const remove = async () => {
      store.commit('setLoading', true)

      await axios
              .delete(`/api/cards/${props.id}`)
              .then(response => {
                store.dispatch('cards/doFetch')

                AlertService.success(response.data.message)
              })
              .catch(error => {
                AlertService.danger(error.response.data.message)
              })
              .finally(() => {
                store.commit('setLoading', false)
              })
    }

    return {
      styles,

      actions,
    }

  }
}
