import { WithChildrenProps, WithStyleProps, DetailedLabelElementProps, BaseLabelElementProps, WithValidationState } from '../../../core/src/types';

export type FieldLabelElementProps = BaseLabelElementProps & DetailedLabelElementProps;

export interface FieldLabelBaseProps extends FieldLabelElementProps, WithChildrenProps, WithStyleProps, WithValidationState {}

export type FieldLabelProps = FieldLabelBaseProps;
