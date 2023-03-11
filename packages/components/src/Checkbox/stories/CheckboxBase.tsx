import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CheckboxBaseProps } from '../types';
import CheckboxBase from '../CheckboxBase';

const Story: ComponentStory<typeof CheckboxBase> = (args: CheckboxBaseProps) => (
    <CheckboxBase {...args} />
);

Story.args = {};

export default Story;
