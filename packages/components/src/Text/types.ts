import { ElementType } from 'react';
import { WithChildrenProps, PolymorphicComponentProps } from '../../../core/src/types';
import { TextElementTypeKey } from './enums';

export type TextElementType = keyof typeof TextElementTypeKey;

export type TextBaseProps = WithChildrenProps;

export type TextProps<E extends TextElementType & ElementType> = PolymorphicComponentProps<E, TextBaseProps> & TextBaseProps;
