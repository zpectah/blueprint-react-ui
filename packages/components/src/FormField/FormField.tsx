import React from 'react';
import { useFormFieldStyles } from './useFormFieldStyles';
import { FormFieldProps } from './types';

const FormField = (props: FormFieldProps) => {
    const { style, className, children, ...restProps } = props;

    const { ...styleProps } = useFormFieldStyles({ style, className });

    return (
        <>
            <div>label</div>
            <div>
                <div>
                    {children}
                </div>
                <div>helper message</div>
                <div>validation message</div>
            </div>
        </>
    );
};

export default FormField;
