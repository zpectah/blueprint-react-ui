import { WithChildrenProps, WithStyleProps, DetailedInputElementProps, BaseInputElementProps } from '../../../core/src/types';

export type TextInputElementProps = BaseInputElementProps & DetailedInputElementProps;

export type TextInputBaseProps = TextInputElementProps & WithChildrenProps & WithStyleProps;

export type TextInputProps = TextInputBaseProps;
