import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps, DetailedTextareaElementProps, BaseTextareaElementProps, WithValidationState } from '../../../core/src';

export type TextInputElementProps = (BaseInputElementProps & DetailedInputElementProps) & (BaseTextareaElementProps & DetailedTextareaElementProps);

export interface TextInputBaseProps extends TextInputElementProps, WithChildrenProps, WithStyleProps, WithValidationState {
    multiline?: boolean;
}

export type TextInputProps = TextInputBaseProps;
