import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from '../src/lib'

storiesOf('Button', module)
  .add('Colors', () => (
    <>
      <Button color="primary">Primary Color</Button>
      <Button color="secondary">Secondary Color</Button>
      <Button color="neutral">Neutral Color</Button>
      <Button color="error">Error Color</Button>
      <Button color="alert">Alert Color</Button>
      <Button color="success">Success Color</Button>
    </>
  ))
  .add('Sizes', () => (
    <>
      <Button size="lg">LG Button</Button>
      <Button size="md">MD Button</Button>
      <Button size="sm">SM Button</Button>
    </>
  ))
  .add('Variants', () => (
    <>
      <Button variant="flat">Flat Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="dashed">Dashed Button</Button>
      <Button variant="clean">Clean Button</Button>
      <Button variant="icon">
        <span role="img" aria-label="so cool">
          😀
        </span>
      </Button>
    </>
  ))
  .add('Emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Click Callback', () => <Button onClick={action('clicked')}>Click me</Button>)
