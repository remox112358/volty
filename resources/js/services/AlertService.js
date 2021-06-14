import store from '../store'

/**
 * Sends success alert.
 *
 * @param {String} text
 * @param {Number} duration
 */
export const success = (text, duration = 3) => {
  store.dispatch('alerts/add', { text, type: 'success', duration })
}

/**
 * Sends danger alert.
 *
 * @param {String} text
 * @param {Number} duration
 */
export const danger = (text, duration = 3) => {
  store.dispatch('alerts/add', { text, type: 'danger', duration })
}

/**
 * Sends info alert.
 *
 * @param {String} text
 * @param {Number} duration
 */
export const info = (text, duration = 3) => {
  store.dispatch('alerts/add', { text, type: 'info', duration })
}

export default {
  info,
  danger,
  success,
}
