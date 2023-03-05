import React from 'react';
import { ComponentStory } from '@storybook/react';
import { RadioElementProps } from '../types';
import RadioElement from '../RadioElement';

const Story: ComponentStory<typeof RadioElement> = (args: RadioElementProps) => (
    <RadioElement {...args} />
);

Story.args = {};

export default Story;
