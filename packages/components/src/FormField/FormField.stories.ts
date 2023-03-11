import { ComponentMeta } from '@storybook/react';
import FormField from './FormField';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/FormField',
    component: FormField,
    parameters: {},
    argTypes: {
        validationState: {
            control: {
                type: 'select',
                options: [...Object.values(ValidationStateKey), undefined],
            },
            defaultValue: undefined,
        },
        labelPosition: {
            control: {
                type: 'radio',
                options: ['horizontal', 'vertical'],
            },
            defaultValue: 'horizontal',
        },
    },
} as ComponentMeta<typeof FormField>;

export { default as Default } from './stories/FormField';
