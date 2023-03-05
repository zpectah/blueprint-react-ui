import { WithChildrenProps, WithStyleProps, DetailedTextareaElementProps, BaseTextareaElementProps } from '../../../core/src/types';

export type TextAreaElementProps = BaseTextareaElementProps & DetailedTextareaElementProps;

export type TextAreaBaseProps = TextAreaElementProps & WithChildrenProps & WithStyleProps;

export type TextAreaProps = TextAreaBaseProps;
