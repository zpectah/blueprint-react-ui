import { ComponentMeta } from '@storybook/react';
import NumberInput from './NumberInput';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/TextInput',
    component: NumberInput,
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
} as ComponentMeta<typeof NumberInput>;

export { default as Number } from './stories/NumberInput';
