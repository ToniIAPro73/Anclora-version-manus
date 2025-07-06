// .storybook/main.js
const path = require('path');

module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
  ],
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Alias raíz: @ === src/
      '@': path.resolve(__dirname, '../src'),
      // Alias adicional si prefieres @lib/…
      '@lib': path.resolve(__dirname, '../src/lib'),
    };
    return config;
  },
};
