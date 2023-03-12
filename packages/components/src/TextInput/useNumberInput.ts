import { useState, useMemo } from 'react';
import { BaseInputElementProps } from '../../../core/src';

export type UseNumberInputProps = Pick<BaseInputElementProps, 'value' | 'defaultValue' | 'step' | 'min' | 'max'>;
export type UseNumberInputReturn = UseNumberInputProps & {
    onIncrement: () => void;
    onDecrement: () => void;
};

export const useNumberInput = (props: UseNumberInputProps): UseNumberInputReturn => {
    const { value, defaultValue, step, min, max } = props;

    const [controlledValue, setControlledValue] = useState<number>(Number(value || defaultValue));

    const stepValue = useMemo(() => Number(step) || 1, []);

    const incrementHandler = () => setControlledValue(controlledValue + stepValue);
    const decrementHandler = () => setControlledValue(controlledValue - stepValue);

    return {
        value: controlledValue,
        step,
        min,
        max,
        onIncrement: incrementHandler,
        onDecrement: decrementHandler,
    };
};
