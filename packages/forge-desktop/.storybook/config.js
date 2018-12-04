import '../src/index.css';

import { configure } from '@storybook/react';

const contextRequire = require.context('../src/stories', true, /\.js$/);

function loadStories() {
  contextRequire.keys().forEach(filename => contextRequire(filename));
}

configure(loadStories, module);
