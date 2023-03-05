import {
    HTMLProps,
    DetailedHTMLProps,
    HTMLAttributes,
    ReactHTML,
    ReactNode,
    ElementType,
    ComponentPropsWithRef,
    ComponentType,
} from 'react';

export type MixedReactHTMLProps = keyof ReactHTML | keyof ReactNode;

export type BaseElementProps = HTMLProps<HTMLAttributes<HTMLElement>>;
export type DetailedElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type BaseStyleElementProps = HTMLProps<HTMLAttributes<HTMLStyleElement>>;
export type DetailedStyleElementProps = DetailedHTMLProps<HTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;

export type BaseDivElementProps = HTMLProps<HTMLAttributes<HTMLDivElement>>;
export type DetailedDivElementProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type BaseAnchorElementProps = HTMLProps<HTMLAttributes<HTMLAnchorElement>>;
export type DetailedAnchorElementProps = DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export type BaseButtonElementProps = HTMLProps<HTMLAttributes<HTMLButtonElement>>;
export type DetailedButtonElementProps = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type BaseSpanElementProps = HTMLProps<HTMLAttributes<HTMLSpanElement>>;
export type DetailedSpanElementProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type BaseLabelElementProps = HTMLProps<HTMLAttributes<HTMLLabelElement>>;
export type DetailedLabelElementProps = DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export type BaseInputElementProps = HTMLProps<HTMLAttributes<HTMLInputElement>>;
export type DetailedInputElementProps = DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type BaseTextareaElementProps = HTMLProps<HTMLAttributes<HTMLTextAreaElement>>;
export type DetailedTextareaElementProps = DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export type BaseSelectElementProps = HTMLProps<HTMLAttributes<HTMLSelectElement>>;
export type DetailedSelectElementProps = DetailedHTMLProps<HTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export type BaseOptionGroupElementProps = HTMLProps<HTMLAttributes<HTMLOptGroupElement>>;
export type DetailedOptionGroupElementProps = DetailedHTMLProps<HTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;

export type BaseOptionElementProps = HTMLProps<HTMLAttributes<HTMLOptionElement>>;
export type DetailedOptionElementProps = DetailedHTMLProps<HTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;

export type AsProps<E extends ElementType> = {
    as?: E;
};

export type PropsToOmit<E extends ElementType, P> = keyof (AsProps<E> & P);

export type PolymorphicComponentProps<E extends ElementType, P> = AsProps<E> & Omit<ComponentPropsWithRef<E>, PropsToOmit<E, P>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PolymorphicElementType<E = JSX.IntrinsicElements, P = any> = { [K in keyof E]: P extends E[K] ? K : never }[keyof E] | ComponentType<P>;

export type DataAttributeKeyType = `data-${string}`;

export type SafeHTMLDataAttributeProps = {
    [k: DataAttributeKeyType]: string | number;
}
