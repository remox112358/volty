/**
 * Generates the random string.
 *
 * @param {number} length - Length of the generated string
 *
 * @returns {string}
 */
export const generateRandomString = (length = 12) => {
  let result = []
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  for (let i = 1; i <= length; i++) {
    result = [...result, chars.charAt(Math.floor(Math.random() * chars.length))]
  }

  return result.join('')
}

/**
 * Returns the DOM element distance from window borders.
 *
 * @param {Object} el
 */
export const getElementDistanceFromWindow = el => {
  const rect = el.getBoundingClientRect()

  return {
    top: rect.y,
    left: rect.x,
    right: window.innerWidth - (rect.x + rect.width),
    bottom: window.innerHeight - (rect.y + rect.height),
  }
}

/**
 * Returns the DOM element size.
 *
 * @param {Object} el
 */
export const getHiddenElementSize = el => {
  el.style.display = ''

  const result = {
    width: el.getBoundingClientRect().width,
    height: el.getBoundingClientRect().height,
  }

  el.style.display = 'none'

  return result
}
