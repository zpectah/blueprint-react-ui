import React from 'react';
import { useFormFieldStyles } from './useFormFieldStyles';
import { FormFieldProps } from './types';
import { FieldLabel } from '../FieldLabel';
import { FieldHelperText } from '../FieldHelperText';

const FormField = (props: FormFieldProps) => {
    const {
        style,
        className,
        children,
        label,
        labelPosition = 'vertical',
        required,
        helperText,
        validationMessage,
        validationState,
        disableLabelValidationState,
        ...restProps
    } = props;

    const { root: rootStyleProps, label: labelStyleProps, input: inputStyleProps, message: messageStyleProps } = useFormFieldStyles({ style, className, labelPosition, validationState });

    return (
        <div {...rootStyleProps} {...restProps}>
            <div className={labelStyleProps.className}>
                <FieldLabel required={required} validationState={!disableLabelValidationState ? validationState : undefined}>
                    {label}
                </FieldLabel>
            </div>
            <div className={inputStyleProps.className}>
                {children}
                <div className={messageStyleProps.className}>
                    {helperText && <FieldHelperText children={helperText} />}
                    {(validationState && validationMessage) && <FieldHelperText children={validationMessage} validationState={validationState} />}
                </div>
            </div>
        </div>
    );
};

export default FormField;
