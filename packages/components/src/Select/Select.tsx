import React from 'react';
import { useSelectStyles } from './useSelectStyles';
import { SelectProps } from './types';

const Select = (props: SelectProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useSelectStyles({ style, className });

    return (
        <>Select</>
    );
};

export default Select;
