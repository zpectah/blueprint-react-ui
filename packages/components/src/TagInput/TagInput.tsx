import React from 'react';
import { useTagInputStyles } from './useTagInputStyles';
import { TagInputProps } from './types';

const TagInput = (props: TagInputProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useTagInputStyles({ style, className });

    return (
        <>TagInput</>
    );
};

export default TagInput;
