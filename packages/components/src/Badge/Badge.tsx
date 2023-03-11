import React from 'react';
import { useBadgeStyles } from './useBadgeStyles';
import { BadgeProps } from './types';

const Badge = (props: BadgeProps) => {
    const { style, className, label, iconStart, iconEnd, elementProps, ...restProps } = props;

    const {
        root: rootStyleProps,
        label: labelStyleProps,
        iconStart: iconStartStyleProps,
        iconEnd: iconEndStyleProps,
    } = useBadgeStyles({ style, className });

    return (
        <div {...rootStyleProps} {...elementProps} {...restProps}>
            {iconStart && <span {...iconStartStyleProps}>{iconStart}</span>}
            {label && <span {...labelStyleProps}>{label}</span>}
            {iconEnd && <span {...iconEndStyleProps}>{iconEnd}</span>}
        </div>
    );
};

export default Badge;
