import React from 'react';
import { useFieldHelperTextStyles } from './useFieldHelperTextStyles';
import { FieldHelperTextProps } from './types';

const FieldHelperText = (props: FieldHelperTextProps) => {
    const { style, className, children, validationState, ...restProps } = props;

    const { ...styleProps } = useFieldHelperTextStyles({ style, className, validationState });

    return (
        <div {...styleProps} {...restProps}>
            {children}
        </div>
    );
};

export default FieldHelperText;
