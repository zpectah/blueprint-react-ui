import React, {useMemo, forwardRef, ForwardedRef} from 'react';
import { PolymorphicElementType } from '../../../core/src';
import { ButtonProps, ButtonElementType, ButtonIntrinsicElements } from './types';
import { useButtonStyles } from './useButtonStyles';

const Button = forwardRef(<E extends PolymorphicElementType<ButtonIntrinsicElements> | ButtonElementType>(props: ButtonProps<E>, ref: ForwardedRef<HTMLButtonElement & HTMLAnchorElement>) => {
    const {
        as: Component = 'button',
        color = 'primary',
        variant = 'contained',
        size = 'md',
        style,
        className,
        children,
        iconBefore,
        iconAfter,
        loading,
        disabled,
        fullWidth,
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
});

export default Button;
