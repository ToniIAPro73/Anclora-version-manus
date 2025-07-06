// .storybook/main.js
module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],

  docs: {
    autodocs: true
  }
};
