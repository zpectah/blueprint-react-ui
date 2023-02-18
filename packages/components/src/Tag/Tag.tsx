import React, { createElement, useMemo, forwardRef } from 'react';
import { TagProps } from './types';
import { useTagStyles } from './useTagStyles';
import { CloseIcon } from '../../../icons/src';

const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
    const { children, elementProps, style, className, onClick, onDismiss, dismissIcon } = props;

    const {
        root: rootStyleProps,
        label: labelClass,
        action: actionClass,
    } = useTagStyles({ style, className, onClick, onDismiss });

    const childrenNode = useMemo(() => {
        return (
            <>
                <span className={labelClass.className}>
                    {children}
                </span>
                {onDismiss && (
                    <span className={actionClass.className} onClick={onDismiss}>
                        {dismissIcon ? dismissIcon : <CloseIcon />}
                    </span>
                )}
            </>
        );
    }, [ children, onDismiss ]);

    return createElement(
        'div',
        {
            ...rootStyleProps,
            ...elementProps,
            onClick,
            role: (onClick || onDismiss) && 'button',
            ref,
        },
        childrenNode,
    );
});

export default Tag;
