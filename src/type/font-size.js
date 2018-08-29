const pxToEm = require('../convert/px-to-em')

/**
 * Returns font-size declaration and (optional) line-height declaration for a
 * given scale of a given type configuration object
 *
 * NOTE: Values in type configuration object are in px, unitless
 *
 * @todo Implement support for responsive sizes
 *
 * @param {object} type - type configuration object. Example/Signature: {fontSizes: { s: 18, m: 24 }, lineHeights: { s: 24, m: 32 } }
 * @param {string} scale - ie. 'm'
 * @param {boolean} omitLineHeight - will set line-height unless set to `true`
 */
const fontSize = (type, scale, omitLineHeight = false) => {
  let out = `font-size: ${type.fontSizes[scale]}px;`
  if (!omitLineHeight) {
    out += `line-height: ${pxToEm(
      type.lineHeights[scale],
      type.fontSizes[scale]
    )}em;`
  }
  return out
}

module.exports = fontSize
