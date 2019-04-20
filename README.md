# cws-react-components library

A library of CWS React Components wrapped by [create-react-app](https://github.com/facebook/create-react-app).

## Prerequisites

To usage this component library you need to config your bundle to preprocess [CSS Modules](https://github.com/css-modules/css-modules).

The pattern we use for this is:

- Common CSS files: `*.css`
- CSS Modules files: `*.module.css`

## Installation

Run the following command:
`npm install cws-react-components --save`

## Usage

```js
import React, { Component } from 'react'
import { SomeComponent } from 'cws-react-components'

class HomePage extends Component {
  render() {
    return (
      <div>
        <SomeComponent />
      </div>
    )
  }
}
```

# Components

List of available React Components to be imported from the library

## Button

A simple button element with custom props

### Props

|   Props   | Options                                 | Default   | Description                                            |
| :-------: | --------------------------------------- | --------- | ------------------------------------------------------ |
|  Element  | mixed: html dom string or React Element | button    | element to be rendered as root element                 |
| className | string                                  | none      | CSS class to be added at root Button element           |
|  variant  | mixed: flat                             | outline   | dashed                                                 | clean | icon | flat | style variant of the button |
|   color   | mixed: primary                          | secondary | neutral                                                | error | alert | success | primary | color of button background |
|   size    | mixed: sm                               | md        | lg                                                     | md | size of button |
| children  | mixed: String, React Element or Node    | none      | text or element to be rendered inside button component |
| disabled  | boolean                                 | false     | set button as disabled                                 |

**Other than this it accepts all the props which can be given to a root button element.**

### Usage

```js
import React, { Component } from 'react'
import { Button } from 'cws-react-components'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Button {...props} />
      </div>
    )
  }
}
```
