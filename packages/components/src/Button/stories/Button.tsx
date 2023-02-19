import React from 'react';
import { ComponentStory } from '@storybook/react';
import { PolymorphicElementType } from '../../../../core/src';
import { ButtonElementType, ButtonIntrinsicElements, ButtonProps } from '../types';
import Button from '../Button';

const Story: ComponentStory<typeof Button> = <E extends PolymorphicElementType<ButtonIntrinsicElements> | ButtonElementType>(args: ButtonProps<E>) => (
    <Button {...args} />
);

Story.args = {
    children: 'Button example',
    size: 'md',
    variant: 'contained',
    color: 'primary',
};

export default Story;
