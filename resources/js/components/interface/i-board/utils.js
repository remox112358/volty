/**
 * Default colors.
 */
export const COLORS = [
  '#60a217', '#b3b20a', '#da7909', '#a50a0a',
  '#09a585', '#096fa5', '#512490', '#922487',
]

/**
 * Returns random color.
 *
 * @returns {String} - Color in HEX format.
 */
export const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)]
}
