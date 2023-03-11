import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps, WithValidationState, WithValidationMessage, WithHelperText } from '../../../core/src';

export type CheckboxElementProps = Omit<(BaseInputElementProps & DetailedInputElementProps), 'type'> & WithValidationState;

export interface CheckboxBaseProps extends CheckboxElementProps, WithStyleProps {
    label?: string;
}

export type CheckboxProps = CheckboxBaseProps & WithChildrenProps;

export interface CheckboxGroupBaseProps extends WithChildrenProps, WithStyleProps, WithValidationState, WithValidationMessage, WithHelperText {
    label?: string;
    items?: CheckboxProps[];
    name?: string;
}

export type CheckboxGroupProps = CheckboxGroupBaseProps;
