import { ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
    parameters: {},
} as ComponentMeta<typeof Checkbox>;

export { default as Default } from './stories/Checkbox';
