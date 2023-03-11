import React from 'react';
import { useCheckboxBaseStyles } from './useCheckboxBaseStyles';
import { CheckboxBaseProps } from './types';

const CheckboxBase = (props: CheckboxBaseProps) => {
    const { style, className, validationState, ...restProps } = props;

    const { ...styleProps } = useCheckboxBaseStyles({ style, className, validationState });

    return <input type="checkbox" {...styleProps} {...restProps} />;
};

export default CheckboxBase;
