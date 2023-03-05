import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SwitchProps } from '../types';
import Switch from '../Switch';

const Story: ComponentStory<typeof Switch> = (args: SwitchProps) => (
    <Switch {...args} />
);

Story.args = {
    label: 'Switch label',
};

export default Story;
