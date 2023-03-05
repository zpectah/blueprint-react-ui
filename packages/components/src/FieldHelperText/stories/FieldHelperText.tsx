import React from 'react';
import { ComponentStory } from '@storybook/react';
import { FieldHelperTextProps } from '../types';
import FieldHelperText from '../FieldHelperText';

const Story: ComponentStory<typeof FieldHelperText> = (args: FieldHelperTextProps) => (
    <FieldHelperText {...args} />
);

Story.args = {
    children: 'FieldHelperText text',
};

export default Story;
