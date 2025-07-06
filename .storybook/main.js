// .storybook/main.js
const path = require('path');

module.exports = {
  framework: { name: '@storybook/react-webpack5', options: {} },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],
  docs: { autodocs: true },

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lib': path.resolve(__dirname, '../src/lib'),
    };
    return config;
  },
};