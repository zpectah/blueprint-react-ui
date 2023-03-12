import React from 'react';
import { useSwitchGroupStyles } from './useSwitchGroupStyles';
import { SwitchGroupProps } from './types';
import { FieldHelperText } from '../FieldHelperText';
import Switch from './Switch';
import { SwitchGroupContextProvider } from './SwitchGroupContext';

const SwitchGroup = (props: SwitchGroupProps) => {
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
    } = useSwitchGroupStyles({ style, className, validationState });

    const contextValue = {
        name,
    };

    return (
        <fieldset {...rootStyleProps} {...restProps}>
            <SwitchGroupContextProvider value={contextValue}>
                <div {...bodyStyleProps}>
                    {children && children}
                    {items.length > 0 && items.map((item, index) => (
                        <Switch key={item.key || index} name={name} {...item} />
                    ))}
                </div>
                {helperText && <FieldHelperText children={helperText} />}
                {(validationState && validationMessage) && <FieldHelperText children={validationMessage} validationState={validationState} />}
                {label && <legend {...legendStyleProps}>{label}</legend>}
            </SwitchGroupContextProvider>
        </fieldset>
    );
};

export default SwitchGroup;
