import axios from 'axios'

import { __ls_has, __ls_get } from './localstorage'

/**
 * Updates the token for axios requests headers.
 *
 * @param {String} token
 */
export const __ax_update_token = token => {
  if (__ls_has('access_token'))
    axios.defaults.headers.common['Authorization'] = `Bearer ${__ls_get('access_token')}`
}
