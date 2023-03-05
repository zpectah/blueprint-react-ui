import React, { useMemo } from 'react';
import { PolymorphicElementType } from '../../../core/src';
import { ButtonProps, ButtonElementType, ButtonIntrinsicElements } from './types';
import { useButtonStyles } from './useButtonStyles';
import {
    BUTTON_DEFAULT_ELEMENT_TYPE,
    BUTTON_DEFAULT_COLOR,
    BUTTON_DEFAULT_VARIANT,
    BUTTON_DEFAULT_SIZE,
} from './const';

const Button = <E extends PolymorphicElementType<ButtonIntrinsicElements> | ButtonElementType>(props: ButtonProps<E>) => {
    const {
        as: Component = BUTTON_DEFAULT_ELEMENT_TYPE,
        color = BUTTON_DEFAULT_COLOR,
        variant = BUTTON_DEFAULT_VARIANT,
        size = BUTTON_DEFAULT_SIZE,
        style,
        className,
        children,
        iconStart,
        iconEnd,
        loading,
        disabled,
        fullWidth,
        ref,
        ...restProps
    } = props;

    const {
        root: rootStyleProps,
        label: textStyleProps,
        preloader: preloaderStyleProps,
        iconStart: iconStartStyleProps,
        iconEnd: iconEndStyleProps,
    } = useButtonStyles({ style, className, color, variant, size, loading, disabled, fullWidth });

    const disabledState = useMemo(() => (loading || disabled), [ loading, disabled ]);

    const childrenNode = useMemo(() => (
        <>
            {iconStart && <span className={iconStartStyleProps.className}>{iconStart}</span>}
            <span className={textStyleProps.className}>{children}</span>
            {iconEnd && <span className={iconEndStyleProps.className}>{iconEnd}</span>}
            {loading && <span className={preloaderStyleProps.className}>loading...</span>}
        </>
    ), [ children, iconStart, iconEnd, loading ]);

    return (
        <Component
            {...rootStyleProps}
            {...restProps}
            disabled={disabledState}
            ref={ref}
        >
            {childrenNode}
        </Component>
    );
};

export default Button;
