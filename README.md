# cws-react-components library
A library of CWS React Components wrapped by [create-react-app](https://github.com/facebook/create-react-app).

## Prerequisites
To usage this component library you need to config your bundle to preprocess [CSS Modules](https://github.com/css-modules/css-modules).

The pattern we use for this is:
* Common CSS files: `*.css`
* CSS Modules files: `*.module.css`

## Installation
Run the following command:
`npm install cws-react-components --save`

## Usage

```js
import React, { Component } from 'react'
import { SomeComponent } from 'cws-react-components'


class HomePage extends Component {
    render () {
        return (
            <div>
                <SomeComponent />
            </div>
        )
    }
}
```