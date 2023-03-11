module.exports = {
  stories: [
    '../docs/GettingStarted.stories.mdx',
    '../docs/Overview.stories.mdx',
    '../docs/Usage.stories.mdx',
    '../docs/Customization.stories.mdx',
    '../docs/**/*.stories.mdx',
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-controls'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
}