import React from 'react';
import { useTextInputStyles } from './useTextInputStyles';
import { TextInputProps } from './types';

const TextInput = (props: TextInputProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useTextInputStyles({ style, className });

    return (
        <>TextInput</>
    );
};

export default TextInput;
