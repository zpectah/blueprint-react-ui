import { WithChildrenProps, WithStyleProps, DetailedLabelElementProps, BaseLabelElementProps, ValidationStateType } from '../../../core/src/types';

export type FieldLabelElementProps = BaseLabelElementProps & DetailedLabelElementProps;

export type FieldLabelBaseProps = FieldLabelElementProps & WithChildrenProps & WithStyleProps & {
    validationState?: ValidationStateType;
};

export type FieldLabelProps = FieldLabelBaseProps;
