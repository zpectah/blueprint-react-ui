import { ElementType } from 'react';
import { WithChildrenProps, PolymorphicComponentProps } from '../../../core/src/types';

export type BlockBaseProps = WithChildrenProps;

export type BlockProps<E extends ElementType> = PolymorphicComponentProps<E, BlockBaseProps> & BlockBaseProps;
