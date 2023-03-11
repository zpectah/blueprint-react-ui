import { ComponentMeta } from '@storybook/react';
import CheckboxGroup from './CheckboxGroup';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/Checkbox',
    component: CheckboxGroup,
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
} as ComponentMeta<typeof CheckboxGroup>;

export { default as Group } from './stories/CheckboxGroup';
