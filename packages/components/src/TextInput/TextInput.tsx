import React from 'react';
import { TextInputProps } from './types';
import { useTextInputStyles } from './useTextInputStyles';
import TextInputBase from './TextInputBase';

const TextInput = (props: TextInputProps) => {
    const {
        style,
        className,
        validationState,
        startAdornment,
        endAdornment,
        ...restProps
    } = props;

    const {
        root: rootStyleProps,
        control: controlStyleProps,
        adornmentStart: adornmentStartStyles,
        adornmentEnd: adornmentEndStyles,
    } = useTextInputStyles({
        style,
        className,
        validationState,
        isStartAdornment: !!startAdornment,
        isEndAdornment: !!endAdornment,
    });

    return (
        <div {...controlStyleProps}>
            {startAdornment && (
                <div {...adornmentStartStyles}>{startAdornment}</div>
            )}
            <TextInputBase validationState={validationState} {...rootStyleProps} {...restProps} />
            {endAdornment && (
                <div {...adornmentEndStyles}>{endAdornment}</div>
            )}
        </div>
    );
};

export default TextInput;
