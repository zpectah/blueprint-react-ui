import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { WithChildrenProps, SizeMinimalType, ClickEventProps, WithStyleProps } from '../../../core/src/types';

export type TagBaseProps = {
    size?: SizeMinimalType;
    elementProps?: Omit<ComponentPropsWithoutRef<'div'>, 'onClick' | 'style' | 'className'>;
    onClick?: (event: ClickEventProps) => void;
    onDismiss?: (event: ClickEventProps) => void;
    dismissIcon?: ReactNode;
} & WithChildrenProps & WithStyleProps;

export type TagProps = TagBaseProps;
