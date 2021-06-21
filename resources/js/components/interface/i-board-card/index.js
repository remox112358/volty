import { computed } from 'vue'
import { useStore } from 'vuex'

import axios from 'axios'

import AlertService from '../../../services/AlertService'

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
      console.log('edit')
    }

    /**
     * Card delete action.
     */
    const remove = () => {
      console.log('remove')
    }

    return {
      styles,

      actions,
    }

  }
}
