import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '../Button';

const Story: ComponentStory<typeof Button> = () => (
    <>
        <Button size="sm">Small Button</Button>
        <Button>Medium Button</Button>
        <Button size="lg">Large Button</Button>
    </>
);

export default Story;
