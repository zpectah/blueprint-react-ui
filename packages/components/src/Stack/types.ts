import { ElementType, ComponentPropsWithRef } from 'react';
import { WithChildrenProps } from '../../../core/src/types';
import { StackElementTypeKey } from './enums';

export type StackElementType = keyof typeof StackElementTypeKey;

export type StackBaseProps<E extends ElementType = StackElementType> = {
    /** Stack element type */
    as?: E;
} & WithChildrenProps;

export type StackProps<E extends ElementType = StackElementType> = StackBaseProps<E> & Omit<ComponentPropsWithRef<E>, keyof StackBaseProps<E>>;
