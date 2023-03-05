import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TagInputProps } from '../types';
import TagInput from '../TagInput';

const Story: ComponentStory<typeof TagInput> = (args: TagInputProps) => (
    <TagInput {...args} />
);

Story.args = {
    children: 'TagInput blank example',
};

export default Story;
