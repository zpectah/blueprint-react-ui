import {
    WithChildrenProps,
    WithStyleProps,
    DetailedInputElementProps,
    BaseInputElementProps,
    WithValidationState,
    WithValidationMessage,
    WithHelperText,
} from '../../../core/src';

export type RadioElementProps = Omit<(BaseInputElementProps & DetailedInputElementProps), 'type'> & WithValidationState;

export interface RadioBaseProps extends RadioElementProps, WithChildrenProps, WithStyleProps {
    label?: string;
}

export type RadioProps = RadioBaseProps;

export interface RadioGroupBaseProps extends WithChildrenProps, WithStyleProps, WithValidationState, WithValidationMessage, WithHelperText {
    label?: string;
    items?: RadioProps[];
    name?: string;
}

export type RadioGroupProps = RadioGroupBaseProps;
