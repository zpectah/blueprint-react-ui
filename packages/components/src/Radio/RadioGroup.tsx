import React from 'react';
import { useRadioGroupStyles } from './useRadioGroupStyles';
import { RadioGroupProps } from './types';
import { FieldHelperText } from '../FieldHelperText';
import Radio from './Radio';
import { RadioGroupContextProvider } from './RadioGroupContext';

const CheckboxGroup = (props: RadioGroupProps) => {
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
    } = useRadioGroupStyles({ style, className, validationState });

    const contextValue = {
        name,
    };

    return (
        <div {...rootStyleProps} {...restProps}>
            <RadioGroupContextProvider value={contextValue}>
                {label && (
                    <span {...labelStyleProps}>{label}</span>
                )}
                <div {...bodyStyleProps}>
                    {children && children}
                    {items.length > 0 && items.map((item, index) => (
                        <Radio key={item.key || index} name={name} {...item} />
                    ))}
                </div>
                {helperText && <FieldHelperText children={helperText} />}
                {(validationState && validationMessage) && <FieldHelperText children={validationMessage} validationState={validationState} />}
            </RadioGroupContextProvider>
        </div>
    );
};

export default CheckboxGroup;
