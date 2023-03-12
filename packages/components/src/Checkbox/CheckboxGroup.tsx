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
        legend: legendStyleProps,
        body: bodyStyleProps,
    } = useCheckboxGroupStyles({ style, className, validationState });

    const contextValue = {
        name,
    };

    return (
        <fieldset {...rootStyleProps} {...restProps}>
            <CheckboxGroupContextProvider value={contextValue}>
                <div {...bodyStyleProps}>
                    {children && children}
                    {items.length > 0 && items.map((item, index) => (
                        <Checkbox key={item.key || index} name={name} {...item} />
                    ))}
                </div>
                {helperText && <FieldHelperText children={helperText} />}
                {(validationState && validationMessage) && <FieldHelperText children={validationMessage} validationState={validationState} />}
                {label && <legend {...legendStyleProps}>{label}</legend>}
            </CheckboxGroupContextProvider>
        </fieldset>
    );
};

export default CheckboxGroup;
