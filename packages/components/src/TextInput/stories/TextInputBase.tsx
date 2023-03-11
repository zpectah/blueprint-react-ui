import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TextInputBaseProps } from '../types';
import TextInputBase from '../TextInputBase';

const Story: ComponentStory<typeof TextInputBase> = (args: TextInputBaseProps) => (
    <TextInputBase {...args} />
);

Story.args = {
    defaultValue: 'TextInputBase blank example',
};

export default Story;
