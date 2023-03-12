import { ForwardedRef, MutableRefObject, ReactNode } from 'react';
import {
    WithChildrenProps,
    SizeBaseType,
    ClickEventProps,
    WithStyleProps,
    DetailedDivElementProps,
    WithSafeDataAttributeProps,
    ColorEmotionKey,
    TagShapeVariantKeys,
} from '../../../core/src';

export type TagVariantType = keyof typeof TagShapeVariantKeys;
export type TagColorType = keyof typeof ColorEmotionKey;
export type TagSizeType = SizeBaseType;

export type TagBaseProps = {
    size?: TagSizeType;
    variant?: TagVariantType;
    color?: TagColorType;
    elementProps?: Omit<DetailedDivElementProps & WithSafeDataAttributeProps, 'onClick' | 'style' | 'className'>;
    onClick?: (event: ClickEventProps) => void;
    onDismiss?: (event: ClickEventProps, rootRef: MutableRefObject<ForwardedRef<HTMLDivElement>>) => void;
    dismissIcon?: ReactNode;
    closeLabel?: string;
    disabled?: boolean;
} & WithChildrenProps & WithStyleProps;

export type TagProps = TagBaseProps;
