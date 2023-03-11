import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TextInputProps } from '../types';
import TextInput from '../TextInput';

const Story: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
    <TextInput {...args} />
);

Story.args = {
    defaultValue: 'TextInput multiline',
    multiline: true,
    rows: 5,
    disabled: false,
};

export default Story;
