import { ReactNode } from 'react';
import { WithStyleProps } from '../../../core/src/types';

export type BadgeBaseProps = WithStyleProps & {
    label?: ReactNode;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
};

export type BadgeProps = BadgeBaseProps;
