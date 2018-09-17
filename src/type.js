const pxToEm = require('./convert').pxToEm

/**
 * Mixin fontFamily
 *
 * Returns the `font-family` declaration based on a given list of font names.
 * @example fontFamily(['Helvetica', 'Arial']) // font-family: "Helvetica", "Arial";
 *
 * @param {array} list - Font family list, ie. ['Helvetica', 'Arial', 'sans-serif']
 */
const fontFamily = list => `font-family: "${list.join('","')}";`

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

/**
 * Mixin fontSmoothing
 *
 * Mixin to set font-smoothing for optimized font rendering on OS X.
 *
 * NOTE: font-smoothing is non-standard and is not on a standards track.
 *
 * Defaults to 'sharp' font rendering.
 *
 * - 'sharp' triggers font-smoothing `antialiased` (-webkit) or `grayscale` (-moz) which often looks better for bright text on dark backgrounds.
 * - 'none' results in pixelated text (-webkit only)
 * - 'strong' represents subpixel-antialiased rendering (browser default)
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth}
 * @see {@link http://maxvoltar.com/sandbox/fontsmoothing/}
 * @see {@link http://typerendering.com/}
 *
 * @author Maximilian Hoffmann <https://maximilianhoffmann.com/posts/better-font-rendering-on-osx>
 *
 * @param {string} [type = 'sharp'] - enum: 'sharp', 'none', 'strong',
 */
const fontSmoothing = type => {
  switch (type) {
    case 'none':
      return `-webkit-font-smoothing: none;`
    case 'strong':
      return `-webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;`
    default:
      return `-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;`
  }
}

module.exports = {
  fontSmoothing,
  fontSize,
  fontFamily,
}
