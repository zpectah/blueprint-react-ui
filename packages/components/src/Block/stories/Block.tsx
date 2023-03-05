import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import { BlockProps } from '../types';
import { BLOCK_DEFAULT_ELEMENT_TYPE } from '../const';
import Block from '../Block';

const Story: ComponentStory<typeof Block> = <E extends ElementType = typeof BLOCK_DEFAULT_ELEMENT_TYPE>(args: BlockProps<E>) => (
    <Block {...args} />
);

Story.args = {
    children: 'Block example',
};

export default Story;
