import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from '../Button';

const Story: ComponentStory<typeof Button> = () => (
    <>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="info">Info Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
        <Button color="error">Error Button</Button>
    </>
);

export default Story;
