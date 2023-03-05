import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import { StackElementType, StackProps } from '../types';
import { STACK_DEFAULT_ELEMENT_TYPE } from '../const';
import Stack from '../Stack';

const Story: ComponentStory<typeof Stack> = <E extends StackElementType & ElementType = typeof STACK_DEFAULT_ELEMENT_TYPE>(args: StackProps<E>) => (
    <Stack {...args} />
);

Story.args = {
    children: 'Stack example',
};

export default Story;
