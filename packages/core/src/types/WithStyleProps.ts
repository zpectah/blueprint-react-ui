import { CSSProperties } from 'react';

export interface WithRequiredStyleProps {
    /** CSS Properties */
    style: CSSProperties;
    /** Class name */
    className: string;
}

export type WithStyleProps = Partial<WithRequiredStyleProps>;
