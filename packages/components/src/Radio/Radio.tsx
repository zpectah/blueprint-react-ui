import React from 'react';
import { useRadioStyles } from './useRadioStyles';
import { RadioProps } from './types';
import RadioBase from './RadioBase';

const Radio = (props: RadioProps) => {
    const { style, className, label, validationState, ...restProps } = props;

    const { root: rootStyleProps, label: labelStyleProps } = useRadioStyles({ style, className, validationState });

    return (
        <label {...rootStyleProps}>
            <RadioBase {...restProps} />
            {label && (
                <span className={labelStyleProps.className}>
                    {label}
                </span>
            )}
        </label>
    );
};

export default Radio;
