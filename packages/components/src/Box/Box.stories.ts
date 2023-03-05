import { ComponentMeta } from '@storybook/react';
import Box from './Box';

export default {
    title: 'Components/Containers/Box',
    component: Box,
    parameters: {},
} as ComponentMeta<typeof Box>;

export { default as Default } from './stories/Box';
