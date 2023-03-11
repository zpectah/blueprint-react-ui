import React from 'react';
import { SelectBaseProps } from './types';
import { useSelectBaseStyles } from './useSelectBaseStyles';

const SelectBase = (props: SelectBaseProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useSelectBaseStyles({ style, className });

    return (
        <select {...styleProps} {...restProps} />
    );
};

export default SelectBase;
