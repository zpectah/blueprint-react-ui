import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SelectProps } from '../types';
import Select from '../Select';

const Story: ComponentStory<typeof Select> = (args: SelectProps) => (
    <Select {...args} />
);

Story.args = {
    options: [
        {
            key: 1,
            label: 'Option label #1',
            value: 'value1',
        },
        {
            key: 2,
            label: 'Option label #2',
            value: 'value2',
        },
        {
            key: 3,
            label: 'Option label #3',
            value: 'value3',
        },
        {
            key: 4,
            label: 'Option label #4',
            value: 'value4',
        },
        {
            key: 5,
            label: 'Option label #5',
            value: 'value5',
        },
    ],
    onChange: (e) => console.log('event', e),
};

export default Story;
