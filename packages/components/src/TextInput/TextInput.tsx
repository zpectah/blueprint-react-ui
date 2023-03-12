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
    } = useTextInputStyles({
        style,
        className,
        validationState,
        isStartAdornment: !!startAdornment,
        isEndAdornment: !!endAdornment,
    });

    return (
        <div {...controlStyleProps}>
            {startAdornment && startAdornment}
            <TextInputBase validationState={validationState} {...rootStyleProps} {...restProps} />
            {endAdornment && endAdornment}
        </div>
    );
};

export default TextInput;
