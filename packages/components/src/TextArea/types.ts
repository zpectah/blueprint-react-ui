import {
    WithStyleProps,
    CombinedTextareaElementProps,
    WithValidationState,
} from '../../../core/src';

export type TextAreaElementProps = CombinedTextareaElementProps;

export interface TextAreaBaseProps extends TextAreaElementProps, WithStyleProps, WithValidationState {}

export type TextAreaProps = TextAreaBaseProps;
