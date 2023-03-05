import React from 'react';
import { useCheckboxElementStyles } from './useCheckboxElementStyles';
import { CheckboxElementProps } from './types';

const CheckboxElement = (props: CheckboxElementProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useCheckboxElementStyles({ style, className });

    return <input type="checkbox" {...styleProps} {...restProps} />;
};

export default CheckboxElement;
