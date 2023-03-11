import React from 'react';
import { useTagInputStyles } from './useTagInputStyles';
import { TagInputProps } from './types';

const TagInput = (props: TagInputProps) => {
    const { style, className, validationState, ...restProps } = props;

    const { ...styleProps } = useTagInputStyles({ style, className, validationState });

    return (
        <>TagInput</>
    );
};

export default TagInput;
