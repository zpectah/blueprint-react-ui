import { ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/TextInput',
    component: TextInput,
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
} as ComponentMeta<typeof TextInput>;

export { default as Base } from './stories/TextInputBase';
export { default as Default } from './stories/TextInput';
export { default as Multiline } from './stories/TextInputMultiline';
