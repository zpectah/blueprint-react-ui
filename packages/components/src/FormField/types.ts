import { WithChildrenProps, WithStyleProps, ValidationStateType } from '../../../core/src/types';

export type FormFieldBaseProps = WithChildrenProps & WithStyleProps & {
    label?: string;
    labelPosition?: 'horizontal' | 'vertical';
    required?: boolean;
    helperText?: string;
    validationMessage?: string;
    validationState?: ValidationStateType;
    disableLabelValidationState?: boolean;
};

export type FormFieldProps = FormFieldBaseProps;
