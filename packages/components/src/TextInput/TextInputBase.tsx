import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import { useTextInputBaseStyles } from './useTextInputBaseStyles';
import { TextInputBaseProps } from './types';

const TextInputBase = (
    props: TextInputBaseProps,
    ref: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>,
) => {
    const { style, className, validationState, multiline, ...restProps } = props;

    const Element: ElementType = multiline ? 'textarea' : 'input';

    const { ...styleProps } = useTextInputBaseStyles({ style, className, validationState, multiline });

    return <Element ref={ref} {...styleProps} {...restProps} />;
};

export default forwardRef(TextInputBase);
