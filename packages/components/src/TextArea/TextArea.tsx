import React from 'react';
import { useTextAreaStyles } from './useTextAreaStyles';
import { TextAreaProps } from './types';

const TextArea = (props: TextAreaProps) => {
    const { style, className, validationState, ...restProps } = props;

    const { ...styleProps } = useTextAreaStyles({ style, className, validationState });

    return <textarea {...styleProps} {...restProps} />;
};

export default TextArea;
