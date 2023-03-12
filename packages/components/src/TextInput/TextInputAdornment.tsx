import React from 'react';
import { TextInputAdornmentProps } from './types';
import { useTextInputAdornmentStyles } from './useTextInputAdornmentStyles';

const TextInputAdornment = (props: TextInputAdornmentProps) => {
    const { style, className, position, ...restProps } = props;

    const { ...styleProps } = useTextInputAdornmentStyles({ style, className, position });

    return (
        <div {...styleProps} {...restProps} />
    );
};

export default TextInputAdornment;
