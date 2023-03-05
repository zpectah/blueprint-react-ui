import React from 'react';
import { ComponentStory } from '@storybook/react';
import { BadgeProps } from '../types';
import Badge from '../Badge';

const Story: ComponentStory<typeof Badge> = (args: BadgeProps) => (
    <Badge {...args} />
);

Story.args = {
    label: 'Badge label',
    iconStart: 'ico',
    iconEnd: 'ico',
};

export default Story;
