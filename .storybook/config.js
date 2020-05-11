import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandTitle: '🔥 Feuer UI 🔥',
  brandUrl: 'https://github.com/yazaabed/react-tabs',
  brandImage: null,
});

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: 'github'
  },
});

addDecorator(addReadme);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);