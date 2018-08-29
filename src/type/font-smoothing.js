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

module.exports = fontSmoothing
