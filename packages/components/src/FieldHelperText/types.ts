import { WithChildrenProps, WithStyleProps, ValidationStateType } from '../../../core/src/types';

export type FieldHelperTextBaseProps = WithChildrenProps & WithStyleProps & {
    validationState?: ValidationStateType;
};

export type FieldHelperTextProps = FieldHelperTextBaseProps;
