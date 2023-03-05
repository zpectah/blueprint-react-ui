import React from 'react';
import { ComponentStory } from '@storybook/react';
import { FieldLabelProps } from '../types';
import FieldLabel from '../FieldLabel';

const Story: ComponentStory<typeof FieldLabel> = (args: FieldLabelProps) => (
    <FieldLabel {...args} />
);

Story.args = {
    children: 'FieldLabel blank example',
};

export default Story;
