import { ElementType, ComponentPropsWithRef } from 'react';
import { WithChildrenProps } from '../../../core/src/types';
import { TextElementTypeKey } from './enums';

export type TextElementType = keyof typeof TextElementTypeKey;

export type TextBaseProps<E extends ElementType = TextElementType> = {
    /** Text element type */
    as?: E;
} & WithChildrenProps;

export type TextProps<E extends ElementType = TextElementType> = TextBaseProps<E> & Omit<ComponentPropsWithRef<E>, keyof TextBaseProps<E>>;
