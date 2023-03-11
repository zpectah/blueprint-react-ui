import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CheckboxElementProps } from '../types';
import CheckboxBase from '../CheckboxBase';

const Story: ComponentStory<typeof CheckboxBase> = (args: CheckboxElementProps) => (
    <CheckboxBase {...args} />
);

Story.args = {};

export default Story;
