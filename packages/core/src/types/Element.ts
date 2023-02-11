import { HTMLProps, DetailedHTMLProps, HTMLAttributes, ReactHTML, ReactNode } from 'react';

export type MixedReactHTMLProps = keyof ReactHTML | keyof ReactNode;

export type BaseElementProps = HTMLProps<HTMLAttributes<HTMLElement>>;
export type DetailedElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

// export type BaseStyleElementProps = HTMLProps<HTMLAttributes<HTMLStyleElement>>;
// export type DetailedStyleElementProps = DetailedHTMLProps<HTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;

export type BaseDivElementProps = HTMLProps<HTMLAttributes<HTMLDivElement>>;
export type DetailedDivElementProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type BaseAnchorElementProps = HTMLProps<HTMLAttributes<HTMLAnchorElement>>;
export type DetailedAnchorElementProps = DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export type BaseButtonElementProps = HTMLProps<HTMLAttributes<HTMLButtonElement>>;
export type DetailedButtonElementProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type BaseSpanElementProps = HTMLProps<HTMLAttributes<HTMLSpanElement>>;
export type DetailedSpanElementProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
