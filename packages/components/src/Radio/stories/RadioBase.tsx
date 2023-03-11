import React from 'react';
import { ComponentStory } from '@storybook/react';
import { RadioBaseProps } from '../types';
import RadioBase from '../RadioBase';

const Story: ComponentStory<typeof RadioBase> = (args: RadioBaseProps) => (
    <RadioBase {...args} />
);

Story.args = {};

export default Story;
