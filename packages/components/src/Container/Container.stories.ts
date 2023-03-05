import { ComponentMeta } from '@storybook/react';
import Container from './Container';

export default {
    title: 'Components/Containers/Container',
    component: Container,
    parameters: {},
} as ComponentMeta<typeof Container>;

export { default as Default } from './stories/Container';
