import {
    CombinedInputElementProps,
    WithChildrenProps,
    WithHelperText,
    WithStyleProps,
    WithValidationMessage,
    WithValidationState
} from '../../../core/src';

export type CheckboxElementProps = Omit<CombinedInputElementProps, 'type'>;

export interface SwitchBaseProps extends CheckboxElementProps, WithStyleProps, WithValidationState {}

export type SwitchProps = SwitchBaseProps & WithChildrenProps & {
    label?: string;
};

export interface SwitchGroupBaseProps extends WithChildrenProps, WithStyleProps, WithValidationState, WithValidationMessage, WithHelperText {
    label?: string;
    items?: SwitchProps[];
    name?: string;
}

export type SwitchGroupProps = SwitchGroupBaseProps;
