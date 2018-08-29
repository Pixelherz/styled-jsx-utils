const pxToEm = require('../convert/px-to-em')

/**
 * Mixin mq
 * Returns media query values in em (ie. 'min-width: 36em')
 *
 * @param {number} bp - breakpoint width in px
 * @param {string} [range = 'from'] - enum, 'from' or 'until'
 */
const mq = (bp, range = 'from') => {
  switch (range) {
    case 'until':
      return `max-width: ${pxToEm(bp - 1)}em`
    default:
      return `min-width: ${pxToEm(bp)}em`
  }
}

module.exports = mq
