import React from 'react';
import { useRadioBaseStyles } from './useRadioBaseStyles';
import { RadioBaseProps } from './types';

const RadioBase = (props: RadioBaseProps) => {
    const { style, className, validationState, ...restProps } = props;

    const { ...styleProps } = useRadioBaseStyles({ style, className, validationState });

    return <input type="radio" {...styleProps} {...restProps} />;
};

export default RadioBase;
