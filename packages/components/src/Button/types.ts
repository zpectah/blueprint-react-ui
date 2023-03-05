import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import {
    WithChildrenProps,
    PolymorphicComponentProps,
    PolymorphicElementType,
    SizeBaseType,
    ColorEmotionKey,
    ButtonShapeVariantKeys,
} from '../../../core/src';
import { ButtonElementTypeKey } from './enums';

export type ButtonElementType = keyof typeof ButtonElementTypeKey;
export type ButtonVariantType = keyof typeof ButtonShapeVariantKeys;
export type ButtonColorType = keyof typeof ColorEmotionKey;

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
