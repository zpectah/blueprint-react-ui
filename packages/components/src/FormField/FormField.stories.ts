import { ComponentMeta } from '@storybook/react';
import FormField from './FormField';

export default {
    title: 'Components/Form/FormField',
    component: FormField,
    parameters: {},
} as ComponentMeta<typeof FormField>;

export { default as Default } from './stories/FormField';
