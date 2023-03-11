import React from 'react';
import { useSwitchStyles } from './useSwitchStyles';
import { SwitchProps } from './types';
import { CheckboxBase } from '../Checkbox';

const Switch = (props: SwitchProps) => {
    const { style, className, label, validationState, ...restProps } = props;

    const { root: rootStyleProps, label: labelStyleProps } = useSwitchStyles({ style, className, validationState });

    return (
        <label {...rootStyleProps}>
            <CheckboxBase {...restProps} />
            {label && (
                <span className={labelStyleProps.className}>
                    {label}
                </span>
            )}
        </label>
    );
};

export default Switch;
