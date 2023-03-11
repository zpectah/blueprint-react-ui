import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps, WithValidationState } from '../../../core/src';

export type CheckboxElementProps = Omit<(BaseInputElementProps & DetailedInputElementProps), 'type'> & WithValidationState;

export interface CheckboxBaseProps extends CheckboxElementProps, WithStyleProps {
    label?: string;
}

export type CheckboxProps = CheckboxBaseProps & WithChildrenProps;
