import { CSSProperties } from 'react';

export interface WithStyleProps {
    style?: CSSProperties;
    className?: string;
}

export interface WithRequiredStyleProps {
    style: CSSProperties;
    className: string;
}
