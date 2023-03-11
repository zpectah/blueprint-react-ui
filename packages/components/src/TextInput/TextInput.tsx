import React from 'react';
import { TextInputProps } from './types';
import { useTextInputStyles } from './useTextInputStyles';
import TextInputBase from './TextInputBase';

const TextInput = (props: TextInputProps) => {
    const { style, className, validationState, ...restProps } = props;

    const { ...styleProps } = useTextInputStyles({ style, className, validationState });

    return <TextInputBase validationState={validationState} {...styleProps} {...restProps} />;
};

export default TextInput;
