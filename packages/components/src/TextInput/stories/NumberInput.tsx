import React from 'react';
import { ComponentStory } from '@storybook/react';
import { NumberInputProps } from '../types';
import NumberInput from '../NumberInput';

const Story: ComponentStory<typeof NumberInput> = (args: NumberInputProps) => <NumberInput {...args} />;

Story.args = {
    defaultValue: 250,
    step: 10,
    onChange: (e) => console.log('e', e),
};

export default Story;
