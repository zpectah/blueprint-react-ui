import React from 'react';
import { ComponentStory } from '@storybook/react';
import { RadioProps } from '../types';
import Radio from '../Radio';

const Story: ComponentStory<typeof Radio> = (args: RadioProps) => (
    <Radio {...args} />
);

Story.args = {
    label: 'Radio label',
};

export default Story;
