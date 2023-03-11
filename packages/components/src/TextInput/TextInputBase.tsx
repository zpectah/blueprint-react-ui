import React, { ElementType } from 'react';
import { useTextInputBaseStyles } from './useTextInputBaseStyles';
import { TextInputBaseProps } from './types';

const TextInputBase = (props: TextInputBaseProps) => {
    const { style, className, validationState, multiline, ...restProps } = props;

    const Element: ElementType = multiline ? 'textarea' : 'input';

    const { ...styleProps } = useTextInputBaseStyles({ style, className, validationState, multiline });

    return <Element {...styleProps} {...restProps} />;
};

export default TextInputBase;
