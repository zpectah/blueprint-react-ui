import React, {ElementType} from 'react';
import { useTextInputStyles } from './useTextInputStyles';
import { TextInputProps } from './types';

const TextInput = (props: TextInputProps) => {
    const { style, className, validationState, multiline, ...restProps } = props;

    const Element: ElementType = multiline ? 'textarea' : 'input';

    const { ...styleProps } = useTextInputStyles({ style, className, validationState, multiline });

    return <Element {...styleProps} {...restProps} />;
};

export default TextInput;
