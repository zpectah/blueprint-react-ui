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

export type BaseProps<E> = HTMLProps<HTMLAttributes<E>>;
export type DetailedProps<E> = DetailedHTMLProps<HTMLAttributes<E>, E>;
export type CombinedProps<E> = DetailedProps<E> & BaseProps<E>;

export type MixedReactHTMLProps = keyof ReactHTML | keyof ReactNode;

export type BaseElementProps = BaseProps<HTMLElement>;
export type DetailedElementProps = DetailedProps<HTMLElement>;
export type CombinedElementProps = CombinedProps<HTMLElement>;

export type BaseStyleElementProps = BaseProps<HTMLStyleElement>;
export type DetailedStyleElementProps = DetailedProps<HTMLStyleElement>;
export type CombinedStyleElementProps = CombinedProps<HTMLStyleElement>;

export type BaseDivElementProps = BaseProps<HTMLDivElement>;
export type DetailedDivElementProps = DetailedProps<HTMLDivElement>;
export type CombinedDivElementProps = CombinedProps<HTMLDivElement>;

export type BaseAnchorElementProps = BaseProps<HTMLAnchorElement>;
export type DetailedAnchorElementProps = DetailedProps<HTMLAnchorElement>;
export type CombinedAnchorElementProps = CombinedProps<HTMLAnchorElement>;

export type BaseButtonElementProps = BaseProps<HTMLButtonElement>;
export type DetailedButtonElementProps = DetailedProps<HTMLButtonElement>;
export type CombinedButtonElementProps = CombinedProps<HTMLButtonElement>;

export type BaseSpanElementProps = BaseProps<HTMLSpanElement>;
export type DetailedSpanElementProps = DetailedProps<HTMLSpanElement>;
export type CombinedSpanElementProps = CombinedProps<HTMLSpanElement>;

export type BaseLabelElementProps = BaseProps<HTMLLabelElement>;
export type DetailedLabelElementProps = DetailedProps<HTMLLabelElement>;
export type CombinedLabelElementProps = CombinedProps<HTMLLabelElement>;

export type BaseInputElementProps = BaseProps<HTMLInputElement>;
export type DetailedInputElementProps = DetailedProps<HTMLInputElement>;
export type CombinedInputElementProps = CombinedProps<HTMLInputElement>;

export type BaseTextareaElementProps = BaseProps<HTMLTextAreaElement>;
export type DetailedTextareaElementProps = DetailedProps<HTMLTextAreaElement>;
export type CombinedTextareaElementProps = CombinedProps<HTMLTextAreaElement>;

export type BaseSelectElementProps = BaseProps<HTMLSelectElement>;
export type DetailedSelectElementProps = DetailedProps<HTMLSelectElement>;
export type CombinedSelectElementProps = CombinedProps<HTMLSelectElement>;

export type BaseOptionGroupElementProps = BaseProps<HTMLOptGroupElement>;
export type DetailedOptionGroupElementProps = DetailedProps<HTMLOptGroupElement>;
export type CombinedOptionGroupElementProps = CombinedProps<HTMLOptGroupElement>;

export type BaseOptionElementProps = BaseProps<HTMLOptionElement>;
export type DetailedOptionElementProps = DetailedProps<HTMLOptionElement>;
export type CombinedOptionElementProps = CombinedProps<HTMLOptionElement>;

export type BaseFieldsetElementProps = BaseProps<HTMLFieldSetElement>;
export type DetailedFieldsetElementProps = DetailedProps<HTMLFieldSetElement>;
export type CombinedFieldsetElementProps = CombinedProps<HTMLFieldSetElement>;

export type BaseLegendElementProps = BaseProps<HTMLLegendElement>;
export type DetailedLegendElementProps = DetailedProps<HTMLLegendElement>;
export type CombinedLegendElementProps = CombinedProps<HTMLLegendElement>;

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
