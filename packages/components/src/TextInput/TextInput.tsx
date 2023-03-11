import React from 'react';
import { useTextInputStyles } from './useTextInputStyles';
import { TextInputProps } from './types';

const TextInput = (props: TextInputProps) => {
    const { style, className, validationState, ...restProps } = props;

    const { ...styleProps } = useTextInputStyles({ style, className, validationState });

    return <input {...styleProps} {...restProps} />;
};

export default TextInput;
