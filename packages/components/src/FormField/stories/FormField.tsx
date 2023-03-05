import React from 'react';
import { ComponentStory } from '@storybook/react';
import { FormFieldProps } from '../types';
import FormField from '../FormField';

const Story: ComponentStory<typeof FormField> = (args: FormFieldProps) => (
    <FormField {...args} />
);

Story.args = {
    children: 'FormField blank example',
};

export default Story;
