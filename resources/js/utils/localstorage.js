/**
 * Saves data in localStorage.
 *
 * @param {String} key
 * @param {Any} value
 */
export const __ls_save = (key, value) => {
  localStorage.setItem(key, value)
}

/**
 * Removes data from the localStorage.
 *
 * @param {String} key
 */
export const __ls_remove = key => {
  localStorage.removeItem(key)
}

/**
 * Returns data from localStorage.
 *
 * @param {String} key
 * @returns {Any}
 */
export const __ls_get = key => {
  return localStorage.getItem(key)
}

/**
 * Checks if there is the data in localStorage.
 *
 * @param {String} key
 * @returns {Boolean}
 */
export const __ls_has = key => {
  return !!localStorage.getItem(key)
}
