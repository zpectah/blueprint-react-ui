import { ComponentMeta } from '@storybook/react';
import CheckboxBase from './CheckboxBase';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/Checkbox',
    component: CheckboxBase,
    parameters: {},
    argTypes: {
        validationState: {
            control: {
                type: 'select',
                options: [...Object.values(ValidationStateKey), undefined],
            },
            defaultValue: undefined,
        },
    },
} as ComponentMeta<typeof CheckboxBase>;

export { default as Base } from './stories/CheckboxBase';
