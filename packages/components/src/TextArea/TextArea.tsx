import React from 'react';
import { useTextAreaStyles } from './useTextAreaStyles';
import { TextAreaProps } from './types';

const TextArea = (props: TextAreaProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useTextAreaStyles({ style, className });

    return (
        <>TextArea</>
    );
};

export default TextArea;