import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  setup() {

    /**
     * Groups of the links in sidebar.
     */
    const groups = [
      {
        heading: 'General',
        links: [
          {
            icon: 'eye',
            text: 'Boards',
            url: '/boards',
          },
          {
            icon: 'eye',
            text: 'Settings',
            url: '/settings',
          },
        ],
      },
      {
        heading: 'Boards',
        links: [
          {
            icon: 'eye',
            text: 'Board 1',
            url: '/board',
          },
          {
            icon: 'eye',
            text: 'Board 2',
            url: '/board',
          },
          {
            icon: 'eye',
            text: 'Board 3',
            url: '/board',
          },
        ],
      }
    ]

    return {
      styles,

      groups,
    }

  }
}
