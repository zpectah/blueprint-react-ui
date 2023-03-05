import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CheckboxElementProps } from '../types';
import CheckboxElement from '../CheckboxElement';

const Story: ComponentStory<typeof CheckboxElement> = (args: CheckboxElementProps) => (
    <CheckboxElement {...args} />
);

Story.args = {};

export default Story;
