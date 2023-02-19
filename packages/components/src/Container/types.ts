import { ElementType } from 'react';
import { WithChildrenProps, PolymorphicComponentProps, BreakpointKey } from '../../../core/src';
import { ContainerElementTypeKey } from './enums';

export type ContainerElementType = keyof typeof ContainerElementTypeKey;
export type ContainerMaxWidthType = keyof typeof BreakpointKey | 'fluid';

export type ContainerBaseProps = {
    maxWidth?: ContainerMaxWidthType;
} & WithChildrenProps;

export type ContainerProps<E extends ContainerElementType & ElementType> = PolymorphicComponentProps<E, ContainerBaseProps> & ContainerBaseProps;
