import React, {ElementType} from 'react';
import { ComponentStory } from '@storybook/react';
import { ContainerElementType, ContainerProps } from '../types';
import { CONTAINER_DEFAULT_ELEMENT_TYPE } from '../const';
import Container from '../Container';

const Story: ComponentStory<typeof Container> = <E extends ContainerElementType & ElementType = typeof CONTAINER_DEFAULT_ELEMENT_TYPE>(args: ContainerProps<E>) => (
    <Container {...args} />
);

Story.args = {
    children: 'Container example',
};

export default Story;
