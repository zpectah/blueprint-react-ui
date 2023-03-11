import { ComponentMeta } from '@storybook/react';
import RadioBase from './RadioBase';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/Radio',
    component: RadioBase,
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
} as ComponentMeta<typeof RadioBase>;

export { default as Base } from './stories/RadioBase';
