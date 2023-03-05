import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { WithChildrenProps, PolymorphicComponentProps, PolymorphicElementType, SizeBaseType } from '../../../core/src/types';
import { ColorBaseKey } from '../../../core/src';
import { ButtonElementTypeKey, ButtonVariantKey } from './enums';

export type ButtonElementType = keyof typeof ButtonElementTypeKey;
export type ButtonVariantType = keyof typeof ButtonVariantKey;
export type ButtonColorType = keyof typeof ColorBaseKey;

export type ButtonIntrinsicElements = {
    a: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
};

export type ButtonBaseProps = {
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    color?: ButtonColorType;
    variant?: ButtonVariantType;
    size?: SizeBaseType;
    fullWidth?: boolean;
} & WithChildrenProps;

export type ButtonProps<E extends PolymorphicElementType<ButtonIntrinsicElements> | ButtonElementType> = PolymorphicComponentProps<E, ButtonBaseProps> & ButtonBaseProps;
