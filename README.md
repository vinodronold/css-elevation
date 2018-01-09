# css-elevation

Object Elevation with Box Shadow

Inspired from [Elevation](https://material-components-web.appspot.com/elevation.html)

[![Build Status](https://travis-ci.org/vinodronold/css-elevation.svg?branch=master)](https://travis-ci.org/vinodronold/css-elevation)

[![Coverage Status](https://coveralls.io/repos/github/vinodronold/css-elevation/badge.svg)](https://coveralls.io/github/vinodronold/css-elevation)

## Installation

```
npm install css-elevation
```

or

```
yarn add css-elevation
```

[DEMO](https://react-guitar-chord.now.sh/)

```javascript
import elevation, { cssElevation, cssElevationObject } from 'css-elevation'
```

| function           |                                                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| elevation          | elevation function will just return css value                                                                           |
| cssElevation       | cssElevation function will return css key and value (can be used in libraries like styled-components, styled-jsx)       |
| cssElevationObject | cssElevationObject function will return an Object with boxShadow (can be used in-line or with libraries like glamorous) |

## Usage

```javascript
import elevation, { cssElevation, cssElevationObject } from 'css-elevation'
// Each function takes an object as input and returns css for box shadow
// Please see below table for object properties
// This value can be used as box shadow with any CSS-in-JS libraries

// elevation function will just return css value
const box = elevation({ z: 4 }) // 0px 2px 4px -1px rgba(0,0,0,.2), 0px 4px 5px 0px rgba(0,0,0,.14), 0px 1px 10px 0px rgba(0,0,0,.12)

// cssElevation function will return css key and value (can be used in libraries like styled-components, styled-jsx)
const box = cssElevation({ z: 4 }) // box-shadow: 0px 2px 4px -1px rgba(0,0,0,.2), 0px 4px 5px 0px rgba(0,0,0,.14), 0px 1px 10px 0px rgba(0,0,0,.12);

// cssElevationObject function will return an Object with boxShadow (can be used in-line or with libraries like glamorous)
const box = cssElevationObject({ z: 4 }) // box-shadow: 0px 2px 4px -1px rgba(0,0,0,.2), 0px 4px 5px 0px rgba(0,0,0,.14), 0px 1px 10px 0px rgba(0,0,0,.12);
```

## Object Properties

| Props | Description                          | Default Value |
| ----- | ------------------------------------ | ------------- |
| z     | z-space or depth of shadow (0 to 24) | 4             |
| r     | Red Value                            | 0             |
| g     | Green Value                          | 0             |
| b     | Blue Value                           | 0             |

## Example with styled-components

```javascript
import React from 'react'
import styled, { css } from 'styled-components'
import { cssElevation } from 'css-elevation'

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  margin: 0 60px 80px;
  padding: 10px;
  border-radius: 3px;
  font-size: 0.8em;
  color: #9e9e9e;
  background: white;
  ${props =>
    css`
      ${cssElevation({ ...props })};
    `};
`

export default () => (
  <Fragment>
    <Box z={12} />
    <Box z={16} />
  </Fragment>
)
```

## Example with glamorous

```javascript
import React, { Fragment } from 'react'
import glamorous from 'glamorous'
import { cssElevationObject } from 'css-elevation'

const Box = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    margin: '0 60px 80px',
    borderRadius: 3,
    fontSize: '.8em',
    color: '#9E9E9E',
    background: 'white'
  },
  ({ z }) => cssElevationObject({ z })
)

export default () => (
  <Fragment>
    <Box z={12} />
    <Box z={16} />
  </Fragment>
)
```

![C Chords](https://raw.githubusercontent.com/vinodronold/react-guitar-chord/master/images/C_CHORD.png "C Chords")
