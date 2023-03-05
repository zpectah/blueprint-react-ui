import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TextInputProps } from '../types';
import TextInput from '../TextInput';

const Story: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
    <TextInput {...args} />
);

Story.args = {
    children: 'TextInput blank example',
};

export default Story;
