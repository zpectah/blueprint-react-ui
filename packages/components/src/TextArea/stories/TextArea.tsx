import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TextAreaProps } from '../types';
import TextArea from '../TextArea';

const Story: ComponentStory<typeof TextArea> = (args: TextAreaProps) => (
    <TextArea {...args} />
);

Story.args = {
    defaultValue: 'TextArea blank example',
    rows: 10,
    disabled: false,
};

export default Story;
