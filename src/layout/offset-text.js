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

module.exports = offsetText
