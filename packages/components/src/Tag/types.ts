import { ElementType, ComponentPropsWithRef } from 'react';
import { WithChildrenProps, SizeMinimalType, ClickEventProps } from '../../../core/src/types';
import { TagElementTypeKey } from './enums';

export type TagElementType = keyof typeof TagElementTypeKey;

export type TagBaseProps<E extends ElementType = TagElementType> = {
    size?: SizeMinimalType;
    elementProps?: ComponentPropsWithRef<E>;
    onClick?: (event: ClickEventProps) => void;
    onDismiss?: (event: ClickEventProps) => void;
} & WithChildrenProps;

export type TagProps = TagBaseProps;
