import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '../Button';

const Story: ComponentStory<typeof Button> = () => (
    <>
        <Button>Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button>
        <Button variant="text">Text Button</Button>
    </>
);

export default Story;
