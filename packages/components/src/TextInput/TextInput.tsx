import React, { ForwardedRef, forwardRef } from 'react';
import { TextInputProps } from './types';
import { useTextInputStyles } from './useTextInputStyles';
import TextInputBase from './TextInputBase';

const TextInput = (props: TextInputProps, ref: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>) => {
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
            <TextInputBase ref={ref} validationState={validationState} {...rootStyleProps} {...restProps} />
            {endAdornment && endAdornment}
        </div>
    );
};

export default forwardRef<(HTMLInputElement & HTMLTextAreaElement), TextInputProps>(TextInput);
