import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import centered from '@storybook/addon-centered';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import Sample from '../components/Sample';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('some text', () => (
    <div onMouseOver={action('hover')}>
      blah
    </div>
  ));

const stories = storiesOf('NewButton', module);

stories.addDecorator(withKnobs);

stories.add('Button without props', () => (
    <Sample/>
  ))
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Button with props', () => {
    const text1 = text("text", ""); 
    return (
    <Sample text={text1} onClick={action('clicked')}/>
  );
  });
