import React from 'react';
import { ComponentStory } from '@storybook/react';
import { TagProps } from '../types';
import Tag from '../Tag';

const Story: ComponentStory<typeof Tag> = (args: TagProps) => (
    <Tag {...args} />
);

Story.args = {
    children: 'Tag example',
    onClick: undefined,
    onDismiss: undefined,
    size: 'md',
    variant: 'filled',
    color: 'primary',
};

export default Story;
