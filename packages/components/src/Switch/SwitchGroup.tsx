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
        label: labelStyleProps,
        body: bodyStyleProps,
    } = useSwitchGroupStyles({ style, className, validationState });

    const contextValue = {
        name,
    };

    return (
        <div {...rootStyleProps} {...restProps}>
            <SwitchGroupContextProvider value={contextValue}>
                {label && (
                    <span {...labelStyleProps}>{label}</span>
                )}
                <div {...bodyStyleProps}>
                    {children && children}
                    {items.length > 0 && items.map((item, index) => (
                        <Switch key={item.key || index} name={name} {...item} />
                    ))}
                </div>
                {helperText && <FieldHelperText children={helperText} />}
                {(validationState && validationMessage) && <FieldHelperText children={validationMessage} validationState={validationState} />}
            </SwitchGroupContextProvider>
        </div>
    );
};

export default SwitchGroup;
