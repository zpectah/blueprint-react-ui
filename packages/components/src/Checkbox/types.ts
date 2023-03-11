import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps, WithValidationState, WithValidationMessage, WithHelperText } from '../../../core/src';

export type CheckboxElementProps = Omit<(BaseInputElementProps & DetailedInputElementProps), 'type'>;

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
