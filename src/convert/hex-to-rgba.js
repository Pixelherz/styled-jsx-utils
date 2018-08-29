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

module.exports = hexToRgba
