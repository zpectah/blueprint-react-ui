import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CheckboxElementProps } from '../types';
import CheckboxGroup from '../CheckboxGroup';

const Story: ComponentStory<typeof CheckboxGroup> = (args: CheckboxElementProps) => (
    <CheckboxGroup {...args} />
);

Story.args = {
    label: 'Group label',
    name: 'checkboxGroupExample',
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
