import React from 'react';
import { SvgIconProps } from '../../../../core/src/types';

const ArrowUpward = ({ size = 16, color = 'currentColor', ...rest }: SvgIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...rest}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
);

export default ArrowUpward;
