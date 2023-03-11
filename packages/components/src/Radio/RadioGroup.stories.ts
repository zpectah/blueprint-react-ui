import { ComponentMeta } from '@storybook/react';
import RadioGroup from './RadioGroup';
import { ValidationStateKey } from '../../../core/src';

export default {
    title: 'Components/Form/Radio',
    component: RadioGroup,
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
} as ComponentMeta<typeof RadioGroup>;

export { default as Group } from './stories/RadioGroup';
