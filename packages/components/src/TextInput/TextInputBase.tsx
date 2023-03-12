import React, { ElementType, ForwardedRef, forwardRef, ChangeEventHandler } from 'react';
import { useTextInputBaseStyles } from './useTextInputBaseStyles';
import { TextInputBaseProps } from './types';

const TextInputBase = (
    props: TextInputBaseProps,
    ref: ForwardedRef<HTMLInputElement & HTMLTextAreaElement>,
) => {
    const { style, className, validationState, multiline, onChange, ...restProps } = props;

    const Element: ElementType = multiline ? 'textarea' : 'input';

    const { ...styleProps } = useTextInputBaseStyles({ style, className, validationState, multiline });

    return <Element ref={ref} onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>} {...styleProps} {...restProps} />;
};

export default forwardRef(TextInputBase);
