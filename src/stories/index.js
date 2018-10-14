import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button as Button1, Welcome } from '@storybook/react/demo'
import Button from '../atoms/Button'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button1', module)
  .add('with text', () => (
    <Button1 onClick={action('clicked')}>Hello Button1</Button1>
  ))
  .add('with some emoji', () => (
    <Button1 onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button1>
  ))

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>HI</Button>
))
