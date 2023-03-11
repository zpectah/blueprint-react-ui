import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps, DetailedTextareaElementProps, BaseTextareaElementProps, WithValidationState } from '../../../core/src';

export interface WithTextInputMultiline {
    multiline?: boolean;
}

export type TextInputElementProps = (BaseInputElementProps & DetailedInputElementProps) & (BaseTextareaElementProps & DetailedTextareaElementProps);

export interface TextInputBaseProps extends TextInputElementProps, WithChildrenProps, WithStyleProps, WithValidationState, WithTextInputMultiline {}

export type TextInputProps = TextInputBaseProps;
