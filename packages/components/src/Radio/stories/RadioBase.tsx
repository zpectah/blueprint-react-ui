import React from 'react';
import { ComponentStory } from '@storybook/react';
import { RadioElementProps } from '../types';
import RadioBase from '../RadioBase';

const Story: ComponentStory<typeof RadioBase> = (args: RadioElementProps) => (
    <RadioBase {...args} />
);

Story.args = {};

export default Story;
