import React from 'react';
import { useSwitchBaseStyles } from './useSwitchBaseStyles';
import { SwitchBaseProps } from './types';

const CheckboxBase = (props: SwitchBaseProps) => {
    const { style, className, validationState, ...restProps } = props;

    const { ...styleProps } = useSwitchBaseStyles({ style, className, validationState });

    return <input type="checkbox" {...styleProps} {...restProps} />;
};

export default CheckboxBase;
