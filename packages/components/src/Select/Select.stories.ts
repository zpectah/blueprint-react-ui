import { ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
    title: 'Components/Form/Select',
    component: Select,
    parameters: {},
} as ComponentMeta<typeof Select>;

export { default as Default } from './stories/Select';
