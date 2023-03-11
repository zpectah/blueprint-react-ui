import { ReactNode } from 'react';
import { WithStyleProps, WithChildrenProps, ColorEmotionKey, SizeBaseType, DetailedDivElementProps } from '../../../core/src';

export type BadgeColorType = keyof typeof ColorEmotionKey;

export interface BadgeBaseProps extends WithStyleProps, WithChildrenProps {
    label?: ReactNode;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    color?: BadgeColorType;
    size?: SizeBaseType;
    elementProps?: Partial<DetailedDivElementProps>;
}

export type BadgeProps = BadgeBaseProps;
