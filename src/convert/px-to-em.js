/**
 * Convert px to em
 *
 * @param {number} px - The pixel value to be converted
 * @param {number} [base = 16] - The base value used for conversion (equivalent of 1 em in px)
 */
const pxToEm = (px, base = 16) => px / base

module.exports = pxToEm
