import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TextInputProps } from '../types';
import TextInput from '../TextInput';
import TextInputAdornment from '../TextInputAdornment';

const Story: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
    <TextInput {...args} />
);

Story.args = {
    defaultValue: 'TextInput blank example',
    startAdornment: (
        <TextInputAdornment position="start">start</TextInputAdornment>
    ),
    endAdornment: (
        <TextInputAdornment position="end">end</TextInputAdornment>
    ),
};

export default Story;
