import { ComponentMeta } from '@storybook/react';
import CheckboxElement from './CheckboxElement';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/Checkbox',
    component: CheckboxElement,
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
} as ComponentMeta<typeof CheckboxElement>;

export { default as Element } from './stories/CheckboxElement';
