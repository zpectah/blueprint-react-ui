import { ComponentMeta } from '@storybook/react';
import CheckboxElement from './CheckboxElement';

export default {
    title: 'Components/Form/CheckboxElement',
    component: CheckboxElement,
    parameters: {},
} as ComponentMeta<typeof CheckboxElement>;

export { default as Default } from './stories/CheckboxElement';
