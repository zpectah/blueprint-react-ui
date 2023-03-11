import React from 'react';
import { ComponentStory } from '@storybook/react';
import { RadioGroupProps } from '../types';
import RadioGroup from '../RadioGroup';

const Story: ComponentStory<typeof RadioGroup> = (args: RadioGroupProps) => (
    <RadioGroup {...args} />
);

Story.args = {
    label: 'Group label',
    name: 'RadioGroupExample',
    items: [
        {
            key: 0,
            label: 'Item #1',
            value: '1',
        },
        {
            key: 1,
            label: 'Item #2',
            value: '2',
        },
        {
            key: 2,
            label: 'Item #3',
            value: '3',
        },
    ],
    helperText: 'Helper text',
    validationMessage: 'Some error',
    validationState: 'error',
};

export default Story;
