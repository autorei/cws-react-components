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
  .add('Emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
