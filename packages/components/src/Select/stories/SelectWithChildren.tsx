import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SelectProps } from '../types';
import Select from '../Select';
import OptionItem from '../OptionItem';

const Story: ComponentStory<typeof Select> = (args: SelectProps) => (
    <Select {...args} />
);

Story.args = {
    children: (
        <>
            <OptionItem value="value1">Label 1</OptionItem>
            <OptionItem value="value2">Label 2</OptionItem>
            <OptionItem value="value3">Label 3</OptionItem>
            <OptionItem value="value4">Label 4</OptionItem>
            <OptionItem value="value5">Label 5</OptionItem>
        </>
    ),
    onChange: (e) => console.log('event', e),
};

export default Story;
