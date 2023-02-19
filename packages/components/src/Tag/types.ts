import { ForwardedRef, MutableRefObject, ReactNode } from 'react';
import {
    WithChildrenProps,
    SizeBaseType,
    ClickEventProps,
    WithStyleProps,
    DetailedDivElementProps,
    SafeHTMLDataAttributeProps,
    ColorBaseKey,
} from '../../../core/src';
import { TagVariantKey } from './enums';

export type TagVariantType = keyof typeof TagVariantKey;
export type TagColorType = keyof typeof ColorBaseKey;
export type TagSizeType = SizeBaseType;

export type TagBaseProps = {
    size?: TagSizeType;
    variant?: TagVariantType;
    color?: TagColorType;
    elementProps?: Omit<DetailedDivElementProps & SafeHTMLDataAttributeProps, 'onClick' | 'style' | 'className'>;
    onClick?: (event: ClickEventProps) => void;
    onDismiss?: (event: ClickEventProps, rootRef: MutableRefObject<ForwardedRef<HTMLDivElement>>) => void;
    dismissIcon?: ReactNode;
    closeLabel?: string;
    disabled?: boolean;
} & WithChildrenProps & WithStyleProps;

export type TagProps = TagBaseProps;
