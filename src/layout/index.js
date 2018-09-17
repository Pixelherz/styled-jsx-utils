const grid = require('./grid')
const pxToEm = require('../convert').pxToEm

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

/**
 * Mixin offsetText
 * Use to hide inner html, ie. when using a background image (icon, logo etc)
 */
const offsetText = () => `
  text-indent: -119988px;
  overflow: hidden;
  text-align: left;
  text-transform: capitalize;
`

module.exports = {
  gridCols: grid.gridCols,
  gridGutters: grid.gridGutters,
  mq,
  offsetText,
}
