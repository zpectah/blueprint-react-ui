import React from 'react';
import { useCheckboxStyles } from './useCheckboxStyles';
import { CheckboxProps } from './types';
import CheckboxElement from './CheckboxElement';

const Checkbox = (props: CheckboxProps) => {
    const { style, className, label, validationState, ...restProps } = props;

    const { root: rootStyleProps, label: labelStyleProps } = useCheckboxStyles({ style, className, validationState });

    return (
        <label {...rootStyleProps}>
            <CheckboxElement {...restProps} />
            {label && (
                <span className={labelStyleProps.className}>
                    {label}
                </span>
            )}
        </label>
    );
};

export default Checkbox;
