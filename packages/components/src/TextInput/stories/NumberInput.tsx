import React from 'react';
import { ComponentStory } from '@storybook/react';
import { NumberInputProps } from '../types';
import NumberInput from '../NumberInput';

const Story: ComponentStory<typeof NumberInput> = (args: NumberInputProps) => <NumberInput {...args} />;

Story.args = {
    value: 250,
    step: 10,
    max: 280,
    min: 200,
};

export default Story;
