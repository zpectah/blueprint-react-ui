import {
    WithChildrenProps,
    WithStyleProps,
    CombinedInputElementProps,
    WithValidationState,
    WithValidationMessage,
    WithHelperText,
} from '../../../core/src';

export type CheckboxElementProps = Omit<CombinedInputElementProps, 'type'>;

export interface CheckboxBaseProps extends CheckboxElementProps, WithStyleProps, WithValidationState {}

export type CheckboxProps = CheckboxBaseProps & WithChildrenProps & {
    label?: string;
};

export interface CheckboxGroupBaseProps extends WithChildrenProps, WithStyleProps, WithValidationState, WithValidationMessage, WithHelperText {
    label?: string;
    items?: CheckboxProps[];
    name?: string;
}

export type CheckboxGroupProps = CheckboxGroupBaseProps;
