import { ElementType, ComponentPropsWithRef } from 'react';
import { WithChildrenProps } from '../../../core/src/types';
import { BlockElementTypeKey } from './enums';

export type BlockElementType = keyof typeof BlockElementTypeKey;

export type BlockBaseProps<E extends ElementType = BlockElementType> = {
    /** Block element type */
    as?: E;
} & WithChildrenProps;

export type BlockProps<E extends ElementType = BlockElementType> = BlockBaseProps<E> & Omit<ComponentPropsWithRef<E>, keyof BlockBaseProps<E>>;
