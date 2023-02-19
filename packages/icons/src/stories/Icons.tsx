import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ArrowBackIcon } from '../ArrowBack';
import { ArrowDownwardIcon } from '../ArrowDownward';
import { ArrowForwardIcon } from '../ArrowForward';
import { ArrowUpwardIcon } from '../ArrowUpward';
import { CloseIcon } from '../Close';

const Story: ComponentStory<any> = () => (
    <>
        <ArrowBackIcon />
        <ArrowDownwardIcon />
        <ArrowForwardIcon />
        <ArrowUpwardIcon />
        <CloseIcon />
    </>
);

export default Story;
