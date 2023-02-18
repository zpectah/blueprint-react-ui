import { ElementType } from 'react';
import { WithChildrenProps, PolymorphicComponentProps } from '../../../core/src/types';
import { BoxElementTypeKey } from './enums';

export type BoxElementType = keyof typeof BoxElementTypeKey;

export type BoxBaseProps = WithChildrenProps;

export type BoxProps<E extends BoxElementType & ElementType> = PolymorphicComponentProps<E, BoxBaseProps> & BoxBaseProps;
