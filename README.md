# styled-jsx-utils

Some utilities we frequently use for projects built with [styled-jsx](https://github.com/zeit/styled-jsx).


## Getting Started

### Installing

Install using npm:

```
npm install --save @pixelherz/styled-jsx-utils
```

For usage examples see section [Utilities](#utilities) below. 


## Utilities

### Convert

#### hexToRgba

Convert hex to rgba

```js
import css from 'styled-jsx/css'
import { hexToRgba } from '@pixelherz/styled-jsx-utils/convert'

css`.foo { 
  color: ${hexToRgba('#000', 0.75)};
  background-color: ${hexToRgba('#000000', 0.25)};
}`
```

#### pxToEm

Convert px to em

```js
import css from 'styled-jsx/css'
import { pxToEm } from '@pixelherz/styled-jsx-utils/convert'

css`.foo { 
  font-size: ${pxToEm(24)}em;
}`
```

### Layout

#### gridCols

Returns the relative width for a given grid (grid configuration object) and number of cols as relative value (in percent, unitless)

```js
import css from 'styled-jsx/css'
import { gridCols } from '@pixelherz/styled-jsx-utils/layout'

const grid = {
  layoutWidth: 1094,
  gutterWidth: 22,
  colWidth: 71,
}

css`.foo {
  width: ${gridCols(grid, 8)}%;
}`
```

#### gridGutters

Returns the relative width for a given grid (grid configuration object) and number of gutters as relative value (in percent, unitless)

```js
import css from 'styled-jsx/css'
import { gridGutters } from '@pixelherz/styled-jsx-utils/layout'

const grid = {
  layoutWidth: 1094,
  gutterWidth: 22,
  colWidth: 71,
}

css`.foo {
  margin-left: ${gridGutters(grid, 1)}%;
}`
```

#### mq

Returns media query values in em (ie. 'min-width: 36em')

```js
import css from 'styled-jsx/css'
import { mq } from '@pixelherz/styled-jsx-utils/layout'

css`@media (${mq(576)}) {
  .foo {
    /* some definitions */
  }
}`
```

#### offsetText 

Hide inner html, ie. when using a background image (icon, logo etc)

```js
import css from 'styled-jsx/css'
import { offsetText } from '@pixelherz/styled-jsx-utils/layout'

css`.foo { 
  ${offsetText()};
}`
```

### Reset

#### unButton

Remove the browser-default button styles from button elements

```js
import css from 'styled-jsx/css'
import { unButton } from '@pixelherz/styled-jsx-utils/reset'

css`.foo { 
  ${unButton()};
}`
```

### Typography

#### fontFamily

Returns the `font-family` declaration based on a given list of font names.

```js
import css from 'styled-jsx/css'
import { fontFamily } from '@pixelherz/styled-jsx-utils/type'

css`.foo { 
  ${fontFamily(['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'])};
}`
```

#### fontSize

Returns `font-size` declaration and (optional) `line-height` declaration for a given scale of a given type configuration object

**NOTE:** Values in type configuration object are in px, unitless 

**TODO:** Implement support for responsive sizes (fluid type sizes)

```js
import css from 'styled-jsx/css'
import { fontFamily } from '@pixelherz/styled-jsx-utils/type'

const type = {
  fontSizes: {
    m: 18,
    l: 24,
  },
  lineHeights: {
    m: 27,
    l: 36,
  },
}

css`.foo { 
  ${fontSize(type, 'm')};
}`
```

#### fontSmoothing

Mixin to set font-smoothing for optimized font rendering on OS X

Defaults to 'sharp' rendering (anti aliased), options are 'none' (crisp) and 'strong' (browser default)

```js
import css from 'styled-jsx/css'
import { fontSmoothing } from '@pixelherz/styled-jsx-utils/type'

css`.foo { 
  ${fontSmoothing('none')};
}`
```


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Pixelherz/styled-jsx-utils/tags). 


## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
