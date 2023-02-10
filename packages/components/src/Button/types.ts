import { ElementType, ComponentPropsWithRef } from 'react';
import { WithChildrenProps } from '../../../core/src/types';
import { ButtonElementTypeKey } from './enums';

export type ButtonElementType = keyof typeof ButtonElementTypeKey;

export type ButtonBaseProps<E extends ElementType = ButtonElementType> = {
    /** Button element type */
    as?: E;
} & WithChildrenProps;

export type ButtonProps<E extends ElementType = ButtonElementType> = ButtonBaseProps<E> & Omit<ComponentPropsWithRef<E>, keyof ButtonBaseProps<E>>;
