import React, { useMemo } from 'react';
import { useFieldLabelStyles } from './useFieldLabelStyles';
import { FieldLabelProps } from './types';

const FieldLabel = (props: FieldLabelProps) => {
    const { style, className, required, children, label, validationState, ...restProps } = props;

    const { ...styleProps } = useFieldLabelStyles({ style, className, validationState });

    return useMemo(() => {
        let node = <label children={children} {...styleProps} {...restProps} />;

        if (required && (children || label)) {
            node = (
                <label {...styleProps} {...restProps}>
                    {children}
                    {label}
                    <span>*</span>
                </label>
            );
        }

        return node;
    }, [ styleProps, required, children, label, restProps ]);
};

export default FieldLabel;
