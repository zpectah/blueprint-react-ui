import React from 'react';
import { SelectNativeProps } from './types';
import { useSelectNativeStyles } from './useSelectNativeStyles';

const SelectNative = (props: SelectNativeProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useSelectNativeStyles({ style, className });

    return (
        <select {...styleProps} {...restProps} />
    );
};

export default SelectNative;
