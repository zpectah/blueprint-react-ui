import React, { useMemo, forwardRef, LegacyRef } from 'react';
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
        iconBefore,
        iconAfter,
        loading,
        disabled,
        fullWidth,
        ref,
        ...restProps
    } = props;

    const {
        root: rootStyleProps,
        label: textClass,
        preloader: preloaderClass,
        iconBefore: iconBeforeClass,
        iconAfter: iconAfterClass,
    } = useButtonStyles({ style, className, color, variant, size, loading, disabled, fullWidth });

    const disabledState = useMemo(() => (loading || disabled), [ loading, disabled ]);

    const childrenNode = useMemo(() => (
        <>
            {iconBefore && <span className={iconBeforeClass.className}>{iconBefore}</span>}
            <span className={textClass.className}>{children}</span>
            {iconAfter && <span className={iconAfterClass.className}>{iconAfter}</span>}
            {loading && <span className={preloaderClass.className}>loading...</span>}
        </>
    ), [ children, iconBefore, iconAfter, loading ]);

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
