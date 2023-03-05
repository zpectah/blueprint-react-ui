import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import { BoxElementType, BoxProps } from '../types';
import { BOX_DEFAULT_ELEMENT_TYPE } from '../const';
import Box from '../Box';

const Story: ComponentStory<typeof Box> = <E extends BoxElementType & ElementType = typeof BOX_DEFAULT_ELEMENT_TYPE>(args: BoxProps<E>) => (
    <Box {...args} />
);

Story.args = {
    children: 'Box example',
};

export default Story;
