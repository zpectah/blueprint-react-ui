import React from 'react';
import { useCheckboxGroupStyles } from './useCheckboxGroupStyles';
import { CheckboxGroupProps } from './types';
import { FieldHelperText } from '../FieldHelperText';
import Checkbox from './Checkbox';
import { CheckboxGroupContextProvider } from './CheckboxGroupContext';

const CheckboxGroup = (props: CheckboxGroupProps) => {
    const {
        style,
        className,
        validationState,
        validationMessage,
        children,
        helperText,
        label,
        items = [],
        name,
        ...restProps
    } = props;

    const {
        root: rootStyleProps,
        label: labelStyleProps,
        body: bodyStyleProps,
    } = useCheckboxGroupStyles({ style, className, validationState });

    const contextValue = {
        name,
    };

    return (
        <div {...rootStyleProps} {...restProps}>
            <CheckboxGroupContextProvider value={contextValue}>
                {label && (
                    <span {...labelStyleProps}>{label}</span>
                )}
                <div {...bodyStyleProps}>
                    {children && children}
                    {items.length > 0 && items.map((item, index) => (
                        <Checkbox key={item.key || index} name={name} {...item} />
                    ))}
                </div>
                {helperText && <FieldHelperText children={helperText} />}
                {(validationState && validationMessage) && <FieldHelperText children={validationMessage} validationState={validationState} />}
            </CheckboxGroupContextProvider>
        </div>
    );
};

export default CheckboxGroup;
