import { WithChildrenProps, WithStyleProps, DetailedTextareaElementProps, BaseTextareaElementProps, WithValidationState } from '../../../core/src';

export type TextAreaElementProps = BaseTextareaElementProps & DetailedTextareaElementProps;

export interface TextAreaBaseProps extends TextAreaElementProps, WithChildrenProps, WithStyleProps, WithValidationState {}

export type TextAreaProps = TextAreaBaseProps;
