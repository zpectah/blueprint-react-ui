import { WithChildrenProps, WithStyleProps, DetailedLabelElementProps, BaseLabelElementProps } from '../../../core/src/types';

export type FieldLabelElementProps = BaseLabelElementProps & DetailedLabelElementProps;

export type FieldLabelBaseProps = FieldLabelElementProps & WithChildrenProps & WithStyleProps;

export type FieldLabelProps = FieldLabelBaseProps;
