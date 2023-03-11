import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SelectBaseProps } from '../types';
import SelectBase from '../SelectBase';
import OptionItem from '../OptionItem';

const Story: ComponentStory<typeof SelectBase> = (args: SelectBaseProps) => (
    <SelectBase {...args} />
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
