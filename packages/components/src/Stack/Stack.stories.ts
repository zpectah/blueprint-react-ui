import { ComponentMeta } from '@storybook/react';
import Stack from './Stack';

export default {
    title: 'Components/Containers/Stack',
    component: Stack,
    parameters: {},
} as ComponentMeta<typeof Stack>;

export { default as Default } from './stories/Stack';
