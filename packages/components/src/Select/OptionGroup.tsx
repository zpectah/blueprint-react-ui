import React from 'react';
import { useOptionGroupStyles } from './useOptionGroupStyles';
import { OptionGroupProps } from './types';

const OptionGroup = (props: OptionGroupProps) => {
    const { style, className, ...restProps } = props;

    const { ...styleProps } = useOptionGroupStyles({ style, className });

    return <optgroup {...styleProps} { ...restProps } />;
};

export default OptionGroup;
