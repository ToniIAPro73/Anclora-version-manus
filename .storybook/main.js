// .storybook/main.js
module.exports = {
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',  // o builder-vite si prefieres
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
};
