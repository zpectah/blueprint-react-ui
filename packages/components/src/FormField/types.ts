import { WithChildrenProps, WithStyleProps, WithValidationState, WithValidationMessage, WithHelperText } from '../../../core/src';

export interface FormFieldBaseProps extends WithChildrenProps, WithStyleProps, WithValidationState, WithValidationMessage, WithHelperText {
    label?: string;
    labelPosition?: 'horizontal' | 'vertical';
    required?: boolean;
    disableLabelValidationState?: boolean;
}

export type FormFieldProps = FormFieldBaseProps;
