import React, { createElement, useMemo, forwardRef, useCallback, useRef } from 'react';
import { ClickEventProps } from '../../../core/src';
import { TagProps } from './types';
import { useTagStyles } from './useTagStyles';
import { CloseIcon } from '../../../icons/src';
import {
    TAG_DEFAULT_ELEMENT_TYPE,
    TAG_DEFAULT_ELEMENT_ROLE,
    TAG_DEFAULT_CLOSE_LABEL,
    TAG_DEFAULT_COLOR,
    TAG_DEFAULT_VARIANT,
    TAG_DEFAULT_SIZE,
} from './const';

const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
    const {
        children,
        elementProps,
        style,
        className,
        onClick,
        onDismiss,
        dismissIcon,
        closeLabel = TAG_DEFAULT_CLOSE_LABEL,
        color = TAG_DEFAULT_COLOR,
        variant = TAG_DEFAULT_VARIANT,
        size = TAG_DEFAULT_SIZE,
        disabled,
    } = props;

    const rootElementRef = useRef(ref);

    const {
        root: rootStyleProps,
        label: labelClass,
        action: actionClass,
    } = useTagStyles({ style, className, onClick, onDismiss, color, variant, size, disabled });

    const clickHandler = useCallback((event: ClickEventProps) => (!disabled && onClick) && onClick(event), [ disabled, onClick ]);
    const dismissHandler = useCallback((event: ClickEventProps) => (!disabled && onDismiss) && onDismiss(event, rootElementRef), [ disabled, onDismiss, rootElementRef ]);

    const childrenNode = useMemo(() => {
        return (
            <>
                <span className={labelClass.className}>
                    {children}
                </span>
                {onDismiss && (
                    <span
                        className={actionClass.className}
                        onClick={dismissHandler}
                        aria-label={closeLabel}
                    >
                        {dismissIcon ? dismissIcon : <CloseIcon />}
                    </span>
                )}
            </>
        );
    }, [ children, onDismiss ]);

    return createElement(
        TAG_DEFAULT_ELEMENT_TYPE,
        {
            ...rootStyleProps,
            ...elementProps,
            onClick: clickHandler,
            role: (onClick || onDismiss) && TAG_DEFAULT_ELEMENT_ROLE,
            ref: rootElementRef,
        },
        childrenNode,
    );
});

export default Tag;
