/**
 * Mixin fontFamily
 *
 * Returns the `font-family` declaration based on a given list of font names.
 * @example fontFamily(['Helvetica', 'Arial']) // font-family: "Helvetica", "Arial";
 *
 * @param {array} list - Font family list, ie. ['Helvetica', 'Arial', 'sans-serif']
 */
const fontFamily = list => `font-family: "${list.join('","')}";`

module.exports = fontFamily
