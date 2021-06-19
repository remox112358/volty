import { getHiddenElementSize, getElementDistanceFromWindow } from "../../../utils/functions"

/**
 * Returns the possible position for dropdown.
 *
 * @return {String}
 */
export const getPossiblePosition = (trigger, dropdown) => {
  const space    = 20
  const size     = getHiddenElementSize(dropdown)
  const distance = getElementDistanceFromWindow(trigger)

  const possibility = {
    rb: (distance.right - size.width) >= space && (distance.bottom - size.height) >= space,
    lb: (distance.left - size.width) >= space && (distance.bottom - size.height) >= space,
    rt: (distance.right - size.width) >= space && (distance.top - size.height) >= space,
    lt: (distance.left - size.width) >= space && (distance.top - size.height) >= space,
  }

  for (const [key, value] of Object.entries(possibility)) {
    if (value)
      return key
  }
}
