import { ElementType, ComponentPropsWithRef } from 'react';
import { WithChildrenProps } from '../../../core/src/types';
import { ContainerElementTypeKey } from './enums';

export type ContainerElementType = keyof typeof ContainerElementTypeKey;

export type ContainerBaseProps<E extends ElementType = ContainerElementType> = {
    /** Container element type */
    as?: E;
} & WithChildrenProps;

export type ContainerProps<E extends ElementType = ContainerElementType> = ContainerBaseProps<E> & Omit<ComponentPropsWithRef<E>, keyof ContainerBaseProps<E>>;
