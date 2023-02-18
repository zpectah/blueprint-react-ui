import { ElementType } from 'react';
import { WithChildrenProps, PolymorphicComponentProps } from '../../../core/src/types';
import { StackElementTypeKey } from './enums';

export type StackElementType = keyof typeof StackElementTypeKey;

export type StackBaseProps = WithChildrenProps;

export type StackProps<E extends StackElementType & ElementType> = PolymorphicComponentProps<E, StackBaseProps> & StackBaseProps;
