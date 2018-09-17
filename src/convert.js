/**
 * Convert hex to rgba
 *
 * @param {string} hex - ie. '#ffcc00' or '#fc0'
 * @param {number} a - opacity, number from 0 to 1, ie. 0.5
 *
 * @see {@link https://stackoverflow.com/a/21648508}
 */
const hexToRgba = (hex, a) => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${a})`
  }
  throw new Error('Bad Hex')
}

/**
 * Convert px to em
 *
 * @param {number} px - The pixel value to be converted
 * @param {number} [base = 16] - The base value used for conversion (equivalent of 1 em in px)
 */
const pxToEm = (px, base = 16) => px / base

module.exports = {
  hexToRgba,
  pxToEm,
}
