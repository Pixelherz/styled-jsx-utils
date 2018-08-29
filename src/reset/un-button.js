/**
 * Mixin unButton
 * Remove the browser-default button styles from button elements
 */
const unButton = () => `
  border: 0;
  outline: none;
  appearance: none;
  background-color: transparent;
`

module.exports = unButton
