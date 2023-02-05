import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { TextElementTypeKey } from './enums';

export type TextElementType = keyof typeof TextElementTypeKey;

export type TextProps<C extends TextElementType> = {
    /** Children node */
    children?: ReactNode;
    /** Element type */
    as?: C;
} & ComponentPropsWithoutRef<C>;
