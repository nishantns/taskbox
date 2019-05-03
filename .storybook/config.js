import { configure } from '@storybook/react';
import '../src/index.css';

const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');
const req = require.context('../src/components', true, /.stories.js$/);

addDecorator(withPropsTable);

function loadStories() {
  // require('../src/stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
