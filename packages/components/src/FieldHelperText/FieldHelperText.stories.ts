import { ComponentMeta } from '@storybook/react';
import FieldHelperText from './FieldHelperText';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/FieldHelperText',
    component: FieldHelperText,
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
} as ComponentMeta<typeof FieldHelperText>;

export { default as Default } from './stories/FieldHelperText';
