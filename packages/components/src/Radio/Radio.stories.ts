import { ComponentMeta } from '@storybook/react';
import Radio from './Radio';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/Radio',
    component: Radio,
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
} as ComponentMeta<typeof Radio>;

export { default as Default } from './stories/Radio';
