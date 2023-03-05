import React from 'react';
import { ComponentStory } from '@storybook/react';
import { FormFieldProps } from '../types';
import FormField from '../FormField';
import { TextInput } from '../../TextInput';

const Story: ComponentStory<typeof FormField> = (args: FormFieldProps) => (
    <FormField {...args} />
);

Story.args = {
    label: 'Field label',
    required: true,
    children: <TextInput defaultValue="value" />,
    helperText: 'Some helper text',
    validationMessage: 'Error message',
    validationState: 'error',
    disableLabelValidationState: false,
};

export default Story;
