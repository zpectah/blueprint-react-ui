import {
    WithChildrenProps,
    WithStyleProps,
    CombinedInputElementProps,
    WithValidationState,
    WithValidationMessage,
    WithHelperText,
} from '../../../core/src';

export type RadioElementProps = Omit<CombinedInputElementProps, 'type'>;

export interface RadioBaseProps extends RadioElementProps, WithStyleProps, WithValidationState {}

export type RadioProps = RadioBaseProps & WithChildrenProps & {
    label?: string;
};

export interface RadioGroupBaseProps extends WithChildrenProps, WithStyleProps, WithValidationState, WithValidationMessage, WithHelperText {
    label?: string;
    items?: RadioProps[];
    name?: string;
}

export type RadioGroupProps = RadioGroupBaseProps;
