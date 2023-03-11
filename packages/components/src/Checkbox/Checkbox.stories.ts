import { ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/Checkbox',
    component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>;

export { default as Default } from './stories/Checkbox';
