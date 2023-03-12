import {
    useState,
    useMemo,
    FormEvent,
    HTMLAttributes,
    FormEventHandler,
} from 'react';
import { BaseInputElementProps, ChangeEventProps } from '../../../core/src';

export type UseNumberInputProps = Pick<BaseInputElementProps, 'value' | 'defaultValue' | 'step' | 'min' | 'max'> & {
    onChange?: FormEventHandler<HTMLAttributes<HTMLInputElement>>;
};
export type UseNumberInputReturn = {
    value: BaseInputElementProps['value'];
    defaultValue: BaseInputElementProps['defaultValue'];
    step: BaseInputElementProps['step'];
    min: BaseInputElementProps['min'];
    max: BaseInputElementProps['max'];
    onIncrement: () => void;
    onDecrement: () => void;
    onValueChange: FormEventHandler<HTMLAttributes<HTMLInputElement>>;
};

export const useNumberInput = (props: UseNumberInputProps): UseNumberInputReturn => {
    const { value, defaultValue, step, min, max, onChange } = props;

    const [controlledValue, setControlledValue] = useState<number>(Number(value));

    const stepValue = useMemo(() => Number(step) || 1, [ step ]);

    const incrementHandler = () => {
        const newValue = controlledValue + stepValue;
        const run = max ? (newValue <= Number(max)) : true;

        run && setControlledValue(newValue);
    };
    const decrementHandler = () => {
        const newValue = controlledValue - stepValue;
        const run = min ? (newValue >= Number(min)) : true;

        run && setControlledValue(newValue);
    };
    const changeHandler = (event: ChangeEventProps) => {
        const newValue = Number(event?.currentTarget?.value || controlledValue);
        setControlledValue(newValue);

        if (onChange) onChange(event as unknown as FormEvent<HTMLAttributes<HTMLInputElement>>);
    };

    return {
        value: controlledValue,
        defaultValue,
        step,
        min,
        max,
        onIncrement: incrementHandler,
        onDecrement: decrementHandler,
        onValueChange: (e) => changeHandler(e as unknown as ChangeEventProps),
    };
};
