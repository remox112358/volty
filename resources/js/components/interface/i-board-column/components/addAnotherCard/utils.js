/**
 * Generates the random string.
 *
 * @param {Number} length - Length of generated string
 *
 * @returns {String}
 */
export const generateRandomString = (length = 12) => {
  let result = []
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  for (let i = 1; i <= length; i++) {
    result = [...result, chars.charAt(Math.floor(Math.random() * chars.length))]
  }

  return result.join('')
}
