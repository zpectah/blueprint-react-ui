import { CSSProperties } from 'react';

export interface WithStyleProps {
    /** CSS Properties */
    style?: CSSProperties;
    /** Class name */
    className?: string;
}

export interface WithRequiredStyleProps {
    /** CSS Properties */
    style: CSSProperties;
    /** Class name */
    className: string;
}
