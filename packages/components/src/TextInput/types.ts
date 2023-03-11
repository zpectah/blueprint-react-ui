import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps, WithValidationState } from '../../../core/src';

export type TextInputElementProps = BaseInputElementProps & DetailedInputElementProps;

export interface TextInputBaseProps extends TextInputElementProps, WithChildrenProps, WithStyleProps, WithValidationState {}

export type TextInputProps = TextInputBaseProps;
