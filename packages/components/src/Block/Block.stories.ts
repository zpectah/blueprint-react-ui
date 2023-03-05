import { ComponentMeta } from '@storybook/react';
import Block from './Block';

export default {
    title: 'Components/Containers/Block',
    component: Block,
    parameters: {},
} as ComponentMeta<typeof Block>;

export { default as Default } from './stories/Block';
