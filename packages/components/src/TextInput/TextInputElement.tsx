import React, { ElementType } from 'react';
import { useTextInputElementStyles } from './useTextInputElementStyles';
import { TextInputElementProps } from './types';

const TextInputElement = (props: TextInputElementProps) => {
    const { style, className, validationState, multiline, ...restProps } = props;

    const Element: ElementType = multiline ? 'textarea' : 'input';

    const { ...styleProps } = useTextInputElementStyles({ style, className, validationState, multiline });

    return <Element {...styleProps} {...restProps} />;
};

export default TextInputElement;
