import React from 'react';
import { useRadioStyles } from './useRadioStyles';
import { RadioProps } from './types';
import RadioElement from './RadioElement';

const Radio = (props: RadioProps) => {
    const { style, className, label, ...restProps } = props;

    const { root: rootStyleProps, label: labelStyleProps } = useRadioStyles({ style, className });

    return (
        <label {...rootStyleProps}>
            <RadioElement {...restProps} />
            {label && (
                <span className={labelStyleProps.className}>
                    {label}
                </span>
            )}
        </label>
    );
};

export default Radio;
