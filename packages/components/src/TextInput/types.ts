import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps, DetailedTextareaElementProps, BaseTextareaElementProps, WithValidationState } from '../../../core/src';

export interface WithTextInputMultiline {
    multiline?: boolean;
}

export type TextInputElementProps = (BaseInputElementProps & DetailedInputElementProps) & (BaseTextareaElementProps & DetailedTextareaElementProps) & WithValidationState & WithTextInputMultiline;

export interface TextInputBaseProps extends TextInputElementProps, WithChildrenProps, WithStyleProps {}

export type TextInputProps = TextInputBaseProps;
