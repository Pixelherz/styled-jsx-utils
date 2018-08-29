/**
 * Helper function to calculate the absolute width of a given number of columns
 * and gutters.
 *
 * @param {object} grid - Config object, required. Signature: { layoutWidth: {number} }
 * @param {string|number} cols - The number of columns the width should span
 * @param {number} gutters - The number of extra gutters the width should span
 */
const baseWidth = ({ grid, cols = 'all', gutters = 0 }) => {
  const width =
    cols === 'all' ? grid.layoutWidth : gridWidth({ grid, cols, scale: 'abs' })
  return width + gridWidth({ grid, gutters, scale: 'abs' })
}

/**
 * Calculates grid widths based on the given param object and returns the width
 * as absolute (px) or relative (%) value.
 *
 * NOTE: The gutters enclosed by columns must not be declared in the `gutters`
 * parameter (ie. param `cols: 3` returns the width of 3 cols and 2 gutters).
 * The `gutters` param is used only for extra-gutter (left/right of the cols).
 *
 * @param {object} [grid = null] - Config object, required. Signature: {colWidth: {number}, gutterWidth: {number}, layoutWidth: {number} }
 * @param {number} [cols = 0] - The number of columns the width should span
 * @param {number} [gutters = 0] - The number of extra gutters the width should span
 * @param {string|number} [baseCols = 'all'] - The number of columns used as base for relative values. Use this param if the parent element is not using the grid's full layout width.
 * @param {number} [baseGutters = 0] – The number of extra gutters to be included in the base calculation. NOTE: Gutters enclosed by colums ($base-cols) must not be declared. This param is used only for extra gutters *outside* the $base-cols.
 * @param {number} [baseExtra = 0] - Accepts a px value to adjust base width (ie. if the base does not align with the globa grid).
 * @param {string} [scale = 'rel'] - Use 'rel' to return a relative value (%) or 'abs' to return an absolute value (px).
 *
 */
const gridWidth = ({
  grid = null,
  cols = 0,
  gutters = 0,
  baseCols = 'all',
  baseGutters = 0,
  baseExtra = 0,
  scale = 'rel',
}) => {
  if (!grid) throw new Error('Param `grid` cannot be empty')
  gutters = Math.max(0, cols - 1) + gutters
  const width = cols * grid.colWidth + gutters * grid.gutterWidth
  if (scale === 'abs') return width
  const base = baseWidth({ grid, baseCols, baseGutters }) + baseExtra
  return (width / base) * 100
}

/**
 * Returns the relative width for a given grid (grid configuration object) and
 * number of cols as relative value (in percent, unitless)
 *
 * Publicly exposed shortcut for `gridWidth({ grid, cols: n })`
 *
 * @param {object} grid - Config object, required. Signature: {colWidth: {number}, gutterWidth: {number}, layoutWidth: {number} }
 * @param {number} cols - The number of columns the width should span
 *
 * @returns {number} - Unitless percent value, ie. 76
 */
const gridCols = (grid, cols = 0) => {
  return gridWidth({ grid, cols })
}

/**
 * Returns the relative width for a given grid (grid configuration object) and
 * number of gutters as relative value (in percent, unitless)
 *
 * Publicly exposed shortcut for `gridWidth({ grid, gutters: n})`
 *
 * @param {object} grid - Config object, required. Signature: {colWidth: {number}, gutterWidth: {number}, layoutWidth: {number} }
 * @param {number} gutters - The number of extra gutters the width should span
 */
const gridGutters = (grid, gutters = 0) => {
  return gridWidth({ grid, gutters })
}

module.exports = {
  gridCols,
  gridGutters,
}
