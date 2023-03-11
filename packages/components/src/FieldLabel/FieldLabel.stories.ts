import { ComponentMeta } from '@storybook/react';
import FieldLabel from './FieldLabel';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/FieldLabel',
    component: FieldLabel,
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
} as ComponentMeta<typeof FieldLabel>;

export { default as Default } from './stories/FieldLabel';
