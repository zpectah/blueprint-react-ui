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
        legend: legendStyleProps,
        body: bodyStyleProps,
    } = useRadioGroupStyles({ style, className, validationState });

    const contextValue = {
        name,
    };

    return (
        <fieldset {...rootStyleProps} {...restProps}>
            <RadioGroupContextProvider value={contextValue}>
                <div {...bodyStyleProps}>
                    {children && children}
                    {items.length > 0 && items.map((item, index) => (
                        <Radio key={item.key || index} name={name} {...item} />
                    ))}
                </div>
                {helperText && <FieldHelperText children={helperText} />}
                {(validationState && validationMessage) && <FieldHelperText children={validationMessage} validationState={validationState} />}
                {label && <legend {...legendStyleProps}>{label}</legend>}
            </RadioGroupContextProvider>
        </fieldset>
    );
};

export default CheckboxGroup;
