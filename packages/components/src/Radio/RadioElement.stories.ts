import { ComponentMeta } from '@storybook/react';
import RadioElement from './RadioElement';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/Radio',
    component: RadioElement,
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
} as ComponentMeta<typeof RadioElement>;

export { default as Element } from './stories/RadioElement';
