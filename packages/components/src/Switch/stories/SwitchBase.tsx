import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SwitchBaseProps } from '../types';
import SwitchBase from '../SwitchBase';

const Story: ComponentStory<typeof SwitchBase> = (args: SwitchBaseProps) => (
    <SwitchBase {...args} />
);

Story.args = {};

export default Story;
