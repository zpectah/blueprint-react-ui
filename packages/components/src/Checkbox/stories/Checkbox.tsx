import React from 'react';
import { ComponentStory } from '@storybook/react';
import { CheckboxProps } from '../types';
import Checkbox from '../Checkbox';

const Story: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => (
    <Checkbox {...args} />
);

Story.args = {
    label: 'Checkbox label',
};

export default Story;
