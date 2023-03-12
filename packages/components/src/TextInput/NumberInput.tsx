import React, { ForwardedRef, forwardRef, createRef, MutableRefObject } from 'react';
import { NumberInputProps } from './types';
import { useNumberInputStyles } from './useNumberInputStyles';
import { useNumberInput } from './useNumberInput';
import TextInput from './TextInput';
import TextInputAdornment from './TextInputAdornment';
import { Button } from '../Button';

const NumberInput = (props: NumberInputProps, ref: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>) => {
    const {
        style,
        className,
        value = 0,
        defaultValue = 0,
        step,
        min,
        max,
        ...restProps
    } = props;

    const { ...styleProps } = useNumberInputStyles({ style, className });
    const { onIncrement, onDecrement, ...valueProps } = useNumberInput({ value, defaultValue, step, min, max });

    const elementReference = (ref || createRef()) as MutableRefObject<HTMLInputElement & HTMLTextAreaElement>;

    return (
        <TextInput
            type="number"
            ref={elementReference}
            startAdornment={
                <TextInputAdornment position="start">
                    <Button onClick={onDecrement}>-</Button>
                </TextInputAdornment>
            }
            endAdornment={
                <TextInputAdornment position="end">
                    <Button onClick={onIncrement}>+</Button>
                </TextInputAdornment>
            }
            {...valueProps}
            {...styleProps}
            {...restProps}
        />
    );
};

export default forwardRef<(HTMLInputElement & HTMLTextAreaElement), NumberInputProps>(NumberInput);
