import React, { useMemo } from 'react';
import { useFieldLabelStyles } from './useFieldLabelStyles';
import { FieldLabelProps } from './types';

const FieldLabel = (props: FieldLabelProps) => {
    const { style, className, required, children, label, ...restProps } = props;

    const { ...styleProps } = useFieldLabelStyles({ style, className });

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
    }, [ required, children, label ]);
};

export default FieldLabel;
