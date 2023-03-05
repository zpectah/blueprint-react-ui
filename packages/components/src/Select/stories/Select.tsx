import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SelectProps } from '../types';
import Select from '../Select';

const Story: ComponentStory<typeof Select> = (args: SelectProps) => (
    <Select {...args} />
);

Story.args = {
    children: 'Select blank example',
};

export default Story;
