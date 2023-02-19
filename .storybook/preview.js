import { decorators } from './decorators';

export const globalTypes = {};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'rgb(250,250,250)',
      },
      {
        name: 'dark',
        value: 'rgb(41,40,45)',
      },
    ],
  },
};

export { decorators };
