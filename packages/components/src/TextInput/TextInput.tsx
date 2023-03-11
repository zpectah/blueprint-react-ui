import React from 'react';
import { useTextInputStyles } from './useTextInputStyles';
import { TextInputProps } from './types';
import TextInputElement from './TextInputElement';

const TextInput = (props: TextInputProps) => {
    const { style, className, validationState, ...restProps } = props;

    const { ...styleProps } = useTextInputStyles({ style, className, validationState });

    return <TextInputElement validationState={validationState} {...styleProps} {...restProps} />;
};

export default TextInput;
