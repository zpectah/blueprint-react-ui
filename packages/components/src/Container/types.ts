import { ElementType } from 'react';
import { WithChildrenProps, PolymorphicComponentProps } from '../../../core/src/types';
import { ContainerElementTypeKey } from './enums';

export type ContainerElementType = keyof typeof ContainerElementTypeKey;

export type ContainerBaseProps = WithChildrenProps;

export type ContainerProps<E extends ContainerElementType & ElementType> = PolymorphicComponentProps<E, ContainerBaseProps> & ContainerBaseProps;
