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
            icon: 'board',
            text: 'Boards',
            url: '/boards',
          },
          {
            icon: 'settings',
            text: 'Settings',
            url: '/settings',
          },
        ],
      },
      {
        heading: 'Boards',
        links: [
          {
            icon: 'todo',
            text: 'Board 1',
            url: '/boards/1',
          },
          {
            icon: 'todo',
            text: 'Board 2',
            url: '/boards/2',
          },
          {
            icon: 'todo',
            text: 'Board 3',
            url: '/boards/3',
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
