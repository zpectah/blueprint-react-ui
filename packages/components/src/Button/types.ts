import { ElementType } from 'react';
import {WithChildrenProps, PolymorphicComponentProps } from '../../../core/src/types';
import { ButtonElementTypeKey } from './enums';

export type ButtonElementType = keyof typeof ButtonElementTypeKey;

export type ButtonBaseProps = WithChildrenProps;

export type ButtonProps<E extends ButtonElementType & ElementType> = PolymorphicComponentProps<E, ButtonBaseProps> & ButtonBaseProps;
