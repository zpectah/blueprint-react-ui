import { ComponentMeta } from '@storybook/react';
import CheckboxElement from './CheckboxElement';

export default {
    title: 'Components/Form/Checkbox',
    component: CheckboxElement,
    parameters: {},
} as ComponentMeta<typeof CheckboxElement>;

export { default as Element } from './stories/CheckboxElement';
