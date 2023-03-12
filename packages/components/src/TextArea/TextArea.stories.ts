import { ComponentMeta } from '@storybook/react';
import TextArea from './TextArea';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/TextArea',
    component: TextArea,
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
} as ComponentMeta<typeof TextArea>;

export { default as Default } from './stories/TextArea';
