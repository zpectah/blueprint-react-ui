import React from 'react';
import { useRadioElementStyles } from './useRadioElementStyles';
import { RadioElementProps } from './types';

const RadioElement = (props: RadioElementProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useRadioElementStyles({ style, className });

    return <input type="radio" {...styleProps} {...restProps} />;
};

export default RadioElement;
