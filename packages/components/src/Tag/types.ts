import { ReactNode } from 'react';
import { WithChildrenProps, SizeMinimalType, ClickEventProps, WithStyleProps, DetailedDivElementProps, SafeHTMLDataAttributeProps } from '../../../core/src/types';

export type TagBaseProps = {
    size?: SizeMinimalType;
    elementProps?: Omit<DetailedDivElementProps & SafeHTMLDataAttributeProps, 'onClick' | 'style' | 'className'>;
    onClick?: (event: ClickEventProps) => void;
    onDismiss?: (event: ClickEventProps) => void;
    dismissIcon?: ReactNode;
} & WithChildrenProps & WithStyleProps;

export type TagProps = TagBaseProps;
