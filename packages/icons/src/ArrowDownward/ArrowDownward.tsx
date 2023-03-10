import React from 'react';
import { SvgIconProps } from '../../../core/src/types';

const ArrowDownward = ({ size = 16, color = 'currentColor', ...rest }: SvgIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </svg>
);

export default ArrowDownward;
