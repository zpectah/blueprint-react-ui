import { SVGProps, MouseEventHandler } from 'react';

export type SvgElement = SVGProps<SVGSVGElement>;

export interface IconProps extends SvgElement {
    size?: string | number;
    color?: string;
    onClick?: MouseEventHandler<SVGSVGElement | HTMLElement> | undefined;
}
